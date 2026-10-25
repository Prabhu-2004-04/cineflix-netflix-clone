// CineFlix — Open Movie Streaming Engine

const movies = [
  {
    title: "Big Buck Bunny",
    year: 2008,
    genre: "Animation",
    duration: "9:56",
    desc: "A large and gentle rabbit with a heart of gold is provoked by three bullying woodland creatures—Frank the flying squirrel, Rinky the red squirrel, and Gamera the chinchilla. Bunny decides to take a clever, comedic stand to protect his forest home.",
    credit: "Blender Foundation · CC BY 3.0 · peach.blender.org. Created by the Blender Institute with an international team of open-source artists.",
    source: "https://peach.blender.org/",
    youtubeId: "aqz-KE-bpKQ",
    a: "#4c895d",
    b: "#d2a64c"
  },
  {
    title: "Sintel",
    year: 2010,
    genre: "Adventure",
    duration: "14:48",
    desc: "A lonely young woman named Sintel rescues and nurses a wounded baby dragon, forming an inseparable bond. When an adult dragon attacks and kidnaps the baby, Sintel embarks on an epic, heart-wrenching quest across treacherous landscapes to reunite with her companion.",
    credit: "Blender Foundation · CC BY 3.0 · durian.blender.org. Produced by Ton Roosendaal and directed by Colin Levy.",
    source: "https://durian.blender.org/",
    youtubeId: "eRsGyueVLvQ",
    a: "#28546d",
    b: "#b56a43"
  },
  {
    title: "Tears of Steel",
    year: 2012,
    genre: "Sci-Fi",
    duration: "12:14",
    desc: "Set in a dystopian future Amsterdam, a ragtag team of scientists and fighters attempts to stage an emotional encounter in the historic Oude Kerk. Their mission is to prevent a catastrophic robotic conquest led by a girl whose broken heart sparked an apocalypse.",
    credit: "Blender Foundation · CC BY 3.0 · mango.blender.org. Open-source VFX movie directed by Ian Hubert.",
    source: "https://mango.blender.org/",
    youtubeId: "R6MlUcmOul8",
    a: "#263b58",
    b: "#a84639"
  },
  {
    title: "Elephants Dream",
    year: 2006,
    genre: "Sci-Fi",
    duration: "10:53",
    desc: "The world's first open-source 3D animated movie. Proog, an experienced elder, guides young Emo through the surreal, sprawling mechanical labyrinth of a giant machine. As reality bends, conflicting worldviews culminate in an intense confrontation.",
    credit: "Blender Foundation & Netherlands Media Art Institute · CC BY 2.5 · orange.blender.org. Directed by Bassam Kurdali.",
    source: "https://orange.blender.org/",
    youtubeId: "TLkA0RELQ1g",
    a: "#b9673c",
    b: "#4c2a59"
  },
  {
    title: "Spring",
    year: 2019,
    genre: "Adventure",
    duration: "7:44",
    desc: "A skilled shepherd girl and her loyal dog face the ancient, colossal spirits of the clouds to usher in the change of seasons. A visually stunning fantasy adventure showcasing modern open-source grooming, physics, and animation rendering.",
    credit: "Blender Animation Studio · CC BY 4.0 · studio.blender.org. Written and directed by Andy Goralczyk.",
    source: "https://studio.blender.org/films/spring/",
    youtubeId: "WhWc3b3KhnY",
    a: "#32775c",
    b: "#d2a95f"
  },
  {
    title: "Cosmos Laundromat",
    year: 2015,
    genre: "Sci-Fi",
    duration: "12:10",
    desc: "On a desolate windswept island, Franck, a deeply depressed sheep, is on the verge of ending it all. He is stopped by Victor, an enigmatic salesman who offers him the ultimate temptation: endless alternate lives in a cosmic laundromat.",
    credit: "Blender Foundation · CC BY 4.0 · studio.blender.org. Directed by Mathieu Auvray, produced by Ton Roosendaal.",
    source: "https://studio.blender.org/films/cosmos-laundromat/",
    youtubeId: "Y-rmzh0PI3c",
    a: "#334e7b",
    b: "#bd7548"
  },
  {
    title: "Caminandes: Gran Dillama",
    year: 2013,
    genre: "Comedy",
    duration: "2:26",
    desc: "In the harsh, desolate winter of Patagonia, Koro the stubborn llama spots an irresistible berry across a seemingly quiet paved highway. His quest to cross the road turns into a cartoonish slapstick battle against unforgiving traffic.",
    credit: "Blender Foundation · CC BY 3.0 · studio.blender.org. Directed by Pablo Vazquez.",
    source: "https://studio.blender.org/films/caminandes-llamigos/",
    youtubeId: "Z4C82eyhwgU",
    a: "#b47c42",
    b: "#3e6f8b"
  },
  {
    title: "Agent 327: Operation Barbershop",
    year: 2017,
    genre: "Animation",
    duration: "3:51",
    desc: "Secret agent Hendrik Kuiper investigates a seemingly innocent barbershop in Amsterdam. His covert reconnaissance quickly spirals into a thrilling, high-octane martial arts fight against a menacing mercenary and an unexpected disguise.",
    credit: "Blender Animation Studio · CC BY 4.0 · studio.blender.org. Based on the comic by Martin Lodewijk.",
    source: "https://studio.blender.org/films/agent-327/",
    youtubeId: "mN0zPOpADL4",
    a: "#9b3d38",
    b: "#242c49"
  },
  {
    title: "Coffee Run",
    year: 2020,
    genre: "Animation",
    duration: "3:00",
    desc: "Fueled by caffeine, a young woman steps out for a coffee run. Along the way, everyday sights and scents trigger a bittersweet, beautifully animated loop of memories exploring companionship, loss, and acceptance.",
    credit: "Blender Animation Studio · CC BY 4.0 · studio.blender.org. Directed by Hjalti Hjalmarsson.",
    source: "https://studio.blender.org/films/coffee-run/",
    youtubeId: "PVGeM40dABA",
    a: "#84503d",
    b: "#d8b678"
  },
  {
    title: "Sprite Fright",
    year: 2021,
    genre: "Adventure",
    duration: "10:30",
    desc: "An 80s-inspired horror-comedy: a group of rowdy British teenagers ventures into a remote woodland for an afternoon of carefree rebellion, only to encounter deceptively adorable mushroom creatures who violently protect nature.",
    credit: "Blender Studio · CC BY 4.0 · studio.blender.org. Directed by Matthew Luhn (Pixar veteran).",
    source: "https://studio.blender.org/films/sprite-fright/",
    youtubeId: "_cMxraX_5RE",
    a: "#386448",
    b: "#a84b46"
  }
];

