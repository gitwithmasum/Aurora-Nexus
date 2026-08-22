/*=====================================================
  AURORA NEXUS — ANDROID DEVICE MUSIC LIBRARY
  Scans the phone's audio library through Android MediaStore
=====================================================*/

(function () {
    "use strict";

    let mediaStore = null;

    function isAndroidApp() {
        return !!(
            window.Capacitor &&
            typeof window.Capacitor.getPlatform === "function" &&
            window.Capacitor.getPlatform() === "android"
        );
    }

    function getMediaStore() {
        if (mediaStore) return mediaStore;

        if (
            !window.Capacitor ||
            typeof window.Capacitor.registerPlugin !== "function"
        ) {
            return null;
        }

        try {
            mediaStore = window.Capacitor.registerPlugin(
                "AuroraMedia"
            );

            return mediaStore;

        } catch (error) {

            console.error(
                "Aurora Nexus MediaStore registration failed:",
                error
            );

            return null;
        }
    }

    function formatDuration(ms) {

        const totalSeconds = Math.max(
            0,
            Math.floor(Number(ms || 0) / 1000)
        );

        const minutes =
            Math.floor(totalSeconds / 60);

        const seconds =
            String(totalSeconds % 60)
                .padStart(2, "0");

        return `${minutes}:${seconds}`;
    }

    function cleanTitle(file) {

        const raw = (
            file.title ||
            file.displayName ||
            "Unknown Song"
        ).trim();

        return raw.replace(
            /\.(mp3|m4a|aac|wav|flac|ogg|opus)$/i,
            ""
        );
    }

    function cleanArtist(file) {

        return (
            file.artist ||
            file.albumArtist ||
            "Unknown Artist"
        ).trim();
    }

    async function loadDeviceMusic() {

        if (!isAndroidApp()) return;

        const store = getMediaStore();

        if (!store) {

            console.warn(
                "Aurora Nexus MediaStore plugin unavailable."
            );

            return;
        }

        try {

            const result =
            await store.getSongs();

            const media =
                Array.isArray(result?.media)
                    ? result.media
                    : [];

            const existingIds =
                new Set(
                    songs.map(song =>
                        String(song.id)
                    )
                );

            let added = 0;

            media.forEach((file, index) => {

                if (!file?.uri) return;

                const id =
                    `device-${file.id || index}`;

                if (
                    existingIds.has(
                        String(id)
                    )
                ) {
                    return;
                }

                songs.push({

                    id,

                    title:
                        cleanTitle(file),

                    artist:
                        cleanArtist(file),

                    album:
                        file.album ||
                        "Unknown Album",

                    cover:
                        file.albumArtUri ||
                        "./assets/images/default-cover.jpg",

                    src:
                        file.uri,

                    lrc: "",

                    duration:
                        formatDuration(
                            file.duration
                        ),

                    favorite: false,

                    recent: false,

                    trending: false,

                    deviceSong: true,

                    mediaId: file.id,

                    isExternal:
                        !!file.isExternal

                });

                added++;

            });

            if (
                typeof renderPlaylist ===
                "function"
            ) {
                renderPlaylist();
            }

            if (
                typeof updateMusicStats ===
                "function"
            ) {
                updateMusicStats();
            }

            console.log(
                `Aurora Nexus: ${media.length} device songs found, ${added} added.`
            );

            if (
                typeof showToast ===
                "function"
            ) {

                showToast(
                    `🎵 ${media.length} device songs found`
                );

            }

        } catch (error) {

            console.error(
                "Aurora Nexus device music scan failed:",
                error
            );

            if (
                typeof showToast ===
                "function"
            ) {

                showToast(
                    "🎵 Allow music access to scan device songs"
                );

            }
        }
    }

    function watchDeviceMusic() {

        const store =
            getMediaStore();

        if (
            !store ||
            typeof store.addListener !==
            "function"
        ) {
            return;
        }

        store.addListener(
            "mediaChanged",
            async event => {

                if (
                    !event?.file ||
                    event.file.mediaType !==
                    "audio"
                ) {
                    return;
                }

                await loadDeviceMusic();

            }
        );
    }

    function initDeviceMusic() {

        if (!isAndroidApp()) return;

        setTimeout(
            async () => {

                await loadDeviceMusic();

                watchDeviceMusic();

            },
            1200
        );
    }

    window.AuroraDeviceMusic = {

        scan: loadDeviceMusic

    };

    if (
        document.readyState ===
        "loading"
    ) {

        document.addEventListener(
            "DOMContentLoaded",
            initDeviceMusic,
            { once: true }
        );

    } else {

        initDeviceMusic();

    }

})();
