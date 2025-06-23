import Icon from "@/components/ui/icon";

const Footer = () => {
  return (
    <footer className="bg-auto-dark border-t border-white/10">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-white">
          {/* Логотип и описание */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-auto-blue rounded-lg flex items-center justify-center">
                <Icon name="Car" className="text-white" size={24} />
              </div>
              <div>
                <h3 className="font-montserrat font-bold text-xl">
                  Seven SHOP
                </h3>
                <p className="text-sm opacity-70">Аксессуары для авто</p>
              </div>
            </div>
            <p className="text-white/80 mb-4 max-w-md">
              Качественные автоаксессуары с доставкой по всей России. Защитите и
              украсьте свой автомобиль с нашими товарами.
            </p>
            <div className="mb-6">
              <p className="text-white/80 mb-2">WhatsApp: +996773219806</p>
            </div>
            <div className="flex space-x-4">
              <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-auto-blue transition-colors cursor-pointer">
                <Icon name="MessageCircle" size={20} />
              </div>
              <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-auto-blue transition-colors cursor-pointer">
                <Icon name="Phone" size={20} />
              </div>
              <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-auto-blue transition-colors cursor-pointer">
                <Icon name="Mail" size={20} />
              </div>
            </div>
          </div>

          {/* Каталог */}
          <div>
            <h4 className="font-montserrat font-bold text-lg mb-4">Каталог</h4>
            <ul className="space-y-2 text-white/80">
              <li>
                <a
                  href="#"
                  className="hover:text-auto-orange transition-colors"
                >
                  Авточехлы
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-auto-orange transition-colors"
                >
                  Авто тенты
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-auto-orange transition-colors"
                >
                  Авто зонтики
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-auto-orange transition-colors"
                >
                  Холодильники
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-auto-orange transition-colors"
                >
                  Кондиционеры
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-auto-orange transition-colors"
                >
                  Evo коврики
                </a>
              </li>
            </ul>
          </div>

          {/* Информация */}
          <div>
            <h4 className="font-montserrat font-bold text-lg mb-4">
              Информация
            </h4>
            <ul className="space-y-2 text-white/80">
              <li>
                <a
                  href="#delivery"
                  className="hover:text-auto-orange transition-colors"
                >
                  Доставка
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-auto-orange transition-colors"
                >
                  Оплата
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-auto-orange transition-colors"
                >
                  Гарантия
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="hover:text-auto-orange transition-colors"
                >
                  О нас
                </a>
              </li>
              <li>
                <a
                  href="#contacts"
                  className="hover:text-auto-orange transition-colors"
                >
                  Контакты
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-8 pt-8 text-center text-white/60">
          <p>&copy; 2024 Seven SHOP. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
