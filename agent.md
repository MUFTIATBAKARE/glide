# Agent Directives: Glide (start.ng WebGL Game)

## Project Overview
You are building "Glide", a fast, lightweight 3D cyber-marble runner built with Three.js and Vite + TypeScript. It is designed to be hosted directly on the `start.ng` platform at `glide.start.ng`.

## Strict start.ng Platform Requirements
1. **Static Build & Output:**
   - Bundler must output to `dist/` with relative asset paths (`base: './'` in `vite.config.ts`).
   - The compiled `dist/` folder must be committed to the repository (ready-to-play `index.html` without requiring server builds).
   - Absolute paths (e.g., `/style.css`) are strictly forbidden; use `./style.css`.
   - Include a 16:10 `cover.png` (at least 640x400) inside `dist/` featuring the game title "Glide".

2. **Authentication & Character Connection:**
   - Implement the `askStartNg` iframe helper targeting `https://start.ng/connect` via `postMessage`.
   - Send `{ type: 'startng:whoami' }` and listen for `startng:user`.
   - Fall back seamlessly to `reply.guest` or mock local data when running on localhost.
   - Re-check user identity on `visibilitychange` and `focus` events.
   - Include sign-in redirect support: `https://start.ng/?return_to=${encodeURIComponent(location.origin + location.pathname)}`.

3. **Character Rule & Central Styling:**
   - Character schema provided by `player.style`:
     - `primaryColor` (hex `#rrggbb`) -> Marble inner core and laser trail.
     - `secondaryColor` (hex `#rrggbb`) -> Outer containment rings / shield.
     - `skinColor` & `hairColor` -> Orbiting satellite telemetry nodes.
     - `hat` & `accessory` -> Procedural attachments (e.g., crown = orbiting spiked ring, glasses = dual optical lenses, backpack = rear thruster pack).
   - Display the floating HUD profile card:
     - Avatar face (`player.face`)
     - Name (`player.name`)
     - Account handle (`@${player.account}`)
     - Guest sign-in button if not signed in.

4. **Leaderboard & Scores (`startng.json`):**
   - Place `startng.json` in `public/` (so it builds directly into `dist/`):
     ```json
     {
       "leaderboard": {
         "stats": [
           { "key": "distance", "label": "Distance (m)", "order": "highest", "format": "number" },
           { "key": "packets", "label": "Packets Routed", "order": "highest", "format": "number" }
         ]
       }
     }
     ```
   - On round over, submit stats for signed-in players:
     `askStartNg({ type: 'startng:score', stats: { distance: Math.floor(d), packets: p } }, 'startng:scoreSaved')`
   - Read top scores via `askStartNg({ type: 'startng:leaderboard', limit: 10 }, 'startng:leaderboardData')`.

5. **Performance & Hardware Safety (HP EliteBook Target):**
   - Keep draw calls under 50.
   - Cap `renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))`.
   - Audio synthesized via Web Audio API (zero external audio files).
   - Pool track segments and clean up off-screen geometries (`geometry.dispose()`, `material.dispose()`).

6. **Publishing Pipeline:**
   - Pre-flight check: `POST https://api.start.ng/games/check` with game name `"glide"`.
   - Publish trigger: `POST https://api.start.ng/games/publish` with game name `"glide"`.