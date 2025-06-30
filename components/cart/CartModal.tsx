import React from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { useCart } from './CartContext';

interface CartModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function CartModal({ isOpen, onClose }: CartModalProps) {
  const { cart, removeFromCart, updateCartQuantity, clearCart } = useCart();
  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-lg w-full p-0">
        <DialogHeader>
          <DialogTitle className="text-lg">Shopping Cart</DialogTitle>
        </DialogHeader>
        {cart.length === 0 ? (
          <div className="p-8 text-center text-gray-500">Your cart is empty.</div>
        ) : (
          <div className="p-4 space-y-4">
            {cart.map(item => (
              <div key={item.id} className="flex items-center gap-4 border-b pb-3">
                <img src={item.image} alt={item.name} className="w-14 h-14 object-contain rounded" />
                <div className="flex-1">
                  <div className="font-medium">{item.name}</div>
                  <div className="text-sm text-gray-500">KES {item.price.toLocaleString()}</div>
                  <div className="flex items-center gap-2 mt-1">
                    <span>Qty:</span>
                    <input
                      type="number"
                      min={1}
                      value={item.quantity}
                      onChange={e => updateCartQuantity(item.id, Math.max(1, Number(e.target.value)))}
                      className="w-16 border rounded px-2 py-1 text-sm"
                    />
                  </div>
                </div>
                <Button size="sm" variant="destructive" onClick={() => removeFromCart(item.id)}>
                  Remove
                </Button>
              </div>
            ))}
            <div className="flex justify-between items-center font-bold text-lg mt-4">
              <span>Total:</span>
              <span>KES {total.toLocaleString()}</span>
            </div>
            <div className="flex gap-2 mt-4">
              <Button className="flex-1 bg-blue-500 hover:bg-blue-600 text-white">Request Bulk Quote</Button>
              <Button variant="outline" className="flex-1" onClick={clearCart}>Clear Cart</Button>
            </div>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
} 