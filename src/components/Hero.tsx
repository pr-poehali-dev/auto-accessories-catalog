import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Фоновый градиент */}
      <div className="absolute inset-0 auto-gradient opacity-90"></div>

      {/* Декоративные элементы */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-white/10 rounded-full blur-xl"></div>
        <div className="absolute -bottom-32 -left-32 w-80 h-80 bg-white/5 rounded-full blur-2xl"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 text-center text-white">
        <div className="max-w-4xl mx-auto animate-fade-in">
          {/* Основной заголовок */}
          <h1 className="text-5xl md:text-7xl font-montserrat font-bold mb-6 leading-tight">
            Премиум аксессуары
            <span className="block text-auto-orange">для вашего авто</span>
          </h1>

          {/* Подзаголовок */}
          <p className="text-xl md:text-2xl font-roboto font-light mb-8 opacity-90 max-w-2xl mx-auto">
            Авточехлы, тенты, зонтики, холодильники, кондиционеры и Evo коврики
            с доставкой по всей России
          </p>

          {/* Кнопки действий */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 animate-slide-up">
            <Button
              size="lg"
              className="bg-white text-auto-blue hover:bg-gray-100 font-semibold px-8 py-4 text-lg"
            >
              <Icon name="Grid3x3" size={20} className="mr-3" />
              Смотреть каталог
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-auto-blue font-semibold px-8 py-4 text-lg"
            >
              <Icon name="MessageCircle" size={20} className="mr-3" />
              Заказать в WhatsApp
            </Button>
          </div>

          {/* Статистика */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-2xl mx-auto animate-scale-in">
            <div className="text-center">
              <div className="text-3xl font-bold mb-2">500+</div>
              <div className="text-sm opacity-80">Довольных клиентов</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold mb-2">24ч</div>
              <div className="text-sm opacity-80">Быстрая доставка</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold mb-2">5★</div>
              <div className="text-sm opacity-80">Рейтинг качества</div>
            </div>
          </div>
        </div>

        {/* Стрелка вниз */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <Icon name="ChevronDown" size={32} className="text-white/60" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
