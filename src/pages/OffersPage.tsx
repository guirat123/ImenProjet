"use client";

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Gift, Users, GraduationCap, Truck } from 'lucide-react';

const OffersPage = () => {
  const offers = [
    {
      icon: Gift,
      title: "1 dessert premium offert / semaine",
      description: "Profitez d'un dessert de notre gamme premium offert chaque semaine avec votre abonnement.",
      color: "border-yellow-500",
    },
    {
      icon: Users,
      title: "–5 % abonnement duo (amis / collègues)",
      description: "Abonnez-vous à deux et bénéficiez d'une réduction de 5% sur vos abonnements respectifs.",
      color: "border-blue-500",
    },
    {
      icon: GraduationCap,
      title: "Offres spéciales étudiants & personnel de santé",
      description: "Des tarifs et avantages exclusifs pour les étudiants et le personnel de santé sur présentation d'un justificatif.",
      color: "border-green-500",
    },
    {
      icon: Truck,
      title: "Livraison gratuite dès 1 mois",
      description: "Bénéficiez de la livraison gratuite pour tout abonnement d'un mois ou plus.",
      color: "border-purple-500",
    },
  ];

  return (
    <div className="bg-gray-50 text-gray-800 py-12 md:py-16">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl md:text-5xl font-bold text-center text-green-700 mb-12">
          🎁 Nos Offres Incitatives
        </h1>
        <p className="text-lg text-center text-gray-700 max-w-3xl mx-auto mb-16">
          Découvrez nos promotions et avantages exclusifs pour rendre votre expérience EAT HEALTHY BOX encore plus agréable !
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {offers.map((offer, index) => (
            <Card key={index} className={`p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 border-l-4 ${offer.color}`}>
              <CardHeader className="flex flex-row items-center space-x-4 p-0 mb-4">
                <offer.icon className={`text-${offer.color.split('-')[1]}-500`} size={36} />
                <CardTitle className="text-2xl font-bold text-green-700">
                  {offer.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="text-lg text-gray-700 leading-relaxed p-0">
                <CardDescription>{offer.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OffersPage;