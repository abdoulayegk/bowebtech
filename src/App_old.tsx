import { motion, useScroll, useTransform } from 'framer-motion'
import { useState } from 'react'
import type { ComponentType } from 'react'
import type { IconProps } from '@phosphor-icons/react'
import {
  ArrowRight,
  CalendarCheck,
  ChatsCircle,
  Lightning,
  PlayCircle,
  Sparkle,
  UsersThree,
  BookOpen,
  Users,
  Lightbulb,
} from '@phosphor-icons/react'
import { faqItems } from './content/faq'
import { organisateurs } from './content/organisateurs'
import { programme2026 } from './content/programme'
import { resources } from './content/resources'
import { speakers } from './content/speakers'

type IconComponent = ComponentType<IconProps>

const featureHighlights: Array<{
  titre: string
  description: string
  icon: IconComponent
}> = [
  {
    titre: 'Ateliers mensuels',
    description:
      'Un rendez-vous chaque mois pour décortiquer ensemble un sujet IA/ML avec démonstrations concrètes.',
    icon: CalendarCheck,
  },
  {
    titre: 'Communauté active',
    description:
      'Une ambiance bienveillante pour progresser, partager ses avancées et rencontrer des mentors.',
    icon: UsersThree,
  },
  {
    titre: 'Apprentissage immersif',
    description:
      'Labs collaboratifs, ressources exclusives et focus sur des cas d’usage africains.',
    icon: Sparkle,
  },
]

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

const heroVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
}

const INSCRIPTION_FORM_URL = 'https://formspree.io/f/{votre-identifiant}'

