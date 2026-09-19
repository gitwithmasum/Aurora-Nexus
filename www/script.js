/*====================================
        AURORA NEXUS || Neural Audio Experience
=====================================*/

/*====================================
        DOM ELEMENTS
=====================================*/
const bgLayer =
    document.getElementById("bg-layer");

const audio =
    document.getElementById("audio");

const nextAudio =
    document.getElementById("audio-next");

const albumCover =
    document.getElementById("album-cover");

const songTitle =
    document.getElementById("song-title");

const artistName =
    document.getElementById("artist-name");

const progress =
    document.querySelector(".progress");

const currentTime =
    document.getElementById("current-time");

const duration =
    document.getElementById("duration");

const previousBtn =
    document.getElementById("previous");

const playBtn = document.getElementById("play");

const nextBtn =
    document.getElementById("next");

const shuffleBtn =
    document.getElementById("shuffle");

const repeatBtn =
    document.getElementById("repeat");

const volumeKnob = document.getElementById("volume-knob");

const volumeValue = document.getElementById("volume-value");

const volumeIcon = document.getElementById("volume-icon");

const volumeRing = document.getElementById("volume-ring");

const favoriteBtn =
    document.getElementById("favorite-btn");

const shareBtn =
    document.getElementById("share-btn");

const voiceBtn =
    document.getElementById("voice-btn");

const canvas =
    document.getElementById("visualizer");

const ctx =
    canvas.getContext("2d");

const player =
    document.querySelector(".player");

const playerLyricsBox =
    document.getElementById("player-lyrics-box");

const aiLyricsBox =
    document.getElementById("ai-lyrics-box");

const aiSong=document.getElementById("ai-song");

const aiArtist=document.getElementById("ai-artist");

const aiMood=document.getElementById("ai-mood");

const aiEnergy=document.getElementById("ai-energy");

const aiRecommend=document.getElementById("ai-recommend");

const aiStatus=document.getElementById("ai-status");

const memoryMessage=document.getElementById("memory-message");

const toast =
    document.getElementById("toast");

const toastMessage =
    document.getElementById("toast-message");

//const memoryMessage =
    //document.getElementById("memory-message");

const queueList =
    document.getElementById("queue-list");

const queueCount =
    document.getElementById("queue-count");


const playlist = document.getElementById("playlist");

const playlistCount = document.getElementById("playlist-count");

const searchSong = document.getElementById("search-song");

const eqSliders =
    document.querySelectorAll(".eq-slider");

//const presetButtons = document.querySelectorAll(".preset-btn");

//const navBtns = document.querySelectorAll(".nav-btn");

const equalizerPanel =
    document.getElementById("equalizer-panel");

const aiPanelScreen =
    document.getElementById("ai-panel-screen");
const settingsPanel =
    document.getElementById("settings-panel");

const eqCanvas =
    document.getElementById("eqCanvas");

const eqCtx =
    eqCanvas.getContext("2d");

const circleCanvas =
    document.getElementById("circle-spectrum");

const circleCtx =
    circleCanvas.getContext("2d");

const bassControl =
    document.getElementById("bass-control");

const trebleControl =
    document.getElementById("treble-control");

const balanceControl =
    document.getElementById("balance-control");

const masterControl =
    document.getElementById("master-control");

const spatialControl =
    document.getElementById("spatial-control");

const roomControl =
    document.getElementById("room-control");

const dockBtns =
    document.querySelectorAll(".dock-btn");

const dockPill =
    document.querySelector(".dock-pill");

const themePicker = document.getElementById("theme-picker");


const deviceMusicPanel =
    document.getElementById("device-music-panel");

const deviceMusicList =
    document.getElementById("device-music-list");

const deviceMusicStatus =
    document.getElementById("device-music-status");

const deviceMusicCount =
    document.getElementById("device-music-count");

const scanDeviceMusicBtn =
    document.getElementById("scan-device-music");

const scanDeviceMusicEmptyBtn =
    document.getElementById("scan-device-music-empty");



/*====================================
        SLEEP TIMER
====================================*/
const sleepButtons =
    document.querySelectorAll(".sleep-buttons button[data-time]");

const sleepStatus =
    document.querySelector(".sleep-status");

const cancelSleepBtn =
    document.getElementById("cancel-sleep");

const endSongBtn =
    document.getElementById("sleep-end-song");


/*====================================
        MUSIC STATISTICS
=====================================*/
const xpFill =
    document.getElementById("xp-fill");

const xpText =
    document.getElementById("xp-text");

const aiReport =
    document.getElementById("ai-report");


const recommendList = document.getElementById("recommend-list");



/*====================================
        MUSIC STATISTICS
=====================================*/
const statTotalSongs =
    document.getElementById("stat-total-songs");

const statListening =
    document.getElementById("stat-listening-time");

const statMostPlayed =
    document.getElementById("stat-most-played");

const statFavoriteArtist =
    document.getElementById("stat-favorite-artist");

const statDaily =
    document.getElementById("stat-daily");

const statWeekly =
    document.getElementById("stat-weekly");







/*=====================================================
                    GLOBAL VARIABLES ENGINE
=====================================================*/

/*------------------- CROSSFADE ENGINE-----------------*/

let activePlayer = audio;

let inactivePlayer = nextAudio;

let crossfadeDuration = 5000;

let isCrossfading = false;


/*-------------AUDIO MANAGER--------------------*/

const audioManager = {

    get current() {

        return activePlayer;

    },

    get standby() {

        return inactivePlayer;

    },

    swap() {

        const temp = activePlayer;

        activePlayer = inactivePlayer;

        inactivePlayer = temp;

    }

};




/*--------------------AURORA XP--------------------*/

let xp = 0;

let level = 1;



/*----------------MUSIC STATISTICS-----------------*/

let musicStats = {

    songsPlayed: 0,

    listeningTime: 0,

    mostPlayed: {},

    artistPlayed: {},

    todayListening: 0,

    weeklyListening: 0

};


/*-------------------SLEEP TIMER------------------------*/

let sleepTimer = null;
let sleepInterval = null;
let sleepSeconds = 0;

/*-------------- PLAYER --------------*/

let currentSong = 0;

let isPlaying = false;

let isShuffle = false;

let isRepeat = false;

let volume = 1;


/*-------------- PLAYLIST --------------*/

let currentFilter = "all";

let searchQuery = "";


/*-------------- QUEUE --------------*/

let playQueue = [];


/*----------------------REAL AUDIO DSP ENGINE--------------------------------*/

const EQ_FREQUENCIES = [

    32,
    64,
    125,
    250,
    500,
    1000,
    2000,
    4000,
    8000,
    16000

];

let eqFilters = [];

let stereoPanner = null;

let bassFilter = null;

let trebleFilter = null;

let compressor = null;

let masterGain = null;





let pulseRadius = 0;

const particles = [];





/*-------------- VISUALIZER --------------*/

let rotation = 0;

let audioContext = null;

let analyser = null;

let source = null;

let animationId = null;


/*-------------- VOICE ASSISTANT --------------*/

let recognition = null;

let isListening = false;


/*-------------- FAVORITES --------------*/

let favoriteSongs = [];


/*-------------- RECENTLY PLAYED --------------*/

let recentSongs = [];


/*-------------- STORAGE --------------*/

let playerState = {};


/*---------------BASS---------------------*/
let bass = 0;

/*------------------------NEBULA ENGINE--------------------------*/

const nebulaClouds = [];

for (let i = 0; i < 12; i++) {

    nebulaClouds.push({

        angle: Math.random() * Math.PI * 2,

        distance: 40 + Math.random() * 70,

        radius: 60 + Math.random() * 70,

        speed: .0008 + Math.random() * .0015,

        alpha: .08 + Math.random() * .12,

        color: [
            "#00F5FF",
            "#7C3AED",
            "#FF4DFF"
        ][Math.floor(Math.random() * 3)]

    });

}

/*-------------SPATIAL AUDIO-------------*/

let stereoWidener = null;

let roomGain = null;

let roomDelay = null;

/*-----------------------EQ WAVE VISUALIZER-----------------*/

let eqAnimationId;


let parsedLyrics = [];

let lastActiveIndex = -1;









/*====================================
        SONG DATABASE ENGINE
=====================================*/

const songs = [

    {
        id: 1,
        title: "Believer",
        artist: "Imagine Dragons",
        cover: "./assets/images/believer.jpg",
        src: "./assets/music/believer.mp3",
        lrc: "./assets/lyrics/believer.lrc",
        duration: "03:24",

        favorite: true,
        recent: true,
        trending: true

    },

    {
        id: 2,
        title: "Faded",
        artist: "Alan Walker",
        cover: "./assets/images/faded.jpg",
        src: "./assets/music/faded.mp3",
        lrc: "./assets/lyrics/faded.lrc",
        duration: "03:32",

        favorite: false,
        recent: true,
        trending: true

    },

    {
        id: 3,
        title: "Alone",
        artist: "Alan Walker",
        cover: "./assets/images/alone.jpg",
        src: "./assets/music/alone.mp3",
        lrc: "./assets/lyrics/alone.lrc",
        duration: "02:43",

        favorite: true,
        recent: false,
        trending: false

    }

];


/*====================================
        AI DATABASE ENGINE
=====================================*/

const aiDatabase = {

    "Believer": {

        mood: "🔥 High Energy",
        mode: "Workout Mode",
        bpm: 125,
        energy: "98%",
        color: "#ff4d4d",
        recommend: "Thunder"

    },

    "Faded": {

        mood: "🌙 Emotional",
        mode: "Night Drive",
        bpm: 90,
        energy: "72%",
        color: "#38BDF8",
        recommend: "Alone"

    },

    "Alone": {

        mood: "⚡ Electronic",
        mode: "Focus Mode",
        bpm: 97,
        energy: "84%",
        color: "#7C3AED",
        recommend: "Faded"

    }

};


/*====================================
        LYRICS DATABASE ENGINE
=====================================*/

const lyrics = {

    "Believer": [

        { time: 0, text: "🎵 Believer" },

        { time: 7, text: "First things first" },

        { time: 11, text: "I'ma say all the words inside my head" },

        { time: 18, text: "I'm fired up and tired" },

        { time: 25, text: "The way that things have been" },

        { time: 34, text: "Pain..." },

        { time: 40, text: "You made me a believer" }

    ],

    "Faded": [

        { time: 0, text: "🎵 Faded" },

        { time: 12, text: "You were the shadow to my light" },

        { time: 24, text: "Did you feel us?" },

        { time: 36, text: "Another star..." }

    ],

    "Alone": [

        { time: 0, text: "🎵 Alone" },

        { time: 15, text: "Lost in your mind..." }

    ]

};


/*=================================================================
                            PLAYER ENGINE
===================================================================*/

/*====================================
        PLAYER STATE
=====================================*/


audio.volume = 1;

let favorites = JSON.parse(
    localStorage.getItem("favorites")
) || [];



/*====================================
        PLAY ACTIVE PLAYER
=====================================*/

async function playActivePlayer() {

    if (audioContext && audioContext.state === "suspended") {
        await audioContext.resume();
    }

    activePlayer.volume = volume;

    try {
        await activePlayer.play();
    } catch (error) {
        console.error("Playback error:", error);
        isPlaying = false;
        throw error;
    }

}

/*====================================
        PLAY ENGINE
=====================================*/

async function playSong() {

    console.log("playSong called");

    musicStats.songsPlayed++;

    const currentSongData = songs[currentSong];
    await playActivePlayer();


    musicStats.mostPlayed[currentSongData.title] =
        (musicStats.mostPlayed[currentSongData.title] || 0) + 1;

    musicStats.artistPlayed[currentSongData.artist] =
        (musicStats.artistPlayed[currentSongData.artist] || 0) + 1;

    updateMusicStats();

    document
        .querySelector(".equalizer")
        .classList.add("playing");

    if (audioContext.state === "suspended") {

        audioContext.resume();

    }

    createEqualizer();

    try {
        await playActivePlayer();
    } catch (error) {
        return;
    }

    isPlaying = true;

    albumCover.classList.add("playing");

    playBtn.innerHTML =
        '<i class="fa-solid fa-pause"></i>';

    showToast(
        "🎵 Playing " +
        songs[currentSong].title
    );

    savePlayerState();

}

/*====================================
        PREVIOUS SONG
=====================================*/

function previousSong() {

    if (isCrossfading) return;

    const prevIndex =

        (currentSong - 1 + songs.length)

        %

        songs.length;

    startCrossfade(prevIndex);

}

/*====================================
        PAUSE SONG
=====================================*/

function pauseSong() {

    document
        .querySelector(".equalizer")
        .classList.remove("playing");

    activePlayer.pause();

    isPlaying = false;

    albumCover.classList.remove("playing");

    playBtn.innerHTML =
        '<i class="fa-solid fa-play"></i>';

    showToast("⏸ Music Paused");

    savePlayerState();

}