// Utility functions
const $ = (id) => document.getElementById(id);
const esc = (s) => String(s || "").replace(/[&<>"']/g, (c) => ({
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;",
  '"': "&quot;",
  "'": "&#39;"
}[c]));

function formatTime(seconds) {
  if (isNaN(seconds) || seconds < 0) return "00:00";
  const s = Math.floor(seconds);
  const m = Math.floor(s / 60);
  const remSec = s % 60;
  const h = Math.floor(m / 60);
  const remMin = m % 60;
  if (h > 0) {
    return `${h}:${remMin < 10 ? "0" : ""}${remMin}:${remSec < 10 ? "0" : ""}${remSec}`;
  }
  return `${m < 10 ? "0" : ""}${m}:${remSec < 10 ? "0" : ""}${remSec}`;
}

// Global Player State
let ytPlayer = null;
let ytApiReady = false;
let currentMovie = null;
let updateInterval = null;
let controlsTimeout = null;
let isDraggingSeek = false;
let isMuted = false;
let previousVolume = 100;
let isPlaying = false;
let totalDuration = 0;

// YouTube API Ready Hook
window.onYouTubeIframeAPIReady = function () {
  ytApiReady = true;
};

// Render Movie Cards Grid
function render() {
  const query = $("search").value.toLowerCase().trim();
  const genre = $("genre").value;

  const filtered = movies.filter((m) => {
    const matchGenre = genre === "All" || m.genre === genre;
    const matchQuery = `${m.title} ${m.genre} ${m.desc} ${m.year}`.toLowerCase().includes(query);
    return matchGenre && matchQuery;
  });

  $("count").textContent = `${filtered.length} ${filtered.length === 1 ? "title" : "titles"}`;

  if (filtered.length === 0) {
    $("grid").innerHTML = `
      <div style="grid-column: 1 / -1; text-align: center; padding: 60px 20px; color: #888;">
        <h3 style="color: #fff; margin-bottom: 8px;">No movies found</h3>
        <p>Try adjusting your search terms or genre filter.</p>
      </div>`;
    return;
  }

  $("grid").innerHTML = filtered.map((m) => {
    const thumbUrl = `https://i.ytimg.com/vi/${m.youtubeId}/hqdefault.jpg`;
    return `
      <article class="card" tabindex="0" role="button" data-title="${esc(m.title)}" aria-label="Play ${esc(m.title)}">
        <div class="poster" style="--a: ${m.a}; --b: ${m.b}; --bg-img: url('${thumbUrl}');">
          <span class="kicker">OPEN MOVIE · ${m.year}</span>
          <strong>${esc(m.title.toUpperCase())}</strong>
          <span class="play" aria-hidden="true">▶</span>
        </div>
        <h3>${esc(m.title)}</h3>
        <p>${m.year} · ${esc(m.genre)} · ${esc(m.duration)}</p>
      </article>
    `;
  }).join("");
}

