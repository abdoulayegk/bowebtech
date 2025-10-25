export interface SessionMedia {
  type: 'video' | 'image'
  url: string
  description?: string
  thumbnail?: string
}

export interface AtelierSession {
  titre: string
  description: string
  format: string
  intervenant: string
  inscription: string
  media?: SessionMedia
}

export interface ProgrammeMonth {
  id: string
  mois: string
  accroche: string
  sessions: AtelierSession[]
}

export const programme2026: ProgrammeMonth[] = [
  {
    id: 'janvier-2026',
    mois: 'Janvier 2026',
    accroche: 'Lancement & tendances IA 2026',
    sessions: [
      {
        titre: 'Lancement & tendances IA 2026',
        description:
          'Panorama des avancées IA/ML, présentation de Bowebtech et organisation des groupes de lecture.',
        format: 'Keynote + table ronde',
        intervenant: 'Équipe Bowebtech',
        inscription: '#inscription',
        media: {
          type: 'video',
          url: 'https://www.youtube.com/embed/VIDEO_ID',
          description: 'Replay de la session disponible sur YouTube. Remplacez VIDEO_ID par votre identifiant.',
        },
      },
    ],
  },
  {
    id: 'fevrier-2026',
    mois: 'Février 2026',
    accroche: 'Fondamentaux du Machine Learning',
    sessions: [
      {
        titre: 'Fondamentaux du Machine Learning',
        description:
          "Revue de modèles supervisés, bonnes pratiques d'évaluation et atelier notebooks.",
        format: 'Atelier pratique',
        intervenant: 'Saliou Diallo · Data Scientist',
        inscription: '#inscription',
      },
    ],
  },
  {
    id: 'mars-2026',
    mois: 'Mars 2026',
    accroche: 'MLOps & pipelines de déploiement',
    sessions: [
      {
        titre: 'MLOps & pipelines de déploiement',
        description:
          'Mettre en production un modèle grâce à un pipeline CI/CD et au monitoring continu.',
        format: 'Démo + étude de cas',
        intervenant: 'Aïcha Faye · Ingénieure ML',
        inscription: '#inscription',
      },
    ],
  },
  {
    id: 'avril-2026',
    mois: 'Avril 2026',
    accroche: 'IA générative pour la création de contenu',
    sessions: [
      {
        titre: 'IA générative pour la création de contenu',
        description:
          "Prompt engineering, fine-tuning de modèles open-source et limites éthiques de l'IA générative.",
        format: 'Workshop interactif',
        intervenant: 'Moustapha Ba · Chercheur IA',
        inscription: '#inscription',
      },
    ],
  },
  {
    id: 'mai-2026',
    mois: 'Mai 2026',
    accroche: 'Data Storytelling & visualisation',
    sessions: [
      {
        titre: 'Data Storytelling & visualisation',
        description:
          'Techniques de storytelling, dashboards modernes et communication de résultats aux parties prenantes.',
        format: 'Masterclass',
        intervenant: 'Fatou Ndiaye · Data Analyste',
        inscription: '#inscription',
      },
    ],
  },
  {
    id: 'juin-2026',
    mois: 'Juin 2026',
    accroche: 'Éthique, biais et conception responsable',
    sessions: [
      {
        titre: 'Éthique, biais et conception responsable',
        description:
          'Identifier les biais, évaluer les risques et intégrer la responsabilité dans le cycle de vie IA.',
        format: 'Études de cas',
        intervenant: 'Collectif Bowebtech',
        inscription: '#inscription',
      },
    ],
  },
  {
    id: 'juillet-2026',
    mois: 'Juillet 2026',
    accroche: 'Computer Vision appliquée',
    sessions: [
      {
        titre: 'Computer Vision appliquée',
        description:
          'Détection, segmentation et déploiement sur appareils edge pour projets concrets.',
        format: 'Lab en petits groupes',
        intervenant: 'Souleymane Kane · Ingénieur Computer Vision',
        inscription: '#inscription',
      },
    ],
  },
  {
    id: 'aout-2026',
    mois: 'Août 2026',
    accroche: 'NLP pour le français et langues africaines',
    sessions: [
      {
        titre: 'NLP pour le français et langues africaines',
        description:
          'Preprocessing, modèles multilingues et création de datasets locaux.',
        format: 'Atelier + retours de recherche',
        intervenant: 'Collectif AfroNLP',
        inscription: '#inscription',
      },
    ],
  },
  {
    id: 'septembre-2026',
    mois: 'Septembre 2026',
    accroche: 'Data Engineering & architecture moderne',
    sessions: [
      {
        titre: 'Data Engineering & architecture moderne',
        description:
          'Modern data stack, ingestion en temps réel et gouvernance des données.',
        format: 'Talk technique',
        intervenant: 'Adama Sow · Data Engineer',
        inscription: '#inscription',
      },
    ],
  },
  {
    id: 'octobre-2026',
    mois: 'Octobre 2026',
    accroche: 'IA pour la santé',
    sessions: [
      {
        titre: 'IA pour la santé',
        description:
          'Cas d’usage, contraintes réglementaires et meilleures pratiques de validation clinique.',
        format: 'Panel multi-disciplinaire',
        intervenant: 'Invité·es externes',
        inscription: '#inscription',
      },
    ],
  },
  {
    id: 'novembre-2026',
    mois: 'Novembre 2026',
    accroche: 'Hackathon Bowebtech',
    sessions: [
      {
        titre: 'Hackathon Bowebtech',
        description:
          'Prototypage collaboratif autour de datasets ouverts; mentorat et restitution finale.',
        format: 'Hackathon 48h',
        intervenant: 'Mentors Bowebtech',
        inscription: '#inscription',
      },
    ],
  },
  {
    id: 'decembre-2026',
    mois: 'Décembre 2026',
    accroche: 'Rétrospective & roadmap 2027',
    sessions: [
      {
        titre: 'Rétrospective & roadmap 2027',
        description:
          'Bilan des apprentissages, annonces des prochains chantiers et célébration de la communauté.',
        format: 'Sessions éclair + networking',
        intervenant: 'Équipe Bowebtech',
        inscription: '#inscription',
      },
    ],
  },
]

export const pastAteliers: ProgrammeMonth[] = [
  {
    id: 'decembre-2025',
    mois: 'Décembre 2025',
    accroche: 'Demo Day — Projets IA responsables',
    sessions: [
      {
        titre: 'Demo Day communautaire',
        description:
          'Présentation des prototypes IA développés par la cohorte 2025 et retours croisés des mentors.',
        format: 'Démonstrations + networking',
        intervenant: 'Cohorte Bowebtech 2025',
        inscription: '#',
      },
    ],
  },
  {
    id: 'novembre-2025',
    mois: 'Novembre 2025',
    accroche: 'Atelier MLOps — Observabilité temps réel',
    sessions: [
      {
        titre: 'Observabilité & monitoring des modèles',
        description:
          'Bonnes pratiques pour suivre les dérives de données et automatiser les alertes de performance.',
        format: 'Atelier technique',
        intervenant: 'Mentors Bowebtech',
        inscription: '#',
      },
    ],
  },
]