playBtn.addEventListener("click", () => {

    if (isPlaying) {

        pauseSong();

        /*==============================
                AURORA CAST
        ==============================*/

        if (isCasting) {
            castPause();
        }

    }
    else {

        playSong();

        /*==============================
                AURORA CAST
        ==============================*/

        if (isCasting) {
            castPlay();
        }

    }

});

nextBtn.addEventListener("click", () => {
    nextSong();
});

previousBtn.addEventListener("click", () => {

    currentSong--;

    if (currentSong < 0) {
        currentSong = songs.length - 1;
    }

    loadSong(currentSong);
    playSong();
    showToast("⏮ " + songs[currentSong].title);


});

/*====================================
        NEXT SONG
=====================================*/

function nextSong() {

    if (isCrossfading) return;

    const nextIndex =

        (currentSong + 1)

        %

        songs.length;

    startCrossfade(nextIndex);

}



/*====================================
        LOAD SONG UI
=====================================*/

function loadSongUI(index) {

    const song = songs[index];

    if (!song) return;

    songTitle.textContent = song.title;

    artistName.textContent = song.artist;

    albumCover.src = song.cover;

    duration.textContent = song.duration;

    updatePlaylist();

    loadLyrics();

    updateTheme();

    updateAI();

    updateFavoriteIcon();

}

/*====================================
        LOAD SONG
=====================================*/


function loadSong(index) {

    const song = songs[index];

    if (!song) return;

    activePlayer.pause();
    activePlayer.src = song.src;
    activePlayer.currentTime = 0;
    activePlayer.volume = volume;

    progress.value = 0;
    currentTime.textContent = "0:00";

    loadSongUI(index);

}


/*====================================
        INITIAL SONG LOAD
=====================================*/

loadSong(currentSong);


/*=================================================================
                            PLAYLIST ENGINE
===================================================================*/


/*====================================
        ACTIVE PLAYLIST
=====================================*/

function updatePlaylist() {

    const items = document.querySelectorAll(".playlist-item");

    items.forEach((item, index) => {

        item.classList.remove("active");

        if (index === currentSong) {
            item.classList.add("active");
        }

    });

}

/*====================================
        RENDER PLAYLIST
=====================================*/

function renderPlaylist() {

    playlist.innerHTML = "";

    let filteredSongs = songs.filter(song => {

        const matchSearch =
            song.title.toLowerCase().includes(searchQuery) ||
            song.artist.toLowerCase().includes(searchQuery);

        if (!matchSearch) return false;

        switch (currentFilter) {

            case "favorite":
                return song.favorite;

            case "recent":
                return song.recent;

            case "trending":
                return song.trending;

            default:
                return true;

        }

    });

    playlistCount.textContent =
        `${filteredSongs.length} Tracks`;

    filteredSongs.forEach(song => {

        const realIndex = songs.findIndex(
            s => s.id === song.id
        );

        const li = document.createElement("li");

        li.className =
            "playlist-item" +
            (realIndex === currentSong ? " active" : "");

        li.innerHTML = `

        <div class="playlist-info">

            <strong>${song.title}</strong>

            <br>

            <small>${song.artist}</small>

        </div>

        <div class="playlist-actions">

            <span>${song.duration}</span>

            <button
                class="queue-btn"
                title="Add To Queue">

                <i class="fa-solid fa-plus"></i>

            </button>

        </div>

        `;

        li.addEventListener("click", () => {

            currentSong = realIndex;

            loadSong(currentSong);

            playSong();

            renderPlaylist();

        });

        li.querySelector(".queue-btn")
            .addEventListener("click", e => {

                e.stopPropagation();

                addToQueue(song);

            });

        playlist.appendChild(li);

    });

}



/*====================================
        FILTER PLAYLIST
=====================================*/

const filterBtns =
    document.querySelectorAll(".filter-btn");

filterBtns.forEach(btn => {

    btn.addEventListener("click", () => {

        filterBtns.forEach(b =>
            b.classList.remove("active")
        );

        btn.classList.add("active");

        currentFilter =
            btn.dataset.filter;

        renderPlaylist();

    });

});

/*====================================
        SEARCH PLAYLIST
=====================================*/

searchSong.addEventListener("input", () => {

    searchQuery =
        searchSong.value.toLowerCase();

    renderPlaylist();

});





/*======================================================================
                                 QUEUE ENGINE
========================================================================*/

function renderQueue() {

    queueList.innerHTML = "";

    queueCount.textContent =
        `${playQueue.length} Songs`;

    playQueue.forEach((song, index) => {

        queueList.innerHTML += `

        <li class="queue-item">

            <span>

                ${song.title}

            </span>

            <i

            class="fa-solid fa-xmark queue-remove"

            onclick="removeQueue(${index})">

            </i>

        </li>

        `;

    });

}

/*====================================
        ADD TO QUEUE
=====================================*/

function addToQueue(song) {

    // একই গান দুইবার Add হবে না
    const exists = playQueue.some(
        item => item.title === song.title
    );

    if (exists) {

        showToast("⚠ Song already in Queue");

        return;

    }

    playQueue.push(song);

    renderQueue();

    showToast("➕ Added to Queue");

}

/*====================================
        REMOVE FROM QUEUE
=====================================*/

function removeQueue(index) {

    playQueue.splice(index, 1);

    renderQueue();

    showToast("❌ Removed from Queue");

}

/*====================================
        CLEAR QUEUE
=====================================*/

function clearQueue() {

    playQueue = [];

    renderQueue();

    showToast("🗑 Queue Cleared");

}


/*=================================================================
                        LYRICS ENGINE
===================================================================*/


/*====================================
        LYRICS STATE
=====================================*/




/*====================================
        SHOW MESSAGE
=====================================*/

function showLyricsMessage(message) {

    if (playerLyricsBox) {

        playerLyricsBox.innerHTML = `
            <div class="lyrics-empty">
                ${message}
            </div>
        `;

    }


    if (aiLyricsBox) {

        aiLyricsBox.innerHTML = `
            <div class="lyrics-empty">
                ${message}
            </div>
        `;

    }

}


/*====================================
        AUTO LYRICS FETCH
=====================================*/

async function loadLyrics() {

    

    const song = songs[currentSong];
    if (!song) return;

    parsedLyrics = [];
    lastActiveIndex = -1;

    // Always get fresh elements

    if (!playerLyricsBox || !aiLyricsBox) {

        console.error("Lyrics containers not found.");
        return;

    }

    playerLyricsBox.innerHTML =
        `<div class="lyrics-loading">🤖 Searching lyrics...</div>`;

    aiLyricsBox.innerHTML =
        `<div class="lyrics-loading">🤖 Searching lyrics...</div>`;

    try {

        const url =
            `https://lrclib.net/api/search?track_name=${encodeURIComponent(song.title)}&artist_name=${encodeURIComponent(song.artist)}`;

        const response = await fetch(url);

        if (!response.ok) {
            throw new Error("API Error");
        }

        const results = await response.json();

        if (!Array.isArray(results) || results.length === 0) {

            showLyricsMessage("🎵 Lyrics not found");
            return;

        }

        const result = results[0];

        if (result.syncedLyrics) {

            parseLyrics(result.syncedLyrics);
            return;

        }

        if (result.plainLyrics) {

            renderPlainLyrics(result.plainLyrics);
            return;

        }

        showLyricsMessage("🎵 Lyrics unavailable");

    }

    catch (err) {

        console.error(err);

        showLyricsMessage("⚠️ Unable to load lyrics");

    }

}

/*====================================
        RENDER PLAIN LYRICS
=====================================*/

function renderPlainLyrics(text) {

    if (playerLyricsBox) {
        playerLyricsBox.innerHTML = "";
    }

    if (aiLyricsBox) {
        aiLyricsBox.innerHTML = "";
    }

    const lines = text.split(/\r?\n/);

    lines.forEach(line => {

        const lyric = line.trim();

        if (!lyric) return;

        const playerDiv = document.createElement("div");
        playerDiv.className = "lyric-line";
        playerDiv.textContent = lyric;

        const aiDiv = document.createElement("div");
        aiDiv.className = "lyric-line";
        aiDiv.textContent = lyric;

        playerLyricsBox.appendChild(playerDiv);
        aiLyricsBox.appendChild(aiDiv);

    });

}


/*====================================
        PARSE SYNCED LYRICS
=====================================*/

function parseLyrics(text) {

    

    parsedLyrics = [];

    lastActiveIndex = -1;


    if (playerLyricsBox) {

        playerLyricsBox.innerHTML = "";

    }


    if (aiLyricsBox) {

        aiLyricsBox.innerHTML = "";

    }


    const lines =
        text.split(/\r?\n/);


    lines.forEach(line => {

        /*
            Supports:

            [00:12.50]Hello
            [01:05.00]World
            [01:05]World
        */

        const match = line.match(/\[(\d+):(\d+(?:\.\d+)?)\](.*)/);

        if (!match) {
            return;
        }


        const minutes =
            Number(match[1]);


        const seconds =
            Number(match[2]);


        const time =
            minutes * 60 + seconds;


        const lyric =
            match[3].trim();


        /*
            Ignore empty lyric lines
        */

        if (!lyric) return;


        parsedLyrics.push({

            time: time,

            lyric: lyric

        });


        /*========================
                PLAYER LINE
        ========================*/

        const playerLine =
            document.createElement("div");


        playerLine.className =
            "lyric-line";


        playerLine.dataset.time =
            time;


        playerLine.textContent =
            lyric;


        /*========================
                AI LINE
        ========================*/

        const aiLine =
            document.createElement("div");


        aiLine.className =
            "lyric-line";


        aiLine.dataset.time =
            time;


        aiLine.textContent =
            lyric;


        /*========================
                APPEND
        ========================*/

        if (playerLyricsBox) {

            playerLyricsBox.appendChild(
                playerLine
            );

        }


        if (aiLyricsBox) {

            aiLyricsBox.appendChild(
                aiLine
            );

        }

    });


    console.log(
        "PARSED LYRICS:",
        parsedLyrics
    );

}
console.log(parsedLyrics.length);


/*====================================
        SYNC BOTH LYRICS
=====================================*/

function updateLyricsHighlight() {

    if (
        !parsedLyrics ||
        parsedLyrics.length === 0
    ) {

        return;

    }


    const currentTime =
        audio.currentTime;


    let activeIndex = -1;


    /*
        Find current lyric
    */

    for (
        let i = 0;
        i < parsedLyrics.length;
        i++
    ) {

        if (
            currentTime >=
            parsedLyrics[i].time
        ) {

            activeIndex = i;

        } else {

            break;

        }

    }


    if (activeIndex === -1) {

        return;

    }


    /*
        Don't repeatedly scroll
        the same line
    */

    if (
        activeIndex ===
        lastActiveIndex
    ) {

        return;

    }


    lastActiveIndex =
        activeIndex;


    /*====================================
                PLAYER LYRICS
    ====================================*/

    if (playerLyricsBox) {

        const lines =
            playerLyricsBox.querySelectorAll(
                ".lyric-line"
            );


        lines.forEach(line => {

            line.classList.remove(
                "active"
            );

        });


        const activeLine =
            lines[activeIndex];


        if (activeLine) {

            activeLine.classList.add(
                "active"
            );


            const target =
                activeLine.offsetTop -
                playerLyricsBox.clientHeight / 2 +
                activeLine.clientHeight / 2;

            playerLyricsBox.scrollTo({
                top: target,
                behavior: "smooth"
            });

        }

    }


    /*====================================
                AI PANEL LYRICS
    ====================================*/

    if (aiLyricsBox) {

        const lines =
            aiLyricsBox.querySelectorAll(
                ".lyric-line"
            );


        lines.forEach(line => {

            line.classList.remove(
                "active"
            );

        });


        const activeLine =
            lines[activeIndex];


        if (activeLine) {

            activeLine.classList.add(
                "active"
            );


            const target =
                activeLine.offsetTop -
                aiLyricsBox.clientHeight / 2 +
                activeLine.clientHeight / 2;

            aiLyricsBox.scrollTo({
                top: target,
                behavior: "smooth"
            });

        }

    }

}


/*====================================
        AUDIO → LYRICS SYNC
=====================================*/

audio.addEventListener(
    "timeupdate",
    updateLyricsHighlight
);


//Lyrics Engine END






/*=========================================================
                        AI ENGINE
===========================================================*/

function updateAI() {

    const data = aiDatabase[songs[currentSong].title];

    if (!data) return;

    aiSong.textContent = songs[currentSong].title;

    aiArtist.textContent = songs[currentSong].artist;

    aiMood.textContent = data.mood;

    aiEnergy.textContent = data.energy;

    aiRecommend.textContent = data.mode;

    aiStatus.textContent = "Analysis Complete";

}




