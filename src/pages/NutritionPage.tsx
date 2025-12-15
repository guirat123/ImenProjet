"use client";

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Apple, Clock, Brain, Coffee } from 'lucide-react';

const NutritionPage = () => {
  return (
    <div className="bg-white text-gray-800 py-12 md:py-16">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl md:text-5xl font-bold text-center text-green-700 mb-12">
          Nutrition & Mode de Vie sur le Campus
        </h1>
        <p className="text-lg text-center text-gray-700 max-w-3xl mx-auto mb-16">
          Adopter de bonnes habitudes alimentaires et un mode de vie équilibré est essentiel pour réussir vos études et vous épanouir. Voici quelques conseils pratiques !
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Conseils pour une alimentation saine */}
          <Card className="p-6 shadow-lg border-t-4 border-green-500">
            <CardHeader className="flex flex-row items-center space-x-4 mb-4">
              <Apple className="text-green-500" size={36} />
              <CardTitle className="text-2xl font-semibold text-green-700">
                Conseils pour une alimentation saine
              </CardTitle>
            </CardHeader>
            <CardContent className="text-lg text-gray-700 leading-relaxed">
              <ul className="list-disc list-inside space-y-3">
                <li><span className="font-semibold">Variez les plaisirs :</span> Mangez une grande diversité de fruits, légumes, céréales complètes et protéines.</li>
                <li><span className="font-semibold">Hydratez-vous :</span> Buvez beaucoup d'eau tout au long de la journée, et limitez les boissons sucrées.</li>
                <li><span className="font-semibold">Écoutez votre corps :</span> Mangez quand vous avez faim, arrêtez quand vous êtes rassasié.</li>
                <li><span className="font-semibold">Limitez les aliments transformés :</span> Privilégiez les produits bruts et cuisinez simple.</li>
                <li><span className="font-semibold">Ne sautez pas de repas :</span> Surtout le petit-déjeuner, pour bien démarrer la journée.</li>
              </ul>
            </CardContent>
          </Card>

          {/* Astuces pour manger équilibré malgré le manque de temps */}
          <Card className="p-6 shadow-lg border-t-4 border-yellow-500">
            <CardHeader className="flex flex-row items-center space-x-4 mb-4">
              <Clock className="text-yellow-500" size={36} />
              <CardTitle className="text-2xl font-semibold text-green-700">
                Manger équilibré quand le temps manque
              </CardTitle>
            </CardHeader>
            <CardContent className="text-lg text-gray-700 leading-relaxed">
              <ul className="list-disc list-inside space-y-3">
                <li><span className="font-semibold">Préparez à l'avance (Meal Prep) :</span> Cuisinez en grande quantité le week-end pour la semaine.</li>
                <li><span className="font-semibold">Optez pour des snacks sains :</span> Fruits, noix, yaourts, légumes coupés sont vos alliés.</li>
                <li><span className="font-semibold">Utilisez les services du campus :</span> Cherchez les options saines proposées par les cafétérias.</li>
                <li><span className="font-semibold">Pensez aux box repas :</span> Comme EAT HEALTHY BOX, une solution clé en main et nutritive.</li>
                <li><span className="font-semibold">Repas rapides et simples :</span> Salades composées, wraps, soupes instantanées (enrichies).</li>
              </ul>
            </CardContent>
          </Card>

          {/* Recommandations liées à la productivité et au bien-être */}
          <Card className="p-6 shadow-lg border-t-4 border-green-500">
            <CardHeader className="flex flex-row items-center space-x-4 mb-4">
              <Brain className="text-green-500" size={36} />
              <CardTitle className="text-2xl font-semibold text-green-700">
                Productivité et Bien-être
              </CardTitle>
            </CardHeader>
            <CardContent className="text-lg text-gray-700 leading-relaxed">
              <ul className="list-disc list-inside space-y-3">
                <li><span className="font-semibold">Sommeil de qualité :</span> Visez 7 à 9 heures de sommeil par nuit pour une meilleure concentration.</li>
                <li><span className="font-semibold">Activité physique régulière :</span> Même 30 minutes de marche par jour peuvent faire la différence.</li>
                <li><span className="font-semibold">Gérez le stress :</span> Techniques de relaxation, méditation, ou simplement prendre des pauses.</li>
                <li><span className="font-semibold">Organisez votre temps :</span> Planifiez vos repas et vos pauses pour éviter le surmenage.</li>
                <li><span className="font-semibold">Connexion sociale :</span> Maintenez des liens avec vos amis et votre famille pour un équilibre émotionnel.</li>
              </ul>
            </CardContent>
          </Card>

          {/* Un petit plus pour le campus */}
          <Card className="p-6 shadow-lg border-t-4 border-yellow-500">
            <CardHeader className="flex flex-row items-center space-x-4 mb-4">
              <Coffee className="text-yellow-500" size={36} />
              <CardTitle className="text-2xl font-semibold text-green-700">
                Le Campus, un lieu de vie sain
              </CardTitle>
            </CardHeader>
            <CardContent className="text-lg text-gray-700 leading-relaxed">
              <p className="mb-4">
                Profitez des ressources de votre campus : salles de sport, espaces verts pour se détendre, bibliothèques pour étudier sereinement. Une bonne alimentation combinée à un environnement propice est la clé de votre succès.
              </p>
              <p>
                N'hésitez pas à explorer les initiatives locales pour le bien-être et la nutrition, et à partager vos propres astuces avec la communauté !
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default NutritionPage;