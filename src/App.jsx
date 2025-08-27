import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Contacts
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

  const Card = ({ children }) => (
    <div className="rounded-2xl border border-zinc-200 bg-white p-5 shadow-sm">{children}</div>
  );

  return (
    <div className="min-h-screen w-full bg-white text-black">
      {/* HEADER */}
      <header className="sticky top-0 z-40 border-b bg-white/90 backdrop-blur">
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
          <a
            href="#cta"
            className="rounded-full border border-black px-4 py-2 text-xs font-semibold uppercase tracking-wider hover:bg-black hover:text-white"
          >
            Связаться
          </a>
        </div>
      </header>

      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="mx-auto max-w-6xl px-4 py-16 md:py-24">
          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: "spring", stiffness: 90, damping: 14 }}
            className="text-4xl font-black leading-[1.05] tracking-tight sm:text-5xl md:text-7xl"
          >
            Нестандартный маркетинг, <br className="hidden sm:block" />
            который реально <span className="text-red-600">ебашит</span>
          </motion.h1>

          <p className="mt-6 max-w-2xl text-base leading-relaxed opacity-80">
            Ломаем паттерны, собираем вирусные связки и запускаем трафик, который выдёргивает тебя из серой ленты.
            Никакой скучной корпоративщины — только мясо, мемы и связки, которые приносят бабки.
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
      <section id="seven" className="border-t bg-white">
        <div className="mx-auto max-w-6xl px-4 py-16">
          <h2 className="text-3xl font-black sm:text-4xl">Что получишь в первые 7 дней</h2>
          <p className="mt-3 max-w-2xl opacity-80">
            Быстрая упаковка + креативы + ленд-аттракцион + бот/квиз + запуск трафика. Без воды.
          </p>

          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            <Card>
              <div className="text-xs font-semibold uppercase opacity-60">1 день</div>
              <div className="mt-2 text-xl font-bold">Аудит & Идея</div>
              <p className="mt-2 opacity-80">Находим небанальный инсайт и формулируем Big Idea.</p>
            </Card>

            <Card>
              <div className="text-xs font-semibold uppercase opacity-60">1–2 дня</div>
              <div className="mt-2 text-xl font-bold">Креативы</div>
              <p className="mt-2 opacity-80">Собираем 5–10 провокационных крео под ЦА.</p>
            </Card>

            <Card>
              <div className="text-xs font-semibold uppercase opacity-60">1 день</div>
              <div className="mt-2 text-xl font-bold">Ленд-аттракцион</div>
              <p className="mt-2 opacity-80">Сайт-приманка, который сам по себе вирусится и сохраняется.</p>
            </Card>

            <Card>
              <div className="text-xs font-semibold uppercase opacity-60">каждый день</div>
              <div className="mt-2 text-xl font-bold">Метрики</div>
              <p className="mt-2 opacity-80">Дешборд и короткие апдейты, без лапши на уши.</p>
            </Card>
          </div>
        </div>
      </section>

      {/* PROCESS (dark) */}
      <section id="process" className="border-t bg-black text-white">
        <div className="mx-auto max-w-6xl px-4 py-16">
          <h2 className="text-3xl font-black sm:text-4xl">Как это происходит</h2>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {[
              { step: "01", title: "Старт", body: "15-минутный созвон, бриф и доступы." },
              { step: "02", title: "Сборка", body: "Идея → крео → ленд → бот/квиз." },
              { step: "03", title: "Трафик", body: "Запуск связок в Meta/TikTok с отсевом мусора." },
              { step: "04", title: "Масштаб", body: "Гипотезы, оптимизация, рост бюджета." },
            ].map((b) => (
              <div key={b.step} className="rounded-2xl border border-white/15 bg-white/5 p-5">
                <div className="text-xs font-semibold uppercase opacity-60">{b.step}</div>
                <div className="mt-2 text-xl font-bold">{b.title}</div>
                <p className="mt-2 opacity-80">{b.body}</p>
              </div>
            ))}
          </div>

          <div className="mt-6 rounded-2xl border border-white/15 p-4 text-sm opacity-80">
            Каналы: Meta, TikTok, YouTube, VK, Яндекс • Гео: РФ/СНГ/US/EU • Отчётность: ежедневная
          </div>

          <div className="mt-6">
            <a
              href="#cta"
              className="inline-block rounded-full bg-white px-6 py-3 font-semibold text-black hover:bg-zinc-200"
            >
              Пройти отбор
            </a>
          </div>
        </div>
      </section>

      {/* WHERE IMPACTS */}
      <section id="impact" className="border-t bg-white">
        <div className="mx-auto max-w-6xl px-4 py-16">
          <h2 className="text-3xl font-black sm:text-4xl">Где срабатывает нестандарт</h2>

          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            <Card>
              <div className="text-xl font-bold">Отели / Рестораны</div>
              <p className="mt-2 opacity-80">Вирусные офферы, съёмка под TikTok, ленд-игры для бронирований.</p>
            </Card>

            <Card>
              <div className="text-xl font-bold">Приложения / SaaS</div>
              <p className="mt-2 opacity-80">Продуктовые воронки, UGC, лид-магниты без скучных вебинаров.</p>
            </Card>

            <Card>
              <div className="text-xl font-bold">Серые ниши</div>
              <p className="mt-2 opacity-80">Обходные креативы и связки в мессенджерах. Аккуратно, но громко.</p>
            </Card>

            <Card>
              <div className="text-xl font-bold">Личный бренд</div>
              <p className="mt-2 opacity-80">Мясные сторис-воронки и контент-механики с retention.</p>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="border-t bg-white">
        <div className="mx-auto max-w-6xl px-4 py-16">
          <h2 className="text-3xl font-black sm:text-4xl">Ответы на вопросы</h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {[
              {
                q: "Это для кого?",
                a: "Для смелых бизнесов и проектов, где можно позволить себе дерзкий тон и быстрые тесты.",
              },
              {
                q: "Какие риски?",
                a: "Нестандарт — это всегда тесты. Мы быстро режем слабое, оставляем сильное и масштабируем.",
              },
              {
                q: "Договор/документы?",
                a: "Да, работаем официально. Акт/счёт/договор — без бюрократической боли.",
              },
              {
                q: "Сколько стоит?",
                a: "Пакеты от $1500. Старт за 7 дней. Точный прайс после короткого созвона.",
              },
            ].map((item, i) => (
              <Card key={i}>
                <div className="text-lg font-semibold">{item.q}</div>
                <p className="mt-2 opacity-80">{item.a}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="cta" className="border-t bg-white">
        <div className="mx-auto max-w-6xl px-4 py-16">
          <div className="rounded-2xl border border-zinc-200 bg-zinc-50 p-6 sm:p-8">
            <h3 className="text-2xl font-black sm:text-3xl">Готов ворваться?</h3>
            <p className="mt-2 opacity-80">
              Пиши в Telegram или на почту — начнём с 15-минутного созвона и двинем без воды.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href={TELEGRAM_URL}
                target="_blank"
                rel="noreferrer"
                className="rounded-full bg-black px-6 py-3 text-sm font-semibold uppercase tracking-wider text-white hover:opacity-90"
              >
                Написать в Telegram
              </a>
              <a
                href={`mailto:${EMAIL}`}
                className="rounded-full border border-black px-6 py-3 text-sm font-semibold uppercase tracking-wider hover:bg-black hover:text-white"
              >
                Написать на почту
              </a>
              <button
                type="button"
                onClick={startQuiz}
                className="rounded-full border border-black px-6 py-3 text-sm font-semibold uppercase tracking-wider hover:bg-black hover:text-white"
              >
                Пройти квиз
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t bg-white">
        <div className="mx-auto max-w-6xl px-4 py-8 text-sm opacity-70">
          © {new Date().getFullYear()} FN Agency. Сделано с любовью и долей дерзости.
        </div>
      </footer>

      {/* QUIZ MODAL */}
      <AnimatePresence>
        {quizOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/70"
          >
            <div className="relative w-full max-w-md rounded-2xl bg-white p-6">
              <h3 className="mb-3 text-xl font-bold">Квиз</h3>
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
              <button
                onClick={closeModals}
                className="absolute right-3 top-3 text-zinc-500"
                aria-label="Закрыть"
              >
                ✕
              </button>
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
            <div className="relative w-full max-w-sm rounded-2xl bg-white p-6 text-center">
              <h2 className="mb-3 text-xl font-bold">Понимаю 😅</h2>
              <p className="mb-4">
                Нестандарт — это страшно. Но ещё страшнее — остаться в ленте, где тебя не замечают.
              </p>
              <a
                href={TELEGRAM_URL}
                target="_blank"
                rel="noreferrer"
                className="block rounded-full bg-black px-6 py-3 font-semibold text-white hover:bg-zinc-800"
              >
                Ладно, пробуем
              </a>
              <button
                onClick={closeModals}
                className="mt-3 w-full rounded-full border border-zinc-300 px-6 py-3 font-medium hover:bg-zinc-50"
              >
                Закрыть
              </button>
              <button
                onClick={closeModals}
                className="absolute right-3 top-3 text-zinc-500"
                aria-label="Закрыть"
              >
                ✕
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

    </div>
  );
}

