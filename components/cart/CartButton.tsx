import React from 'react';
import { ShoppingCart } from 'lucide-react';
import { useCart } from './CartContext';

interface CartButtonProps {
  onClick?: () => void;
}

export default function CartButton({ onClick }: CartButtonProps) {
  const { cart } = useCart();
  const count = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <button
      aria-label="View cart"
      onClick={onClick}
      className="relative text-gray-700 hover:text-blue-600 transition-colors"
    >
      <ShoppingCart className="w-7 h-7" />
      {count > 0 && (
        <span className="absolute -top-1 -right-1 bg-blue-500 text-white text-xs rounded-full px-1.5 py-0.5 font-bold">
          {count}
        </span>
      )}
    </button>
  );
} 