/*====================================
        VOLUME ENGINE
=====================================*/


audio.volume = volume;

// Initialize
updateVolume();

// Mouse Wheel Volume
volumeKnob.addEventListener("wheel", (e) => {

    e.preventDefault();

    console.log("Wheel:", e.deltaY);

    if (e.deltaY < 0) {

        volume += 0.05;

    } else {

        volume -= 0.05;

    }

    volume = Math.max(0, Math.min(1, volume));

    audio.volume = volume;
    nextAudio.volume = volume;
    activePlayer.volume = volume;
    inactivePlayer.volume = 0;
    inactivePlayer.currentTime = 0;

    updateVolume();
    savePlayerState();

});

// Click = Mute / Unmute
volumeKnob.addEventListener("click", () => {

    if (volume > 0) {

        volume = 0;

    } else {

        volume = 1;

    }

    audio.volume = volume;
    nextAudio.volume = volume;
    activePlayer.volume = volume;

    updateVolume();

});

// Update UI
function updateVolume() {

    // Percentage
    volumeValue.textContent =
        Math.round(volume * 100) + "%";

    // Icon
    if (volume === 0) {

        volumeIcon.className =
            "fa-solid fa-volume-xmark";

    }
    else if (volume < 0.5) {

        volumeIcon.className =
            "fa-solid fa-volume-low";

    }
    else {

        volumeIcon.className =
            "fa-solid fa-volume-high";

    }

    // Ring
    const angle = volume * 360;

    const volumeRing =
        document.getElementById("volume-ring");

    if (volumeRing) {

        volumeRing.style.background =
            `conic-gradient(
                #00F5FF ${angle}deg,
                rgba(255,255,255,.08) ${angle}deg
            )`;

    }
  

} 


 
/*====================================
        THEME ENGINE
=====================================*/

function updateTheme() {

    bgLayer.className = "";

    switch (songs[currentSong].title) {

        case "Believer":

            bgLayer.classList.add("theme-believer");

            break;

        case "Faded":

            bgLayer.classList.add("theme-faded");

            break;

        case "Alone":

            bgLayer.classList.add("theme-alone");

            break;

    }

}



/*====================================
        TIME FORMAT
=====================================*/

function formatTime(seconds) {

    const minutes = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);

    return `${minutes}:${secs < 10 ? "0" : ""}${secs}`;

}

/*====================================
        AUDIO VISUALIZER
=====================================*/

canvas.width = canvas.offsetWidth;
canvas.height = canvas.offsetHeight;

function resizeCanvas() {

    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;

}

window.addEventListener("resize", resizeCanvas);

// Audio Context
 audioContext = new (window.AudioContext || window.webkitAudioContext)();

 analyser = audioContext.createAnalyser();



/*====================================
       CREATE EQ FILTERS
=====================================*/

source = audioContext.createMediaElementSource(audio);
nextSource = audioContext.createMediaElementSource(nextAudio);
buildAudioGraph();

if (nextSource && eqFilters[0]) {
    nextSource.connect(eqFilters[0]);
}


analyser.fftSize = 256;

const bufferLength = analyser.frequencyBinCount;

const dataArray = new Uint8Array(bufferLength);


/*====================================
        PARTICLES
=====================================*/

for (let i = 0; i < 60; i++) {

    particles.push({

        x: Math.random() * canvas.width,

        y: Math.random() * canvas.height,

        r: Math.random() * 3 + 1,

        speed: Math.random() * 1.5 + .5

    });

}

/*====================================
                STARS
=====================================*/

const stars = [];

for (let i = 0; i < 120; i++) {

    stars.push({

        x: Math.random() * canvas.width,

        y: Math.random() * canvas.height,

        r: Math.random() * 2,

        speed: Math.random() * .4 + .2

    });

}



/*====================================
            AI BOOT SCREEN
=====================================*/

const bootScreen =
    document.getElementById("boot-screen");

window.addEventListener("load", () => {

    setTimeout(() => {
        bootScreen.classList.add("hiddenBoot");
    }, 3500);

});


/*====================================
        LIVE TIME UPDATE
=====================================*/

/*====================================
        PLAYER TIME UPDATE
=====================================*/

/*====================================
        HANDLE TIME UPDATE
=====================================*/

function handleTimeUpdate(player) {

    if (player !== activePlayer) return;

    if (player.duration) {

        progress.value =
            (player.currentTime / player.duration) * 100;

        currentTime.textContent =
            formatTime(player.currentTime);

        duration.textContent =
            formatTime(player.duration);

    }

    if (isPlaying) {
        const second = Math.floor(player.currentTime);
        if (second !== lastStatsSecond) {
            lastStatsSecond = second;
            musicStats.listeningTime++;
            musicStats.todayListening++;
            musicStats.weeklyListening++;
            updateMusicStats();
        }
    }

    /*====================================
        CROSSFADE TRIGGER
    =====================================*/

    if (

        settings.crossfade.checked &&

        !isCrossfading &&

        activePlayer.duration

    ) {

        const triggerTime =

            Math.max(

                activePlayer.duration -

                (crossfadeDuration / 1000),

                0

            );

        if (

            activePlayer.currentTime >= triggerTime

        ) {

            let nextSong;

            if (playQueue.length > 0) {
                nextSong = songs.findIndex(song => song.id === playQueue[0].id);
            } else if (isShuffle && songs.length > 1) {
                do {
                    nextSong = Math.floor(Math.random() * songs.length);
                } while (nextSong === currentSong);
            } else {
                nextSong = (currentSong + 1) % songs.length;
            }

            if (nextSong >= 0) {
                startCrossfade(nextSong);
            }

        }

    }

}

audio.addEventListener(
    "timeupdate",
    () => handleTimeUpdate(audio)
);

nextAudio.addEventListener(
    "timeupdate",
    () => handleTimeUpdate(nextAudio)
);

/*====================================
        SEEK BAR
=====================================*/

progress.addEventListener("input", () => {

    if (activePlayer.duration) {

        activePlayer.currentTime =

            (progress.value / 100)

            *

            activePlayer.duration;

    }

});

progress.addEventListener("change", () => {

    savePlayerState();

});



/*====================================
                REPEAT MODE
=====================================*/

repeatBtn.addEventListener("click", () => {

    isRepeat = !isRepeat;

    repeatBtn.classList.toggle("active");

    showToast(

        isRepeat
            ? "🔁 Repeat Enabled"
            : "🔁 Repeat Disabled"

    );
    savePlayerState();

});


/*====================================
        SHUFFLE MODE
=====================================*/

shuffleBtn.addEventListener("click", () => {

    isShuffle = !isShuffle;

    shuffleBtn.classList.toggle("active");

    showToast(

        isShuffle
            ? "🔀 Shuffle Enabled"
            : "🔀 Shuffle Disabled"

    );
    savePlayerState();

});




/*====================================
        HANDLE SONG END
=====================================*/

function handleSongEnd() {

    console.log("HANDLE SONG END");

    if (sleepEndSong) {
        sleepEndSong = false;
        activePlayer.pause();
        isPlaying = false;
        sleepStatus.textContent = "🌙 Sleep Mode Activated";
        return;
    }

    if (isRepeat) {
        activePlayer.currentTime = 0;
        playSong();
        return;
    }

    let nextIndex = -1;

    if (playQueue.length > 0) {
        const queuedSong = playQueue.shift();
        nextIndex = songs.findIndex(song => song.id === queuedSong.id);
        renderQueue();
    } else if (isShuffle && songs.length > 1) {
        do {
            nextIndex = Math.floor(Math.random() * songs.length);
        } while (nextIndex === currentSong);
    } else {
        nextIndex = (currentSong + 1) % songs.length;
    }

    if (nextIndex < 0) {
        nextIndex = (currentSong + 1) % songs.length;
    }

    if (settings.crossfade.checked && !isCrossfading) {
        startCrossfade(nextIndex);
    } else {
        currentSong = nextIndex;
        loadSong(currentSong);
        playSong();
    }

    savePlayerState();
}


audio.addEventListener(

    "ended",

    handleSongEnd

);

nextAudio.addEventListener(

    "ended",

    handleSongEnd

);


/*====================================
        KEYBOARD SHORTCUT
=====================================*/

document.addEventListener("keydown", (e) => {

    if (e.code === "Space") {

        e.preventDefault();

        if (isPlaying) {
            pauseSong();
        }
        else {
            playSong();
        }

    }

});


/*====================================
        DRAW VISUALIZER
=====================================*/

function drawVisualizer() {

    requestAnimationFrame(drawVisualizer);

    analyser.getByteFrequencyData(dataArray);

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    /*==============================
        THEME COLORS
    ==============================*/

    const style =
        getComputedStyle(document.documentElement);

    const accent =
        style.getPropertyValue("--accent").trim();

    const accentLight =
        style.getPropertyValue("--accent-light").trim();

    const accentDark =
        style.getPropertyValue("--accent-dark").trim();

    const cx = canvas.width / 2;
    const cy = canvas.height / 2;

    /*==============================
            STARS
    ==============================*/

    stars.forEach(star => {

        star.y += star.speed;

        if (star.y > canvas.height) {

            star.y = 0;
            star.x = Math.random() * canvas.width;

        }

        ctx.beginPath();

        ctx.arc(
            star.x,
            star.y,
            star.r,
            0,
            Math.PI * 2
        );

        ctx.fillStyle = "rgba(255,255,255,.9)";

        ctx.shadowBlur = 8;

        ctx.shadowColor = "#ffffff";

        ctx.fill();

    });

    /*==============================
            PARTICLES
    ==============================*/

    particles.forEach(p => {

        p.y -= p.speed;

        if (p.y < 0) {

            p.y = canvas.height;
            p.x = Math.random() * canvas.width;

        }

        ctx.beginPath();

        ctx.arc(
            p.x,
            p.y,
            p.r,
            0,
            Math.PI * 2
        );

        ctx.fillStyle = accent;
        ctx.shadowBlur = 20;

        ctx.shadowColor = accent;
        ctx.fill();

    });

    /*==============================
            BASS
    ==============================*/

    

    for (let i = 0; i < 10; i++) {

        bass += dataArray[i];

    }

    bass /= 10;

    if (bass > 170) {

        player.classList.add("beat");

    } else {

        player.classList.remove("beat");

    }

    /*==============================
            ROTATE
    ==============================*/

    rotation += 0.01;

    ctx.save();

    ctx.translate(cx, cy);

    ctx.rotate(rotation);

    ctx.translate(-cx, -cy);



    /*==============================
            RGB AURA
    ==============================*/

    const aura =
        ctx.createRadialGradient(

            cx,
            cy,
            20,

            cx,
            cy,
            130

        );

    aura.addColorStop(
        0,
        accent
    );

    aura.addColorStop(
        .45,
        accentLight
    );

    aura.addColorStop(
        1,
        "transparent"
    );


    ctx.beginPath();

    ctx.arc(
        cx,
        cy,
        130,
        0,
        Math.PI * 2
    );

    ctx.fillStyle = aura;

    ctx.fill();

    /*==============================
            SPECTRUM
    ==============================*/

    const radius = 60;

    const bars = 128;

    for (let i = 0; i < bars; i++) {

        const value = dataArray[i];

        const angle = (i / bars) * Math.PI * 2;

        const height = value * .55;

        const x1 = cx + Math.cos(angle) * radius;
        const y1 = cy + Math.sin(angle) * radius;

        const x2 = cx + Math.cos(angle) * (radius + height);
        const y2 = cy + Math.sin(angle) * (radius + height);

        const hue = i * 3;

        ctx.beginPath();

        ctx.moveTo(x1, y1);

        ctx.lineTo(x2, y2);

        ctx.strokeStyle = `hsl(${hue},100%,60%)`;

        ctx.shadowBlur = 10 + bass * .18;

        ctx.shadowColor = `hsl(${hue},100%,60%)`;

        ctx.lineWidth = 2 + bass / 70;

        ctx.stroke();

    }

    /*==============================
            SHOCKWAVE
    ==============================*/

    if (bass > 180) {

        ctx.beginPath();

        ctx.arc(

            cx,

            cy,

            65 + bass * .15,

            0,

            Math.PI * 2

        );

        ctx.strokeStyle = accent;
        ctx.shadowColor = accent;
        ctx.globalAlpha = .3;
        ctx.lineWidth = 4;
        ctx.shadowBlur = 40;
        ctx.stroke();
        ctx.globalAlpha = 1;

    }

    /*==============================
            NEON RING
    ==============================*/

    ctx.beginPath();

    ctx.arc(
        cx,
        cy,
        58,
        0,
        Math.PI * 2
    );

    ctx.strokeStyle = accent;
    ctx.shadowColor = accent;
    ctx.lineWidth = 6;
    ctx.shadowBlur = 40;
    ctx.stroke();



    /*==============================
      PARTICLE EXPLOSION
    ==============================*/

    if (bass > 180) {

        for (let i = 0; i < 12; i++) {

            ctx.beginPath();

            ctx.arc(

                cx + (Math.random() - .5) * 140,

                cy + (Math.random() - .5) * 140,

                Math.random() * 3 + 1,

                0,

                Math.PI * 2

            );

            ctx.fillStyle = accent;
            ctx.shadowColor = accent;
            ctx.shadowBlur = 30;
            ctx.fill();

        }

    }



    /*==============================
            ENERGY RING
    ==============================*/

    ctx.beginPath();

    ctx.arc(

        cx,

        cy,

        85 + Math.sin(rotation * 3) * 6,

        0,

        Math.PI * 2

    );

    ctx.strokeStyle = accentDark;

    ctx.shadowColor = accentDark;

    ctx.lineWidth = 2;

    ctx.shadowBlur = 25;

    ctx.stroke();


    /*==============================
            LIGHTNING ARC
    ==============================*/

    if (bass > 200) {

        ctx.beginPath();

        ctx.moveTo(

            cx - 40,

            cy - 40

        );

        ctx.lineTo(

            cx - 10,

            cy - 5

        );

        ctx.lineTo(

            cx + 10,

            cy - 25

        );

        ctx.lineTo(

            cx + 35,

            cy + 20

        );

        ctx.strokeStyle = "#FFFFFF";

        ctx.lineWidth = 2;

        ctx.shadowBlur = 30;

        ctx.shadowColor = accent;

        ctx.stroke();

    }

    /*==============================
            VINYL
    ==============================*/

    ctx.beginPath();

    ctx.arc(
        cx,
        cy,
        50,
        0,
        Math.PI * 2
    );

    ctx.fillStyle = "#151515";

    ctx.fill();

    ctx.beginPath();

    ctx.arc(
        cx,
        cy,
        12,
        0,
        Math.PI * 2
    );

    ctx.fillStyle = accent;
    ctx.fill();

    ctx.restore();

}