// Player UI updates
function setPlayState(playing) {
  isPlaying = playing;
  const playIcon = document.querySelector("#ctrl-play .icon-play");
  const pauseIcon = document.querySelector("#ctrl-play .icon-pause");
  const centerPlay = $("center-play-btn");
  const centerPlayIcon = centerPlay.querySelector(".center-icon-play");
  const centerPauseIcon = centerPlay.querySelector(".center-icon-pause");

  if (playing) {
    playIcon?.classList.add("hidden");
    pauseIcon?.classList.remove("hidden");
    centerPlayIcon?.classList.add("hidden");
    centerPauseIcon?.classList.remove("hidden");
  } else {
    playIcon?.classList.remove("hidden");
    pauseIcon?.classList.add("hidden");
    centerPlayIcon?.classList.remove("hidden");
    centerPauseIcon?.classList.add("hidden");
  }
}

function updateLoading(show, message = "Loading authentic movie stream...") {
  const loader = $("player-loading");
  const text = $("player-loading-text");
  if (text) text.textContent = message;
  if (show) {
    loader.classList.remove("hidden");
  } else {
    loader.classList.add("hidden");
  }
}

function updateError(show, message = "") {
  const err = $("player-error");
  const msgEl = $("error-message");
  if (show) {
    if (message && msgEl) msgEl.textContent = message;
    err.classList.remove("hidden");
    updateLoading(false);
  } else {
    err.classList.add("hidden");
  }
}

function updateProgress() {
  if (!ytPlayer || isDraggingSeek) return;

  try {
    if (typeof ytPlayer.getCurrentTime === "function" && typeof ytPlayer.getDuration === "function") {
      const current = ytPlayer.getCurrentTime() || 0;
      const dur = ytPlayer.getDuration() || totalDuration || 1;
      totalDuration = dur;

      const pct = Math.min(100, Math.max(0, (current / dur) * 100));
      $("progress-played").style.width = `${pct}%`;
      $("progress-thumb").style.left = `${pct}%`;
      $("progress-container").setAttribute("aria-valuenow", Math.round(pct));

      // Loaded / buffered
      if (typeof ytPlayer.getVideoLoadedFraction === "function") {
        const bufferedPct = (ytPlayer.getVideoLoadedFraction() || 0) * 100;
        $("progress-buffered").style.width = `${bufferedPct}%`;
      }

      $("time-display").textContent = `${formatTime(current)} / ${formatTime(dur)}`;
    }
  } catch (e) {
    // Player not ready yet
  }
}

