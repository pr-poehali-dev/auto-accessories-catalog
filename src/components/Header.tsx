import { useState } from "react";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: "Каталог", href: "#catalog", icon: "Grid3x3" },
    { name: "Доставка", href: "#delivery", icon: "Truck" },
    { name: "О нас", href: "#about", icon: "Users" },
    { name: "Контакты", href: "#contacts", icon: "Phone" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Логотип */}
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-auto-blue rounded-lg flex items-center justify-center">
              <Icon name="Car" className="text-white" size={24} />
            </div>
            <div>
              <h1 className="font-montserrat font-bold text-xl text-auto-dark">
                Seven SHOP
              </h1>
              <p className="text-xs text-muted-foreground">
                Аксессуары для авто
              </p>
            </div>
          </div>

          {/* Десктопная навигация */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="flex items-center space-x-2 text-foreground hover:text-auto-blue transition-colors duration-200"
              >
                <Icon name={item.icon as any} size={18} />
                <span className="font-medium">{item.name}</span>
              </a>
            ))}
          </nav>

          {/* WhatsApp кнопка */}
          <div className="hidden md:flex items-center space-x-4">
            <Button className="bg-green-500 hover:bg-green-600 text-white">
              <Icon name="MessageCircle" size={18} className="mr-2" />
              WhatsApp
            </Button>
          </div>

          {/* Мобильное меню */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Icon name={isMenuOpen ? "X" : "Menu"} size={24} />
          </button>
        </div>

        {/* Мобильная навигация */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-border animate-fade-in">
            <nav className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="flex items-center space-x-3 px-4 py-2 rounded-lg hover:bg-muted transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <Icon name={item.icon as any} size={20} />
                  <span className="font-medium">{item.name}</span>
                </a>
              ))}
              <Button className="mx-4 bg-green-500 hover:bg-green-600 text-white">
                <Icon name="MessageCircle" size={18} className="mr-2" />
                WhatsApp заказ
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
