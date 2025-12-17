"use client";

import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Utensils, Clock, Wallet, GraduationCap, CalendarDays, Timer } from 'lucide-react';

const questionnaireLink = "https://docs.google.com/forms/d/e/1FAIpQLSdVmNTt4rd7P962XuBAZ9DpkYCQOGqxmBuJ-vKw60YykVyHbw/viewform?fbclid=IwY2xjawOscw1leHRuA2FlbQIxMQBzcnRjBmFwcF9pZA80Mzc2MjYzMTY5NzM3ODgAAR6Ew13-jhPKUxgiXwHtT6ZVITxRfN16MG5PsZJhnDdi2p9RXt0aBOePADQPbA_aem_YxKH51V4bD5QdCraCA_Axw";

const HomePage = () => {
  return (
    <div className="bg-white text-gray-800">
      {/* Hero Section */}
      <section className="relative h-[60vh] md:h-[70vh] bg-cover bg-center flex items-center justify-center text-white" style={{ backgroundImage: "url('/images/hero-background.png')" }}>
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 text-center p-4 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-4">
            Mangez Sainement, Gagnez du Temps, Vivez Mieux
          </h1>
          <p className="text-lg md:text-xl mb-8">
            Des repas équilibrés et pratiques, adaptés à votre vie étudiante et professionnelle sur le campus.
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <Link to="/boxes">
              <Button className="bg-green-500 hover:bg-green-600 text-white text-lg px-8 py-6 rounded-full shadow-lg transition-all duration-300 ease-in-out transform hover:scale-105">
                Découvrir nos box
              </Button>
            </Link>
            <a href={questionnaireLink} target="_blank" rel="noopener noreferrer">
              <Button variant="outline" className="bg-white text-green-700 hover:bg-gray-100 text-lg px-8 py-6 rounded-full shadow-lg transition-all duration-300 ease-in-out transform hover:scale-105 border-2 border-green-500">
                Participer au questionnaire
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Concept Presentation */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto text-center px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-green-700 mb-6">Qu'est-ce que EAT HEALTHY BOX ?</h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
            EAT HEALTHY BOX est votre partenaire pour une alimentation saine et équilibrée, spécialement conçue pour les étudiants et les employés du campus. Nous vous proposons des box repas nutritives, variées et faciles à emporter, pour vous aider à maintenir une bonne hygiène de vie malgré un emploi du temps chargé.
          </p>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-green-700 text-center mb-12">Nos Avantages</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 border-t-4 border-green-500">
              <CardHeader className="flex flex-col items-center">
                <Utensils className="text-green-500 mb-4" size={48} />
                <CardTitle className="text-xl font-semibold mb-2">Repas Équilibrés</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600">
                  Des recettes élaborées par des nutritionnistes pour une alimentation complète et saine.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 border-t-4 border-yellow-500">
              <CardHeader className="flex flex-col items-center">
                <Clock className="text-yellow-500 mb-4" size={48} />
                <CardTitle className="text-xl font-semibold mb-2">Gain de Temps</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600">
                  Plus besoin de cuisiner ou de chercher où manger, vos box sont prêtes à l'emploi.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 border-t-4 border-green-500">
              <CardHeader className="flex flex-col items-center">
                <Wallet className="text-green-500 mb-4" size={48} />
                <CardTitle className="text-xl font-semibold mb-2">Abordable</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600">
                  Des options économiques pour s'adapter à tous les budgets, sans compromis sur la qualité.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 border-t-4 border-yellow-500">
              <CardHeader className="flex flex-col items-center">
                <GraduationCap className="text-yellow-500 mb-4" size={48} />
                <CardTitle className="text-xl font-semibold mb-2">Adapté au Campus</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600">
                  Livraison facile et points de collecte pratiques directement sur votre campus.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Days & Hours Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-green-700 text-center mb-12">
            JOURS & HORAIRES
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
            <Card className="p-6 shadow-lg border-l-4 border-green-500">
              <CardHeader className="flex flex-row items-center space-x-4 p-0 mb-4">
                <CalendarDays className="text-green-500" size={36} />
                <CardTitle className="text-2xl font-bold text-gray-800">Jours de Service</CardTitle>
              </CardHeader>
              <CardContent className="p-0 text-lg text-gray-700 leading-relaxed">
                <p className="mb-2"><span className="font-semibold">Jours de travail :</span> Lundi → Vendredi</p>
                <p><span className="font-semibold">Fermé :</span> Samedi & Dimanche</p>
              </CardContent>
            </Card>
            <Card className="p-6 shadow-lg border-l-4 border-yellow-500">
              <CardHeader className="flex flex-row items-center space-x-4 p-0 mb-4">
                <Timer className="text-yellow-500" size={36} />
                <CardTitle className="text-2xl font-bold text-gray-800">Horaires de Commande</CardTitle>
              </CardHeader>
              <CardContent className="p-0 text-lg text-gray-700 leading-relaxed">
                <p><span className="font-semibold">Horaires commande :</span> 10h00 – 22h00</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="bg-green-700 text-white py-16 text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Prêt à transformer vos habitudes ?</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Découvrez nos différentes box saines ou aidez-nous à améliorer notre offre en participant à notre questionnaire.
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <Link to="/boxes">
              <Button className="bg-yellow-500 hover:bg-yellow-600 text-green-900 text-lg px-8 py-6 rounded-full shadow-lg transition-all duration-300 ease-in-out transform hover:scale-105">
                Voir toutes les box
              </Button>
            </Link>
            <a href={questionnaireLink} target="_blank" rel="noopener noreferrer">
              <Button variant="outline" className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-green-700 text-lg px-8 py-6 rounded-full shadow-lg transition-all duration-300 ease-in-out transform hover:scale-105">
                Je participe !
              </Button>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;