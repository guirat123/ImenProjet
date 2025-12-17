"use client";

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { CheckCircle, DollarSign, Percent } from 'lucide-react';

const AbonnementPage = () => {
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {abonnements.map((abonnement, index) => (
            <Card key={index} className={`p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 border-t-4 ${abonnement.color}`}>
              <CardHeader className="p-0 mb-4">
                <CardTitle className="text-2xl font-bold text-green-700 mb-2">
                  {abonnement.gamme}
                </CardTitle>
                <CardDescription className="text-gray-600">
                  {abonnement.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="p-0">
                <div className="space-y-4 mt-6">
                  {abonnement.details.map((detail, idx) => (
                    <div key={idx} className="flex items-center justify-between text-lg">
                      <span className="font-semibold flex items-center">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-2" /> {detail.type}
                      </span>
                      <span className="text-green-800 font-bold">{detail.price}</span>
                    </div>
                  ))}
                </div>
                <div className="flex items-center justify-between text-lg mt-6 pt-4 border-t border-gray-200">
                  <span className="font-semibold flex items-center">
                    <Percent className="h-5 w-5 text-yellow-500 mr-2" /> Réduction
                  </span>
                  <span className="text-yellow-600 font-bold">{abonnement.reduction}</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AbonnementPage;