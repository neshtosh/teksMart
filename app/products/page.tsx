'use client';

import { useState, useMemo, useEffect } from 'react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { FloatingButtons } from '@/components/FloatingButtons';
import { ProductCard } from '@/components/ProductCard';
import { SAMPLE_PRODUCTS, SUPPLIERS } from '@/lib/data';
import { CATEGORIES } from '@/lib/constants';
import { useSearchParams, useRouter } from 'next/navigation';
import React from 'react';
import type { Product, MOQTier } from '@/lib/types';

type Supplier = typeof SUPPLIERS[number];

function getUniqueSuppliers(products: Product[]): Supplier[] {
  const ids = new Set<string>();
  return products
    .map((p: Product) => p.supplier)
    .filter((s: Supplier) => {
      if (ids.has(s.id)) return false;
      ids.add(s.id);
      return true;
    });
}

// --- Mobile Phones Filter Sidebar Logic ---
const MOBILE_FILTERS = [
  { label: 'Brand', key: 'Brand' },
  { label: 'OS', key: 'OS' },
  { label: 'Network', key: 'Network' },
  { label: 'Battery', key: 'Battery' },
  { label: 'Camera', key: 'Camera' },
  { label: 'Display', key: 'Display' },
  { label: 'RAM', key: 'RAM' },
  { label: 'Storage', key: 'Storage' },
  { label: 'Other', key: 'Other' },
];

function getMobileBrands() {
  const brands = new Set<string>();
  SAMPLE_PRODUCTS.filter(p => p.category === 'mobile-phones').forEach(p => {
    if (p.specifications?.Brand) brands.add(p.specifications.Brand);
  });
  return Array.from(brands);
}

function getMobileSuppliers() {
  const suppliers = new Map<string, Supplier>();
  SAMPLE_PRODUCTS.filter(p => p.category === 'mobile-phones').forEach(p => {
    suppliers.set(p.supplier.id, p.supplier);
  });
  return Array.from(suppliers.values());
}

function getMobilePriceBuckets() {
  const products = SAMPLE_PRODUCTS.filter(p => p.category === 'mobile-phones');
  if (products.length === 0) return [];
  const prices = products.flatMap(p => p.moqTiers.map(t => t.pricePerUnit));
  const min = Math.min(...prices);
  const max = Math.max(...prices);
  const step = Math.ceil((max - min) / 4) || 1;
  let buckets = [];
  for (let i = 0; i < 4; i++) {
    const from = min + i * step;
    const to = i === 3 ? Infinity : min + (i + 1) * step;
    buckets.push({ label: i === 3 ? `KES ${from.toLocaleString()}+` : `KES ${from.toLocaleString()} - ${to.toLocaleString()}`, min: from, max: to });
  }
  return buckets;
}

// --- Laptops Filter Sidebar Logic ---
const LAPTOP_FILTERS = [
  { label: 'Processor', key: 'Processor' },
  { label: 'RAM', key: 'RAM' },
  { label: 'Storage', key: 'Storage' },
  { label: 'Display', key: 'Display' },
  { label: 'Graphics', key: 'Graphics' },
  { label: 'OS', key: 'OS' },
  { label: 'Battery Life', key: 'Battery' },
  { label: 'Weight', key: 'Weight' },
];

function getLaptopBrands() {
  const brands = new Set<string>();
  SAMPLE_PRODUCTS.filter(p => p.category === 'computers' && p.subcategory === 'laptops').forEach(p => {
    if (p.name.toLowerCase().includes('dell')) brands.add('Dell');
    if (p.name.toLowerCase().includes('hp')) brands.add('HP');
    if (p.name.toLowerCase().includes('lenovo')) brands.add('Lenovo');
    if (p.name.toLowerCase().includes('apple')) brands.add('Apple');
    if (p.name.toLowerCase().includes('asus')) brands.add('Asus');
    // Add more as needed
  });
  return Array.from(brands);
}

function getLaptopSuppliers() {
  const suppliers = new Map<string, Supplier>();
  SAMPLE_PRODUCTS.filter(p => p.category === 'computers' && p.subcategory === 'laptops').forEach(p => {
    suppliers.set(p.supplier.id, p.supplier);
  });
  return Array.from(suppliers.values());
}

function getLaptopPriceBuckets() {
  const products = SAMPLE_PRODUCTS.filter(p => p.category === 'computers' && p.subcategory === 'laptops');
  if (products.length === 0) return [];
  const prices = products.flatMap(p => p.moqTiers.map(t => t.pricePerUnit));
  const min = Math.min(...prices);
  const max = Math.max(...prices);
  const step = Math.ceil((max - min) / 4) || 1;
  let buckets = [];
  for (let i = 0; i < 4; i++) {
    const from = min + i * step;
    const to = i === 3 ? Infinity : min + (i + 1) * step;
    buckets.push({ label: i === 3 ? `KES ${from.toLocaleString()}+` : `KES ${from.toLocaleString()} - ${to.toLocaleString()}`, min: from, max: to });
  }
  return buckets;
}

// --- CPUs Filter Sidebar Logic ---
const CPU_FILTERS = [
  { label: 'Processor Model', key: 'Processor Model' },
  { label: 'Cores', key: 'Cores' },
  { label: 'Threads', key: 'Threads' },
  { label: 'Base Clock', key: 'Base Clock' },
  { label: 'Boost Clock', key: 'Boost Clock' },
  { label: 'TDP', key: 'TDP' },
  { label: 'Socket', key: 'Socket' },
  { label: 'Integrated Graphics', key: 'Integrated Graphics' },
  { label: 'Other', key: 'Other' },
];

