import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// === Contacts ===
const TELEGRAM_URL = "https://t.me/FNMARKETING_studio";
const EMAIL = "fntraffagency@gmail.com";

export default function App() {
  const [quizOpen, setQuizOpen] = useState(false);
  const [cowardOpen, setCowardOpen] = useState(false);
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState({ budget: "", speed: "", spice: "" });

  const steps = [
    { key: "budget", q: "Какой дневной бюджет на тесты комфортен?", options: ["$50–100", "$150–200", "$300+"] },
    { key: "speed", q: "Через сколько дней нужны первые заявки?", options: ["3–5 дней", "7 дней", "14 дней"] },
    { key: "spice", q: "Насколько дерзким может быть тон?", options: ["Лайт", "Средне", "Хард"] },
  ];

  const startQuiz = () => {
    setAnswers({ budget: "", speed: "", spice: "" });
    setStep(0);
    setQuizOpen(true);
  };

  const openCoward = () => setCowardOpen(true);
  const closeModals = () => {
    setQuizOpen(false);
    setCowardOpen(false);
  };

  return (
    <div className="min-h-screen w-full bg-white text-black">
      {/* ========== HEADER ========== */}
      <header className="sticky top-0 z-40 backdrop-blur bg-white/90 border-b">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
          <div className="flex items-center gap-3">
            <div className="h-6 w-6 rounded bg-black" />
            <span className="text-sm font-semibold tracking-wider uppercase">FN AGENCY</span>
          </div>
          <nav className="hidden gap-6 md:flex text-sm">
            <a href="#seven" className="opacity-80 hover:text-black">7 дней</a>
            <a href="#process" className="opacity-80 hover:text-black">Процесс</a>
            <a href="#impact" className="opacity-80 hover:text-black">Нестандарт</a>
            <a href="#cases" className="opacity-80 hover:text-black">Кейсы</a>
            <a href="#faq" className="opacity-80 hover:text-black">FAQ</a>
          </nav>
          <div className="flex items-center gap-3">
            <a href="#cta" className="rounded-full border border-black px-4 py-2 text-xs font-semibold uppercase tracking-wider hover:bg-black hover:text-white">Связаться</a>
          </div>
        </div>
      </header>

      {/* ========== HERO ========== */}
      <section className="relative overflow-hidden">
        <div className="mx-auto max-w-6xl px-4 py-16 md:py-24 relative z-10">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: "spring", stiffness: 80, damping: 16 }}
            className="text-4xl font-black leading-[1.05] tracking-tight sm:text-5xl md:text-7xl"
          >
            Нестандартный маркетинг
            <br /> который ё*ашит по ленте и бьёт по кошельку конкурентов
          </motion.h1>

          <p className="mt-6 max-w-2xl text-base leading-relaxed opacity-80">
            Ломаем паттерны, собираем вирусные связки и запускаем трафик, который выделяет тебя из серой ленты.
            Никакой скучной корпоративщины — только креатив, который работает.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <button
              type="button"
              onClick={startQuiz}
              className="cursor-pointer rounded-full bg-black px-6 py-3 text-sm font-semibold uppercase tracking-wider text-white hover:opacity-90"
            >
              Запустить воронку
            </button>
            <button
              type="button"
              onClick={openCoward}
              className="cursor-pointer rounded-full border border-black px-6 py-3 text-sm font-semibold uppercase tracking-wider hover:bg-black hover:text-white"
            >
              Я ссыкую 😅
            </button>
            <div className="flex items-center gap-2 text-xs uppercase tracking-wider opacity-70">
              <s className="opacity-50">$3000</s>
              <span className="font-semibold text-black">от $1500</span>
              <span>• старт за 7 дней</span>
            </div>
          </div>

          <p className="mt-6 text-xs uppercase tracking-wider opacity-60">
            Работает в любом канале: Meta, TikTok, YouTube, VK, Яндекс.
          </p>
        </div>
      </section>

      {/* ========== 7 DAYS ========== */}
      <section id="seven" className="bg-white">
        <div className="mx-auto max-w-6xl px-4 py-16">
          <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight">Что получишь в первые 7 дней</h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 md:grid-cols-3">
            {[
              { t: "Аудит & Идея", d: "Находим небанальный инсайт и формулируем Big Idea." },
              { t: "Креативы", d: "Снимаем/собираем 5–10 дерзких крео под ЦА." },
              { t: "Ленд-аттракцион", d: "Сайт, который сам по себе вирусится и сохраняется." },
              { t: "Бот / Квиз", d: "Греем и квалифицируем лидов прямо в мессенджере." },
              { t: "Трафик", d: "Запуск связок в Meta / TikTok с отсевом мусора." },
              { t: "Метрики", d: "Дэшборд и ежедневные короткие апдейты." },
            ].map((c) => (
              <div key={c.t} className="rounded-3xl border border-zinc-200 p-6 shadow-sm">
                <h3 className="text-xl font-bold">{c.t}</h3>
                <p className="mt-2 text-zinc-600">{c.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== PROCESS (black) ========== */}
      <section id="process" className="bg-black text-white">
        <div className="mx-auto max-w-6xl px-4 py-16">
          <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight">Как это происходит</h2>
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {[
              { n: "01", t: "Старт", d: "15-минутный созвон, бриф и доступы." },
              { n: "02", t: "Сборка", d: "Идея → крео → ленд → бот/квиз." },
              { n: "03", t: "Запуск", d: "Первые связки, быстрый отсев мусора." },
              { n: "04", t: "Масштаб", d: "Тесты гипотез, оптимизация, рост бюджета." },
            ].map((c) => (
              <div key={c.n} className="rounded-3xl border border-white/15 bg-white/5 p-6">
                <div className="text-sm font-mono opacity-70">{c.n}</div>
                <div className="mt-1 text-xl font-extrabold">{c.t}</div>
                <p className="mt-2 text-zinc-300">{c.d}</p>
              </div>
            ))}
          </div>
          <div className="mt-6 rounded-3xl border border-white/15 bg-white/5 p-6">
            <div className="text-zinc-300">
              Каналы: Meta, TikTok, YouTube, VK, Яндекс • Отчётность: ежедневная
            </div>
            <a
              href="#cta"
              className="mt-4 inline-flex rounded-full bg-white px-5 py-2 font-semibold text-black hover:opacity-90"
            >
              Пройти отбор
            </a>
          </div>
        </div>
      </section>

      {/* ========== IMPACT ========== */}
      <section id="impact" className="bg-white">
        <div className="mx-auto max-w-6xl px-4 py-16">
          <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight">Где срабатывает нестандарт</h2>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {[
              { t: "Ленты соцсетей", d: "Когда обычная реклама пролистывается, WTF-креативы стопорят внимание." },
              { t: "Рынки с конкуренцией", d: "Когда все душат скидками, мы выбиваемся из строя и забираем клиентов." },
              { t: "Товарка и услуги", d: "E-com, крипта, ставки, SaaS — везде, где нужен креатив с яйцами." },
            ].map((c) => (
              <div key={c.t} className="rounded-3xl border border-zinc-200 p-6 shadow-sm">
                <h3 className="font-bold">{c.t}</h3>
                <p className="mt-2 text-zinc-600">{c.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== CASES ========== */}
      <section id="cases" className="bg-white">
        <div className="mx-auto max-w-6xl px-4 py-16">
          <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight">Кейсы</h2>
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            <div className="rounded-3xl border border-zinc-200 p-6 shadow-sm">
              <h3 className="font-bold">Crypto / Betting</h3>
              <p className="mt-2 text-zinc-700">+300% ROI за 2 недели. CTR ×3 благодаря дерзким крео.</p>
            </div>
            <div className="rounded-3xl border border-zinc-200 p-6 shadow-sm">
              <h3 className="font-bold">E-commerce</h3>
              <p className="mt-2 text-zinc-700">CPL −40%. Быстрые продажи с TikTok и Meta через WTF-подход.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ========== FAQ (black) ========== */}
      <section id="faq" className="bg-black text-white">
        <div className="mx-auto max-w-6xl px-4 py-16">
          <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight">FAQ</h2>
          <div className="mt-8 space-y-4 text-zinc-300">
            <details>
              <summary className="font-semibold cursor-pointer">Сколько стоит?</summary>
              <p className="mt-2">Минимальный вход — от $1500 + бюджет на трафик.</p>
            </details>
            <details>
              <summary className="font-semibold cursor-pointer">Где запускаете?</summary>
              <p className="mt-2">Meta, TikTok, YouTube, VK, Яндекс. Подберём оптимально под нишу.</p>
            </details>
            <details>
              <summary className="font-semibold cursor-pointer">А если не получится?</summary>
              <p className="mt-2">Мы не обещаем чудес, но обещаем тесты, аналитику и понятный результат.</p>
            </details>
          </div>
        </div>
      </section>

      {/* ========== CTA ========== */}
      <section id="cta" className="mx-auto max-w-6xl px-4 py-16">
        <div className="rounded-3xl border border-black bg-gradient-to-br from-zinc-50 to-white p-8 md:p-12 shadow-sm">
          <h3 className="text-2xl md:text-3xl font-extrabold tracking-tight">Ну что, едем?</h3>
          <p className="mt-2 max-w-2xl text-zinc-700">
            Пиши «Хочу WTF» — и мы скинем план: что тестим, где льём и как въ*бываем конкурентов.
          </p>
          <div className="mt-6 flex flex-col sm:flex-row gap-4">
            <a href={TELEGRAM_URL} target="_blank" rel="noreferrer" className="rounded-full bg-black px-6 py-3 font-semibold text-white hover:bg-zinc-800 transition">
              Написать в TG
            </a>
            <a href={`mailto:${EMAIL}?subject=Хочу%20WTF%20воронку`} className="rounded-full border border-black px-6 py-3 font-semibold hover:bg-black hover:text-white transition">
              {EMAIL}
            </a>
            <button onClick={startQuiz} className="rounded-full border px-6 py-3 font-semibold hover:bg-zinc-100 transition">
              Пройти квиз
            </button>
          </div>
        </div>
      </section>

      {/* ========== FOOTER ========== */}
      <footer className="border-t border-zinc-200 py-10 text-sm text-zinc-500">
        <div className="mx-auto w-full max-w-6xl px-4 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <div className="h-5 w-5 rounded bg-black" />
            <span>FN Agency · WTF Funnel</span>
          </div>
          <div className="flex items-center gap-4">
            <a href={TELEGRAM_URL} target="_blank" rel="noreferrer" className="hover:text-black">TG</a>
            <a href={`mailto:${EMAIL}`} className="hover:text-black">Email</a>
          </div>
        </div>
      </footer>

      {/* ========== QUIZ MODAL ========== */}
      <AnimatePresence>
        {quizOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/70"
          >
            <div className="bg-white rounded-2xl p-6 max-w-md w-full relative">
              <h2 className="text-xl font-bold mb-4">Квиз</h2>
              <p>{steps[step]?.q}</p>
              <div className="mt-4 space-y-2">
                {steps[step]?.options.map((opt) => (
                  <button
                    key={opt}
                    className="block w-full rounded-full border px-4 py-2 hover:bg-black hover:text-white"
                    onClick={() => {
                      setAnswers({ ...answers, [steps[step].key]: opt });
                      if (step < steps.length - 1) setStep(step + 1);
                      else setQuizOpen(false);
                    }}
                  >
                    {opt}
                  </button>
                ))}
              </div>
              <button onClick={closeModals} className="absolute top-3 right-3 text-zinc-500">✕</button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ========== COWARD MODAL ========== */}
      <AnimatePresence>
        {cowardOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/70"
          >
            <div className="bg-white rounded-2xl p-6 max-w-sm w-full relative text-center">
              <h2 className="text-xl font-bold mb-4">Понимаю 😅</h2>
              <p className="mb-4">Нестандарт — страшно. Но ещё страшнее — остаться в ленте, где тебя не замечают.</p>
              <a href={TELEGRAM_URL} target="_blank" rel="noreferrer" className="block rounded-full bg-black px-6 py-3 text-white font-semibold hover:bg-zinc-800">
                Написать в Telegram
              </a>
              <button onClick={closeModals} className="absolute top-3 right-3 text-zinc-500">✕</button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
