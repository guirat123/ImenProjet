"use client";

import React from 'react';
import { MadeWithDyad } from './made-with-dyad';

const Footer = () => {
  return (
    <footer className="bg-green-700 text-white p-6 mt-12">
      <div className="container mx-auto text-center">
        <p className="text-lg font-semibold mb-2">EAT HEALTHY BOX</p>
        <p className="text-sm mb-4">Améliorer vos habitudes alimentaires sur le campus.</p>
        <div className="flex justify-center space-x-6 mb-4">
          <a href="#" className="hover:underline text-sm">Confidentialité</a>
          <a href="#" className="hover:underline text-sm">Conditions d'utilisation</a>
          <a href="#" className="hover:underline text-sm">Contact</a>
        </div>
        <p className="text-xs">&copy; {new Date().getFullYear()} EAT HEALTHY BOX. Tous droits réservés.</p>
        <MadeWithDyad />
      </div>
    </footer>
  );
};

export default Footer;