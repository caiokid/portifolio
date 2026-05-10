import { ExternalLink } from 'lucide-react'
import { GithubIcon } from './Icons'
import barberFrontImg from '../assets/barber-front.png'
import barberBackImg from '../assets/barber-back.png'
import Admin from '../assets/admin.png'


const projects = [
  {
    title: 'barber-front – Front-end',
    desc: 'Front-end que consome diretamente a API do barber-back. Desenvolvido com React e TypeScript, entregando uma interface moderna e tipada para o sistema de barbearia.',
    tags: ['React', 'TypeScript', 'CSS Modules'],
    github: 'https://github.com/caiokid/barber-front',
    site: 'https://barber-front-gamma.vercel.app',
    featured: true,
    image: barberFrontImg,
  },
  {
    title: 'barber-back – API',
    desc: 'API REST construída com Node.js, seguindo arquitetura organizada em Controllers, Models e Routes. Implementa autenticação com JWT, upload de arquivos com Multer e persistência de dados com MongoDB. Um back-end sólido, escalável e bem estruturado.',
    tags: ['Node.js', 'JWT', 'MongoDB', 'Multer'],
    github: 'https://github.com/caiokid/barber-back',
    featured: false,
    image: barberBackImg,
  },
  {
    title: 'PHP Admin Barbearia',
    desc: 'Sistema de administração para barbearia desenvolvido em PHP sem frameworks, com interface web e integração com banco de dados MySQL.',
    tags: ['PHP', 'MySQL', 'HTML', 'CSS'],
    github: 'https://github.com/caiokid/primeiro_projeto_php_admin_barbearia',
    featured: false,
    image: Admin,
  },
]

function ProjectPreview({ image, title }: { image: string | null; title: string }) {
  if (image) {
    return <img src={image} alt={title} className="w-full h-full object-cover" />
  }
  return (
    <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-violet-950/60 via-gray-900 to-gray-950">
      <span className="font-mono text-violet-400/50 text-sm select-none">{`<${title} />`}</span>
    </div>
  )
}

export default function Projects() {
  const featured = projects.find((p) => p.featured)
  const others = projects.filter((p) => !p.featured)

  return (
    <section id="projetos" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <p className="font-mono text-violet-600 dark:text-violet-400 text-sm uppercase tracking-widest mb-3">
            O que eu construí
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white">
            Projetos
          </h2>
        </div>

        {featured && (
          <div className="mb-8 rounded-2xl border border-violet-200 dark:border-violet-900 overflow-hidden hover:border-violet-400 dark:hover:border-violet-700 transition-all bg-white dark:bg-gray-900/50">
            <div className="grid md:grid-cols-2">
              <div className="h-56 md:h-auto min-h-[240px] border-b md:border-b-0 md:border-r border-violet-100 dark:border-violet-900/60">
                <ProjectPreview image={featured.image} title={featured.title} />
              </div>
              <div className="p-8 flex flex-col justify-center">
                <span className="inline-block text-xs font-mono text-violet-500 bg-violet-100 dark:bg-violet-900/40 px-2 py-0.5 rounded-full mb-4 w-fit">
                  destaque
                </span>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                  {featured.title}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed mb-5">
                  {featured.desc}
                </p>
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {featured.tags.map((t) => (
                    <span key={t} className="text-xs px-2 py-0.5 rounded-full bg-violet-100 dark:bg-violet-900/40 text-violet-700 dark:text-violet-300 font-mono">
                      {t}
                    </span>
                  ))}
                </div>
                <div className="flex gap-3">
                  <a
                    href={featured.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 px-4 py-2 rounded-full bg-violet-600 hover:bg-violet-700 text-white text-xs font-medium transition-all hover:scale-105 shadow-md shadow-violet-500/20"
                  >
                    <GithubIcon size={13} /> Código
                  </a>
                  {featured.site && (
                    <a
                      href={featured.site}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 px-4 py-2 rounded-full border border-violet-300 dark:border-violet-700 text-violet-700 dark:text-violet-300 hover:bg-violet-50 dark:hover:bg-violet-900/20 text-xs font-medium transition-all"
                    >
                      <ExternalLink href='' size={13} /> Ver online
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}

        <div className="grid sm:grid-cols-2 gap-5">
          {others.map((p) => (
            <div
              key={p.title}
              className="rounded-2xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900/50 hover:border-violet-300 dark:hover:border-violet-800 hover:shadow-lg hover:shadow-violet-500/5 transition-all overflow-hidden flex flex-col"
            >
              <div className="h-40 border-b border-gray-100 dark:border-gray-800">
                <ProjectPreview image={p.image} title={p.title} />
              </div>
              <div className="p-6 flex flex-col flex-1">
                <div className="flex flex-wrap gap-1.5 mb-3">
                  {p.tags.map((t) => (
                    <span key={t} className="text-xs px-2 py-0.5 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-500 dark:text-gray-400 font-mono">
                      {t}
                    </span>
                  ))}
                </div>
                <h3 className="font-bold text-gray-900 dark:text-white mb-2">{p.title}</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed flex-1">
                  {p.desc}
                </p>
                <div className="flex gap-2 mt-4 pt-4 border-t border-gray-100 dark:border-gray-800">
                  <a
                    href={p.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-violet-600 hover:bg-violet-700 text-white text-xs font-medium transition-all hover:scale-105 shadow-sm shadow-violet-500/20"
                  >
                    <GithubIcon size={13} /> Código
                  </a>
                  {p.site && (
                    <a
                      href={p.site}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-violet-300 dark:border-violet-700 text-violet-700 dark:text-violet-300 hover:bg-violet-50 dark:hover:bg-violet-900/20 text-xs font-medium transition-all hover:scale-105"
                    >
                      <ExternalLink size={13} /> Ver online
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
