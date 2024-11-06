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
        <div className="container mx-auto px-6 py-24 relative z-10">
          <div className="max-w-5xl">
            <div className="inline-block mb-4 px-4 py-1 bg-white/30 backdrop-blur-md rounded-full border border-zinc-200">
              <span className="text-orange-600 font-medium">HR Solutions</span>
            </div>
            <h1 className="text-6xl md:text-7xl font-bold text-zinc-900 mb-8 leading-tight">
              Эффективные
              <span className="bg-gradient-to-r from-orange-600 to-orange-400 bg-clip-text text-transparent">
                {" "}
                HR-решения{" "}
              </span>
              для уверенного роста
            </h1>
            <p className="text-xl text-zinc-600 mb-12 max-w-2xl">
              Настраиваю HR-процессы так, чтобы каждый сотрудник приносил
              максимальную ценность вашему бизнесу
            </p>
            <div className="flex flex-wrap gap-4">
              <button
                onClick={() => scrollToSection("contact")}
                className="group px-8 py-4 bg-zinc-900 text-white rounded-2xl flex items-center gap-2 hover:bg-zinc-800 transition-all"
              >
                Получить консультацию
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
              <button
                onClick={() => scrollToSection("services")}
                className="px-8 py-4 bg-white/50 backdrop-blur-md text-zinc-900 rounded-2xl border border-zinc-200 hover:bg-white/80 transition-all"
              >
                Смотреть услуги
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Features Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-zinc-900 mb-16 text-center">
              Преимущества
            </h2>
            <div className="space-y-12">
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
                  className="flex gap-8 items-start p-8 bg-zinc-50 rounded-3xl hover:shadow-lg transition-all"
                >
                  <feature.icon className="w-12 h-12 text-orange-500 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-bold text-zinc-900 mb-4">
                      {feature.title}
                    </h3>
                    <p className="text-zinc-600">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-12 text-center">
              <button
                onClick={() => scrollToSection("contact")}
                className="group px-8 py-4 bg-zinc-900 text-white rounded-2xl flex items-center gap-2 hover:bg-zinc-800 transition-all mx-auto"
              >
                Запросить консультацию
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section with modern design */}
      <section className="py-24 bg-zinc-50">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="bg-gradient-to-br from-white to-zinc-50 p-12 rounded-3xl border border-zinc-100">
              <h2 className="text-4xl font-bold text-zinc-900 mb-8">Обо мне</h2>
              <div className="space-y-6 text-zinc-600">
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
            <div className="aspect-square bg-zinc-100 rounded-3xl">
              {/* Placeholder for image */}
              <img
                src="/api/placeholder/600/600"
                alt="Victoria"
                className="w-full h-full object-cover rounded-3xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section with modern cards */}
      <section id="services" className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-bold text-zinc-900 mb-4">
              Мои услуги
            </h2>
            <p className="text-zinc-600">
              Комплексные решения для оптимизации HR-процессов вашей компании
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: "HR на аутсорсе",
                description:
                  "Полное ведение HR-процессов компании с фокусом на результат",
                price: "от $500",
                icon: Users,
              },
              {
                title: "HR-аудит компании",
                description:
                  "Глубокий анализ и оптимизация существующих процессов",
                price: "от $800",
                icon: BarChart,
              },
              {
                title: "Часовая консультация",
                description: "Экспертное решение конкретных HR-задач",
                price: "$150/час",
                icon: Send,
              },
              {
                title: "Реорганизация процессов",
                description: "Комплексная трансформация HR-системы",
                price: "от $3000",
                icon: BookOpen,
              },
            ].map((service, index) => (
              <div
                key={index}
                className="group relative p-8 bg-zinc-50 rounded-3xl hover:shadow-xl transition-all duration-300"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 to-transparent opacity-0 group-hover:opacity-100 rounded-3xl transition-opacity"></div>
                <div className="relative">
                  <service.icon className="w-12 h-12 text-orange-500 mb-6" />
                  <h3 className="text-2xl font-bold text-zinc-900 mb-4">
                    {service.title}
                  </h3>
                  <p className="text-zinc-600 mb-6">{service.description}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-orange-500 font-semibold">
                      {service.price}
                    </span>
                    <button className="text-zinc-900 font-medium flex items-center gap-2 group-hover:text-orange-500 transition-colors">
                      Подробнее
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modern Contact Form */}
      <section id="contact" className="py-24 bg-zinc-50">
        <div className="container mx-auto px-6">
          <div className="max-w-xl mx-auto">
            <div className="bg-white p-12 rounded-3xl shadow-sm">
              <h2 className="text-3xl font-bold text-zinc-900 mb-8">
                Связаться со мной
              </h2>

              <form
                name="contact"
                method="POST"
                data-netlify="true"
                className="space-y-6"
                netlify-honeypot="bot-field"
              >
                <input type="hidden" name="form-name" value="contact" />
                <p className="hidden">
                  <label>
                    Don't fill this out if you're human:{" "}
                    <input name="bot-field" />
                  </label>
                </p>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-zinc-700">
                    Ваше имя
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    className="w-full px-4 py-3 bg-zinc-50 border border-zinc-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 transition-all"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-zinc-700">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    className="w-full px-4 py-3 bg-zinc-50 border border-zinc-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 transition-all"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-zinc-700">
                    Сообщение
                  </label>
                  <textarea
                    name="message"
                    required
                    rows={4}
                    className="w-full px-4 py-3 bg-zinc-50 border border-zinc-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 transition-all"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full px-8 py-4 bg-zinc-900 text-white rounded-xl hover:bg-zinc-800 transition-all flex items-center justify-center gap-2"
                >
                  Отправить
                  <ArrowRight className="w-4 h-4" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Modern Footer */}
      <footer className="bg-zinc-900 text-zinc-400 py-24">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-white">TeamEdge</h3>
              <p className="text-sm">
                Эффективные HR-решения для современного бизнеса
              </p>
            </div>
            <div className="space-y-4">
              <h4 className="text-sm font-semibold text-white">Услуги</h4>
              <ul className="space-y-2 text-sm">
                <li>HR на аутсорсе</li>
                <li>HR-аудит</li>
                <li>Консультации</li>
                <li>Реорганизация процессов</li>
              </ul>
            </div>
            <div className="space-y-4">
              <h4 className="text-sm font-semibold text-white">Информация</h4>
              <ul className="space-y-2 text-sm">
                <li>Обо мне</li>
                <li>Кейсы</li>
                <li>Блог</li>
              </ul>
            </div>
            <div className="space-y-4">
              <h4 className="text-sm font-semibold text-white">Контакты</h4>
              <ul className="space-y-2 text-sm">
                <li>contact@teamedge.com</li>
                <li>Telegram: @teamedge</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-zinc-800 mt-16 pt-8 text-sm text-center">
            © 2024 TeamEdge. Все права защищены.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
