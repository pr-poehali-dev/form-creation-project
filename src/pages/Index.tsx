import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";
import InfoForm from "@/components/InfoForm";

const Index = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Здесь будет обработка формы
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b bg-white/80 backdrop-blur-md sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <nav className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Icon name="Code" size={32} className="text-blue-600" />
              <span className="text-xl font-semibold text-gray-900">
                TechFlow
              </span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a
                href="#products"
                className="text-gray-600 hover:text-blue-600 transition-colors"
              >
                Продукты
              </a>
              <a
                href="#clients"
                className="text-gray-600 hover:text-blue-600 transition-colors"
              >
                Клиенты
              </a>
              <a
                href="#news"
                className="text-gray-600 hover:text-blue-600 transition-colors"
              >
                Новости
              </a>
              <a
                href="#contact"
                className="text-gray-600 hover:text-blue-600 transition-colors"
              >
                Контакты
              </a>
            </div>
            <Button className="bg-blue-600 hover:bg-blue-700">
              <Icon name="Calendar" size={16} className="mr-2" />
              Демо
            </Button>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge variant="outline" className="mb-4">
                <Icon name="Zap" size={14} className="mr-2" />
                IT-решения нового поколения
              </Badge>
              <h1 className="text-5xl font-bold text-gray-900 mb-6 leading-tight">
                Трансформируйте свой бизнес с помощью{" "}
                <span className="text-blue-600">аналитики</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Современные CRM-системы, продвинутая аналитика и
                персонализированные решения для вашего роста
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                  <Icon name="Play" size={20} className="mr-2" />
                  Посмотреть демо
                </Button>
                <Button size="lg" variant="outline">
                  <Icon name="MessageCircle" size={20} className="mr-2" />
                  Консультация
                </Button>
              </div>
            </div>
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <h3 className="text-2xl font-semibold mb-6 text-gray-900">
                Получить консультацию
              </h3>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <Input
                    name="name"
                    placeholder="Ваше имя"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="h-12"
                  />
                </div>
                <div>
                  <Input
                    name="email"
                    type="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="h-12"
                  />
                </div>
                <div>
                  <Input
                    name="company"
                    placeholder="Компания"
                    value={formData.company}
                    onChange={handleInputChange}
                    className="h-12"
                  />
                </div>
                <div>
                  <Textarea
                    name="message"
                    placeholder="Расскажите о вашем проекте"
                    value={formData.message}
                    onChange={handleInputChange}
                    className="min-h-[100px]"
                  />
                </div>
                <Button
                  type="submit"
                  className="w-full h-12 bg-blue-600 hover:bg-blue-700"
                >
                  Отправить заявку
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Наши продукты
            </h2>
            <p className="text-xl text-gray-600">
              Комплексные решения для цифровой трансформации
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="group hover:shadow-xl transition-all duration-300 border-0 shadow-md">
              <CardHeader className="pb-4">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <Icon name="Users" size={24} className="text-blue-600" />
                </div>
                <CardTitle className="text-xl">CRM-система</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Управление клиентами, автоматизация продаж и интеграция с
                  внешними системами
                </p>
                <ul className="text-sm text-gray-500 space-y-2 mb-6">
                  <li>• Автоматизация воронки продаж</li>
                  <li>• Интеграция с телефонией</li>
                  <li>• Мобильное приложение</li>
                </ul>
                <Button
                  variant="outline"
                  className="w-full group-hover:bg-blue-600 group-hover:text-white transition-colors"
                >
                  Подробнее
                </Button>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 border-0 shadow-md">
              <CardHeader className="pb-4">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                  <Icon name="BarChart3" size={24} className="text-green-600" />
                </div>
                <CardTitle className="text-xl">Аналитика</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Продвинутая аналитика данных с машинным обучением и
                  прогнозированием
                </p>
                <ul className="text-sm text-gray-500 space-y-2 mb-6">
                  <li>• Прогнозирование трендов</li>
                  <li>• Интерактивные дашборды</li>
                  <li>• Автоматические отчеты</li>
                </ul>
                <Button
                  variant="outline"
                  className="w-full group-hover:bg-green-600 group-hover:text-white transition-colors"
                >
                  Подробнее
                </Button>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 border-0 shadow-md">
              <CardHeader className="pb-4">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                  <Icon name="Rocket" size={24} className="text-purple-600" />
                </div>
                <CardTitle className="text-xl">Демо-платформа</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Интерактивные демонстрации продуктов с возможностью
                  тестирования
                </p>
                <ul className="text-sm text-gray-500 space-y-2 mb-6">
                  <li>• Песочница для тестирования</li>
                  <li>• Обучающие материалы</li>
                  <li>• Техническая поддержка</li>
                </ul>
                <Button
                  variant="outline"
                  className="w-full group-hover:bg-purple-600 group-hover:text-white transition-colors"
                >
                  Попробовать
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Clients Section */}
      <section id="clients" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Наши клиенты
            </h2>
            <p className="text-xl text-gray-600">
              Более 500+ компаний доверяют нам
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "FinTech Corp",
                growth: "+150%",
                description: "Увеличение эффективности продаж",
              },
              {
                name: "RetailPro",
                growth: "+85%",
                description: "Автоматизация процессов",
              },
              {
                name: "LogisticMax",
                growth: "+200%",
                description: "Оптимизация логистики",
              },
            ].map((client, index) => (
              <Card key={index} className="text-center border-0 shadow-md">
                <CardContent className="pt-6">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon name="Building" size={32} className="text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{client.name}</h3>
                  <div className="text-3xl font-bold text-blue-600 mb-2">
                    {client.growth}
                  </div>
                  <p className="text-gray-600">{client.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* News Section */}
      <section id="news" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Новости и обновления
            </h2>
            <p className="text-xl text-gray-600">
              Следите за последними трендами в IT
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Новая версия CRM 3.0",
                date: "15 дек 2024",
                category: "Продукт",
              },
              {
                title: "AI в аналитике данных",
                date: "12 дек 2024",
                category: "Технологии",
              },
              {
                title: "Партнерство с AWS",
                date: "8 дек 2024",
                category: "Компания",
              },
            ].map((article, index) => (
              <Card
                key={index}
                className="group hover:shadow-xl transition-all duration-300 border-0 shadow-md"
              >
                <CardContent className="pt-6">
                  <Badge variant="secondary" className="mb-4">
                    {article.category}
                  </Badge>
                  <h3 className="text-xl font-semibold mb-2 group-hover:text-blue-600 transition-colors">
                    {article.title}
                  </h3>
                  <p className="text-gray-500 text-sm mb-4">{article.date}</p>
                  <Button
                    variant="ghost"
                    className="p-0 h-auto text-blue-600 hover:text-blue-700"
                  >
                    Читать далее
                    <Icon name="ArrowRight" size={16} className="ml-2" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Info Form Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <InfoForm />
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Свяжитесь с нами
              </h2>
              <p className="text-xl text-gray-600">
                Обсудим ваш проект и найдем оптимальное решение
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-semibold mb-6">
                  Контактная информация
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <Icon
                      name="Phone"
                      size={20}
                      className="text-blue-600 mr-3"
                    />
                    <span>+7 (495) 123-45-67</span>
                  </div>
                  <div className="flex items-center">
                    <Icon
                      name="Mail"
                      size={20}
                      className="text-blue-600 mr-3"
                    />
                    <span>info@techflow.ru</span>
                  </div>
                  <div className="flex items-center">
                    <Icon
                      name="MapPin"
                      size={20}
                      className="text-blue-600 mr-3"
                    />
                    <span>Москва, ул. Тверская, 15</span>
                  </div>
                </div>
              </div>
              <div>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <Input
                      name="name"
                      placeholder="Ваше имя"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="h-12"
                    />
                    <Input
                      name="email"
                      type="email"
                      placeholder="Email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="h-12"
                    />
                  </div>
                  <Input
                    name="company"
                    placeholder="Компания"
                    value={formData.company}
                    onChange={handleInputChange}
                    className="h-12"
                  />
                  <Textarea
                    name="message"
                    placeholder="Сообщение"
                    value={formData.message}
                    onChange={handleInputChange}
                    className="min-h-[120px]"
                  />
                  <Button
                    type="submit"
                    className="w-full h-12 bg-blue-600 hover:bg-blue-700"
                  >
                    <Icon name="Send" size={20} className="mr-2" />
                    Отправить сообщение
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Icon name="Code" size={32} className="text-blue-400" />
                <span className="text-xl font-semibold">TechFlow</span>
              </div>
              <p className="text-gray-400">
                Инновационные IT-решения для бизнеса любого масштаба
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Продукты</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    CRM-система
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Аналитика
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Демо-платформа
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Компания</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    О нас
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Карьера
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Контакты
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Поддержка</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Документация
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Поддержка
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Статус системы
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 TechFlow. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
