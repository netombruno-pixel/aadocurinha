import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Image from 'next/image';
import Link from 'next/link';
import { Cake, Clock, Users, Star } from 'lucide-react';

export const metadata = {
  title: "Naked Cakes | A Docurinha",
  description: "Elegant naked cakes for your special occasions. Custom designs and flavors available.",
};

export default function NakedCakes() {
  const cakeTypes = [
    {
      name: "Classic Vanilla",
      description: "Moist vanilla sponge with Swiss meringue buttercream and fresh berries",
      serves: "10-12",
      price: "Starting at $85",
      popular: true
    },
    {
      name: "Chocolate Dream",
      description: "Rich chocolate layers with chocolate ganache and chocolate shavings",
      serves: "10-12",
      price: "Starting at $95"
    },
    {
      name: "Red Velvet",
      description: "Traditional red velvet with cream cheese frosting",
      serves: "10-12",
      price: "Starting at $90",
      popular: true
    },
    {
      name: "Lemon Berry",
      description: "Lemon sponge with lemon curd and mixed berry compote",
      serves: "10-12",
      price: "Starting at $90"
    },
    {
      name: "Carrot Spice",
      description: "Spiced carrot cake with cream cheese frosting and walnuts",
      serves: "10-12",
      price: "Starting at $85"
    },
    {
      name: "Funfetti Celebration",
      description: "Colorful vanilla cake with rainbow sprinkles and vanilla buttercream",
      serves: "10-12",
      price: "Starting at $85"
    }
  ];

  const sizes = [
    { size: "6 inch", serves: "6-8 people", price: "Starting at $65" },
    { size: "8 inch", serves: "10-12 people", price: "Starting at $85" },
    { size: "10 inch", serves: "16-20 people", price: "Starting at $120" },
    { size: "2-tier", serves: "25-30 people", price: "Starting at $180" },
    { size: "3-tier", serves: "40-50 people", price: "Starting at $280" }
  ];

  const addOns = [
    "Fresh flowers decoration",
    "Gold leaf accents",
    "Custom cake topper",
    "Macarons decoration",
    "Fresh fruit arrangement",
    "Edible flowers",
    "Chocolate drip",
    "Custom message"
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
              Naked Cakes
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
              Elegant, rustic cakes perfect for weddings, birthdays, and special celebrations
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <div className="flex items-center gap-2">
                <Cake className="h-5 w-5 text-primary" />
                <span className="text-sm">Custom Designs</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-5 w-5 text-primary" />
                <span className="text-sm">48hr Notice</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="h-5 w-5 text-primary" />
                <span className="text-sm">6-50 Servings</span>
              </div>
              <div className="flex items-center gap-2">
                <Star className="h-5 w-5 text-primary" />
                <span className="text-sm">Premium Quality</span>
              </div>
            </div>
          </div>
        </section>

        {/* Cake Options */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <Tabs defaultValue="flavors" className="w-full">
              <TabsList className="grid w-full max-w-lg mx-auto grid-cols-3">
                <TabsTrigger value="flavors">Flavors</TabsTrigger>
                <TabsTrigger value="sizes">Sizes</TabsTrigger>
                <TabsTrigger value="addons">Add-ons</TabsTrigger>
              </TabsList>

              {/* Flavors Tab */}
              <TabsContent value="flavors" className="mt-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {cakeTypes.map((cake, index) => (
                    <Card key={index} className="hover:shadow-xl transition-shadow">
                      <CardHeader>
                        <div className="flex items-start justify-between">
                          <CardTitle className="text-xl">{cake.name}</CardTitle>
                          {cake.popular && (
                            <Badge variant="secondary">Popular</Badge>
                          )}
                        </div>
                        <p className="text-lg font-semibold text-primary mt-2">{cake.price}</p>
                      </CardHeader>
                      <CardContent>
                        <CardDescription>{cake.description}</CardDescription>
                        <p className="text-sm text-muted-foreground mt-2">
                          Serves {cake.serves}
                        </p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              {/* Sizes Tab */}
              <TabsContent value="sizes" className="mt-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {sizes.map((item, index) => (
                    <Card key={index} className="hover:shadow-lg transition-shadow">
                      <CardHeader>
                        <CardTitle className="text-xl">{item.size}</CardTitle>
                        <p className="text-lg font-semibold text-primary">{item.price}</p>
                      </CardHeader>
                      <CardContent>
                        <p className="text-muted-foreground">Serves {item.serves}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              {/* Add-ons Tab */}
              <TabsContent value="addons" className="mt-8">
                <Card className="p-6">
                  <h3 className="text-xl font-semibold mb-4">Available Add-ons</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
                    {addOns.map((addon, index) => (
                      <div key={index} className="flex items-center space-x-2">
                        <div className="h-2 w-2 bg-primary rounded-full" />
                        <span className="text-muted-foreground">{addon}</span>
                      </div>
                    ))}
                  </div>
                  <p className="text-sm text-muted-foreground mt-6">
                    * Additional charges may apply for premium add-ons
                  </p>
                </Card>
              </TabsContent>
            </Tabs>

            {/* Ordering Process */}
            <Card className="mt-12 p-8 bg-muted/30">
              <h2 className="text-2xl md:text-3xl font-bold font-playfair text-center mb-8">
                How to Order
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto mb-3 font-bold">
                    1
                  </div>
                  <h4 className="font-semibold mb-2">Choose</h4>
                  <p className="text-sm text-muted-foreground">Select your flavor and size</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto mb-3 font-bold">
                    2
                  </div>
                  <h4 className="font-semibold mb-2">Customize</h4>
                  <p className="text-sm text-muted-foreground">Add decorations and personal touches</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto mb-3 font-bold">
                    3
                  </div>
                  <h4 className="font-semibold mb-2">Confirm</h4>
                  <p className="text-sm text-muted-foreground">Place order 48 hours in advance</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto mb-3 font-bold">
                    4
                  </div>
                  <h4 className="font-semibold mb-2">Enjoy</h4>
                  <p className="text-sm text-muted-foreground">Pick up or have it delivered</p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
                <Button asChild size="lg">
                  <Link href="https://wa.me/14076164661" target="_blank" rel="noopener noreferrer">
                    Order on WhatsApp
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline">
                  <Link href="/contact">
                    Get a Quote
                  </Link>
                </Button>
              </div>
            </Card>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}