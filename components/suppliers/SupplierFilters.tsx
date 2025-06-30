import { Card } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';

interface SupplierFiltersProps {
  verification: string;
  setVerification: (v: string) => void;
  businessType: string;
  setBusinessType: (v: string) => void;
  location: string;
  setLocation: (v: string) => void;
  rating: string;
  setRating: (v: string) => void;
}

export function SupplierFilters({
  verification,
  setVerification,
  businessType,
  setBusinessType,
  location,
  setLocation,
  rating,
  setRating,
}: SupplierFiltersProps) {
  return (
    <Card className="border border-gray-200">
      {/* Verification Level */}
      <div className="p-4 border-b border-gray-200">
        <h3 className="font-semibold text-gray-900 mb-4">Verification Level</h3>
        <RadioGroup value={verification} onValueChange={setVerification} className="space-y-3">
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="all" id="all" />
            <Label htmlFor="all" className="text-sm text-gray-600 cursor-pointer">All Suppliers</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="premium" id="premium" />
            <Label htmlFor="premium" className="text-sm text-gray-600 cursor-pointer">Premium Suppliers</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="verified" id="verified" />
            <Label htmlFor="verified" className="text-sm text-gray-600 cursor-pointer">Verified Suppliers</Label>
          </div>
        </RadioGroup>
      </div>

      {/* Business Type */}
      <div className="p-4 border-b border-gray-200">
        <h3 className="font-semibold text-gray-900 mb-4">Business Type</h3>
        <RadioGroup value={businessType} onValueChange={setBusinessType} className="space-y-3">
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="all" id="business-all" />
            <Label htmlFor="business-all" className="text-sm text-gray-600 cursor-pointer">All Types</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="manufacturer" id="manufacturer" />
            <Label htmlFor="manufacturer" className="text-sm text-gray-600 cursor-pointer">Manufacturer</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="distributor" id="distributor" />
            <Label htmlFor="distributor" className="text-sm text-gray-600 cursor-pointer">Distributor</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="trading" id="trading" />
            <Label htmlFor="trading" className="text-sm text-gray-600 cursor-pointer">Trading Company</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="retailer" id="retailer" />
            <Label htmlFor="retailer" className="text-sm text-gray-600 cursor-pointer">Retailer</Label>
          </div>
        </RadioGroup>
      </div>

      {/* Location */}
      <div className="p-4 border-b border-gray-200">
        <h3 className="font-semibold text-gray-900 mb-4">Location</h3>
        <RadioGroup value={location} onValueChange={setLocation} className="space-y-3">
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="all" id="location-all" />
            <Label htmlFor="location-all" className="text-sm text-gray-600 cursor-pointer">All Locations</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="kenya" id="kenya" />
            <Label htmlFor="kenya" className="text-sm text-gray-600 cursor-pointer">Kenya</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="china" id="china" />
            <Label htmlFor="china" className="text-sm text-gray-600 cursor-pointer">China</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="uae" id="uae" />
            <Label htmlFor="uae" className="text-sm text-gray-600 cursor-pointer">UAE</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="other" id="other" />
            <Label htmlFor="other" className="text-sm text-gray-600 cursor-pointer">Other Countries</Label>
          </div>
        </RadioGroup>
      </div>

      {/* Rating */}
      <div className="p-4">
        <h3 className="font-semibold text-gray-900 mb-4">Rating</h3>
        <RadioGroup value={rating} onValueChange={setRating} className="space-y-3">
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="all" id="rating-all" />
            <Label htmlFor="rating-all" className="text-sm text-gray-600 cursor-pointer">All Ratings</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="4.5" id="rating-4.5" />
            <Label htmlFor="rating-4.5" className="text-sm text-gray-600 cursor-pointer">4.5+ Stars</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="4" id="rating-4" />
            <Label htmlFor="rating-4" className="text-sm text-gray-600 cursor-pointer">4+ Stars</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="3" id="rating-3" />
            <Label htmlFor="rating-3" className="text-sm text-gray-600 cursor-pointer">3+ Stars</Label>
          </div>
        </RadioGroup>
      </div>
    </Card>
  );
} 