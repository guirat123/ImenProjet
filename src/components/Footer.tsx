"use client";

import React from 'react';
import { MadeWithDyad } from './made-with-dyad';
import { Facebook, Phone } from 'lucide-react'; // Import Facebook and Phone icons

const Footer = () => {
  return (
    <footer className="bg-green-700 text-white p-6 mt-12">
      <div className="container mx-auto text-center">
        <p className="text-lg font-semibold mb-2">EAT HEALTHY BOX</p>
        <p className="text-sm mb-4">Améliorer vos habitudes alimentaires sur le campus.</p>
        
        {/* Social Media Icons */}
        <div className="flex justify-center space-x-6 mb-4">
          <a 
            href="https://www.facebook.com/imen.chaabouni.37" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="hover:text-yellow-400 transition-colors"
            aria-label="Facebook de Imen Chaabouni"
          >
            <Facebook size={24} />
          </a>
          <a 
            href="https://www.facebook.com/sana.talha.912737" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="hover:text-yellow-400 transition-colors"
            aria-label="Facebook de Sana Talha"
          >
            <Facebook size={24} />
          </a>
        </div>

        {/* Phone Numbers */}
        <div className="flex flex-col md:flex-row justify-center items-center space-y-2 md:space-y-0 md:space-x-6 mb-4">
          <a href="tel:92728554" className="flex items-center hover:underline text-sm">
            <Phone size={16} className="mr-2" /> 92 728 554
          </a>
          <a href="tel:22388376" className="flex items-center hover:underline text-sm">
            <Phone size={16} className="mr-2" /> 22 388 376
          </a>
        </div>

        {/* Existing links */}
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