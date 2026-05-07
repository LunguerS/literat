import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function LiteraryHeroesSite() {
  const [selectedHero, setSelectedHero] = useState(null);

  const heroes = [
    {
      owner: "Радомир",
      hero: "Стивен Дедал",
      work: "Улисс — Джеймс Джойс",
      image:
        "https://comicvine.gamespot.com/a/uploads/scale_medium/11/111746/3161820-stephen-portrait-color.png",
      summaryLink: "#",
      description:
        "Стивен Дедал — один из главных героев романа «Улисс» Джеймса Джойса. Он является образованным, творческим и очень задумчивым человеком, который постоянно размышляет о жизни, искусстве, религии и человеческой свободе. Герой часто чувствует себя одиноким и непонятым окружающими людьми. Стивен стремится найти своё место в мире и понять самого себя, поэтому его мысли и внутренние переживания занимают важную часть произведения.",
    },
    {
      owner: "Тимофей",
      hero: "Илья Обломов",
      work: "Обломов — Иван Гончаров",
      image: "https://avatars.mds.yandex.net/i?id=ec62bb983d464fce563b9177044accb879bfd8b3-5844149-images-thumbs&n=13",
      summaryLink: "#",
      description:
        "Илья Обломов — главный герой романа Ивана Гончарова «Обломов». Он добрый, спокойный и мечтательный человек, который не любит спешку и предпочитает проводить время дома. Обломов часто откладывает важные дела и живёт воспоминаниями и мечтами о спокойной жизни. Несмотря на свою лень и нерешительность, он остаётся искренним и честным человеком. Автор показывает через этого героя проблему бездействия и невозможности изменить свою жизнь.",
    },
  ];

  if (!selectedHero) {
    return (
      <AnimatePresence mode="wait">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.4 }}
          className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-700 flex items-center justify-center p-6 text-white"
        >
          <div className="text-center max-w-3xl">
            <h1 className="text-5xl font-bold mb-6">
              Любимые литературные герои
            </h1>

            <p className="text-lg text-slate-300 mb-10 leading-relaxed">
              Добро пожаловать на сайт Радомира и Тимофея.
              Выберите, героя какого пользователя вы хотите посмотреть.
            </p>

            <div className="flex flex-col md:flex-row gap-6 justify-center">
              {heroes.map((item, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedHero(item)}
                  className="bg-blue-500 hover:bg-blue-600 transition px-10 py-5 rounded-3xl text-2xl font-bold shadow-2xl"
                >
                  {item.owner}
                </button>
              ))}
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
    );
  }

  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{ opacity: 0, x: 80 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -80 }}
        transition={{ duration: 0.5 }}
        className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-700 text-white p-6"
      >
        <div className="max-w-6xl mx-auto">
          <header className="text-center mb-12">
            <h1 className="text-5xl font-bold mb-4">
              Любимые литературные герои
            </h1>

            <p className="text-lg text-slate-300 max-w-2xl mx-auto">
              Добро пожаловать на страницу героя.
            </p>
          </header>

          <section className="flex justify-center">
            <div className="bg-white/10 backdrop-blur-md rounded-3xl shadow-2xl p-6 border border-white/20 max-w-xl w-full">
              <div className="flex flex-col items-center text-center">
                <button
                  onClick={() => setSelectedHero(null)}
                  className="self-start mb-4 bg-slate-700 hover:bg-slate-600 px-4 py-2 rounded-xl transition"
                >
                  ← Назад
                </button>

                <h2 className="text-3xl font-bold mb-2">
                  {selectedHero.hero}
                </h2>

                <p className="text-slate-300 mb-4">
                  Герой {selectedHero.owner}
                </p>

                <img
                  src={selectedHero.image}
                  alt={selectedHero.hero}
                  className="w-[300px] h-[400px] object-cover rounded-2xl border-4 border-white/20 mb-5"
                />

                <p className="text-slate-200 mb-2 font-semibold">
                  {selectedHero.work}
                </p>

                <p className="text-slate-300 mb-5 leading-relaxed">
                  {selectedHero.description}
                </p>

                <a
                  href={selectedHero.summaryLink}
                  target="_blank"
                  rel="noreferrer"
                  className="bg-blue-500 hover:bg-blue-600 transition px-5 py-3 rounded-2xl font-semibold shadow-lg mb-6"
                >
                  Краткое содержание произведения
                </a>
              </div>
            </div>
          </section>

          <footer className="text-center mt-14 text-slate-400">
            © 2026 LunguerS aka Радомир
          </footer>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