function getCPUBrands() {
  const brands = new Set<string>();
  SAMPLE_PRODUCTS.filter(p => p.category === 'computers' && p.subcategory === 'cpus').forEach(p => {
    if (p.specifications?.Brand) brands.add(p.specifications.Brand);
  });
  return Array.from(brands);
}

function getCPUSuppliers() {
  const suppliers = new Map<string, Supplier>();
  SAMPLE_PRODUCTS.filter(p => p.category === 'computers' && p.subcategory === 'cpus').forEach(p => {
    suppliers.set(p.supplier.id, p.supplier);
  });
  return Array.from(suppliers.values());
}

function getCPUPriceBuckets() {
  const products = SAMPLE_PRODUCTS.filter(p => p.category === 'computers' && p.subcategory === 'cpus');
  if (products.length === 0) return [];
  const prices = products.flatMap(p => p.moqTiers.map(t => t.pricePerUnit));
  const min = Math.min(...prices);
  const max = Math.max(...prices);
  const step = Math.ceil((max - min) / 4) || 1;
  let buckets = [];
  for (let i = 0; i < 4; i++) {
    const from = min + i * step;
    const to = i === 3 ? Infinity : min + (i + 1) * step;
    buckets.push({ label: i === 3 ? `KES ${from.toLocaleString()}+` : `KES ${from.toLocaleString()} - ${to.toLocaleString()}`, min: from, max: to });
  }
  return buckets;
}

// --- Tablets Filter Sidebar Logic ---
const TABLET_FILTERS = [
  { label: 'Display', key: 'Display' },
  { label: 'Processor', key: 'Processor' },
  { label: 'RAM', key: 'RAM' },
  { label: 'Storage', key: 'Storage' },
  { label: 'Battery', key: 'Battery' },
  { label: 'OS', key: 'OS' },
  { label: 'Weight', key: 'Weight' },
  { label: 'Other', key: 'Other' },
];

function getTabletBrands() {
  const brands = new Set<string>();
  SAMPLE_PRODUCTS.filter(p => p.category === 'computers' && p.subcategory === 'tablets').forEach(p => {
    if (p.specifications?.Brand) brands.add(p.specifications.Brand);
  });
  return Array.from(brands);
}

function getTabletSuppliers() {
  const suppliers = new Map<string, Supplier>();
  SAMPLE_PRODUCTS.filter(p => p.category === 'computers' && p.subcategory === 'tablets').forEach(p => {
    suppliers.set(p.supplier.id, p.supplier);
  });
  return Array.from(suppliers.values());
}

function getTabletPriceBuckets() {
  const products = SAMPLE_PRODUCTS.filter(p => p.category === 'computers' && p.subcategory === 'tablets');
  if (products.length === 0) return [];
  const prices = products.flatMap(p => p.moqTiers.map(t => t.pricePerUnit));
  const min = Math.min(...prices);
  const max = Math.max(...prices);
  const step = Math.ceil((max - min) / 4) || 1;
  let buckets = [];
  for (let i = 0; i < 4; i++) {
    const from = min + i * step;
    const to = i === 3 ? Infinity : min + (i + 1) * step;
    buckets.push({ label: i === 3 ? `KES ${from.toLocaleString()}+` : `KES ${from.toLocaleString()} - ${to.toLocaleString()}`, min: from, max: to });
  }
  return buckets;
}

