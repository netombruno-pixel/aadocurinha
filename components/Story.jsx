"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Heart, Award, Sparkles } from "lucide-react";

export default function Story() {
  const features = [
    {
      icon: Heart,
      title: "Made with Love",
      description: "Each sweet is crafted with passion and dedication",
    },
    {
      icon: Award,
      title: "Premium Quality",
      description: "Only the finest ingredients in every creation",
    },
    {
      icon: Sparkles,
      title: "Artisanal Touch",
      description: "Handmade perfection in every detail",
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-playfair text-center mb-12">
            Our Story
          </h2>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="p-6 text-center h-full hover:shadow-lg transition-shadow">
                  <feature.icon className="h-10 w-10 text-primary mx-auto mb-4" />
                  <h3 className="font-semibold text-lg mb-2">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground">{feature.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>

          <Card className="p-8 md:p-12">
            <div className="space-y-6 text-center md:text-left">
              <p className="text-lg leading-relaxed">
                A Docurinha nasceu em 2020, fruto de amor, resiliência e uma nova paixão.
                Após se tornar mãe e enfrentar os desafios da pandemia, Brenda descobriu
                sua verdadeira vocação na arte de fazer brigadeiros. O que começou como
                uma alegria simples logo se transformou em uma missão: criar doces
                artesanais perfeitos que trazem felicidade a cada mordida.
              </p>
              <p className="text-lg leading-relaxed">
                Fazer brigadeiros vai muito além de uma receita; é uma alquimia de sabores,
                texturas e paixão. Guiada pelo amor de Deus e pelo compromisso com a
                excelência, Brenda coloca seu coração em cada criação, garantindo que cada
                doce reflita o carinho e a dedicação que ela acredita.
              </p>
              <p className="text-lg leading-relaxed">
                Com os melhores ingredientes e um olhar atento aos detalhes, cada brigadeiro
                é feito para proporcionar uma experiência inesquecível. Seja para uma ocasião
                especial ou para adoçar o dia, A Docurinha está aqui para levar mais sabor,
                amor e encanto aos seus momentos.
              </p>
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}