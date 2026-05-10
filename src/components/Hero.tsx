import { useEffect, useState } from 'react'
import { ArrowDown, Mail } from 'lucide-react'
import { GithubIcon, LinkedinIcon } from './Icons'

const roles = ['Desenvolvedor Full-stack', 'Desenvolvedor React', 'Desenvolvedor TypeScript','Desenvolvedor Web', 'Desenvolvedor PHP']

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0)
  const [displayed, setDisplayed] = useState('')
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const current = roles[roleIndex]
    let timeout: ReturnType<typeof setTimeout>

    if (!deleting && displayed.length < current.length) {
      timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 80)
    } else if (!deleting && displayed.length === current.length) {
      timeout = setTimeout(() => setDeleting(true), 2000)
    } else if (deleting && displayed.length > 0) {
      timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 40)
    } else if (deleting && displayed.length === 0) {
      setDeleting(false)
      setRoleIndex((i) => (i + 1) % roles.length)
    }

    return () => clearTimeout(timeout)
  }, [displayed, deleting, roleIndex])

  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-6 pt-16 relative overflow-hidden">
      {/* background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-violet-600/10 dark:bg-violet-600/20 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-3xl w-full text-center animate-fade-in">
        <p className="font-mono text-violet-600 dark:text-violet-400 text-sm mb-4 tracking-widest uppercase">
          Olá, me chamo
        </p>

        <h1 className="text-5xl sm:text-7xl font-bold text-gray-900 dark:text-white mb-4 leading-tight tracking-tight">
          Caio
          <br />
          <span className="text-violet-600 dark:text-violet-400">Franca</span>
        </h1>

        <div className="h-10 flex items-center justify-center mb-8">
          <span className="text-xl sm:text-2xl text-gray-500 dark:text-gray-400 font-light">
            {displayed}
            <span className="animate-blink border-r-2 border-violet-500 ml-0.5">&nbsp;</span>
          </span>
        </div>

        <p className="text-gray-500 dark:text-gray-400 max-w-xl mx-auto mb-10 leading-relaxed">
          Apaixonado por criar experiências digitais bonitas e funcionais. Transformo ideias em
          código limpo e interfaces incríveis.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-14">
          <a
            href="#projetos"
            className="px-8 py-3 bg-violet-600 hover:bg-violet-700 text-white font-medium rounded-full transition-all hover:scale-105 shadow-lg shadow-violet-600/30"
          >
            Ver projetos
          </a>
          <a
            href="#contato"
            className="px-8 py-3 border border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300 hover:border-violet-500 dark:hover:border-violet-500 hover:text-violet-600 dark:hover:text-violet-400 font-medium rounded-full transition-all hover:scale-105"
          >
            Fale comigo
          </a>
        </div>

        <div className="flex items-center justify-center gap-5">
          <a
            href="https://github.com/caiokid"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="p-2 text-gray-500 hover:text-violet-600 dark:hover:text-violet-400 transition-colors hover:scale-110 transform"
          >
            <GithubIcon size={22} />
          </a>
          <a
            href="https://www.linkedin.com/in/caio-franca-9b71882b9"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="p-2 text-gray-500 hover:text-violet-600 dark:hover:text-violet-400 transition-colors hover:scale-110 transform"
          >
            <LinkedinIcon size={22} />
          </a>
          <a
            href="https://mail.google.com/mail/?view=cm&to=caioviniciusfranca@gmail.com&su=Contato&body=Olá Caio!"
            target="_blank"
            rel="noopener noreferrer" 
            aria-label="Email"
            className="p-2 text-gray-500 hover:text-violet-600 dark:hover:text-violet-400 transition-colors hover:scale-110 transform"
          >
            <Mail size={22} />
          </a>
        </div>
      </div>

      <a
        href="#sobre"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-gray-400 hover:text-violet-500 transition-colors animate-bounce"
        aria-label="Rolar para baixo"
      >
        <ArrowDown size={22} />
      </a>
    </section>
  )
}