export default function ProductsPage() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const category = searchParams.get('category') || '';
  const [selectedCategory, setSelectedCategory] = useState(category);
  const [selectedSubcategory, setSelectedSubcategory] = useState('');

  // Get subcategories for the selected category
  const subcategories = React.useMemo(() => {
    if (!selectedCategory) return [];
    const cat = CATEGORIES.find(c => c.id === selectedCategory);
    return cat ? cat.subcategories : [];
  }, [selectedCategory]);

  // --- Filter State ---
  const [mobilePrice, setMobilePrice] = useState({ min: '', max: '' });
  const [mobilePriceBucket, setMobilePriceBucket] = useState('');
  const [mobileFilters, setMobileFilters] = useState<{ [key: string]: Set<string> }>({});
  const [mobileBrand, setMobileBrand] = useState('');
  const [mobileSupplier, setMobileSupplier] = useState('');

  // Reset filters when category changes
  useEffect(() => {
    setMobilePrice({ min: '', max: '' });
    setMobilePriceBucket('');
    setMobileFilters({});
    setMobileBrand('');
    setMobileSupplier('');
  }, [selectedCategory]);

  // Filter products by category and subcategory only
  const productsToShow = useMemo(() => {
    let filtered = SAMPLE_PRODUCTS;
    if (selectedCategory) filtered = filtered.filter(p => p.category === selectedCategory);
    if (selectedSubcategory) filtered = filtered.filter(p => p.subcategory === selectedSubcategory);
    if (selectedCategory === 'mobile-phones') {
      // Price
      if (mobilePrice.min) filtered = filtered.filter(p => Math.min(...p.moqTiers.map(t => t.pricePerUnit)) >= Number(mobilePrice.min));
      if (mobilePrice.max) filtered = filtered.filter(p => Math.max(...p.moqTiers.map(t => t.pricePerUnit)) <= Number(mobilePrice.max));
      if (mobilePriceBucket) {
        const bucket = getMobilePriceBuckets().find(b => b.label === mobilePriceBucket);
        if (bucket) {
          filtered = filtered.filter(p => {
            const minP = Math.min(...p.moqTiers.map(t => t.pricePerUnit));
            return minP >= bucket.min && minP < bucket.max;
          });
        }
      }
      // Feature Filters
      Object.entries(mobileFilters).forEach(([section, values]) => {
        if (values.size > 0) {
          filtered = filtered.filter(p => {
            return Array.from(values).some(val => {
              const spec = p.specifications?.[section] || '';
              return spec.toLowerCase().includes(val.toLowerCase());
            });
          });
        }
      });
      // Brand
      if (mobileBrand) {
        filtered = filtered.filter(p => p.specifications?.Brand?.toLowerCase() === mobileBrand.toLowerCase());
      }
      // Supplier
      if (mobileSupplier) {
        filtered = filtered.filter(p => p.supplier.id === mobileSupplier);
      }
    }
    return filtered;
  }, [SAMPLE_PRODUCTS, selectedCategory, selectedSubcategory, mobilePrice, mobilePriceBucket, mobileFilters, mobileBrand, mobileSupplier]);

  // --- Filter State for Laptops ---
  const [laptopPrice, setLaptopPrice] = useState({ min: '', max: '' });
  const [laptopPriceBucket, setLaptopPriceBucket] = useState('');
  const [laptopBrand, setLaptopBrand] = useState('');
  const [laptopSupplier, setLaptopSupplier] = useState('');
  const [laptopFilters, setLaptopFilters] = useState<{ [key: string]: Set<string> }>({});
  const [laptopKeywords, setLaptopKeywords] = useState('');

  // Reset laptop filters on category/subcategory change
  useEffect(() => {
    setLaptopPrice({ min: '', max: '' });
    setLaptopPriceBucket('');
    setLaptopBrand('');
    setLaptopSupplier('');
    setLaptopFilters({});
    setLaptopKeywords('');
  }, [selectedCategory, selectedSubcategory]);

  // --- Filtering Logic for Laptops ---
  const laptopsToShow = useMemo(() => {
    let filtered = SAMPLE_PRODUCTS.filter(p => p.category === 'computers' && p.subcategory === 'laptops');
    // Price
    if (laptopPrice.min) filtered = filtered.filter(p => Math.min(...p.moqTiers.map(t => t.pricePerUnit)) >= Number(laptopPrice.min));
    if (laptopPrice.max) filtered = filtered.filter(p => Math.max(...p.moqTiers.map(t => t.pricePerUnit)) <= Number(laptopPrice.max));
    if (laptopPriceBucket) {
      const bucket = getLaptopPriceBuckets().find(b => b.label === laptopPriceBucket);
      if (bucket) {
        filtered = filtered.filter(p => {
          const minP = Math.min(...p.moqTiers.map(t => t.pricePerUnit));
          return minP >= bucket.min && minP < bucket.max;
        });
      }
    }
    // Brand
    if (laptopBrand) {
      filtered = filtered.filter(p => p.name.toLowerCase().includes(laptopBrand.toLowerCase()));
    }
    // Supplier
    if (laptopSupplier) {
      filtered = filtered.filter(p => p.supplier.id === laptopSupplier);
    }
    // Feature filters
    Object.entries(laptopFilters).forEach(([section, values]) => {
      if (values.size > 0) {
        filtered = filtered.filter(p => {
          return Array.from(values).some(val => {
            const spec = p.specifications[section] || '';
            return spec.toLowerCase().includes(val.toLowerCase());
          });
        });
      }
    });
    // Keywords
    if (laptopKeywords.trim()) {
      const kw = laptopKeywords.trim().toLowerCase();
      filtered = filtered.filter(p =>
        p.name.toLowerCase().includes(kw) ||
        p.description?.toLowerCase().includes(kw) ||
        Object.values(p.specifications).some(spec => spec.toLowerCase().includes(kw)) ||
        p.tags.some(tag => tag.toLowerCase().includes(kw))
      );
    }
    return filtered;
  }, [SAMPLE_PRODUCTS, laptopPrice, laptopPriceBucket, laptopBrand, laptopSupplier, laptopFilters, laptopKeywords, selectedCategory, selectedSubcategory]);

  // --- Filter State for CPUs ---
  const [cpuPrice, setCPUPrice] = useState({ min: '', max: '' });
  const [cpuPriceBucket, setCPUPriceBucket] = useState('');
  const [cpuBrand, setCPUBrand] = useState('');
  const [cpuSupplier, setCPUSupplier] = useState('');
  const [cpuFilters, setCPUFilters] = useState<{ [key: string]: Set<string> }>({});
  const [cpuKeywords, setCPUKeywords] = useState('');

  // Reset CPU filters on category/subcategory change
  useEffect(() => {
    setCPUPrice({ min: '', max: '' });
    setCPUPriceBucket('');
    setCPUBrand('');
    setCPUSupplier('');
    setCPUFilters({});
    setCPUKeywords('');
  }, [selectedCategory, selectedSubcategory]);

  // --- Filtering Logic for CPUs ---
  const cpusToShow = useMemo(() => {
    let filtered = SAMPLE_PRODUCTS.filter(p => p.category === 'computers' && p.subcategory === 'cpus');
    // Price
    if (cpuPrice.min) filtered = filtered.filter(p => Math.min(...p.moqTiers.map(t => t.pricePerUnit)) >= Number(cpuPrice.min));
    if (cpuPrice.max) filtered = filtered.filter(p => Math.max(...p.moqTiers.map(t => t.pricePerUnit)) <= Number(cpuPrice.max));
    if (cpuPriceBucket) {
      const bucket = getCPUPriceBuckets().find(b => b.label === cpuPriceBucket);
      if (bucket) {
        filtered = filtered.filter(p => {
          const minP = Math.min(...p.moqTiers.map(t => t.pricePerUnit));
          return minP >= bucket.min && minP < bucket.max;
        });
      }
    }
    // Brand
    if (cpuBrand) {
      filtered = filtered.filter(p => p.specifications?.Brand?.toLowerCase() === cpuBrand.toLowerCase());
    }
    // Supplier
    if (cpuSupplier) {
      filtered = filtered.filter(p => p.supplier.id === cpuSupplier);
    }
    // Feature filters
    Object.entries(cpuFilters).forEach(([section, values]) => {
      if (values.size > 0) {
        filtered = filtered.filter(p => {
          return Array.from(values).some(val => {
            const spec = p.specifications?.[section] || '';
            return spec.toLowerCase().includes(val.toLowerCase());
          });
        });
      }
    });
    // Keywords
    if (cpuKeywords.trim()) {
      const kw = cpuKeywords.trim().toLowerCase();
      filtered = filtered.filter(p =>
        p.name.toLowerCase().includes(kw) ||
        p.description?.toLowerCase().includes(kw) ||
        Object.values(p.specifications).some(spec => spec.toLowerCase().includes(kw)) ||
        p.tags.some(tag => tag.toLowerCase().includes(kw))
      );
    }
    return filtered;
  }, [SAMPLE_PRODUCTS, cpuPrice, cpuPriceBucket, cpuBrand, cpuSupplier, cpuFilters, cpuKeywords, selectedCategory, selectedSubcategory]);

  // --- Filter State for Tablets ---
  const [tabletPrice, setTabletPrice] = useState({ min: '', max: '' });
  const [tabletPriceBucket, setTabletPriceBucket] = useState('');
  const [tabletBrand, setTabletBrand] = useState('');
  const [tabletSupplier, setTabletSupplier] = useState('');
  const [tabletFilters, setTabletFilters] = useState<{ [key: string]: Set<string> }>({});
  const [tabletKeywords, setTabletKeywords] = useState('');

  // Reset tablet filters on category/subcategory change
  useEffect(() => {
    setTabletPrice({ min: '', max: '' });
    setTabletPriceBucket('');
    setTabletBrand('');
    setTabletSupplier('');
    setTabletFilters({});
    setTabletKeywords('');
  }, [selectedCategory, selectedSubcategory]);

  // --- Filtering Logic for Tablets ---
  const tabletsToShow = useMemo(() => {
    let filtered = SAMPLE_PRODUCTS.filter(p => p.category === 'computers' && p.subcategory === 'tablets');
    // Price
    if (tabletPrice.min) filtered = filtered.filter(p => Math.min(...p.moqTiers.map(t => t.pricePerUnit)) >= Number(tabletPrice.min));
    if (tabletPrice.max) filtered = filtered.filter(p => Math.max(...p.moqTiers.map(t => t.pricePerUnit)) <= Number(tabletPrice.max));
    if (tabletPriceBucket) {
      const bucket = getTabletPriceBuckets().find(b => b.label === tabletPriceBucket);
      if (bucket) {
        filtered = filtered.filter(p => {
          const minP = Math.min(...p.moqTiers.map(t => t.pricePerUnit));
          return minP >= bucket.min && minP < bucket.max;
        });
      }
    }
    // Brand
    if (tabletBrand) {
      filtered = filtered.filter(p => p.specifications?.Brand?.toLowerCase() === tabletBrand.toLowerCase());
    }
    // Supplier
    if (tabletSupplier) {
      filtered = filtered.filter(p => p.supplier.id === tabletSupplier);
    }
    // Feature filters
    Object.entries(tabletFilters).forEach(([section, values]) => {
      if (values.size > 0) {
        filtered = filtered.filter(p => {
          return Array.from(values).some(val => {
            const spec = p.specifications?.[section] || '';
            return spec.toLowerCase().includes(val.toLowerCase());
          });
        });
      }
    });
    // Keywords
    if (tabletKeywords.trim()) {
      const kw = tabletKeywords.trim().toLowerCase();
      filtered = filtered.filter(p =>
        p.name.toLowerCase().includes(kw) ||
        p.description?.toLowerCase().includes(kw) ||
        Object.values(p.specifications).some(spec => spec.toLowerCase().includes(kw)) ||
        p.tags.some(tag => tag.toLowerCase().includes(kw))
      );
    }
    return filtered;
  }, [SAMPLE_PRODUCTS, tabletPrice, tabletPriceBucket, tabletBrand, tabletSupplier, tabletFilters, tabletKeywords, selectedCategory, selectedSubcategory]);

  // --- Sidebar UI for Mobile Phones ---
  function MobilePhonesSidebar() {
    const brands = getMobileBrands();
    const suppliers = getMobileSuppliers();
    const priceBuckets = getMobilePriceBuckets();
    // Get unique options for each filter
    const filterOptions: { [key: string]: string[] } = {};
    MOBILE_FILTERS.forEach(f => {
      filterOptions[f.key] = Array.from(new Set(
        SAMPLE_PRODUCTS.filter(p => p.category === 'mobile-phones')
          .map(p => p.specifications?.[f.key] || '')
          .filter(Boolean)
      ));
    });
  return (
      <div className="bg-white/95 rounded-2xl shadow-xl border-0 card-hover p-0">
        <div className="p-8 space-y-8">
          {/* Price */}
          <div>
            <div className="font-bold text-lg mb-3">Price, KSh</div>
            <div className="flex gap-2 mb-3">
              <input type="number" placeholder="min" className="w-1/2 rounded-lg border-blue-100 px-3 py-2 text-base" value={mobilePrice.min} onChange={e => setMobilePrice(p => ({ ...p, min: e.target.value }))} />
              <input type="number" placeholder="max" className="w-1/2 rounded-lg border-blue-100 px-3 py-2 text-base" value={mobilePrice.max} onChange={e => setMobilePrice(p => ({ ...p, max: e.target.value }))} />
            </div>
            <div className="space-y-2">
              {priceBuckets.map((bucket, i) => (
                <label key={i} className="flex items-center gap-2 cursor-pointer">
                  <input type="radio" name="mobile-price-bucket" className="accent-blue-600" checked={mobilePriceBucket === bucket.label} onChange={() => setMobilePriceBucket(bucket.label)} />
                  <span className="text-gray-700 text-base">{bucket.label}</span>
                </label>
              ))}
            </div>
            <div className="flex justify-between mt-2 text-xs text-blue-500">
              <button className="hover:underline" onClick={() => { setMobilePrice({ min: '', max: '' }); setMobilePriceBucket(''); }}>CLEAR</button>
              <button className="hover:underline text-green-600 font-bold" onClick={() => {}}>SAVE</button>
            </div>
          </div>
          <hr className="my-4 border-blue-50" />
          {/* Feature Filters */}
          {MOBILE_FILTERS.map(f => (
            <div key={f.key}>
              <div className="font-bold text-lg mb-3">{f.label}</div>
              <div className="flex flex-wrap gap-2">
                {filterOptions[f.key].map(opt => (
                  <label key={opt} className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={mobileFilters[f.key]?.has(opt) || false}
                      onChange={e => {
                        setMobileFilters(prev => {
                          const set = new Set(prev[f.key] || []);
                          if (e.target.checked) set.add(opt); else set.delete(opt);
                          return { ...prev, [f.key]: set };
                        });
                      }}
                      className="accent-blue-600"
                    />
                    <span className="text-gray-700 text-base">{opt}</span>
                  </label>
                ))}
              </div>
            </div>
          ))}
          <hr className="my-4 border-blue-50" />
          {/* Brand */}
          <div>
            <div className="font-bold text-lg mb-3">Brand</div>
            <div className="space-y-2">
              <label className="flex items-center gap-2 cursor-pointer text-green-600">
                <input type="radio" name="mobile-brand" className="accent-green-600" checked={mobileBrand === ''} onChange={() => setMobileBrand('')} />
                <span className="text-base font-semibold">Show all</span>
              </label>
              {brands.map(brand => (
                <label key={brand} className="flex items-center gap-2 cursor-pointer">
                  <input type="radio" name="mobile-brand" className="accent-blue-600" checked={mobileBrand === brand} onChange={() => setMobileBrand(brand)} />
                  <span className="text-base font-semibold">{brand}</span>
                </label>
              ))}
            </div>
          </div>
          <hr className="my-4 border-blue-50" />
          {/* Supplier */}
          <div>
            <div className="font-bold text-lg mb-3">Supplier</div>
            <div className="space-y-2">
              <label className="flex items-center gap-2 cursor-pointer text-green-600">
                <input type="radio" name="mobile-supplier" className="accent-green-600" checked={mobileSupplier === ''} onChange={() => setMobileSupplier('')} />
                <span className="text-base font-semibold">Show all</span>
              </label>
              {suppliers.map(supplier => (
                <label key={supplier.id} className="flex items-center gap-2 cursor-pointer">
                  <input type="radio" name="mobile-supplier" className="accent-blue-600" checked={mobileSupplier === supplier.id} onChange={() => setMobileSupplier(supplier.id)} />
                  <span className="text-base font-semibold">{supplier.name}</span>
                </label>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

  // --- Sidebar UI for Laptops ---
  function LaptopsSidebar() {
    const brands = getLaptopBrands();
    const suppliers = getLaptopSuppliers();
    const priceBuckets = getLaptopPriceBuckets();
    // Get unique options for each filter
    const filterOptions: { [key: string]: string[] } = {};
    LAPTOP_FILTERS.forEach(f => {
      filterOptions[f.key] = Array.from(new Set(
        SAMPLE_PRODUCTS.filter(p => p.category === 'computers' && p.subcategory === 'laptops')
          .map(p => p.specifications?.[f.key] || '')
          .filter(Boolean)
      ));
    });
    return (
      <div className="bg-white/95 rounded-2xl shadow-xl border-0 card-hover p-0">
        <div className="p-8 space-y-8">
          {/* Price */}
          <div>
            <div className="font-bold text-lg mb-3">Price, KSh</div>
            <div className="flex gap-2 mb-3">
              <input type="number" placeholder="min" className="w-1/2 rounded-lg border-blue-100 px-3 py-2 text-base" value={laptopPrice.min} onChange={e => setLaptopPrice(p => ({ ...p, min: e.target.value }))} />
              <input type="number" placeholder="max" className="w-1/2 rounded-lg border-blue-100 px-3 py-2 text-base" value={laptopPrice.max} onChange={e => setLaptopPrice(p => ({ ...p, max: e.target.value }))} />
            </div>
            <div className="space-y-2">
              {priceBuckets.map((bucket, i) => (
                <label key={i} className="flex items-center gap-2 cursor-pointer">
                  <input type="radio" name="laptop-price-bucket" className="accent-blue-600" checked={laptopPriceBucket === bucket.label} onChange={() => setLaptopPriceBucket(bucket.label)} />
                  <span className="text-gray-700 text-base">{bucket.label}</span>
                </label>
              ))}
            </div>
            <div className="flex justify-between mt-2 text-xs text-blue-500">
              <button className="hover:underline" onClick={() => { setLaptopPrice({ min: '', max: '' }); setLaptopPriceBucket(''); }}>CLEAR</button>
              <button className="hover:underline text-green-600 font-bold" onClick={() => {}}>SAVE</button>
            </div>
          </div>
          <hr className="my-4 border-blue-50" />
          {/* Brand */}
          <div>
            <div className="font-bold text-lg mb-3">Brand</div>
            <div className="space-y-2">
              <label className="flex items-center gap-2 cursor-pointer text-green-600">
                <input type="radio" name="laptop-brand" className="accent-green-600" checked={laptopBrand === ''} onChange={() => setLaptopBrand('')} />
                <span className="text-base font-semibold">Show all</span>
              </label>
              {brands.map(brand => (
                <label key={brand} className="flex items-center gap-2 cursor-pointer">
                  <input type="radio" name="laptop-brand" className="accent-blue-600" checked={laptopBrand === brand} onChange={() => setLaptopBrand(brand)} />
                  <span className="text-base font-semibold">{brand}</span>
                </label>
              ))}
            </div>
          </div>
          <hr className="my-4 border-blue-50" />
          {/* Feature Filters */}
          {LAPTOP_FILTERS.map(f => (
            <div key={f.key}>
              <div className="font-bold text-lg mb-3">{f.label}</div>
              <div className="flex flex-wrap gap-2">
                {filterOptions[f.key].map(opt => (
                  <label key={opt} className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={laptopFilters[f.key]?.has(opt) || false}
                      onChange={e => {
                        setLaptopFilters(prev => {
                          const set = new Set(prev[f.key] || []);
                          if (e.target.checked) set.add(opt); else set.delete(opt);
                          return { ...prev, [f.key]: set };
                        });
                      }}
                      className="accent-blue-600"
                    />
                    <span className="text-gray-700 text-base">{opt}</span>
                  </label>
                ))}
              </div>
            </div>
          ))}
          <hr className="my-4 border-blue-50" />
          {/* Supplier */}
          <div>
            <div className="font-bold text-lg mb-3">Supplier</div>
            <div className="space-y-2">
              <label className="flex items-center gap-2 cursor-pointer text-green-600">
                <input type="radio" name="laptop-supplier" className="accent-green-600" checked={laptopSupplier === ''} onChange={() => setLaptopSupplier('')} />
                <span className="text-base font-semibold">Show all</span>
              </label>
              {suppliers.map(supplier => (
                <label key={supplier.id} className="flex items-center gap-2 cursor-pointer">
                  <input type="radio" name="laptop-supplier" className="accent-blue-600" checked={laptopSupplier === supplier.id} onChange={() => setLaptopSupplier(supplier.id)} />
                  <span className="text-base font-semibold">{supplier.name}</span>
                </label>
              ))}
            </div>
          </div>
          <hr className="my-4 border-blue-50" />
          {/* Keywords */}
          <div>
            <div className="font-bold text-lg mb-3">Other Features / Keywords</div>
            <input
              type="text"
              className="w-full rounded-lg border-blue-100 px-3 py-2 text-base"
              placeholder="e.g. Touchscreen, Backlit Keyboard, Fingerprint"
              value={laptopKeywords}
              onChange={e => setLaptopKeywords(e.target.value)}
            />
          </div>
        </div>
      </div>
    );
  }

  // --- Sidebar UI for CPUs ---
  function CPUsSidebar() {
    const brands = getCPUBrands();
    const suppliers = getCPUSuppliers();
    const priceBuckets = getCPUPriceBuckets();
    // Get unique options for each filter
    const filterOptions: { [key: string]: string[] } = {};
    CPU_FILTERS.forEach(f => {
      filterOptions[f.key] = Array.from(new Set(
        SAMPLE_PRODUCTS.filter(p => p.category === 'computers' && p.subcategory === 'cpus')
          .map(p => p.specifications?.[f.key] || '')
          .filter(Boolean)
      ));
    });
    return (
      <div className="bg-white/95 rounded-2xl shadow-xl border-0 card-hover p-0">
        <div className="p-8 space-y-8">
          {/* Price */}
          <div>
            <div className="font-bold text-lg mb-3">Price, KSh</div>
            <div className="flex gap-2 mb-3">
              <input type="number" placeholder="min" className="w-1/2 rounded-lg border-blue-100 px-3 py-2 text-base" value={cpuPrice.min} onChange={e => setCPUPrice(p => ({ ...p, min: e.target.value }))} />
              <input type="number" placeholder="max" className="w-1/2 rounded-lg border-blue-100 px-3 py-2 text-base" value={cpuPrice.max} onChange={e => setCPUPrice(p => ({ ...p, max: e.target.value }))} />
            </div>
            <div className="space-y-2">
              {priceBuckets.map((bucket, i) => (
                <label key={i} className="flex items-center gap-2 cursor-pointer">
                  <input type="radio" name="cpu-price-bucket" className="accent-blue-600" checked={cpuPriceBucket === bucket.label} onChange={() => setCPUPriceBucket(bucket.label)} />
                  <span className="text-gray-700 text-base">{bucket.label}</span>
                </label>
              ))}
            </div>
            <div className="flex justify-between mt-2 text-xs text-blue-500">
              <button className="hover:underline" onClick={() => { setCPUPrice({ min: '', max: '' }); setCPUPriceBucket(''); }}>CLEAR</button>
              <button className="hover:underline text-green-600 font-bold" onClick={() => {}}>SAVE</button>
            </div>
          </div>
          <hr className="my-4 border-blue-50" />
          {/* Brand */}
          <div>
            <div className="font-bold text-lg mb-3">Brand</div>
            <div className="space-y-2">
              <label className="flex items-center gap-2 cursor-pointer text-green-600">
                <input type="radio" name="cpu-brand" className="accent-green-600" checked={cpuBrand === ''} onChange={() => setCPUBrand('')} />
                <span className="text-base font-semibold">Show all</span>
              </label>
              {brands.map(brand => (
                <label key={brand} className="flex items-center gap-2 cursor-pointer">
                  <input type="radio" name="cpu-brand" className="accent-blue-600" checked={cpuBrand === brand} onChange={() => setCPUBrand(brand)} />
                  <span className="text-base font-semibold">{brand}</span>
                </label>
              ))}
            </div>
                </div>
          <hr className="my-4 border-blue-50" />
          {/* Feature Filters */}
          {CPU_FILTERS.map(f => (
            <div key={f.key}>
              <div className="font-bold text-lg mb-3">{f.label}</div>
              <div className="flex flex-wrap gap-2">
                {filterOptions[f.key].map(opt => (
                  <label key={opt} className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={cpuFilters[f.key]?.has(opt) || false}
                      onChange={e => {
                        setCPUFilters(prev => {
                          const set = new Set(prev[f.key] || []);
                          if (e.target.checked) set.add(opt); else set.delete(opt);
                          return { ...prev, [f.key]: set };
                        });
                      }}
                      className="accent-blue-600"
                    />
                    <span className="text-gray-700 text-base">{opt}</span>
                  </label>
                ))}
              </div>
            </div>
          ))}
          <hr className="my-4 border-blue-50" />
          {/* Supplier */}
          <div>
            <div className="font-bold text-lg mb-3">Supplier</div>
            <div className="space-y-2">
              <label className="flex items-center gap-2 cursor-pointer text-green-600">
                <input type="radio" name="cpu-supplier" className="accent-green-600" checked={cpuSupplier === ''} onChange={() => setCPUSupplier('')} />
                <span className="text-base font-semibold">Show all</span>
              </label>
              {suppliers.map(supplier => (
                <label key={supplier.id} className="flex items-center gap-2 cursor-pointer">
                  <input type="radio" name="cpu-supplier" className="accent-blue-600" checked={cpuSupplier === supplier.id} onChange={() => setCPUSupplier(supplier.id)} />
                  <span className="text-base font-semibold">{supplier.name}</span>
                </label>
              ))}
            </div>
          </div>
          <hr className="my-4 border-blue-50" />
          {/* Keywords */}
          <div>
            <div className="font-bold text-lg mb-3">Other Features / Keywords</div>
            <input
              type="text"
              className="w-full rounded-lg border-blue-100 px-3 py-2 text-base"
              placeholder="e.g. Overclockable, Integrated Graphics, ARM"
              value={cpuKeywords}
              onChange={e => setCPUKeywords(e.target.value)}
            />
          </div>
        </div>
      </div>
    );
  }

  // --- Sidebar UI for Tablets ---
  function TabletsSidebar() {
    const brands = getTabletBrands();
    const suppliers = getTabletSuppliers();
    const priceBuckets = getTabletPriceBuckets();
    // Get unique options for each filter
    const filterOptions: { [key: string]: string[] } = {};
    TABLET_FILTERS.forEach(f => {
      filterOptions[f.key] = Array.from(new Set(
        SAMPLE_PRODUCTS.filter(p => p.category === 'computers' && p.subcategory === 'tablets')
          .map(p => p.specifications?.[f.key] || '')
          .filter(Boolean)
      ));
    });
    return (
      <div className="bg-white/95 rounded-2xl shadow-xl border-0 card-hover p-0">
        <div className="p-8 space-y-8">
          {/* Price */}
          <div>
            <div className="font-bold text-lg mb-3">Price, KSh</div>
            <div className="flex gap-2 mb-3">
              <input type="number" placeholder="min" className="w-1/2 rounded-lg border-blue-100 px-3 py-2 text-base" value={tabletPrice.min} onChange={e => setTabletPrice(p => ({ ...p, min: e.target.value }))} />
              <input type="number" placeholder="max" className="w-1/2 rounded-lg border-blue-100 px-3 py-2 text-base" value={tabletPrice.max} onChange={e => setTabletPrice(p => ({ ...p, max: e.target.value }))} />
            </div>
            <div className="space-y-2">
              {priceBuckets.map((bucket, i) => (
                <label key={i} className="flex items-center gap-2 cursor-pointer">
                  <input type="radio" name="tablet-price-bucket" className="accent-blue-600" checked={tabletPriceBucket === bucket.label} onChange={() => setTabletPriceBucket(bucket.label)} />
                  <span className="text-gray-700 text-base">{bucket.label}</span>
                </label>
              ))}
            </div>
            <div className="flex justify-between mt-2 text-xs text-blue-500">
              <button className="hover:underline" onClick={() => { setTabletPrice({ min: '', max: '' }); setTabletPriceBucket(''); }}>CLEAR</button>
              <button className="hover:underline text-green-600 font-bold" onClick={() => {}}>SAVE</button>
            </div>
          </div>
          <hr className="my-4 border-blue-50" />
          {/* Brand */}
          <div>
            <div className="font-bold text-lg mb-3">Brand</div>
            <div className="space-y-2">
              <label className="flex items-center gap-2 cursor-pointer text-green-600">
                <input type="radio" name="tablet-brand" className="accent-green-600" checked={tabletBrand === ''} onChange={() => setTabletBrand('')} />
                <span className="text-base font-semibold">Show all</span>
              </label>
              {brands.map(brand => (
                <label key={brand} className="flex items-center gap-2 cursor-pointer">
                  <input type="radio" name="tablet-brand" className="accent-blue-600" checked={tabletBrand === brand} onChange={() => setTabletBrand(brand)} />
                  <span className="text-base font-semibold">{brand}</span>
                </label>
              ))}
            </div>
          </div>
          <hr className="my-4 border-blue-50" />
          {/* Feature Filters */}
          {TABLET_FILTERS.map(f => (
            <div key={f.key}>
              <div className="font-bold text-lg mb-3">{f.label}</div>
              <div className="flex flex-wrap gap-2">
                {filterOptions[f.key].map(opt => (
                  <label key={opt} className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={tabletFilters[f.key]?.has(opt) || false}
                      onChange={e => {
                        setTabletFilters(prev => {
                          const set = new Set(prev[f.key] || []);
                          if (e.target.checked) set.add(opt); else set.delete(opt);
                          return { ...prev, [f.key]: set };
                        });
                      }}
                      className="accent-blue-600"
                    />
                    <span className="text-gray-700 text-base">{opt}</span>
                  </label>
                ))}
              </div>
            </div>
          ))}
          <hr className="my-4 border-blue-50" />
          {/* Supplier */}
          <div>
            <div className="font-bold text-lg mb-3">Supplier</div>
            <div className="space-y-2">
              <label className="flex items-center gap-2 cursor-pointer text-green-600">
                <input type="radio" name="tablet-supplier" className="accent-green-600" checked={tabletSupplier === ''} onChange={() => setTabletSupplier('')} />
                <span className="text-base font-semibold">Show all</span>
              </label>
              {suppliers.map(supplier => (
                <label key={supplier.id} className="flex items-center gap-2 cursor-pointer">
                  <input type="radio" name="tablet-supplier" className="accent-blue-600" checked={tabletSupplier === supplier.id} onChange={() => setTabletSupplier(supplier.id)} />
                  <span className="text-base font-semibold">{supplier.name}</span>
                </label>
              ))}
            </div>
          </div>
          <hr className="my-4 border-blue-50" />
          {/* Keywords */}
          <div>
            <div className="font-bold text-lg mb-3">Other Features / Keywords</div>
            <input
              type="text"
              className="w-full rounded-lg border-blue-100 px-3 py-2 text-base"
              placeholder="e.g. Stylus, LTE, Detachable Keyboard"
              value={tabletKeywords}
              onChange={e => setTabletKeywords(e.target.value)}
            />
          </div>
        </div>
      </div>
    );
  }

  // --- Determine which products to show and grid content ---
  let gridContent: React.ReactNode = null;
  if (selectedCategory === 'computers' && selectedSubcategory === 'laptops') {
    gridContent = laptopsToShow.length === 0 ? (
      <div className="col-span-full text-center text-gray-500 text-xl font-medium py-24">No products found.</div>
    ) : (
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {laptopsToShow.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    );
  } else if (selectedCategory === 'computers' && selectedSubcategory === 'cpus') {
    gridContent = cpusToShow.length === 0 ? (
      <div className="col-span-full text-center text-gray-500 text-xl font-medium py-24">No products found.</div>
    ) : (
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {cpusToShow.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    );
  } else if (selectedCategory === 'mobile-phones') {
    gridContent = productsToShow.length === 0 ? (
      <div className="col-span-full text-center text-gray-500 text-xl font-medium py-24">No products found.</div>
    ) : (
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {productsToShow.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    );
  } else if (selectedCategory === 'computers' && selectedSubcategory === 'tablets') {
    gridContent = tabletsToShow.length === 0 ? (
      <div className="col-span-full text-center text-gray-500 text-xl font-medium py-24">No products found.</div>
    ) : (
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {tabletsToShow.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    );
  } else {
    gridContent = productsToShow.length === 0 ? (
      <div className="col-span-full text-center text-gray-500 text-xl font-medium py-24">No products found.</div>
    ) : (
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {productsToShow.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      <Header />
      <div className="container-custom py-12">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8 gap-4">
          <div className="flex gap-4 items-center">
            <select
              className="rounded-lg border-blue-100 px-4 py-2 text-base"
              value={selectedCategory}
              onChange={e => {
                setSelectedCategory(e.target.value);
                setSelectedSubcategory('');
                router.push(`/products?category=${e.target.value}`);
              }}
            >
              <option value="">All Categories</option>
              {CATEGORIES.map(cat => (
                <option key={cat.id} value={cat.id}>{cat.name}</option>
              ))}
            </select>
            {subcategories.length > 0 && (
              <select
                className="rounded-lg border-blue-100 px-4 py-2 text-base"
                value={selectedSubcategory}
                onChange={e => setSelectedSubcategory(e.target.value)}
              >
                <option value="">All Subcategories</option>
                {subcategories.map(sub => (
                  <option key={sub.id} value={sub.id}>{sub.name}</option>
                ))}
              </select>
            )}
          </div>
        </div>
        <div className="grid md:grid-cols-5 gap-12 mb-8">
          {/* Sidebar for mobile-phones only */}
          {selectedCategory === 'mobile-phones' && (
            <aside className="md:col-span-1 sticky top-28 self-start z-10">
              <MobilePhonesSidebar />
            </aside>
          )}
          {selectedCategory === 'computers' && selectedSubcategory === 'laptops' && (
            <aside className="md:col-span-1 sticky top-28 self-start z-10">
              <LaptopsSidebar />
            </aside>
          )}
          {selectedCategory === 'computers' && selectedSubcategory === 'cpus' && (
            <aside className="md:col-span-1 sticky top-28 self-start z-10">
              <CPUsSidebar />
            </aside>
          )}
          {selectedCategory === 'computers' && selectedSubcategory === 'tablets' && (
            <aside className="md:col-span-1 sticky top-28 self-start z-10">
              <TabletsSidebar />
            </aside>
          )}
          <div className={selectedCategory === 'mobile-phones' ? 'md:col-span-4' : selectedCategory === 'computers' && selectedSubcategory === 'laptops' ? 'md:col-span-4' : selectedCategory === 'computers' && selectedSubcategory === 'cpus' ? 'md:col-span-4' : selectedCategory === 'computers' && selectedSubcategory === 'tablets' ? 'md:col-span-4' : 'md:col-span-5'}>
            {gridContent}
          </div>
        </div>
      </div>
      <Footer />
      <FloatingButtons />
    </main>
  );
}