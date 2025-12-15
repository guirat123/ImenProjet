"use client";

import React from 'react';
import { Lightbulb, Target, Heart, Leaf } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const AboutPage = () => {
  return (
    <div className="bg-white text-gray-800 py-12 md:py-16">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl md:text-5xl font-bold text-center text-green-700 mb-12">
          À propos du projet EAT HEALTHY BOX
        </h1>

        {/* Section Contexte Académique et Entrepreneurial */}
        <section className="mb-16">
          <Card className="p-6 md:p-10 shadow-lg border-l-4 border-yellow-500">
            <CardHeader className="flex flex-row items-center space-x-4 mb-4">
              <Lightbulb className="text-yellow-500" size={36} />
              <CardTitle className="text-2xl md:text-3xl font-semibold text-green-700">
                Un Projet Né de la Recherche et de l'Innovation
              </CardTitle>
            </CardHeader>
            <CardContent className="text-lg text-gray-700 leading-relaxed">
              <p className="mb-4">
                EAT HEALTHY BOX est un projet académique et entrepreneurial ambitieux, issu d'une collaboration entre des étudiants en nutrition, en gestion et en informatique. Notre objectif est d'appliquer des connaissances théoriques à une problématique concrète : l'amélioration des habitudes alimentaires en milieu universitaire.
              </p>
              <p>
                Nous combinons une approche scientifique de la nutrition avec une vision entrepreneuriale pour développer une solution innovante et durable, capable de répondre aux besoins spécifiques de la communauté du campus.
              </p>
            </CardContent>
          </Card>
        </section>

        {/* Section Problématique */}
        <section className="mb-16">
          <Card className="p-6 md:p-10 shadow-lg border-l-4 border-green-500">
            <CardHeader className="flex flex-row items-center space-x-4 mb-4">
              <Target className="text-green-500" size={36} />
              <CardTitle className="text-2xl md:text-3xl font-semibold text-green-700">
                La Problématique : Des Habitudes Alimentaires à Améliorer
              </CardTitle>
            </CardHeader>
            <CardContent className="text-lg text-gray-700 leading-relaxed">
              <p className="mb-4">
                Le rythme de vie effréné sur un campus universitaire, entre cours, travail, activités sociales et contraintes budgétaires, conduit souvent les étudiants et les employés à négliger leur alimentation. Fast-food, repas sautés, choix peu nutritifs... ces habitudes ont un impact direct sur la concentration, l'énergie et la santé à long terme.
              </p>
              <p>
                Notre étude a révélé un besoin criant de solutions pratiques, saines et abordables pour contrer cette tendance et favoriser un mode de vie plus équilibré.
              </p>
            </CardContent>
          </Card>
        </section>

        {/* Section Solution Proposée */}
        <section className="mb-16">
          <Card className="p-6 md:p-10 shadow-lg border-l-4 border-yellow-500">
            <CardHeader className="flex flex-row items-center space-x-4 mb-4">
              <Leaf className="text-yellow-500" size={36} />
              <CardTitle className="text-2xl md:text-3xl font-semibold text-green-700">
                Notre Solution : Les Box Saines EAT HEALTHY BOX
              </CardTitle>
            </CardHeader>
            <CardContent className="text-lg text-gray-700 leading-relaxed">
              <p className="mb-4">
                EAT HEALTHY BOX propose une gamme de repas équilibrés, préparés avec des ingrédients frais et de saison, et conditionnés en box pratiques à emporter. Chaque box est conçue pour répondre à des besoins nutritionnels spécifiques (végétarien, protéiné, énergie, économique) et s'intègre parfaitement dans un emploi du temps chargé.
              </p>
              <p>
                Nous facilitons l'accès à une alimentation de qualité directement sur le campus, en offrant une alternative saine, savoureuse et abordable aux options existantes.
              </p>
            </CardContent>
          </Card>
        </section>

        {/* Section Impact */}
        <section>
          <Card className="p-6 md:p-10 shadow-lg border-l-4 border-green-500">
            <CardHeader className="flex flex-row items-center space-x-4 mb-4">
              <Heart className="text-green-500" size={36} />
              <CardTitle className="text-2xl md:text-3xl font-semibold text-green-700">
                L'Impact : Bien-être, Santé et Productivité
              </CardTitle>
            </CardHeader>
            <CardContent className="text-lg text-gray-700 leading-relaxed">
              <p className="mb-4">
                En choisissant EAT HEALTHY BOX, vous investissez dans votre bien-être. Une meilleure alimentation se traduit par une énergie accrue, une meilleure concentration, une réduction du stress et une amélioration générale de la santé.
              </p>
              <p>
                Notre projet vise à créer un environnement de campus plus sain et plus productif, où chacun peut atteindre son plein potentiel sans compromettre sa santé. C'est un pas vers une communauté universitaire plus consciente et plus épanouie.
              </p>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  );
};

export default AboutPage;