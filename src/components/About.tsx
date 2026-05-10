import Image from '../assets/foto_trabalho.png'



import {
  SiTailwindcss,
  SiTypescript,
  SiPostgresql,
  SiNodedotjs,
  SiReact,
  SiMysql,
  SiPhp,
} from 'react-icons/si'
import type { IconType } from 'react-icons'

const techStack: { name: string; color: string; icon: IconType; iconColor: string }[] = [
  { name: 'Tailwind',    color: 'bg-sky-100 dark:bg-sky-900/40 text-sky-700 dark:text-sky-300',         icon: SiTailwindcss, iconColor: '#38bdf8' },
  { name: 'TypeScript',  color: 'bg-blue-100 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300',     icon: SiTypescript,  iconColor: '#3b82f6' },
  { name: 'PostgreSQL',  color: 'bg-indigo-100 dark:bg-indigo-900/40 text-indigo-700 dark:text-indigo-300', icon: SiPostgresql, iconColor: '#6366f1' },
  { name: 'Node.js',     color: 'bg-green-100 dark:bg-green-900/40 text-green-700 dark:text-green-300', icon: SiNodedotjs,   iconColor: '#22c55e' },
  { name: 'React',       color: 'bg-violet-100 dark:bg-violet-900/40 text-violet-700 dark:text-violet-300', icon: SiReact,  iconColor: '#a78bfa' },
  { name: 'MySQL',       color: 'bg-orange-100 dark:bg-orange-900/40 text-orange-700 dark:text-orange-300', icon: SiMysql,  iconColor: '#f97316' },
  { name: 'PHP',         color: 'bg-purple-100 dark:bg-purple-900/40 text-purple-700 dark:text-purple-300', icon: SiPhp,    iconColor: '#a855f7' },
]

export default function About() {
  return (
    <section id="sobre" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="mb-12">
          <p className="font-mono text-violet-600 dark:text-violet-400 text-sm uppercase tracking-widest mb-3">
            Quem sou eu
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white">
            Sobre mim
          </h2>
        </div>

        <div className="flex flex-col md:flex-row gap-8 items-start">
          <div className="flex-shrink-0 mx-auto md:mx-0">
            {/* Substitua o href pelo link que desejar */}
            <a href="#" className="block group">
              <div className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-4 border-violet-200 dark:border-violet-800 shadow-lg shadow-violet-500/20 transition-all duration-300 group-hover:scale-105 group-hover:border-violet-400 dark:group-hover:border-violet-500 group-hover:shadow-violet-500/40">
                <img
                  src={Image}
                  alt="Caio Franca"
                  className="w-full h-full object-cover"
                />
              </div>
            </a>
          </div>

          <div className="flex-1 p-7 rounded-2xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900/50">
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
Movido pela curiosidade de entender como as coisas funcionam por baixo dos panos. Curso Ciência da Computação e vivo explorando tecnologia na prática — de TypeScript e Node.js a React, PostgreSQL, MySQL e Tailwind. Cada projeto é uma desculpa pra aprender algo novo            </p>

            <div className="flex flex-wrap gap-2">
              {techStack.map((tech) => {
                const Icon = tech.icon
                return (
                  <span
                    key={tech.name}
                    className={`flex items-center gap-1.5 text-xs px-3 py-1.5 rounded-full font-mono font-medium ${tech.color}`}
                  >
                    <Icon size={13} color={tech.iconColor} />
                    {tech.name}
                  </span>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
