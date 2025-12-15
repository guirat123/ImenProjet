"use client";

import React, { useState } from 'react';
import { useCart } from '@/context/CartContext';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { MinusCircle, PlusCircle, Trash2, ShoppingBag, CheckCircle } from 'lucide-react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from '@/components/ui/dialog';
import { toast } from 'sonner';
import jsPDF from 'jspdf';
import { format } from 'date-fns';

const CartPage = () => {
  const { cart, removeFromCart, updateQuantity, clearCart, getTotalPrice } = useCart();
  const [showInvoiceDialog, setShowInvoiceDialog] = useState(false);
  const [showConfirmDialog, setShowConfirmDialog] = useState(false);

  const generateInvoicePdf = () => {
    const doc = new jsPDF();
    const date = format(new Date(), 'dd/MM/yyyy');
    let y = 20; // Initial Y position

    // Title
    doc.setFontSize(24);
    doc.text("FACTURE", 105, y, { align: "center" });
    y += 15;

    // Date
    doc.setFontSize(12);
    doc.text(`Date: ${date}`, 10, y);
    y += 20;

    // Table Headers
    doc.setFontSize(12);
    doc.setFont("helvetica", "bold");
    doc.text("Article", 10, y);
    doc.text("Quantité", 80, y);
    doc.text("Prix Unitaire", 120, y);
    doc.text("Total", 170, y);
    y += 7;
    doc.line(10, y, 200, y); // Horizontal line
    y += 10;

    // Table Rows
    doc.setFont("helvetica", "normal");
    cart.forEach(item => {
      doc.text(item.title, 10, y);
      doc.text(item.quantity.toString(), 80, y);
      doc.text(`${item.price.toFixed(2)} TND`, 120, y);
      doc.text(`${(item.price * item.quantity).toFixed(2)} TND`, 170, y);
      y += 10;
    });

    y += 10;
    doc.line(10, y, 200, y); // Horizontal line
    y += 10;

    // Total
    doc.setFontSize(14);
    doc.setFont("helvetica", "bold");
    doc.text(`Total: ${getTotalPrice().toFixed(2)} TND`, 170, y, { align: "right" });

    doc.save(`facture_EAT_HEALTHY_BOX_${date.replace(/\//g, '-')}.pdf`);
  };

  const handleBuyClick = () => {
    if (cart.length === 0) {
      toast.error("Votre panier est vide. Ajoutez des articles avant d'acheter.");
      return;
    }
    setShowConfirmDialog(true);
  };

  const handleConfirmPurchase = () => {
    generateInvoicePdf(); // Generate and download PDF
    setShowInvoiceDialog(true); // Show the existing invoice dialog
    setShowConfirmDialog(false); // Close confirmation dialog
    toast.success("Votre commande a été confirmée et la facture téléchargée !");
  };

  const handleCloseInvoice = () => {
    setShowInvoiceDialog(false);
    clearCart(); // Clear cart after purchase
  };

  return (
    <div className="container mx-auto px-4 py-12 md:py-16">
      <h1 className="text-4xl md:text-5xl font-bold text-center text-green-700 mb-12">
        Votre Panier
      </h1>

      {cart.length === 0 ? (
        <Card className="p-8 text-center shadow-lg">
          <CardTitle className="text-2xl text-gray-700 mb-4">Votre panier est vide.</CardTitle>
          <p className="text-gray-600">Ajoutez des box saines pour commencer votre commande !</p>
          <Button className="mt-6 bg-green-600 hover:bg-green-700 text-white" onClick={() => window.location.href = '/boxes'}>
            Découvrir nos box
          </Button>
        </Card>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-6">
            {cart.map((item) => (
              <Card key={item.id} className="flex items-center p-4 shadow-md">
                <img src={item.image} alt={item.title} className="w-24 h-24 object-cover rounded-md mr-4" />
                <div className="flex-grow">
                  <h3 className="text-xl font-semibold text-green-700">{item.title}</h3>
                  <p className="text-gray-600">{item.price.toFixed(2)} TND / unité</p>
                  <div className="flex items-center mt-2 space-x-2">
                    <Button
                      variant="outline"
                      size="icon"
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      className="h-8 w-8"
                    >
                      <MinusCircle className="h-4 w-4" />
                    </Button>
                    <span className="text-lg font-medium">{item.quantity}</span>
                    <Button
                      variant="outline"
                      size="icon"
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      className="h-8 w-8"
                    >
                      <PlusCircle className="h-4 w-4" />
                    </Button>
                    <Button
                      variant="destructive"
                      size="icon"
                      onClick={() => removeFromCart(item.id)}
                      className="ml-4 h-8 w-8"
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-lg font-bold text-green-700">{(item.price * item.quantity).toFixed(2)} TND</p>
                </div>
              </Card>
            ))}
          </div>

          <div className="lg:col-span-1">
            <Card className="p-6 shadow-lg sticky top-24">
              <CardHeader className="p-0 mb-4">
                <CardTitle className="text-2xl font-bold text-green-700">Résumé de la commande</CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                <div className="flex justify-between items-center text-xl font-semibold mb-4">
                  <span>Total :</span>
                  <span>{getTotalPrice().toFixed(2)} TND</span>
                </div>
                <Button
                  className="w-full bg-yellow-500 hover:bg-yellow-600 text-white text-lg py-6"
                  onClick={handleBuyClick}
                >
                  <ShoppingBag className="mr-2 h-5 w-5" /> Acheter
                </Button>
                <Button
                  variant="outline"
                  className="w-full mt-4 text-gray-700 hover:bg-gray-100"
                  onClick={clearCart}
                >
                  Vider le panier
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      )}

      {/* Confirmation Dialog */}
      <Dialog open={showConfirmDialog} onOpenChange={setShowConfirmDialog}>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle className="text-green-700">Confirmer votre commande</DialogTitle>
            <DialogDescription>
              Êtes-vous sûr de vouloir procéder à l'achat de ces articles ?
            </DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <Button variant="outline" onClick={() => setShowConfirmDialog(false)}>
              Annuler
            </Button>
            <Button onClick={handleConfirmPurchase} className="bg-green-600 hover:bg-green-700 text-white">
              Confirmer l'achat
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Invoice Dialog (after purchase) */}
      <Dialog open={showInvoiceDialog} onOpenChange={setShowInvoiceDialog}>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle className="text-green-700 flex items-center">
              <CheckCircle className="mr-2 text-green-500" /> Commande confirmée !
            </DialogTitle>
            <DialogDescription>
              Merci pour votre achat ! Votre facture a été téléchargée.
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            {cart.map((item) => (
              <div key={item.id} className="flex justify-between">
                <span>{item.title} (x{item.quantity})</span>
                <span>{(item.price * item.quantity).toFixed(2)} TND</span>
              </div>
            ))}
            <div className="flex justify-between font-bold text-lg border-t pt-2 mt-2">
              <span>Total payé :</span>
              <span>{getTotalPrice().toFixed(2)} TND</span>
            </div>
          </div>
          <DialogFooter>
            <Button onClick={handleCloseInvoice} className="bg-green-600 hover:bg-green-700 text-white">
              Fermer
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default CartPage;