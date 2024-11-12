import React from "react";
import {
  ArrowRight,
  Users,
  BarChart,
  Send,
  BookOpen,
  Timer,
  Heart,
  Target,
} from "lucide-react";

const LandingPage = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-zinc-50">
      {/* Hero Section with modern asymmetric design */}
      <header className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-zinc-100 to-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_-20%,#ffd8cc_25%,transparent_50%)]"></div>
        <div className="container mx-auto px-4 sm:px-6 py-12 sm:py-24 relative z-10">
          <div className="max-w-5xl">
            {/* <div className="inline-block mb-4 px-4 py-1 bg-white/30 backdrop-blur-md rounded-full border border-zinc-200">
              <span className="text-orange-600 font-medium text-sm sm:text-base">
                TeamEdge HR Solutions
              </span>
            </div> */}
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold text-zinc-900 mb-6 sm:mb-8 leading-tight">
              Эффективные
              <span className="bg-gradient-to-r from-orange-600 to-orange-400 bg-clip-text text-transparent">
                {" "}
                HR-решения{" "}
              </span>
              для уверенного роста
            </h1>
            <p className="text-lg sm:text-xl text-zinc-600 mb-8 sm:mb-12 max-w-2xl">
              Настраиваю HR-процессы так, чтобы каждый сотрудник приносил
              максимальную ценность вашему бизнесу
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="https://t.me/affiliate_v"
                target="_blank"
                rel="noopener noreferrer"
                className="group w-full sm:w-auto px-6 sm:px-8 py-4 bg-zinc-900 text-white rounded-2xl flex items-center justify-center gap-2 hover:bg-zinc-800 transition-all"
              >
                Получить консультацию
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
              <button
                onClick={() => scrollToSection("services")}
                className="w-full sm:w-auto px-6 sm:px-8 py-4 bg-white/50 backdrop-blur-md text-zinc-900 rounded-2xl border border-zinc-200 hover:bg-white/80 transition-all flex items-center justify-center"
              >
                Смотреть услуги
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Features Section */}
      <section className="py-12 sm:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold text-zinc-900 mb-8 sm:mb-16 text-center">
              Преимущества
            </h2>
            <div className="space-y-6 sm:space-y-8">
              {[
                {
                  icon: Timer,
                  title:
                    "Снижение операционной нагрузки и освобождение времени для роста",
                  description:
                    "Вы сможете сосредоточиться на стратегическом развитии компании, передав HR-задачи на аутсорс. Я организую найм, адаптацию и мотивацию команды, что сократит вашу операционную нагрузку и даст больше свободы для принятия стратегических решений.",
                },
                {
                  icon: Heart,
                  title:
                    "Повышение вовлеченности и снижение текучки сотрудников",
                  description:
                    "Стабильная и вовлеченная команда — это основа бизнеса. Я настраиваю HR-процессы, которые мотивируют сотрудников и помогают удерживать ценных специалистов, создавая корпоративную культуру, где люди остаются надолго и работают на результат.",
                },
                {
                  icon: Target,
                  title:
                    "Оптимизация и настройка эффективных HR-процессов с первого дня",
                  description:
                    "Внедрение профессиональных HR-процессов помогает избежать типичных ошибок в управлении командой, которые ведут к потерям и текучке. Я подбираю решения, которые работают для вашего бизнеса, настраивая все, от найма до адаптации и 1:1 встреч, чтобы каждый сотрудник приносил ценность.",
                },
              ].map((feature, index) => (
                <div
                  key={index}
                  className="flex flex-col sm:flex-row gap-4 sm:gap-8 items-start p-6 sm:p-8 bg-zinc-50 rounded-3xl hover:shadow-lg transition-all"
                >
                  <feature.icon className="w-10 h-10 sm:w-12 sm:h-12 text-orange-500 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold text-zinc-900 mb-3 sm:mb-4">
                      {feature.title}
                    </h3>
                    <p className="text-base sm:text-lg text-zinc-600">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-8 sm:mt-12 text-center">
              <a
                href="https://t.me/affiliate_v"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 bg-zinc-900 text-white rounded-2xl hover:bg-zinc-800 transition-all gap-2"
              >
                Запросить консультацию
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* About Section with modern design */}
      <section className="py-12 sm:py-24 bg-zinc-50">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-3xl mx-auto">
            <div className="bg-gradient-to-br from-white to-zinc-50 p-6 sm:p-8 md:p-12 rounded-3xl border border-zinc-100">
              <h2 className="text-3xl sm:text-4xl font-bold text-zinc-900 mb-6 sm:mb-8">
                Обо мне
              </h2>
              <div className="space-y-4 sm:space-y-6 text-base sm:text-lg text-zinc-600">
                <p>
                  Меня зовут Виктория, и более 5 лет я помогаю бизнесам
                  выстраивать эффективные HR-процессы, которые действительно
                  работают на результат.
                </p>
                <p>
                  Мой подход основан на том, что HR — это не просто набор
                  процедур, а стратегический элемент бизнеса, способный
                  значительно влиять на его рост и развитие.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section with modern cards */}
      <section id="services" className="py-12 sm:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-2xl mx-auto text-center mb-8 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-zinc-900 mb-4">
              Мои услуги
            </h2>
            <p className="text-base sm:text-lg text-zinc-600">
              Комплексные решения для оптимизации HR-процессов вашей компании
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {[
              {
                title: "HR на аутсорсе",
                description:
                  "Полное ведение HR-процессов компании с фокусом на результат",
              },
              {
                title: "HR-аудит компании",
                description:
                  "Глубокий анализ и оптимизация существующих процессов",
              },
              {
                title: "Часовая консультация",
                description: "Экспертное решение конкретных HR-задач",
              },
              {
                title: "Реорганизация процессов",
                description: "Комплексная трансформация HR-системы",
              },
            ].map((service, index) => (
              <div
                key={index}
                className="group relative p-6 sm:p-8 bg-zinc-50 rounded-3xl hover:shadow-xl transition-all duration-300"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 to-transparent opacity-0 group-hover:opacity-100 rounded-3xl transition-opacity"></div>
                <div className="relative">
                  <h3 className="text-xl sm:text-2xl font-bold text-zinc-900 mb-3 sm:mb-4">
                    {service.title}
                  </h3>
                  <p className="text-base sm:text-lg text-zinc-600">
                    {service.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modern Footer */}
      <footer className="bg-zinc-900 text-zinc-400 py-8">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="flex flex-col items-center gap-4">
            {/* Social Icons */}
            <div className="flex gap-6">
              {/* Telegram Icon */}
              <a
                href="https://t.me/affiliate_v"
                target="_blank"
                rel="noopener noreferrer"
                className="text-zinc-400 hover:text-white transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M22 2L11 13" />
                  <path d="M22 2L15 22L11 13L2 9L22 2Z" />
                </svg>
              </a>
              <a
                href="https://instagram.com/davkavavtobuse"
                target="_blank"
                rel="noopener noreferrer"
                className="text-zinc-400 hover:text-white transition-colors"
              >
                {/* Instagram Icon */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
              </a>
              <a
                href="https://linkedin.com/in/victoria-hr"
                target="_blank"
                rel="noopener noreferrer"
                className="text-zinc-400 hover:text-white transition-colors"
              >
                {/* LinkedIn Icon */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                  <rect x="2" y="9" width="4" height="12" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
              </a>
            </div>

            {/* Copyright */}
            <div className="text-sm">
              © {new Date().getFullYear()} HR Victoria. All Rights Reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
