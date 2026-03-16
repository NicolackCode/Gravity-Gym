# Gravity Gym - Architecture & Stack

## 1. Stack Technique

- **Framework Core :** React 18 / Vite (Rapidité de build, écosystème, scalabilité).
- **Langage :** TypeScript (Maintenabilité, auto-complétion, robustesse).
- **Styles :** Vanilla CSS pur (Contrôle maximal du rendu visuel et des animations "Premium", pas de Tailwind). Custom Properties (Variables CSS) pour les tons : Béton, Métal noir mat, Bois brut.
- **Animations / Scroll :** Framer Motion et éventuellement Lenis (pour le fluid scrolling). Indispensable pour l'effet premium et la masse dynamique centrale.
- **Icônes :** Lucide React.
- **Graphismes 3D / Décor :** Placeholders visuels immersifs (dans un premier temps, CSS avancé pour simuler la matière).

## 2. Topologie du projet (Structure cible Vite)

- `/src`
  - `/assets` (Images métiers, textures béton/bois, variables CSS globales)
  - `/components`
    - `/layout` (Navbar, Footer, Wrapper de sections)
    - `/ui` (Boutons premium, Compteur kWh interactif, Jauge gravité)
  - `/sections` (Hero, Problem, Solution, GravityBattery, Experience, BusinessModel, Impact, Roadmap, Investors)
  - `/styles` (Global.css, theming, reset, utilitaires)
  - `/hooks` (useScroll, useCounter)
  - `/utils` (formatters financiers / kWh)
