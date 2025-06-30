import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const MOCK_FINANCING = {
  tier: 'Growth',
  availableCredit: 50000,
  repaymentStatus: 'On Track',
  history: [
    { id: 1, date: '2024-04-01', amount: 10000, status: 'Paid' },
    { id: 2, date: '2024-03-01', amount: 8000, status: 'Paid' },
    { id: 3, date: '2024-02-01', amount: 12000, status: 'Paid' },
  ],
};

export default function FinancingSection() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Financing Status</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div>
          <span className="font-medium">Tier:</span> <Badge className="bg-emerald-500 text-white">{MOCK_FINANCING.tier}</Badge>
        </div>
        <div>
          <span className="font-medium">Available Credit:</span> <span className="text-blue-700 font-bold">KES {MOCK_FINANCING.availableCredit.toLocaleString()}</span>
        </div>
        <div>
          <span className="font-medium">Repayment Status:</span> <Badge className="bg-blue-500 text-white">{MOCK_FINANCING.repaymentStatus}</Badge>
        </div>
        <div>
          <span className="font-medium">Repayment History:</span>
          <ul className="mt-2 space-y-1">
            {MOCK_FINANCING.history.map(h => (
              <li key={h.id} className="flex justify-between text-sm">
                <span>{h.date}</span>
                <span>KES {h.amount.toLocaleString()}</span>
                <span className="text-emerald-600 font-medium">{h.status}</span>
              </li>
            ))}
          </ul>
        </div>
      </CardContent>
    </Card>
  );
} 