function startProgressTimer() {
  stopProgressTimer();
  updateInterval = setInterval(updateProgress, 250);
}

function stopProgressTimer() {
  if (updateInterval) {
    clearInterval(updateInterval);
    updateInterval = null;
  }
}

// User Activity & Controls Auto-Hide
function scheduleControlsHide() {
  clearTimeout(controlsTimeout);
  const controls = $("player-controls");
  controls.classList.remove("fade-out");

  if (isPlaying) {
    controlsTimeout = setTimeout(() => {
      if (isPlaying && !isDraggingSeek) {
        controls.classList.add("fade-out");
      }
    }, 2800);
  }
}

function resetControlsHide() {
  const controls = $("player-controls");
  controls.classList.remove("fade-out");
  clearTimeout(controlsTimeout);
}

// Volume & Mute handling
function applyVolume(vol) {
  const slider = $("volume-slider");
  const volHigh = document.querySelector("#ctrl-mute .icon-vol-high");
  const volMuted = document.querySelector("#ctrl-mute .icon-vol-muted");

  vol = Math.max(0, Math.min(100, vol));
  slider.value = vol;

  if (vol === 0 || isMuted) {
    volHigh?.classList.add("hidden");
    volMuted?.classList.remove("hidden");
  } else {
    volHigh?.classList.remove("hidden");
    volMuted?.classList.add("hidden");
  }

  if (ytPlayer && typeof ytPlayer.setVolume === "function") {
    try {
      if (vol === 0) {
        ytPlayer.mute();
      } else {
        ytPlayer.unMute();
        ytPlayer.setVolume(vol);
      }
    } catch (e) {}
  }
}

function toggleMute() {
  if (isMuted) {
    isMuted = false;
    applyVolume(previousVolume > 0 ? previousVolume : 80);
  } else {
    previousVolume = parseInt($("volume-slider").value, 10) || 80;
    isMuted = true;
    applyVolume(0);
  }
}

// Play & Pause toggle
function togglePlayPause() {
  if (!ytPlayer) return;
  try {
    const state = typeof ytPlayer.getPlayerState === "function" ? ytPlayer.getPlayerState() : -1;
    if (state === 1) { // Playing
      ytPlayer.pauseVideo();
    } else {
      ytPlayer.playVideo();
    }
  } catch (e) {
    console.warn("Player control error:", e);
  }
}

// Seek handling
function seekToPercentage(pct) {
  if (!ytPlayer) return;
  try {
    const dur = ytPlayer.getDuration() || totalDuration;
    if (dur > 0) {
      const targetSec = (pct / 100) * dur;
      ytPlayer.seekTo(targetSec, true);
      $("progress-played").style.width = `${pct}%`;
      $("progress-thumb").style.left = `${pct}%`;
      $("time-display").textContent = `${formatTime(targetSec)} / ${formatTime(dur)}`;
    }
  } catch (e) {}
}

// Fullscreen handling
function toggleFullscreen() {
  const container = $("player-container");
  const fsEnter = document.querySelector("#ctrl-fullscreen .icon-fs-enter");
  const fsExit = document.querySelector("#ctrl-fullscreen .icon-fs-exit");

  if (!document.fullscreenElement) {
    if (container.requestFullscreen) {
      container.requestFullscreen();
    } else if (container.webkitRequestFullscreen) {
      container.webkitRequestFullscreen();
    }
    fsEnter?.classList.add("hidden");
    fsExit?.classList.remove("hidden");
  } else {
    if (document.exitFullscreen) {
      document.exitFullscreen();
    }
    fsEnter?.classList.remove("hidden");
    fsExit?.classList.add("hidden");
  }
}

