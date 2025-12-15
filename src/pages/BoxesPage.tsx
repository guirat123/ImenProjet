"use client";

import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { LeafyGreen, Beef, Zap, Wallet, ShoppingCart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useCart } from '@/context/CartContext'; // Import useCart

const BoxesPage = () => {
  const { addToCart } = useCart(); // Use the addToCart function from context

  const boxes = [
    {
      id: 'box-vegetarienne',
      title: "Box Végétarienne",
      description: "Des saveurs fraîches et des nutriments essentiels pour une alimentation sans viande.",
      benefits: "Riche en fibres, vitamines et minéraux. Idéale pour une digestion légère et un apport énergétique constant.",
      icon: LeafyGreen,
      image: "/images/box-vegetarienne.png", 
      color: "border-green-500",
      price: 7.50, // Added price
    },
    {
      id: 'box-proteinee',
      title: "Box Protéinée",
      description: "Conçue pour soutenir votre énergie et votre masse musculaire.",
      benefits: "Apport élevé en protéines maigres, parfait pour la récupération et la satiété durable.",
      icon: Beef,
      image: "/images/box-proteinee.png", 
      color: "border-yellow-500",
      price: 10.00, // Added price
    },
    {
      id: 'box-energie',
      title: "Box Énergie",
      description: "Un coup de fouet naturel pour vos journées intenses.",
      benefits: "Glucides complexes, fruits et superaliments pour une énergie libérée progressivement.",
      icon: Zap,
      image: "/images/box-energie.png", 
      color: "border-green-500",
      price: 5.50, // Added price
    },
    {
      id: 'box-economique',
      title: "Box Économique",
      description: "Manger sainement sans se ruiner, c'est possible !",
      benefits: "Des repas nutritifs et équilibrés à un prix abordable, sans compromis sur la qualité.",
      icon: Wallet,
      image: "/images/box-economique.png", 
      color: "border-yellow-500",
      price: 3.00, // Added price
    },
  ];

  return (
    <div className="bg-gray-50 text-gray-800 py-12 md:py-16">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl md:text-5xl font-bold text-center text-green-700 mb-12">
          Découvrez Nos Box Saines
        </h1>
        <p className="text-lg text-center text-gray-700 max-w-3xl mx-auto mb-16">
          Chaque box est pensée pour s'adapter à vos besoins et à votre rythme de vie sur le campus. Choisissez celle qui vous correspond le mieux !
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-8">
          {boxes.map((box) => (
            <Card key={box.id} className={`flex flex-col md:flex-row items-center p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 border-t-8 ${box.color} rounded-lg`}>
              <div className="md:w-1/3 flex justify-center mb-6 md:mb-0 md:mr-6">
                <img src={box.image} alt={box.title} className="w-32 h-32 object-cover rounded-full border-4 border-gray-200" />
              </div>
              <div className="md:w-2/3 text-center md:text-left">
                <CardHeader className="p-0 mb-4">
                  <div className="flex items-center justify-center md:justify-start mb-2">
                    <box.icon className={`text-${box.color.split('-')[1]}-500 mr-3`} size={32} />
                    <CardTitle className="text-2xl font-bold text-green-700">{box.title}</CardTitle>
                  </div>
                  <CardDescription className="text-gray-600 text-base">
                    {box.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="p-0">
                  <p className="text-sm text-gray-700 mt-2">
                    <span className="font-semibold">Bénéfices :</span> {box.benefits}
                  </p>
                  <p className="text-xl font-bold text-green-700 mt-4">{box.price.toFixed(2)} TND</p>
                  <Button 
                    className="mt-4 bg-green-600 hover:bg-green-700 text-white"
                    onClick={() => addToCart(box)}
                  >
                    <ShoppingCart className="mr-2 h-4 w-4" /> Ajouter au panier
                  </Button>
                </CardContent>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BoxesPage;