// Start Animation
drawVisualizer();



/*====================================
        VOICE COMMAND ENGINE
=====================================*/

const SpeechRecognition =
    window.SpeechRecognition ||
    window.webkitSpeechRecognition;

if (SpeechRecognition) {

    const recognition = new SpeechRecognition();

    recognition.lang = "en-US";

    recognition.continuous = false;

    recognition.interimResults = false;

    voiceBtn.addEventListener("click", () => {

        recognition.start();

        voiceBtn.classList.add("listening");

    });

    recognition.onend = () => {

        voiceBtn.classList.remove("listening");

    };

    recognition.onresult = (event) => {

        const command =
            event.results[0][0].transcript.toLowerCase();

        console.log(command);

        executeVoiceCommand(command);

    };

}
else{

    alert("Speech Recognition is not supported in this browser.");

}

function executeVoiceCommand(command) {

    if (command.includes("play")) {

        playSong();

    }

    else if (command.includes("pause")) {

        pauseSong();

    }

    else if (command.includes("next")) {

        nextBtn.click();

    }

    else if (command.includes("previous")) {

        previousBtn.click();

    }

    else if (command.includes("shuffle")) {

        shuffleBtn.click();

    }

    else if (command.includes("repeat")) {

        repeatBtn.click();

    }

}

/*====================================
        FAVORITE ENGINE
=====================================*/

function updateFavoriteIcon() {

    const icon = favoriteBtn.querySelector("i");

    if (favorites.includes(currentSong)) {

        icon.className = "fa-solid fa-heart";

        favoriteBtn.classList.add("active");

    } else {

        icon.className = "fa-regular fa-heart";

        favoriteBtn.classList.remove("active");

    }

}

favoriteBtn.addEventListener("click", () => {

    if (favorites.includes(currentSong)) {

        favorites = favorites.filter(
            id => id !== currentSong
        );

        showToast("💔 Removed from Favorites");

    } else {

        favorites.push(currentSong);

        showToast("❤️ Added to Favorites");

    }

    localStorage.setItem(
        "favorites",
        JSON.stringify(favorites)
    );

    updateFavoriteIcon();
    savePlayerState();

});

/*====================================
        SHARE ENGINE
=====================================*/

shareBtn.addEventListener("click", async () => {

    if (navigator.share) {

        try {

            await navigator.share({

                title: "Aurora Nexus",

                text: "Check out my futuristic music player!",

                url: window.location.href

            });

            showToast("📤 Shared Successfully");

        }

        catch (err) {

            console.log(err);

        }

    }

    else {

        navigator.clipboard.writeText(window.location.href);

        showToast("🔗 Link Copied");

    }

});

/*====================================
        STORAGE ENGINE
=====================================*/

function savePlayerState() {

    const playerState = {

        currentSong: currentSong,
        currentTime: activePlayer.currentTime,
        volume: volume,
        shuffle: isShuffle,
        repeat: isRepeat

    };

    localStorage.setItem(

        "auroraPlayer",

        JSON.stringify(playerState)

    );

} 


/*====================================
        LOAD PLAYER STATE
=====================================*/

function loadPlayerState() {

    const saved = JSON.parse(

        localStorage.getItem("auroraPlayer")

    );

    if (!saved) {

        memoryMessage.textContent =
            "Starting New Session";

        return;

    }

    currentSong = saved.currentSong ?? 0;

    volume = saved.volume ?? 1;

    isShuffle = saved.shuffle ?? false;

    isRepeat = saved.repeat ?? false;

    audio.volume = volume;

    loadSong(currentSong);

    audio.addEventListener(

        "loadedmetadata",

        () => {

            audio.currentTime =
                saved.currentTime ?? 0;

        },

        { once: true }

    );

    updateVolume();

    memoryMessage.textContent =
        "✓ Previous Session Restored";

} loadPlayerState();


/*====================================
        NOTIFICATION ENGINE
=====================================*/

function showToast(message) {

    toastMessage.textContent = message;

    toast.classList.add("show");

    clearTimeout(showToast.timer);

    showToast.timer = setTimeout(() => {

        toast.classList.remove("show");

    }, 2500);

} showToast("🚀 Aurora Nexus Ready");




/*====================================
        NAVIGATION ENGINE
=====================================*/


function moveDockPill(btn) {

    const pillWidth =
        dockPill.offsetWidth;

    const buttonCenter =
        btn.offsetLeft +
        btn.offsetWidth / 2;

    const x =
        buttonCenter -
        pillWidth / 2 -
        7;

    dockPill.style.transform =
        `translateX(${x}px)`;

}

window.addEventListener("load", () => {

    const activeBtn =
        document.querySelector(".dock-btn.active") ||
        document.querySelector(".dock-btn");

    if (activeBtn) {

        moveDockPill(activeBtn);

    }

});



/*====================================
        CLOSE ALL PANELS
=====================================*/

function closePanels() {
    equalizerPanel.classList.remove("active");
    aiPanelScreen.classList.remove("active");
    settingsPanel.classList.remove("active");

    if (deviceMusicPanel) {
        deviceMusicPanel.classList.remove("active");
    }
}


/*====================================
        PANEL NAVIGATION
=====================================*/

dockBtns.forEach((btn, index) => {

    btn.addEventListener("click", () => {

        dockBtns.forEach(item =>
            item.classList.remove("active")
        );

        btn.classList.add("active");

        closePanels();

        /* Move Floating Pill */

        dockPill.style.transform =
            `translateX(${btn.offsetLeft}px)`;

        const panel = btn.dataset.panel;

        if (panel === "equalizer") {
            equalizerPanel?.classList.add("active");
        } else if (panel === "ai") {
            aiPanelScreen?.classList.add("active");
        } else if (panel === "settings") {
            settingsPanel?.classList.add("active");
        } else if (panel === "device-music") {
            deviceMusicPanel?.classList.add("active");

            // Reuse the cached device library instead of rescanning
            // every time the panel is opened.
            if (deviceSongs.length > 0) {
                renderDeviceMusic(deviceSongs.slice(0, DEVICE_MUSIC_RENDER_LIMIT));
            } else {
                scanDeviceMusic();
            }
        }

    });

});


/*====================================
        PANEL CLOSE
=====================================*/

document.querySelectorAll(".panel-close").forEach(btn => {

    btn.addEventListener("click", () => {

        closePanels();

        dockBtns.forEach(item =>
            item.classList.remove("active")
        );

        dockBtns[0].classList.add("active");

        dockPill.style.transform = "translateX(0px)";

    });

});


/*====================================
        INITIAL POSITION
=====================================*/

window.addEventListener("load", () => {

    dockPill.style.transform = "translateX(0px)";

});



/*====================================
        EQUALIZER ENGINE
=====================================*/


function createEqualizer() {

    if (!audioContext) return;

    if (!source) {

        source = audioContext.createMediaElementSource(audio);

    }

    buildAudioGraph();

}

eqSliders.forEach((slider, index) => {

    slider.addEventListener("input", () => {

        eqFilters[index].gain.value = slider.value;
        eqValues[index] = Number(slider.value);

    });

});

/*====================================
        EQ WAVE VISUALIZER
=====================================*/

/*====================================
        RESIZE CANVAS
=====================================*/

function resizeEQCanvas() {

    const rect =
        eqCanvas.getBoundingClientRect();

    const dpr =
        window.devicePixelRatio || 1;

    eqCanvas.width =
        rect.width * dpr;

    eqCanvas.height =
        rect.height * dpr;

    eqCtx.setTransform(
        dpr,
        0,
        0,
        dpr,
        0,
        0
    );

}


window.addEventListener(
    "resize",
    resizeEQCanvas
);

resizeEQCanvas();









/*====================================
      DRAW EQ WAVE
=====================================*/

function drawEQWave() {

    eqAnimationId =
        requestAnimationFrame(drawEQWave);


    if (!analyser) return;


    const width =
        eqCanvas.clientWidth;

    const height =
        eqCanvas.clientHeight;


    /*--------------------------------
            CLEAR CANVAS
    --------------------------------*/

    eqCtx.clearRect(
        0,
        0,
        width,
        height
    );


    /*--------------------------------
            FREQUENCY DATA
    --------------------------------*/

    const bufferLength =
        analyser.frequencyBinCount;

    const dataArray =
        new Uint8Array(bufferLength);


    analyser.getByteFrequencyData(
        dataArray
    );


    /*--------------------------------
            BACKGROUND GRID
    --------------------------------*/

    eqCtx.strokeStyle =
        "rgba(0,245,255,0.07)";

    eqCtx.lineWidth = 1;


    for (
        let x = 0;
        x < width;
        x += 25
    ) {

        eqCtx.beginPath();

        eqCtx.moveTo(x, 0);

        eqCtx.lineTo(
            x,
            height
        );

        eqCtx.stroke();

    }


    for (
        let y = 10;
        y < height;
        y += 20
    ) {

        eqCtx.beginPath();

        eqCtx.moveTo(0, y);

        eqCtx.lineTo(
            width,
            y
        );

        eqCtx.stroke();

    }


    /*--------------------------------
            EQ BARS
    --------------------------------*/

    const bars = 32;

    const gap = 3;

    const barWidth =
        (width - gap * (bars - 1))
        / bars;


    for (
        let i = 0;
        i < bars;
        i++
    ) {

        const dataIndex =
            Math.floor(
                i *
                bufferLength /
                bars
            );


        const value =
            dataArray[dataIndex];


        const percent =
            value / 255;


        const barHeight =
            percent *
            (height - 12);


        const x =
            i *
            (barWidth + gap);


        const y =
            height -
            barHeight;


        /*--------------------------------
                BAR GRADIENT
        --------------------------------*/

        const gradient =
            eqCtx.createLinearGradient(
                0,
                y,
                0,
                height
            );


        gradient.addColorStop(
            0,
            "#00F5FF"
        );

        gradient.addColorStop(
            0.55,
            "#7C3AED"
        );

        gradient.addColorStop(
            1,
            "rgba(0,245,255,0.08)"
        );


        eqCtx.fillStyle =
            gradient;


        /*--------------------------------
                GLOW
        --------------------------------*/

        eqCtx.shadowBlur = 12;

        eqCtx.shadowColor =
            "rgba(0,245,255,0.7)";


        /*--------------------------------
                DRAW BAR
        --------------------------------*/

        eqCtx.beginPath();

        eqCtx.roundRect(
            x,
            y,
            barWidth,
            barHeight,
            5
        );

        eqCtx.fill();


        eqCtx.shadowBlur = 0;

    }

}

/*====================================
       START EQ VISUALIZER
=====================================*/

