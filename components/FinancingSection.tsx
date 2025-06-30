'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { 
  TrendingUp, 
  Shield, 
  Clock, 
  CheckCircle, 
  ArrowRight,
  Calculator
} from 'lucide-react';
import { FINANCING_TIERS } from '@/lib/constants';
import Link from 'next/link';

export function FinancingSection() {
  const currentTier = FINANCING_TIERS[0]; // Starter tier for demo
  const progress = 25; // Demo progress

  return (
    <section className="py-16 bg-gradient-to-br from-blue-50 to-emerald-50">
      <div className="container-custom">
        <div className="text-center mb-12">
          <Badge className="gradient-primary text-white mb-4">
            Embedded Financing
          </Badge>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Get Up to 50% Financing on Your Orders
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Start with 10% financing and unlock more with each successful payment. 
            No collateral required for verified businesses.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {/* Current Status Card */}
          <Card className="border-2 border-blue-200 bg-white/80 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <TrendingUp className="h-5 w-5 text-blue-600" />
                Your Financing Status
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm font-medium">Current Tier</span>
                  <Badge className="gradient-primary text-white">
                    {currentTier.name}
                  </Badge>
                </div>
                <div className="text-2xl font-bold text-gray-900">
                  KES {currentTier.maxFinancing.toLocaleString()} Available
                </div>
                <p className="text-sm text-gray-600">
                  {currentTier.benefits[0]} on qualified orders
                </p>
              </div>

              <div>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm font-medium">Progress to Next Tier</span>
                  <span className="text-sm text-gray-600">{progress}%</span>
                </div>
                <Progress value={progress} className="h-2" />
                <p className="text-xs text-gray-500 mt-1">
                  Complete your first order to unlock Growth tier
                </p>
              </div>

              <div className="space-y-3">
                <h4 className="font-medium text-gray-900">Current Benefits:</h4>
                {currentTier.benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-emerald-500" />
                    <span className="text-sm text-gray-700">{benefit}</span>
                  </div>
                ))}
              </div>

              <Button className="w-full gradient-primary" size="lg" asChild>
                <Link href="/financing/apply">
                  Apply for Financing <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </CardContent>
          </Card>

          {/* How It Works Card */}
          <Card className="bg-white/80 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Shield className="h-5 w-5 text-emerald-600" />
                How It Works
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <div className="flex gap-4">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-sm font-bold text-blue-600">1</span>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900">Apply Once</h4>
                    <p className="text-sm text-gray-600">
                      Quick verification with your business documents
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-8 h-8 bg-emerald-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-sm font-bold text-emerald-600">2</span>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900">Start Small</h4>
                    <p className="text-sm text-gray-600">
                      Begin with 10% financing on your first order
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-sm font-bold text-purple-600">3</span>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900">Build Trust</h4>
                    <p className="text-sm text-gray-600">
                      Each successful payment unlocks higher financing
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-sm font-bold text-orange-600">4</span>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900">Scale Up</h4>
                    <p className="text-sm text-gray-600">
                      Reach up to 50% financing for large orders
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 rounded-lg p-4">
                <div className="flex items-center gap-2 mb-2">
                  <Calculator className="h-4 w-4 text-gray-600" />
                  <span className="text-sm font-medium">Quick Example</span>
                </div>
                <p className="text-sm text-gray-600">
                  Order worth KES 200,000 → Pay KES 180,000 upfront → 
                  KES 20,000 financed over 30 days
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Financing Tiers */}
        <div>
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Financing Tiers</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
            {FINANCING_TIERS.map((tier, index) => (
              <Card 
                key={tier.level} 
                className={`relative ${index === 0 ? 'border-2 border-blue-400 bg-blue-50/50' : 'border-gray-200'}`}
              >
                {index === 0 && (
                  <Badge className="absolute -top-2 left-1/2 transform -translate-x-1/2 gradient-primary text-white">
                    Current
                  </Badge>
                )}
                <CardContent className="p-4 text-center">
                  <div className="mb-3">
                    <h4 className="font-bold text-gray-900">{tier.name}</h4>
                    <p className="text-sm text-gray-600">Level {tier.level}</p>
                  </div>
                  <div className="mb-3">
                    <div className="text-lg font-bold text-emerald-600">
                      KES {tier.maxFinancing.toLocaleString()}
                    </div>
                    <div className="text-xs text-gray-500">Max Financing</div>
                  </div>
                  <div className="text-xs text-gray-600">
                    {tier.benefits[0]}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div className="text-center mt-8">
          <Button variant="outline" size="lg" asChild>
            <Link href="/financing">
              Learn More About Financing
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}