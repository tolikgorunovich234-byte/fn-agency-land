import React from "react";

export default function App() {
  return (
    <div className="min-h-screen bg-white text-black">
      <header className="border-b">
        <div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="h-6 w-6 rounded bg-black" />
            <span className="text-sm font-semibold tracking-wider uppercase">FN AGENCY</span>
          </div>
          <a
            href="http://t.me/FMARKETING_studio"
            target="_blank"
            rel="noreferrer"
            className="rounded-full border px-4 py-2 text-xs font-semibold uppercase tracking-wider hover:bg-black hover:text-white"
          >
            Telegram
          </a>
        </div>
      </header>

      <main>
        <section className="mx-auto max-w-6xl px-4 py-16">
          <h1 className="text-4xl sm:text-6xl font-black leading-[1.05] tracking-tight">
            НЕСТАНДАРТНЫЙ МАРКЕТИНГ<br className="hidden sm:block" /> КОТОРЫЙ ВЫЗЫВАЕТ ПРИВЫКАНИЕ
          </h1>
          <p className="mt-6 max-w-2xl text-base opacity-80">
            Запускаем связки и креативы, которые реально выделяют из ленты. Без скучной корпоративщины.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <a
              href="http://t.me/FMARKETING_studio"
              target="_blank"
              rel="noreferrer"
              className="rounded-full bg-black px-6 py-3 text-sm font-semibold uppercase tracking-wider text-white text-center hover:opacity-90"
            >
              В Telegram
            </a>
            <a
              href="mailto:hello@fn.agency"
              className="rounded-full border px-6 py-3 text-sm font-semibold uppercase tracking-wider text-center hover:bg-black hover:text-white"
            >
              Написать на почту
            </a>
          </div>

          <div className="mt-4 text-xs uppercase tracking-wider opacity-60">
            Работает в любом канале: Meta, TikTok, YouTube, VK, Яндекс.
          </div>
        </section>
      </main>

      <footer className="border-t">
        <div className="mx-auto max-w-6xl px-4 py-8 text-xs opacity-70">
          © FN Agency • Связь:{" "}
          <a href="http://t.me/FMARKETING_studio" className="underline">
            @FMARKETING_studio
          </a>
        </div>
      </footer>
    </div>
  );
}
