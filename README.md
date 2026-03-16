# Gravity Gym - Premium One-Pager

**Gravity Gym** est un concept innovant de salle de sport où l'effort physique des membres génère de l'électricité, stockée dynamiquement dans une véritable **Pile à Gravité**. Ce repository contient le code source de la landing page destinée aux investisseurs, développée avec un style "Architecture Brutaliste" haut de gamme.

Visitez le site en direct : [Lien de production Vercel à définir]

## 🚀 Fonctionnalités & Technologies

Ce projet est un site One-Page fluide, performant et optimisé pour convaincre.

- **React 18 & Vite** : Déploiement ultra-rapide et développement réactif.
- **TypeScript** : Pour un code robuste, typé et maintenable.
- **Framer Motion** : Pour les micro-animations fluides et l'effet de parallaxe immersif de la Pile à Gravité.
- **Vanilla CSS (Custom Properties)** : Un **Design System Brutaliste** sans dépendance lourde, utilisant des variables CSS globales pour garantir la cohérence esthétique (Teintes Laiton/Bronze, Gris Béton, Noir Pur).
- **Typographie Premium** : _Syne_ pour des titres architecturaux et géométriques, _Inter_ pour une lisibilité parfaite du corps de texte.

## 📁 Structure du Projet

Le projet suit une architecture standard et modulaire avec Vite :

```
├── .agents/                 # Scripts et workflows IA
├── _brain/                  # Documentation IA & Guidelines du projet
├── outils-admin/            # Outils système (ex: lancement rapide)
├── src/
│   ├── components/          # Composants UI globaux (Navbar, Footer)
│   ├── sections/            # Sections logiques du site (Hero, Problem, GravityBattery, etc.)
│   │   ├── ...              # Chaque section possède son .tsx et son propre .css
│   ├── styles/              # Design System (global.css)
│   ├── App.tsx              # Assemblage du layout
│   └── main.tsx             # Point d'entrée React
├── index.html               # Fichier racine
└── vite.config.ts           # Configuration du bundler
```

## 🛠️ Installation & Démarrage (Local)

Le script de lancement le plus rapide (sous Windows) se trouve dans le dossier `outils-admin` :

- Double-cliquez sur `outils-admin/demarrer-site.bat`

Alternativement, utilisez les commandes standards de Node.js :

1.  **Cloner le dépôt :**
    ```bash
    git clone https://github.com/NicolackCode/Gravity-Gym.git
    cd Gravity-Gym
    ```
2.  **Installer les dépendances :**
    ```bash
    npm install
    ```
3.  **Lancer le serveur de développement :**
    ```bash
    npm run dev
    ```
4.  **Builder pour la production :**
    ```bash
    npm run build
    ```

## 🌐 Déploiement (Vercel)

Le déploiement est **Zero-Config** sur Vercel :

1. Importez ce dépôt GitHub dans Vercel.
2. Vercel détectera automatiquement le framework (Vite).
3. Cliquez sur **Deploy**.

## 🎨 Asset Generation (Google Labs Flow)

Si vous devez générer et remplacer les placeholders temporels (visuels en CSS) par des images/vidéos haute fidélité (fond de salle, vue macro 3D, etc.), un carnet de _prompts_ ultra-détaillé est fourni avec le projet afin d'être injecté dans **[Google Labs Flow](https://labs.google/fx/fr/tools/flow)** (modèles Imagen 3 et Veo).

## 📄 Licence

Mise à disposition sous licence MIT. Visualisez le fichier `LICENSE` pour plus de détails.
