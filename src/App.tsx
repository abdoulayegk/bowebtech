import { motion } from 'framer-motion'
import type { ComponentType } from 'react'
import type { IconProps } from '@phosphor-icons/react'
import {
  ArrowRight,
  CalendarCheck,
  ChatsCircle,
  Lightning,
  PlayCircle,
  Sparkle,
  BookOpen,
  Users,
  TwitterLogo,
  LinkedinLogo,
  VideoCamera,
  Bell,
  CalendarPlus,
  EnvelopeSimple,
} from '@phosphor-icons/react'
import { faqItems } from './content/faq'
import { organisateurs } from './content/organisateurs'
import { programme2026 } from './content/programme'
import { resources } from './content/resources'
import { speakers } from './content/speakers'

type IconComponent = ComponentType<IconProps>

const differentiators: Array<{
  titre: string
  detail: string
  icon: IconComponent
}> = [
  {
    titre: 'Centré projet',
    detail:
      'Chaque atelier débouche sur un mini-projet ou une capsule pratique à réutiliser dans vos études.',
    icon: Lightning,
  },
  {
    titre: 'Mentorat pair-à-pair',
    detail:
      'Des sessions de coaching entre membres pour consolider les acquis et construire son portfolio.',
    icon: ChatsCircle,
  },
  {
    titre: 'Replay & ressources',
    detail:
      'Accès aux replays, slides et kits de démarrage pour continuer à apprendre à votre rythme.',
    icon: PlayCircle,
  },
]

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
}

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const INSCRIPTION_FORM_URL = 'https://formspree.io/f/{votre-identifiant}'

