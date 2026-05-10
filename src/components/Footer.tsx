export default function Footer() {
  return (
    <footer className="py-8 px-6 border-t border-gray-200 dark:border-gray-800 text-center">
      <p className="text-sm text-gray-400 dark:text-gray-500">
        Feito com{' '}
        <span className="text-violet-500">♥</span>{' '}
        por{' '}
        <span className="text-gray-600 dark:text-gray-400 font-medium">Caio Vinicius Franca</span>
        {' '}· {new Date().getFullYear()}
      </p>
    </footer>
  )
}
