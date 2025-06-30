import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const MOCK_QUOTES = [
  { id: 1, product: 'HP EliteBook 840 G7', date: '2024-05-01', status: 'Pending' },
  { id: 2, product: 'Samsung Galaxy A54', date: '2024-04-28', status: 'Responded' },
  { id: 3, product: 'TP-Link Router', date: '2024-04-20', status: 'Completed' },
];

export default function QuoteHistorySection() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Quote History</CardTitle>
      </CardHeader>
      <CardContent>
        <table className="w-full text-left text-sm">
          <thead>
            <tr className="border-b">
              <th className="py-2">Product</th>
              <th className="py-2">Date</th>
              <th className="py-2">Status</th>
              <th className="py-2"></th>
            </tr>
          </thead>
          <tbody>
            {MOCK_QUOTES.map(q => (
              <tr key={q.id} className="border-b hover:bg-gray-50">
                <td className="py-2">{q.product}</td>
                <td className="py-2">{q.date}</td>
                <td className="py-2">
                  <span className={
                    q.status === 'Completed' ? 'text-emerald-600' :
                    q.status === 'Responded' ? 'text-blue-600' :
                    'text-yellow-600'
                  }>{q.status}</span>
                </td>
                <td className="py-2">
                  <Button size="sm" variant="outline">View</Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </CardContent>
    </Card>
  );
} 