# Glide — 3D Cyberpunk Procedural Endless Runner

<div align="center">

[![Live Demo](https://img.shields.io/badge/Live_Game-glide.start.ng-00f0ff?style=for-the-badge&logo=google-chrome&logoColor=black)](https://glide.start.ng)
[![Three.js](https://img.shields.io/badge/Three.js-r160-black?style=for-the-badge&logo=threedotjs&logoColor=white)](https://threejs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.3-blue?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-5.1-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
[![Web Audio API](https://img.shields.io/badge/Web_Audio_API-Synthesized-orange?style=for-the-badge)](https://developer.mozilla.org/en-US/docs/Web/API/Web_Audio_API)
[![WebGL](https://img.shields.io/badge/WebGL-Hardware_Accelerated-990000?style=for-the-badge&logo=webgl&logoColor=white)](https://www.khronos.org/webgl/)

**[🎮 Play Live on start.ng](https://glide.start.ng)**

**High-performance, physics-driven 3D marble runner built with Three.js, TypeScript, procedural Web Audio, and start.ng platform integration.**

</div>

---

## Overview

**Glide** is a browser-based 3D cyberpunk endless runner that tests reflexes on an infinitely generated data highway. Steer a dynamic kinetic marble through high-speed track segments, route data packets, avoid firewall obstacles, and survive gravitational free-fall into the cyber void.

Engineered with custom WebGL rendering pipelines, procedural track generation, real-time particle simulations, and a zero-asset Web Audio synthesis engine.

---

## Key Engineering Features

### 1. WebGL 3D Rendering & Atmosphere
- **Scene & Camera Pipeline**: Built on a modular `SceneManager` configuring a chase-perspective `THREE.PerspectiveCamera` with smooth horizontal damping and vertical follow kinematics.
- **Cyberpunk Illumination**: Multi-source lighting setup combining cyan key directional light (`#00f0ff`), magenta fill lighting (`#ff0077`), and deep atmospheric exponential fog (`THREE.FogExp2`) to render an infinite horizon without clipping.
- **Hardware-Adaptive Rendering**: Dynamically clamps device pixel ratio to `Math.min(window.devicePixelRatio, 2)` to protect frame rates on high-DPI displays.

### 2. Kinematics, Physics & Particle Engine
- **Track Surface Grounding**: Real-time ray-less boundary math that snaps the marble to track elevations, smoothly dampens lateral steering, and transitions into realistic gravitational free-fall (`-38.0 m/s²`) if steered off the edge.
- **Dynamic Difficulty Curve**: Progressive forward acceleration curve scaling from a base speed of `24.0 m/s` to extreme speeds based on distance traveled.
- **GPU Particle Trail**: Custom circular ring buffer maintaining 180 particles via `THREE.BufferGeometry` and typed `Float32Array` attributes for high-performance neon exhaust trails with zero garbage-collection overhead.

### 3. Zero-Asset Procedural Web Audio Engine
- **Synthesized Audio**: Requires no external MP3/WAV assets. All sounds are generated procedurally in real-time via the browser's native `AudioContext`.
- **Dynamic Rolling Hum**: Utilizes custom `OscillatorNode` and `BiquadFilterNode` modulated in real-time based on marble speed and track contact.
- **Harmonic Chimes & Impact FX**: Algorithmic sound synthesis for packet pickups, crash impacts, start chimes, and fall-off cues.
- **Autoplay Handling**: Automatic user-gesture audio unlocking (`pointerdown`, `keydown`, `touchstart`) with global mute toggle (`M`).

### 4. Robust Game Loop & State Machine
- **State Machine**: Clean separation across `PLAYING`, `FALLING`, `PAUSED`, and `GAMEOVER` states.
- **Delta-Time Guarding**: Clamps frame delta timing (`0.0001s` to `0.1s`) to prevent physics coordinate explosions during tab switches or frame stutter.
- **Platform Bridge & Score Telemetry**: Integrated with **start.ng** (`StartNgService`) via cross-document `postMessage` protocol, dispatching score events (`distance`, `packets`, and total score) and dynamically styling the player marble based on player identity.
- **Lifecycle & HMR Teardown**: Strict resource disposal (`dispose()` pattern for geometries, materials, and listeners) to prevent memory leaks during Vite Hot Module Replacement.
- **Cross-Platform Input**: Unified keyboard controls (WASD / Arrow Keys) and touch/swipe steering for mobile devices.

---

## Controls

| Action | Keyboard | Touch / Mobile |
| :--- | :--- | :--- |
| **Steer Left / Right** | `A` / `D` or `←` / `→` | Touch & drag left/right |
| **Accelerate** | `W` or `↑` | Drag forward |
| **Brake** | `S` or `↓` | Drag backward |
| **Toggle Mute** | `M` | In-game sound button |
| **Help / Instructions** | `H` | In-game help button |
| **Restart** | `Enter` / `Space` | "Run Again" button |

---

## Architecture

```
glide/
├── index.html                   # Master entry canvas shell
├── package.json                 # Three.js r160, TypeScript 5.3, Vite 5.1
├── src/
│   ├── main.ts                  # App bootstrap, state orchestration & game loop
│   ├── engine/
│   │   ├── SceneManager.ts      # WebGLRenderer, PerspectiveCamera, resize handler
│   │   └── GameLoop.ts          # requestAnimationFrame wrapper with safe delta timing
│   ├── entities/
│   │   ├── PlayerMarble.ts      # Physics, mesh hierarchy, tilt & GPU particle trail
│   │   └── TrackManager.ts      # Procedural track generation, firewalls & packet spawners
│   ├── services/
│   │   ├── SoundFx.ts           # Web Audio API synthesizer (oscillators & biquad filters)
│   │   └── StartNgService.ts    # Player identity bridge & score event dispatcher
│   └── ui/
│       ├── GameHud.ts           # In-game telemetry HUD (distance & packets routed)
│       ├── GameOverModal.ts     # Game over score breakdown & retry modal
│       ├── InstructionsModal.ts # First-visit tutorial overlay
│       └── ProfileCard.ts       # Glassmorphism developer profile badge
```

---

## Tech Stack

- **Core Engine**: [Three.js](https://threejs.org/) (r160)
- **Language**: [TypeScript](https://www.typescriptlang.org/) (Strict mode, fully typed vector math)
- **Audio**: Native Web Audio API (`AudioContext`, `OscillatorNode`, `GainNode`, `BiquadFilterNode`)
- **Bundler & Tooling**: [Vite](https://vitejs.dev/) & ESLint
- **Styling**: Cyberpunk CSS with custom glassmorphic HUD overlays

---

## Getting Started

### Prerequisites

Ensure you have [Node.js](https://nodejs.org/) (v18 or higher) installed.

### Installation

```bash
# Clone the repository
git clone https://github.com/MUFTIATBAKARE/glide.git

# Navigate to project directory
cd glide

# Install dependencies
npm install

# Start local development server
npm run dev
```

Visit `http://localhost:5173` in your browser.

### Building for Production

```bash
npm run build
```

The production-ready assets will be generated in the `dist/` directory.

---

## License

This project is licensed under the MIT License.