drawEQWave();



/*====================================
        RESIZE CIRCLE CANVAS
=====================================*/

function resizeCircle() {

    circleCanvas.width =
        circleCanvas.offsetWidth;

    circleCanvas.height =
        circleCanvas.offsetHeight;

}

resizeCircle();

window.addEventListener(
    "resize",
    resizeCircle
);


/*====================================
        GALAXY PARTICLES
=====================================*/


for (let i = 0; i < 80; i++) {

    particles.push({

        angle: Math.random() * Math.PI * 2,

        distance: 140 + Math.random() * 60,

        size: Math.random() * 3 + 1,

        speed: 0.002 + Math.random() * 0.004

    });

}

function drawCircleSpectrum() {

    requestAnimationFrame(

        drawCircleSpectrum

    );

    if (!analyser) return;

    analyser.getByteFrequencyData(dataArray);

    let bass = 0;

    for (let i = 0; i < 10; i++) {

        bass += dataArray[i];

    }

    bass /= 10;

    pulseRadius = bass * 0.12;

    /*====================================
             Clear Canvas
    =====================================*/

    circleCtx.clearRect(

        0,

        0,

        circleCanvas.width,

        circleCanvas.height

    );

    /*====================================
                AURORA NEBULA
    =====================================*/

    const cx = circleCanvas.width / 2;

    const cy = circleCanvas.height / 2;

    circleCtx.save();

    nebulaClouds.forEach(cloud => {

        cloud.angle += cloud.speed;

        const x =

            cx +

            Math.cos(cloud.angle) * cloud.distance;

        const y =

            cy +

            Math.sin(cloud.angle) * cloud.distance;

        const gradient =

            circleCtx.createRadialGradient(

                x,

                y,

                0,

                x,

                y,

                cloud.radius

            );

        gradient.addColorStop(

            0,

            cloud.color

        );

        gradient.addColorStop(

            .2,

            cloud.color + "55"

        );

        gradient.addColorStop(

            1,

            "transparent"

        );

        circleCtx.beginPath();

        circleCtx.fillStyle = gradient;

        circleCtx.arc(

            x,

            y,

            cloud.radius,

            0,

            Math.PI * 2

        );

        circleCtx.fill();

    });

    

    const radius = 115 + pulseRadius;

    const glow = Math.sin(Date.now() * .003) * 8;


    /*==========================
       Glow Ring
    ==========================*/

    circleCtx.beginPath();
    circleCtx.arc(

        cx,

        cy,

        radius + glow,

        0,

        Math.PI * 2

    );

    circleCtx.strokeStyle =

        "rgba(0,245,255,.35)";

    circleCtx.lineWidth = 4;

    circleCtx.shadowBlur = 30;

    circleCtx.shadowColor = "#00F5FF";

    circleCtx.stroke();


    /*==========================
                Energy Halo
    ==========================*/
    
    circleCtx.beginPath();

    circleCtx.arc(

        cx,

        cy,

        radius + 18,

        0,

        Math.PI * 2

    );

    circleCtx.strokeStyle = "rgba(255,255,255,.08)";

    circleCtx.lineWidth = 2;

    circleCtx.shadowBlur = 40;

    circleCtx.shadowColor = "#00F5FF";

    circleCtx.stroke();

    



    /*==============================
            360° Spectrum Bars
    ==============================*/

    const totalBars = 128;
    for (let i = 0; i < totalBars; i++) {

        const value = dataArray[i];

        const angle =
            (Math.PI * 2 / totalBars) * i;

        const barLength =
            10 + value * 0.35;

        const x1 =
            cx + Math.cos(angle) * radius;

        const y1 =
            cy + Math.sin(angle) * radius;

        const x2 =
            cx + Math.cos(angle) *
            (radius + barLength);

        const y2 =
            cy + Math.sin(angle) *
            (radius + barLength);

        const gradient =
            circleCtx.createLinearGradient(

                x1,
                y1,
                x2,
                y2

            );

        gradient.addColorStop(

            0,

            "#00F5FF"

        );

        gradient.addColorStop(

            .5,

            "#7C3AED"

        );

        gradient.addColorStop(

            1,

            "#FF4DFF"

        );

        circleCtx.beginPath();

        circleCtx.strokeStyle = gradient;

        circleCtx.lineWidth = 3;

        circleCtx.shadowBlur = 18;

        circleCtx.shadowColor =
            "#00F5FF";

        circleCtx.moveTo(

            x1,

            y1

        );

        circleCtx.lineTo(

            x2,

            y2

        );

        circleCtx.stroke();


    } 




    /*==============================
           Galaxy Particles
    ==============================*/
    
    circleCtx.shadowBlur = 0;

    particles.forEach(p => {

        p.angle += p.speed;

        const x =

            cx +

            Math.cos(p.angle)

            * p.distance;

        const y =

            cy +

            Math.sin(p.angle)

            * p.distance;

        circleCtx.beginPath();

        circleCtx.fillStyle =

            "#00F5FF";

        circleCtx.shadowBlur = 12;

        circleCtx.shadowColor =

            "#00F5FF";

        circleCtx.arc(

            x,

            y,

            p.size,

            0,

            Math.PI * 2

        );

        circleCtx.fill();

    });

    circleCtx.restore();

}
drawCircleSpectrum();





/*====================================
        EQ PRESETS
=====================================*/

const presets = {

    Normal: [
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0
    ],

    Bass: [
        8, 6, 5, 3, 1, 0, -2, -3, -4, -5
    ],

    Pop: [
        -1, 2, 4, 5, 4, 2, 0, -1, -2, -2
    ],

    Rock: [
        5, 4, 3, 0, -1, 2, 4, 5, 6, 6
    ],

    Jazz: [
        4, 3, 2, 0, 2, 4, 5, 6, 5, 4
    ],

    Classical: [
        0, 0, -1, -2, 0, 3, 5, 6, 7, 7
    ],

    Electronic: [
        6, 5, 3, 1, 0, 3, 5, 6, 5, 4
    ],

    Vocal: [
        -3, -2, 0, 3, 5, 7, 6, 5, 4, 3
    ],

    "Hip Hop": [
        8, 7, 5, 3, 2, 0, -1, -2, -3, -4
    ],

    Custom: null

};

/*====================================
        PRESET BUTTONS
=====================================*/

const presetButtons =
    document.querySelectorAll(".preset");


/*====================================
        APPLY PRESET
=====================================*/

function applyPreset(name) {

    const values = presets[name];

    if (!values) return;

    values.forEach((value, index) => {

        if (eqFilters[index]) {

            eqFilters[index].gain.setTargetAtTime(
                Number(value),
                audioContext.currentTime,
                0.03
            );

        }

        if (eqSliders[index]) {

            eqSliders[index].value = value;

        }

    });

}
/*====================================
        PRESET BUTTON EVENTS
=====================================*/

presetButtons.forEach(btn => {

    btn.addEventListener("click", () => {

        presetButtons.forEach(button => {

            button.classList.remove("active");

        });

        btn.classList.add("active");

        applyPreset(
            btn.innerText.trim()
        );

    });

});






/*==============================================================
                        BUILD AUDIO GRAPH
================================================================*/



function buildAudioGraph() {

    if (eqFilters.length > 0) return;

    eqFilters = [];

    stereoPanner =
        audioContext.createStereoPanner();
    
    /*====================================
        SPATIAL ENGINE
    =====================================*/

    roomDelay =
        audioContext.createDelay();

    roomDelay.delayTime.value = 0.04;

    roomGain =
        audioContext.createGain();

    roomGain.gain.value = 0.25;
    
    /*====================================
                BASS FILTER
    =====================================*/

    bassFilter =
        audioContext.createBiquadFilter();

    bassFilter.type = "lowshelf";

    bassFilter.frequency.value = 180;

    bassFilter.gain.value = 0;

    /*====================================
            TREBLE FILTER
    =====================================*/

    trebleFilter =
        audioContext.createBiquadFilter();

    trebleFilter.type = "highshelf";

    trebleFilter.frequency.value = 5000;

    trebleFilter.gain.value = 0;

    /*====================================
            TREBLE BOOST
    =====================================*/

    trebleControl.addEventListener("input", () => {

        trebleFilter.gain.setTargetAtTime(

            Number(trebleControl.value),

            audioContext.currentTime,

            .03

        );

    });

    
    /*====================================
        STEREO BALANCE
    =====================================*/

    balanceControl.addEventListener("input", () => {

        stereoPanner.pan.setTargetAtTime(

            Number(balanceControl.value),

            audioContext.currentTime,

            .03

        );

    });

    /*====================================
        MASTER GAIN
    =====================================*/

    masterGain =
        audioContext.createGain();

    masterGain.gain.value = 1;

    masterControl.addEventListener("input", () => {

        masterGain.gain.setTargetAtTime(

            Number(masterControl.value),

            audioContext.currentTime,

            .03

        );

    });



    compressor =
        audioContext.createDynamicsCompressor();

    compressor.threshold.value = -24;

    compressor.knee.value = 30;

    compressor.ratio.value = 12;

    compressor.attack.value = 0.003;

    compressor.release.value = 0.25;



    let previousNode = source;

    EQ_FREQUENCIES.forEach(freq => {

        const filter = audioContext.createBiquadFilter();

        filter.type = "peaking";

        filter.frequency.value = freq;

        filter.Q.value = 1.4;

        filter.gain.value = 0;

        previousNode.connect(filter);

        previousNode = filter;

        eqFilters.push(filter);

    });

    previousNode.connect(bassFilter);

    bassFilter.connect(trebleFilter);

    trebleFilter.connect(stereoPanner);

    stereoPanner.connect(roomDelay);

    roomDelay.connect(roomGain);

    roomGain.connect(compressor);

    roomDelay.connect(compressor);

    compressor.connect(masterGain);

    masterGain.connect(analyser);

    analyser.connect(audioContext.destination);

}

spatialControl.addEventListener("input", () => {

    if (!roomGain) return;

    roomGain.gain.setTargetAtTime(

        Number(spatialControl.value),

        audioContext.currentTime,

        .05

    );

});

roomControl.addEventListener("input", () => {

    if (!roomDelay) return;

    roomDelay.delayTime.setTargetAtTime(

        Number(roomControl.value) * 0.08,

        audioContext.currentTime,

        .05

    );

});

/*====================================
        SMOOTH FILTER CHANGE
=====================================*/

function setFilterGain(index, value) {

    if (!eqFilters[index]) return;

    const now =
        audioContext.currentTime;

    eqFilters[index].gain.cancelScheduledValues(now);

    eqFilters[index].gain.linearRampToValueAtTime(

        Number(value),

        now + 0.08

    );

}

/*====================================
        EQ SLIDER ENGINE
=====================================*/

eqSliders.forEach((slider, index) => {

    slider.addEventListener("input", () => {

        setFilterGain(

            index,

            slider.value

        );

    });

});




/*=========================================================
                AURORA SETTINGS ENGINE
=========================================================*/

const settings = {

    darkMode:
        document.getElementById("setting-dark-mode"),

    accentColor:
        document.getElementById("setting-accent-color"),

    autoplay:
        document.getElementById("setting-autoplay"),

    shuffle:
        document.getElementById("setting-shuffle"),

    repeat:
        document.getElementById("setting-repeat"),

    crossfade:
        document.getElementById("setting-crossfade"),

    crossfadeSlider:
        document.getElementById("crossfade-slider"),

    crossfadeValue:
        document.getElementById("crossfade-value"),

    autoLyrics:
        document.getElementById("setting-auto-lyrics"),

    localLrc:
        document.getElementById("setting-local-lrc"),

    autoScroll:
        document.getElementById("setting-lyrics-scroll"),

    ai:
        document.getElementById("setting-ai"),

    aiLyrics:
        document.getElementById("setting-ai-lyrics"),

    visualizer:
        document.getElementById("setting-visualizer"),

    background:
        document.getElementById("setting-background"),

    lastSong:
        document.getElementById("setting-last-song"),

    rememberVolume:
        document.getElementById("setting-volume"),

    reset:
        document.getElementById("reset-app-data")

};



/*=========================================================
                LOAD SETTINGS
=========================================================*/

function loadSettings() {

    const saved =
        JSON.parse(localStorage.getItem("aurora-settings"));

    if (!saved) return;

    Object.keys(saved).forEach(key => {

        if (!settings[key]) return;

        if (settings[key].type === "checkbox") {

            settings[key].checked = saved[key];

        }

        else {

            settings[key].value = saved[key];

        }

    });

    if (saved.theme) {

        themePicker.value =
            saved.theme;

        document.documentElement
            .style.setProperty(
                "--accent",
                saved.theme
            );

    }

    crossfadeDuration =
        Number(settings.crossfadeSlider.value || 5) * 1000;

    isShuffle = settings.shuffle.checked;
    isRepeat = settings.repeat.checked;

    applySettings();

}

