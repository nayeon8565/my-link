export default function Home() {
  return (
    <div className="min-h-screen font-mono selection:bg-black selection:text-white dark:selection:bg-white dark:selection:text-black">
      <div className="max-w-5xl mx-auto px-4 py-12 md:py-24 space-y-16">
        
        {/* Header / Hero Section */}
        <header className="border-4 border-black dark:border-white p-8 md:p-16 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] dark:shadow-[8px_8px_0px_0px_rgba(255,255,255,1)] bg-white dark:bg-black">
          <h1 className="text-5xl md:text-8xl font-black uppercase tracking-tighter mb-6 break-words">
            선인장
          </h1>
          <p className="text-xl md:text-3xl font-bold border-b-4 border-black dark:border-white pb-6">
            &quot;그것은 마치 완만한 자살 행위 같다.&quot;
          </p>
          <div className="mt-8 flex gap-4">
            <span className="inline-block border-2 border-black dark:border-white px-4 py-1 text-sm md:text-base font-bold uppercase uppercase tracking-wider">
              Web Developer
            </span>
            <span className="inline-block border-2 border-black dark:border-white px-4 py-1 text-sm md:text-base font-bold uppercase uppercase tracking-wider">
              Seoul, KR
            </span>
          </div>
        </header>

        {/* Content Section (Grid) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          
          {/* About Section */}
          <section className="flex flex-col gap-6">
            <h2 className="text-3xl font-black uppercase border-b-4 border-black dark:border-white pb-2 inline-block w-fit">
              About
            </h2>
            <div className="border-4 border-black dark:border-white p-6 md:p-8 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] dark:shadow-[6px_6px_0px_0px_rgba(255,255,255,1)] bg-white dark:bg-black">
              <p className="text-lg leading-relaxed font-bold">
                어떤 문제의 근본적인 원인을 탐구하고, 그 본질을 코드로써 재구성하는 일에 집중합니다. 불필요한 장식과 허례허식을 배제한 직관적이고 구조적인 설계 방향을 지향합니다.
              </p>
            </div>
          </section>

          {/* Links Section */}
          <section className="flex flex-col gap-6">
            <h2 className="text-3xl font-black uppercase border-b-4 border-black dark:border-white pb-2 inline-block w-fit">
              Links
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <a href="#" className="block border-4 border-black dark:border-white p-4 text-center font-bold uppercase text-xl md:text-2xl hover:-translate-y-1 hover:translate-x-1 hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] dark:hover:shadow-[4px_4px_0px_0px_rgba(255,255,255,1)] transition-all shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] dark:shadow-[8px_8px_0px_0px_rgba(255,255,255,1)] bg-white dark:bg-black">
                GitHub
              </a>
              <a href="#" className="block border-4 border-black dark:border-white p-4 text-center font-bold uppercase text-xl md:text-2xl hover:-translate-y-1 hover:translate-x-1 hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] dark:hover:shadow-[4px_4px_0px_0px_rgba(255,255,255,1)] transition-all shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] dark:shadow-[8px_8px_0px_0px_rgba(255,255,255,1)] bg-white dark:bg-black">
                Blog
              </a>
              <a href="#" className="block border-4 border-black dark:border-white p-4 text-center font-bold uppercase text-xl md:text-2xl hover:-translate-y-1 hover:translate-x-1 hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] dark:hover:shadow-[4px_4px_0px_0px_rgba(255,255,255,1)] transition-all shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] dark:shadow-[8px_8px_0px_0px_rgba(255,255,255,1)] bg-white dark:bg-black">
                LinkedIn
              </a>
              <a href="#" className="block border-4 border-black dark:border-white p-4 text-center font-bold uppercase text-xl md:text-2xl hover:-translate-y-1 hover:translate-x-1 hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] dark:hover:shadow-[4px_4px_0px_0px_rgba(255,255,255,1)] transition-all shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] dark:shadow-[8px_8px_0px_0px_rgba(255,255,255,1)] bg-white dark:bg-black">
                Email
              </a>
            </div>
          </section>
        </div>

        {/* Footer */}
        <footer className="border-t-4 border-black dark:border-white pt-8 mt-16 text-center font-bold">
          <p className="uppercase">© {new Date().getFullYear()} 선인장. ALL RIGHTS RESERVED.</p>
        </footer>

      </div>
    </div>
  );
}
