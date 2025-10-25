export interface FaqItem {
  question: string
  reponse: string
}

export const faqItems: FaqItem[] = [
  {
    question: 'Qui peut rejoindre Bowebtech ?',
    reponse:
      'Étudiant·es, jeunes diplômé·es et professionnel·les curieux souhaitant renforcer leurs compétences en IA, ML et data. Aucun prérequis formel, la motivation prime.',
  },
  {
    question: 'Quel est le format des ateliers ?',
    reponse:
      'Chaque mois nous combinons talks inspirationnels, études de cas et ateliers pratiques en petits groupes. Des supports sont envoyés avant la session pour préparer la discussion.',
  },
  {
    question: 'Les événements sont-ils payants ?',
    reponse:
      'Les ateliers sont gratuits pour la communauté Bowebtech. Certaines masterclasses premium ou le hackathon peuvent demander une contribution pour couvrir les coûts logistiques.',
  },
  {
    question: "Comment recevoir l'actualité du programme ?",
    reponse:
      'Inscrivez-vous à la newsletter ou suivez-nous sur GitHub et LinkedIn. Nous envoyons un rappel deux semaines avant chaque session.',
  },
]