/*=========================================================
                SAVE SETTINGS
=========================================================*/

function saveSettings() {

    const data = {

        darkMode:
            settings.darkMode.checked,

        accentColor:
            settings.accentColor.value,

        theme:
            themePicker.value,

        autoplay:
            settings.autoplay.checked,

        shuffle:
            settings.shuffle.checked,

        repeat:
            settings.repeat.checked,

        autoLyrics:
            settings.autoLyrics.checked,

        localLrc:
            settings.localLrc.checked,

        autoScroll:
            settings.autoScroll.checked,

        ai:
            settings.ai.checked,

        aiLyrics:
            settings.aiLyrics.checked,

        visualizer:
            settings.visualizer.checked,

        background:
            settings.background.checked,

        lastSong:
            settings.lastSong.checked,

        crossfade:
            settings.crossfade.checked,

        crossfadeSlider:
            settings.crossfadeSlider.value,

        crossfadeValue:
            settings.crossfadeValue.textContent,

        rememberVolume:
            settings.rememberVolume.checked

    };
    

    localStorage.setItem(
        "aurora-settings",
        JSON.stringify(data)
    );

   

}

/*=========================================================
                APPLY SETTINGS
=========================================================*/

function applySettings() {

    updateAccentColor(
        settings.accentColor.value
    );

    document.body.classList.toggle(
        "light-mode",
        !settings.darkMode.checked
    );

    document.body.dataset.accent =
        settings.accentColor.value;


    /* AI PANEL */

    if (aiPanelScreen) {

        aiPanelScreen.style.display =
            settings.ai.checked
                ? ""
                : "none";

    }


    /* VISUALIZER */

    const visualizer =
        document.getElementById("visualizer");

    if (visualizer) {

        visualizer.style.display =
            settings.visualizer.checked
                ? ""
                : "none";

    }


    /* BACKGROUND */

    const galaxy =
        document.querySelector(".galaxy-bg");

    if (galaxy) {

        galaxy.style.display =
            settings.background.checked
                ? ""
                : "none";

    }

}

/*=========================================================
            SETTINGS EVENTS
=========================================================*/

Object.values(settings).forEach(item => {

    if (!item) return;

    if (item.id === "reset-app-data") return;

    if (item.tagName === "SPAN") return;

    item.addEventListener("change", () => {

        saveSettings();

        applySettings();

    });

});


settings.crossfadeSlider.addEventListener(

    "input",

    () => {

        crossfadeDuration =

            Number(settings.crossfadeSlider.value) * 1000;

        settings.crossfadeValue.textContent =

            settings.crossfadeSlider.value;

        saveSettings();

    }

);

/*=========================================================
            ACCENT COLOR CHANGE
=========================================================*/

settings.accentColor.addEventListener("change", () => {

    updateAccentColor(
        settings.accentColor.value
    );

    saveSettings();

});


/*==============================
        CUSTOM COLOR PICKER
==============================*/

themePicker.addEventListener(

    "input",

    () => {

        const color =
            themePicker.value;

        document.documentElement
            .style.setProperty(
                "--accent",
                color
            );

        document.documentElement
            .style.setProperty(
                "--accent-light",
                lighten(color, 40)
            );

        document.documentElement
            .style.setProperty(
                "--accent-dark",
                darken(color, 40)
            );

        saveSettings();

    }

);

/*==============================
        Helper Functions
==============================*/
function lighten(hex, percent) {

    let num =
        parseInt(
            hex.replace("#", ""),
            16
        );

    let r =
        (num >> 16) + percent;

    let g =
        ((num >> 8) & 255) + percent;

    let b =
        (num & 255) + percent;

    r = Math.min(255, r);
    g = Math.min(255, g);
    b = Math.min(255, b);

    return `rgb(${r},${g},${b})`;

}

function darken(hex, percent) {

    let num =
        parseInt(
            hex.replace("#", ""),
            16
        );

    let r =
        (num >> 16) - percent;

    let g =
        ((num >> 8) & 255) - percent;

    let b =
        (num & 255) - percent;

    r = Math.max(0, r);
    g = Math.max(0, g);
    b = Math.max(0, b);

    return `rgb(${r},${g},${b})`;

}


/*=========================================================
                RESET SETTINGS
=========================================================*/

settings.reset.addEventListener("click", () => {

    if (!confirm("Reset Aurora Settings?"))
        return;

    localStorage.removeItem("aurora-settings");

    location.reload();

});

/*=========================================================
                INITIALIZE
=========================================================*/

loadSettings();

/*=========================================================
                ACCENT COLOR ENGINE
=========================================================*/

function updateAccentColor(color) {

    let theme = {

        accent: "#00F5FF",
        light: "#7CF8FF",
        dark: "#009FB5",
        border: "rgba(0,245,255,.18)"

    };

    switch (color) {

        case "purple":

            theme = {

                accent: "#A855F7",
                light: "#D8B4FE",
                dark: "#6D28D9",
                border: "rgba(168,85,247,.18)"

            };

            break;

        case "blue":

            theme = {

                accent: "#3B82F6",
                light: "#93C5FD",
                dark: "#1D4ED8",
                border: "rgba(59,130,246,.18)"

            };

            break;

        case "pink":

            theme = {

                accent: "#EC4899",
                light: "#F9A8D4",
                dark: "#BE185D",
                border: "rgba(236,72,153,.18)"

            };

            break;

        case "green":

            theme = {

                accent: "#22C55E",
                light: "#86EFAC",
                dark: "#15803D",
                border: "rgba(34,197,94,.18)"

            };

            break;

    }

    const root = document.documentElement;

    document.documentElement.style.setProperty(
        "--player-glow",
        `0 0 20px ${theme.accent}`
    );

    document.documentElement.style.setProperty(
        "--player-shadow",
        `0 0 10px ${theme.accent},
     0 0 30px ${theme.accent}`
    );

    document.documentElement.style.setProperty(
        "--progress-color",
        theme.accent
    );

    document.documentElement.style.setProperty(
        "--visualizer-color",
        theme.accent
    );

    document.documentElement.style.setProperty(
        "--lyrics-color",
        theme.accent
    );

    document.documentElement.style.setProperty(
        "--button-glow",
        theme.accent
    );

    root.style.setProperty("--accent", theme.accent);

    root.style.setProperty("--accent-light", theme.light);

    root.style.setProperty("--accent-dark", theme.dark);

    root.style.setProperty("--panel-border", theme.border);

}



/*====================================
        START SLEEP TIMER
====================================*/

function startSleepTimer(minutes) {

    clearSleepTimer();

    sleepSeconds = minutes * 60;

    updateSleepStatus();

    sleepInterval = setInterval(() => {

        sleepSeconds--;

        updateSleepStatus();

        if (sleepSeconds <= 0) {

            clearInterval(sleepInterval);

            audio.pause();

            sleepStatus.textContent =
                "🌙 Sleep Mode Activated";

        }

    }, 1000);

}

/*====================================
        UPDATE COUNTDOWN
====================================*/

function updateSleepStatus() {

    const min =
        Math.floor(sleepSeconds / 60);

    const sec =
        sleepSeconds % 60;

    sleepStatus.textContent =
        `Sleep in ${String(min).padStart(2, "0")}:${String(sec).padStart(2, "0")}`;

}

/*====================================
        CLEAR TIMER
====================================*/

function clearSleepTimer() {

    clearInterval(sleepInterval);

    clearTimeout(sleepTimer);

    sleepInterval = null;

    sleepTimer = null;

    sleepSeconds = 0;

}

/*====================================
        TIMER BUTTONS
====================================*/

sleepButtons.forEach(btn => {

    btn.addEventListener("click", () => {

        const min =
            Number(btn.dataset.time);

        startSleepTimer(min);

    });

});

cancelSleepBtn.addEventListener("click", () => {

    clearSleepTimer();

    sleepStatus.textContent =
        "No Sleep Timer";

});

/*====================================
        END CURRENT SONG
====================================*/

let sleepEndSong = false;

endSongBtn.addEventListener("click", () => {

    sleepEndSong = true;

    sleepStatus.textContent =
        "Sleep After Current Song";

});







/*========================================================
                    MUSIC STATISTICS
==========================================================*/


/*====================================
        UPDATE MUSIC STATS
=====================================*/

function updateMusicStats() {

    if (statTotalSongs)
        statTotalSongs.textContent =
            musicStats.songsPlayed;

    if (statListening)
        statListening.textContent =
            Math.floor(musicStats.listeningTime / 60) + "m";

    if (statDaily)
        statDaily.textContent =
            Math.floor(musicStats.todayListening / 60) + "m";

    if (statWeekly)
        statWeekly.textContent =
            Math.floor(musicStats.weeklyListening / 60) + "m";


    /* Most Played Song */

    let topSong = "-";
    let max = 0;

    for (const song in musicStats.mostPlayed) {

        if (musicStats.mostPlayed[song] > max) {

            max = musicStats.mostPlayed[song];

            topSong = song;

        }

    }

    statMostPlayed.textContent = topSong;


    /* Favorite Artist */

    let topArtist = "-";
    max = 0;

    for (const artist in musicStats.artistPlayed) {

        if (musicStats.artistPlayed[artist] > max) {

            max = musicStats.artistPlayed[artist];

            topArtist = artist;

        }

    }

    statFavoriteArtist.textContent =
        topArtist;

    updateDashboard();

}




/*====================================
        Aurora AI Dashboard
=====================================*/

function updateDashboard() {

    /* XP */

    xp =
        musicStats.songsPlayed * 10 +
        Math.floor(musicStats.listeningTime / 30);

    level =
        Math.floor(xp / 1000) + 1;

    const currentXP =
        xp % 1000;

    xpFill.style.width =
        (currentXP / 1000) * 100 + "%";

    xpText.textContent =
        `${currentXP} / 1000 XP`;

    /*=========================
            TOP SONG
    =========================*/

    let topSong = "-";

    let songPlay = 0;

    for (const song in musicStats.mostPlayed) {

        if (
            musicStats.mostPlayed[song]
            >
            songPlay
        ) {

            songPlay =
                musicStats.mostPlayed[song];

            topSong =
                song;

        }

    }

    /*=========================
        FAVORITE ARTIST
    =========================*/

    let topArtist = "-";

    let artistPlay = 0;

    for (const artist in musicStats.artistPlayed) {

        if (
            musicStats.artistPlayed[artist]
            >
            artistPlay
        ) {

            artistPlay =
                musicStats.artistPlayed[artist];

            topArtist =
                artist;

        }

    }

    /*=========================
            AI REPORT
    =========================*/

    let mood = "Balanced";

    if (
        musicStats.listeningTime > 7200
    ) {

        mood = "Music Addict";

    }

    else if (
        musicStats.listeningTime > 3600
    ) {

        mood = "EDM Lover";

    }

    else if (
        musicStats.listeningTime > 1200
    ) {

        mood = "Casual Listener";

    }

    aiReport.innerHTML = `

        👋 Good Evening Masum.<br><br>

        🎵 Songs Played :
        <b>${musicStats.songsPlayed}</b><br>

        🔥 Top Song :
        <b>${topSong}</b><br>

        🎤 Favorite Artist :
        <b>${topArtist}</b><br>

        🎧 Listening :
        <b>${Math.floor(musicStats.listeningTime / 60)} Minutes</b><br>

        🧠 Mood :
        <b>${mood}</b><br><br>

        Aurora Recommendation:<br>

        Keep listening to discover more songs.

    `;


    updateRecommendations();

}

/*====================================
        SMART AI RECOMMENDATION
=====================================*/

function updateRecommendations() {

    if (!recommendList) return;

    recommendList.innerHTML = "";

    const smartSongs =

        songs

            .filter(song => {

                return song.title !== songs[currentSong].title;

            })

            .sort((a, b) => {

                const playA =
                    musicStats.mostPlayed[a.title] || 0;

                const playB =
                    musicStats.mostPlayed[b.title] || 0;

                return playA - playB;

            })

            .slice(0, 3);

    smartSongs.forEach(song => {

        const card =
            document.createElement("div");

        card.className =
            "recommend-song";

        card.innerHTML = `

            <img
                src="${song.cover}"
                class="recommend-cover"
            >

            <div>

                <strong>

                    ${song.title}

                </strong>

                <small>

                    ${song.artist}

                </small>

            </div>

            <button
                class="recommend-play"

                onclick="playRecommended('${song.title}')">

                ▶

            </button>

        `;

        recommendList.appendChild(card);

    });

}

/*====================================
        PLAY RECOMMENDED
=====================================*/

