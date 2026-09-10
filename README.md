# 🚀 AeroForge

> **Design. Learn. Explore.**

AeroForge is an educational rocket design platform built to make rocketry and aerospace engineering easier to understand and explore.

Instead of simply giving users information, AeroForge brings **design, engineering concepts, component research, simulation, and learning** together in one interactive platform.

## ✨ What is AeroForge?

AeroForge lets users create and customize rocket designs through an interactive 3D environment while AeroForge handles calculations and provides feedback on the design.

The goal is to keep the experience **simple enough for beginners while maintaining realistic engineering concepts underneath.**

Users can start with a default rocket and modify it themselves, seeing how their changes affect the design.

## 🛠️ Core Features

### 🔥 Forge — Rocket Designer

The main design environment where users can customize their rocket.

* Interactive lightweight 3D rocket model
* Rotate and zoom the model
* Select individual components
* Modify the rocket's configuration
* Customize the rocket's appearance
* Real-time design analysis
* Automatic calculations
* Engineering warnings and explanations

AeroForge doesn't silently change a user's design. Instead, it explains potential issues and lets the user decide what to change.

### 📊 Design Analysis

AeroForge analyzes the user's design and provides useful information such as:

* Estimated mass
* Cost
* Stability-related information
* Performance estimates
* Other relevant design metrics

The interface is beginner-friendly, while the underlying calculations aim to use realistic engineering principles where practical.

### 🧪 Simulation

Users can simulate their designs and see the results visually.

The initial simulation system will focus on fundamental measurements such as:

* Altitude
* Velocity
* Acceleration
* Flight time

The simulation will eventually expand to include more advanced factors such as drag, changing mass, environmental conditions, and aerodynamic effects.

### 🧩 Components

AeroForge includes a component catalog where users can explore and compare different options.

Features include:

* Component categories
* Search
* Filters
* Sorting
* Specifications
* Prices
* Component comparisons
* Compatibility information
* Adding components directly to a design

Where possible, prices can be retrieved from online sources, while manually maintained entries can act as a fallback.

### 💻 Flight Computer

AeroForge also provides an interactive educational section focused on flight computers.

Users can learn about concepts such as:

* Microcontrollers
* Sensors
* Data collection
* Telemetry
* Software
* How different electronics work together

The long-term goal is to allow users to build an educational flight-computer configuration and understand how its components interact.

### 📚 Learning

AeroForge includes a structured learning path for users starting with little or no rocketry knowledge.

Learning content covers concepts progressively, while the designer also provides explanations directly where they are relevant.

**Learn → Design → Experiment → Understand**

### 📁 Projects

Users can create a simple local profile using a nickname and save their work without creating an online account.

Saved information can include:

* Rocket designs
* Simulation results
* Reports
* Learning progress
* Favorite components
* User preferences

Data is stored locally in the user's browser rather than on a central user database.

### 🤖 Aero

**Aero** is AeroForge's built-in AI assistant.

Aero is designed to act like a friendly teacher and explain technical concepts in beginner-friendly language.

Aero can:

* Answer general AeroForge questions
* Explain engineering concepts
* Explain components
* Help users understand analysis results
* Read the currently open Forge project
* Explain warnings and design results based on the user's project

Aero is intended to **explain and teach**, rather than automatically control or modify a user's design.

## 🎨 Design Philosophy

AeroForge is designed around a simple idea:

> **Professional enough to feel like an engineering tool. Simple enough that a beginner can actually use it.**

The interface uses a soft, comfortable visual style rather than an aggressive futuristic interface.

### Visual direction

* Soft dark mode
* Comfortable light mode
* Muted warm-orange accents
* Minimal visual clutter
* Subtle animations
* Lightweight 3D graphics
* Responsive layouts for desktop, tablet, and mobile

The 3D models are intentionally designed to be detailed enough to feel convincing without becoming unnecessarily heavy or demanding.

## 🌓 Light & Dark Mode

AeroForge supports both light and dark themes.

Users can switch between them using the theme toggle, with their preference stored locally.

## 📱 Responsive Design

AeroForge is intended to work across:

* Desktop
* Laptop
* Tablet
* Mobile

On touch devices, the 3D designer supports natural controls such as dragging to rotate and pinching to zoom.

## 🔒 Privacy & Local Storage

AeroForge does not require users to create an account to save their personal work.

Instead, user-specific information is stored locally in the browser.

This keeps the initial platform simple and avoids requiring a dedicated user database or server for personal projects.

> **Note:** Browser-local data can be lost if the user clears their browser storage or otherwise removes the site's local data.

## 🧰 Technology

AeroForge is planned around a modern web stack:

* **React**
* **Vite**
* **JavaScript**
* **Three.js / React Three Fiber**
* **CSS**
* **Browser Local Storage / IndexedDB**

Additional backend or AI infrastructure may be introduced later as the project grows.

## 🚧 Project Status

**AeroForge is currently in development.**

The project is being built progressively, starting with the core interface and 3D design experience before expanding into more advanced engineering calculations, simulation, component data, and AI functionality.

## 🎯 Long-Term Vision

AeroForge aims to become a place where someone can go from:

**“I know almost nothing about rockets.”**

to:

**“I understand the systems, I designed something, and I understand why it works the way it does.”**

The focus isn't simply on producing a rocket design. It's on making the **engineering behind the design understandable.**

---

### ⚠️ Educational Purpose

AeroForge is an educational and experimental project. Its calculations and simulations may use assumptions or simplified models and should not be treated as a substitute for professional aerospace engineering analysis or real-world safety procedures.

---

**Built with curiosity, engineering, and a lot of trial and error. 🚀**
