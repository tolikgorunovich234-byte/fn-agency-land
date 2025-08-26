// src/App.jsx
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// -----------------------------
// FN AGENCY — WTF Funnel (Hardcore, no icons)
// -----------------------------

export default function App() {
  const [quizOpen, setQuizOpen] = useState(false);
  const [cowardOpen, setCowardOpen] = useState(false);
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState({ budget: "", speed: "", spice: "" });

  const steps = [
    {
      key: "budget",
      q: "Какой дневной бюджет на тесты тебя не ебёт?",
      options: [
        { v: "$50–100", label: "$50–100" },
        { v: "$150–200", label: "$150–200" },
        { v: "$300+", label: "$300+" },
      ],
    },
    {
      key: "speed",
      q: "Через сколько дней тебе нахуй нужны заявки?",
      options: [
        { v: "3–5 дней", label: "3–5 дней" },
        { v: "7 дней", label: "7 дней" },
        { v: "14 дней", label: "14 дней" },
      ],
    },
    {
      key: "spice",
      q: "Сколько пиздеца выдержит твой бренд?",
      options: [
        { v: "Лайт", label: "Чуть-чуть, аккуратно" },
        { v: "Средне", label: "По-жёстче, но без бана" },
        { v: "Хард", label: "Ебанём как надо" },
      ],
    },
  ];

  const startQuiz = () => {
    setAnswers({ budget: "", speed: "", spice: "" });
    setStep(0);
    setQuizOpen(true);
  };

  const heroBadge = (
    <div className="inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs tracking-wide uppercase">
      <span className="font-medium">FN Agency</span>
      <span className="opacity-60">•</span>
      <span className="opacity-80">WTF Funnel</span>
    </div>
  );

  return (
    <div className="min-h-screen w-full bg-white text-black">
      {/* subtle background texture */}
      <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(circle_at_top_right,rgba(0,0,0,0.06),transparent_40%),radial-gradient(circle_at_bottom_left,rgba(0,0,0,0.06),transparent_40%)]" />

      {/* Header */}
      <header className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/80 border-b">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
          <div className="flex items-center gap-3">
            <div className="h-6 w-6 rounded bg-black" />
            <span className="text-sm font-semibold tracking-wider uppercase">FN AGENCY</span>
          </div>
          <nav className="hidden gap-6 md:flex text-sm">
            <a href="#inside" className="opacity-80 hover:opacity-100">Что внутри</a>
            <a href="#process" className="opacity-80 hover:opacity-100">Процесс</a>
            <a href="#faq" className="opacity-80 hover:opacity-100">FAQ</a>
          </nav>
          <div className="flex items-center gap-3">
            <button className="text-xs uppercase tracking-wider opacity-60 hover:opacity-100">ru / eng</button>
            <a
              href="#cta"
              className="rounded-full border px-4 py-2 text-xs font-semibold uppercase tracking-wider hover:bg-black hover:text-white"
            >
              Связаться
            </a>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="relative">
        <div className="mx-auto max-w-6xl px-4 py-16 md:py-24">
          <div className="mb-6">{heroBadge}</div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: "spring", stiffness: 80, damping: 16 }}
            className="text-4xl font-black leading-[1.05] tracking-tight sm:text-5xl md:text-7xl"
          >
            НЕСТАНДАРТНЫЙ МАРКЕТИНГ
            <br /> КОТОРЫЙ ВЫБЬЕТ ХУЙНЮ ИЗ ЛЕНТЫ
          </motion.h1>

          <p className="mt-6 max-w-2xl text-base leading-relaxed opacity-80">
            Мы ебашим креатив, который нахуй сносит крышу. Забудь про скучную корпоративщину —
            здесь только мясо, мемы и связки, которые реально приносят бабки.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <button
              onClick={startQuiz}
              className="rounded-full bg-black px-6 py-3 text-sm font-semibold uppercase tracking-wider text-white hover:opacity-90"
            >
              Запустить ебанутую воронку
            </button>
            <button
              onClick={() => setCowardOpen(true)}
              className="rounded-full border px-6 py-3 text-sm font-semibold uppercase tracking-wider hover:bg-black hover:text-white"
            >
              Я ссыкую
            </button>
            <div className="flex items-center gap-2 text-xs uppercase tracking-wider opacity-70">
              <s className="opacity-50">$3000</s>
              <span className="font-semibold">от $1500</span>
              <span>• старт за 7 ебучих дней</span>
            </div>
          </div>

          <div className="mt-6 text-xs uppercase tracking-wider opacity-60">
            Работает в любом канале: Meta, TikTok, YouTube, VK, Яндекс — где угодно, похуй.
          </div>
        </div>
      </section>

      {/* Promo strip */}
      <section className="border-y bg-black text-white">
        <div className="mx-auto max-w-6xl px-4 py-3 text-[11px] uppercase tracking-wider">
          ⚡ Предупреждение: этот ебаный маркетинг вызывает зависимость. Вход только для самых отбитых.
        </div>
      </section>

      {/* Что внутри */}
      <section id="inside" className="mx-auto max-w-6xl px-4 py-14 md:py-18">
        <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight">Что внутри</h2>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {[
            ["Виральные креативы", "Картинки/видосы/тексты, которые ломают паттерны и бьют по CTR так, что конкуренты плачут."],
            ["Связки, что тащат", "Тестим пачками, выкашиваем шлак, оставляем только то, что ебашит по метрикам."],
            ["WTF-воронка", "Нетиповая последовательность касаний: цепляет, греет, конвертит — без корпоративной хуйни."],
          ].map(([h, p]) => (
            <div key={h} className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm">
              <div className="text-lg font-bold">{h}</div>
              <p className="mt-2 opacity-80">{p}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Процесс */}
      <section id="process" className="mx-auto max-w-6xl px-4 py-14 md:py-18">
        <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight">Процесс</h2>
        <div className="mt-8 grid gap-6 md:grid-cols-4">
          {[
            ["01", "Диагностика", "Смотрим оффер, ЦА, прошлые крео. Находим, где течёт — затыкаем."],
            ["02", "MVP-пак", "Собираем мини-воронку: 6–12 креативов + квиз/ленд. Без священных коров."],
            ["03", "Запуск/тест", "Льём трафик, фиксируем сигналы. Всё, что не стреляет — в утиль."],
            ["04", "Масштаб", "Дуплицируем победителей, режем косты, удерживаем стабильность."],
          ].map(([n, h, p]) => (
            <div key={n} className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm">
              <div className="text-xs font-mono text-zinc-500">{n}</div>
              <div className="mt-2 text-lg font-bold">{h}</div>
              <p className="mt-2 opacity-80">{p}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="mx-auto max-w-6xl px-4 py-14 md:py-18">
        <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight">FAQ</h2>
        <div className="mt-6 divide-y rounded-2xl border border-zinc-200 bg-white">
          {[
            ["Сколько стоит вход?", "От $1500 за быстрый старт — чтобы проверить гипотезы и понять, где жир."],
            ["Где льёте?", "Meta, TikTok, YouTube, VK, Яндекс — идём туда, где быстрее зацепится."],
            ["Если ниша «сложная»?", "Тем лучше. Нестандарт — как раз чтобы сложное объяснять так, что хочется жать дальше."],
            ["Когда ждать результат?", "Первые сигналы — в 3–7 дней после запуска. Дальше итеративно усиливаем связки."],
          ].map(([q, a], i) => (
            <details key={i} className="group p-5 open:bg-zinc-50">
              <summary className="flex w-full cursor-pointer list-none items-center justify-between text-left font-semibold">
                <span>{q}</span>
                <span className="text-zinc-400 group-open:rotate-90 transition">›</span>
              </summary>
              <p className="mt-3 opacity-80">{a}</p>
            </details>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section id="cta" className="mx-auto max-w-6xl px-4 py-16">
        <div className="rounded-3xl border border-zinc-200 bg-gradient-to-br from-yellow-50 to-white p-8 md:p-12 shadow-sm">
          <h3 className="text-2xl md:text-3xl font-extrabold tracking-tight">
            Хочешь, чтобы реклама цепляла и конвертила?
          </h3>
          <p className="mt-2 max-w-2xl opacity-80">
            Напиши «Хочу WTF» — пришлём быстрый план на 1 страницу, как запускать в твоей нише без цирка и еб*лома.
          </p>
          <div className="mt-6 flex flex-col sm:flex-row gap-4">
            <a
              href="mailto:hello@fn.agency?subject=Хочу%20WTF%20воронку&body=Опиши%20нишу%2C%20цель%20и%20ссылку."
              className="rounded-full bg-black px-6 py-3 font-semibold text-white hover:bg-zinc-800 transition"
            >
              Написать на почту
            </a>
            <a
              href="https://t.me/"
              target="_blank"
              className="rounded-full border px-6 py-3 font-semibold hover:bg-zinc-100 transition"
            >
              Telegram
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-zinc-200 py-10 text-sm text-zinc-500">
        <div className="mx-auto w-full max-w-6xl px-4 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <span className="inline-block h-2.5 w-2.5 rounded-sm bg-black"></span>
            <span>FN AGENCY</span>
          </div>
          <div className="opacity-70">© {new Date().getFullYear()} — делаем рекламу, которую не проматывают.</div>
        </div>
      </footer>

      {/* QUIZ modal */}
      <AnimatePresence>
        {quizOpen && (
          <motion.div
            key="quiz"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 grid place-items-center bg-black/60 backdrop-blur-sm px-4"
          >
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 30, opacity: 0 }}
              className="w-full max-w-xl rounded-2xl border border-white/10 bg-white p-6 text-black"
            >
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-bold">Короткий квиз</h3>
                <button onClick={() => setQuizOpen(false)} className="opacity-60 hover:opacity-100">×</button>
              </div>

              <div className="mt-4">
                <div className="text-sm opacity-60">Шаг {step + 1} из {steps.length}</div>
                <div className="mt-2 text-lg font-semibold">{steps[step].q}</div>
                <div className="mt-4 grid gap-3">
                  {steps[step].options.map((o) => (
                    <button
                      key={o.v}
                      onClick={() => {
                        setAnswers((p) => ({ ...p, [steps[step].key]: o.v }));
                        if (step + 1 < steps.length) setStep(step + 1);
                        else {
                          setQuizOpen(false);
                          // простая финальная «квиз-квитанция»
                          alert(
                            "🔥 Твои ответы:\n" +
                            JSON.stringify({ ...answers, [steps[step].key]: o.v }, null, 2) +
                            "\n\nОставь контакт на CTA — вернёмся с планом."
                          );
                        }
                      }}
                      className="rounded-lg border px-4 py-3 text-left hover:border-black"
                    >
                      {o.label}
                    </button>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* COWARD modal */}
      <AnimatePresence>
        {cowardOpen && (
          <motion.div
            key="coward"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 grid place-items-center bg-black/60 backdrop-blur-sm px-4"
          >
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 30, opacity: 0 }}
              className="w-full max-w-md rounded-2xl border border-white/10 bg-white p-6 text-black"
            >
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-bold">Окей, можно лайтом</h3>
                <button onClick={() => setCowardOpen(false)} className="opacity-60 hover:opacity-100">×</button>
              </div>
              <p className="mt-3 text-sm opacity-80">
                Сделаем аккуратно: без банов, без паники, но всё равно цепко. Хочешь — оставь контакт, подберём формат.
              </p>
              <div className="mt-5 flex gap-3">
                <a
                  href="mailto:hello@fn.agency?subject=Лайт%20запуск"
                  className="rounded-full bg-black px-5 py-2 text-white hover:opacity-90"
                >
                  Написать на почту
                </a>
                <a
                  href="https://t.me/"
                  target="_blank"
                  className="rounded-full border px-5 py-2 hover:bg-black hover:text-white"
                >
                  Telegram
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