function playRecommended(title) {

    const index =

        songs.findIndex(song => {

            return song.title === title;

        });

    if (index === -1) return;

    currentSong = index;

    loadSong(currentSong);

    playSong();

}



/*====================================
        CROSSFADE ENGINE
=====================================*/

/*====================================
        BIND PLAYER EVENTS
=====================================*/

function bindPlayerEvents(player) {

    player.ontimeupdate = () => {

        if (player.duration) {

            progress.value =
                (player.currentTime / player.duration) * 100;

            currentTime.textContent =
                formatTime(player.currentTime);

            duration.textContent =
                formatTime(player.duration);

        }

        /*==============================
                MUSIC STATS
        ==============================*/

        musicStats.listeningTime++;

        musicStats.todayListening++;

        musicStats.weeklyListening++;

        updateMusicStats();

        /*==============================
                AUTO CROSSFADE
        ==============================*/

        const triggerTime =

            Math.max(

                player.duration -

                (crossfadeDuration / 1000),

                0

            );

        if (

            !isCrossfading &&

            !isRepeat &&

            player.duration &&

            player.currentTime >= triggerTime

        ) {

            let nextIndex;

            if (isShuffle) {

                nextIndex =

                    Math.floor(

                        Math.random() * songs.length

                    );

            }

            else {

                nextIndex =

                    (currentSong + 1)

                    %

                    songs.length;

            }

            startCrossfade(nextIndex);

        }

    };

}



/*====================================
        SWAP PLAYERS
=====================================*/

function swapPlayers() {

    const temp = activePlayer;

    activePlayer = inactivePlayer;

    inactivePlayer = temp;

}

/*====================================
        AUDIO EVENT MANAGER
=====================================*/

function registerAudioEvents(player) {

    player.onplay = () => {

        console.log("▶ Playing");

    };

    player.onpause = () => {

        console.log("⏸ Paused");

    };

    player.onended = () => {

        console.log("⏹ Ended");

    };

    player.onerror = (e) => {

        console.error(

            "Audio Error",

            e

        );

    };

}




/*====================================
        START CROSSFADE
=====================================*/

async function startCrossfade(nextIndex) {

    if (isCrossfading) return;

    isCrossfading = true;

    const song = songs[nextIndex];

    inactivePlayer.src = song.src;

    inactivePlayer.volume = 0;

    try {

        await inactivePlayer.play();

    } catch (err) {

        console.error("Crossfade Error:", err);

        isCrossfading = false;

        return;

    }

    /*====================================
        SMOOTH CROSSFADE
    =====================================*/

    const startTime = performance.now();

    function animateCrossfade(now) {

        const progress =

            Math.min(

                (now - startTime) / crossfadeDuration,

                1

            );

        activePlayer.volume =
            Math.max(0, Math.min(volume, volume * (1 - progress)));

        inactivePlayer.volume =
            Math.max(0, Math.min(volume, volume * progress));

        if (progress < 1) {

            requestAnimationFrame(

                animateCrossfade

            );

        }

        else {

            activePlayer.pause();

            activePlayer.currentTime = 0;

            activePlayer.volume = volume;

            inactivePlayer.volume = volume;

            swapPlayers();

            currentSong = nextIndex;
            isPlaying = true;
            lastStatsSecond = -1;

            loadSongUI(currentSong);

            updateDashboard();

            updateRecommendations();

            isCrossfading = false;

        }

    }

    requestAnimationFrame(

        animateCrossfade

    );
}



/*=====================================================
                    AURORA CAST ENGINE
=====================================================*/

/*====================================
        AURORA CAST STATE
=====================================*/

let castSession = null;

let castDevice = null;

let isCasting = false;

let castInitialized = false;


/*====================================
        CAST ELEMENTS
=====================================*/

const auroraCastBtn =
    document.getElementById("aurora-cast-btn");

const auroraCastSetting =
    document.getElementById("aurora-cast-setting");

const castStatus =
    document.getElementById("cast-status");


/*=====================================================
        INITIALIZE AURORA CAST
=====================================================*/

/*====================================*
 * AURORA CAST INITIALIZATION
 *=====================================*/

function initializeAuroraCast() {

    console.log(
        "📡 Initializing Aurora Cast..."
    );


    /*====================================
        CHECK FRAMEWORK
    ====================================*/

    if (
        typeof window.cast === "undefined" ||
        typeof window.cast.framework === "undefined"
    ) {

        console.warn(
            "⚠️ Cast Framework unavailable."
        );

        return false;
    }


    /*====================================
        CHECK BASE API
    ====================================*/

    if (
        typeof window.chrome === "undefined" ||
        typeof window.chrome.cast === "undefined"
    ) {

        console.warn(
            "⚠️ chrome.cast Base API unavailable."
        );

        return false;
    }


    /*====================================
        CHECK MEDIA API
    ====================================*/

    if (
        typeof window.chrome.cast.media === "undefined"
    ) {

        console.warn(
            "⚠️ chrome.cast.media unavailable."
        );

        return false;
    }


    /*====================================
        GET CAST CONTEXT
    ====================================*/

    const context =
        window.cast.framework
            .CastContext
            .getInstance();


    /*====================================
        SET CAST OPTIONS
    ====================================*/

    context.setOptions({

        receiverApplicationId:
            window.chrome.cast.media
                .DEFAULT_MEDIA_RECEIVER_APP_ID,

        autoJoinPolicy:
            window.chrome.cast
                .AutoJoinPolicy
                .ORIGIN_SCOPED

    });


    castInitialized = true;

    console.log(
        "✅ Aurora Cast Initialized"
    );

    return true;

}


/*=====================================================
        CAST SESSION STATE LISTENER
=====================================================*/

function setupAuroraCastListeners() {

    if (
        !window.cast ||
        !window.cast.framework
    ) {

        return;
    }


    const context =
        cast.framework.CastContext
            .getInstance();


    context.addEventListener(

        cast.framework
            .CastContextEventType
            .SESSION_STATE_CHANGED,

        event => {

            console.log(
                "📡 Cast Session State:",
                event.sessionState
            );


            /*------------------------------
                SESSION STARTED
            ------------------------------*/

            if (
                event.sessionState ===
                cast.framework
                    .SessionState
                    .SESSION_STARTED
            ) {

                castSession =
                    context.getCurrentSession();


                if (castSession) {

                    isCasting = true;

                    castDevice =
                        castSession
                            .getCastDevice();


                    auroraCastSetting
                        .classList
                        .add("connected");


                    castStatus.textContent =
                        "DEVICE CONNECTED";


                    auroraCastBtn.textContent =
                        "DISCONNECT";


                    console.log(
                        "📡 Connected:",
                        castDevice
                    );


                    /*--------------------------
                        CAST CURRENT SONG
                    --------------------------*/

                    castCurrentSong();

                }

            }


            /*------------------------------
                SESSION RESUMED
            ------------------------------*/

            else if (
                event.sessionState ===
                cast.framework
                    .SessionState
                    .SESSION_RESUMED
            ) {

                castSession =
                    context.getCurrentSession();


                if (castSession) {

                    isCasting = true;

                    castDevice =
                        castSession
                            .getCastDevice();


                    auroraCastSetting
                        .classList
                        .add("connected");


                    castStatus.textContent =
                        "DEVICE CONNECTED";


                    auroraCastBtn.textContent =
                        "DISCONNECT";

                }

            }


            /*------------------------------
                SESSION ENDED
            ------------------------------*/

            else if (
                event.sessionState ===
                cast.framework
                    .SessionState
                    .SESSION_ENDED
            ) {

                isCasting = false;

                castSession = null;

                castDevice = null;


                auroraCastSetting
                    .classList
                    .remove("connected");


                castStatus.textContent =
                    "DEVICE OFFLINE";


                auroraCastBtn.textContent =
                    "CONNECT";


                console.log(
                    "📡 Aurora Cast Disconnected"
                );

            }

        }

    );

}


/*=====================================================
        AURORA CAST CONNECT / DISCONNECT
=====================================================*/

auroraCastBtn.addEventListener(
    "click",
    async () => {

        console.log(
            "📡 Aurora Cast button clicked"
        );


        /*====================================
            CHECK API
        ====================================*/

        if (
            window.auroraCastAPIAvailable !== true
        ) {

            console.warn(
                "⚠️ Google Cast API not ready."
            );

            castStatus.textContent =
                "CAST NOT READY";

            showToast(
                "📡 Google Cast API not ready"
            );

            return;

        }


        /*====================================
            INITIALIZE
        ====================================*/

        if (!castInitialized) {

            const initialized =
                initializeAuroraCast();

            if (!initialized) {

                castStatus.textContent =
                    "CAST UNAVAILABLE";

                return;

            }

        }


        /*====================================
            GET CONTEXT
        ====================================*/

        const context =
            window.cast.framework
                .CastContext
                .getInstance();


        /*====================================
            DISCONNECT
        ====================================*/

        if (
            context.getCastState() ===
            window.cast.framework
                .CastState
                .CONNECTED
        ) {

            context.endCurrentSession(true);

            return;

        }


        /*====================================
            CONNECT
        ====================================*/

        try {

            await context.requestSession();

            castSession =
                context.getCurrentSession();

            if (!castSession) {

                console.warn(
                    "⚠️ Cast session not created."
                );

                return;

            }


            isCasting = true;

            castDevice =
                castSession.getCastDevice();


            /*================================
                UI
            =================================*/

            auroraCastSetting
                .classList.add("connected");

            castStatus.textContent =
                "DEVICE CONNECTED";

            auroraCastBtn.textContent =
                "DISCONNECT";


            console.log(
                "📡 Connected:",
                castDevice
            );


            showToast(
                "📡 Connected to " +
                castDevice.friendlyName
            );


            /*================================
                CAST CURRENT SONG
            =================================*/

            castCurrentSong();

        }

        catch (error) {

            console.error(
                "❌ Aurora Cast connection error:",
                error
            );

            isCasting = false;

            castSession = null;

            castDevice = null;

            auroraCastSetting
                .classList.remove("connected");

            castStatus.textContent =
                "DEVICE OFFLINE";

            auroraCastBtn.textContent =
                "CONNECT";

        }

    }
);

/*=====================================================
        CAST CURRENT SONG
=====================================================*/

function castCurrentSong() {

    /*--------------------------------
        CHECK CONNECTION
    --------------------------------*/

    if (
        !isCasting ||
        !castSession
    ) {

        console.warn(
            "📡 Aurora Cast is not connected."
        );

        return;
    }


    /*--------------------------------
        GET CURRENT SONG
    --------------------------------*/

    const song =
        songs[currentSong];


    if (!song) {

        console.warn(
            "📡 No current song found."
        );

        return;
    }


    /*--------------------------------
        CREATE ABSOLUTE MEDIA URL
    --------------------------------*/

    const mediaURL =
        new URL(
            song.src,
            window.location.href
        ).href;


    console.log(
        "📡 Casting:",
        mediaURL
    );


    /*--------------------------------
        MEDIA INFO
    --------------------------------*/

    const mediaInfo =
        new chrome.cast.media.MediaInfo(
            mediaURL,
            "audio/mpeg"
        );


    /*--------------------------------
        STREAM TYPE
    --------------------------------*/

    mediaInfo.streamType =
        chrome.cast.media
            .StreamType
            .BUFFERED;


    /*--------------------------------
        MUSIC METADATA
    --------------------------------*/

    const metadata =
        new chrome.cast.media
            .MusicTrackMediaMetadata();


    metadata.title =
        song.title;


    metadata.artist =
        song.artist;


    /*--------------------------------
        COVER IMAGE
    --------------------------------*/

    if (song.cover) {

        const coverURL =
            new URL(
                song.cover,
                window.location.href
            ).href;


        metadata.images = [

            new chrome.cast.Image(
                coverURL
            )

        ];

    }


    mediaInfo.metadata =
        metadata;


    /*--------------------------------
        LOAD REQUEST
    --------------------------------*/

    const request =
        new chrome.cast.media.LoadRequest(
            mediaInfo
        );


    request.autoplay = true;


    /*--------------------------------
        LOAD MEDIA
    --------------------------------*/

    castSession
        .loadMedia(request)

        .then(() => {

            console.log(
                "🎵 Aurora Cast Playing:",
                song.title
            );


            showToast(
                "📡 Casting " +
                song.title
            );

        })

        .catch(error => {

            console.error(
                "📡 Aurora Cast Media Error:",
                error
            );


            showToast(
                "⚠️ Unable to cast song"
            );

        });

}


/*=====================================================
        CAST PLAY
=====================================================*/

function castPlay() {

    if (
        !isCasting ||
        !castSession
    ) {

        return;
    }


    const player =
        castSession.getMediaSession();


    if (!player) {

        console.warn(
            "📡 No Cast media session."
        );

        return;
    }


    player.play(

        null,

        () => {

            console.log(
                "📡 Aurora Cast Playing"
            );

        },

        error => {

            console.error(
                "📡 Aurora Cast Play Error:",
                error
            );

        }

    );

}


