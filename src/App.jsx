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

  const openCoward = () => {
    setCowardOpen(true);
  };

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
            <br /> который реально <span className="text-red-600">ебашит</span>
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

      {/* QUIZ MODAL */}
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

      {/* COWARD MODAL */}
      <AnimatePresence>
        {cowardOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/70"
          >
            <div className="bg-white rounded-2xl p-6 max-w-sm w-full relative text-center">
              <h2 className="text-xl font-bold mb-4">Ну ты и ссыкло 😅</h2>
              <p className="mb-4">Ладно, если страшно — просто напиши нам напрямую.</p>
              <a
                href={TELEGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="block rounded-full bg-black px-6 py-3 text-white font-semibold hover:bg-zinc-800"
              >
                Написать в Telegram
              </a>
              <a
                href={`mailto:${EMAIL}`}
                className="mt-3 block rounded-full border border-black px-6 py-3 text-black font-semibold hover:bg-black hover:text-white"
              >
                Написать на почту
              </a>
              <button onClick={closeModals} className="absolute top-3 right-3 text-zinc-500">✕</button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* FOOTER */}
      <footer id="cta" className="mt-24 bg-black text-white py-12">
        <div className="mx-auto max-w-6xl px-4 text-center">
          <h2 className="text-2xl font-bold mb-4">Готов ебашить нестандартно?</h2>
          <p className="mb-6">Пиши нам в телегу или на почту — и поехали.</p>
          <div className="flex justify-center gap-4">
            <a href={TELEGRAM_URL} target="_blank" rel="noopener noreferrer" className="rounded-full bg-white text-black px-6 py-3 font-semibold hover:bg-zinc-200">
              Telegram
            </a>
            <a href={`mailto:${EMAIL}`} className="rounded-full border border-white px-6 py-3 font-semibold hover:bg-white hover:text-black">
              Email
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

    </div>
  );
}
// EOF
