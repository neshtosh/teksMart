"use client";
import { useState } from 'react';
import { SUPPLIERS } from '@/lib/data';
import { SupplierCard } from '@/components/suppliers/SupplierCard';
import { SupplierFilters } from '@/components/suppliers/SupplierFilters';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';

export default function SuppliersPage() {
  const [search, setSearch] = useState('');
  const [verification, setVerification] = useState('all');
  const [businessType, setBusinessType] = useState('all');
  const [location, setLocation] = useState('all');
  const [rating, setRating] = useState('all');

  const filteredSuppliers = SUPPLIERS.filter(supplier => {
    // Search by name or location
    const matchesSearch =
      supplier.name.toLowerCase().includes(search.toLowerCase()) ||
      supplier.location.toLowerCase().includes(search.toLowerCase());
    // Verification filter
    const matchesVerification =
      verification === 'all' || supplier.verificationLevel === verification;
    // Business type filter
    const matchesBusinessType =
      businessType === 'all' || supplier.businessType.toLowerCase().includes(businessType);
    // Location filter
    const matchesLocation =
      location === 'all' || supplier.location.toLowerCase().includes(location);
    // Rating filter
    const matchesRating =
      rating === 'all' || supplier.rating >= parseFloat(rating);
    return matchesSearch && matchesVerification && matchesBusinessType && matchesLocation && matchesRating;
  });

  return (
    <main className="min-h-screen bg-white">
      <Header />
      <div className="container-custom py-8">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-2xl font-bold text-gray-900">Verified Suppliers</h1>
          <p className="text-gray-600">Showing {filteredSuppliers.length} suppliers</p>
        </div>
        {/* Search input */}
        <div className="mb-6 flex justify-end">
          <input
            type="text"
            placeholder="Search suppliers by name or location..."
            className="border border-gray-200 rounded-lg px-4 py-2 w-full max-w-xs focus:outline-none focus:ring-2 focus:ring-blue-200"
            value={search}
            onChange={e => setSearch(e.target.value)}
          />
        </div>
        <div className="grid lg:grid-cols-5 gap-8">
          {/* Filters Sidebar */}
          <aside className="lg:col-span-1">
            <SupplierFilters
              verification={verification}
              setVerification={setVerification}
              businessType={businessType}
              setBusinessType={setBusinessType}
              location={location}
              setLocation={setLocation}
              rating={rating}
              setRating={setRating}
            />
          </aside>
          {/* Suppliers Grid */}
          <div className="lg:col-span-4">
            <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
              {filteredSuppliers.length === 0 ? (
                <div className="col-span-full text-center text-gray-500 py-12">No suppliers found.</div>
              ) : (
                filteredSuppliers.map((supplier) => (
                  <SupplierCard key={supplier.id} supplier={supplier} />
                ))
              )}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
} 