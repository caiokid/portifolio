import { Mail, Send } from 'lucide-react'
import { GithubIcon, LinkedinIcon } from './Icons'

const socials = [
  {
    icon: <GithubIcon size={20} />,
    label: 'GitHub',
    href: 'https://github.com/caiokid',
    handle: '@caiofranca',
  },
  {
    icon: <LinkedinIcon size={20} />,
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/caio-franca-9b71882b9/?skipRedirect=true',
    handle: 'Caio Franca',
  },
  {
    icon: <Mail size={20} />,
    label: 'Email',
    href: 'mailto:caioviniciusfranca@gmail.com',
    handle: 'caioviniciusfranca@gmail.com',
  },
]

export default function Contact() {
  return (
    <section id="contato" className="py-24 px-6 bg-gray-50 dark:bg-gray-900/40">
      <div className="max-w-3xl mx-auto text-center">
        <p className="font-mono text-violet-600 dark:text-violet-400 text-sm uppercase tracking-widest mb-3">
          Vamos conversar
        </p>
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-5">
          Entre em contato
        </h2>
        <p className="text-gray-500 dark:text-gray-400 leading-relaxed mb-12 max-w-lg mx-auto">
          Estou aberto a novas oportunidades, freelas ou apenas para bater um papo sobre tecnologia. Me manda uma mensagem!
        </p>

        <a
          href="https://mail.google.com/mail/?view=cm&to=caioviniciusfranca@gmail.com&su=Contato&body=Olá Caio!"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-8 py-3.5 bg-violet-600 hover:bg-violet-700 text-white font-medium rounded-full transition-all hover:scale-105 shadow-lg shadow-violet-600/30 mb-14"
        >
          <Send size={18} />
          Mandar email
        </a>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          {socials.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target={s.href.startsWith('mailto') ? undefined : '_blank'}
              rel="noopener noreferrer"
              className="flex items-center gap-3 px-5 py-3 rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 hover:border-violet-400 dark:hover:border-violet-700 hover:text-violet-600 dark:hover:text-violet-400 text-gray-600 dark:text-gray-400 transition-all hover:scale-105 w-full sm:w-auto"
            >
              <span className="text-violet-600 dark:text-violet-400">{s.icon}</span>
              <div className="text-left">
                <div className="text-xs text-gray-400 dark:text-gray-500 leading-none mb-0.5">{s.label}</div>
                <div className="text-sm font-medium">{s.handle}</div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
