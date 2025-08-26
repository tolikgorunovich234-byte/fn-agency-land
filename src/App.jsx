// src/App.jsx
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// === Contacts ===
const TELEGRAM_URL = "https://t.me/FNMARKETING_studio";
const EMAIL = "fntraffagency@gmail.com";

export default function App() {
  // UI state
  const [quizOpen, setQuizOpen] = useState(false);
  const [cowardOpen, setCowardOpen] = useState(false);
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState({ budget: "", speed: "", spice: "" });

  // Quiz steps
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
      <header className="sticky top-0 z-40 backdrop-blur bg-white/85 border-b">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
          <a href="#" className="flex items-center gap-3">
            <div className="h-6 w-6 rounded bg-black" />
            <span className="text-sm font-semibold tracking-wider uppercase">FN AGENCY</span>
          </a>
          <nav className="hidden gap-6 md:flex text-sm">
            <a href="#seven" className="opacity-80 hover:text-black">7 дней</a>
            <a href="#process" className="opacity-80 hover:text-black">Процесс</a>
            <a href="#impact" className="opacity-80 hover:text-black">Нестандарт</a>
            <a href="#faq" className="opacity-80 hover:text-black">FAQ</a>
          </nav>
          <div className="flex items-center gap-3">
            <a href="#cta" className="rounded-full border border-black px-4 py-2 text-xs font-semibold uppercase tracking-wider hover:bg-black hover:text-white">Связаться</a>
          </div>
        </div>
      </header>

      {/* ========== HERO ========== */}
      <section className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(1200px_600px_at_50%_-100px,rgba(0,0,0,0.06),transparent)]" />
        <div className="mx-auto max-w-6xl px-4 py-16 md:py-24 relative z-10">
          <div className="mb-5 inline-flex items-center gap-3 rounded-full border px-3 py-1 text-xs uppercase tracking-wider">
            <span className="opacity-70">FN Agency</span>
            <span className="opacity-40">•</span>
            <span className="font-semibold">WTF Funnel</span>
          </div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: "spring", stiffness: 80, damping: 16 }}
            className="text-4xl font-black leading-[1.05] tracking-tight sm:text-5xl md:text-7xl"
          >
            Нестандартный маркетинг,
            <br />
            который выбьет <span className="underline decoration-4">х*йню</span> из ленты
          </motion.h1>

          <p className="mt-6 max-w-2xl text-base leading-relaxed opacity-80">
            Ломаем паттерны, собираем вирусные связки и запускаем трафик, который выделяет тебя из серой ленты.
            Никакой скучной корпоративщины — только креатив, который реально приносит бабки.
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
            Работает в любом канале: Meta, TikTok, YouTube, VK, Яндекс — где угодно, похуй.
          </p>

          <div className="mt-8 rounded-xl border bg-black text-white px-4 py-3 text-xs uppercase tracking-wider">
            ⚡ Предупреждение: этот маркетинг вызывает привыкание. Вход только для смелых.
          </div>
        </div>
      </section>

      {/* ========== 7 DAYS (WHAT YOU GET) ========== */}
      <section id="seven" className="relative">
        <div className="mx-auto max-w-6xl px-4 py-16">
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight">
            Что получишь в первые 7 дней
          </h2>
          <p className="mt-3 max-w-2xl opacity-80">
            Быстрая упаковка + креативы + ленд-аттракцион + бот/квиз + запуск трафика. Без воды.
          </p>

          <div className="mt-8 grid gap-4 md:grid-cols-2">
            <Card
              day="1 день"
              title="Аудит & Идея"
              text="Находим небанальный инсайт и формулируем Big Idea."
            />
            <Card
              day="1–2 дня"
              title="Креативы"
              text="Снимаем/собираем 5–10 провокационных крео под ЦА."
            />
            <Card
              day="1 день"
              title="Ленд-аттракцион"
              text="Сайт, который сам по себе вирусится и сохраняется."
            />
            <Card
              day="каждый день"
              title="Метрики"
              text="Дешборд и ежедневные короткие апдейты."
            />
          </div>
        </div>
      </section>

      {/* ========== PROCESS (DARK) ========== */}
      <section id="process" className="bg-black text-white">
        <div className="mx-auto max-w-6xl px-4 py-16">
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight">
            Как это происходит
          </h2>
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            <Step n="01" title="Старт" text="15-минутный созвон, бриф и доступы." />
            <Step n="02" title="Сборка" text="Идея → крео → ленд → бот/квиз." />
            <Step n="03" title="Запуск трафика" text="Включаем связки и масштабируем удачное." />
            <Step n="04" title="Масштаб" text="Тесты гипотез, оптимизация, рост бюджета." />
          </div>
          <div className="mt-8 rounded-xl border border-white/15 p-4 text-sm opacity-80">
            Каналы: Meta, TikTok, YouTube, VK, Яндекс • Гео: РФ/СНГ/US/EU • Отчётность: ежедневная
          </div>
          <div className="mt-6">
            <a
              href={TELEGRAM_URL}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-black hover:opacity-90"
            >
              Пройти отбор
            </a>
          </div>
        </div>
      </section>

      {/* ========== NICHES (WHERE) ========== */}
      <section id="impact" className="relative">
        <div className="mx-auto max-w-6xl px-4 py-16">
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight">
            Где срабатывает нестандарт
          </h2>
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            <Card title="Отели / Рестораны" text="Вирусные офферы, съёмка под TikTok, ленды-игры для бронирований." />
            <Card title="Приложения / SaaS" text="Продуктовые воронки, UGC, лид-магниты без скучных вебинаров." />
            <Card title="Серые ниши" text="Безопасные креативы, обходные связки, воронки в мессенджерах." />
            <Card title="Ещё" text="Обсудим твою нишу и подберём формат, который полетит." />
          </div>
        </div>
      </section>

      {/* ========== FAQ ========== */}
      <section id="faq" className="border-t bg-zinc-50">
        <div className="mx-auto max-w-6xl px-4 py-16">
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight">Ответы на вопросы</h2>
          <div className="mt-8 space-y-3">
            <Faq q="Это для кого?" a="Для брендов и продуктов, которым надо выделяться и быстро проверять гипотезы." />
            <Faq q="Какие риски?" a="Риск — остаться в серой ленте. Мы идём смелее, но без ущерба для бренда и рекламных правил." />
            <Faq q="Договор и оплата?" a="Да, работаем по договору. Этапность/фикс, прозрачные метрики и контроль точек." />
          </div>
        </div>
      </section>

      {/* ========== FOOTER / CONTACTS ========== */}
      <footer id="cta" className="border-t">
        <div className="mx-auto max-w-6xl px-4 py-12">
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div>
              <h3 className="text-2xl md:text-3xl font-extrabold">Погнали уже разъебём ленту?</h3>
              <p className="opacity-80">Напиши в тг или на почту — стартанём за неделю.</p>
            </div>
            <div className="flex flex-wrap items-center gap-3">
              <a
                href={TELEGRAM_URL}
                target="_blank"
                rel="noreferrer"
                className="rounded-full bg-black px-6 py-3 text-sm font-semibold text-white hover:opacity-90"
              >
                Telegram
              </a>
              <a
                href={`mailto:${EMAIL}`}
                className="rounded-full border border-black px-6 py-3 text-sm font-semibold hover:bg-black hover:text-white"
              >
                {EMAIL}
              </a>
            </div>
          </div>
          <div className="mt-8 text-xs opacity-60">
            © {new Date().getFullYear()} FN Agency • Без скучной корпоративщины.
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
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 px-4"
          >
            <div className="bg-white rounded-2xl p-6 max-w-md w-full relative">
              <h2 className="text-xl font-bold mb-4">Квиз</h2>
              <p className="font-medium">{steps[step]?.q}</p>

              <div className="mt-4 space-y-2">
                {steps[step]?.options.map((opt) => (
                  <button
                    key={opt}
                    className="block w-full rounded-full border px-4 py-2 text-left hover:bg-black hover:text-white"
                    onClick={() => {
                      setAnswers((prev) => ({ ...prev, [steps[step].key]: opt }));
                      if (step < steps.length - 1) setStep((s) => s + 1);
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
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 px-4"
          >
            <div className="bg-white rounded-2xl p-6 max-w-sm w-full relative text-center">
              <h2 className="text-xl font-bold mb-3">Понимаю 😅</h2>
              <p className="mb-4 opacity-80">
                Нестандарт — это страшно. Но ещё страшнее — остаться в ленте, где тебя не замечают.
              </p>

              <a
                href={TELEGRAM_URL}
                target="_blank"
                rel="noreferrer"
                className="block rounded-full bg-black px-6 py-3 text-white font-semibold hover:bg-zinc-800"
              >
                Ладно, пробуем
              </a>

              <button onClick={closeModals} className="mt-3 w-full rounded-full border px-6 py-3 font-semibold hover:bg-black hover:text-white">
                Закрыть
              </button>

              <button onClick={closeModals} className="absolute top-3 right-3 text-zinc-500">✕</button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

/* ====== SMALL UI COMPONENTS ====== */
function Card({ day, title, text }) {
  return (
    <div className="rounded-2xl border bg-white p-5 shadow-sm">
      {day && <div className="text-xs uppercase tracking-wider opacity-60 mb-1">{day}</div>}
      <div className="text-xl md:text-2xl font-extrabold">{title}</div>
      <p className="mt-2 opacity-80">{text}</p>
    </div>
  );
}

function Step({ n, title, text }) {
  return (
    <div className="rounded-2xl border border-white/15 bg-white/5 p-5">
      <div className="text-xs uppercase tracking-wider opacity-70 mb-1">{n}</div>
      <div className="text-xl md:text-2xl font-extrabold">{title}</div>
      <p className="mt-2 opacity-80">{text}</p>
    </div>
  );
}

function Faq({ q, a }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="rounded-2xl border bg-white">
      <button
        className="w-full px-5 py-4 text-left font-semibold flex items-center justify-between"
        onClick={() => setOpen((v) => !v)}
      >
        <span>{q}</span>
        <span className="text-zinc-400">{open ? "—" : "+"}</span>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="px-5 pb-4"
          >
            <p className="opacity-80">{a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

