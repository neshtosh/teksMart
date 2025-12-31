import React from 'react';
import { useCart } from './CartContext';
import { Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface WishlistButtonProps {
  id: string;
  name: string;
  image: string;
  price: number;
  className?: string;
  iconClass?: string;
}

export function WishlistButton({ 
  id, 
  name, 
  image, 
  price,
  className = '',
  iconClass = 'h-4 w-4'
}: WishlistButtonProps) {
  const { isInWishlist, addToWishlist, removeFromWishlist } = useCart();
  const [isMounted, setIsMounted] = React.useState(false);
  const inWishlist = isInWishlist(id);

  React.useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  const toggleWishlist = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (inWishlist) {
      removeFromWishlist(id);
    } else {
      addToWishlist({ id, name, image, price });
    }
  };

  return (
    <Button
      variant="ghost"
      size="icon"
      className={`p-0 h-8 w-8 hover:bg-transparent ${className}`}
      onClick={toggleWishlist}
      aria-label={inWishlist ? 'Remove from wishlist' : 'Add to wishlist'}
    >
      <Heart 
        className={`transition-colors ${iconClass} ${
          inWishlist ? 'fill-red-500 text-red-500' : 'text-gray-600 hover:text-red-500'
        }`}
        fill={inWishlist ? 'currentColor' : 'none'}
      />
    </Button>
  );
}

export default WishlistButton;