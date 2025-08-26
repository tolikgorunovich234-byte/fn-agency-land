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
      {/* HEADER */}
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

      {/* HERO */}
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

      {/* 7 DAYS */}
      <section id="seven" className="bg-white">
        <div className="mx-auto max-w-6xl px-4 py-16">
          <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight">Что получишь в первые 7 дней</h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 md:grid-cols-3">
            <div className="rounded-3xl border border-zinc-200 p-6 shadow-sm">
              <h3 className="text-xl font-bold">Аудит & Идея</h3>
              <p className="mt-2 text-zinc-600">Находим небанальный инсайт и формулируем Big Idea.</p>
            </div>
            <div className="rounded-3xl border border-zinc-200 p-6 shadow-sm">
              <h3 className="text-xl font-bold">Креативы</h3>
              <p className="mt-2 text-zinc-600">Снимаем/собираем 5–10 дерзких крео под ЦА.</p>
            </div>
            <div className="rounded-3xl border border-zinc-200 p-6 shadow-sm">
              <h3 className="text-xl font-bold">Ленд-аттракцион</h3>
              <p className="mt-2 text-zinc-600">Сайт, который сам по себе вирусится и сохраняется.</p>
            </div>
            <div className="rounded-3xl border border-zinc-200 p-6 shadow-sm">
              <h3 className="text-xl font-bold">Бот / Квиз</h3>
              <p className="mt-2 text-zinc-600">Греем и квалифицируем лидов прямо в мессенджере.</p>
            </div>
            <div className="rounded-3xl border border-zinc-200 p-6 shadow-sm">
              <h3 className="text-xl font-bold">Трафик</h3>
              <p className="mt-2 text-zinc-600">Запуск связок в Meta / TikTok с отсевом мусора.</p>
            </div>
            <div className="rounded-3xl border border-zinc-200 p-6 shadow-sm">
              <h3 className="text-xl font-bold">Метрики</h3>
              <p className="mt-2 text-zinc-600">Дэшборд и ежедневные короткие апдейты.</p>
            </div>
          </div>
        </div>
      </section>

      {/* PROCESS (black) */}
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

      {/* IMPACT */}
      <section id="impact" className="bg-white">
        <div className="mx-auto max-w-6xl px-4 py-16">
          <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight">Где срабатывает нестандарт</h2>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            <div className="rounded-3xl border border-zinc-200 p-6 shadow-sm">
              <h3 className="font-bold">Ленты соцсетей</h3>
              <p className="mt-2 text-zinc-600">
                Когда обычная реклама пролистывается, WTF-креативы стопорят внимание.
              </p>
            </div>
            <div className="rounded-3xl border border-zinc-200 p-6 shadow-sm">
              <h3 className="font-bold">Рынки с конкуренцией</h3>
              <p className="mt-2 text-zinc-600">
                Когда все душат скидками, мы выбиваемся из строя и забираем клиентов.
              </p>
            </div>
            <div className="rounded-3xl border border-zinc-200 p-6 shadow-sm">
              <h3 className="font-bold">Товарка и услуги</h3>
              <p className="mt-2 text-zinc-600">
                E-com, крипта, ставки, SaaS — везде, где нужен креатив с яйцами.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CASES */}
      <section id="cases" className="bg-white">
        <div className="mx-auto max-w-6xl px-4 py-16">
          <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight">Кейсы</h2>
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            <div className="rounded

