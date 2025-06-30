import React from 'react';
import { useCart } from './CartContext';
import { Heart } from 'lucide-react';

interface WishlistButtonProps {
  id: string;
  name: string;
  image: string;
}

export default function WishlistButton({ id, name, image }: WishlistButtonProps) {
  const { isInWishlist, addToWishlist, removeFromWishlist } = useCart();
  const [isMounted, setIsMounted] = React.useState(false);
  const inWishlist = isInWishlist(id);

  React.useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  const toggleWishlist = () => {
    if (inWishlist) {
      removeFromWishlist(id);
    } else {
      addToWishlist({ id, name, image });
    }
  };

  return (
    <button
      aria-label={inWishlist ? 'Remove from wishlist' : 'Add to wishlist'}
      onClick={toggleWishlist}
      className={`transition-colors ${inWishlist ? 'text-rose-500' : 'text-gray-400 hover:text-rose-400'}`}
    >
      <Heart fill={inWishlist ? 'currentColor' : 'none'} className="w-6 h-6" />
    </button>
  );
} 