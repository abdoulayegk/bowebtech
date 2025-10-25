#!/bin/bash

# 🚀 Script de déploiement rapide pour Bowebtech

echo "🚀 Déploiement de Bowebtech sur GitHub Pages..."
echo ""

# Vérifier si git est initialisé
if [ ! -d .git ]; then
    echo "📦 Initialisation de Git..."
    git init
    git branch -M main
fi

# Vérifier si le remote existe
if ! git remote | grep -q origin; then
    echo "🔗 Ajout du remote GitHub..."
    git remote add origin https://github.com/abdoulayegk/bowebtech.git
fi

# Ajouter tous les fichiers
echo "📝 Ajout des fichiers..."
git add .

# Demander un message de commit
echo ""
read -p "💬 Message de commit (ou Enter pour 'Update site'): " commit_msg
commit_msg=${commit_msg:-"Update site"}

# Commit
echo "💾 Commit..."
git commit -m "$commit_msg"

# Push
echo "🚀 Push vers GitHub..."
git push -u origin main

echo ""
echo "✅ Déploiement terminé!"
echo "🌐 Votre site sera disponible dans 1-2 minutes à:"
echo "   https://abdoulayegk.github.io/bowebtech/"
echo ""
echo "📊 Vérifiez le déploiement sur:"
echo "   https://github.com/abdoulayegk/bowebtech/actions"
