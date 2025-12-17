"use client";

import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ShoppingCart, Salad, UtensilsCrossed, Sparkles } from 'lucide-react';
import { useCart } from '@/context/CartContext';

interface BoxDetail {
  id: string;
  title: string;
  price: number;
  menu: string[];
}

interface Gamme {
  id: string;
  title: string;
  priceRange: string;
  description: string;
  icon: React.ElementType;
  color: string;
  boxes: BoxDetail[];
}

const BoxesPage = () => {
  const { addToCart } = useCart();

  const placeholderImage = "/public/placeholder.svg"; // Generic placeholder image

  // Extrait le menu d'entrée pour l'afficher séparément en haut
  const entryMenuData: BoxDetail = {
    id: 'gamme1-entry-menu',
    title: "Menu d’entrée (hors box)",
    price: 6.50,
    menu: [
      "Omelette & pommes de terre vapeur",
      "Omelette aux œufs",
      "Salade verte",
      "Pommes de terre vapeur",
      "Banane"
    ]
  };

  const gammes: Gamme[] = [
    {
      id: 'gamme-essentielle',
      title: "GAMME 1 — ÉQUILIBRÉE ESSENTIELLE",
      priceRange: "6 à 8 DT",
      description: "Portions simples, nutritives et économiques pour une alimentation équilibrée au quotidien.",
      icon: Salad,
      color: "border-green-500",
      boxes: [
        {
          id: 'gamme1-box1',
          title: "Box 1",
          price: 6.00,
          menu: [
            "Salade verte (laitue, concombre, tomate)",
            "Œufs durs (2)",
            "Pois chiches citronnés",
            "Huile d’olive (1 c. à café)",
            "Dessert : pomme ou orange"
          ]
        },
        {
          id: 'gamme1-box2',
          title: "Box 2",
          price: 7.00,
          menu: [
            "Salade tunisienne enrichie",
            "Thon naturel",
            "Petite portion de boulgour",
            "Dessert : quartier d’orange + datte"
          ]
        },
        {
          id: 'gamme1-box3',
          title: "Box 3",
          price: 7.00,
          menu: [
            "Légumes vapeur (brocoli, carotte)",
            "Blanc de poulet grillé",
            "Riz complet (petite portion)",
            "Dessert : mini-banane"
          ]
        },
        {
          id: 'gamme1-box4',
          title: "Box 4",
          price: 6.00,
          menu: [
            "Salade de lentilles",
            "Œuf dur",
            "Persil & citron",
            "Dessert : poire"
          ]
        },
        {
          id: 'gamme1-box5',
          title: "Box 5",
          price: 6.00,
          menu: [
            "Salade pois chiches & concombre",
            "Fromage frais allégé",
            "Huile d’olive",
            "Dessert : pomme verte"
          ]
        },
        {
          id: 'gamme1-box6',
          title: "Box 6",
          price: 8.00,
          menu: [
            "Chakchouka light (peu d’huile)",
            "Œuf poché",
            "½ pain complet",
            "Dessert : orange"
          ]
        },
      ],
    },
    {
      id: 'gamme-healthy-plus',
      title: "GAMME 2 — HEALTHY PLUS",
      priceRange: "9 à 12 DT",
      description: "Plus riche en protéines et en diversité nutritionnelle pour booster votre énergie.",
      icon: UtensilsCrossed,
      color: "border-yellow-500",
      boxes: [
        {
          id: 'gamme2-box7',
          title: "Box 7",
          price: 9.00,
          menu: [
            "Salade quinoa (petite portion)",
            "Poulet grillé",
            "Avocat (quelques tranches)",
            "Dessert : yaourt + fruits"
          ]
        },
        {
          id: 'gamme2-box8',
          title: "Box 8",
          price: 9.50,
          menu: [
            "Filet de sardine grillée",
            "Légumes vapeur",
            "Riz complet",
            "Dessert : pomme au four"
          ]
        },
        {
          id: 'gamme2-box9',
          title: "Box 9",
          price: 8.00,
          menu: [
            "Salade pois chiches & thon",
            "Sauce yaourt–citron",
            "Pain complet",
            "Dessert : salade de fruits"
          ]
        },
        {
          id: 'gamme2-box10',
          title: "Box 10",
          price: 9.00,
          menu: [
            "Spaghetti complets",
            "Légumes sautés",
            "Fromage blanc",
            "Dessert : banane + cacao"
          ]
        },
        {
          id: 'gamme2-box11',
          title: "Box 11",
          price: 10.00,
          menu: [
            "Wrap pain complet",
            "Poulet & crudités",
            "Sauce houmous",
            "Dessert : fruit frais"
          ]
        },
        {
          id: 'gamme2-box12',
          title: "Box 12",
          price: 9.00,
          menu: [
            "Salade niçoise tunisienne",
            "Œuf + thon",
            "Huile d’olive",
            "Dessert : yaourt nature + dattes"
          ]
        },
      ],
    },
    {
      id: 'gamme-premium',
      title: "GAMME 3 — PREMIUM & CRÉATIVE",
      priceRange: "+12 DT",
      description: "Produits nobles et recettes modernes pour une expérience culinaire raffinée.",
      icon: Sparkles,
      color: "border-red-500",
      boxes: [
        {
          id: 'gamme3-box13',
          title: "Box 13",
          price: 14.00,
          menu: [
            "Saumon grillé",
            "Épinards sautés",
            "Quinoa",
            "Dessert : chia pudding"
          ]
        },
        {
          id: 'gamme3-box14',
          title: "Box 14",
          price: 12.00,
          menu: [
            "Blanc de dinde grillé",
            "Salade avocat & graines",
            "Patate douce rôtie",
            "Dessert : brownie healthy"
          ]
        },
        {
          id: 'gamme3-box15',
          title: "Box 15",
          price: 15.00,
          menu: [
            "Steak de bœuf maigre",
            "Légumes rôtis",
            "Boulgour",
            "Dessert : yaourt grec & miel"
          ]
        },
        {
          id: 'gamme3-box16',
          title: "Box 16",
          price: 14.00,
          menu: [
            "Crevettes sautées",
            "Salade verte croquante",
            "Riz basmati",
            "Dessert : mousse citron healthy"
          ]
        },
        {
          id: 'gamme3-box17',
          title: "Box 17",
          price: 12.00,
          menu: [
            "Bowl végétarien premium",
            "Lentilles & pois chiches",
            "Avocat",
            "Dessert : energy balls"
          ]
        },
        {
          id: 'gamme3-box18',
          title: "Box 18",
          price: 12.00,
          menu: [
            "Poulet sauce citron & thym",
            "Légumes grillés",
            "Quinoa",
            "Dessert : crumble pomme healthy"
          ]
        },
      ],
    },
  ];

  return (
    <div className="bg-gray-50 text-gray-800 py-12 md:py-16">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl md:text-5xl font-bold text-center text-green-700 mb-12">
          Découvrez Nos Gammes de Lunch Box
        </h1>
        <p className="text-lg text-center text-gray-700 max-w-3xl mx-auto mb-16">
          Chaque gamme est conçue pour répondre à des besoins spécifiques, avec des repas équilibrés, savoureux et pratiques.
        </p>

        {/* Menu d'entrée (hors box) - Affiché en haut */}
        <section className="mb-20">
          <Card key={entryMenuData.id} className="flex flex-col p-6 shadow-md hover:shadow-lg transition-shadow duration-300 border-t-4 border-blue-400">
            <CardHeader className="p-0 mb-4">
              <div className="flex items-center mb-2">
                <ShoppingCart className="text-blue-400 mr-3" size={24} />
                <CardTitle className="text-xl font-bold text-gray-800">{entryMenuData.title}</CardTitle>
              </div>
              <CardDescription className="text-gray-600 text-base">
                Un menu d'entrée spécial, parfait pour un repas léger.
              </CardDescription>
            </CardHeader>
            <CardContent className="p-0">
              <ul className="list-disc list-inside text-gray-700 space-y-1 mb-4">
                {entryMenuData.menu.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
              <p className="text-xl font-bold text-green-700 mt-4">{entryMenuData.price.toFixed(2)} TND</p>
              <Button
                className="mt-4 bg-green-600 hover:bg-green-700 text-white"
                onClick={() => addToCart({ ...entryMenuData, image: placeholderImage })}
              >
                <ShoppingCart className="mr-2 h-4 w-4" /> Ajouter au panier
              </Button>
            </CardContent>
          </Card>
        </section>

        {/* Reste des gammes */}
        {gammes.map((gamme) => (
          <section key={gamme.id} className="mb-20">
            <Card className={`p-6 md:p-10 shadow-lg border-l-8 ${gamme.color} mb-10`}>
              <CardHeader className="flex flex-row items-center space-x-4 mb-4">
                <gamme.icon className={`text-${gamme.color.split('-')[1]}-500`} size={40} />
                <CardTitle className="text-3xl md:text-4xl font-bold text-green-700">
                  {gamme.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="text-lg text-gray-700 leading-relaxed">
                <p className="mb-2"><span className="font-semibold">Prix :</span> {gamme.priceRange}</p>
                <p>{gamme.description}</p>
              </CardContent>
            </Card>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {gamme.boxes.map((box) => (
                <Card key={box.id} className="flex flex-col p-6 shadow-md hover:shadow-lg transition-shadow duration-300 border-t-4 border-gray-200">
                  <CardHeader className="p-0 mb-4">
                    <div className="flex items-center mb-2">
                      <ShoppingCart className="text-gray-500 mr-3" size={24} />
                      <CardTitle className="text-xl font-bold text-gray-800">{box.title}</CardTitle>
                    </div>
                    <CardDescription className="text-gray-600 text-base">
                      Découvrez le menu détaillé de cette box équilibrée.
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="p-0">
                    <ul className="list-disc list-inside text-gray-700 space-y-1 mb-4">
                      {box.menu.map((item, index) => (
                        <li key={index}>{item}</li>
                      ))}
                    </ul>
                    <p className="text-xl font-bold text-green-700 mt-4">{box.price.toFixed(2)} TND</p>
                    <Button
                      className="mt-4 bg-green-600 hover:bg-green-700 text-white"
                      onClick={() => addToCart({ ...box, image: placeholderImage })}
                    >
                      <ShoppingCart className="mr-2 h-4 w-4" /> Ajouter au panier
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
};

export default BoxesPage;