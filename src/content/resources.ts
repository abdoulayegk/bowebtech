export interface Resource {
  titre: string
  type: 'Article' | 'Vidéo' | 'Outil' | 'Livre blanc'
  url: string
  description: string
}

export const resources: Resource[] = [
  {
    titre: 'Guide du Machine Learning responsable',
    type: 'Livre blanc',
    url: 'https://responsible-ml.bowebtech.dev',
    description:
      'Un condensé des bonnes pratiques pour construire des systèmes IA fiables et transparents.',
  },
  {
    titre: 'Starter kit notebooks Bowebtech',
    type: 'Outil',
    url: 'https://github.com/bowebtech/starter-notebooks',
    description:
      'Templates de notebooks Jupyter pour tester rapidement vos idées pendant les ateliers.',
  },
  {
    titre: 'Relecture “Modern Data Stack”',
    type: 'Article',
    url: 'https://blog.bowebtech.dev/modern-data-stack',
    description:
      'Décryptage des composants clés pour monter une plateforme de données évolutive en 2026.',
  },
  {
    titre: 'Replay atelier IA générative',
    type: 'Vidéo',
    url: 'https://videos.bowebtech.dev/replay-genai',
    description:
      'Retour sur notre session d’avril avec démonstrations et retours d’expérience.',
  },
]

