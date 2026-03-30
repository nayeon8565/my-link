export default function Home() {
  return (
    <div className="min-h-screen font-sans selection:bg-black/10 selection:text-black dark:selection:bg-white/20 dark:selection:text-white">
      <div className="max-w-5xl mx-auto px-4 py-12 md:py-24 space-y-12">
        
        {/* Profile (Header) Panel */}
        <div className="relative z-0 rounded-[2.5rem]">
          <div className="mesh-shadow" />
          <header className="relative z-10 overflow-hidden rounded-[2.5rem] bg-white/80 dark:bg-black/70 backdrop-blur-3xl border border-white/80 dark:border-white/20 p-10 md:p-16 transition-all duration-500">
            {/* Inner glow */}
            <div className="absolute inset-0 bg-gradient-to-tr from-white/20 to-transparent dark:from-white/5 pointer-events-none rounded-[2.5rem]" />
            <div className="relative z-10 flex flex-col md:flex-row md:items-end justify-between gap-8">
              <div>
                <h1 className="text-5xl md:text-8xl font-extrabold tracking-tight mb-4 bg-clip-text text-transparent bg-gradient-to-br from-gray-900 to-gray-600 dark:from-white dark:to-gray-400">선인장</h1>
                <p className="text-xl md:text-3xl font-medium tracking-wide text-gray-800 dark:text-gray-200 opacity-90">&quot;그것은 마치 완만한 자살 행위 같다.&quot;</p>
              </div>
              <div className="flex gap-3">
                <span className="inline-block bg-white/50 dark:bg-white/10 backdrop-blur-md border border-white/50 dark:border-white/10 px-5 py-2 rounded-full text-sm font-semibold tracking-wide shadow-sm">Web Developer</span>
                <span className="inline-block bg-white/50 dark:bg-white/10 backdrop-blur-md border border-white/50 dark:border-white/10 px-5 py-2 rounded-full text-sm font-semibold tracking-wide shadow-sm">Seoul, KR</span>
              </div>
            </div>
          </header>
        </div>

        {/* Content Section (Grid) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          
          {/* About Section */}
          <section className="flex flex-col gap-4">
            <h2 className="text-2xl font-bold tracking-tight px-2 text-gray-800 dark:text-gray-200">About</h2>
            <div className="relative z-0 h-full rounded-[2.5rem]">
              <div className="mesh-shadow" />
              <div className="relative z-10 h-full rounded-[2.5rem] bg-white/80 dark:bg-black/70 backdrop-blur-3xl border border-white/80 dark:border-white/20 p-10 transition-all duration-500">
                <p className="text-lg leading-relaxed font-medium text-gray-800 dark:text-gray-200 opacity-90">
                  어떤 문제의 근본적인 원인을 탐구하고, 그 본질을 코드로써 재구성하는 일에 집중합니다. 투명하고 매끄러운 사용자 경험을 지향하며, 세밀한 디테일이 완성도를 만든다고 믿습니다.
                </p>
              </div>
            </div>
          </section>

          {/* Links Section */}
          <section className="flex flex-col gap-4">
            <h2 className="text-2xl font-bold tracking-tight px-2 text-gray-800 dark:text-gray-200">Links</h2>
            <div className="relative z-0 h-full rounded-[2.5rem]">
              <div className="mesh-shadow" />
              <div className="relative z-10 h-full rounded-[2.5rem] bg-white/80 dark:bg-black/70 backdrop-blur-3xl border border-white/80 dark:border-white/20 p-10 transition-all duration-500 flex flex-col justify-center">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    { name: 'GitHub', href: '#' },
                    { name: 'Blog', href: '#' },
                    { name: 'LinkedIn', href: '#' },
                    { name: 'Email', href: '#' },
                  ].map((link) => (
                    <a 
                      key={link.name} 
                      href={link.href} 
                      className="group relative flex items-center justify-center rounded-2xl bg-white/50 dark:bg-white/5 backdrop-blur-md border border-white/60 dark:border-white/10 p-4 hover:bg-white/90 dark:hover:bg-white/20 transition-all duration-300 shadow-sm hover:shadow-md"
                    >
                      <span className="font-semibold tracking-wide text-lg text-gray-800 dark:text-gray-200 group-hover:text-black dark:group-hover:text-white transition-colors">
                        {link.name}
                      </span>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </section>

        </div>

        {/* Footer */}
        <footer className="mt-16 text-center">
          <p className="text-sm font-medium tracking-wider text-gray-700 dark:text-gray-400 opacity-70">
            © {new Date().getFullYear()} 선인장. ALL RIGHTS RESERVED.
          </p>
        </footer>

      </div>
    </div>
  );
}gray-700 dark:text-gray-400 opacity-70">
            © {new Date().getFullYear()} 선인장. ALL RIGHTS RESERVED.
          </p>
        </footer>

      </div>
    </div>
  );
}
