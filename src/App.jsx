import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function App() {
  const [quizOpen, setQuizOpen] = useState(false);
  const [cowardOpen, setCowardOpen] = useState(false);
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState({ budget: "", speed: "", spice: "" });

  const startQuiz = () => {
    setQuizOpen(true);
    setStep(0);
    setAnswers({ budget: "", speed: "", spice: "" });
  };
  const closeQuiz = () => setQuizOpen(false);

  const steps = [
    {
      q: "Какой дневной бюджет на тесты тебя не пугает?",
      options: [
        { v: "$50–100", label: "$50–100" },
        { v: "$150–200", label: "$150–200" },
        { v: "$300+", label: "$300+" },
      ],
      key: "budget",
    },
    {
      q: "За сколько дней ты хочешь увидеть первые заявки?",
      options: [
        { v: "3–5 дней", label: "3–5 дней" },
        { v: "7 дней", label: "7 дней" },
        { v: "14 дней", label: "14 дней" },
      ],
      key: "speed",
    },
    {
      q: "Сколько нестандарта выдержит твой бренд?",
      options: [
        { v: "Чуть-чуть, аккуратно", label: "Чуть-чуть, аккуратно" },
        { v: "По-жёстче, но без бана", label: "По-жёстче, но без бана" },
        { v: "Ебанём как надо", label: "Ебанём как надо" },
      ],
      key: "spice",
    },
  ];

  return (
    <div className="min-h-screen w-full bg-white text-black">
      {/* Hero */}
      <section className="relative">
        <div className="mx-auto max-w-6xl px-3 sm:px-4 pt-8 pb-10 sm:pt-12 md:pt-16 md:pb-16">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: "spring", stiffness: 80, damping: 16 }}
            className="text-3xl sm:text-5xl md:text-7xl font-black leading-[1.05] tracking-tight"
          >
            НЕСТАНДАРТНЫЙ МАРКЕТИНГ
            <br className="hidden sm:block" /> КОТОРЫЙ ВЫЗЫВАЕТ ПРИВЫКАНИЕ
          </motion.h1>
          <p className="mt-4 sm:mt-6 max-w-2xl text-sm sm:text-base leading-relaxed opacity-80">
            Ломаем паттерны, собираем вирусные связки и запускаем трафик, который выделяет тебя из серой ленты. Никакой скучной
            корпоративщины — только креатив, который работает.
          </p>

          <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
            <button
              onClick={startQuiz}
              className="w-full sm:w-auto rounded-full bg-black px-6 py-3 text-sm font-semibold uppercase text-white hover:opacity-90"
            >
              Запустить воронку
            </button>
            <button
              onClick={() => setCowardOpen(true)}
              className="w-full sm:w-auto rounded-full border px-6 py-3 text-sm font-semibold uppercase hover:bg-black hover:text-white"
            >
              Я ссыкую
            </button>
          </div>
        </div>
      </section>

      {/* CTA с твоим Telegram */}
      <section id="lead" className="border-y bg-neutral-950 text-white">
        <div className="mx-auto max-w-6xl px-3 sm:px-4 py-12 md:py-20">
          <h3 className="text-2xl sm:text-3xl md:text-5xl font-extrabold uppercase tracking-tight">
            Начни запуск прямо сейчас
          </h3>
          <p className="mt-2 sm:mt-3 max-w-xl text-sm opacity-80">
            Нажми на кнопку, пройди мини-квиз и получи ссылку на Telegram для согласования старта.
          </p>

          <div className="mt-6 flex flex-col sm:flex-row gap-3">
            <button
              onClick={startQuiz}
              className="w-full sm:w-auto rounded-full bg-white px-6 py-3 text-sm font-semibold uppercase text-black hover:opacity-90"
            >
              Пройти мини-квиз
            </button>
            <a
              href="http://t.me/FMARKETING_studio"
              target="_blank"
              rel="noreferrer"
              className="w-full sm:w-auto text-center rounded-full border px-6 py-3 text-sm font-semibold uppercase hover:bg-white hover:text-black"
            >
              В Telegram
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white">
        <div className="mx-auto max-w-6xl px-3 sm:px-4 py-10 sm:py-12 text-[11px] sm:text-xs opacity-70">
          © FN Agency. Связь:{" "}
          <a href="http://t.me/FMARKETING_studio" className="underline">
            @FMARKETING_studio
          </a>
        </div>
      </footer>
    </div>
  );
}

