export interface Organisateur {
  nom: string
  role: string
  description: string
  photo?: string
  linkedin?: string
  twitter?: string
}

export const organisateurs: Organisateur[] = [
  {
    nom: 'Mamadou Pathé Ly',
    role: 'Fondateur & Lead IA',
    description: 'PhD in applied mathematics | machine learning practitioner',
    photo: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop',
    linkedin: 'https://www.linkedin.com/in/mamadou-pathe-ly',
    twitter: 'https://twitter.com/mamadoupathe',
  },
  {
    nom: 'Ahmed Tidiane BALDÉ',
    role: 'Co-fondateur',
    description: 'Senior Machine Learning Engineer',
    photo: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=400&fit=crop',
    linkedin: 'https://www.linkedin.com/in/ahmed-balde',
    twitter: 'https://twitter.com/ahmedbalde',
  },
  {
    nom: 'Harouna DIALLO',
    role: 'Responsable Technique',
    description: 'Software Engineer',
    linkedin: 'https://www.linkedin.com/in/harouna-diallo',
    twitter: 'https://twitter.com/harounadiallo',
  },
  {
    nom: 'Mamadou Moussa BANGOURA',
    role: 'Coordinateur Data',
    description: 'Consultant data engineer au compte de Atos Sénégal pour le groupe la poste (France) et formateur en Data science',
    linkedin: 'https://www.linkedin.com/in/mamadou-bangoura',
    twitter: 'https://twitter.com/mamadoubangoura',
  },
  {
    nom: 'Prof Gayo DIALLO',
    role: 'Conseiller Académique',
    description: 'Professeur titulaire en informatique / santé numérique à l\'ISPED, Université de Bordeaux, et directeur adjoint du groupe de recherche AHeaD.',
    photo: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop',
    twitter: 'https://twitter.com/gayodiallo',
  },
  {
    nom: 'Mamadou Tafsir Diallo',
    role: 'Expert Systèmes',
    description: 'DHIS2 Solution Architect & Health Information Systems Expert',
    photo: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop',
    linkedin: 'https://www.linkedin.com/in/mamadou-tafsir-diallo',
    twitter: 'https://twitter.com/tafsirdiallo',
  },
]