document.addEventListener("fullscreenchange", () => {
  const fsEnter = document.querySelector("#ctrl-fullscreen .icon-fs-enter");
  const fsExit = document.querySelector("#ctrl-fullscreen .icon-fs-exit");
  if (document.fullscreenElement) {
    fsEnter?.classList.add("hidden");
    fsExit?.classList.remove("hidden");
  } else {
    fsEnter?.classList.remove("hidden");
    fsExit?.classList.add("hidden");
  }
});

// Initialize / Switch YouTube Stream
function loadYouTubeStream(videoId) {
  updateLoading(true, "Connecting to official stream...");
  updateError(false);

  // If YT API not ready yet, wait or inject
  if (!window.YT || !window.YT.Player) {
    const checkInterval = setInterval(() => {
      if (window.YT && window.YT.Player) {
        clearInterval(checkInterval);
        initPlayer(videoId);
      }
    }, 100);

    // Timeout fallback after 3 seconds: direct iframe embed
    setTimeout(() => {
      if (!ytPlayer && (!window.YT || !window.YT.Player)) {
        clearInterval(checkInterval);
        fallbackDirectIframe(videoId);
      }
    }, 3000);
    return;
  }

  initPlayer(videoId);
}

function initPlayer(videoId) {
  if (ytPlayer && typeof ytPlayer.loadVideoById === "function") {
    try {
      ytPlayer.loadVideoById({
        videoId: videoId,
        suggestedQuality: "hd1080"
      });
      ytPlayer.playVideo();
      updateLoading(true, "Buffering high-definition stream...");
      return;
    } catch (e) {
      console.warn("Could not reuse existing player, re-creating instance.", e);
    }
  }

  // Create clean player target element
  const wrapper = $("yt-player-wrapper");
  wrapper.innerHTML = '<div id="yt-player"></div>';

  try {
    ytPlayer = new YT.Player("yt-player", {
      height: "100%",
      width: "100%",
      videoId: videoId,
      playerVars: {
        autoplay: 1,
        playsinline: 1,
        rel: 0,
        modestbranding: 1,
        controls: 1, // Native YouTube controls available + custom controls synced
        enablejsapi: 1,
        origin: window.location.protocol === "file:" ? undefined : window.location.origin
      },
      events: {
        onReady: (event) => {
          updateLoading(false);
          event.target.playVideo();
          const dur = event.target.getDuration();
          if (dur) totalDuration = dur;
          applyVolume(parseInt($("volume-slider").value, 10));
        },
        onStateChange: (event) => {
          // YT.PlayerState: -1 UNSTARTED, 0 ENDED, 1 PLAYING, 2 PAUSED, 3 BUFFERING, 5 CUED
          if (event.data === 1) { // Playing
            setPlayState(true);
            updateLoading(false);
            updateError(false);
            startProgressTimer();
            scheduleControlsHide();
          } else if (event.data === 2) { // Paused
            setPlayState(false);
            stopProgressTimer();
            resetControlsHide();
          } else if (event.data === 3) { // Buffering
            updateLoading(true, "Buffering...");
          } else if (event.data === 0) { // Ended
            setPlayState(false);
            stopProgressTimer();
            resetControlsHide();
            $("progress-played").style.width = "100%";
          }
        },
        onError: (event) => {
          console.error("YouTube Player Error code:", event.data);
          let errorMsg = "Unable to stream this title directly inside the page.";
          if (event.data === 101 || event.data === 150) {
            errorMsg = "Embedding restrictions apply to this stream in this browser mode. Please open the official source to watch.";
          } else if (event.data === 100 || event.data === 2) {
            errorMsg = "The requested film could not be found or has an invalid video stream identifier.";
          }
          updateError(true, errorMsg);
        }
      }
    });
  } catch (err) {
    console.error("YT.Player initialization error:", err);
    fallbackDirectIframe(videoId);
  }
}

