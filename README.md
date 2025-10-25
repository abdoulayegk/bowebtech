# Bowebtech · Reading Group IA & Data

Site officiel (FR) pour la communauté Bowebtech : un cycle d’ateliers mensuels autour de l’intelligence artificielle, du machine learning et de la data science. Construit avec React, TypeScript, Vite et Tailwind CSS.

## Aperçu des sections

- **Hero** : positionnement, appel à rejoindre la communauté et aperçu du prochain atelier.
- **Programme 2026** : timeline détaillée des 12 rencontres prévues entre janvier et décembre.
- **Intervenant·es** : mentors principaux, piliers pédagogiques et valeurs différenciantes.
- **Ressources** : guides, replays et outils proposés à la communauté.
- **FAQ & Inscription** : réponses aux questions fréquentes et formulaire d’abonnement.

## Prérequis

- Node.js 20+ (22 recommandé) ou utilisation du conteneur Docker fourni.
- npm (inclus avec Node).

## Scripts npm

| Commande          | Description                                      |
| ----------------- | ------------------------------------------------ |
| `npm install`     | Installe les dépendances.                        |
| `npm run dev`     | Lance le serveur Vite sur http://localhost:5173. |
| `npm run build`   | Compile le site statique dans `dist/`.           |
| `npm run preview` | Sert le build généré pour validation locale.     |
| `npm run lint`    | Exécute ESLint sur le projet.                    |

## Utilisation avec Docker

### Développement

```bash
docker compose up
```

Le serveur Vite est accessible sur http://localhost:5173. Les sources sont montées dans le conteneur, chaque modification déclenche un rechargement.

### Build de production (serveur statique Nginx)

```bash
docker build -t bowebtech-site --target production .
docker run --rm -p 8080:80 bowebtech-site
```

La version pré-compilée est servie depuis Nginx sur http://localhost:8080.

## Déploiement GitHub Pages

Le site est configuré pour un déploiement automatique sur GitHub Pages via GitHub Actions.

### Configuration initiale (à faire une seule fois)

1. **Poussez votre code sur GitHub** :

   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/VOTRE-USERNAME/bowebtech.git
   git push -u origin main
   ```

2. **Activez GitHub Pages** :

   - Allez dans les paramètres de votre repo GitHub
   - Section **Pages** (menu gauche)
   - Source : **GitHub Actions**

3. **Le workflow se déclenche automatiquement** :
   - À chaque push sur `main`
   - Le site se construit et se déploie automatiquement
   - Disponible sur `https://VOTRE-USERNAME.github.io/bowebtech/`

### Déploiement manuel (optionnel)

Si vous préférez déployer manuellement :

```bash
# Construire le site
npm run build

# Déployer avec gh-pages (installer d'abord: npm install -g gh-pages)
npx gh-pages -d dist
```

### Domaine personnalisé (optionnel)

Pour utiliser votre propre domaine (ex: bowebtech.com) :

1. Ajoutez un fichier `CNAME` dans `/public/` avec votre domaine
2. Configurez les DNS chez votre registrar :
   ```
   Type A : 185.199.108.153
   Type A : 185.199.109.153
   Type A : 185.199.110.153
   Type A : 185.199.111.153
   ```
3. Activez le domaine dans les settings GitHub Pages

**Note** : Le workflow GitHub Actions (`.github/workflows/deploy.yml`) est déjà configuré et prêt à l'emploi!

## Accessibilité & design

- Contraste élevé, typographie Poppins / Inter, palette nuit + accents bleus/corail.
- Navigation clavier, composants interactifs accessibles (accordéon FAQ, boutons CTA).
- Animations Framer Motion légères pour mettre en valeur le storytelling sans gêner la lecture.

## Personnalisation de contenu

Les données principales se trouvent dans `src/content/` :

- `programme.ts` : timeline des sessions 2026.
- `speakers.ts` : intervenant·es.
- `organisateurs.ts` : équipe de coordination du programme.
- `resources.ts` : ressources recommandées.
- `faq.ts` : questions / réponses.

Adaptez ces fichiers pour répercuter de nouvelles dates, intervenants ou liens d’inscription.
Le formulaire de newsletter utilise Formspree (constante `INSCRIPTION_FORM_URL` dans `src/App.tsx`) : remplacez par votre endpoint.
