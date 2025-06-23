import Icon from "@/components/ui/icon";

const Features = () => {
  const features = [
    {
      icon: "Shield",
      title: "Гарантия качества",
      description: "Все товары сертифицированы и имеют официальную гарантию",
    },
    {
      icon: "Truck",
      title: "Быстрая доставка",
      description: "Доставляем по всей России в течение 1-3 дней",
    },
    {
      icon: "CreditCard",
      title: "Удобная оплата",
      description: "Принимаем карты, наличные и электронные платежи",
    },
    {
      icon: "Headphones",
      title: "Поддержка 24/7",
      description: "Консультируем и помогаем в выборе круглосуточно",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-montserrat font-bold text-auto-dark mb-4">
            Почему выбирают нас
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Мы предоставляем лучший сервис и качественные товары для
            автолюбителей
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="text-center p-6 rounded-2xl hover:bg-auto-light transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-16 h-16 bg-auto-blue rounded-full flex items-center justify-center mx-auto mb-4 hover:scale-110 transition-transform">
                <Icon
                  name={feature.icon as any}
                  size={32}
                  className="text-white"
                />
              </div>
              <h3 className="text-xl font-montserrat font-bold text-auto-dark mb-3">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