function App() {
  return (
    <div className="min-h-screen bg-surface-DEFAULT text-brand-100">
      <div className="relative overflow-hidden bg-surface-foreground pb-24">
        <div className="absolute inset-0 bg-hero-gradient opacity-[0.85]" aria-hidden="true" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-surface-DEFAULT" />
        <header className="relative mx-auto flex max-w-6xl items-center justify-between px-6 py-6 sm:px-10">
          <a
            href="#hero"
            className="flex items-center gap-2 font-heading text-lg font-semibold text-white"
          >
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-500 text-lg text-white shadow-brand">
              B
            </span>
            Bowebtech
          </a>
          <nav className="hidden items-center gap-8 text-sm font-medium text-brand-100/80 md:flex">
            <a className="transition hover:text-white" href="#programme">
              Programme 2026
            </a>
            <a className="transition hover:text-white" href="#intervenants">
              Intervenant·es
            </a>
            <a className="transition hover:text-white" href="#organisation">
              Organisateur·rices
            </a>
            <a className="transition hover:text-white" href="#ressources">
              Ressources
            </a>
            <a className="transition hover:text-white" href="#faq">
              FAQ
            </a>
          </nav>
          <a
            href="#inscription"
            className="hidden items-center gap-2 rounded-full bg-brand-500 px-5 py-2 text-sm font-semibold text-white shadow-brand transition hover:translate-y-0.5 hover:bg-brand-300 md:inline-flex"
          >
            Rejoindre la communauté
            <ArrowRight size={18} weight="bold" />
          </a>
        </header>

        <motion.section
          id="hero"
          className="relative mx-auto flex max-w-6xl flex-col gap-12 px-6 pt-6 text-white sm:px-10 md:flex-row md:items-center md:gap-14"
          initial="hidden"
          animate="visible"
          variants={heroVariants}
          transition={{ duration: 0.7 }}
        >
          <div className="flex-1">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-1 text-sm font-medium backdrop-blur">
              Communauté IA & Data francophone
            </span>
            <h1 className="mt-6 font-heading text-4xl leading-tight sm:text-5xl lg:text-6xl">
              Bowebtech reading group — ateliers mensuels dès janvier 2026
            </h1>
            <p className="mt-6 max-w-2xl text-lg text-brand-100/80">
              Participez à un cycle de 12 ateliers pour explorer l’intelligence artificielle,
              l’ingénierie des données et le machine learning aux côtés de mentors passionnés.
              Accessible, collaboratif et orienté projet.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href="#inscription"
                className="inline-flex items-center gap-3 rounded-full bg-brand-500 px-6 py-3 text-base font-semibold text-white shadow-brand transition hover:translate-y-0.5 hover:bg-brand-300"
              >
                Je réserve ma place
                <ArrowRight size={20} weight="bold" />
              </a>
              <a
                href="#programme"
                className="inline-flex items-center gap-2 rounded-full border border-white/20 px-5 py-3 text-base font-semibold text-white transition hover:border-white hover:bg-white/10"
              >
                Voir le programme
              </a>
            </div>
            <div className="mt-10 grid gap-6 sm:grid-cols-3">
              {featureHighlights.map(({ titre, description, icon: Icon }) => (
                <div key={titre} className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur">
                  <Icon size={28} weight="duotone" className="text-brand-300" />
                  <h3 className="mt-4 font-heading text-lg text-white">{titre}</h3>
                  <p className="mt-2 text-sm text-brand-100/80">{description}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="flex-1">
            <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/10 p-8 backdrop-blur">
              <div className="absolute -right-20 -top-20 h-56 w-56 rounded-full bg-brand-500/60 blur-3xl" />
              <div className="absolute -left-20 -bottom-12 h-60 w-60 rounded-full bg-brand-accent/40 blur-3xl" />
              <div className="relative space-y-4">
                <h2 className="font-heading text-2xl text-white">Prochain atelier</h2>
                <p className="text-sm uppercase tracking-[0.3em] text-brand-100/80">
                  {programme2026[0].mois}
                </p>
                <p className="text-xl font-semibold text-white">{programme2026[0].titre}</p>
                <p className="text-sm text-brand-100/80">{programme2026[0].description}</p>
                <a
                  href={programme2026[0].inscription}
                  className="inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-2 text-sm font-semibold text-white transition hover:bg-white/25"
                >
                  Je m’inscris
                  <ArrowRight size={18} weight="bold" />
                </a>
              </div>
              <div className="mt-8 rounded-2xl border border-white/10 bg-white/10 p-4">
                <p className="text-xs uppercase tracking-[0.25em] text-brand-100/60">À venir</p>
                <ul className="mt-3 space-y-2 text-sm text-brand-100/80">
                  {programme2026.slice(1, 4).map((session) => (
                    <li key={session.mois} className="flex items-center justify-between">
                      <span>{session.mois}</span>
                      <span className="font-medium text-white/90">{session.titre}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </motion.section>
      </div>

      <main className="mx-auto flex max-w-6xl flex-col gap-28 px-6 py-16 sm:px-10">
        <section
          id="programme"
          className="flex flex-col gap-12 rounded-4xl bg-surface-foreground/60 p-10 shadow-lg shadow-black/30 backdrop-blur"
        >
          <header>
            <span className="text-sm font-semibold uppercase tracking-[0.25em] text-brand-100/60">
              Programme 2026
            </span>
            <h2 className="mt-3 font-heading text-3xl text-white sm:text-4xl">
              12 rencontres pour passer de la théorie à la pratique
            </h2>
            <p className="mt-4 max-w-3xl text-base text-brand-100/80">
              Chaque mois, nous combinons lectures approfondies, retours d’expérience et phases
              hands-on pour transformer votre curiosité en projets concrets. Toutes les sessions
              sont animées en français et documentées.
            </p>
          </header>
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {programme2026.map((session) => (
              <div
                key={session.mois}
                className="group flex h-full flex-col justify-between rounded-3xl border border-white/5 bg-surface-foreground/80 p-6 transition hover:border-brand-500/40 hover:bg-surface-foreground/90"
              >
                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-brand-100/60">
                    {session.mois}
                  </p>
                  <h3 className="mt-3 font-heading text-xl text-white">{session.titre}</h3>
                  <p className="mt-3 text-sm text-brand-100/80">{session.description}</p>
                </div>
                <div className="mt-6 flex items-center justify-between text-sm text-brand-100/70">
                  <span>{session.format}</span>
                  <span className="font-medium text-white/90">{session.intervenant}</span>
                </div>
                <a
                  href={session.inscription}
                  className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-brand-300 transition group-hover:text-white"
                >
                  Réserver ma place
                  <ArrowRight size={16} weight="bold" />
                </a>
              </div>
            ))}
          </div>
        </section>

        <section
          id="intervenants"
          className="grid gap-12 rounded-4xl border border-white/5 bg-surface-foreground/60 p-10 backdrop-blur md:grid-cols-[1.2fr_1fr]"
        >
          <div>
            <span className="text-sm font-semibold uppercase tracking-[0.25em] text-brand-100/60">
              Mentors & invité·es
            </span>
            <h2 className="mt-3 font-heading text-3xl text-white sm:text-4xl">
              Un collectif de praticien·nes engagé·es pour transmettre
            </h2>
            <p className="mt-4 text-base text-brand-100/80">
              Les sessions Bowebtech sont animées par des spécialistes IA, data science et
              ingénierie. Le mentoring pair-à-pair et les retours d’expérience issus du terrain
              permettent de progresser rapidement et de consolider vos projets.
            </p>
            <div className="mt-10 grid gap-6 sm:grid-cols-3 md:grid-cols-2 lg:grid-cols-3">
              {differentiators.map(({ titre, detail, icon: Icon }) => (
                <div
                  key={titre}
                  className="rounded-3xl border border-brand-500/10 bg-surface-foreground/80 p-6"
                >
                  <Icon size={28} weight="duotone" className="text-brand-300" />
                  <h3 className="mt-3 font-heading text-lg text-white">{titre}</h3>
                  <p className="mt-2 text-sm text-brand-100/75">{detail}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="space-y-4">
            {speakers.map((speaker) => (
              <div
                key={speaker.nom}
                className="rounded-3xl border border-white/5 bg-surface-foreground/90 p-6 shadow-lg shadow-black/20"
              >
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-100/60">
                  {speaker.titre}
                </p>
                <h3 className="mt-2 font-heading text-xl text-white">{speaker.nom}</h3>
                <p className="mt-3 text-sm text-brand-100/75">{speaker.bio}</p>
              </div>
            ))}
          </div>
        </section>

        <section
          id="organisation"
          className="rounded-4xl border border-white/5 bg-surface-foreground/60 p-10 backdrop-blur"
        >
          <div className="max-w-3xl">
            <span className="text-sm font-semibold uppercase tracking-[0.25em] text-brand-100/60">
              Équipe organisatrice
            </span>
            <h2 className="mt-3 font-heading text-3xl text-white sm:text-4xl">
              Les personnes qui orchestrent Bowebtech au quotidien
            </h2>
            <p className="mt-4 text-base text-brand-100/80">
              Une équipe pluridisciplinaire assure la cohérence des contenus, la mise en relation
              avec les mentors et l’expérience communautaire. Contactez-nous pour proposer un
              atelier ou devenir partenaire.
            </p>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {organisateurs.map((personne) => (
              <div
                key={personne.nom}
                className="flex h-full flex-col justify-between rounded-3xl border border-white/5 bg-surface-foreground/70 p-6 shadow-lg shadow-black/20 transition hover:border-brand-500/40 hover:bg-surface-foreground/90"
              >
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-100/60">
                    {personne.role}
                  </p>
                  <h3 className="mt-2 font-heading text-xl text-white">{personne.nom}</h3>
                  <p className="mt-3 text-sm text-brand-100/75">{personne.description}</p>
                </div>
                {personne.linkedin && (
                  <a
                    href={personne.linkedin}
                    className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-brand-300 transition hover:text-white"
                  >
                    LinkedIn
                    <ArrowRight size={16} weight="bold" />
                  </a>
                )}
              </div>
            ))}
          </div>
        </section>

        <section
          id="ressources"
          className="rounded-4xl border border-white/5 bg-surface-foreground/60 p-10 backdrop-blur"
        >
          <header className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <span className="text-sm font-semibold uppercase tracking-[0.25em] text-brand-100/60">
                Ressources Bowebtech
              </span>
              <h2 className="mt-3 font-heading text-3xl text-white sm:text-4xl">
                Approfondissez entre les rendez-vous
              </h2>
              <p className="mt-4 max-w-2xl text-base text-brand-100/80">
                Nous préparons des guides, playlists et outils pour que chaque membre puisse
                expérimenter avant, pendant et après les ateliers.
              </p>
            </div>
            <a
              href="https://github.com/bowebtech"
              className="inline-flex items-center gap-2 rounded-full border border-white/15 px-5 py-2 text-sm font-semibold text-white transition hover:border-white hover:bg-white/10"
            >
              Explorer sur GitHub
              <ArrowRight size={16} weight="bold" />
            </a>
          </header>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {resources.map((resource) => (
              <a
                key={resource.titre}
                href={resource.url}
                className="group flex h-full flex-col rounded-3xl border border-white/5 bg-surface-foreground/90 p-6 transition hover:border-brand-500/40 hover:bg-surface-foreground/95"
              >
                <span className="text-xs font-semibold uppercase tracking-[0.25em] text-brand-100/60">
                  {resource.type}
                </span>
                <h3 className="mt-3 font-heading text-xl text-white">{resource.titre}</h3>
                <p className="mt-3 text-sm text-brand-100/75">{resource.description}</p>
                <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-brand-300 transition group-hover:text-white">
                  Ouvrir la ressource
                  <ArrowRight size={16} weight="bold" />
                </span>
              </a>
            ))}
          </div>
        </section>

        <section id="faq" className="rounded-4xl border border-white/5 bg-surface-foreground/60 p-10">
          <div className="max-w-3xl">
            <span className="text-sm font-semibold uppercase tracking-[0.25em] text-brand-100/60">
              Questions fréquentes
            </span>
            <h2 className="mt-3 font-heading text-3xl text-white sm:text-4xl">
              Tout savoir avant de nous rejoindre
            </h2>
          </div>
          <div className="mt-8 divide-y divide-white/10">
            {faqItems.map((faq) => (
              <details
                key={faq.question}
                className="group py-5 text-brand-100/80"
                aria-label={faq.question}
              >
                <summary className="cursor-pointer list-none text-lg font-semibold text-white transition group-open:text-brand-300">
                  {faq.question}
                </summary>
                <p className="mt-3 max-w-3xl text-sm leading-relaxed text-brand-100/75">
                  {faq.reponse}
                </p>
              </details>
            ))}
          </div>
        </section>

        <section
          id="inscription"
          className="relative overflow-hidden rounded-4xl border border-white/5 bg-gradient-to-r from-brand-700 to-brand-500 p-10 text-white"
        >
          <div className="absolute -left-24 top-10 h-48 w-48 rounded-full bg-white/15 blur-3xl" />
          <div className="absolute -right-24 bottom-0 h-56 w-56 rounded-full bg-brand-accent/40 blur-3xl" />
          <div className="relative flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-white/70">
                Rejoindre Bowebtech
              </p>
              <h2 className="mt-3 font-heading text-3xl sm:text-4xl">
                Inscrivez-vous pour recevoir les invitations mensuelles
              </h2>
              <p className="mt-3 max-w-2xl text-sm text-white/80">
                Laissez-nous votre e-mail et nous vous enverrons les détails logistiques, les
                ressources préparatoires et les replays.
              </p>
            </div>
            <form
              className="flex w-full max-w-lg flex-col gap-3 rounded-3xl bg-white/10 p-4 backdrop-blur md:flex-row md:items-center"
              action={INSCRIPTION_FORM_URL}
              method="POST"
            >
              <label className="sr-only" htmlFor="email">
                Adresse e-mail
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                placeholder="Votre e-mail étudiant ou professionnel"
                className="h-12 flex-1 rounded-full border border-white/30 bg-white/10 px-4 text-sm text-white placeholder:text-white/60 focus:border-white focus:outline-none focus:ring-2 focus:ring-white/40"
              />
              <button
                type="submit"
                className="h-12 rounded-full bg-white px-6 text-sm font-semibold text-brand-700 transition hover:bg-brand-100 hover:text-brand-900"
              >
                Recevoir les invitations
              </button>
            </form>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/10 bg-surface-foreground py-10 text-sm text-brand-100/70">
        <div className="mx-auto flex max-w-6xl flex-col gap-4 px-6 sm:flex-row sm:items-center sm:justify-between sm:px-10">
          <p>© {new Date().getFullYear()} Bowebtech. Communauté francophone IA & Data.</p>
          <div className="flex flex-wrap items-center gap-4">
            <a className="transition hover:text-white" href="mailto:hello@bowebtech.dev">
              hello@bowebtech.dev
            </a>
            <a className="transition hover:text-white" href="https://github.com/bowebtech">
              GitHub
            </a>
            <a className="transition hover:text-white" href="https://linkedin.com/company/bowebtech">
              LinkedIn
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
