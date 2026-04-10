# 🛠️ Portfolio Architecture & Build Documentation

This repository contains the source code for a high-performance, responsive portfolio application. Below is a technical breakdown of how the site is constructed, the libraries used, and the deployment architecture.

---

## 🏗️ Core Architecture

The application is built as a **Single Page Application (SPA)** using **React.js**.

- **Functional Components**: The entire UI is built using React Functional Components to ensure modularity and high performance.
- **State Management**: Uses React Hooks (`useState` and `useEffect`) for managing UI states such as the preloader, mobile navigation toggles, and dynamic window resizing for the PDF viewer.
- **Client-Side Routing**: Handled by `react-router-dom`, enabling seamless navigation between sections without page refreshes.

---

## 🎨 Frontend & Styling

- **React-Bootstrap**: Utilized as the primary layout engine, providing a responsive 12-column grid system and accessible UI components (Navbar, Container, Row, Col).
- **Vanilla CSS**: Custom CSS modules are used for:
  - **Glassmorphism**: Implementing semi-transparent, blurred backgrounds for the Navigation bar.
  - **Neon Aesthetics**: Custom box-shadows and color transitions for high-contrast visibility.
  - **Responsive Scaling**: Custom media queries for fine-tuning the UI across varying screen densities.

---

## 🧩 Specialized Libraries & Logic

| Library | Purpose | Implementation Detail |
| :--- | :--- | :--- |
| **`tsparticles`** | Interactive Background | Uses a canvas-based engine to render a dynamic particle network that interacts with mouse hovering. |
| **`typewriter-effect`** | Dynamic Intro Text | A purely logic-driven typing animation for the home page header. |
| **`react-pdf`** | Integrated PDF Engine | Uses a dedicated PDF.js worker imported via CDN to render high-fidelity, interactive resumes within the React lifecycle. |
| **`react-github-calendar`** | API Integration | Fetches and renders a visual representation of GitHub contribution data via the GitHub API. |
| **`react-parallax-tilt`** | 3D UI Interaction | Implements a mathematical tilt effect based on mouse coordinates for project cards. |

---

## ⚙️ Build & Optimization

- **React-Scripts**: The project uses `react-scripts` for the build pipeline, which handles:
  - **Babel**: Transpiling modern JavaScript (ES6+) for cross-browser compatibility.
  - **Webpack**: Minifying JS/CSS and bundling assets (images, SVGs, PDFs) into the build folder.
- **Asset Optimization**: High-resolution PNGs and SVGs are processed through the Webpack file-loader to ensure efficient caching and performance.
- **Routing Tweaks**: A `vercel.json` file is configured with `rewrites` to ensure that all request paths point to `index.html`, preventing 404 errors on refreshes of deep routes like `/about`.

---

## ☁️ Deployment Pipeline

- **Host**: Vercel (Optimized for React SPAs).
- **CI/CD**: Fully integrated with GitHub.
  - **Pipeline**: `Push to Main` -> `ESLint Verification` -> `npm build` -> `CDN Deployment`.
- **Environment**: Node.js 18.x production environment.

---

<div align="center">
  <p><b>Technical Implementation by Bhumika Deshmukh</b></p>
  <p>© 2026</p>
</div>
