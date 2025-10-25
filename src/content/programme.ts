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
  titre: string
  description: string
  format: string
  intervenant: string
  inscription: string
  tag?: string
}

export const programme2026: MoisProgramme[] = [
  {
    mois: 'Janvier 2026',
    titre: 'Lancement & tendances IA 2026',
    description:
      'Panorama des avanc\u00e9es IA/ML, pr\u00e9sentation de Bowebtech et organisation des groupes de lecture.',
    format: 'Keynote + table ronde',
    intervenant: '\u00c9quipe Bowebtech',
    inscription: '#inscription',
  },
  {
    mois: 'F\u00e9vrier 2026',
    titre: 'Fondamentaux du Machine Learning',
    description:
      "Revue de mod\u00e8les supervis\u00e9s, bonnes pratiques d'\u00e9valuation et atelier notebooks.",
    format: 'Atelier pratique',
    intervenant: 'Saliou Diallo \u00b7 Data Scientist',
    inscription: '#inscription',
  },
  {
    mois: 'Mars 2026',
    titre: 'MLOps & pipelines de d\u00e9ploiement',
    description:
      'Mettre en production un mod\u00e8le gr\u00e2ce \u00e0 un pipeline CI/CD et au monitoring continu.',
    format: 'D\u00e9mo + \u00e9tude de cas',
    intervenant: 'A\u00efcha Faye \u00b7 Ing\u00e9nieure ML',
    inscription: '#inscription',
  },
  {
    mois: 'Avril 2026',
    titre: 'IA g\u00e9n\u00e9rative pour la cr\u00e9ation de contenu',
    description:
      "Prompt engineering, fine-tuning de mod\u00e8les open-source et limites \u00e9thiques de l'IA g\u00e9n\u00e9rative.",
    format: 'Workshop interactif',
    intervenant: 'Moustapha Ba \u00b7 Chercheur IA',
    inscription: '#inscription',
  },
  {
    mois: 'Mai 2026',
    titre: 'Data Storytelling & visualisation',
    description:
      'Techniques de storytelling, dashboards modernes et communication de r\u00e9sultats aux parties prenantes.',
    format: 'Masterclass',
    intervenant: 'Fatou Ndiaye \u00b7 Data Analyste',
    inscription: '#inscription',
  },
  {
    mois: 'Juin 2026',
    titre: '\u00c9thique, biais et conception responsable',
    description:
      'Identifier les biais, \u00e9valuer les risques et int\u00e9grer la responsabilit\u00e9 dans le cycle de vie IA.',
    format: '\u00c9tudes de cas',
    intervenant: 'Collectif Bowebtech',
    inscription: '#inscription',
  },
  {
    mois: 'Juillet 2026',
    titre: 'Computer Vision appliqu\u00e9e',
    description:
      'D\u00e9tection, segmentation et d\u00e9ploiement sur appareils edge pour projets concrets.',
    format: 'Lab en petits groupes',
    intervenant: 'Souleymane Kane \u00b7 Ing\u00e9nieur Computer Vision',
    inscription: '#inscription',
  },
  {
    mois: 'Ao\u00fbt 2026',
    titre: 'NLP pour le fran\u00e7ais et langues africaines',
    description:
      'Preprocessing, mod\u00e8les multilingues et cr\u00e9ation de datasets locaux.',
    format: 'Atelier + retours de recherche',
    intervenant: 'Collectif AfroNLP',
    inscription: '#inscription',
  },
  {
    mois: 'Septembre 2026',
    titre: 'Data Engineering & architecture moderne',
    description:
      'Modern data stack, ingestion en temps r\u00e9el et gouvernance des donn\u00e9es.',
    format: 'Talk technique',
    intervenant: 'Adama Sow \u00b7 Data Engineer',
    inscription: '#inscription',
  },
  {
    mois: 'Octobre 2026',
    titre: 'IA pour la sant\u00e9',
    description:
      'Cas d\u2019usage, contraintes r\u00e9glementaires et meilleures pratiques de validation clinique.',
    format: 'Panel multi-disciplinaire',
    intervenant: 'Invit\u00e9\u00b7es externes',
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
    mois: 'D\u00e9cembre 2026',
    titre: 'R\u00e9trospective & roadmap 2027',
    description:
      'Bilan des apprentissages, annonces des prochains chantiers et c\u00e9l\u00e9bration de la communaut\u00e9.',
    format: 'Sessions \u00e9clair + networking',
    intervenant: '\u00c9quipe Bowebtech',
    inscription: '#inscription',
  },
]