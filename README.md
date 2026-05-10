# 75 Hard Tracker (Vue 3 + TS + Tailwind)

Application mobile-first pour suivre un challenge 75 Hard.

## Stack
- Vue 3 (Composition API)
- TypeScript
- Tailwind CSS
- Pinia
- Vue Router
- Supabase (source unique des données)

## Installation locale
```bash
npm install
cp .env.example .env
npm run dev
```

## Variables d'environnement
```bash
VITE_SUPABASE_URL=
VITE_SUPABASE_ANON_KEY=
```

## Setup Supabase (obligatoire)
1. Exécuter `supabase/schema.sql` dans le SQL Editor.
2. Exécuter `supabase/rls.sql` dans le SQL Editor.
3. Dans `Authentication > Providers`, activer `Email`.
4. Dans `Authentication > URL Configuration`, ajouter:
   - `http://localhost:5173`
   - ton domaine Vercel (`https://...vercel.app`)

## Auth (Magic Link)
- L'app utilise `signInWithOtp()` (magic link email).
- Il faut se connecter avec le même email sur vos appareils pour partager les mêmes données.

## Déploiement Vercel (gratuit)
1. Push du repo sur GitHub.
2. Import du repo dans Vercel.
3. Ajouter `VITE_SUPABASE_URL` et `VITE_SUPABASE_ANON_KEY`.
4. Build command: `npm run build`
5. Output directory: `dist`
