# AeroForge

**Design. Learn. Explore.**

AeroForge is an educational rocket-design web app. Design a rocket, see the engineering consequences straight away, and learn the reasoning behind them. It is a single `index.html` file: no install, no build step.

## What it does

- **Forge**: design a rocket with a live 3D view and a full analysis (stability, thrust-to-weight, apogee, descent speed, cost).
  - Rotate it a full 360° in every direction.
  - Take it apart into its components, zoom into any part and see inside it.
  - The hollow body tube, nose cone, motor and nozzle are modelled as real shells.
- **Simulation**: fly your design and read altitude, speed and acceleration as charts.
- **Flight computer**: choose the electronics, check battery life, and run the **schematic simulator** to watch the circuit work through a flight. Try disarming the pyro channel or removing the barometer.
- **Components**: browse motors, parachutes and materials.
- **Learn**: 15 lessons, a quiz and a glossary.
- **Projects**: save designs in your browser.
- **Aero assistant**: type what you want, for example "take the rocket apart" or "where is the engine".

## Run it

Open `index.html` in a browser. To host it, enable GitHub Pages (Settings, Pages, deploy from the `main` branch, root folder).

## About the assistant

On claude.ai the assistant is powered by Claude and can run any action the app supports. Anywhere else (GitHub Pages or a local file) it falls back to simple keyword commands such as "make the fins bigger", "disassemble the rocket" or "where is the motor". No API key is stored in this repository.

## Important

The calculations and the simulation are simplified and educational. They are not a flight certification, a safety analysis, or construction instructions. Use only commercially made motors and follow your local rocketry club's rules and your country's laws.

## Repository layout

- `index.html`: the whole app
- `legacy/`: an earlier, incomplete React/Vite starter, kept for reference
