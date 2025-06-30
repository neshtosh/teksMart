import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const MOCK_FAVORITES = [
  { id: 1, name: 'Lenovo ThinkPad X1', image: '/mock/thinkpad.jpg' },
  { id: 2, name: 'iPhone 14 Pro', image: '/mock/iphone14.jpg' },
  { id: 3, name: 'JBL Bluetooth Speaker', image: '/mock/jbl.jpg' },
];

export default function FavoritesSection() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Favorites</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {MOCK_FAVORITES.map(fav => (
            <div key={fav.id} className="flex flex-col items-center bg-gray-50 rounded-lg p-4">
              <img src={fav.image} alt={fav.name} className="w-20 h-20 object-contain mb-2" />
              <div className="font-medium mb-2">{fav.name}</div>
              <Button size="sm" variant="destructive">Remove</Button>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
} 