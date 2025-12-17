"use client";

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Leaf, Smoothie } from 'lucide-react';

interface DrinkItem {
  name: string;
  price: number;
}

interface DrinkCategory {
  id: string;
  title: string;
  description: string;
  icon: React.ElementType;
  color: string;
  drinks: DrinkItem[];
}

const BoissonsHealthyPage = () => {
  const drinkCategories: DrinkCategory[] = [
    {
      id: 'classiques-healthy',
      title: "Classiques Healthy",
      description: "Des boissons rafraîchissantes et naturelles pour accompagner vos repas ou pour une pause saine.",
      icon: Leaf,
      color: "border-green-500",
      drinks: [
        { name: "Citronnade & menthe", price: 4.00 },
        { name: "Thé vert froid maison", price: 3.00 },
        { name: "Infusion gingembre–citron", price: 3.00 },
        { name: "Jus d’orange frais (sans sucre)", price: 5.00 },
        { name: "Jus de grenade dilué", price: 7.00 },
        { name: "Lait d’amande nature", price: 6.00 },
      ],
    },
    {
      id: 'smoothies-protein-drinks',
      title: "Smoothies & Protein Drinks",
      description: "Des boissons énergisantes et riches en protéines, parfaites pour le sport ou un coup de boost.",
      icon: Smoothie,
      color: "border-yellow-500",
      drinks: [
        { name: "Smoothie banane–datte–lait d’amande", price: 11.00 },
        { name: "Smoothie fraise–yaourt grec", price: 10.00 },
        { name: "Smoothie vert (épinard–pomme–citron)", price: 11.00 },
        { name: "Protein shake cacao–banane", price: 12.00 },
        { name: "Smoothie mangue–chia", price: 13.00 },
        { name: "Shake vanille–avoine–protéines", price: 10.00 },
      ],
    },
  ];

  return (
    <div className="bg-gray-50 text-gray-800 py-12 md:py-16">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl md:text-5xl font-bold text-center text-green-700 mb-12">
          Nos Boissons Healthy
        </h1>
        <p className="text-lg text-center text-gray-700 max-w-3xl mx-auto mb-16">
          Découvrez notre sélection de boissons saines et rafraîchissantes, parfaites pour compléter votre repas ou pour une pause bien-être.
        </p>

        <div className="space-y-16">
          {drinkCategories.map((category) => (
            <section key={category.id}>
              <Card className={`p-6 md:p-8 shadow-lg border-l-8 ${category.color} mb-8`}>
                <CardHeader className="flex flex-row items-center space-x-4 p-0 mb-4">
                  <category.icon className={`text-${category.color.split('-')[1]}-500`} size={36} />
                  <CardTitle className="text-2xl md:text-3xl font-bold text-green-700">
                    {category.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-lg text-gray-700 leading-relaxed p-0">
                  <p>{category.description}</p>
                </CardContent>
              </Card>

              <div className="overflow-x-auto">
                <Table className="min-w-full bg-white shadow-md rounded-lg">
                  <TableHeader>
                    <TableRow className="bg-green-100">
                      <TableHead className="text-left text-green-800 font-semibold py-3 px-4">Boisson</TableHead>
                      <TableHead className="text-right text-green-800 font-semibold py-3 px-4">Prix</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {category.drinks.map((drink, index) => (
                      <TableRow key={index} className="border-b last:border-b-0 hover:bg-gray-50">
                        <TableCell className="py-3 px-4 text-gray-700">{drink.name}</TableCell>
                        <TableCell className="py-3 px-4 text-right font-medium text-green-700">{drink.price.toFixed(2)} TND</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </section>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BoissonsHealthyPage;