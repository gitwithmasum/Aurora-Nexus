# 🎵 Aurora Nexus

### A futuristic music player and device music experience

**Aurora Nexus** is a modern, futuristic music player designed to provide a premium audio experience with a beautiful UI, device music scanning, album artwork, audio visualization, and Android media integration.

The project combines a web-based music interface with native Android functionality to access and play music stored on the user's device.

---

## ✨ Features

### 🎧 Music Player

* Play / Pause music
* Previous / Next track
* Seek bar
* Current time and duration display
* Volume control
* Repeat mode
* Shuffle mode
* Active song highlighting
* Dynamic playlist rendering

### 📱 Device Music Library

Aurora Nexus can scan the Android device's music library and retrieve:

* Song title
* Artist name
* Album name
* Duration
* MIME type
* Media URI
* Album ID
* Device music count

The Android native layer uses `MediaStore` to access locally stored audio files.

### 🖼️ Album Artwork

Aurora Nexus supports retrieving album artwork from the Android device's media library.

Album artwork can be:

* Retrieved from the Android MediaStore
* Converted to Base64
* Returned to JavaScript
* Displayed dynamically inside the music player

### 🌌 Audio Visualizer

The player includes a real-time audio visualization experience using the Web Audio API.

Visualizer features include:

* Frequency-based visualization
* Animated spectrum
* Bass-responsive effects
* Neon-style visual effects
* Dynamic canvas rendering
* Music-synchronized animation

### 🎛️ Modern Music Controls

Aurora Nexus includes a futuristic control system with:

* Volume knob
* Volume percentage display
* Shuffle button
* Repeat button
* Playback controls
* Interactive progress bar
* Animated UI feedback

### 🎤 Voice Control

The project is designed to support voice-based music interaction, allowing commands such as:

```text
Play Believer
Play Faded
Pause music
Next song
```

### 💾 Local Storage

Aurora Nexus can preserve selected player preferences locally, including:

* Last played song
* Volume
* Theme
* Player state

### 🎨 Futuristic UI

The interface focuses on a futuristic audio experience with:

* Glassmorphism
* Neon-inspired visuals
* Animated backgrounds
* Responsive layouts
* Album artwork presentation
* Music visualizer
* Premium control animations

---

# 🏗️ Project Architecture

Aurora Nexus combines a web frontend with native Android functionality.

```text
Aurora Nexus
│
├── www/
│   ├── index.html
│   ├── style.css
│   ├── script.js
│   └── assets/
│       ├── images/
│       └── music/
│
├── android/
│   └── app/
│       └── src/
│           └── main/
│               └── java/
│                   └── com/
│                       └── masumbillah/
│                           └── auroranexus/
│                               └── AuroraMediaPlugin.java
│
├── resources/
│   └── Android app icon/source assets
│
└── README.md
```

---

# 🔧 Technologies Used

## Frontend

* HTML5
* CSS3
* JavaScript
* Web Audio API
* Canvas API
* Local Storage

## Android

* Java
* Android MediaStore
* Android ContentResolver
* Capacitor Plugin API
* Android Permissions API
* Base64 media processing

## Development Tools

* Visual Studio Code
* Git
* GitHub
* Gradle
* Node.js
* Capacitor

---

# 📱 Android Media Integration

Aurora Nexus uses a custom native Capacitor plugin:

```text
AuroraMedia
```

The plugin provides native Android functionality to the web interface.

### Available native methods

```text
getSongs()
```

Scans the Android device's music library.

```text
getMediaData()
```

Reads media data from a device media URI and returns it as Base64 data.

```text
getAlbumArt()
```

Retrieves album artwork using an Android album ID.

---

# 🔐 Permissions

Aurora Nexus requests access to the user's audio library.

### Android 13+

```text
READ_MEDIA_AUDIO
```

### Older Android versions

```text
READ_EXTERNAL_STORAGE
```

Permissions are requested dynamically depending on the Android version.

---

# 🚀 Getting Started

## 1. Clone the repository

```bash
git clone https://github.com/gitwithmasum/Aurora-Nexus.git
```

## 2. Enter the project

```bash
cd Aurora-Nexus
```

## 3. Install dependencies

```bash
npm install
```

## 4. Sync Capacitor

```bash
npx cap sync android
```

## 5. Build Android

```bash
cd android
./gradlew assembleDebug
```

On Windows:

```powershell
.\gradlew.bat assembleDebug
```

---

# 🧪 Development

For web development, serve the `www/` directory with a local development server.

For Android builds, this repository includes a GitHub Actions workflow. It builds the debug APK automatically for pull requests and pushes to `main`, and it can also be started manually with `workflow_dispatch`.

---

# 📂 Music Assets

