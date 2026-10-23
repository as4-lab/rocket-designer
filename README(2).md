<p align="center"><img src="aeroforge-logo.svg" width="110" alt="AeroForge logo"></p>

# AeroForge

**Design. Learn. Explore.**

AeroForge is an educational rocket-design web app. Design a rocket, see how your choices change the engineering numbers, and learn the reasoning behind them. The whole app is a single `index.html` file, with no installation or build step.

**Live website:** https://as4-lab.github.io/rocket-designer/

## What it does

- **Forge:** design a rocket with an interactive 3D view and an analysis panel covering stability, thrust-to-weight ratio, estimated apogee, descent speed and cost.
  - Rotate the rocket 360° in every direction, take it apart into components, zoom into any part and look inside the hollow body tube, nose cone, motor and nozzle.
  - **Paint studio:** paint the body and nose however you like with a brush, spray, fill, bands, stamps and mirrored strokes, or add your own image.
  - Drag the bars between the panels to resize them.
  - A four-step **first-flight guide** walks beginners through opening the default rocket, changing the fins, seeing what changed, and running a simulation.
- **Simulation:** estimate altitude, velocity and acceleration with charts. The assumptions are listed on the page.
- **Flight computer:** choose a board, sensors and radio, estimate battery life, and use the **schematic simulator** to watch the circuit during a simulated flight. Try disarming the pyro channel or removing the barometer to see what changes.
  - **Code generator:** writes starter code for your chosen parts in Arduino C++, MicroPython or CircuitPython, plus ground-station tools in Python, JavaScript, HTML and CSS. You can edit it, copy it, download it, or ask the assistant to change it.
  - **Test bench:** checks the text of the code and runs a simple model of its flight logic against an estimated flight. It does not run your code on a board.
- **Live telemetry:** connect a flight computer or receiver over USB serial or Bluetooth (Chrome or Edge), or load a log file, and view speed, altitude, distance, a GPS track and camera footage. A demo flight works without hardware.
- **Components:** browse motors, parachutes, materials and other parts.
- **Learn:** 15 lessons, a quiz and a glossary.
- **Projects:** save designs in your browser, then rename, duplicate or delete them. Export and import backups as JSON files.
- **AI assistant (Aero):** ask questions, request actions such as taking the rocket apart or locating the motor, or describe your parts and what you want them to do and have it change the code. Web search is optional.

## Run it

Open `index.html` in a web browser, or enable GitHub Pages (Settings, Pages, deploy from the `main` branch and the root folder).

Some features depend on where you run it:
- The AI assistant only works from the hosted address, because the Worker accepts requests only from that site. From a local file it falls back to simple keyword commands.
- USB, Bluetooth and the camera need a browser such as Chrome or Edge and may be blocked inside an embedded preview. Use the hosted address.

## About the AI assistant

The assistant connects to the Groq API through a Cloudflare Worker. The Worker holds the API key as a secret, so the key is never in this repository, and it accepts requests only from the live website.

- **No API key should ever be committed to this repository.**
- Visitors can optionally paste their own key into **AI settings** on the Forge page. It is stored only in their browser.
- Text typed to the assistant is sent through the Worker to the AI provider. Do not enter personal information.
- AI answers and the code it writes can be wrong. Check them yourself.

## Safety and limits

- **The numbers are estimates.** They come from simplified formulas and have not been validated against real flights. They are not measurements, and they must not be used to decide whether a launch is safe.
- **Guidelines are not guarantees.** A thrust-to-weight ratio of about 5:1 or more is a common guideline, not a safety rule on its own. Launch safety depends on several factors together, including stability, wind, the launch rod or rail, airframe strength, the motor and recovery system, the launch site and your club's rules.
- **Barometer deployment is how this app works, not a rule for every rocket.** In AeroForge, the parachute deploys only when a barometer detects apogee. Real rockets can use other methods, such as accelerometers, timers or a motor's ejection charge.
- **Generated flight-computer code has not been tested on real hardware.** A parachute ejection charge is dangerous. Bench-test with no charge connected, using an LED in place of the e-match, and follow your rocketry club's rules.
- Use commercially made rocket motors and follow the laws and guidance of qualified rocketry organizations where you live.

## Privacy and backups

- Projects, settings and paint are stored only in your browser. Clearing site data or switching device deletes them.
- Use **Export all (backup)** on the Projects page regularly. The page reminds you if it has been a week.
- Images you add in the Paint studio, and any camera video, stay on your computer.

## Repository layout

- `index.html`: the whole application.
- `aeroforge-logo.svg`: the logo.
- `README.md`: this file.

The earlier React/Vite starter files (`App.jsx`, `main.jsx`, `package.json` and `vite.config.js`) are not used by the app. If they are still in the repository, you can ignore them or move them into a `legacy/` folder.

## Development

AeroForge is an ongoing independent project. Work continues on the AI assistant, the calculations, the simulations and the learning tools, and features and results may change as testing continues.
