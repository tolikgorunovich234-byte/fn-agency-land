import React from "react";
import { useState } from "react";
import { motion } from "framer-motion";
import { Smartphone, Zap } from "lucide-react";

// -----------------------------
// FN AGENCY — WTF Funnel Landing (Yellow Edition)
// -----------------------------

export default function WTFunnelLanding() {
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

  const heroBadge = (
    <div className="inline-flex items-center gap-2 rounded-full border border-yellow-400 bg-yellow-300/20 px-3 py-1 text-xs tracking-wide uppercase">
      <Zap className="h-3 w-3 text-yellow-500" />
      <span className="font-medium">FN Agency</span>
      <span className="opacity-60">•</span>
      <span className="opacity-80">WTF Funnel</span>
    </div>
  );

  return (
    <div className="relative min-h-screen w-full bg-white text-black">
      {/* Decorative acid yellow objects */}
      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute top-20 left-10 h-32 w-32 rounded-full bg-yellow-400 blur-3xl opacity-30 animate-pulse" />
        <div className="absolute bottom-20 right-10 h-40 w-40 rounded-full bg-yellow-300 blur-2xl opacity-40 animate-pulse" />
      </div>

      {/* Background grid */}
      <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(circle_at_top_right,rgba(0,0,0,0.06),transparent_40%),radial-gradient(circle_at_bottom_left,rgba(0,0,0,0.06),transparent_40%)]" />

      {/* Header */}
      <header className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/80 border-b">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
          <div className="flex items-center gap-3">
            <div className="h-6 w-6 rounded bg-yellow-400" />
            <span className="text-sm font-semibold tracking-wider uppercase">FN AGENCY</span>
          </div>
          <nav className="hidden gap-6 md:flex text-sm">
            <a href="#inside" className="opacity-80 hover:text-yellow-500">Что внутри</a>
            <a href="#process" className="opacity-80 hover:text-yellow-500">Процесс</a>
            <a href="#faq" className="opacity-80 hover:text-yellow-500">FAQ</a>
          </nav>
          <div className="flex items-center gap-3">
            <button className="text-xs uppercase tracking-wider opacity-60 hover:text-yellow-500">ru / eng</button>
            <a
              href="#lead"
              className="rounded-full border border-yellow-400 px-4 py-2 text-xs font-semibold uppercase tracking-wider hover:bg-yellow-400 hover:text-black"
            >
              Связаться
            </a>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute right-10 top-10 opacity-50">
          <Smartphone className="h-24 w-24 text-yellow-400" />
        </div>
        <div className="mx-auto max-w-6xl px-4 py-16 md:py-24 relative z-10">
          <div className="mb-6">{heroBadge}</div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: "spring", stiffness: 80, damping: 16 }}
            className="text-4xl font-black leading-[1.05] tracking-tight sm:text-5xl md:text-7xl"
          >
            НЕСТАНДАРТНЫЙ МАРКЕТИНГ
            <br /> КОТОРЫЙ ВЫЗЫВАЕТ ПРИВЫКАНИЕ
          </motion.h1>

          <p className="mt-6 max-w-2xl text-base leading-relaxed opacity-80">
            Ломаем паттерны, собираем вирусные связки и запускаем трафик, который выделяет тебя из серой ленты.
            Никакой скучной корпоративщины — только креатив, который работает.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <button
              onClick={startQuiz}
              className="rounded-full bg-yellow-400 px-6 py-3 text-sm font-semibold uppercase tracking-wider text-black hover:opacity-90"
            >
              Запустить воронку
            </button>
            <button
              onClick={() => setCowardOpen(true)}
              className="rounded-full border border-yellow-400 px-6 py-3 text-sm font-semibold uppercase tracking-wider hover:bg-yellow-400 hover:text-black"
            >
              Я ссыкую
            </button>
            <div className="flex items-center gap-2 text-xs uppercase tracking-wider opacity-70">
              <s className="opacity-50">$3000</s>
              <span className="font-semibold text-yellow-500">от $1500</span>
              <span>• старт за 7 дней</span>
            </div>
          </div>

          <div className="mt-6 text-xs uppercase tracking-wider opacity-60">
            Работает в любом канале: Meta, TikTok, YouTube, VK, Яндекс.
          </div>
        </div>
      </section>

      {/* Остальные секции можно добить позже — структура уже есть */}
    </div>
  );
}