/*=====================================================
        CAST PAUSE
=====================================================*/

function castPause() {

    if (
        !isCasting ||
        !castSession
    ) {

        return;
    }


    const player =
        castSession.getMediaSession();


    if (!player) {

        console.warn(
            "📡 No Cast media session."
        );

        return;
    }


    player.pause(

        null,

        () => {

            console.log(
                "📡 Aurora Cast Paused"
            );

        },

        error => {

            console.error(
                "📡 Aurora Cast Pause Error:",
                error
            );

        }

    );

}


/*=====================================================
        CAST STOP
=====================================================*/

function castStop() {

    if (
        !isCasting ||
        !castSession
    ) {

        return;
    }


    const player =
        castSession.getMediaSession();


    if (!player) {

        return;
    }


    player.stop(

        null,

        () => {

            console.log(
                "📡 Aurora Cast Stopped"
            );

        },

        error => {

            console.error(
                "📡 Aurora Cast Stop Error:",
                error
            );

        }

    );

}


/*=====================================================
        CAST SEEK
=====================================================*/

function castSeek(seconds) {

    if (
        !isCasting ||
        !castSession
    ) {

        return;
    }


    const player =
        castSession.getMediaSession();


    if (!player) {

        return;
    }


    const seekRequest =
        new chrome.cast.media
            .SeekRequest();


    seekRequest.currentTime =
        seconds;


    player.seek(

        seekRequest,

        () => {

            console.log(
                "📡 Aurora Cast Seek:",
                seconds
            );

        },

        error => {

            console.error(
                "📡 Aurora Cast Seek Error:",
                error
            );

        }

    );

}


/*=====================================================
        CAST VOLUME
=====================================================*/

function castVolume(volume) {

    if (
        !isCasting ||
        !castSession
    ) {

        return;
    }


    const volumeController =
        castSession.getDevice();


    if (!volumeController) {

        return;
    }


    const volumeRequest =
        new chrome.cast.VolumeRequest();


    volumeRequest.volume =
        new chrome.cast.Volume();


    volumeRequest.volume.level =
        Math.max(
            0,
            Math.min(
                volume,
                1
            )
        );


    castSession
        .setReceiverVolumeLevel(

            volumeRequest.volume.level

        )

        .catch(error => {

            console.error(
                "📡 Aurora Cast Volume Error:",
                error
            );

        });

}


/*=====================================================
        CAST INITIALIZATION CALLBACK
=====================================================*/

window.__onGCastApiAvailable =
    function (isAvailable) {

        console.log(
            "📡 Cast API Available:",
            isAvailable
        );


        if (!isAvailable) {

            console.warn(
                "📡 Google Cast API unavailable."
            );


            if (castStatus) {

                castStatus.textContent =
                    "CAST UNAVAILABLE";

            }


            return;
        }


        /*--------------------------------
            INITIALIZE
        --------------------------------*/

        window.auroraCastAPIAvailable = true;

        const initialized =
            typeof initializeAuroraCast === "function"
                ? initializeAuroraCast()
                : false;

        if (initialized) {
            setupAuroraCastListeners();
        }

    };





/*---------------------------------------
           Device Music Scanner
----------------------------------------*/

function escapeHTML(value) {

    return String(value ?? "")
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");
}

let deviceSongs = [];
const DEVICE_MUSIC_RENDER_LIMIT = 100;
const deviceAudioUrlCache = new Map();

function revokeDeviceAudioUrlsExcept(activeUri) {
    for (const [uri, url] of deviceAudioUrlCache.entries()) {
        if (uri !== activeUri) {
            URL.revokeObjectURL(url);
            deviceAudioUrlCache.delete(uri);
        }
    }
}

async function scanDeviceMusic() {

    if (
        deviceSongs.length > 0
    ) {
        renderDeviceMusic(deviceSongs.slice(0, DEVICE_MUSIC_RENDER_LIMIT));

        return;
    }
    
    if (!deviceMusicList) return;

    deviceMusicStatus.textContent = "SCANNING...";
    deviceMusicCount.textContent = "Reading device music library...";

    deviceMusicList.innerHTML = `
        <div class="device-music-empty">
            <div class="empty-icon">
                <i class="fa-solid fa-spinner fa-spin"></i>
            </div>
            <h3>SCANNING DEVICE</h3>
            <p>Searching for music on your phone...</p>
        </div>
    `;

    try {

        // Capacitor native plugin
        const AuroraMedia =
            window.Capacitor?.Plugins?.AuroraMedia;

        if (!AuroraMedia) {

            throw new Error(
                "AuroraMedia native plugin is not available."
            );
        }

        const result =
            await AuroraMedia.getSongs();

        deviceSongs =
            Array.isArray(result?.media)
                ? result.media
                : [];

        deviceMusicStatus.textContent =
            "SCAN COMPLETE";

        deviceMusicCount.textContent =
            `${deviceSongs.length} song${deviceSongs.length === 1 ? "" : "s"} found`;

        renderDeviceMusic(deviceSongs.slice(0, DEVICE_MUSIC_RENDER_LIMIT));

    } catch (error) {

        console.error(
            "Aurora Device Music Error:",
            error
        );

        deviceMusicStatus.textContent =
            "SCAN FAILED";

        deviceMusicCount.textContent =
            "Unable to read device music";

        deviceMusicList.innerHTML = `
            <div class="device-music-empty">

                <div class="empty-icon">
                    <i class="fa-solid fa-triangle-exclamation"></i>
                </div>

                <h3>SCAN FAILED</h3>

                <p>
                    ${escapeHTML(
            error?.message ||
            "Unable to access device music."
        )}
                </p>

                <button
                    id="scan-device-music-error"
                    type="button"
                >
                    <i class="fa-solid fa-arrows-rotate"></i>
                    TRY AGAIN
                </button>

            </div>
        `;

        document
            .getElementById("scan-device-music-error")
            ?.addEventListener(
                "click",
                scanDeviceMusic
            );
    }
}

function renderDeviceMusic(songs) {

    if (!deviceMusicList) return;

    if (!songs.length) {

        deviceMusicList.innerHTML = `
            <div class="device-music-empty">

                <div class="empty-icon">
                    <i class="fa-solid fa-music"></i>
                </div>

                <h3>NO MUSIC FOUND</h3>

                <p>
                    No music files were found on this device.
                </p>

            </div>
        `;

        return;
    }

    deviceMusicList.innerHTML =
        songs.map((song, index) => {

            const title =
                escapeHTML(
                    song.title ||
                    "Unknown Song"
                );

            const artist =
                escapeHTML(
                    song.artist ||
                    "Unknown Artist"
                );

            const album =
                escapeHTML(
                    song.album ||
                    "Unknown Album"
                );

            const artwork = song.albumArtUri || "";

            return `
                <button
                    class="device-song"
                    data-device-index="${index}"
                    type="button"
                >

                    <div class="device-song-art">

                        ${artwork
                    ? `
                                <img
                                    src="${artwork}"
                                    alt=""
                                >
                            `
                    : `
                                <i class="fa-solid fa-music"></i>
                            `
                }

                    </div>

                    <div class="device-song-info">

                        <strong>
                            ${title}
                        </strong>

                        <span>
                            ${artist}
                        </span>

                        <small>
                            ${album}
                        </small>

                    </div>

                    <i class="fa-solid fa-play"></i>

                </button>
            `;

        }).join("");

    document
        .querySelectorAll(".device-song")
        .forEach(button => {

            button.addEventListener(
                "click",
                () => {

                    const index =
                        Number(
                            button.dataset.deviceIndex
                        );

                    playDeviceSong(
                        deviceSongs[index]
                    );
                }
            );

        });
}


/*---------------------------------------
           Device Song Playback
----------------------------------------*/
async function playDeviceSong(deviceSong) {

    if (!deviceSong || !deviceSong.uri) {

        showToast("❌ Unable to play this song");

        return;
    }

    try {

        showToast("⏳ Loading song...");

        const AuroraMedia =
            window.Capacitor?.Plugins?.AuroraMedia;

        if (!AuroraMedia) {

            throw new Error(
                "AuroraMedia plugin unavailable."
            );
        }

        let playableUrl =
            deviceAudioUrlCache.get(deviceSong.uri);

        if (!playableUrl) {
            const result =
                await AuroraMedia.getMediaData({
                    uri: deviceSong.uri,
                    mimeType:
                        deviceSong.mimeType ||
                        "audio/mpeg"
                });

            if (!result?.data) {
                throw new Error(
                    "Audio data unavailable."
                );
            }

            const byteCharacters =
                atob(result.data);

            const byteNumbers =
                new Uint8Array(
                    byteCharacters.length
                );

            for (
                let i = 0;
                i < byteCharacters.length;
                i++
            ) {
                byteNumbers[i] =
                    byteCharacters.charCodeAt(i);
            }

            const blob =
                new Blob(
                    [byteNumbers],
                    {
                        type:
                            result.mimeType ||
                            deviceSong.mimeType ||
                            "audio/mpeg"
                    }
                );

            playableUrl =
                URL.createObjectURL(blob);

            // Keep only the current local track in memory. This prevents
            // large base64-decoded songs from accumulating and slowing
            // down the WebView after several plays.
            revokeDeviceAudioUrlsExcept(
                deviceSong.uri
            );

            deviceAudioUrlCache.set(
                deviceSong.uri,
                playableUrl
            );
        }

        let existingIndex =
            songs.findIndex(
                song =>
                    song.deviceUri ===
                    deviceSong.uri
            );

        if (existingIndex === -1) {

            songs.push({

                id:
                    `device-${deviceSong.id}`,

                title:
                    deviceSong.title ||
                    "Unknown Song",

                artist:
                    deviceSong.artist ||
                    "Unknown Artist",

                cover:
                    "",

                src:
                    playableUrl,

                lrc:
                    "",

                duration:
                    formatDeviceDuration(
                        deviceSong.duration
                    ),

                favorite:
                    false,

                recent:
                    true,

                trending:
                    false,

                deviceUri:
                    deviceSong.uri,

                deviceMimeType:
                    deviceSong.mimeType
            });

            existingIndex =
                songs.length - 1;

        } else {

            songs[existingIndex].src =
                playableUrl;
        }

        currentSong =
            existingIndex;

        /*
         * PLAYER UI
         */

        if (deviceMusicPanel) {

            deviceMusicPanel.classList.remove(
                "active"
            );
        }

        dockBtns.forEach(btn => {

            btn.classList.remove(
                "active"
            );

        });

        if (dockBtns[0]) {

            dockBtns[0].classList.add(
                "active"
            );
        }

        if (dockPill) {

            dockPill.style.transform =
                "translateX(0px)";
        }

        /*
         * COVER
         */

        albumCover.src =
            "./assets/images/default-cover.jpg";

        /*
         * PLAY
         */

        await playSong();

        showToast(
            "🎵 Playing " +
            (deviceSong.title ||
                "Device Song")
        );

    } catch (error) {

        console.error(
            "Device song playback error:",
            error
        );

        showToast(
            "❌ Unable to play device song"
        );
    }
}




function formatDeviceDuration(milliseconds) {

    const totalSeconds =
        Math.floor(
            Number(milliseconds || 0) / 1000
        );

    const minutes =
        Math.floor(totalSeconds / 60);

    const seconds =
        totalSeconds % 60;

    return `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
}

async function initDeviceMusic() {

    if (!deviceMusicPanel) return;

    // Scan button
    scanDeviceMusicBtn?.addEventListener(
        "click",
        scanDeviceMusic
    );

    // Empty-state scan button
    scanDeviceMusicEmptyBtn?.addEventListener(
        "click",
        scanDeviceMusic
    );

    // Search
    const searchInput =
        document.getElementById(
            "device-music-search"
        );

    searchInput?.addEventListener(
        "input",
        () => {

            const query =
                searchInput.value
                    .trim()
                    .toLowerCase();

            if (!query) {
                renderDeviceMusic(deviceSongs);
                return;
            }

            const filtered =
                deviceSongs.filter(song => {

                    const title =
                        String(
                            song.title || ""
                        ).toLowerCase();

                    const artist =
                        String(
                            song.artist || ""
                        ).toLowerCase();

                    const album =
                        String(
                            song.album || ""
                        ).toLowerCase();

                    return (
                        title.includes(query) ||
                        artist.includes(query) ||
                        album.includes(query)
                    );
                });

            renderDeviceMusic(filtered.slice(0, DEVICE_MUSIC_RENDER_LIMIT));
        }
    );
}

window.addEventListener(
    "load",
    () => {
        initDeviceMusic();
    }
);







