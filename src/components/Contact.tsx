import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const Contact = () => {
  return (
    <section id="contacts" className="py-20 bg-auto-dark text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-montserrat font-bold mb-4">
            Свяжитесь с нами
          </h2>
          <p className="text-xl opacity-90 max-w-2xl mx-auto">
            Готовы помочь с выбором и ответить на все ваши вопросы
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Контактная информация */}
          <div className="space-y-8">
            <Card className="bg-white/10 backdrop-blur-sm border-white/20">
              <CardContent className="p-6">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-12 h-12 bg-auto-orange rounded-full flex items-center justify-center">
                    <Icon
                      name="MessageCircle"
                      size={24}
                      className="text-white"
                    />
                  </div>
                  <div>
                    <h3 className="text-xl font-montserrat font-bold">
                      WhatsApp
                    </h3>
                    <p className="opacity-80">Быстрый заказ и консультация</p>
                  </div>
                </div>
                <Button
                  className="w-full bg-green-500 hover:bg-green-600 text-white"
                  onClick={() =>
                    window.open("https://wa.me/996773219806", "_blank")
                  }
                >
                  <Icon name="Phone" size={18} className="mr-2" />
                  +996 773 219 806
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-white/10 backdrop-blur-sm border-white/20">
              <CardContent className="p-6">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-12 h-12 bg-auto-blue rounded-full flex items-center justify-center">
                    <Icon name="Mail" size={24} className="text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-montserrat font-bold">Email</h3>
                    <p className="opacity-80">info@sevenshop.kg</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white/10 backdrop-blur-sm border-white/20">
              <CardContent className="p-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-auto-orange rounded-full flex items-center justify-center">
                    <Icon name="Clock" size={24} className="text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-montserrat font-bold">
                      Режим работы
                    </h3>
                    <p className="opacity-80">Ежедневно с 9:00 до 21:00</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Призыв к действию */}
          <div className="text-center lg:text-left">
            <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10">
              <h3 className="text-3xl font-montserrat font-bold mb-6">
                Готовы сделать заказ?
              </h3>
              <p className="text-lg mb-8 opacity-90">
                Напишите нам в WhatsApp или позвоните — подберем идеальные
                аксессуары для вашего автомобиля
              </p>

              <div className="space-y-4">
                <Button
                  size="lg"
                  className="w-full bg-auto-orange hover:bg-auto-orange/90 text-white text-lg py-4"
                  onClick={() =>
                    window.open("https://wa.me/996773219806", "_blank")
                  }
                >
                  <Icon name="MessageCircle" size={20} className="mr-3" />
                  Написать в WhatsApp
                </Button>

                <Button
                  size="lg"
                  variant="outline"
                  className="w-full border-white/30 text-white hover:bg-white hover:text-auto-dark text-lg py-4"
                  onClick={() => window.open("tel:+996773219806")}
                >
                  <Icon name="Phone" size={20} className="mr-3" />
                  Позвонить сейчас
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
