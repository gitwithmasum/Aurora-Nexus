package com.masumbillah.auroranexus;

import android.Manifest;
import android.content.ContentResolver;
import android.database.Cursor;
import android.net.Uri;
import android.os.Build;
import android.util.Base64;
import android.provider.MediaStore;

import java.io.ByteArrayOutputStream;
import java.io.InputStream;

import com.getcapacitor.JSArray;
import com.getcapacitor.JSObject;
import com.getcapacitor.PermissionState;
import com.getcapacitor.Plugin;
import com.getcapacitor.PluginCall;
import com.getcapacitor.annotation.CapacitorPlugin;
import com.getcapacitor.annotation.Permission;
import com.getcapacitor.annotation.PermissionCallback;
import com.getcapacitor.PluginMethod;

@CapacitorPlugin(
    name = "AuroraMedia",
    permissions = {
        @Permission(
            alias = "audioModern",
            strings = {
                Manifest.permission.READ_MEDIA_AUDIO
            }
        ),
        @Permission(
            alias = "audioLegacy",
            strings = {
                Manifest.permission.READ_EXTERNAL_STORAGE
            }
        )
    }
)
public class AuroraMediaPlugin extends Plugin {

    private String getAudioPermissionAlias() {

        if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.TIRAMISU) {
            return "audioModern";
        }

        return "audioLegacy";
    }

    @PluginMethod
    public void getSongs(PluginCall call) {

        String permissionAlias =
            getAudioPermissionAlias();

        if (
            getPermissionState(permissionAlias)
                != PermissionState.GRANTED
        ) {

            requestPermissionForAlias(
                permissionAlias,
                call,
                "audioPermissionCallback"
            );

            return;
        }

        loadSongs(call);
    }

    @PermissionCallback
    private void audioPermissionCallback(
        PluginCall call
    ) {

        String permissionAlias =
            getAudioPermissionAlias();

        if (
            getPermissionState(permissionAlias)
                == PermissionState.GRANTED
        ) {

            loadSongs(call);

        } else {

            call.reject(
                "Music and audio permission is required."
            );
        }
    }

    private void loadSongs(PluginCall call) {

        JSArray songs = new JSArray();

        ContentResolver resolver =
            getContext().getContentResolver();

        String[] projection = {

            MediaStore.Audio.Media._ID,
            MediaStore.Audio.Media.TITLE,
            MediaStore.Audio.Media.ARTIST,
            MediaStore.Audio.Media.ALBUM,
            MediaStore.Audio.Media.ALBUM_ID,
            MediaStore.Audio.Media.DURATION,
            MediaStore.Audio.Media.MIME_TYPE,
            MediaStore.Audio.Media.IS_MUSIC
        };

        String selection =
            MediaStore.Audio.Media.IS_MUSIC + " != 0";

        String sortOrder =
            MediaStore.Audio.Media.TITLE +
            " COLLATE NOCASE ASC";

        Uri collection;

        if (
            Build.VERSION.SDK_INT >=
            Build.VERSION_CODES.Q
        ) {

            collection =
                MediaStore.Audio.Media.getContentUri(
                    MediaStore.VOLUME_EXTERNAL
                );

        } else {

            collection =
                MediaStore.Audio.Media.EXTERNAL_CONTENT_URI;
        }

        try (
            Cursor cursor =
                resolver.query(
                    collection,
                    projection,
                    selection,
                    null,
                    sortOrder
                )
        ) {

            if (cursor == null) {

                call.reject(
                    "Unable to read device music library."
                );

                return;
            }

            int idIndex =
                cursor.getColumnIndexOrThrow(
                    MediaStore.Audio.Media._ID
                );

            int titleIndex =
                cursor.getColumnIndexOrThrow(
                    MediaStore.Audio.Media.TITLE
                );

            int artistIndex =
                cursor.getColumnIndexOrThrow(
                    MediaStore.Audio.Media.ARTIST
                );

            int albumIndex =
                cursor.getColumnIndexOrThrow(
                    MediaStore.Audio.Media.ALBUM
                );

            int albumIdIndex =
                cursor.getColumnIndexOrThrow(
                    MediaStore.Audio.Media.ALBUM_ID
                );

            int durationIndex =
                cursor.getColumnIndexOrThrow(
                    MediaStore.Audio.Media.DURATION
                );

            int mimeIndex =
                cursor.getColumnIndexOrThrow(
                    MediaStore.Audio.Media.MIME_TYPE
                );

            while (cursor.moveToNext()) {

                long id =
                    cursor.getLong(idIndex);

                String title =
                    cursor.getString(titleIndex);

                String artist =
                    cursor.getString(artistIndex);

                String album =
                    cursor.getString(albumIndex);

                long albumId =
                    cursor.getLong(albumIdIndex);

                long duration =
                    cursor.getLong(durationIndex);

                String mimeType =
                    cursor.getString(mimeIndex);

                Uri songUri =
                    Uri.withAppendedPath(
                        collection,
                        String.valueOf(id)
                    );

                JSObject song =
                    new JSObject();

                song.put(
                    "id",
                    id
                );

                song.put(
                    "title",
                    title == null
                        ? "Unknown Song"
                        : title
                );

                song.put(
                    "artist",
                    artist == null
                        ? "Unknown Artist"
                        : artist
                );

                song.put(
                    "album",
                    album == null
                        ? "Unknown Album"
                        : album
                );

                song.put(
                    "duration",
                    duration
                );

                song.put(
                    "mimeType",
                    mimeType == null
                        ? "audio/*"
                        : mimeType
                );

                song.put(
                    "uri",
                    songUri.toString()
                );

                song.put(
                    "albumArtUri",
                    ""
                );

                songs.put(song);
            }

            JSObject result =
                new JSObject();

            result.put(
                "media",
                songs
            );

            result.put(
                "count",
                songs.length()
            );

            call.resolve(result);

        } catch (Exception error) {

            call.reject(
                "Failed to scan device music: "
                + error.getMessage()
            );
        }
    }

    /*
     * =========================================
     * GET DEVICE AUDIO / ARTWORK
     * =========================================
     */

    @PluginMethod
    public void getMediaData(PluginCall call) {

        String uriString =
            call.getString("uri");

        String mimeType =
            call.getString(
                "mimeType",
                "audio/*"
            );

        if (
            uriString == null ||
            uriString.isEmpty()
        ) {

            call.reject(
                "Media URI is missing."
            );

            return;
        }

        try {

            Uri uri =
                Uri.parse(uriString);

            ContentResolver resolver =
                getContext().getContentResolver();

            InputStream inputStream =
                resolver.openInputStream(uri);

            if (inputStream == null) {

                call.reject(
                    "Unable to open media."
                );

                return;
            }

            ByteArrayOutputStream output =
                new ByteArrayOutputStream();

            byte[] buffer =
                new byte[8192];

            int bytesRead;

            while (
                (bytesRead =
                    inputStream.read(buffer))
                    != -1
            ) {

                output.write(
                    buffer,
                    0,
                    bytesRead
                );
            }

            inputStream.close();

            byte[] data =
                output.toByteArray();

            String base64 =
                Base64.encodeToString(
                    data,
                    Base64.NO_WRAP
                );

            JSObject result =
                new JSObject();

            result.put(
                "data",
                base64
            );

            result.put(
                "mimeType",
                mimeType
            );

            call.resolve(result);

        } catch (Exception error) {

            call.reject(
                "Unable to read media: "
                + error.getMessage()
            );
        }
    }
}
