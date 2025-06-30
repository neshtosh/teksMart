"use client";
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { User, FileText, Heart, Banknote, ShoppingCart, ArrowRight, CheckCircle, Clock, TrendingUp, Info } from 'lucide-react';

const MOCK_USER = {
  name: 'Jane Mwangi',
  kra: 'A123456789B',
  business: 'Mwangi Tech Ltd',
  status: 'Active',
};

const MOCK_STATS = [
  { label: 'Quotes', value: 4, icon: <FileText className="h-5 w-5 text-blue-600" /> },
  { label: 'Orders', value: 2, icon: <ShoppingCart className="h-5 w-5 text-emerald-600" /> },
  { label: 'Wishlist', value: 7, icon: <Heart className="h-5 w-5 text-pink-500" /> },
  { label: 'Financing', value: 'KES 200,000', icon: <Banknote className="h-5 w-5 text-purple-600" /> },
];

const MOCK_QUOTES = [
  { id: 1, product: 'HP EliteBook 840', date: '2024-06-01', status: 'Approved' },
  { id: 2, product: 'Canon Printer', date: '2024-05-20', status: 'Pending' },
  { id: 3, product: 'Lenovo ThinkPad', date: '2024-05-10', status: 'Rejected' },
];

const MOCK_WISHLIST = [
  { id: 1, name: 'Apple MacBook Pro', price: 250000 },
  { id: 2, name: 'Samsung Galaxy S24', price: 120000 },
  { id: 3, name: 'Dell XPS 13', price: 180000 },
];

const MOCK_FINANCING = {
  status: 'Active',
  amount: 200000,
  nextPayment: '2024-07-15',
  monthly: 18000,
  tier: 2, // 1-4
};

const TIER_INFO = [
  { tier: 1, label: 'Tier 1', max: 10 },
  { tier: 2, label: 'Tier 2', max: 30 },
  { tier: 3, label: 'Tier 3', max: 50 },
  { tier: 4, label: 'Tier 4', max: 80 },
];

const MOCK_ORDERS = [
  { id: 1, item: 'HP EliteBook 840', date: '2024-06-10', status: 'Delivered' },
  { id: 2, item: 'Canon Printer', date: '2024-06-05', status: 'Shipped' },
];

