import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [selectedPower, setSelectedPower] = useState<string>('');
  const [selectedEngine, setSelectedEngine] = useState<string>('');
  const [selectedYear, setSelectedYear] = useState<string>('');

  const atvModels = [
    {
      id: 1,
      title: 'Ranger 700 Sport',
      price: '850 000 ₽',
      power: '700cc',
      engine: '4-тактный',
      year: 2024,
      image: '/img/a855ee51-6467-4d20-9d4d-a55f3e5513e9.jpg',
      features: ['Электростартер', 'Полный привод', 'LED фары']
    },
    {
      id: 2,
      title: 'Adventure 500 Pro',
      price: '620 000 ₽',
      power: '500cc',
      engine: '4-тактный',
      year: 2024,
      image: '/img/3ffcb46c-9edb-4618-ac9c-70c91ef7c4b6.jpg',
      features: ['Усиленная подвеска', 'Защита днища', 'Багажник']
    },
    {
      id: 3,
      title: 'Family 400 Comfort',
      price: '480 000 ₽',
      power: '400cc',
      engine: '2-тактный',
      year: 2023,
      image: '/img/367c1f05-c214-4e32-a7c5-2d26d19fc386.jpg',
      features: ['Мягкое сидение', '2 места', 'Экономичный']
    }
  ];

  const filteredATVs = atvModels.filter(atv => {
    return (
      (!selectedPower || atv.power === selectedPower) &&
      (!selectedEngine || atv.engine === selectedEngine) &&
      (!selectedYear || atv.year.toString() === selectedYear)
    );
  });

  const handleTelegramOrder = (atvTitle: string, price: string) => {
    const message = `🏍️ Заказ квадроцикла:\n${atvTitle}\nЦена: ${price}\n\nСвяжитесь со мной для оформления!`;
    const telegramUrl = `https://t.me/share/url?url=&text=${encodeURIComponent(message)}`;
    window.open(telegramUrl, '_blank');
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30"
          style={{ 
            backgroundImage: 'url(/img/3ffcb46c-9edb-4618-ac9c-70c91ef7c4b6.jpg)',
            filter: 'blur(1px)'
          }}
        />
        <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
          <h1 className="text-7xl md:text-9xl font-black text-primary mb-6 tracking-wider animate-fade-in">
            ATV ADVENTURE
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 mb-8 font-light max-w-2xl mx-auto">
            Покорите любую местность с нашими мощными квадроциклами. 
            Профессиональное оборудование для настоящих приключений.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-primary text-white hover:bg-primary/90 px-8 py-4 text-lg">
              <Icon name="Zap" className="mr-2" />
              Выбрать квадроцикл
            </Button>
            <Button variant="outline" size="lg" className="border-primary text-primary hover:bg-primary/10 px-8 py-4 text-lg">
              <Icon name="MessageCircle" className="mr-2" />
              Telegram Bot
            </Button>
          </div>
        </div>
      </section>

      {/* Catalog Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-primary mb-4">Каталог квадроциклов</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Выберите подходящую модель из нашей коллекции внедорожников
            </p>
          </div>

          {/* Filters */}
          <div className="bg-white rounded-2xl shadow-lg p-8 mb-12">
            <h3 className="text-2xl font-semibold mb-6 flex items-center">
              <Icon name="Filter" className="mr-3" />
              Фильтры
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <label className="block text-sm font-medium mb-2">Мощность двигателя</label>
                <Select value={selectedPower} onValueChange={setSelectedPower}>
                  <SelectTrigger>
                    <SelectValue placeholder="Выберите мощность" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="">Все</SelectItem>
                    <SelectItem value="400cc">400cc</SelectItem>
                    <SelectItem value="500cc">500cc</SelectItem>
                    <SelectItem value="700cc">700cc</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Тип двигателя</label>
                <Select value={selectedEngine} onValueChange={setSelectedEngine}>
                  <SelectTrigger>
                    <SelectValue placeholder="Выберите тип" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="">Все</SelectItem>
                    <SelectItem value="2-тактный">2-тактный</SelectItem>
                    <SelectItem value="4-тактный">4-тактный</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Год выпуска</label>
                <Select value={selectedYear} onValueChange={setSelectedYear}>
                  <SelectTrigger>
                    <SelectValue placeholder="Выберите год" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="">Все</SelectItem>
                    <SelectItem value="2023">2023</SelectItem>
                    <SelectItem value="2024">2024</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>

          {/* ATV Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredATVs.map((atv) => (
              <Card key={atv.id} className="overflow-hidden hover:shadow-xl transition-all duration-300 hover:scale-105">
                <div className="aspect-video overflow-hidden">
                  <img 
                    src={atv.image} 
                    alt={atv.title}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <CardTitle className="text-xl text-primary">{atv.title}</CardTitle>
                    <Badge variant="secondary" className="text-lg font-bold">
                      {atv.price}
                    </Badge>
                  </div>
                  <CardDescription className="text-base">
                    {atv.power} • {atv.engine} • {atv.year} год
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="mb-4">
                    <p className="text-sm font-medium text-gray-600 mb-2">Особенности:</p>
                    <div className="flex flex-wrap gap-2">
                      {atv.features.map((feature, index) => (
                        <Badge key={index} variant="outline" className="text-xs">
                          {feature}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  <Button 
                    className="w-full bg-primary hover:bg-primary/90"
                    onClick={() => handleTelegramOrder(atv.title, atv.price)}
                  >
                    <Icon name="MessageCircle" className="mr-2" />
                    Заказать в Telegram
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-secondary text-secondary-foreground">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-5xl font-bold mb-6">О нас</h2>
              <p className="text-lg mb-6 leading-relaxed">
                Мы - команда профессионалов с 15-летним опытом в сфере внедорожной техники. 
                Наша миссия - предоставить вам лучшие квадроциклы для незабываемых приключений.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-4xl font-bold text-primary mb-2">500+</div>
                  <div className="text-sm uppercase tracking-wide">Довольных клиентов</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-primary mb-2">15</div>
                  <div className="text-sm uppercase tracking-wide">Лет опыта</div>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="flex items-center gap-3 p-4 bg-white/10 rounded-lg">
                  <Icon name="Shield" className="text-primary" />
                  <span>Гарантия качества</span>
                </div>
                <div className="flex items-center gap-3 p-4 bg-white/10 rounded-lg">
                  <Icon name="Truck" className="text-primary" />
                  <span>Быстрая доставка</span>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-center gap-3 p-4 bg-white/10 rounded-lg">
                  <Icon name="Wrench" className="text-primary" />
                  <span>Сервисное обслуживание</span>
                </div>
                <div className="flex items-center gap-3 p-4 bg-white/10 rounded-lg">
                  <Icon name="Users" className="text-primary" />
                  <span>Экспертная поддержка</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-primary mb-4">Наши услуги</h2>
            <p className="text-xl text-gray-600">Полный спектр услуг для вашего квадроцикла</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center p-8 hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Icon name="ShoppingCart" className="text-primary" size={32} />
              </div>
              <CardTitle className="mb-4">Продажа квадроциклов</CardTitle>
              <CardDescription className="text-base">
                Широкий выбор новых и б/у квадроциклов от ведущих производителей
              </CardDescription>
            </Card>
            <Card className="text-center p-8 hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Icon name="Settings" className="text-primary" size={32} />
              </div>
              <CardTitle className="mb-4">Техническое обслуживание</CardTitle>
              <CardDescription className="text-base">
                Профессиональное ТО, ремонт и модернизация вашей техники
              </CardDescription>
            </Card>
            <Card className="text-center p-8 hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Icon name="MapPin" className="text-primary" size={32} />
              </div>
              <CardTitle className="mb-4">Прокат и туры</CardTitle>
              <CardDescription className="text-base">
                Организуем захватывающие туры и предоставляем квадроциклы в аренду
              </CardDescription>
            </Card>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-primary mb-4">Отзывы клиентов</h2>
            <p className="text-xl text-gray-600">Что говорят о нас наши клиенты</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: 'Алексей Михайлов',
                text: 'Отличный сервис! Купил Ranger 700 - мощный зверь для любых дорог. Ребята помогли с выбором и оформлением.',
                rating: 5
              },
              {
                name: 'Мария Петрова',
                text: 'Взяли семейный квадроцикл для поездок на дачу. Дети в восторге! Спасибо за профессиональную консультацию.',
                rating: 5
              },
              {
                name: 'Дмитрий Волков',
                text: 'Быстрая доставка, качественная техника. Adventure 500 Pro показал себя отлично в горах Алтая!',
                rating: 5
              }
            ].map((review, index) => (
              <Card key={index} className="p-6">
                <CardContent className="pt-0">
                  <div className="flex mb-4">
                    {[...Array(review.rating)].map((_, i) => (
                      <Icon key={i} name="Star" className="text-yellow-400 fill-current" size={20} />
                    ))}
                  </div>
                  <p className="text-gray-600 mb-4 italic">"{review.text}"</p>
                  <div className="font-semibold text-primary">{review.name}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-4">Контакты</h2>
            <p className="text-xl opacity-90">Свяжитесь с нами любым удобным способом</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Phone" className="text-white" size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Телефон</h3>
              <p className="opacity-90">+7 (495) 123-45-67</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="MapPin" className="text-white" size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Адрес</h3>
              <p className="opacity-90">Москва, ул. Приключений, 15</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Clock" className="text-white" size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Режим работы</h3>
              <p className="opacity-90">Пн-Вс: 9:00 - 20:00</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="MessageCircle" className="text-white" size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Telegram Bot</h3>
              <Button 
                variant="secondary" 
                className="mt-2"
                onClick={() => window.open('https://t.me/your_atv_bot', '_blank')}
              >
                Открыть бот
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;