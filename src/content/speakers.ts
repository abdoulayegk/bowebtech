export interface Speaker {
  nom: string
  titre: string
  bio: string
  photo?: string
}

export const speakers: Speaker[] = [
  {
    nom: 'Mamadou Saidou Diallo',
    titre: 'Data Scientist · Bowebtech',
    bio: 'Responsable des ateliers pratiques et passionné par le mentoring des étudiants en IA.',
  },
  {
    nom: 'Mamadou moussa BANGOURA',
    titre: 'Ingénieure Machine Learning · Bowebtech',
    bio: 'Spécialiste du déploiement de modèles et des workflows MLOps dans des environnements cloud.',
  },
  {
    nom: 'Alhasane DIALLO',
    titre: 'Chercheur IA générative',
    bio: 'Explore les applications de l’IA générative pour la création de contenu responsable.',
  },
  {
    nom: 'Mamadou pathé LY',
    titre: 'Data Analyste · Bowebtech',
    bio: 'Anime les sessions Data Storytelling pour relier la technique et les enjeux métiers.',
  },
]
