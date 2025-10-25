# Guide de Déploiement GitHub Pages

## Étapes pour déployer votre site

### 1. Créer un repo GitHub

1. Allez sur [github.com](https://github.com) et connectez-vous
2. Cliquez sur **"New repository"** (bouton vert)
3. Nommez-le `bowebtech` (ou le nom de votre choix)
4. Laissez-le **Public**
5. **NE PAS** cocher "Add README" (vous en avez déjà un)
6. Cliquez **"Create repository"**

### 2. Pousser votre code sur GitHub

Ouvrez un terminal dans le dossier de votre projet et exécutez :

```bash
# Initialiser git si ce n'est pas déjà fait
git init

# Ajouter tous les fichiers
git add .

# Créer votre premier commit
git commit -m "Initial commit - Bowebtech Reading Group"

# Renommer la branche principale
git branch -M main

# Lier au repo GitHub
git remote add origin https://github.com/abdoulayegk/bowebtech.git

# Pousser le code
git push -u origin main
```

### 3. Activer GitHub Pages

1. Allez sur votre repo GitHub
2. Cliquez sur **Settings** (en haut)
3. Dans le menu de gauche, cliquez sur **Pages**
4. Sous "Source", sélectionnez **GitHub Actions**
5. C'est tout !

### 4. Vérifier le déploiement

1. Allez dans l'onglet **Actions** de votre repo
2. Vous devriez voir un workflow "Deploy to GitHub Pages" en cours
3. Attendez qu'il devienne vert (environ 1-2 minutes)
4. Votre site sera disponible à :
   ```
   https://abdoulayegk.github.io/bowebtech/
   ```

## Mises à jour futures

Chaque fois que vous faites un changement :

```bash
git add .
git commit -m "Description de vos changements"
git push
```

Le site se redéploie **automatiquement** !

## Ajouter un domaine personnalisé (optionnel)

### Si vous possédez un domaine (ex: bowebtech.com)

1. **Créer un fichier CNAME** :

   ```bash
   echo "bowebtech.com" > public/CNAME
   ```

2. **Configurer les DNS** chez votre registrar (Namecheap, GoDaddy, etc.) :

   ```
   Type: A     Nom: @     Valeur: 185.199.108.153
   Type: A     Nom: @     Valeur: 185.199.109.153
   Type: A     Nom: @     Valeur: 185.199.110.153
   Type: A     Nom: @     Valeur: 185.199.111.153

   Type: CNAME Nom: www   Valeur: abdoulayegk.github.io
   ```

3. **Dans GitHub Pages Settings** :

   - Entrez votre domaine personnalisé
   - Cochez "Enforce HTTPS"

4. **Attendez 24-48h** pour la propagation DNS

## Résolution de problèmes

### Le workflow échoue

- Vérifiez que vous avez bien activé "GitHub Actions" dans les Pages settings
- Assurez-vous que le workflow a les permissions nécessaires

### Le site ne s'affiche pas

- Attendez quelques minutes après le premier déploiement
- Vérifiez l'URL : `https://abdoulayegk.github.io/bowebtech/`
- Videz le cache de votre navigateur (Ctrl+Shift+R)

### Erreur 404

- Vérifiez que `base: './'` est bien dans `vite.config.ts`
- Le nom du repo doit correspondre à l'URL

## Besoin d'aide ?

Consultez la [documentation GitHub Pages](https://docs.github.com/en/pages)

---

**Félicitations ! Votre site est maintenant en ligne !**
