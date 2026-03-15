export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-white dark:bg-black p-8 font-sans">
      <main className="flex flex-col items-center text-center gap-4">
        <h1 className="text-4xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100">
          선인장
        </h1>
        <p className="text-lg text-zinc-500 dark:text-zinc-400 italic">
          &quot;그것은 마치 완만한 자살 행위 같다.&quot;
        </p>
      </main>
    </div>
  );
}