For bundled/local project music, assets can be organized as:

```text
assets/
└── music/
    ├── believer.mp3
    ├── faded.mp3
    └── alone.mp3
```

Album artwork:

```text
assets/
└── images/
    ├── believer.jpg
    ├── faded.jpg
    └── alone.jpg
```

---

# 🎵 Example Music Data

A typical song object can contain:

```javascript
{
    title: "Believer",
    artist: "Imagine Dragons",
    album: "Evolve",
    src: "www/assets/music/believer.mp3",
    cover: "www/assets/images/believer.jpg"
}
```

---

# 🧠 How Device Music Scanning Works

The Android native plugin uses:

```text
MediaStore.Audio.Media
```

to query the device's audio database.

The process is approximately:

```text
User opens Aurora Nexus
        ↓
Request audio permission
        ↓
Permission granted
        ↓
Query Android MediaStore
        ↓
Read music metadata
        ↓
Create song objects
        ↓
Send data to JavaScript
        ↓
Render device music library
        ↓
User selects a song
        ↓
Play through Aurora Nexus
```

---

# 🖼️ Album Artwork Flow

```text
Album ID
   ↓
Android MediaStore
   ↓
Album artwork URI
   ↓
ContentResolver
   ↓
InputStream
   ↓
Byte Array
   ↓
Base64
   ↓
JavaScript
   ↓
Album Cover UI
```

---

# 🌐 Web Audio API

Aurora Nexus uses the Web Audio API to analyze audio frequency data.

The general flow is:

```text
Audio
 ↓
AudioContext
 ↓
AnalyserNode
 ↓
Frequency Data
 ↓
Canvas
 ↓
Real-time Visualizer
```

The analyser provides frequency information that can be used to create synchronized visual effects.

---

# 🎨 UI Concept

Aurora Nexus follows a futuristic audio-interface concept.

The visual design focuses on:

* Immersive music playback
* Glassmorphism
* Neon aesthetics
* Dynamic motion
* Audio-reactive visuals
* Minimal but powerful controls

The goal is to make the music player feel more like an **interactive audio experience** rather than a traditional media player.

---

# 🔄 Git Workflow

Recommended workflow:

```bash
git pull --rebase origin main
```

Make changes and test them.

Then:

```bash
git add .
git commit -m "Describe your changes"
git push origin main
```

Before pushing, check for unresolved merge markers:

```powershell
git grep -n -E "^(<<<<<<<|=======|>>>>>>>)" -- "*.java" "*.js" "*.html" "*.css"
```

No output should normally be returned.

---

# ⚠️ Troubleshooting

## Git push rejected

If Git reports:

```text
rejected (fetch first)
```

use:

```bash
git pull --rebase origin main
```

Resolve any conflicts, then:

```bash
git add .
git rebase --continue
git push origin main
```

---

## Java build error

If Gradle reports:

```text
JAVA_HOME is not set
```

install a compatible JDK and configure:

```text
JAVA_HOME
```

Then verify:

```bash
java -version
```

and:

```bash
javac -version
```

---

## Conflict markers in Java

If the source contains:

```text
<<<<<<< HEAD
=======
>>>>>>> commit
```

these are Git conflict markers and **must not remain in Java source code**.

Resolve the conflict and remove all markers before building.

---

# 🔒 Privacy

Aurora Nexus accesses device audio only when the required Android permission is granted.

The application should clearly communicate why media access is required and should avoid accessing unrelated personal data.

---

# 🛣️ Future Roadmap

Potential future improvements include:

* [ ] Advanced audio equalizer
* [ ] Preset equalizer profiles
* [ ] Bass boost
* [ ] 3D audio effects
* [ ] Advanced circular spectrum
* [ ] AI music assistant
* [ ] Smart playlist generation
* [ ] Voice-controlled navigation
* [ ] Lyrics integration
* [ ] Music recommendations
* [ ] Offline-first PWA experience
* [ ] Installable Android/PWA experience
* [ ] Improved album artwork caching
* [ ] Crossfade playback
* [ ] Gapless playback
* [ ] Media notification controls
* [ ] Lock-screen playback controls
* [ ] Android background playback
* [ ] Chromecast / Cast integration

---

# 👨‍💻 Developer

**Masum Billah**

GitHub:

https://github.com/gitwithmasum

Aurora Nexus:

https://github.com/gitwithmasum/Aurora-Nexus

---

# 📜 License

This project is currently under development.

Add an appropriate open-source license before distributing Aurora Nexus publicly.

---

## ⭐ Aurora Nexus

> **Listen. Visualize. Experience.**

Aurora Nexus is more than a music player — it is an experimental futuristic music experience built around the intersection of **web technology, native Android media, and real-time audio visualization**.
