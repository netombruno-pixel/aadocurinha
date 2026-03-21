import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import Image from 'next/image';
import Link from 'next/link';

export const metadata = {
  title: "Brigadeiros | A Docurinha",
  description: "Explore our artisanal brigadeiros menu. Handmade with premium ingredients and love.",
};

export default function Brigadeiros() {
  const flavors = [
    {
      name: "Traditional",
      description: "Classic chocolate brigadeiro with chocolate sprinkles",
      price: "$2.50",
      popular: true,
      image: "/resources/brigadeiro-docinhoPerfil.png"
    },
    {
      name: "Oreo",
      description: "Creamy brigadeiro topped with crushed Oreo cookies",
      price: "$3.00",
      image: "/resources/oreo-docinhoPerfil.png"
    },
    {
      name: "Pistachio",
      description: "Delicate pistachio brigadeiro with chopped pistachios",
      price: "$3.50",
      premium: true
    },
    {
      name: "Strawberry",
      description: "Fresh strawberry brigadeiro with pink sprinkles",
      price: "$2.75",
      image: "/resources/morangoninho-docinhoPerfil.png"
    },
    {
      name: "Coconut",
      description: "Tropical coconut brigadeiro rolled in coconut flakes",
      price: "$2.75",
      image: "/resources/prestigio-docinhoPerfil.png"
    },
    {
      name: "Nutella",
      description: "Rich Nutella brigadeiro with hazelnut pieces",
      price: "$3.50",
      popular: true,
      image: "/resources/ninhoNutella-docinhoPerfil.png"
    },
    {
      name: "Passion Fruit",
      description: "Tangy passion fruit brigadeiro with white chocolate",
      price: "$3.00"
    },
    {
      name: "Gold Leaf",
      description: "Premium chocolate brigadeiro topped with edible gold leaf",
      price: "$5.00",
      premium: true,
      image: "/resources/brigadeiroDourado-docinhoPerfil.png"
    },
    {
      name: "Beijinho",
      description: "Coconut brigadeiro with clove",
      price: "$2.50",
      image: "/resources/beijinho-docinhoPerfil.png"
    },
    {
      name: "Cajuzinho",
      description: "Cashew nut brigadeiro",
      price: "$2.75",
      image: "/resources/cajuzinho-docinhoPerfil.png"
    },
    {
      name: "Casadinho",
      description: "Half chocolate, half coconut",
      price: "$3.00",
      image: "/resources/casadinho-docinhoPerfil.png"
    },
    {
      name: "Limão Siciliano",
      description: "Sicilian lemon with white chocolate",
      price: "$3.00",
      image: "/resources/limaoSiciliano-docinhoPerfil.png"
    },
    {
      name: "Paçoca",
      description: "Peanut candy brigadeiro",
      price: "$2.75",
      image: "/resources/pacoca-docinhoPerfil.png"
    },
    {
      name: "Romeu e Julieta",
      description: "Guava paste and cheese",
      price: "$3.00",
      image: "/resources/romeu-e-julieta1.png"
    },
    {
      name: "Café com Leite",
      description: "Coffee and milk brigadeiro",
      price: "$2.75",
      image: "/resources/cafeComLeite-docinhoPerfil.png"
    }
  ];

  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative py-20 md:py-32 bg-gradient-to-br from-background to-muted">
          <div className="absolute inset-0 bg-grid-black/[0.02] -z-10" />
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-playfair mb-6">
              Brigadeiros Artesanais
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
              Handmade Brazilian chocolate truffles crafted with the finest ingredients
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Badge variant="secondary" className="text-sm px-4 py-2">
                15+ Flavors
              </Badge>
              <Badge variant="secondary" className="text-sm px-4 py-2">
                Made Fresh Daily
              </Badge>
              <Badge variant="secondary" className="text-sm px-4 py-2">
                Premium Ingredients
              </Badge>
            </div>
          </div>
        </section>

        {/* Flavors Grid */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {flavors.map((flavor, index) => (
                <Card key={index} className="group hover:shadow-xl transition-all duration-300">
                  <CardHeader className="pb-3">
                    <div className="flex items-start justify-between">
                      <CardTitle className="text-lg group-hover:text-primary transition-colors">
                        {flavor.name}
                      </CardTitle>
                      <div className="flex gap-2">
                        {flavor.popular && (
                          <Badge variant="secondary" className="text-xs">Popular</Badge>
                        )}
                        {flavor.premium && (
                          <Badge variant="default" className="text-xs">Premium</Badge>
                        )}
                      </div>
                    </div>
                    <p className="text-lg font-semibold text-primary">{flavor.price}</p>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-sm">
                      {flavor.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Ordering Info */}
            <Card className="mt-12 p-8 bg-muted/30">
              <div className="text-center space-y-4">
                <h2 className="text-2xl md:text-3xl font-bold font-playfair">
                  Ready to Order?
                </h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  Minimum order: 12 units • Mix and match flavors welcome •
                  Custom packaging available for special occasions
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                  <Button asChild size="lg">
                    <Link href="https://wa.me/14076164661" target="_blank" rel="noopener noreferrer">
                      Order on WhatsApp
                    </Link>
                  </Button>
                  <Button asChild size="lg" variant="outline">
                    <Link href="/contact">
                      Contact Us
                    </Link>
                  </Button>
                </div>
              </div>
            </Card>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}