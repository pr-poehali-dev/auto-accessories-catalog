import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const ProductCategories = () => {
  const categories = [
    {
      id: 1,
      name: "Авточехлы",
      description: "Защитные чехлы для сидений из экокожи и ткани",
      icon: "Armchair",
      image: "/images/categories/car-covers.jpg",
      color: "from-blue-500 to-purple-600",
    },
    {
      id: 2,
      name: "Авто тенты",
      description: "Надежная защита от солнца и непогоды",
      icon: "Tent",
      image: "/images/categories/car-tents.jpg",
      color: "from-green-500 to-teal-600",
    },
    {
      id: 3,
      name: "Авто зонтики",
      description: "Компактные зонты для защиты от дождя",
      icon: "Umbrella",
      image: "/images/categories/car-umbrellas.jpg",
      color: "from-orange-500 to-red-600",
    },
    {
      id: 4,
      name: "Авто холодильники",
      description: "Портативные холодильники для путешествий",
      icon: "Refrigerator",
      image: "/images/categories/car-fridges.jpg",
      color: "from-cyan-500 to-blue-600",
    },
    {
      id: 5,
      name: "Авто кондиционеры",
      description: "Мобильные кондиционеры для комфорта",
      icon: "Wind",
      image: "/images/categories/car-conditioners.jpg",
      color: "from-indigo-500 to-purple-600",
    },
    {
      id: 6,
      name: "Evo коврики",
      description: "Премиум коврики для салона автомобиля",
      icon: "SquareStack",
      image: "/images/categories/evo-mats.jpg",
      color: "from-pink-500 to-rose-600",
    },
  ];

  return (
    <section id="catalog" className="py-20 bg-auto-light">
      <div className="container mx-auto px-4">
        {/* Заголовок секции */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-montserrat font-bold text-auto-dark mb-4">
            Наши категории товаров
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Широкий ассортимент качественных автоаксессуаров для вашего комфорта
            и безопасности
          </p>
        </div>

        {/* Сетка категорий */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {categories.map((category, index) => (
            <Card
              key={category.id}
              className="group overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 animate-scale-in border-0"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Изображение категории */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div
                  className={`absolute inset-0 bg-gradient-to-t ${category.color} opacity-70 group-hover:opacity-80 transition-opacity`}
                ></div>

                {/* Иконка */}
                <div className="absolute top-4 right-4 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                  <Icon
                    name={category.icon as any}
                    size={24}
                    className="text-white"
                  />
                </div>
              </div>

              <CardContent className="p-6">
                <h3 className="text-2xl font-montserrat font-bold text-auto-dark mb-3 group-hover:text-auto-blue transition-colors">
                  {category.name}
                </h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {category.description}
                </p>
                <Button className="w-full bg-auto-blue hover:bg-auto-blue/90 text-white group-hover:bg-auto-orange transition-colors duration-300">
                  <Icon name="ShoppingCart" size={18} className="mr-2" />
                  Смотреть товары
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Призыв к действию */}
        <div className="text-center animate-slide-up">
          <Button
            size="lg"
            className="bg-auto-orange hover:bg-auto-orange/90 text-white px-8 py-4 text-lg"
          >
            <Icon name="Grid3x3" size={20} className="mr-3" />
            Посмотреть весь каталог
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProductCategories;
