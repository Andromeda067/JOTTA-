import Link from "next/link"

export function Footer() {
  return (
    <footer className="bg-black border-t border-neutral-800">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Sobre */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4">Sobre Nós</h3>
            <p className="text-neutral-400 text-sm leading-relaxed">
              Autoescolas de excelência com mais de 18 anos de experiência formando condutores responsáveis e
              preparados.
            </p>
          </div>

          {/* Unidades */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4">Unidades</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/unidade/kapital" className="text-neutral-400 hover:text-primary transition-colors text-sm">
                  Kapital
                </Link>
              </li>
              <li>
                <Link
                  href="/unidade/Felicidade"
                  className="text-neutral-400 hover:text-primary transition-colors text-sm"
                >
                  Felicidade
                </Link>
              </li>
              <li>
                <Link
                  href="/unidade/jotta"
                  className="text-neutral-400 hover:text-primary transition-colors text-sm"
                >
                  Jotta
                </Link>
              </li>
              <li>
                <Link
                  href="/unidade/jotta_Nava_Lima"
                  className="text-neutral-400 hover:text-primary transition-colors text-sm"
                >
                  Jotta (novs lima)
                </Link>
              </li>
            </ul>
          </div>

          {/* Contato */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4">Contato</h3>
            <ul className="space-y-2 text-neutral-400 text-sm">
              <li>kapitalmatrizgerencia@gmail.com</li>
              <li>Seg - Sex: 08:00 às 18:00</li>
              <li>Sáb: 08:00 às 12:00</li>
            </ul>
          </div>

          {/* Desenvolvimento */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4">Desenvolvimento</h3>
            <Link
              href="https://gxd.com.br"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:text-red-400 transition-colors font-semibold text-sm"
            >
              GXD
            </Link>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-neutral-800 text-center text-neutral-500 text-sm">
          <p>&copy; {new Date().getFullYear()} Grupo Jotta. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  )
}
