import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import Icon from "@/components/ui/icon";
import { useToast } from "@/components/ui/use-toast";

const InfoForm = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    company: "",
    position: "",
    industry: "",
    budget: "",
    projectType: "",
    timeline: "",
    description: "",
    additionalServices: [] as string[],
    marketingConsent: false,
    privacyConsent: false,
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSelectChange = (name: string, value: string) => {
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleCheckboxChange = (service: string, checked: boolean) => {
    const currentServices = formData.additionalServices;
    if (checked) {
      setFormData({
        ...formData,
        additionalServices: [...currentServices, service],
      });
    } else {
      setFormData({
        ...formData,
        additionalServices: currentServices.filter((s) => s !== service),
      });
    }
  };

  const handleConsentChange = (name: string, checked: boolean) => {
    setFormData({
      ...formData,
      [name]: checked,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.privacyConsent) {
      toast({
        title: "Ошибка",
        description: "Необходимо согласие на обработку персональных данных",
        variant: "destructive",
      });
      return;
    }

    console.log("Form submitted:", formData);

    toast({
      title: "Форма отправлена!",
      description:
        "Спасибо за предоставленную информацию. Мы свяжемся с вами в ближайшее время.",
    });

    // Сбросить форму
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      company: "",
      position: "",
      industry: "",
      budget: "",
      projectType: "",
      timeline: "",
      description: "",
      additionalServices: [],
      marketingConsent: false,
      privacyConsent: false,
    });
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <Card className="shadow-lg">
        <CardHeader className="text-center">
          <CardTitle className="text-3xl font-bold flex items-center justify-center gap-2">
            <Icon name="FileText" size={32} className="text-blue-600" />
            Форма для заполнения информации
          </CardTitle>
          <CardDescription className="text-lg">
            Заполните все поля для получения персонализированного предложения
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Личная информация */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold flex items-center gap-2">
                <Icon name="User" size={20} className="text-blue-600" />
                Личная информация
              </h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="firstName">Имя *</Label>
                  <Input
                    id="firstName"
                    name="firstName"
                    placeholder="Введите ваше имя"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastName">Фамилия *</Label>
                  <Input
                    id="lastName"
                    name="lastName"
                    placeholder="Введите вашу фамилию"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    required
                  />
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="email">Email *</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="example@company.com"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Телефон *</Label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    placeholder="+7 (999) 123-45-67"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                  />
                </div>
              </div>
            </div>

            {/* Информация о компании */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold flex items-center gap-2">
                <Icon name="Building" size={20} className="text-blue-600" />
                Информация о компании
              </h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="company">Название компании *</Label>
                  <Input
                    id="company"
                    name="company"
                    placeholder="ООО Название"
                    value={formData.company}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="position">Должность *</Label>
                  <Input
                    id="position"
                    name="position"
                    placeholder="Генеральный директор"
                    value={formData.position}
                    onChange={handleInputChange}
                    required
                  />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="industry">Отрасль *</Label>
                <Select
                  value={formData.industry}
                  onValueChange={(value) =>
                    handleSelectChange("industry", value)
                  }
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Выберите отрасль" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="finance">Финансы</SelectItem>
                    <SelectItem value="retail">Розничная торговля</SelectItem>
                    <SelectItem value="manufacturing">Производство</SelectItem>
                    <SelectItem value="healthcare">Здравоохранение</SelectItem>
                    <SelectItem value="education">Образование</SelectItem>
                    <SelectItem value="logistics">Логистика</SelectItem>
                    <SelectItem value="it">IT</SelectItem>
                    <SelectItem value="other">Другое</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            {/* Детали проекта */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold flex items-center gap-2">
                <Icon name="Briefcase" size={20} className="text-blue-600" />
                Детали проекта
              </h3>
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label>Тип проекта *</Label>
                  <RadioGroup
                    value={formData.projectType}
                    onValueChange={(value) =>
                      handleSelectChange("projectType", value)
                    }
                  >
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="crm" id="crm" />
                      <Label htmlFor="crm">CRM-система</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="analytics" id="analytics" />
                      <Label htmlFor="analytics">Аналитика данных</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="automation" id="automation" />
                      <Label htmlFor="automation">
                        Автоматизация процессов
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="consulting" id="consulting" />
                      <Label htmlFor="consulting">IT-консалтинг</Label>
                    </div>
                  </RadioGroup>
                </div>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="budget">Бюджет проекта *</Label>
                    <Select
                      value={formData.budget}
                      onValueChange={(value) =>
                        handleSelectChange("budget", value)
                      }
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Выберите бюджет" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="under-500k">До 500 000 ₽</SelectItem>
                        <SelectItem value="500k-1m">
                          500 000 - 1 000 000 ₽
                        </SelectItem>
                        <SelectItem value="1m-3m">
                          1 000 000 - 3 000 000 ₽
                        </SelectItem>
                        <SelectItem value="3m-5m">
                          3 000 000 - 5 000 000 ₽
                        </SelectItem>
                        <SelectItem value="over-5m">
                          Свыше 5 000 000 ₽
                        </SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="timeline">Сроки реализации *</Label>
                    <Select
                      value={formData.timeline}
                      onValueChange={(value) =>
                        handleSelectChange("timeline", value)
                      }
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Выберите сроки" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="1-month">1 месяц</SelectItem>
                        <SelectItem value="3-months">3 месяца</SelectItem>
                        <SelectItem value="6-months">6 месяцев</SelectItem>
                        <SelectItem value="1-year">1 год</SelectItem>
                        <SelectItem value="over-1-year">
                          Свыше 1 года
                        </SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </div>
            </div>

            {/* Дополнительные услуги */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold flex items-center gap-2">
                <Icon name="Plus" size={20} className="text-blue-600" />
                Дополнительные услуги
              </h3>
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  { value: "training", label: "Обучение сотрудников" },
                  { value: "support", label: "Техническая поддержка" },
                  {
                    value: "integration",
                    label: "Интеграция с существующими системами",
                  },
                  { value: "migration", label: "Миграция данных" },
                  {
                    value: "customization",
                    label: "Кастомизация под ваши нужды",
                  },
                  {
                    value: "maintenance",
                    label: "Обслуживание и сопровождение",
                  },
                ].map((service) => (
                  <div
                    key={service.value}
                    className="flex items-center space-x-2"
                  >
                    <Checkbox
                      id={service.value}
                      checked={formData.additionalServices.includes(
                        service.value,
                      )}
                      onCheckedChange={(checked) =>
                        handleCheckboxChange(service.value, checked as boolean)
                      }
                    />
                    <Label htmlFor={service.value} className="text-sm">
                      {service.label}
                    </Label>
                  </div>
                ))}
              </div>
            </div>

            {/* Описание проекта */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold flex items-center gap-2">
                <Icon
                  name="MessageSquare"
                  size={20}
                  className="text-blue-600"
                />
                Описание проекта
              </h3>
              <div className="space-y-2">
                <Label htmlFor="description">
                  Подробное описание ваших потребностей
                </Label>
                <Textarea
                  id="description"
                  name="description"
                  placeholder="Расскажите подробнее о вашем проекте, целях и требованиях..."
                  value={formData.description}
                  onChange={handleInputChange}
                  className="min-h-[120px]"
                />
              </div>
            </div>

            {/* Согласия */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold flex items-center gap-2">
                <Icon name="Shield" size={20} className="text-blue-600" />
                Согласия
              </h3>
              <div className="space-y-3">
                <div className="flex items-start space-x-2">
                  <Checkbox
                    id="marketingConsent"
                    checked={formData.marketingConsent}
                    onCheckedChange={(checked) =>
                      handleConsentChange(
                        "marketingConsent",
                        checked as boolean,
                      )
                    }
                  />
                  <Label
                    htmlFor="marketingConsent"
                    className="text-sm leading-5"
                  >
                    Я согласен получать маркетинговые материалы и информацию о
                    новых продуктах
                  </Label>
                </div>
                <div className="flex items-start space-x-2">
                  <Checkbox
                    id="privacyConsent"
                    checked={formData.privacyConsent}
                    onCheckedChange={(checked) =>
                      handleConsentChange("privacyConsent", checked as boolean)
                    }
                  />
                  <Label htmlFor="privacyConsent" className="text-sm leading-5">
                    Я согласен на обработку персональных данных в соответствии с{" "}
                    <a href="#" className="text-blue-600 hover:underline">
                      политикой конфиденциальности
                    </a>{" "}
                    *
                  </Label>
                </div>
              </div>
            </div>

            {/* Кнопка отправки */}
            <div className="pt-6">
              <Button
                type="submit"
                size="lg"
                className="w-full h-14 text-lg bg-blue-600 hover:bg-blue-700"
              >
                <Icon name="Send" size={20} className="mr-2" />
                Отправить форму
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default InfoForm;
