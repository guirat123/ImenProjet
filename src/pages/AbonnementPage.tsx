"use client";

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { CheckCircle, DollarSign, Percent, ShoppingCart, CupSoda, Leaf } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useCart } from '@/context/CartContext';

const AbonnementPage = () => {
  const { addToCart } = useCart();

  // Helper to parse price from string like "30–32 DT" to a number (taking the lower bound)
  const parsePrice = (priceString: string): number => {
    const match = priceString.match(/(\d+)/);
    return match ? parseFloat(match[1]) : 0;
  };

  const abonnements = [
    {
      gamme: "GAMME 1 — Essentielle",
      description: "Des portions simples, nutritives et économiques pour une alimentation équilibrée au quotidien.",
      details: [
        { type: "Hebdomadaire (5 box)", price: "30–32 DT" },
        { type: "Mensuel (20 box)", price: "120–125 DT" },
      ],
      reduction: "10–15 %",
      color: "border-green-500",
    },
    {
      gamme: "GAMME 2 — Healthy Plus",
      description: "Plus riche en protéines et en diversité nutritionnelle pour booster votre énergie.",
      details: [
        { type: "Hebdomadaire (5 box)", price: "45–48 DT" },
        { type: "Mensuel (20 box)", price: "180–190 DT" },
      ],
      reduction: "12–15 %",
      color: "border-yellow-500",
    },
    {
      gamme: "GAMME 3 — Premium",
      description: "Produits nobles et recettes modernes pour une expérience culinaire raffinée.",
      details: [
        { type: "Hebdomadaire (5 box)", price: "60–63 DT" },
        { type: "Mensuel (20 box)", price: "245–255 DT" },
      ],
      reduction: "10–12 %",
      color: "border-red-500",
    },
  ];

  const drinkOptions = [
    {
      id: "boisson-classique",
      title: "Boisson classique",
      description: "Ajoutez une boisson rafraîchissante à votre abonnement.",
      icon: CupSoda,
      color: "border-blue-500",
      options: [
        { type: "Quotidien", price: "2 DT / jour", numericPrice: 2 },
        { type: "Hebdomadaire", price: "10 DT / semaine", numericPrice: 10 },
        { type: "Mensuel", price: "35–40 DT / mois", numericPrice: 35 },
      ]
    },
    {
      id: "smoothie-protein-drink",
      title: "Smoothie / protein drink",
      description: "Boostez votre énergie avec un smoothie ou une boisson protéinée.",
      icon: Leaf,
      color: "border-purple-500",
      options: [
        { type: "Quotidien", price: "4 DT / jour", numericPrice: 4 },
        { type: "Hebdomadaire", price: "18–20 DT / semaine", numericPrice: 18 },
        { type: "Mensuel", price: "70–75 DT / mois", numericPrice: 70 },
      ]
    }
  ];

  return (
    <div className="bg-gray-50 text-gray-800 py-12 md:py-16">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl md:text-5xl font-bold text-center text-green-700 mb-12">
          ABONNEMENTS LUNCH BOX
        </h1>
        <p className="text-lg text-center text-gray-700 max-w-3xl mx-auto mb-10">
          Simplifiez votre quotidien avec nos formules d'abonnement flexibles.
          Recevez 1 box par jour, 5 jours par semaine (du lundi au vendredi).
          Boisson non incluse (option possible).
        </p>

        <div className="space-y-16">
          {abonnements.map((abonnement, index) => (
            <section key={index} className="mb-12">
              <Card className={`p-6 md:p-10 shadow-lg border-l-8 ${abonnement.color} mb-8`}>
                <CardHeader className="flex flex-row items-center space-x-4 p-0 mb-4">
                  <DollarSign className={`text-${abonnement.color.split('-')[1]}-500`} size={36} />
                  <CardTitle className="text-2xl md:text-3xl font-bold text-green-700">
                    {abonnement.gamme}
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-lg text-gray-700 leading-relaxed p-0">
                  <p>{abonnement.description}</p>
                  <div className="flex items-center text-lg mt-4 pt-4 border-t border-gray-200">
                    <span className="font-semibold flex items-center">
                      <Percent className="h-5 w-5 text-yellow-500 mr-2" /> Réduction
                    </span>
                    <span className="text-yellow-600 font-bold ml-auto">{abonnement.reduction}</span>
                  </div>
                </CardContent>
              </Card>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {abonnement.details.map((detail, idx) => {
                  const subscriptionId = `${abonnement.gamme.toLowerCase().replace(/[^a-z0-9]/g, '-')}-${detail.type.toLowerCase().replace(/[^a-z0-9]/g, '-')}`;
                  const subscriptionTitle = `${abonnement.gamme} - ${detail.type}`;
                  const subscriptionPrice = parsePrice(detail.price);

                  return (
                    <Card key={idx} className="p-6 shadow-md hover:shadow-lg transition-shadow duration-300 border-t-4 border-gray-200">
                      <CardHeader className="p-0 mb-4">
                        <CardTitle className="text-xl font-bold text-gray-800 mb-2">
                          {detail.type}
                        </CardTitle>
                        <CardDescription className="text-gray-600">
                          Abonnement pour {detail.type.includes("Hebdomadaire") ? "une semaine" : "un mois"}.
                        </CardDescription>
                      </CardHeader>
                      <CardContent className="p-0">
                        <div className="flex items-center justify-between text-lg mt-4">
                          <span className="font-semibold flex items-center">
                            <CheckCircle className="h-5 w-5 text-green-500 mr-2" /> Prix
                          </span>
                          <span className="text-green-800 font-bold">{detail.price}</span>
                        </div>
                        <Button
                          className="mt-6 w-full bg-green-600 hover:bg-green-700 text-white"
                          onClick={() => addToCart({ id: subscriptionId, title: subscriptionTitle, price: subscriptionPrice })}
                        >
                          <ShoppingCart className="mr-2 h-4 w-4" /> Ajouter au panier
                        </Button>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            </section>
          ))}

          {/* New section for Drink Options */}
          <section className="mb-12">
            <Card className="p-6 md:p-10 shadow-lg border-l-8 border-green-700 mb-8">
              <CardHeader className="flex flex-row items-center space-x-4 p-0 mb-4">
                <CupSoda className="text-green-700" size={36} />
                <CardTitle className="text-2xl md:text-3xl font-bold text-green-700">
                  OPTIONS BOISSONS (ABONNEMENT)
                </CardTitle>
              </CardHeader>
              <CardContent className="text-lg text-gray-700 leading-relaxed p-0">
                <p>Personnalisez votre abonnement avec nos options de boissons saines.</p>
              </CardContent>
            </Card>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {drinkOptions.map((drinkCategory) => (
                <Card key={drinkCategory.id} className={`p-6 shadow-md hover:shadow-lg transition-shadow duration-300 border-t-4 ${drinkCategory.color}`}>
                  <CardHeader className="p-0 mb-4">
                    <div className="flex items-center mb-2">
                      <drinkCategory.icon className={`text-${drinkCategory.color.split('-')[1]}-500 mr-3`} size={24} />
                      <CardTitle className="text-xl font-bold text-gray-800">{drinkCategory.title}</CardTitle>
                    </div>
                    <CardDescription className="text-gray-600">
                      {drinkCategory.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="p-0">
                    <div className="space-y-4 mt-6">
                      {drinkCategory.options.map((option, idx) => {
                        const optionId = `${drinkCategory.id}-${option.type.toLowerCase().replace(/[^a-z0-9]/g, '-')}`;
                        const optionTitle = `${drinkCategory.title} - ${option.type}`;
                        const optionPrice = option.numericPrice; // Use the pre-defined numeric price

                        return (
                          <div key={idx} className="flex items-center justify-between text-lg">
                            <span className="font-semibold flex items-center">
                              <CheckCircle className="h-5 w-5 text-green-500 mr-2" /> {option.type}
                            </span>
                            <span className="text-green-800 font-bold">{option.price}</span>
                            <Button
                              className="ml-4 bg-green-600 hover:bg-green-700 text-white text-sm py-2 px-4"
                              onClick={() => addToCart({ id: optionId, title: optionTitle, price: optionPrice })}
                            >
                              <ShoppingCart className="mr-2 h-4 w-4" /> Ajouter
                            </Button>
                          </div>
                        );
                      })}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default AbonnementPage;