"use client";

import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Menu, X, ShoppingCart } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';
import { useCart } from '@/context/CartContext'; // Import useCart

const questionnaireLink = "https://docs.google.com/forms/d/e/1FAIpQLSdVmNTt4rd7P962XuBAZ9DpkYCQOGqxmBuJ-vKw60YykVyHbw/viewform?fbclid=IwY2xjawOscw1leHRuA2FlbQIxMQBzcnRjBmFwcF9pZA80Mzc2MjYzMTY5NzM3ODgAAR6Ew13-jhPKUxgiXwHtT6ZVITxRfN16MG5PsZJhnDdi2p9RXt0aBOePADQPbA_aem_YxKH51V4bD5QdCraCA_Axw";

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const isMobile = useIsMobile();
  const { getTotalItems } = useCart(); // Get total items from cart context

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white shadow-sm p-4 sticky top-0 z-50 border-b border-gray-200">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold text-green-700">
          EAT HEALTHY BOX
        </Link>

        {isMobile ? (
          <div className="flex items-center space-x-4">
            <Link to="/cart" className="relative text-gray-700 hover:text-green-700">
              <ShoppingCart size={24} />
              {getTotalItems() > 0 && (
                <span className="absolute -top-2 -right-2 bg-yellow-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {getTotalItems()}
                </span>
              )}
            </Link>
            <Button variant="ghost" size="icon" onClick={toggleMenu} className="text-green-700">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </Button>
          </div>
        ) : (
          <div className="flex items-center space-x-6">
            <Link to="/" className="text-gray-700 hover:text-green-700 font-medium">
              Accueil
            </Link>
            <Link to="/about" className="text-gray-700 hover:text-green-700 font-medium">
              À propos
            </Link>
            <Link to="/boxes" className="text-gray-700 hover:text-green-700 font-medium">
              Nos Box
            </Link>
            <Link to="/nutrition" className="text-gray-700 hover:text-green-700 font-medium">
              Nutrition
            </Link>
            <a href={questionnaireLink} target="_blank" rel="noopener noreferrer">
              <Button className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold">
                Participer au questionnaire
              </Button>
            </a>
            <Link to="/cart" className="relative text-gray-700 hover:text-green-700">
              <ShoppingCart size={24} />
              {getTotalItems() > 0 && (
                <span className="absolute -top-2 -right-2 bg-yellow-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {getTotalItems()}
                </span>
              )}
            </Link>
          </div>
        )}
      </div>

      {isMobile && isOpen && (
        <div className="absolute top-full left-0 w-full bg-white shadow-lg py-4 px-4 border-t border-gray-200">
          <div className="flex flex-col space-y-4">
            <Link to="/" className="text-gray-700 hover:text-green-700 font-medium" onClick={toggleMenu}>
              Accueil
            </Link>
            <Link to="/about" className="text-gray-700 hover:text-green-700 font-medium" onClick={toggleMenu}>
              À propos
            </Link>
            <Link to="/boxes" className="text-gray-700 hover:text-green-700 font-medium" onClick={toggleMenu}>
              Nos Box
            </Link>
            <Link to="/nutrition" className="text-gray-700 hover:text-green-700 font-medium" onClick={toggleMenu}>
              Nutrition
            </Link>
            <a href={questionnaireLink} target="_blank" rel="noopener noreferrer" className="w-full">
              <Button className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold w-full">
                Participer au questionnaire
              </Button>
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;