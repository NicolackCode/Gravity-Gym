# Gravity Gym - Workflow & Conventions

## Philosophie (Vibe Coding)

- **Étape par Étape :** Chaque étape est détaillée, justifiée en amont et validée par une autorisation (GO).
- **Code Complet :** Fourniture systématique du bloc complet (zéro raccourci tronqué).
- **Zéro Destruction Cachée :** On ne supprime pas de gros blocs fonctionnels sans validation explicite.
- **Proactivité :** Utilisation systématique du terminal et du navigateur pour vérifier le rendu et les erreurs.

## Conventions de Code (TypeScript / React)

- **Composants :** Functional Components typés avec `interface`.
- **Nommage :**
  - Fichiers de composants : `PascalCase.tsx`
  - Utilitaires / Hooks : `camelCase.ts`
  - Classes CSS : Sémantiques, typées BEM allégé ou CSS Modules.
- **CSS :** Vanilla CSS priorisé, structure Responsive (Mobile-first).
- **Performances :** Pour les micro-animations interactives complexes (ex: Masse de la pile à gravité, chiffres tournants du compteur dynamiques), déporter le rendu DOM lourd vers des solutions optimisées (Framer Motion / CSS Transforms) pour viser les 60fps.
