import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// -----------------------------
// FN AGENCY — WTF Funnel Landing
// Single-file React component (TailwindCSS)
// -----------------------------

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

  const heroBadge = (
    <div className="inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs tracking-wide uppercase">
      <span className="font-medium">FN Agency</span>
      <span className="opacity-60">•</span>
      <span className="opacity-80">WTF Funnel</span>
    </div>
  );

  return (
    <div className="min-h-screen w-full bg-white text-black">
      {/* Background grid */}
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
              href="#lead"
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
            <br /> КОТОРЫЙ ВЫЗЫВАЕТ ПРИВЫКАНИЕ
          </motion.h1>
          <p className="mt-6 max-w-2xl text-base leading-relaxed opacity-80">
            Ломаем паттерны, собираем вирусные связки и запускаем трафик, который выделяет тебя из серой ленты. Никакой скучной
            корпоративщины — только креатив, который работает.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <button
              onClick={startQuiz}
              className="rounded-full bg-black px-6 py-3 text-sm font-semibold uppercase tracking-wider text-white hover:opacity-90"
            >
              Запустить воронку
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
              <span>• старт за 7 дней</span>
            </div>
          </div>

          <div className="mt-6 text-xs uppercase tracking-wider opacity-60">
            Работает в любом канале: Meta, TikTok, YouTube, VK, Яндекс.
          </div>
        </div>
      </section>

      {/* Promo strip */}
      <section className="border-y bg-black text-white">
        <div className="mx-auto max-w-6xl px-4 py-3 text-[11px] uppercase tracking-wider">
          ⚡ Предупреждение: этот маркетинг вызывает привыкание. Вход только для смелых.
        </div>
      </section>

      {/* Inside */}
      <section id="inside" className="relative">
        <div className="mx-auto max-w-6xl px-4 py-16 md:py-24">
          <h2 className="text-2xl font-extrabold uppercase tracking-tight md:text-4xl">Что получишь в первые 7 дней</h2>
          <p className="mt-3 max-w-2xl text-sm opacity-80">
            Быстрая упаковка + креативы + ленд-аттракцион + бот/квиз + запуск трафика. Без воды.
          </p>

          <div className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-3">
            {[
              { t: "Аудит & идея", d: "Находим небанальный инсайт и формулируем Big Idea.", k: "1 день" },
              { t: "Креативы", d: "Снимаем/собираем 5–10 провокационных крео под ЦА.", k: "1–2 дня" },
              { t: "Ленд-аттракцион", d: "Сайт, который сам по себе вирусится и сохраняется.", k: "1 день" },
              { t: "Бот/квиз", d: "Телеграм-воронка с переходами и триггерами.", k: "1 день" },
              { t: "Трафик", d: "Запуск связок в Meta / TikTok c отсевом мусора.", k: "1 день" },
              { t: "Метрики", d: "Дешборд и ежедневные короткие апдейты.", k: "каждый день" },
            ].map((c, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ delay: i * 0.05 }}
                className="group relative overflow-hidden rounded-2xl border bg-white p-5 shadow-sm"
              >
                <div className="absolute inset-0 -z-10 bg-[radial-gradient(120px_60px_at_20%_20%,rgba(0,0,0,0.08),transparent)] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                <div className="text-xs uppercase opacity-60">{c.k}</div>
                <div className="mt-1 text-lg font-bold uppercase">{c.t}</div>
                <div className="mt-2 text-sm opacity-80">{c.d}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section id="process" className="border-y bg-neutral-950 text-white">
        <div className="mx-auto max-w-6xl px-4 py-16 md:py-24">
          <h2 className="text-2xl font-extrabold uppercase tracking-tight md:text-4xl">Как это происходит</h2>
          <div className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-4">
            {[
              { n: "01", t: "Старт", d: "15-минутный созвон, бриф и доступы." },
              { n: "02", t: "Сборка", d: "Идея → крео → ленд → бот/квиз." },
              { n: "03", t: "Запуск", d: "Рекламные кампании + антибан-практики." },
              { n: "04", t: "Масштаб", d: "Тесты гипотез, оптимизация, рост бюджета." },
            ].map((s, i) => (
              <div key={i} className="rounded-2xl border p-5">
                <div className="text-xs opacity-60">{s.n}</div>
                <div className="mt-1 text-lg font-bold uppercase">{s.t}</div>
                <div className="mt-2 text-sm opacity-80">{s.d}</div>
              </div>
            ))}
          </div>

          <div className="mt-10 flex flex-wrap items-center justify-between gap-4 rounded-2xl border p-5">
            <div className="text-sm opacity-80">
              Каналы: <span className="opacity-100">Meta, TikTok, YouTube, VK, Яндекс</span> • Гео: РФ/СНГ/US/EU • Отчётность: ежедневная
            </div>
            <a
              href="#lead"
              className="rounded-full bg-white px-5 py-3 text-sm font-semibold uppercase tracking-wider text-black hover:opacity-90"
              onClick={startQuiz}
            >
              Пройти отбор
            </a>
          </div>
        </div>
      </section>

      {/* Social proof / punchy claims */}
      <section className="relative">
        <div className="mx-auto max-w-6xl px-4 py-16 md:py-24">
          <h2 className="text-2xl font-extrabold uppercase tracking-tight md:text-4xl">Где срабатывает нестандарт</h2>
          <div className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-3">
            {[
              { t: "Отели / рестораны", d: "Вирусные офферы, съёмка под TikTok, ленды-игры для бронирований." },
              { t: "Приложения / SaaS", d: "Продуктовые воронки, UGC, лид-магниты без скучных вебинаров." },
              { t: "Серые ниши", d: "Безопасные креативы, обходные связки, воронки в мессенджерах." },
            ].map((c, i) => (
              <div key={i} className="rounded-2xl border p-5">
                <div className="text-lg font-bold uppercase">{c.t}</div>
                <div className="mt-2 text-sm opacity-80">{c.d}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="border-t">
        <div className="mx-auto max-w-6xl px-4 py-16 md:py-24">
          <h2 className="text-2xl font-extrabолd uppercase tracking-tight md:text-4xl">Ответы на вопросы</h2>
          <div className="mt-8 space-y-4">
            {[
              {
                q: "Это для кого?",
                a: "Для проектов, где классика уже пробована или слишком скучна. Нужен быстрый тест гипотез с агрессивной креативной упаковкой.",
              },
              {
                q: "Какие бюджеты?",
                a: "Стартовые тесты обычно от $150–200 в день. Услуги агентства — от $1500 в месяц.",
              },
              {
                q: "Сколько занимает запуск?",
                a: "Подготовка 3–7 дней в зависимости от объёма съёмки и интеграций.",
              },
              {
                q: "Что по рискам/банам?",
                a: "Мы не идём в токсичные обещания и учитываем правила площадок, при этом сохраняем дерзкую подачу.",
              },
            ].map((f, i) => (
              <details key={i} className="group rounded-2xl border p-5">
                <summary className="cursor-pointer list-none text-lg font-semibold uppercase">
                  {f.q}
                  <span className="ml-2 opacity-40">+</span>
                </summary>
                <div className="mt-2 text-sm opacity-80">{f.a}</div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="lead" className="border-y bg-neutral-950 text-white">
        <div className="mx-auto max-w-6xl px-4 py-16 md:py-24">
          <div className="flex flex-col items-start gap-6 md:flex-row md:items-center md:justify-between">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs uppercase tracking-wider">
                Готов к обряду посвящения?
              </div>
              <h3 className="mt-4 text-3xl font-extrabold uppercase tracking-tight md:text-5xl">Начни запуск прямо сейчас</h3>
              <p className="mt-3 max-w-xl text-sm opacity-80">
                Нажми на кнопку, пройди мини-квиз и получи ссылку на Telegram для согласования старта.
              </p>
            </div>
            <div className="flex items-center gap-4">
              <button
                onClick={startQuiz}
                className="rounded-full bg-white px-6 py-3 text-sm font-semibold uppercase tracking-wider text-black hover:opacity-90"
              >
                Пройти мини-квиз
              </button>
              <a
                href="https://t.me/your_bot_here"
                target="_blank"
                rel="noreferrer"
                className="rounded-full border px-6 py-3 text-sm font-semibold uppercase tracking-wider hover:bg-white hover:text-black"
              >
                В Telegram
              </a>
            </div>
          </div>
          <div className="mt-6 text-xs uppercase tracking-wider opacity-70">
            <s className="opacity-50 mr-2">$3000</s> <span className="font-semibold">от $1500</span> • старт за 7 дней
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white">
        <div className="mx-auto max-w-6xl px-4 py-12 text-xs opacity-70">
          Переходя по ссылке на Telegram, вы даёте согласие на обработку персональных данных. Это промо-страница FN Agency.
        </div>
      </footer>

      {/* QUIZ MODAL */}
      <AnimatePresence>
        {quizOpen && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              initial={{ y: 24, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 24, opacity: 0 }}
              transition={{ type: "spring", stiffness: 140, damping: 16 }}
              className="w-full max-w-xl rounded-2xl bg-white p-6 shadow-2xl"
            >
              <div className="flex items-center justify-between">
                <div className="text-xs uppercase tracking-wider opacity-60">Отбор в воронку</div>
                <button onClick={closeQuiz} className="rounded-full border px-2 py-1 text-xs uppercase">Закрыть</button>
              </div>
              <div className="mt-3 text-2xl font-extrabold uppercase">Мини-квиз</div>

              {step < steps.length ? (
                <div className="mt-6">
                  <div className="text-sm opacity-80">{steps[step].q}</div>
                  <div className="mt-4 grid grid-cols-1 gap-2 sm:grid-cols-3">
                    {steps[step].options.map((o, idx) => (
                      <button
                        key={idx}
                        onClick={() => {
                          setAnswers({ ...answers, [steps[step].key]: o.v });
                          setStep(step + 1);
                        }}
                        className="rounded-xl border px-3 py-3 text-sm hover:bg-black hover:text-white"
                      >
                        {o.label}
                      </button>
                    ))}
                  </div>
                  <div className="mt-4 text-xs uppercase tracking-wider opacity-60">Шаг {step + 1} из {steps.length}</div>
                </div>
              ) : (
                <div className="mt-6">
                  <div className="text-sm opacity-80">Красавчик. Твои ответы сохранены:</div>
                  <ul className="mt-3 space-y-1 text-sm">
                    <li className="opacity-80">Бюджет: <span className="opacity-100">{answers.budget}</span></li>
                    <li className="opacity-80">Скорость: <span className="opacity-100">{answers.speed}</span></li>
                    <li className="opacity-80">Нестандарт: <span className="opacity-100">{answers.spice}</span></li>
                  </ul>
                  <div className="mt-5 flex flex-col gap-2 sm:flex-row">
                    <a
                      href="https://t.me/your_bot_here"
                      target="_blank"
                      rel="noreferrer"
                      className="flex-1 rounded-xl bg-black px-4 py-3 text-center text-sm font-semibold uppercase tracking-wider text-white hover:opacity-90"
                    >
                      Забронировать старт в Telegram
                    </a>
                    <button
                      onClick={closeQuiz}
                      className="flex-1 rounded-xl border px-4 py-3 text-sm uppercase tracking-wider hover:bg-black hover:text-white"
                    >
                      Сделать позже
                    </button>
                  </div>
                  <div className="mt-3 text-[11px] uppercase tracking-wider opacity-60">
                    Нажимая кнопку, вы соглашаетесь с обработкой персональных данных.
                  </div>
                </div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* COWARD MODAL */}
      <AnimatePresence>
        {cowardOpen && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              initial={{ y: 24, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 24, opacity: 0 }}
              transition={{ type: "spring", stiffness: 140, damping: 16 }}
              className="w-full max-w-md rounded-2xl bg-white p-6 shadow-2xl"
            >
              <div className="text-2xl font-extrabold uppercase">Понимаю 😅</div>
              <p className="mt-2 text-sm opacity-80">
                Нестандарт — это страшно. Но ещё страшнее — остаться в ленте, где тебя не замечают.
              </p>
              <div className="mt-4 flex flex-col gap-2 sm:flex-row">
                <button
                  onClick={() => {
                    setCowardOpen(false);
                    startQuiz();
                  }}
                  className="flex-1 rounded-xl bg-black px-4 py-3 text-sm font-semibold uppercase tracking-wider text-white hover:opacity-90"
                >
                  Ладно, пробуем
                </button>
                <button
                  onClick={() => setCowardOpen(false)}
                  className="flex-1 rounded-xl border px-4 py-3 text-sm uppercase tracking-wider hover:bg-black hover:text-white"
                >
                  Закрыть
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

