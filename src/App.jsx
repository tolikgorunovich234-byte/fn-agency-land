// src/App.jsx
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const TELEGRAM_URL = "https://t.me/FNMARKETING_studio";
const EMAIL = "fntraffagency@gmail.com";

// === Reusable Components ===
function Card({ day, title, text }) {
  return (
    <div className="rounded-xl border p-4 bg-white shadow-sm">
      {day && <p className="text-xs uppercase opacity-60 mb-1">{day}</p>}
      <h3 className="font-semibold mb-1">{title}</h3>
      <p className="text-sm opacity-80">{text}</p>
    </div>
  );
}

function Step({ n, title, text }) {
  return (
    <div className="rounded-xl border border-white/20 p-4 bg-black text-white">
      <p className="text-xs uppercase opacity-60 mb-1">{n}</p>
      <h3 className="font-semibold mb-1">{title}</h3>
      <p className="text-sm opacity-80">{text}</p>
    </div>
  );
}

function Faq({ q, a }) {
  return (
    <div className="rounded-xl border p-4 bg-white">
      <h3 className="font-semibold">{q}</h3>
      <p className="mt-1 text-sm opacity-80">{a}</p>
    </div>
  );
}

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

  const startQuiz = () => { setAnswers({ budget: "", speed: "", spice: "" }); setStep(0); setQuizOpen(true); };
  const openCoward = () => setCowardOpen(true);
  const closeModals = () => { setQuizOpen(false); setCowardOpen(false); };

  return (
    <div className="min-h-screen w-full bg-white text-black">
      {/* HEADER */}
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
          <a href="#cta" className="rounded-full border border-black px-4 py-2 text-xs font-semibold uppercase tracking-wider hover:bg-black hover:text-white">Связаться</a>
        </div>
      </header>

      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="mx-auto max-w-6xl px-4 py-16 md:py-24 relative z-10">
          <motion.h1 initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} transition={{type:"spring",stiffness:80,damping:16}}
            className="text-4xl font-black leading-[1.05] tracking-tight sm:text-5xl md:text-7xl">
            Нестандартный маркетинг <br/> который реально е*ашит
          </motion.h1>
          <p className="mt-6 max-w-2xl text-base leading-relaxed opacity-80">
            Ломаем паттерны, собираем вирусные связки и запускаем трафик, который выделяет тебя из серой ленты.
            Никакой скучной корпоративщины — только креатив, который работает.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <button onClick={startQuiz} className="rounded-full bg-black px-6 py-3 text-sm font-semibold uppercase tracking-wider text-white hover:opacity-90">
              Запустить воронку
            </button>
            <button onClick={openCoward} className="rounded-full border border-black px-6 py-3 text-sm font-semibold uppercase tracking-wider hover:bg-black hover:text-white">
              Я ссыкую 😅
            </button>
            <div className="flex items-center gap-2 text-xs uppercase tracking-wider opacity-70">
              <s className="opacity-50">$3000</s><span className="font-semibold text-black">от $1500</span><span>• старт за 7 дней</span>
            </div>
          </div>
        </div>
      </section>

      {/* 7 DAYS */}
      <section id="seven">
        <div className="mx-auto max-w-6xl px-4 py-16">
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight">Что получишь в первые 7 дней</h2>
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            <Card day="1 день" title="Аудит & Идея" text="Находим небанальный инсайт и формулируем Big Idea." />
            <Card day="1–2 дня" title="Креативы" text="Снимаем/собираем 5–10 провокационных крео под ЦА." />
            <Card day="1 день" title="Ленд-аттракцион" text="Сайт, который сам по себе вирусится и сохраняется." />
            <Card day="каждый день" title="Метрики" text="Дешборд и ежедневные короткие апдейты." />
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section id="process" className="bg-black text-white">
        <div className="mx-auto max-w-6xl px-4 py-16">
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight">Как это происходит</h2>
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            <Step n="01" title="Старт" text="15-минутный созвон, бриф и доступы." />
            <Step n="02" title="Сборка" text="Идея → крео → ленд → бот/квиз." />
            <Step n="03" title="Запуск трафика" text="Включаем связки и масштабируем удачное." />
            <Step n="04" title="Масштаб" text="Тесты гипотез, оптимизация, рост бюджета." />
          </div>
        </div>
      </section>

      {/* IMPACT */}
      <section id="impact">
        <div className="mx-auto max-w-6xl px-4 py-16">
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight">Где срабатывает нестандарт</h2>
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            <Card title="Отели / Рестораны" text="Вирусные офферы, TikTok-съёмка, ленды-игры." />
            <Card title="Приложения / SaaS" text="Продуктовые воронки, UGC, лид-магниты без скучных вебинаров." />
            <Card title="Серые ниши" text="Безопасные креативы, обходные связки, воронки в мессенджерах." />
            <Card title="Ещё" text="Обсудим твою нишу и подберём формат, который полетит." />
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="border-t bg-zinc-50">
        <div className="mx-auto max-w-6xl px-4 py-16">
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight">Ответы на вопросы</h2>
          <div className="mt-8 space-y-3">
            <Faq q="Это для кого?" a="Для брендов и продуктов, которым надо выделяться и быстро проверять гипотезы." />
            <Faq q="Какие риски?" a="Риск — остаться в серой ленте. Мы идём смелее, но без нарушения правил." />
            <Faq q="Договор и оплата?" a="Да, работаем по договору. Прозрачные метрики и контроль точек." />
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer id="cta" className="border-t bg-black text-white">
        <div className="mx-auto max-w-6xl px-4 py-12 text-center">
          <h2 className="text-2xl font-bold mb-4">Готов к нестандарту?</h2>
          <p className="opacity-80 mb-6">Напиши нам и поехали!</p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <a href={TELEGRAM_URL} target="_blank" rel="noreferrer"
               className="rounded-full bg-white text-black px-6 py-3 font-semibold hover:opacity-80">Telegram</a>
            <a href={`mailto:${EMAIL}`} className="rounded-full border border-white px-6 py-3 font-semibold hover:bg-white hover:text-black">
              {EMAIL}
            </a>
          </div>
          <p className="mt-8 text-xs opacity-50">© 2025 FN Agency. Все права посланы нах*й 😎</p>
        </div>
      </footer>

      {/* QUIZ MODAL */}
      <AnimatePresence>
        {quizOpen && (
          <motion.div initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/70">
            <div className="bg-white rounded-2xl p-6 max-w-md w-full relative">
              <h2 className="text-xl font-bold mb-4">Квиз</h2>
              <p>{steps[step]?.q}</p>
              <div className="mt-4 space-y-2">
                {steps[step]?.options.map((opt) => (
                  <button key={opt}
                    className="block w-full rounded-full border px-4 py-2 hover:bg-black hover:text-white"
                    onClick={() => {
                      setAnswers({ ...answers, [steps[step].key]: opt });
                      if (step < steps.length - 1) setStep(step + 1);
                      else setQuizOpen(false);
                    }}>{opt}</button>
                ))}
              </div>
              <button onClick={closeModals} className="absolute top-3 right-3 text-zinc-500">✕</button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* COWARD MODAL */}
      <AnimatePresence>
        {cowardOpen && (
          <motion.div initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/70">
            <div className="bg-white rounded-2xl p-6 max-w-sm w-full relative text-center">
              <h2 className="text-xl font-bold mb-4">Ну ты и ссыкло 😅</h2>
              <p className="mb-4">Ладно, если страшно — просто напиши нам напрямую.</p>
              <a href={TELEGRAM_URL} target="_blank" rel="noreferrer"
                 className="block rounded-full bg-black px-6 py-3 text-white font-semibold hover:bg-zinc-800">Написать в Telegram</a>
              <button onClick={closeModals} className="absolute top-3 right-3 text-zinc-500">✕</button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
// EOF
