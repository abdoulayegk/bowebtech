# Quick Start - Déploiement en 3 commandes

Votre username GitHub: **abdoulayegk**

## Option 1: Script automatique (le plus simple)

```bash
./deploy.sh
```

C'est tout! Le script fait tout pour vous.

---

## Option 2: Commandes manuelles

### Première fois:

```bash
git init
git add .
git commit -m "Initial commit - Bowebtech Reading Group"
git branch -M main
git remote add origin https://github.com/abdoulayegk/bowebtech.git
git push -u origin main
```

### Mises à jour futures:

```bash
git add .
git commit -m "Update: description de vos changements"
git push
```

---

## URLs importantes

- **Votre site**: https://abdoulayegk.github.io/bowebtech/
- **Repo GitHub**: https://github.com/abdoulayegk/bowebtech
- **Actions (déploiements)**: https://github.com/abdoulayegk/bowebtech/actions
- **Settings Pages**: https://github.com/abdoulayegk/bowebtech/settings/pages

---

## Configuration GitHub Pages (à faire une seule fois)

1. Créez le repo sur GitHub: https://github.com/new

   - Nom: `bowebtech`
   - Public
   - Ne pas ajouter README

2. Après le premier push, allez dans:

   - Settings → Pages
   - Source: **GitHub Actions**

3. C'est tout!

---

## Avant de déployer

Vérifiez `CHECKLIST.md` pour vous assurer que:

- [ ] Les liens Zoom sont mis à jour
- [ ] L'email Formspree est configuré
- [ ] Les photos sont ajoutées
- [ ] Tous les liens fonctionnent

---

**Prêt ? Lancez `./deploy.sh` !**
