'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Slider } from '@/components/ui/slider';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { CATEGORIES } from '@/lib/constants';
import { Star, X } from 'lucide-react';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import React from 'react';

interface SearchFiltersProps {
  show: boolean;
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
  selectedSubcategory?: string;
  onSubcategoryChange?: (subcategory: string) => void;
  priceRange: [number, number];
  onPriceRangeChange: (range: [number, number]) => void;
  moqRange: [number, number];
  onMoqRangeChange: (range: [number, number]) => void;
  minRating: number;
  onMinRatingChange: (rating: number) => void;
  sortBy: string;
  onSortByChange: (sort: string) => void;
  onClose?: () => void; // for mobile modal close
}

export function SearchFilters({
  show,
  selectedCategory,
  onCategoryChange,
  selectedSubcategory = '',
  onSubcategoryChange = () => {},
  priceRange,
  onPriceRangeChange,
  moqRange,
  onMoqRangeChange,
  minRating,
  onMinRatingChange,
  sortBy,
  onSortByChange,
  onClose
}: SearchFiltersProps) {
  if (!show) return null;

  const isMobile = typeof window !== 'undefined' && window.innerWidth < 640;

  const clearAllFilters = () => {
    onCategoryChange('');
    onSubcategoryChange('');
    onPriceRangeChange([0, 100000]);
    onMoqRangeChange([1, 1000]);
    onMinRatingChange(0);
    onSortByChange('relevance');
  };

  // Reset subcategory if category changes
  React.useEffect(() => {
    onSubcategoryChange('');
  }, [selectedCategory]);

  const filterContent = (
    <div className="w-80 space-y-6">
      <Card>
        <CardHeader className="pb-3">
          <div className="flex items-center justify-between">
            <CardTitle className="text-lg">Filters</CardTitle>
            <Button variant="ghost" size="sm" onClick={clearAllFilters}>
              Clear All
            </Button>
            {isMobile && (
              <Button variant="ghost" size="sm" onClick={onClose}>
                Close
              </Button>
            )}
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Sort By */}
          <div>
            <label className="text-sm font-medium text-gray-700 mb-3 block">
              Sort By
            </label>
            <Select value={sortBy} onValueChange={onSortByChange}>
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="relevance">Relevance</SelectItem>
                <SelectItem value="price-low">Price: Low to High</SelectItem>
                <SelectItem value="price-high">Price: High to Low</SelectItem>
                <SelectItem value="rating">Highest Rated</SelectItem>
                <SelectItem value="moq-low">Lowest MOQ</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <Separator />

          {/* Categories */}
          <div>
            <label className="text-sm font-medium text-gray-700 mb-3 block">
              Categories
            </label>
            <div className="space-y-2">
              <Button
                variant={selectedCategory === '' ? 'default' : 'ghost'}
                size="sm"
                className="w-full justify-start"
                onClick={() => onCategoryChange('')}
              >
                All Categories
              </Button>
              {CATEGORIES.map((category) => (
                <Button
                  key={category.id}
                  variant={selectedCategory === category.id ? 'default' : 'ghost'}
                  size="sm"
                  className="w-full justify-between"
                  onClick={() => onCategoryChange(category.id)}
                >
                  <span>{category.name}</span>
                  <Badge variant="secondary" className="text-xs">
                    {category.productCount.toLocaleString()}
                  </Badge>
                </Button>
              ))}
            </div>
            {/* Subcategories */}
            {selectedCategory && (
              <div className="mt-2 space-y-1">
                {(CATEGORIES.find(c => c.id === selectedCategory)?.subcategories || []).map(sub => (
                  <Button
                    key={sub.id}
                    variant={selectedSubcategory === sub.id ? 'default' : 'ghost'}
                    size="sm"
                    className="w-full justify-between ml-4"
                    onClick={() => onSubcategoryChange(sub.id)}
                  >
                    <span>{sub.name}</span>
                    <Badge variant="secondary" className="text-xs">
                      {sub.productCount.toLocaleString()}
                    </Badge>
                  </Button>
                ))}
              </div>
            )}
          </div>

          <Separator />

          {/* Price Range */}
          <div>
            <label className="text-sm font-medium text-gray-700 mb-3 block">
              Price Range (KES)
            </label>
            <div className="px-2">
              <Slider
                value={priceRange}
                onValueChange={onPriceRangeChange}
                max={100000}
                min={0}
                step={1000}
                className="mb-3"
              />
              <div className="flex justify-between text-sm text-gray-600">
                <span>KES {priceRange[0].toLocaleString()}</span>
                <span>KES {priceRange[1].toLocaleString()}</span>
              </div>
            </div>
          </div>

          <Separator />

          {/* MOQ Range */}
          <div>
            <label className="text-sm font-medium text-gray-700 mb-3 block">
              MOQ Range (pieces)
            </label>
            <div className="px-2">
              <Slider
                value={moqRange}
                onValueChange={onMoqRangeChange}
                max={1000}
                min={1}
                step={10}
                className="mb-3"
              />
              <div className="flex justify-between text-sm text-gray-600">
                <span>{moqRange[0]} pcs</span>
                <span>{moqRange[1]} pcs</span>
              </div>
            </div>
          </div>

          <Separator />

          {/* Rating Filter */}
          <div>
            <label className="text-sm font-medium text-gray-700 mb-3 block">
              Minimum Rating
            </label>
            <div className="space-y-2">
              {[0, 3, 4, 4.5].map((rating) => (
                <Button
                  key={rating}
                  variant={minRating === rating ? 'default' : 'ghost'}
                  size="sm"
                  className="w-full justify-start"
                  onClick={() => onMinRatingChange(rating)}
                >
                  <div className="flex items-center gap-2">
                    {rating === 0 ? (
                      <span>All Ratings</span>
                    ) : (
                      <>
                        <div className="flex">
                          {[1, 2, 3, 4, 5].map((star) => (
                            <Star
                              key={star}
                              className={`h-4 w-4 ${
                                star <= rating
                                  ? 'fill-yellow-400 text-yellow-400'
                                  : 'text-gray-300'
                              }`}
                            />
                          ))}
                        </div>
                        <span>{rating}+ stars</span>
                      </>
                    )}
                  </div>
                </Button>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Quick Filters */}
      <Card>
        <CardHeader className="pb-3">
          <CardTitle className="text-lg">Quick Filters</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-2">
            <Badge 
              variant="outline" 
              className="cursor-pointer hover:bg-blue-50"
              onClick={() => onMinRatingChange(4.5)}
            >
              Top Rated
            </Badge>
            <Badge 
              variant="outline" 
              className="cursor-pointer hover:bg-blue-50"
              onClick={() => onMoqRangeChange([1, 50])}
            >
              Low MOQ
            </Badge>
            <Badge 
              variant="outline" 
              className="cursor-pointer hover:bg-blue-50"
              onClick={() => onPriceRangeChange([0, 10000])}
            >
              Budget Friendly
            </Badge>
            <Badge 
              variant="outline" 
              className="cursor-pointer hover:bg-blue-50"
              onClick={() => onCategoryChange('mobile-phones')}
            >
              Mobile Phones
            </Badge>
          </div>
        </CardContent>
      </Card>
    </div>
  );

  // Responsive: show as modal/drawer on mobile
  if (isMobile) {
    return (
      <Dialog open={show} onOpenChange={onClose}>
        <DialogContent className="max-w-xs w-full p-0">
          {filterContent}
        </DialogContent>
      </Dialog>
    );
  }

  // Desktop sidebar
  return filterContent;
}