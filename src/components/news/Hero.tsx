"use client";

export default function NewsHero() {
  return (
    <section className="relative w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-background/10 via-background/50 to-background/80">
      <div className="absolute inset-0 bg-grid-white/10 bg-[size:60px_60px] opacity-20" />
      <div className="container relative px-4 md:px-6">
        <div className="flex flex-col items-center space-y-4 text-center">
          <div className="space-y-2">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none bg-clip-text text-transparent bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 dark:from-white dark:via-gray-100 dark:to-white">
              Real Estate Market News
            </h1>
            <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
              Stay informed with the latest updates in build-to-rent and commercial real estate across the United States.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}