function fallbackDirectIframe(videoId) {
  const wrapper = $("yt-player-wrapper");
  wrapper.innerHTML = `
    <iframe id="yt-fallback-iframe" width="100%" height="100%"
      src="https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1&playsinline=1&rel=0&modestbranding=1"
      title="${esc(currentMovie ? currentMovie.title : 'Movie Player')}"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      allowfullscreen>
    </iframe>`;
  updateLoading(false);
}

// Open Movie in Modal Player
function openMovie(title) {
  const movie = movies.find((x) => x.title === title);
  if (!movie) return;

  currentMovie = movie;

  // Update modal header & metadata
  $("title").textContent = movie.title;
  $("modal-badge").textContent = `OPEN MOVIE · ${movie.year}`;
  $("modal-meta").textContent = `${movie.genre} · Duration: ${movie.duration}`;
  $("desc").textContent = movie.desc;
  $("credit").textContent = movie.credit;
  $("source").href = movie.source;
  $("error-source").href = movie.source;

  // Reset controls state
  $("progress-played").style.width = "0%";
  $("progress-thumb").style.left = "0%";
  $("progress-buffered").style.width = "0%";
  $("time-display").textContent = `00:00 / ${movie.duration}`;
  setPlayState(false);
  resetControlsHide();

  // Show overlay
  $("overlay").classList.remove("hidden");
  $("player-container").focus();

  // Load stream
  loadYouTubeStream(movie.youtubeId);
}

// Close Movie Player
function closeMovie() {
  if (ytPlayer && typeof ytPlayer.pauseVideo === "function") {
    try {
      ytPlayer.pauseVideo();
    } catch (e) {}
  }

  stopProgressTimer();
  clearTimeout(controlsTimeout);
  setPlayState(false);
  updateLoading(false);
  updateError(false);
  $("overlay").classList.add("hidden");
}

// Event Listeners

// Card clicks & keyboard selection
$("grid").addEventListener("click", (e) => {
  const card = e.target.closest("[data-title]");
  if (card) openMovie(card.dataset.title);
});

$("grid").addEventListener("keydown", (e) => {
  if (e.key === "Enter" || e.key === " ") {
    const card = e.target.closest("[data-title]");
    if (card) {
      e.preventDefault();
      openMovie(card.dataset.title);
    }
  }
});

// Search and Filter
$("search").addEventListener("input", render);
$("genre").addEventListener("change", render);

// Hero CTA Button
$("featured").addEventListener("click", () => openMovie("Big Buck Bunny"));

// Modal Close Triggers
$("close").addEventListener("click", closeMovie);

$("overlay").addEventListener("click", (e) => {
  if (e.target === $("overlay")) {
    closeMovie();
  }
});

// Error Retry Trigger
$("error-retry").addEventListener("click", () => {
  if (currentMovie) {
    loadYouTubeStream(currentMovie.youtubeId);
  }
});

// Control Bar Actions
$("ctrl-play").addEventListener("click", (e) => {
  e.stopPropagation();
  togglePlayPause();
});

$("center-play-btn").addEventListener("click", (e) => {
  e.stopPropagation();
  togglePlayPause();
});

$("ctrl-mute").addEventListener("click", (e) => {
  e.stopPropagation();
  toggleMute();
});

$("volume-slider").addEventListener("input", (e) => {
  e.stopPropagation();
  isMuted = false;
  applyVolume(parseInt(e.target.value, 10));
});

$("ctrl-fullscreen").addEventListener("click", (e) => {
  e.stopPropagation();
  toggleFullscreen();
});

// Progress Bar Scrubbing & Hover Tooltip
const progressContainer = $("progress-container");
const tooltip = $("time-tooltip");

