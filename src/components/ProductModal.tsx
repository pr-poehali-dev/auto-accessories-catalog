import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

interface Product {
  id: number;
  name: string;
  price: string;
  description: string;
  image: string;
  features: string[];
}

interface ProductModalProps {
  isOpen: boolean;
  onClose: () => void;
  category: {
    id: number;
    name: string;
    description: string;
  } | null;
}

const ProductModal = ({ isOpen, onClose, category }: ProductModalProps) => {
  const getProductsByCategory = (categoryId: number): Product[] => {
    const productData: Record<number, Product[]> = {
      1: [
        // Авточехлы
        {
          id: 1,
          name: "Чехлы из экокожи Premium",
          price: "15 000 ₽",
          description:
            "Премиальные чехлы из высококачественной экокожи с перфорацией",
          image:
            "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=600&h=400&fit=crop",
          features: [
            "Водостойкие",
            "Легко чистятся",
            "Идеальная посадка",
            "5 лет гарантии",
          ],
        },
        {
          id: 2,
          name: "Тканевые чехлы Classic",
          price: "8 500 ₽",
          description:
            "Комфортные чехлы из дышащей ткани для ежедневного использования",
          image:
            "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=600&h=400&fit=crop",
          features: [
            "Дышащий материал",
            "Антибактериальная обработка",
            "Машинная стирка",
          ],
        },
      ],
      2: [
        // Авто тенты
        {
          id: 3,
          name: "Тент-навес универсальный",
          price: "12 000 ₽",
          description: "Надежный тент для защиты автомобиля от солнца и дождя",
          image:
            "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=600&h=400&fit=crop",
          features: [
            "УФ-защита",
            "Водонепроницаемый",
            "Быстрая установка",
            "Компактное хранение",
          ],
        },
        {
          id: 4,
          name: "Тент полный размер",
          price: "18 000 ₽",
          description: "Premium тент с полным покрытием автомобиля",
          image:
            "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&h=400&fit=crop",
          features: ["100% защита", "Вентиляционные окна", "Прочные стропы"],
        },
      ],
      3: [
        // Авто зонтики
        {
          id: 5,
          name: "Складной авто-зонт",
          price: "2 500 ₽",
          description: "Компактный зонт специально для автомобилистов",
          image:
            "https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?w=600&h=400&fit=crop",
          features: [
            "Автоматическое открытие",
            "Ветростойкий",
            "Светоотражающие элементы",
          ],
        },
      ],
      4: [
        // Авто холодильники
        {
          id: 6,
          name: "Холодильник 12V/24V",
          price: "25 000 ₽",
          description: "Портативный холодильник для дальних поездок",
          image:
            "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=600&h=400&fit=crop",
          features: [
            "40 литров",
            "Работает от прикуривателя",
            "Цифровой дисплей",
            "Низкое энергопотребление",
          ],
        },
      ],
      5: [
        // Авто кондиционеры
        {
          id: 7,
          name: "Портативный кондиционер",
          price: "35 000 ₽",
          description: "Мобильный кондиционер для комфорта в дороге",
          image:
            "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&h=400&fit=crop",
          features: [
            "Охлаждение и обогрев",
            "Тихая работа",
            "Пульт управления",
            "Энергоэффективный",
          ],
        },
      ],
      6: [
        // Evo коврики
        {
          id: 8,
          name: "3D коврики EVA",
          price: "8 000 ₽",
          description: "Премиальные 3D коврики из материала EVA",
          image:
            "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=600&h=400&fit=crop",
          features: [
            "Идеальная форма",
            "Легко моются",
            "Нескользящая основа",
            "Экологичный материал",
          ],
        },
      ],
    };

    return productData[categoryId] || [];
  };

  const products = category ? getProductsByCategory(category.id) : [];

  const handleOrderProduct = (product: Product) => {
    const message = `Здравствуйте! Хочу заказать: ${product.name} за ${product.price}. ${product.description}`;
    const whatsappUrl = `https://wa.me/77777777777?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-montserrat text-auto-dark">
            {category?.name}
          </DialogTitle>
          <p className="text-muted-foreground">{category?.description}</p>
        </DialogHeader>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
          {products.map((product) => (
            <Card
              key={product.id}
              className="overflow-hidden hover:shadow-lg transition-shadow"
            >
              <div className="relative h-48">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-2 right-2 bg-auto-orange text-white px-3 py-1 rounded-full font-bold">
                  {product.price}
                </div>
              </div>

              <CardContent className="p-4">
                <h3 className="text-lg font-bold text-auto-dark mb-2">
                  {product.name}
                </h3>
                <p className="text-sm text-muted-foreground mb-3">
                  {product.description}
                </p>

                <div className="mb-4">
                  <h4 className="font-semibold text-auto-dark mb-2">
                    Особенности:
                  </h4>
                  <ul className="text-sm space-y-1">
                    {product.features.map((feature, index) => (
                      <li key={index} className="flex items-center">
                        <Icon
                          name="Check"
                          size={14}
                          className="text-green-500 mr-2 flex-shrink-0"
                        />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <Button
                  onClick={() => handleOrderProduct(product)}
                  className="w-full bg-auto-blue hover:bg-auto-blue/90 text-white"
                >
                  <Icon name="ShoppingCart" size={16} className="mr-2" />
                  Заказать {product.price}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {products.length === 0 && (
          <div className="text-center py-8 text-muted-foreground">
            <Icon
              name="Package"
              size={48}
              className="mx-auto mb-4 opacity-50"
            />
            <p>Товары в данной категории скоро появятся</p>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default ProductModal;
