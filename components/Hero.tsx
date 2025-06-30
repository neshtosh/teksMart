'use client';

import { Button } from '@/components/ui/button';
import { ArrowRight, TrendingUp, Shield, Zap } from 'lucide-react';
import Link from 'next/link';

export function Hero() {
  return (
    <section className="hero-gradient py-16 lg:py-24">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Kenya's First
                <span className="text-gradient block">Wholesale Tech</span>
                Marketplace
              </h1>
              <p className="text-lg text-gray-600 max-w-lg">
                Source vetted tech products with full supplier transparency, 
                simplified invoicing, order tracking, and embedded financing 
                designed for Kenyan SMEs.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="gradient-primary hover:opacity-90 text-lg px-8 py-3"
                asChild
              >
                <Link href="/products">
                  Start Sourcing <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="text-lg px-8 py-3 border-blue-300 text-blue-700 hover:bg-blue-50"
                asChild
              >
                <Link href="/financing">
                  Get Financing
                </Link>
              </Button>
            </div>

            <div className="grid grid-cols-3 gap-6 pt-8">
              <div className="text-center">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <TrendingUp className="h-6 w-6 text-blue-600" />
                </div>
                <div className="text-2xl font-bold text-gray-900">15K+</div>
                <div className="text-sm text-gray-600">Products</div>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <Shield className="h-6 w-6 text-emerald-600" />
                </div>
                <div className="text-2xl font-bold text-gray-900">500+</div>
                <div className="text-sm text-gray-600">Verified Suppliers</div>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <Zap className="h-6 w-6 text-purple-600" />
                </div>
                <div className="text-2xl font-bold text-gray-900">72H</div>
                <div className="text-sm text-gray-600">Avg Response</div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="relative z-10 float-animation">
              <img
                src="https://images.pexels.com/photos/5240543/pexels-photo-5240543.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Tech marketplace"
                className="rounded-2xl shadow-2xl w-full h-auto"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-400/20 to-emerald-400/20 rounded-2xl transform rotate-6 scale-105"></div>
          </div>
        </div>
      </div>
    </section>
  );
}