function handleSeekEvent(e) {
  const rect = progressContainer.getBoundingClientRect();
  const clientX = e.touches ? e.touches[0].clientX : e.clientX;
  const offsetX = Math.max(0, Math.min(rect.width, clientX - rect.left));
  const pct = (offsetX / rect.width) * 100;
  seekToPercentage(pct);
}

progressContainer.addEventListener("mousemove", (e) => {
  const rect = progressContainer.getBoundingClientRect();
  const offsetX = Math.max(0, Math.min(rect.width, e.clientX - rect.left));
  const pct = offsetX / rect.width;
  const dur = (ytPlayer && typeof ytPlayer.getDuration === "function" ? ytPlayer.getDuration() : 0) || totalDuration;
  const timeAtCursor = pct * dur;
  tooltip.textContent = formatTime(timeAtCursor);
  tooltip.style.left = `${offsetX}px`;
});

progressContainer.addEventListener("mousedown", (e) => {
  isDraggingSeek = true;
  progressContainer.classList.add("dragging");
  handleSeekEvent(e);

  const onMouseMove = (moveEvent) => {
    if (isDraggingSeek) handleSeekEvent(moveEvent);
  };

  const onMouseUp = () => {
    isDraggingSeek = false;
    progressContainer.classList.remove("dragging");
    document.removeEventListener("mousemove", onMouseMove);
    document.removeEventListener("mouseup", onMouseUp);
  };

  document.addEventListener("mousemove", onMouseMove);
  document.addEventListener("mouseup", onMouseUp);
});

// Touch seek support
progressContainer.addEventListener("touchstart", (e) => {
  isDraggingSeek = true;
  progressContainer.classList.add("dragging");
  handleSeekEvent(e);
}, { passive: true });

progressContainer.addEventListener("touchmove", (e) => {
  if (isDraggingSeek) handleSeekEvent(e);
}, { passive: true });

progressContainer.addEventListener("touchend", () => {
  isDraggingSeek = false;
  progressContainer.classList.remove("dragging");
});

// Player Mouse Movement (Activity tracking)
$("player-container").addEventListener("mousemove", scheduleControlsHide);
$("player-container").addEventListener("touchstart", scheduleControlsHide, { passive: true });
$("player-container").addEventListener("mouseleave", () => {
  if (isPlaying) {
    $("player-controls").classList.add("fade-out");
  }
});

// Keyboard Accessibility & Shortcuts
document.addEventListener("keydown", (e) => {
  // If overlay is hidden, ignore player hotkeys
  if ($("overlay").classList.contains("hidden")) return;

  if (e.key === "Escape") {
    closeMovie();
    return;
  }

  // Prevent scrolling when using space or arrow keys inside modal
  if (e.target.tagName !== "INPUT" && e.target.tagName !== "TEXTAREA") {
    if (e.key === " " || e.key === "k" || e.key === "K") {
      e.preventDefault();
      togglePlayPause();
    } else if (e.key === "f" || e.key === "F") {
      e.preventDefault();
      toggleFullscreen();
    } else if (e.key === "m" || e.key === "M") {
      e.preventDefault();
      toggleMute();
    } else if (e.key === "ArrowLeft") {
      e.preventDefault();
      if (ytPlayer && typeof ytPlayer.getCurrentTime === "function") {
        const cur = ytPlayer.getCurrentTime();
        ytPlayer.seekTo(Math.max(0, cur - 5), true);
      }
    } else if (e.key === "ArrowRight") {
      e.preventDefault();
      if (ytPlayer && typeof ytPlayer.getCurrentTime === "function") {
        const cur = ytPlayer.getCurrentTime();
        const dur = ytPlayer.getDuration() || totalDuration;
        ytPlayer.seekTo(Math.min(dur, cur + 5), true);
      }
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      const curVol = parseInt($("volume-slider").value, 10);
      applyVolume(Math.min(100, curVol + 10));
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      const curVol = parseInt($("volume-slider").value, 10);
      applyVolume(Math.max(0, curVol - 10));
    }
  }
});

// Initial Render
render();