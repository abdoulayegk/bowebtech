export interface Session {
  date: string
  titre: string
  description: string
  format: string
  intervenant: string
  inscription: string
  tag?: string
}

export interface MoisProgramme {
  mois: string
  sessions: Session[]
}

export const programme2026: MoisProgramme[] = [
  {
    mois: 'Janvier 2026',
    titre: 'Lancement & tendances IA 2026',
    description:
      'Panorama des avancées IA/ML, présentation de Bowebtech et organisation des groupes de lecture.',
    format: 'Keynote + table ronde',
    intervenant: 'Équipe Bowebtech',
    inscription: '#inscription',
  },
  {
    mois: 'Février 2026',
    titre: 'Fondamentaux du Machine Learning',
    description:
      "Revue de modèles supervisés, bonnes pratiques d'évaluation et atelier notebooks.",
    format: 'Atelier pratique',
    intervenant: 'Saliou Diallo · Data Scientist',
    inscription: '#inscription',
  },
  {
    mois: 'Mars 2026',
    titre: 'MLOps & pipelines de déploiement',
    description:
      'Mettre en production un modèle grâce à un pipeline CI/CD et au monitoring continu.',
    format: 'Démo + étude de cas',
    intervenant: 'Aïcha Faye · Ingénieure ML',
    inscription: '#inscription',
  },
  {
    mois: 'Avril 2026',
    titre: 'IA générative pour la création de contenu',
    description:
      "Prompt engineering, fine-tuning de modèles open-source et limites éthiques de l'IA générative.",
    format: 'Workshop interactif',
    intervenant: 'Moustapha Ba · Chercheur IA',
    inscription: '#inscription',
  },
  {
    mois: 'Mai 2026',
    titre: 'Data Storytelling & visualisation',
    description:
      'Techniques de storytelling, dashboards modernes et communication de résultats aux parties prenantes.',
    format: 'Masterclass',
    intervenant: 'Fatou Ndiaye · Data Analyste',
    inscription: '#inscription',
  },
  {
    mois: 'Juin 2026',
    titre: 'Éthique, biais et conception responsable',
    description:
      'Identifier les biais, évaluer les risques et intégrer la responsabilité dans le cycle de vie IA.',
    format: 'Études de cas',
    intervenant: 'Collectif Bowebtech',
    inscription: '#inscription',
  },
  {
    mois: 'Juillet 2026',
    titre: 'Computer Vision appliquée',
    description:
      'Détection, segmentation et déploiement sur appareils edge pour projets concrets.',
    format: 'Lab en petits groupes',
    intervenant: 'Souleymane Kane · Ingénieur Computer Vision',
    inscription: '#inscription',
  },
  {
    mois: 'Août 2026',
    titre: 'NLP pour le français et langues africaines',
    description:
      'Preprocessing, modèles multilingues et création de datasets locaux.',
    format: 'Atelier + retours de recherche',
    intervenant: 'Collectif AfroNLP',
    inscription: '#inscription',
  },
  {
    mois: 'Septembre 2026',
    titre: 'Data Engineering & architecture moderne',
    description:
      'Modern data stack, ingestion en temps réel et gouvernance des données.',
    format: 'Talk technique',
    intervenant: 'Adama Sow · Data Engineer',
    inscription: '#inscription',
  },
  {
    mois: 'Octobre 2026',
    titre: 'IA pour la santé',
    description:
      'Cas d’usage, contraintes réglementaires et meilleures pratiques de validation clinique.',
    format: 'Panel multi-disciplinaire',
    intervenant: 'Invité·es externes',
    inscription: '#inscription',
  },
  {
    mois: 'Novembre 2026',
    titre: 'Hackathon Bowebtech',
    description:
      'Prototypage collaboratif autour de datasets ouverts; mentorat et restitution finale.',
    format: 'Hackathon 48h',
    intervenant: 'Mentors Bowebtech',
    inscription: '#inscription',
  },
  {
    mois: 'Décembre 2026',
    titre: 'Rétrospective & roadmap 2027',
    description:
      'Bilan des apprentissages, annonces des prochains chantiers et célébration de la communauté.',
    format: 'Sessions éclair + networking',
    intervenant: 'Équipe Bowebtech',
    inscription: '#inscription',
  },
]