function App() {
  return (
    <div className="min-h-screen bg-surface-DEFAULT text-brand-100">
      {/* Hero Section - Modern Design */}
      <div className="relative min-h-screen overflow-hidden bg-surface-foreground">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-hero-gradient opacity-90" />
        <div className="absolute inset-0">
          <div className="absolute left-1/4 top-20 h-96 w-96 animate-pulse rounded-full bg-brand-500/20 blur-3xl" />
          <div className="absolute right-1/4 top-40 h-80 w-80 animate-pulse rounded-full bg-brand-accent/15 blur-3xl animation-delay-1000" />
          <div className="absolute bottom-20 left-1/3 h-72 w-72 animate-pulse rounded-full bg-brand-300/10 blur-3xl animation-delay-2000" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-surface-foreground/50 to-surface-DEFAULT" />
        
        {/* Header */}
        <motion.header 
          className="relative z-10 mx-auto max-w-7xl px-6 py-6 sm:px-10"
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center justify-between">
            <a href="#hero" className="group flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-500 to-brand-700 shadow-lg shadow-brand-500/50 transition-transform group-hover:scale-105">
                <span className="font-heading text-xl font-bold text-white">B</span>
              </div>
              <div className="flex flex-col">
                <span className="font-heading text-lg font-bold text-white">Bowebtech</span>
                <span className="text-xs text-brand-100/60">Reading Group</span>
              </div>
            </a>
            
            <nav className="hidden items-center gap-8 md:flex">
              {['Programme', 'Speakers', 'Organisateurs', 'Ressources', 'FAQ'].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-sm font-medium text-brand-100/80 transition-colors hover:text-white"
                >
                  {item}
                </a>
              ))}
            </nav>
            
            <a
              href="#inscription"
              className="group relative overflow-hidden rounded-full bg-gradient-to-r from-brand-500 to-brand-700 px-6 py-2.5 text-sm font-semibold text-white shadow-lg shadow-brand-500/30 transition-all hover:shadow-xl hover:shadow-brand-500/40"
            >
              <span className="relative z-10 flex items-center gap-2">
                Rejoindre
                <ArrowRight size={16} weight="bold" className="transition-transform group-hover:translate-x-1" />
              </span>
            </a>
          </div>
        </motion.header>

        {/* Hero Content */}
        <div className="relative z-10 mx-auto max-w-7xl px-6 pb-32 pt-16 sm:px-10 md:pt-24">
          <motion.div
            className="text-center"
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
          >
            {/* Badge */}
            <motion.div variants={fadeInUp} className="mb-8 inline-flex">
              <span className="inline-flex items-center gap-2 rounded-full border border-brand-500/30 bg-brand-500/10 px-5 py-2 text-sm font-semibold text-brand-300 backdrop-blur-sm">
                <Sparkle size={16} weight="fill" />
                Communauté IA & Data Francophone
              </span>
            </motion.div>

            {/* Main Title */}
            <motion.div variants={fadeInUp} className="mb-6">
              <h1 className="mb-4 font-heading text-5xl font-bold leading-tight text-white sm:text-6xl lg:text-7xl">
                <span className="bg-gradient-to-r from-white via-brand-100 to-brand-300 bg-clip-text text-transparent">
                  BOWEBTECH
                </span>
              </h1>
              <div className="mx-auto mb-6 h-1 w-24 rounded-full bg-gradient-to-r from-brand-500 to-brand-accent" />
              <h2 className="text-2xl font-medium text-brand-100/90 sm:text-3xl lg:text-4xl">
                Reading Group IA & Data
              </h2>
            </motion.div>

            {/* Subtitle */}
            <motion.p variants={fadeInUp} className="mx-auto mb-4 max-w-3xl text-lg font-medium text-brand-100 sm:text-xl">
              Le programme que les leaders de l'IA francophone attendaient
            </motion.p>

            {/* Description */}
            <motion.p variants={fadeInUp} className="mx-auto mb-12 max-w-2xl text-base leading-relaxed text-brand-100/70 sm:text-lg">
              12 ateliers mensuels pour maîtriser l'intelligence artificielle, le machine learning 
              et la data science. Apprentissage collaboratif, projets concrets et focus sur les 
              cas d'usage africains.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div variants={fadeInUp} className="mb-8 flex flex-wrap items-center justify-center gap-4">
              <a
                href="#inscription"
                className="group relative inline-flex items-center gap-3 overflow-hidden rounded-full bg-gradient-to-r from-brand-500 to-brand-700 px-8 py-4 text-base font-bold text-white shadow-2xl shadow-brand-500/40 transition-all hover:scale-105 hover:shadow-brand-500/60"
              >
                <span className="relative z-10">Réserver ma place</span>
                <ArrowRight size={20} weight="bold" className="relative z-10 transition-transform group-hover:translate-x-1" />
              </a>
              <a
                href="#programme"
                className="inline-flex items-center gap-2 rounded-full border-2 border-white/30 bg-white/5 px-8 py-4 text-base font-semibold text-white backdrop-blur-sm transition-all hover:border-white/50 hover:bg-white/10"
              >
                Explorer le programme
              </a>
            </motion.div>

            {/* Zoom Quick Link */}
            <motion.div variants={fadeInUp} className="mb-16">
              <a
                href="https://zoom.us/j/your-meeting-id"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 text-sm font-medium text-brand-300 transition-colors hover:text-white"
              >
                <VideoCamera size={18} weight="fill" />
                <span>Rejoindre nos sessions Zoom</span>
                <ArrowRight size={14} weight="bold" className="transition-transform group-hover:translate-x-1" />
              </a>
            </motion.div>

            {/* Feature Cards */}
            <motion.div variants={fadeInUp} className="mx-auto grid max-w-5xl gap-6 md:grid-cols-3">
              {[
                { icon: CalendarCheck, title: '12 Ateliers', desc: 'Janvier à Décembre 2026' },
                { icon: Users, title: 'Communauté', desc: 'Mentorat & networking' },
                { icon: BookOpen, title: 'Hands-on', desc: 'Projets pratiques' },
              ].map((feature, index) => (
                <div
                  key={index}
                  className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-md transition-all hover:scale-105 hover:border-brand-500/50 hover:bg-white/10"
                >
                  <feature.icon size={32} weight="duotone" className="mb-4 text-brand-300" />
                  <h3 className="mb-2 font-heading text-lg font-semibold text-white">{feature.title}</h3>
                  <p className="text-sm text-brand-100/70">{feature.desc}</p>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Main Content */}
      <main className="relative bg-surface-DEFAULT">
        {/* Programme Section */}
        <section id="programme" className="relative overflow-hidden py-24">
          <div className="absolute inset-0 bg-gradient-to-b from-surface-DEFAULT via-surface-foreground/30 to-surface-DEFAULT" />
          
          <div className="relative mx-auto max-w-7xl px-6 sm:px-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-16 text-center"
            >
              <span className="inline-block rounded-full bg-brand-500/10 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-brand-300">
                Programme 2026
              </span>
              <h2 className="mt-6 font-heading text-4xl font-bold text-white sm:text-5xl">
                12 Ateliers pour Maîtriser l'IA
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-lg text-brand-100/70">
                Un parcours complet de janvier à décembre. Théorie, pratique et projets concrets.
              </p>
            </motion.div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {programme2026.map((session, index) => (
                <motion.div
                  key={session.mois}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-surface-foreground/80 to-surface-foreground/60 p-6 backdrop-blur-sm transition-all hover:scale-105 hover:border-brand-500/50 hover:shadow-2xl hover:shadow-brand-500/20"
                >
                  <div className="absolute right-0 top-0 h-32 w-32 bg-gradient-to-br from-brand-500/20 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
                  
                  <div className="relative">
                    <div className="mb-4 flex items-start justify-between">
                      <span className="inline-block rounded-lg bg-brand-500/20 px-3 py-1 text-xs font-bold uppercase text-brand-300">
                        {session.mois}
                      </span>
                      <span className="text-2xl font-bold text-white/10">{String(index + 1).padStart(2, '0')}</span>
                    </div>
                    
                    <h3 className="mb-3 font-heading text-xl font-bold text-white">
                      {session.titre}
                    </h3>
                    
                    <p className="mb-4 text-sm leading-relaxed text-brand-100/70">
                      {session.description}
                    </p>
                    
                    <div className="mb-4 flex items-center gap-2 text-xs text-brand-100/60">
                      <CalendarCheck size={14} />
                      <span>{session.format}</span>
                    </div>
                    
                    <div className="flex items-center justify-between border-t border-white/10 pt-4">
                      <span className="text-sm font-medium text-brand-100/80">{session.intervenant}</span>
                      <a
                        href={session.inscription}
                        className="inline-flex items-center gap-1 text-sm font-semibold text-brand-300 transition-colors group-hover:text-brand-500"
                      >
                        Réserver
                        <ArrowRight size={14} weight="bold" />
                      </a>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Speakers Section */}
        <section id="speakers" className="relative py-24">
          <div className="mx-auto max-w-7xl px-6 sm:px-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-16 text-center"
            >
              <span className="inline-block rounded-full bg-brand-accent/20 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-brand-accent">
                Nos Experts
              </span>
              <h2 className="mt-6 font-heading text-4xl font-bold text-white sm:text-5xl">
                Apprenez des Meilleurs
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-lg text-brand-100/70">
                Des praticiens passionnés qui partagent leur expertise et leur expérience terrain.
              </p>
            </motion.div>

            {/* Differentiators */}
            <div className="mb-16 grid gap-6 md:grid-cols-3">
              {differentiators.map(({ titre, detail, icon: Icon }, index) => (
                <motion.div
                  key={titre}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white p-8 text-center shadow-xl transition-all hover:scale-105 hover:border-brand-500/50 hover:shadow-2xl hover:shadow-brand-500/20"
                >
                  <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-500/20 to-brand-accent/20">
                    <Icon size={32} weight="duotone" className="text-brand-500 transition-transform group-hover:scale-110" />
                  </div>
                  <h3 className="mb-2 font-heading text-xl font-bold text-gray-900">{titre}</h3>
                  <p className="text-sm leading-relaxed text-gray-600">{detail}</p>
                </motion.div>
              ))}
            </div>

            {/* Speakers Grid - Matching Organisateurs Style */}
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {speakers.map((speaker, index) => (
                <motion.div
                  key={speaker.nom}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white p-8 text-center shadow-xl transition-all hover:scale-105 hover:border-brand-500/50 hover:shadow-2xl hover:shadow-brand-500/20"
                >
                  {/* Profile Image Placeholder */}
                  <div className="mx-auto mb-6 h-32 w-32 overflow-hidden rounded-full border-4 border-brand-500/20 transition-all group-hover:border-brand-500">
                    {speaker.photo ? (
                      <img 
                        src={speaker.photo} 
                        alt={speaker.nom}
                        className="h-full w-full object-cover"
                      />
                    ) : (
                      <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-brand-500 to-brand-700 text-4xl font-bold text-white">
                        {speaker.nom.split(' ').map(n => n[0]).join('')}
                      </div>
                    )}
                  </div>

                  {/* Badge */}
                  <div className="mb-4">
                    <span className="inline-block rounded-lg bg-brand-accent/20 px-3 py-1 text-xs font-bold uppercase tracking-wide text-brand-accent">
                      {speaker.titre}
                    </span>
                  </div>

                  {/* Name */}
                  <h3 className="mb-4 font-heading text-2xl font-bold text-gray-900">
                    {speaker.nom}
                  </h3>

                  {/* Bio */}
                  <p className="text-sm leading-relaxed text-gray-600">
                    {speaker.bio}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Ressources Section */}
        <section id="ressources" className="relative overflow-hidden py-24">
          <div className="absolute inset-0 bg-gradient-to-b from-surface-DEFAULT via-surface-foreground/30 to-surface-DEFAULT" />
          
          <div className="relative mx-auto max-w-7xl px-6 sm:px-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-16 text-center"
            >
              <span className="inline-block rounded-full bg-brand-500/10 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-brand-300">
                Ressources
              </span>
              <h2 className="mt-6 font-heading text-4xl font-bold text-white sm:text-5xl">
                Bibliothèque de Ressources
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-lg text-brand-100/70">
                Guides, tutoriels et outils pour approfondir vos connaissances.
              </p>
            </motion.div>

            <div className="grid gap-6 md:grid-cols-2">
              {resources.map((resource, index) => (
                <motion.a
                  key={resource.titre}
                  href={resource.url}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-surface-foreground/90 to-surface-foreground/70 p-8 backdrop-blur-sm transition-all hover:scale-105 hover:border-brand-500/50 hover:shadow-2xl hover:shadow-brand-500/20"
                >
                  <div className="absolute right-0 top-0 h-40 w-40 bg-gradient-to-br from-brand-accent/20 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
                  
                  <div className="relative">
                    <span className="inline-block rounded-lg bg-brand-accent/20 px-3 py-1 text-xs font-bold uppercase text-brand-accent">
                      {resource.type}
                    </span>
                    <h3 className="mt-4 font-heading text-2xl font-bold text-white group-hover:text-brand-300">
                      {resource.titre}
                    </h3>
                    <p className="mt-3 text-base leading-relaxed text-brand-100/70">
                      {resource.description}
                    </p>
                    <div className="mt-6 flex items-center gap-2 text-sm font-semibold text-brand-300 transition-colors group-hover:text-white">
                      <span>Explorer</span>
                      <ArrowRight size={16} weight="bold" className="transition-transform group-hover:translate-x-1" />
                    </div>
                  </div>
                </motion.a>
              ))}
            </div>
          </div>
        </section>

        {/* Organizers Section - Like the image */}
        <section id="organisateurs" className="relative overflow-hidden py-24">
          <div className="absolute inset-0 bg-gradient-to-b from-surface-DEFAULT via-surface-foreground/30 to-surface-DEFAULT" />
          
          <div className="relative mx-auto max-w-7xl px-6 sm:px-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-16 text-center"
            >
              <span className="inline-block rounded-full bg-brand-500/10 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-brand-300">
                Notre Équipe
              </span>
              <h2 className="mt-6 font-heading text-4xl font-bold text-white sm:text-5xl">
                Les Organisateurs
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-lg text-brand-100/70">
                Une équipe passionnée qui rend Bowebtech possible.
              </p>
            </motion.div>

            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {organisateurs.map((org, index) => (
                <motion.div
                  key={org.nom}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white p-8 text-center shadow-xl transition-all hover:scale-105 hover:border-brand-500/50 hover:shadow-2xl hover:shadow-brand-500/20"
                >
                  {/* Profile Image */}
                  <div className="mx-auto mb-6 h-32 w-32 overflow-hidden rounded-full border-4 border-brand-500/20 transition-all group-hover:border-brand-500">
                    {org.photo ? (
                      <img 
                        src={org.photo} 
                        alt={org.nom}
                        className="h-full w-full object-cover"
                      />
                    ) : (
                      <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-brand-500 to-brand-700 text-4xl font-bold text-white">
                        {org.nom.split(' ').map(n => n[0]).join('')}
                      </div>
                    )}
                  </div>

                  {/* Name and Role */}
                  <h3 className="mb-2 font-heading text-2xl font-bold text-gray-900">
                    {org.nom}
                  </h3>
                  <p className="mb-4 font-semibold text-brand-500">
                    {org.role}
                  </p>

                  {/* Description */}
                  <p className="mb-6 text-sm leading-relaxed text-gray-600">
                    {org.description}
                  </p>

                  {/* Social Links */}
                  <div className="flex items-center justify-center gap-4">
                    {org.twitter && (
                      <a
                        href={org.twitter}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-400 text-white transition-all hover:scale-110 hover:bg-blue-500"
                        aria-label="Twitter"
                      >
                        <TwitterLogo size={20} weight="fill" />
                      </a>
                    )}
                    {org.linkedin && (
                      <a
                        href={org.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-600 text-white transition-all hover:scale-110 hover:bg-blue-700"
                        aria-label="LinkedIn"
                      >
                        <LinkedinLogo size={20} weight="fill" />
                      </a>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section id="faq" className="relative py-24">
          <div className="mx-auto max-w-4xl px-6 sm:px-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-16 text-center"
            >
              <span className="inline-block rounded-full bg-brand-accent/20 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-brand-accent">
                FAQ
              </span>
              <h2 className="mt-6 font-heading text-4xl font-bold text-white sm:text-5xl">
                Questions Fréquentes
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-lg text-brand-100/70">
                Tout ce que vous devez savoir avant de rejoindre la communauté.
              </p>
            </motion.div>

            <div className="space-y-4">
              {faqItems.map((faq, index) => (
                <motion.details
                  key={faq.question}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  className="group rounded-2xl border border-white/10 bg-surface-foreground/60 backdrop-blur-sm transition-all hover:border-brand-500/30"
                >
                  <summary className="cursor-pointer list-none p-6 text-lg font-semibold text-white transition-colors group-open:text-brand-300">
                    <div className="flex items-center justify-between">
                      <span>{faq.question}</span>
                      <span className="text-2xl transition-transform group-open:rotate-45">+</span>
                    </div>
                  </summary>
                  <div className="border-t border-white/10 px-6 pb-6 pt-4">
                    <p className="leading-relaxed text-brand-100/70">{faq.reponse}</p>
                  </div>
                </motion.details>
              ))}
            </div>
          </div>
        </section>

        {/* Join the AI Reading Group Section */}
        <section className="relative py-24">
          <div className="mx-auto max-w-6xl px-6 sm:px-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <h2 className="mb-12 font-heading text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
                Join the AI Reading Group Army and/or Contact Us to present something!
              </h2>
              
              <div className="flex flex-wrap items-center justify-center gap-4">
                <a
                  href="https://zoom.us/j/your-meeting-id"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-3 rounded-xl bg-[#a8392f] px-8 py-4 text-lg font-bold text-white shadow-xl transition-all hover:scale-105 hover:bg-[#8d2f26] hover:shadow-2xl"
                >
                  <VideoCamera size={24} weight="fill" />
                  <span>Join us on Zoom</span>
                </a>
                
                <a
                  href="#inscription"
                  className="group inline-flex items-center gap-3 rounded-xl bg-[#a8392f] px-8 py-4 text-lg font-bold text-white shadow-xl transition-all hover:scale-105 hover:bg-[#8d2f26] hover:shadow-2xl"
                >
                  <Bell size={24} weight="fill" />
                  <span>Get Mail Notifications</span>
                </a>
                
                <a
                  href="https://calendar.google.com/calendar/render?action=TEMPLATE&text=Bowebtech+Reading+Group"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-3 rounded-xl bg-[#a8392f] px-8 py-4 text-lg font-bold text-white shadow-xl transition-all hover:scale-105 hover:bg-[#8d2f26] hover:shadow-2xl"
                >
                  <CalendarPlus size={24} weight="fill" />
                  <span>Add to Google Calendar</span>
                </a>
                
                <a
                  href="mailto:hello@bowebtech.dev"
                  className="group inline-flex items-center gap-3 rounded-xl bg-[#a8392f] px-8 py-4 text-lg font-bold text-white shadow-xl transition-all hover:scale-105 hover:bg-[#8d2f26] hover:shadow-2xl"
                >
                  <EnvelopeSimple size={24} weight="fill" />
                  <span>Contact Us</span>
                </a>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Inscription CTA */}
        <section id="inscription" className="relative overflow-hidden py-24">
          <div className="absolute inset-0 bg-gradient-to-br from-brand-700 via-brand-500 to-brand-accent" />
          <div className="absolute inset-0 opacity-20" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cpath d='M36 18c3.314 0 6 2.686 6 6s-2.686 6-6 6-6-2.686-6-6 2.686-6 6-6z' stroke='%23fff' stroke-opacity='.1'/%3E%3C/g%3E%3C/svg%3E")`
          }} />
          
          <div className="relative mx-auto max-w-5xl px-6 text-center sm:px-10">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-white/20 px-4 py-2 backdrop-blur-sm">
                <Sparkle size={16} weight="fill" className="text-white" />
                <span className="text-sm font-bold uppercase tracking-wider text-white">
                  Rejoignez-nous
                </span>
              </div>
              
              <h2 className="mb-6 font-heading text-4xl font-bold text-white sm:text-5xl lg:text-6xl">
                Prêt à Transformer Votre Parcours en IA ?
              </h2>
              
              <p className="mx-auto mb-10 max-w-2xl text-lg text-white/90">
                Inscrivez-vous pour recevoir les invitations mensuelles, les ressources 
                exclusives et rejoindre une communauté passionnée.
              </p>

              <form
                action={INSCRIPTION_FORM_URL}
                method="POST"
                className="mx-auto flex max-w-lg flex-col gap-3 rounded-2xl bg-white/10 p-2 backdrop-blur-md sm:flex-row sm:items-center"
              >
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="votre.email@example.com"
                  className="h-14 flex-1 rounded-xl border-2 border-transparent bg-white/20 px-6 text-base text-white placeholder:text-white/60 focus:border-white focus:outline-none focus:ring-2 focus:ring-white/40"
                />
                <button
                  type="submit"
                  className="group flex h-14 items-center justify-center gap-2 rounded-xl bg-white px-8 font-bold text-brand-700 transition-all hover:scale-105 hover:shadow-2xl"
                >
                  <span>S'inscrire</span>
                  <ArrowRight size={20} weight="bold" className="transition-transform group-hover:translate-x-1" />
                </button>
              </form>

              <p className="mt-6 text-sm text-white/70">
                Pas de spam. Uniquement les informations essentielles. Désabonnement en un clic.
              </p>
            </motion.div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-white/10 bg-surface-foreground py-10 text-sm text-brand-100/70">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 px-6 sm:px-10 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="font-semibold text-white">© {new Date().getFullYear()} Bowebtech</p>
            <p className="mt-1 text-xs">Communauté francophone IA & Data</p>
          </div>
          <div className="flex flex-wrap gap-6">
            <a className="transition hover:text-white" href="mailto:hello@bowebtech.dev">
              Contact
            </a>
            <a className="transition hover:text-white" href="https://github.com/bowebtech">
              GitHub
            </a>
            <a className="transition hover:text-white" href="https://linkedin.com/company/bowebtech">
              LinkedIn
            </a>
            <a className="transition hover:text-white" href="https://twitter.com/bowebtech">
              Twitter
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
