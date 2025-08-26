import React from "react";

export default function WTFunnelLanding() {
  return (
    <div className="bg-black text-white font-sans">
      {/* HERO */}
      <section className="min-h-screen flex flex-col justify-center items-center text-center px-6">
        <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6 text-yellow-400">
          🚀 НЕСТАНДАРТНЫЙ МАРКЕТИНГ, КОТОРЫЙ Е*АШИТ
        </h1>
        <p className="text-xl md:text-2xl max-w-3xl mb-8">
          Ломаем е*аные паттерны, п*здим внимание у конкурентов и запускаем
          связки, которые рвут нах*й серую ленту. Никакой корпоративной х*йни —
          только чистый креатив, который работает.
        </p>
        <div className="flex gap-4">
          <a
            href="#quiz"
            className="bg-yellow-400 text-black px-6 py-3 rounded-xl font-bold text-lg"
          >
            🚀 Запустить е*учую воронку
          </a>
          <a
            href="#"
            className="border border-yellow-400 text-yellow-400 px-6 py-3 rounded-xl font-bold text-lg"
          >
            Я ссыкую 😱
          </a>
        </div>
      </section>

      {/* ЧТО ВНУТРИ */}
      <section className="py-24 px-6 bg-gray-900 text-center">
        <h2 className="text-4xl font-bold mb-10 text-yellow-400">
          ⚡ Что внутри этой е*аной магии?
        </h2>
        <ul className="space-y-6 text-lg max-w-3xl mx-auto">
          <li>🔥 Вирусные связки, которые ху*рят CTR так, что конкуренты плачут.</li>
          <li>💣 Мемы, рилсы и видосы, которые цепляют и не отпускают, б*я.</li>
          <li>🚀 Трафик, который не просто кликает, а покупает, с*ка.</li>
          <li>🤯 Автоматизация так, что ты забудешь, что такое ручная х*йня.</li>
        </ul>
      </section>

      {/* ПРОЦЕСС */}
      <section className="py-24 px-6 bg-black text-center">
        <h2 className="text-4xl font-bold mb-10 text-yellow-400">
          🛠 Как мы е*ашим процесс
        </h2>
        <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
          <div className="p-6 border border-yellow-400 rounded-xl">
            <h3 className="text-2xl font-bold mb-4">1. Разъ*бываем аналитику</h3>
            <p>
              Смотрим, где у тебя течёт, и затыкаем дыры так, чтобы больше не
              сливал х*й знает куда.
            </p>
          </div>
          <div className="p-6 border border-yellow-400 rounded-xl">
            <h3 className="text-2xl font-bold mb-4">2. Делаем крео</h3>
            <p>
              Мемы, рилсы, тексты — всё, что е*шит по глазам и вызывает зависимость.
            </p>
          </div>
          <div className="p-6 border border-yellow-400 rounded-xl">
            <h3 className="text-2xl font-bold mb-4">3. Льём как черти</h3>
            <p>
              Врубаем трафик и не отпускаем, пока у тебя не зазвенит касса,
              б*я.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 px-6 bg-gray-900">
        <h2 className="text-4xl font-bold mb-10 text-center text-yellow-400">
          ❓ Часто за*бываемые вопросы
        </h2>
        <div className="max-w-3xl mx-auto space-y-6">
          <div>
            <h3 className="text-2xl font-bold">А это точно работает?</h3>
            <p className="text-lg">
              Да нах*й, если бы не работало — мы бы не тратили время. Работает,
              и как.
            </p>
          </div>
          <div>
            <h3 className="text-2xl font-bold">Сколько это стоит?</h3>
            <p className="text-lg">
              От $1500. Дёшево не будет — за п*здоболами иди в другое место.
            </p>
          </div>
          <div>
            <h3 className="text-2xl font-bold">А вдруг я солью бюджет?</h3>
            <p className="text-lg">
              Сольёшь — значит, долбо*б. Но с нами шанс минимальный, потому что
              мы всё тестим, как е*анутые.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 bg-black text-center">
        <h2 className="text-5xl font-bold mb-8 text-yellow-400">
          🚀 Готов е*бануть рынок?
        </h2>
        <a
          href="#"
          className="bg-yellow-400 text-black px-10 py-5 rounded-xl font-extrabold text-2xl"
        >
          Связаться нах*й
        </a>
      </section>

      {/* FOOTER */}
      <footer className="py-6 text-center text-sm bg-gray-900 text-gray-400">
        © {new Date().getFullYear()} FN AGENCY — делаем так, чтобы твой маркетинг
        е*ашил.  
      </footer>
    </div>
  );
}
