# AeroForge

**Design. Learn. Explore.**

AeroForge is an educational rocket-design web app concept. This repository contains a working Vite + React starter implementing the core visual direction and major screens described in the project specification.

## Included
- Aerospace-inspired light/dark UI
- Responsive desktop/mobile layout
- Interactive 3D starter rocket using Three.js / React Three Fiber
- Forge design controls and live educational analysis
- Learning path
- Component catalog/search
- Simplified simulation visualization and results
- Flight Computer educational section
- Local browser storage for the current design and theme
- Projects view
- Medium Aero assistant panel with local rule-based demo responses

## Run locally

```bash
npm install
npm run dev
```

Then open the local Vite address shown in the terminal.

## GitHub Pages

This project is configured as a normal Vite app. For GitHub Pages, it is easiest to use GitHub Actions to run the Vite build and deploy the `dist` folder. If the repository is not hosted at the domain root, add the correct Vite `base` setting for the repository path.

## Important
The Aero assistant in this starter is **not connected to an external AI API**. Do not put a private API key in client-side React code. A production AI backend should be added separately, with an age-appropriate and policy-compliant provider and server-side secret handling.

The rocket calculations and simulation are intentionally simplified and educational. They are not real-world flight certification, safety analysis, or construction instructions.
