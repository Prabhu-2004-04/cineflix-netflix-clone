# CineFlix — Netflix-Inspired Open Movie Streaming UI

A high-performance, Netflix-inspired movie streaming web application built with vanilla HTML5, CSS3, and modern JavaScript. CineFlix lets users browse, search, filter, and stream 10 classic Blender open-source films with an integrated video player featuring custom playback controls, responsive design, and authentic open-license attributions.

---

## ✨ Features

- **10 Authentic Open Movie Streams**: Sourced from official Blender Foundation and Blender Studio releases with verified in-page playback.
- **Unified In-Page Video Player**:
  - **Custom Controls**: Play, pause, scrub/seek bar with buffered indicator, hover time tooltip, volume slider with mute toggle, and full-screen mode.
  - **Auto-Hiding Controls**: Player controls smoothly fade out during active playback and reappear on mouse movement or touch.
  - **Keyboard Accessibility**: Full hotkey support (`Space`/`K` for play/pause, `F` for fullscreen, `M` for mute, `←`/`→` for 5s seeking, `↑`/`↓` for volume, and `Esc` to close).
  - **Adaptive Streaming**: Leverages YouTube IFrame Player API for smooth 1080p/720p adaptive streaming without buffering failures.
  - **Graceful Error Handling & Fallback**: Displays clear, helpful error states with a retry button and direct official film source links if playback is interrupted by restrictive networks or browser privacy extensions.
  - **Dynamic State Reset**: Seamlessly stops active playback and resets timestamps, seek bars, and loading states when switching between movies.
- **Search & Genre Filtering**: Real-time instant search across titles, genres, descriptions, and release years.
- **Netflix-Style Visual Aesthetics**:
  - Dark cinematic color palette (`#0b0b0b`, `#141414`, `#e50914`).
  - Sleek card hover interactions, elevation shadows, and dynamic gradient poster backdrops.
  - Responsive grid supporting desktop (5 columns), tablet (3–4 columns), and mobile (2 columns).
- **Zero Third-Party Bundlers**: Built entirely with standard vanilla web technologies.

---

## 🎬 Included Movies & Official Sources

All 10 films are authentic open movies created by the **Blender Foundation** and **Blender Studio**. Each title includes direct attribution and official project repository links:

| # | Movie Title | Year | Genre | Duration | License & Attribution | Official Project Source |
|---|-------------|------|-------|----------|-----------------------|-------------------------|
| 1 | **Big Buck Bunny** | 2008 | Animation | 9:56 | CC BY 3.0 Blender Foundation | [peach.blender.org](https://peach.blender.org/) |
| 2 | **Sintel** | 2010 | Adventure | 14:48 | CC BY 3.0 Blender Foundation | [durian.blender.org](https://durian.blender.org/) |
| 3 | **Tears of Steel** | 2012 | Sci-Fi | 12:14 | CC BY 3.0 Blender Foundation | [mango.blender.org](https://mango.blender.org/) |
| 4 | **Elephants Dream** | 2006 | Sci-Fi | 10:53 | CC BY 2.5 Blender Foundation / Netherlands Media Art Institute | [orange.blender.org](https://orange.blender.org/) |
| 5 | **Spring** | 2019 | Adventure | 7:44 | CC BY 4.0 Blender Animation Studio | [studio.blender.org/films/spring](https://studio.blender.org/films/spring/) |
| 6 | **Cosmos Laundromat** | 2015 | Sci-Fi | 12:10 | CC BY 4.0 Blender Foundation | [studio.blender.org/films/cosmos-laundromat](https://studio.blender.org/films/cosmos-laundromat/) |
| 7 | **Caminandes: Gran Dillama** | 2013 | Comedy | 2:26 | CC BY 3.0 Blender Foundation | [studio.blender.org/films/caminandes-llamigos](https://studio.blender.org/films/caminandes-llamigos/) |
| 8 | **Agent 327: Operation Barbershop** | 2017 | Animation | 3:51 | CC BY 4.0 Blender Animation Studio | [studio.blender.org/films/agent-327](https://studio.blender.org/films/agent-327/) |
| 9 | **Coffee Run** | 2020 | Animation | 3:00 | CC BY 4.0 Blender Animation Studio | [studio.blender.org/films/coffee-run](https://studio.blender.org/films/coffee-run/) |
| 10 | **Sprite Fright** | 2021 | Adventure | 10:30 | CC BY 4.0 Blender Studio | [studio.blender.org/films/sprite-fright](https://studio.blender.org/films/sprite-fright/) |

---

## 🛠️ Technologies Used

- **HTML5**: Semantic markup, accessible dialogs, ARIA attributes, SVG iconography, and responsive meta tags.
- **Vanilla CSS3**: CSS Grid, Flexbox, custom properties (variables), media queries, backdrop filters, and CSS keyframe animations.
- **Vanilla JavaScript (ES6+)**: Custom video player controller, YouTube IFrame API integration, event delegation, search/filter algorithms, and keyboard navigation.

---

## 🚀 How to Run Locally

### Option 1: Direct File Open
1. Download or clone this repository.
2. Double-click `index.html` to open it in any modern browser (Chrome, Edge, Firefox, Safari).

### Option 2: Using a Local HTTP Server (Recommended)
Running through a local web server ensures optimal performance and standard origin headers for media APIs:

```bash
# Using Node.js (npx)
npx serve .

# Using Python 3
python -m http.server 8000

# Using PHP
php -S localhost:8000
```
Then navigate to `http://localhost:8000` in your web browser.

---

## 🌐 Deploying to GitHub Pages

1. Push your repository to GitHub.
2. In your repository, go to **Settings** → **Pages**.
3. Under **Branch**, select `main` (or `master`) branch and `/ (root)` folder.
4. Click **Save**. GitHub Pages will deploy your site in seconds!

---

## ⚖️ Copyright & Licensing Information

- The films presented in CineFlix are **not public domain**; they are open-source movies created and released by the **Blender Foundation** and **Blender Studio** under various **Creative Commons Attribution licenses** (CC BY 2.5, CC BY 3.0, and CC BY 4.0).
- Users are free to share and adapt the materials under the condition that appropriate credit and attribution are provided to the respective creators, along with a link to the original license.
- CineFlix is an independent educational/portfolio project and is **not affiliated with, endorsed by, or sponsored by Netflix, Inc.**

---

## 📌 Known Limitations & Browser Considerations

1. **Autoplay Policies**: Modern web browsers (including Chrome, Safari, and Edge) enforce strict autoplay restrictions preventing media with sound from automatically playing without an initial user interaction. Clicking a movie card or its Play button provides the required interaction.
2. **Network Filtering & Ad-Blockers**: Aggressive ad-blocking extensions or restrictive corporate firewall settings may block third-party streaming domains. If a stream is blocked, CineFlix displays an in-player error modal with a direct link to the official project watch page.
