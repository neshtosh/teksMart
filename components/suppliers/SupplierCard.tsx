import Link from 'next/link';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { MessageCircle, MapPin, Star, Shield, Clock } from 'lucide-react';
import { Supplier } from '@/lib/types';

interface SupplierCardProps {
  supplier: Supplier;
}

export function SupplierCard({ supplier }: SupplierCardProps) {
  return (
    <Card className="supplier-card overflow-hidden">
      <CardContent className="p-6">
        <div className="flex items-center gap-4 mb-6">
          <Link 
            href={`/suppliers/${supplier.id}`} 
            className="flex-shrink-0"
          >
            <img
              src={supplier.logo}
              alt={`${supplier.name} logo`}
              className="w-12 h-12 rounded-lg object-cover"
            />
          </Link>
          <div className="flex-1 min-w-0">
            <div className="flex items-start justify-between gap-2 mb-2">
              <Link 
                href={`/suppliers/${supplier.id}`}
                className="hover:text-blue-600 transition-colors"
              >
                <h3 className="font-semibold text-gray-900 text-lg">
                  {supplier.name}
                </h3>
              </Link>
              <Badge className={
                supplier.verificationLevel === 'premium' 
                  ? 'bg-blue-500 text-white text-xs px-2 py-0.5 rounded-full' 
                  : 'bg-emerald-500 text-white text-xs px-2 py-0.5 rounded-full'
              }>
                {supplier.verificationLevel === 'premium' ? 'Premium' : 'Verified'}
              </Badge>
            </div>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-1 text-gray-600 text-sm">
                <MapPin className="h-3.5 w-3.5" />
                {supplier.location}
              </div>
              <div className="flex items-center gap-1 text-gray-600 text-sm">
                <Clock className="h-3.5 w-3.5" />
                {supplier.responseTime}
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-3 mb-6">
          <div className="text-center">
            <div className="flex items-center justify-center text-yellow-400 mb-1">
              <Star className="h-4 w-4 fill-current" />
            </div>
            <div className="font-bold text-gray-900 text-lg">{supplier.rating}</div>
            <div className="text-xs text-gray-500">Rating</div>
          </div>
          <div className="text-center">
            <div className="flex items-center justify-center text-blue-600 mb-1">
              <Shield className="h-4 w-4" />
            </div>
            <div className="font-bold text-gray-900 text-lg">{supplier.reviewCount}</div>
            <div className="text-xs text-gray-500">Reviews</div>
          </div>
          <div className="text-center">
            <div className="flex items-center justify-center text-emerald-600 mb-1">
              <Shield className="h-4 w-4" />
            </div>
            <div className="font-bold text-gray-900 text-lg truncate">{supplier.businessType}</div>
            <div className="text-xs text-gray-500">Type</div>
          </div>
        </div>

        <div className="flex gap-2">
          <Button 
            className="flex-1 bg-blue-500 hover:bg-blue-600 text-white" 
            asChild
          >
            <Link href={`/suppliers/${supplier.id}`}>
              View Profile
            </Link>
          </Button>
          <Button 
            variant="outline" 
            size="icon"
            className="w-10 h-10 border-gray-200"
          >
            <MessageCircle className="h-4 w-4" />
          </Button>
        </div>
      </CardContent>
    </Card>
  );
} 