export default function DashboardPage() {
  const tierObj = TIER_INFO.find(t => t.tier === MOCK_FINANCING.tier) || TIER_INFO[0];
  return (
    <main className="min-h-screen bg-gray-50">
      <Header />
      <div className="container-custom py-8">
        {/* Hero/Welcome */}
        <section className="mb-8 text-center">
          <h1 className="text-2xl lg:text-3xl font-bold mb-2">Welcome back, {MOCK_USER.name}!</h1>
          <p className="text-gray-700 mb-4">Manage your account, quotes, orders, and financing all in one place.</p>
          <div className="flex flex-wrap justify-center gap-4 mb-4">
            <Button className="bg-blue-600 hover:bg-blue-700 text-white" size="lg">Request Quote</Button>
            <Button className="bg-purple-600 hover:bg-purple-700 text-white" size="lg">Get Financing</Button>
          </div>
          <div className="flex flex-wrap justify-center gap-6 mt-4">
            {MOCK_STATS.map(stat => (
              <Card key={stat.label} className="w-40">
                <CardContent className="flex flex-col items-center gap-2 p-4">
                  {stat.icon}
                  <div className="text-xl font-bold text-gray-900">{stat.value}</div>
                  <div className="text-xs text-gray-600">{stat.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Main Grid */}
        <section className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Account Overview */}
          <Card className="col-span-1">
            <CardContent className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <User className="h-7 w-7 text-blue-600" />
                <h2 className="font-semibold text-lg">Account Overview</h2>
              </div>
              <div className="mb-2"><span className="font-medium">Business:</span> {MOCK_USER.business}</div>
              <div className="mb-2"><span className="font-medium">KRA PIN:</span> {MOCK_USER.kra}</div>
              <div className="mb-2"><span className="font-medium">Status:</span> <Badge className="bg-emerald-100 text-emerald-700">{MOCK_USER.status}</Badge></div>
              <Button variant="outline" size="sm" className="mt-3">Edit Profile</Button>
            </CardContent>
          </Card>

          {/* Quote History */}
          <Card className="col-span-1">
            <CardContent className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <FileText className="h-7 w-7 text-blue-600" />
                <h2 className="font-semibold text-lg">Quote History</h2>
              </div>
              <div className="space-y-2">
                {MOCK_QUOTES.map(q => (
                  <div key={q.id} className="flex items-center justify-between text-sm">
                    <div>
                      <span className="font-medium">{q.product}</span>
                      <span className="text-gray-500 ml-2">{q.date}</span>
                    </div>
                    <Badge className={
                      q.status === 'Approved' ? 'bg-emerald-100 text-emerald-700' :
                      q.status === 'Pending' ? 'bg-yellow-100 text-yellow-700' :
                      'bg-red-100 text-red-700'
                    }>{q.status}</Badge>
                  </div>
                ))}
              </div>
              <Button variant="link" className="mt-3 px-0 text-blue-600">See All Quotes <ArrowRight className="h-4 w-4 ml-1 inline" /></Button>
            </CardContent>
          </Card>

          {/* Wishlist */}
          <Card className="col-span-1">
            <CardContent className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <Heart className="h-7 w-7 text-pink-500" />
                <h2 className="font-semibold text-lg">Wishlist</h2>
              </div>
              <div className="space-y-2">
                {MOCK_WISHLIST.map(w => (
                  <div key={w.id} className="flex items-center justify-between text-sm">
                    <span>{w.name}</span>
                    <span className="text-gray-500">KES {w.price.toLocaleString()}</span>
                  </div>
                ))}
              </div>
              <Button variant="link" className="mt-3 px-0 text-blue-600">View All <ArrowRight className="h-4 w-4 ml-1 inline" /></Button>
            </CardContent>
          </Card>

          {/* Financing Status */}
          <Card className="col-span-1">
            <CardContent className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <Banknote className="h-7 w-7 text-purple-600" />
                <h2 className="font-semibold text-lg">Financing Status</h2>
                <span className="ml-auto flex items-center gap-1">
                  <Badge className="bg-blue-100 text-blue-800">
                    {tierObj.label} (Up to {tierObj.max}% Financing)
                  </Badge>
                  <span className="relative group">
                    <Info className="h-4 w-4 text-blue-400" />
                    <span className="absolute left-1/2 -translate-x-1/2 mt-2 w-48 bg-gray-900 text-white text-xs rounded px-2 py-1 opacity-0 group-hover:opacity-100 pointer-events-none z-10 transition-opacity">
                      Your current financing tier determines your maximum eligible financing percentage.
                    </span>
                  </span>
                </span>
              </div>
              <div className="mb-2"><span className="font-medium">Status:</span> <Badge className="bg-emerald-100 text-emerald-700">{MOCK_FINANCING.status}</Badge></div>
              <div className="mb-2"><span className="font-medium">Amount:</span> KES {MOCK_FINANCING.amount.toLocaleString()}</div>
              <div className="mb-2"><span className="font-medium">Next Payment:</span> {MOCK_FINANCING.nextPayment}</div>
              <div className="mb-2"><span className="font-medium">Monthly:</span> KES {MOCK_FINANCING.monthly.toLocaleString()}</div>
              <Button variant="outline" size="sm" className="mt-3">Apply for More</Button>
            </CardContent>
          </Card>

          {/* Recent Orders */}
          <Card className="col-span-1 md:col-span-2 lg:col-span-1">
            <CardContent className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <ShoppingCart className="h-7 w-7 text-emerald-600" />
                <h2 className="font-semibold text-lg">Recent Orders</h2>
              </div>
              <div className="space-y-2">
                {MOCK_ORDERS.map(o => (
                  <div key={o.id} className="flex items-center justify-between text-sm">
                    <span>{o.item}</span>
                    <span className="text-gray-500">{o.date}</span>
                    <Badge className={
                      o.status === 'Delivered' ? 'bg-emerald-100 text-emerald-700' :
                      o.status === 'Shipped' ? 'bg-blue-100 text-blue-700' :
                      'bg-gray-100 text-gray-700'
                    }>{o.status}</Badge>
                  </div>
                ))}
              </div>
              <Button variant="link" className="mt-3 px-0 text-blue-600">See All Orders <ArrowRight className="h-4 w-4 ml-1 inline" /></Button>
            </CardContent>
          </Card>
        </section>
      </div>
      <Footer />
    </main>
  );
} 