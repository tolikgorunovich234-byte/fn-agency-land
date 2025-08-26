import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// ================================
// FN AGENCY — WTF Funnel Landing
// ================================

export default function WTFunnelLanding() {
  const [quizOpen, setQuizOpen] = useState(false);
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState({ budget: "", speed: "", spice: "" });

  const startQuiz = () => {
    setQuizOpen(true);
    setStep(0);
    setAnswers({ budget: "", speed: "", spice: "" });
  };

  const questions = [
    {
      q: "Какой дневной бюджет на тесты тебя не ебёт?",
      options: [
        { v: "$50–100", label: "$50–100" },
        { v: "$150–200", label: "$150–200" },
        { v: "$300+", label: "$300+" },
      ],
      key: "budget",
    },
    {
      q: "Через сколько дней тебе нахуй нужны заявки?",
      options: [
        { v: "3–5 дней", label: "3–5 дней" },
        { v: "7 дней", label: "7 дней" },
        { v: "14 дней", label: "14 дней" },
      ],
      key: "speed",
    },
    {
      q: "Сколько пиздеца выдержит твой бренд?",
      options: [
        { v: "Чуть-чуть", label: "Чуть-чуть, аккуратно" },
        { v: "Средне", label: "По-жёстче, но без бана" },
        { v: "По максимуму", label: "Ебашим жесть" },
      ],
      key: "spice",
    },
  ];

  const current = questions[step];

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-black text-yellow-400 font-mono">
      <h1 className="text-4xl mb-6">FN AGENCY 🚀</h1>
      {!quizOpen && (
        <button
          className="bg-yellow-400 text-black px-6 py-3 rounded-xl font-bold hover:bg-yellow-300 transition"
          onClick={startQuiz}
        >
          Запустить ебанутую воронку
        </button>
      )}

      <AnimatePresence>
        {quizOpen && current && (
          <motion.div
            key={step}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            className="mt-6 w-full max-w-md bg-gray-900 p-6 rounded-xl shadow-xl"
          >
            <h2 className="text-xl mb-4">{current.q}</h2>
            <div className="flex flex-col gap-3">
              {current.options.map((o) => (
                <button
                  key={o.v}
                  onClick={() => {
                    setAnswers((prev) => ({ ...prev, [current.key]: o.v }));
                    if (step + 1 < questions.length) {
                      setStep(step + 1);
                    } else {
                      alert("🔥 Твои ответы: " + JSON.stringify(answers, null, 2));
                      setQuizOpen(false);
                    }
                  }}
                  className="px-4 py-2 bg-yellow-400 text-black rounded-md hover:bg-yellow-300"
                >
                  {o.label}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
