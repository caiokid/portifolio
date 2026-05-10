import { useState, useEffect } from 'react'
import { Menu, X, Moon, Sun } from 'lucide-react'

const links = [
  { label: 'Sobre', href: '#sobre' },
  { label: 'Habilidades', href: '#habilidades' },
  { label: 'Projetos', href: '#projetos' },
  { label: 'Contato', href: '#contato' },
]

interface NavbarProps {
  dark: boolean
  toggleDark: () => void
}

export default function Navbar({ dark, toggleDark }: NavbarProps) {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/80 dark:bg-gray-950/80 backdrop-blur-md shadow-sm border-b border-gray-200/60 dark:border-gray-800/60'
          : 'bg-transparent'
      }`}
    >
      <nav className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
        <a
          href="#"
          className="font-mono text-violet-600 dark:text-violet-400 font-semibold text-lg tracking-tight hover:opacity-80 transition-opacity"
        >
          &lt;CVF /&gt;
        </a>

        <ul className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-violet-600 dark:hover:text-violet-400 transition-colors"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <button
            onClick={toggleDark}
            aria-label="Alternar tema"
            className="p-2 rounded-lg text-gray-500 hover:text-violet-600 dark:hover:text-violet-400 hover:bg-gray-100 dark:hover:bg-gray-800 transition-all"
          >
            {dark ? <Sun size={18} /> : <Moon size={18} />}
          </button>

          <button
            className="md:hidden p-2 rounded-lg text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-800 transition-all"
            onClick={() => setOpen(!open)}
            aria-label="Menu"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="md:hidden bg-white dark:bg-gray-950 border-b border-gray-200 dark:border-gray-800 px-6 py-4 flex flex-col gap-4">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-violet-600 dark:hover:text-violet-400 transition-colors"
            >
              {l.label}
            </a>
          ))}
        </div>
      )}
    </header>
  )
}
