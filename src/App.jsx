import React from "react";

export default function App() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-black text-white">
      <h1 className="text-4xl font-bold mb-4 text-green-400">
        🚀 FN AGENCY
      </h1>
      <p className="text-lg mb-6 text-gray-300">
        Лендинг успешно работает на Vercel + React + Tailwind 🎉
      </p>
      <a
        href="#contact"
        className="px-6 py-3 bg-green-500 hover:bg-green-600 rounded-lg text-black font-semibold transition"
      >
        Связаться с нами
      </a>
    </main>
  );
}
