import { Product, Supplier } from './types';

export const SUPPLIERS: Supplier[] = [
  {
    id: 'tech-global',
    name: 'TechGlobal Solutions',
    logo: 'https://images.pexels.com/photos/4792505/pexels-photo-4792505.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop',
    rating: 4.8,
    reviewCount: 1250,
    location: 'Guangzhou, China',
    verificationLevel: 'premium',
    responseTime: '< 2 hours',
    businessType: 'Manufacturer'
  },
  {
    id: 'digital-hub',
    name: 'Digital Hub Electronics',
    logo: 'https://images.pexels.com/photos/4792505/pexels-photo-4792505.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop',
    rating: 4.6,
    reviewCount: 890,
    location: 'Shenzhen, China',
    verificationLevel: 'verified',
    responseTime: '< 4 hours',
    businessType: 'Trading Company'
  },
  {
    id: 'smart-devices',
    name: 'Smart Devices Ltd',
    logo: 'https://images.pexels.com/photos/4792505/pexels-photo-4792505.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop',
    rating: 4.7,
    reviewCount: 650,
    location: 'Hong Kong',
    verificationLevel: 'premium',
    responseTime: '< 1 hour',
    businessType: 'Distributor'
  },
  {
    id: 'africa-tech',
    name: 'Africa Tech Supplies',
    logo: 'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&w=100&h=100&fit=crop',
    rating: 4.5,
    reviewCount: 420,
    location: 'Nairobi, Kenya',
    verificationLevel: 'verified',
    responseTime: '< 3 hours',
    businessType: 'Retailer'
  },
  {
    id: 'euro-electro',
    name: 'EuroElectro GmbH',
    logo: 'https://images.pexels.com/photos/1707828/pexels-photo-1707828.jpeg?auto=compress&w=100&h=100&fit=crop',
    rating: 4.9,
    reviewCount: 980,
    location: 'Berlin, Germany',
    verificationLevel: 'premium',
    responseTime: '< 2 hours',
    businessType: 'Manufacturer'
  }
];

export const SAMPLE_PRODUCTS: Product[] = [
  {
    id: 'laptop-dell-1',
    name: 'Dell Inspiron 15 3000 Business Laptop',
    category: 'computers',
    subcategory: 'laptops',
    images: [
      'https://images.pexels.com/photos/205421/pexels-photo-205421.jpeg?auto=compress&cs=tinysrgb&w=500',
      'https://images.pexels.com/photos/1229861/pexels-photo-1229861.jpeg?auto=compress&cs=tinysrgb&w=500',
      'https://images.pexels.com/photos/1458678/pexels-photo-1458678.jpeg?auto=compress&cs=tinysrgb&w=500'
    ],
    supplier: SUPPLIERS[0],
    moqTiers: [
      { quantity: 10, pricePerUnit: 28000, currency: 'KES', discount: 0 },
      { quantity: 50, pricePerUnit: 26000, currency: 'KES', discount: 7 },
      { quantity: 100, pricePerUnit: 24000, currency: 'KES', discount: 14 }
    ],
    description: 'Professional business laptop with Intel Core i5 processor, 8GB RAM, and 256GB SSD. Perfect for SMEs and office environments.',
    specifications: {
      'Processor': 'Intel Core i5-1135G7',
      'RAM': '8GB DDR4',
      'Storage': '256GB SSD',
      'Display': '15.6" Full HD',
      'Graphics': 'Intel Iris Xe',
      'Battery': 'Up to 8 hours',
      'Weight': '1.85 kg',
      'Warranty': '1 Year International',
      'OS': 'Windows 11 Pro'
    },
    certifications: ['CE', 'FCC', 'RoHS', 'ENERGY STAR'],
    rating: 4.5,
    reviewCount: 128,
    tags: ['business', 'productivity', 'portable', 'energy-efficient'],
    tradeTerms: ['FOB', 'CIF', 'DAP'],
    paymentTerms: ['TT', 'LC'],
    leadTime: '7-15 days',
    shippingMethods: ['Air Express', 'Sea Freight']
  },
  {
    id: 'smartphone-samsung-1',
    name: 'Samsung Galaxy A54 5G Wholesale',
    category: 'mobile-phones',
    subcategory: 'smartphones',
    images: [
      'https://images.pexels.com/photos/47261/pexels-photo-47261.jpeg?auto=compress&cs=tinysrgb&w=500',
      'https://images.pexels.com/photos/1841841/pexels-photo-1841841.jpeg?auto=compress&cs=tinysrgb&w=500',
      'https://images.pexels.com/photos/1237119/pexels-photo-1237119.jpeg?auto=compress&cs=tinysrgb&w=500'
    ],
    supplier: SUPPLIERS[1],
    moqTiers: [
      { quantity: 20, pricePerUnit: 18500, currency: 'KES', discount: 0 },
      { quantity: 100, pricePerUnit: 17000, currency: 'KES', discount: 8 },
      { quantity: 500, pricePerUnit: 15500, currency: 'KES', discount: 16 }
    ],
    description: 'Latest Samsung Galaxy A54 5G with 128GB storage, 50MP camera, and all-day battery life. Perfect for retail and distribution.',
    specifications: {
      'Brand': 'Samsung',
      'Display': '6.4" Super AMOLED',
      'Processor': 'Exynos 1380',
      'RAM': '6GB',
      'Storage': '128GB',
      'Camera': '50MP + 12MP + 5MP',
      'Battery': '5000mAh',
      'OS': 'Android 13',
      'Network': '5G',
      'Other': 'Dual SIM, Fast Charging'
    },
    certifications: ['CE', 'FCC', 'RoHS', 'GCF'],
    rating: 4.7,
    reviewCount: 89,
    tags: ['5G', 'camera', 'long-battery', 'retail'],
    tradeTerms: ['FOB', 'CIF', 'EXW'],
    paymentTerms: ['TT', 'LC', 'DP'],
    leadTime: '5-12 days',
    shippingMethods: ['Air Express', 'Sea Freight']
  },
  {
    id: 'charger-usb-c-1',
    name: 'USB-C Fast Charger 65W PD Wholesale Pack',
    category: 'mobile-accessories',
    subcategory: 'chargers',
    images: [
      'https://images.pexels.com/photos/4792398/pexels-photo-4792398.jpeg?auto=compress&cs=tinysrgb&w=500',
      'https://images.pexels.com/photos/8566432/pexels-photo-8566432.jpeg?auto=compress&cs=tinysrgb&w=500'
    ],
    supplier: SUPPLIERS[2],
    moqTiers: [
      { quantity: 50, pricePerUnit: 280, currency: 'KES', discount: 0 },
      { quantity: 200, pricePerUnit: 240, currency: 'KES', discount: 14 },
      { quantity: 1000, pricePerUnit: 200, currency: 'KES', discount: 29 }
    ],
    description: 'Universal USB-C 65W PD fast charger compatible with laptops, tablets, and smartphones. CE certified with overvoltage protection.',
    specifications: {
      'Power Output': '65W',
      'Input': '100-240V AC',
      'Output': '5V/3A, 9V/3A, 12V/3A, 15V/3A, 20V/3.25A',
      'Connector': 'USB-C PD',
      'Cable Length': '1.5m',
      'Safety': 'Overvoltage, Overcurrent, Short Circuit Protection',
      'Compatibility': 'MacBook, iPad, iPhone, Android',
      'Certifications': 'CE, FCC, RoHS'
    },
    certifications: ['CE', 'FCC', 'RoHS', 'UL'],
    rating: 4.6,
    reviewCount: 245,
    tags: ['fast-charging', 'universal', 'safety', 'wholesale'],
    tradeTerms: ['FOB', 'CIF', 'EXW', 'DAP'],
    paymentTerms: ['TT', 'DP', 'OA'],
    leadTime: '3-10 days',
    shippingMethods: ['Air Express', 'Sea Freight', 'Land Transport']
  },
  {
    id: 'monitor-lg-1',
    name: 'LG 24" IPS Monitor Full HD Business Series',
    category: 'computer-accessories',
    subcategory: 'monitors',
    images: [
      'https://images.pexels.com/photos/1029757/pexels-photo-1029757.jpeg?auto=compress&cs=tinysrgb&w=500',
      'https://images.pexels.com/photos/1714208/pexels-photo-1714208.jpeg?auto=compress&cs=tinysrgb&w=500'
    ],
    supplier: SUPPLIERS[0],
    moqTiers: [
      { quantity: 25, pricePerUnit: 8500, currency: 'KES', discount: 0 },
      { quantity: 100, pricePerUnit: 7800, currency: 'KES', discount: 8 },
      { quantity: 250, pricePerUnit: 7200, currency: 'KES', discount: 15 }
    ],
    description: '24-inch IPS monitor with Full HD resolution, perfect for office setups and business environments. Energy efficient with multiple connectivity options.',
    specifications: {
      'Brand': 'LG',
      'Display Size': '24 inches',
      'Resolution': '1920x1080 Full HD',
      'Panel Type': 'IPS',
      'Refresh Rate': '75Hz',
      'Connectivity': 'HDMI, VGA, DisplayPort',
      'Other': 'VESA Mount, Energy Star'
    },
    certifications: ['CE', 'FCC', 'ENERGY STAR', 'TCO'],
    rating: 4.4,
    reviewCount: 67,
    tags: ['office', 'productivity', 'energy-efficient', 'IPS'],
    tradeTerms: ['FOB', 'CIF', 'DAP'],
    paymentTerms: ['TT', 'LC'],
    leadTime: '10-20 days',
    shippingMethods: ['Sea Freight', 'Air Express']
  },
  {
    id: 'router-tp-link-1',
    name: 'TP-Link AC1200 WiFi Router Wholesale',
    category: 'network-hardware',
    subcategory: 'routers',
    images: [
      'https://images.pexels.com/photos/4508751/pexels-photo-4508751.jpeg?auto=compress&cs=tinysrgb&w=500'
    ],
    supplier: SUPPLIERS[1],
    moqTiers: [
      { quantity: 30, pricePerUnit: 3200, currency: 'KES', discount: 0 },
      { quantity: 150, pricePerUnit: 2900, currency: 'KES', discount: 9 },
      { quantity: 500, pricePerUnit: 2600, currency: 'KES', discount: 19 }
    ],
    description: 'Dual-band WiFi router with AC1200 speeds, perfect for small to medium businesses. Easy setup with mobile app management.',
    specifications: {
      'WiFi Speed': 'AC1200 (300Mbps + 867Mbps)',
      'Frequency': '2.4GHz + 5GHz',
      'Antennas': '4 x External',
      'Ethernet Ports': '4 x 10/100Mbps',
      'WAN Port': '1 x 10/100Mbps',
      'Security': 'WPA3, WPA2, WPS',
      'Management': 'Web Interface + Mobile App',
      'Coverage': 'Up to 150m²'
    },
    certifications: ['CE', 'FCC', 'IC', 'RoHS'],
    rating: 4.3,
    reviewCount: 156,
    tags: ['wifi', 'business', 'dual-band', 'easy-setup'],
    tradeTerms: ['FOB', 'CIF', 'EXW'],
    paymentTerms: ['TT', 'DP'],
    leadTime: '7-14 days',
    shippingMethods: ['Air Express', 'Sea Freight']
  },
  {
    id: 'laptop-1',
    name: 'HP EliteBook 840',
    category: 'computers',
    subcategory: 'laptops',
    supplier: SUPPLIERS[0],
    images: ['https://images.pexels.com/photos/18105/pexels-photo.jpg?auto=compress&w=400'],
    moqTiers: [
      { quantity: 1, pricePerUnit: 120000, currency: 'KES' },
      { quantity: 10, pricePerUnit: 115000, currency: 'KES' }
    ],
    rating: 4.7,
    reviewCount: 320,
    tags: ['business', 'ultrabook'],
    certifications: ['CE', 'FCC'],
    description: 'A reliable business laptop with robust security features.',
    leadTime: '5 days',
    tradeTerms: ['FOB', 'CIF'],
    paymentTerms: ['T/T', 'L/C'],
    specifications: {
      'Processor': 'Intel Core i5-1135G7',
      'RAM': '16GB DDR4',
      'Storage': '512GB SSD',
      'Display': '14" FHD',
      'Graphics': 'Intel Iris Xe',
      'Battery': 'Up to 10 hours',
      'Weight': '1.4kg',
      'OS': 'Windows 11 Pro'
    },
    shippingMethods: ['Air Express', 'Sea Freight']
  },
  {
    id: 'laptop-2',
    name: 'Dell XPS 13',
    category: 'computers',
    subcategory: 'laptops',
    supplier: SUPPLIERS[1],
    images: ['https://images.pexels.com/photos/374074/pexels-photo-374074.jpeg?auto=compress&w=400'],
    moqTiers: [
      { quantity: 1, pricePerUnit: 130000, currency: 'KES' },
      { quantity: 5, pricePerUnit: 125000, currency: 'KES' }
    ],
    rating: 4.8,
    reviewCount: 210,
    tags: ['ultrabook', 'premium'],
    certifications: ['CE', 'RoHS'],
    description: 'Compact, powerful, and beautifully designed ultrabook.',
    leadTime: '7 days',
    tradeTerms: ['FOB'],
    paymentTerms: ['T/T', 'PayPal'],
    specifications: {
      'Processor': 'Intel Core i7-1165G7',
      'RAM': '16GB LPDDR4x',
      'Storage': '512GB SSD',
      'Display': '13.3" FHD',
      'Graphics': 'Intel Iris Xe',
      'Battery': 'Up to 12 hours',
      'Weight': '1.2kg',
      'OS': 'Windows 11 Pro'
    },
    shippingMethods: ['Air Express', 'Sea Freight']
  },
  {
    id: 'laptop-3',
    name: 'Lenovo ThinkPad X1 Carbon',
    category: 'computers',
    subcategory: 'laptops',
    supplier: SUPPLIERS[2],
    images: ['https://images.pexels.com/photos/18105/pexels-photo.jpg?auto=compress&w=400'],
    moqTiers: [
      { quantity: 1, pricePerUnit: 140000, currency: 'KES' },
      { quantity: 10, pricePerUnit: 135000, currency: 'KES' }
    ],
    rating: 4.9,
    reviewCount: 180,
    tags: ['business', 'lightweight'],
    certifications: ['CE'],
    description: 'Ultra-light, ultra-durable, and ultra-powerful business laptop.',
    leadTime: '6 days',
    tradeTerms: ['CIF'],
    paymentTerms: ['T/T', 'L/C'],
    specifications: {
      'Processor': 'Intel Core i7-1260P',
      'RAM': '16GB LPDDR5',
      'Storage': '1TB SSD',
      'Display': '14" FHD',
      'Graphics': 'Intel Iris Xe',
      'Battery': 'Up to 15 hours',
      'Weight': '1.09kg',
      'OS': 'Windows 11 Pro'
    },
    shippingMethods: ['Air Express', 'Sea Freight']
  },
  {
    id: 'laptop-4',
    name: 'Apple MacBook Pro 14"',
    category: 'computers',
    subcategory: 'laptops',
    supplier: SUPPLIERS[3],
    images: ['https://images.pexels.com/photos/18105/pexels-photo.jpg?auto=compress&w=400'],
    moqTiers: [
      { quantity: 1, pricePerUnit: 250000, currency: 'KES' },
      { quantity: 5, pricePerUnit: 245000, currency: 'KES' }
    ],
    rating: 4.8,
    reviewCount: 400,
    tags: ['mac', 'pro'],
    certifications: ['CE', 'FCC'],
    description: 'Powerful performance for professionals and creators.',
    leadTime: '8 days',
    tradeTerms: ['FOB'],
    paymentTerms: ['T/T', 'PayPal'],
    specifications: {
      'Processor': 'Apple M2 Pro',
      'RAM': '16GB Unified',
      'Storage': '1TB SSD',
      'Display': '14" Liquid Retina XDR',
      'Graphics': 'Apple M2 Pro GPU',
      'Battery': 'Up to 17 hours',
      'Weight': '1.6kg',
      'OS': 'macOS Ventura'
    },
    shippingMethods: ['Air Express', 'Sea Freight']
  },
  {
    id: 'laptop-5',
    name: 'Asus ZenBook 14',
    category: 'computers',
    subcategory: 'laptops',
    supplier: SUPPLIERS[4],
    images: ['https://images.pexels.com/photos/18105/pexels-photo.jpg?auto=compress&w=400'],
    moqTiers: [
      { quantity: 1, pricePerUnit: 110000, currency: 'KES' },
      { quantity: 10, pricePerUnit: 105000, currency: 'KES' }
    ],
    rating: 4.6,
    reviewCount: 150,
    tags: ['ultrabook', 'lightweight'],
    certifications: ['CE'],
    description: 'Slim, stylish, and portable laptop for business and travel.',
    leadTime: '5 days',
    tradeTerms: ['CIF'],
    paymentTerms: ['T/T', 'L/C'],
    specifications: {
      'Processor': 'Intel Core i5-1240P',
      'RAM': '16GB LPDDR5',
      'Storage': '512GB SSD',
      'Display': '14" FHD',
      'Graphics': 'Intel Iris Xe',
      'Battery': 'Up to 13 hours',
      'Weight': '1.3kg',
      'OS': 'Windows 11 Pro'
    },
    shippingMethods: ['Air Express', 'Sea Freight']
  },
  {
    id: 'phone-1',
    name: 'Samsung Galaxy S24',
    category: 'mobile-phones',
    subcategory: 'smartphones',
    supplier: SUPPLIERS[0],
    images: ['https://images.pexels.com/photos/1092671/pexels-photo-1092671.jpeg?auto=compress&w=400'],
    moqTiers: [
      { quantity: 1, pricePerUnit: 120000, currency: 'KES' },
      { quantity: 10, pricePerUnit: 115000, currency: 'KES' }
    ],
    rating: 4.7,
    reviewCount: 500,
    tags: ['android', 'flagship'],
    certifications: ['CE', 'FCC'],
    description: 'Latest flagship with advanced camera and display.',
    leadTime: '3 days',
    tradeTerms: ['FOB'],
    paymentTerms: ['T/T', 'PayPal'],
    specifications: {
      'Brand': 'Samsung',
      'Display': '6.1" Full HD+',
      'Processor': 'Qualcomm Snapdragon 8 Gen 3',
      'RAM': '12GB',
      'Storage': '256GB',
      'Camera': '50MP + 12MP + 10MP',
      'Battery': '4000mAh',
      'OS': 'Android 14',
      'Network': '5G',
      'Other': 'Dual SIM, Face Unlock, Fast Charging'
    },
    shippingMethods: ['Air Express', 'Sea Freight']
  },
  {
    id: 'phone-2',
    name: 'Apple iPhone 15',
    category: 'mobile-phones',
    subcategory: 'smartphones',
    supplier: SUPPLIERS[1],
    images: ['https://images.pexels.com/photos/1092671/pexels-photo-1092671.jpeg?auto=compress&w=400'],
    moqTiers: [
      { quantity: 1, pricePerUnit: 150000, currency: 'KES' },
      { quantity: 5, pricePerUnit: 145000, currency: 'KES' }
    ],
    rating: 4.9,
    reviewCount: 800,
    tags: ['ios', 'flagship'],
    certifications: ['CE', 'FCC'],
    description: 'The newest iPhone with A17 chip and ProMotion display.',
    leadTime: '4 days',
    tradeTerms: ['CIF'],
    paymentTerms: ['T/T', 'L/C'],
    specifications: {
      'Brand': 'Apple',
      'Display': '6.1" Full HD+',
      'Processor': 'Apple A17 Pro',
      'RAM': '6GB',
      'Storage': '256GB',
      'Camera': '48MP + 12MP + 12MP',
      'Battery': '3877mAh',
      'OS': 'iOS 17',
      'Network': '5G',
      'Other': 'Face ID, MagSafe, Fast Charging'
    },
    shippingMethods: ['Air Express', 'Sea Freight']
  },
  {
    id: 'phone-3',
    name: 'Xiaomi Mi 14',
    category: 'mobile-phones',
    subcategory: 'smartphones',
    supplier: SUPPLIERS[2],
    images: ['https://images.pexels.com/photos/1092671/pexels-photo-1092671.jpeg?auto=compress&w=400'],
    moqTiers: [
      { quantity: 1, pricePerUnit: 80000, currency: 'KES' },
      { quantity: 10, pricePerUnit: 78000, currency: 'KES' }
    ],
    rating: 4.6,
    reviewCount: 300,
    tags: ['android', 'value'],
    certifications: ['CE'],
    description: 'Affordable flagship with great battery life.',
    leadTime: '3 days',
    tradeTerms: ['FOB'],
    paymentTerms: ['T/T', 'PayPal'],
    specifications: {
      'Brand': 'Xiaomi',
      'Display': '6.67" Full HD+',
      'Processor': 'Qualcomm Snapdragon 8 Gen 2',
      'RAM': '12GB',
      'Storage': '256GB',
      'Camera': '50MP + 12MP + 10MP',
      'Battery': '4880mAh',
      'OS': 'Android 14',
      'Network': '5G',
      'Other': 'Dual SIM, Fast Charging, Value Edition'
    },
    shippingMethods: ['Air Express', 'Sea Freight']
  },
  {
    id: 'phone-4',
    name: 'Tecno Phantom X2',
    category: 'mobile-phones',
    subcategory: 'smartphones',
    supplier: SUPPLIERS[3],
    images: ['https://images.pexels.com/photos/1092671/pexels-photo-1092671.jpeg?auto=compress&w=400'],
    moqTiers: [
      { quantity: 1, pricePerUnit: 60000, currency: 'KES' },
      { quantity: 10, pricePerUnit: 58000, currency: 'KES' }
    ],
    rating: 4.4,
    reviewCount: 120,
    tags: ['android', 'africa'],
    certifications: ['CE'],
    description: 'Feature-rich phone for the African market.',
    leadTime: '2 days',
    tradeTerms: ['CIF'],
    paymentTerms: ['T/T', 'L/C'],
    specifications: {
      'Brand': 'Tecno',
      'Display': '6.78" Full HD+',
      'Processor': 'Qualcomm Snapdragon 7 Gen 2',
      'RAM': '8GB',
      'Storage': '128GB',
      'Camera': '50MP + 12MP + 10MP',
      'Battery': '5000mAh',
      'OS': 'Android 14',
      'Network': '5G',
      'Other': 'Dual SIM, Africa Edition'
    },
    shippingMethods: ['Air Express', 'Sea Freight']
  },
  {
    id: 'phone-5',
    name: 'Infinix Note 12',
    category: 'mobile-phones',
    subcategory: 'smartphones',
    supplier: SUPPLIERS[4],
    images: ['https://images.pexels.com/photos/1092671/pexels-photo-1092671.jpeg?auto=compress&w=400'],
    moqTiers: [
      { quantity: 1, pricePerUnit: 50000, currency: 'KES' },
      { quantity: 10, pricePerUnit: 48000, currency: 'KES' }
    ],
    rating: 4.3,
    reviewCount: 90,
    tags: ['android', 'budget'],
    certifications: ['CE'],
    description: 'Affordable smartphone with large display.',
    leadTime: '2 days',
    tradeTerms: ['FOB'],
    paymentTerms: ['T/T', 'PayPal'],
    specifications: {
      'Brand': 'Infinix',
      'Display': '6.7" Full HD+',
      'Processor': 'MediaTek Helio G99',
      'RAM': '8GB',
      'Storage': '128GB',
      'Camera': '50MP + 12MP + 10MP',
      'Battery': '5000mAh',
      'OS': 'Android 14',
      'Network': '5G',
      'Other': 'Dual SIM, Budget Edition'
    },
    shippingMethods: ['Air Express', 'Sea Freight']
  },
  {
    id: 'cpu-1',
    name: 'Intel Core i9-13900K',
    category: 'computers',
    subcategory: 'cpus',
    supplier: SUPPLIERS[0],
    images: ['https://images.pexels.com/photos/163125/pexels-photo-163125.jpeg?auto=compress&w=400'],
    moqTiers: [
      { quantity: 1, pricePerUnit: 90000, currency: 'KES' },
      { quantity: 10, pricePerUnit: 88000, currency: 'KES' }
    ],
    rating: 4.9,
    reviewCount: 200,
    tags: ['intel', 'desktop'],
    certifications: ['CE'],
    description: 'High-end desktop CPU for performance users.',
    leadTime: '3 days',
    tradeTerms: ['FOB'],
    paymentTerms: ['T/T', 'L/C'],
    specifications: {
      'Brand': 'Intel',
      'Processor Model': 'Core i9-13900K',
      'Cores': '24',
      'Threads': '32',
      'Base Clock': '3.0GHz',
      'Boost Clock': '5.8GHz',
      'TDP': '125W',
      'Socket': 'LGA1700',
      'Integrated Graphics': 'Intel UHD 770',
      'Other': 'Unlocked, Overclockable'
    },
    shippingMethods: ['Air Express', 'Sea Freight']
  },
  {
    id: 'cpu-2',
    name: 'AMD Ryzen 9 7950X',
    category: 'computers',
    subcategory: 'cpus',
    supplier: SUPPLIERS[1],
    images: ['https://images.pexels.com/photos/163125/pexels-photo-163125.jpeg?auto=compress&w=400'],
    moqTiers: [
      { quantity: 1, pricePerUnit: 85000, currency: 'KES' },
      { quantity: 10, pricePerUnit: 83000, currency: 'KES' }
    ],
    rating: 4.8,
    reviewCount: 180,
    tags: ['amd', 'desktop'],
    certifications: ['CE'],
    description: 'Top-tier CPU for gaming and content creation.',
    leadTime: '4 days',
    tradeTerms: ['CIF'],
    paymentTerms: ['T/T', 'PayPal'],
    specifications: {
      'Brand': 'AMD',
      'Processor Model': 'Ryzen 9 7950X',
      'Cores': '16',
      'Threads': '32',
      'Base Clock': '4.5GHz',
      'Boost Clock': '5.7GHz',
      'TDP': '170W',
      'Socket': 'AM5',
      'Integrated Graphics': 'None',
      'Other': 'Unlocked, Overclockable'
    },
    shippingMethods: ['Air Express', 'Sea Freight']
  },
  {
    id: 'cpu-3',
    name: 'Intel Core i5-13600K',
    category: 'computers',
    subcategory: 'cpus',
    supplier: SUPPLIERS[2],
    images: ['https://images.pexels.com/photos/163125/pexels-photo-163125.jpeg?auto=compress&w=400'],
    moqTiers: [
      { quantity: 1, pricePerUnit: 50000, currency: 'KES' },
      { quantity: 10, pricePerUnit: 48000, currency: 'KES' }
    ],
    rating: 4.6,
    reviewCount: 120,
    tags: ['intel', 'midrange'],
    certifications: ['CE'],
    description: 'Great value CPU for mainstream users.',
    leadTime: '3 days',
    tradeTerms: ['FOB'],
    paymentTerms: ['T/T', 'L/C'],
    specifications: {
      'Brand': 'Intel',
      'Processor Model': 'Core i5-13600K',
      'Cores': '14',
      'Threads': '20',
      'Base Clock': '3.5GHz',
      'Boost Clock': '5.1GHz',
      'TDP': '125W',
      'Socket': 'LGA1700',
      'Integrated Graphics': 'Intel UHD 770',
      'Other': 'Unlocked, Overclockable'
    },
    shippingMethods: ['Air Express', 'Sea Freight']
  },
  {
    id: 'cpu-4',
    name: 'AMD Ryzen 5 7600X',
    category: 'computers',
    subcategory: 'cpus',
    supplier: SUPPLIERS[3],
    images: ['https://images.pexels.com/photos/163125/pexels-photo-163125.jpeg?auto=compress&w=400'],
    moqTiers: [
      { quantity: 1, pricePerUnit: 40000, currency: 'KES' },
      { quantity: 10, pricePerUnit: 38000, currency: 'KES' }
    ],
    rating: 4.5,
    reviewCount: 100,
    tags: ['amd', 'midrange'],
    certifications: ['CE'],
    description: 'Affordable CPU for gaming and productivity.',
    leadTime: '2 days',
    tradeTerms: ['CIF'],
    paymentTerms: ['T/T', 'PayPal'],
    specifications: {
      'Brand': 'AMD',
      'Processor Model': 'Ryzen 5 7600X',
      'Cores': '6',
      'Threads': '12',
      'Base Clock': '4.7GHz',
      'Boost Clock': '5.3GHz',
      'TDP': '105W',
      'Socket': 'AM5',
      'Integrated Graphics': 'None',
      'Other': 'Unlocked, Overclockable'
    },
    shippingMethods: ['Air Express', 'Sea Freight']
  },
  {
    id: 'cpu-5',
    name: 'Apple M2 Pro',
    category: 'computers',
    subcategory: 'cpus',
    supplier: SUPPLIERS[4],
    images: ['https://images.pexels.com/photos/163125/pexels-photo-163125.jpeg?auto=compress&w=400'],
    moqTiers: [
      { quantity: 1, pricePerUnit: 120000, currency: 'KES' },
      { quantity: 5, pricePerUnit: 115000, currency: 'KES' }
    ],
    rating: 4.7,
    reviewCount: 90,
    tags: ['apple', 'arm'],
    certifications: ['CE'],
    description: 'Apple silicon for high-performance laptops.',
    leadTime: '5 days',
    tradeTerms: ['FOB'],
    paymentTerms: ['T/T', 'L/C'],
    specifications: {
      'Brand': 'Apple',
      'Processor Model': 'M2 Pro',
      'Cores': '10',
      'Threads': '16',
      'Base Clock': '3.5GHz',
      'Boost Clock': '5.0GHz',
      'TDP': '20W',
      'Socket': 'Apple Proprietary',
      'Integrated Graphics': 'Apple M2',
      'Other': 'ARM Architecture, Integrated GPU'
    },
    shippingMethods: ['Air Express', 'Sea Freight']
  },
  {
    id: 'tablet-1',
    name: 'Apple iPad Pro 12.9"',
    category: 'computers',
    subcategory: 'tablets',
    supplier: SUPPLIERS[0],
    images: ['https://images.pexels.com/photos/508256/pexels-photo-508256.jpeg?auto=compress&w=400'],
    moqTiers: [
      { quantity: 1, pricePerUnit: 160000, currency: 'KES' },
      { quantity: 5, pricePerUnit: 155000, currency: 'KES' }
    ],
    rating: 4.9,
    reviewCount: 300,
    tags: ['apple', 'tablet'],
    certifications: ['CE', 'FCC'],
    description: 'The ultimate tablet for professionals and creatives.',
    leadTime: '4 days',
    tradeTerms: ['CIF'],
    paymentTerms: ['T/T', 'PayPal'],
    specifications: {
      'Brand': 'Apple',
      'Display': '12.9" Liquid Retina XDR',
      'Processor': 'Apple M2',
      'RAM': '8GB',
      'Storage': '1TB SSD',
      'Battery': '10000mAh',
      'OS': 'iPadOS 16',
      'Weight': '1.4lbs',
      'Other': 'Stylus Support, Face ID, 120Hz, WiFi + Cellular'
    },
    shippingMethods: ['Air Express', 'Sea Freight']
  },
  {
    id: 'tablet-2',
    name: 'Samsung Galaxy Tab S9',
    category: 'computers',
    subcategory: 'tablets',
    supplier: SUPPLIERS[1],
    images: ['https://images.pexels.com/photos/508256/pexels-photo-508256.jpeg?auto=compress&w=400'],
    moqTiers: [
      { quantity: 1, pricePerUnit: 120000, currency: 'KES' },
      { quantity: 5, pricePerUnit: 115000, currency: 'KES' }
    ],
    rating: 4.8,
    reviewCount: 180,
    tags: ['android', 'tablet'],
    certifications: ['CE'],
    description: 'Premium Android tablet with AMOLED display.',
    leadTime: '3 days',
    tradeTerms: ['FOB'],
    paymentTerms: ['T/T', 'L/C'],
    specifications: {
      'Brand': 'Samsung',
      'Display': '11" Super AMOLED',
      'Processor': 'Qualcomm Snapdragon 8 Gen 2',
      'RAM': '8GB',
      'Storage': '128GB',
      'Battery': '8000mAh',
      'OS': 'Android 13',
      'Weight': '1.1lbs',
      'Other': 'S Pen Support, 120Hz, WiFi + 5G'
    },
    shippingMethods: ['Air Express', 'Sea Freight']
  },
  {
    id: 'tablet-3',
    name: 'Lenovo Tab P12 Pro',
    category: 'computers',
    subcategory: 'tablets',
    supplier: SUPPLIERS[2],
    images: ['https://images.pexels.com/photos/508256/pexels-photo-508256.jpeg?auto=compress&w=400'],
    moqTiers: [
      { quantity: 1, pricePerUnit: 90000, currency: 'KES' },
      { quantity: 10, pricePerUnit: 88000, currency: 'KES' }
    ],
    rating: 4.6,
    reviewCount: 120,
    tags: ['android', 'tablet'],
    certifications: ['CE'],
    description: 'Versatile tablet for work and play.',
    leadTime: '4 days',
    tradeTerms: ['CIF'],
    paymentTerms: ['T/T', 'PayPal'],
    specifications: {
      'Brand': 'Lenovo',
      'Display': '12.6" AMOLED',
      'Processor': 'Qualcomm Snapdragon 870',
      'RAM': '8GB',
      'Storage': '256GB',
      'Battery': '8600mAh',
      'OS': 'Android 13',
      'Weight': '1.1lbs',
      'Other': 'Stylus Support, Keyboard, WiFi + LTE'
    },
    shippingMethods: ['Air Express', 'Sea Freight']
  },
  {
    id: 'tablet-4',
    name: 'Huawei MatePad Pro',
    category: 'computers',
    subcategory: 'tablets',
    supplier: SUPPLIERS[3],
    images: ['https://images.pexels.com/photos/508256/pexels-photo-508256.jpeg?auto=compress&w=400'],
    moqTiers: [
      { quantity: 1, pricePerUnit: 85000, currency: 'KES' },
      { quantity: 10, pricePerUnit: 83000, currency: 'KES' }
    ],
    rating: 4.5,
    reviewCount: 90,
    tags: ['android', 'tablet'],
    certifications: ['CE'],
    description: 'High-performance tablet with stylus support.',
    leadTime: '3 days',
    tradeTerms: ['FOB'],
    paymentTerms: ['T/T', 'L/C'],
    specifications: {
      'Brand': 'Huawei',
      'Display': '11.2" IPS',
      'Processor': 'Qualcomm Snapdragon 8 Gen 2',
      'RAM': '8GB',
      'Storage': '128GB',
      'Battery': '7250mAh',
      'OS': 'Android 13',
      'Weight': '1.0lbs',
      'Other': 'Stylus Support, WiFi + LTE'
    },
    shippingMethods: ['Air Express', 'Sea Freight']
  },
  {
    id: 'tablet-5',
    name: 'Microsoft Surface Pro 9',
    category: 'computers',
    subcategory: 'tablets',
    supplier: SUPPLIERS[4],
    images: ['https://images.pexels.com/photos/508256/pexels-photo-508256.jpeg?auto=compress&w=400'],
    moqTiers: [
      { quantity: 1, pricePerUnit: 140000, currency: 'KES' },
      { quantity: 5, pricePerUnit: 135000, currency: 'KES' }
    ],
    rating: 4.7,
    reviewCount: 110,
    tags: ['windows', 'tablet'],
    certifications: ['CE'],
    description: 'Tablet and laptop in one, for ultimate productivity.',
    leadTime: '5 days',
    tradeTerms: ['CIF'],
    paymentTerms: ['T/T', 'PayPal'],
    specifications: {
      'Brand': 'Microsoft',
      'Display': '13" PixelSense',
      'Processor': 'Intel Core i5',
      'RAM': '16GB',
      'Storage': '512GB SSD',
      'Battery': '8500mAh',
      'OS': 'Windows 11 Pro',
      'Weight': '1.3lbs',
      'Other': 'Detachable Keyboard, Touchscreen, WiFi + LTE'
    },
    shippingMethods: ['Air Express', 'Sea Freight']
  },
  {
    id: 'accessory-1',
    name: 'Logitech MX Master 3 Mouse',
    category: 'computer-accessories',
    subcategory: 'keyboards-mice',
    supplier: SUPPLIERS[0],
    images: ['https://images.pexels.com/photos/461077/pexels-photo-461077.jpeg?auto=compress&w=400'],
    moqTiers: [
      { quantity: 1, pricePerUnit: 12000, currency: 'KES' },
      { quantity: 10, pricePerUnit: 11500, currency: 'KES' }
    ],
    rating: 4.8,
    reviewCount: 200,
    tags: ['mouse', 'wireless'],
    certifications: ['CE'],
    description: 'Ergonomic wireless mouse for professionals.',
    leadTime: '2 days',
    tradeTerms: ['FOB'],
    paymentTerms: ['T/T', 'PayPal'],
    specifications: {
      'Brand': 'Logitech',
      'Type': 'Wireless Mouse',
      'Connectivity': '2.4GHz, Bluetooth',
      'Other': 'Ergonomic, Rechargeable, 7 Buttons'
    },
    shippingMethods: ['Air Express', 'Sea Freight']
  },
  {
    id: 'accessory-2',
    name: 'Dell Pro Wireless Keyboard',
    category: 'computer-accessories',
    subcategory: 'keyboards-mice',
    supplier: SUPPLIERS[1],
    images: ['https://images.pexels.com/photos/461077/pexels-photo-461077.jpeg?auto=compress&w=400'],
    moqTiers: [
      { quantity: 1, pricePerUnit: 8000, currency: 'KES' },
      { quantity: 10, pricePerUnit: 7500, currency: 'KES' }
    ],
    rating: 4.6,
    reviewCount: 120,
    tags: ['keyboard', 'wireless'],
    certifications: ['CE'],
    description: 'Slim, wireless keyboard for office use.',
    leadTime: '2 days',
    tradeTerms: ['CIF'],
    paymentTerms: ['T/T', 'L/C'],
    specifications: {
      'Brand': 'Dell',
      'Type': 'Wireless Keyboard',
      'Connectivity': '2.4GHz, USB Receiver',
      'Other': 'Slim, Battery Powered, Quiet Keys'
    },
    shippingMethods: ['Air Express', 'Sea Freight']
  },
  {
    id: 'accessory-3',
    name: 'SanDisk 1TB SSD',
    category: 'computer-accessories',
    subcategory: 'storage',
    supplier: SUPPLIERS[2],
    images: ['https://images.pexels.com/photos/461077/pexels-photo-461077.jpeg?auto=compress&w=400'],
    moqTiers: [
      { quantity: 1, pricePerUnit: 18000, currency: 'KES' },
      { quantity: 10, pricePerUnit: 17500, currency: 'KES' }
    ],
    rating: 4.7,
    reviewCount: 90,
    tags: ['storage', 'ssd'],
    certifications: ['CE'],
    description: 'Fast, reliable storage for all your files.',
    leadTime: '3 days',
    tradeTerms: ['FOB'],
    paymentTerms: ['T/T', 'PayPal'],
    specifications: {
      'Brand': 'SanDisk',
      'Capacity': '1TB',
      'Type': 'SSD',
      'Interface': 'M.2 2280',
      'Other': '3500MB/s Read, 3000MB/s Write, 512MB Cache'
    },
    shippingMethods: ['Air Express', 'Sea Freight']
  },
  {
    id: 'accessory-4',
    name: 'TP-Link AC1200 Router',
    category: 'computer-accessories',
    subcategory: 'routers',
    supplier: SUPPLIERS[3],
    images: ['https://images.pexels.com/photos/461077/pexels-photo-461077.jpeg?auto=compress&w=400'],
    moqTiers: [
      { quantity: 1, pricePerUnit: 6000, currency: 'KES' },
      { quantity: 10, pricePerUnit: 5800, currency: 'KES' }
    ],
    rating: 4.5,
    reviewCount: 80,
    tags: ['router', 'wifi'],
    certifications: ['CE'],
    description: 'Affordable, high-speed WiFi router.',
    leadTime: '2 days',
    tradeTerms: ['CIF'],
    paymentTerms: ['T/T', 'L/C'],
    specifications: {
      'Brand': 'TP-Link',
      'Type': 'Router',
      'Connectivity': '2.4GHz + 5GHz, 4x LAN',
      'Other': 'WPA3, Up to 150m² Coverage'
    },
    shippingMethods: ['Air Express', 'Sea Freight']
  },
  {
    id: 'accessory-5',
    name: 'Anker USB-C Hub',
    category: 'computer-accessories',
    subcategory: 'hubs',
    supplier: SUPPLIERS[4],
    images: ['https://images.pexels.com/photos/461077/pexels-photo-461077.jpeg?auto=compress&w=400'],
    moqTiers: [
      { quantity: 1, pricePerUnit: 7000, currency: 'KES' },
      { quantity: 10, pricePerUnit: 6800, currency: 'KES' }
    ],
    rating: 4.6,
    reviewCount: 60,
    tags: ['hub', 'usb-c'],
    certifications: ['CE'],
    description: 'Expand your laptop connectivity with this USB-C hub.',
    leadTime: '2 days',
    tradeTerms: ['FOB'],
    paymentTerms: ['T/T', 'PayPal'],
    specifications: {
      'Brand': 'Anker',
      'Type': 'USB-C Hub',
      'Connectivity': '4x USB-C, 2x USB-A, HDMI',
      'Other': '60W Power Delivery, 480Mbps Data'
    },
    shippingMethods: ['Air Express', 'Sea Freight']
  },
  {
    id: 'network-1',
    name: 'Cisco Catalyst 2960',
    category: 'network-hardware',
    subcategory: 'switches',
    supplier: SUPPLIERS[0],
    images: ['https://images.pexels.com/photos/325185/pexels-photo-325185.jpeg?auto=compress&w=400'],
    moqTiers: [
      { quantity: 1, pricePerUnit: 60000, currency: 'KES' },
      { quantity: 5, pricePerUnit: 58000, currency: 'KES' }
    ],
    rating: 4.8,
    reviewCount: 100,
    tags: ['switch', 'cisco'],
    certifications: ['CE'],
    description: 'Reliable network switch for business environments.',
    leadTime: '4 days',
    tradeTerms: ['FOB'],
    paymentTerms: ['T/T', 'L/C'],
    specifications: {
      'Ports': '24',
      'Speed': '1000Mbps',
      'Power': '100W',
      'Form Factor': '1U',
      'Certifications': 'CE, FCC, RoHS'
    },
    shippingMethods: ['Air Express', 'Sea Freight']
  },
  {
    id: 'network-2',
    name: 'Ubiquiti UniFi AP',
    category: 'network-hardware',
    subcategory: 'access-points',
    supplier: SUPPLIERS[1],
    images: ['https://images.pexels.com/photos/325185/pexels-photo-325185.jpeg?auto=compress&w=400'],
    moqTiers: [
      { quantity: 1, pricePerUnit: 15000, currency: 'KES' },
      { quantity: 10, pricePerUnit: 14500, currency: 'KES' }
    ],
    rating: 4.7,
    reviewCount: 80,
    tags: ['wifi', 'access-point'],
    certifications: ['CE'],
    description: 'Enterprise-grade wireless access point.',
    leadTime: '3 days',
    tradeTerms: ['CIF'],
    paymentTerms: ['T/T', 'PayPal'],
    specifications: {
      'Wireless': '2.4GHz + 5GHz',
      'Ports': '4',
      'Power': '10W',
      'Certifications': 'CE, FCC, RoHS'
    },
    shippingMethods: ['Air Express', 'Sea Freight']
  },
  {
    id: 'network-3',
    name: 'MikroTik RB2011',
    category: 'network-hardware',
    subcategory: 'routers',
    supplier: SUPPLIERS[2],
    images: ['https://images.pexels.com/photos/325185/pexels-photo-325185.jpeg?auto=compress&w=400'],
    moqTiers: [
      { quantity: 1, pricePerUnit: 12000, currency: 'KES' },
      { quantity: 10, pricePerUnit: 11500, currency: 'KES' }
    ],
    rating: 4.6,
    reviewCount: 60,
    tags: ['router', 'mikrotik'],
    certifications: ['CE'],
    description: 'Versatile router for small businesses.',
    leadTime: '2 days',
    tradeTerms: ['FOB'],
    paymentTerms: ['T/T', 'L/C'],
    specifications: {
      'Wireless': '2.4GHz + 5GHz',
      'Ports': '4',
      'Power': '10W',
      'Certifications': 'CE, FCC, RoHS'
    },
    shippingMethods: ['Air Express', 'Sea Freight']
  },
  {
    id: 'network-4',
    name: 'TP-Link TL-SG108',
    category: 'network-hardware',
    subcategory: 'switches',
    supplier: SUPPLIERS[3],
    images: ['https://images.pexels.com/photos/325185/pexels-photo-325185.jpeg?auto=compress&w=400'],
    moqTiers: [
      { quantity: 1, pricePerUnit: 8000, currency: 'KES' },
      { quantity: 10, pricePerUnit: 7800, currency: 'KES' }
    ],
    rating: 4.5,
    reviewCount: 50,
    tags: ['switch', 'tp-link'],
    certifications: ['CE'],
    description: 'Affordable gigabit switch for offices.',
    leadTime: '2 days',
    tradeTerms: ['CIF'],
    paymentTerms: ['T/T', 'PayPal'],
    specifications: {
      'Ports': '24',
      'Speed': '1000Mbps',
      'Power': '100W',
      'Certifications': 'CE, FCC, RoHS'
    },
    shippingMethods: ['Air Express', 'Sea Freight']
  },
  {
    id: 'network-5',
    name: 'D-Link DIR-825',
    category: 'network-hardware',
    subcategory: 'routers',
    supplier: SUPPLIERS[4],
    images: ['https://images.pexels.com/photos/325185/pexels-photo-325185.jpeg?auto=compress&w=400'],
    moqTiers: [
      { quantity: 1, pricePerUnit: 9000, currency: 'KES' },
      { quantity: 10, pricePerUnit: 8800, currency: 'KES' }
    ],
    rating: 4.4,
    reviewCount: 40,
    tags: ['router', 'd-link'],
    certifications: ['CE'],
    description: 'Dual-band wireless router for home and office.',
    leadTime: '2 days',
    tradeTerms: ['FOB'],
    paymentTerms: ['T/T', 'L/C'],
    specifications: {
      'Wireless': '2.4GHz + 5GHz',
      'Ports': '4',
      'Power': '10W',
      'Certifications': 'CE, FCC, RoHS'
    },
    shippingMethods: ['Air Express', 'Sea Freight']
  },
  {
    id: 'mobileacc-1',
    name: 'Anker PowerCore 20000',
    category: 'mobile-accessories',
    subcategory: 'chargers',
    supplier: SUPPLIERS[0],
    images: ['https://images.pexels.com/photos/325185/pexels-photo-325185.jpeg?auto=compress&w=400'],
    moqTiers: [
      { quantity: 1, pricePerUnit: 5000, currency: 'KES' },
      { quantity: 10, pricePerUnit: 4800, currency: 'KES' }
    ],
    rating: 4.8,
    reviewCount: 120,
    tags: ['powerbank', 'anker'],
    certifications: ['CE'],
    description: 'High-capacity power bank for mobile devices.',
    leadTime: '2 days',
    tradeTerms: ['FOB'],
    paymentTerms: ['T/T', 'PayPal'],
    specifications: {
      'Capacity': '20000mAh',
      'Input': '5V/2A',
      'Output': '5V/2A',
      'Certifications': 'CE, FCC, RoHS'
    },
    shippingMethods: ['Air Express', 'Sea Freight']
  },
  {
    id: 'mobileacc-2',
    name: 'Baseus USB-C Cable',
    category: 'mobile-accessories',
    subcategory: 'cables',
    supplier: SUPPLIERS[1],
    images: ['https://images.pexels.com/photos/325185/pexels-photo-325185.jpeg?auto=compress&w=400'],
    moqTiers: [
      { quantity: 1, pricePerUnit: 800, currency: 'KES' },
      { quantity: 10, pricePerUnit: 750, currency: 'KES' }
    ],
    rating: 4.7,
    reviewCount: 90,
    tags: ['cable', 'usb-c'],
    certifications: ['CE'],
    description: 'Durable, fast-charging USB-C cable.',
    leadTime: '1 day',
    tradeTerms: ['CIF'],
    paymentTerms: ['T/T', 'L/C'],
    specifications: {
      'Length': '1m',
      'Certifications': 'CE, FCC, RoHS'
    },
    shippingMethods: ['Air Express', 'Sea Freight']
  },
  {
    id: 'mobileacc-3',
    name: 'Samsung Galaxy Buds2',
    category: 'mobile-accessories',
    subcategory: 'earbuds',
    supplier: SUPPLIERS[2],
    images: ['https://images.pexels.com/photos/325185/pexels-photo-325185.jpeg?auto=compress&w=400'],
    moqTiers: [
      { quantity: 1, pricePerUnit: 15000, currency: 'KES' },
      { quantity: 10, pricePerUnit: 14500, currency: 'KES' }
    ],
    rating: 4.6,
    reviewCount: 70,
    tags: ['earbuds', 'samsung'],
    certifications: ['CE'],
    description: 'Wireless earbuds with active noise cancellation.',
    leadTime: '2 days',
    tradeTerms: ['FOB'],
    paymentTerms: ['T/T', 'PayPal'],
    specifications: {
      'Wireless': '2.4GHz',
      'Certifications': 'CE, FCC, RoHS'
    },
    shippingMethods: ['Air Express', 'Sea Freight']
  },
  {
    id: 'mobileacc-4',
    name: 'Apple MagSafe Charger',
    category: 'mobile-accessories',
    subcategory: 'chargers',
    supplier: SUPPLIERS[3],
    images: ['https://images.pexels.com/photos/325185/pexels-photo-325185.jpeg?auto=compress&w=400'],
    moqTiers: [
      { quantity: 1, pricePerUnit: 9000, currency: 'KES' },
      { quantity: 10, pricePerUnit: 8800, currency: 'KES' }
    ],
    rating: 4.7,
    reviewCount: 60,
    tags: ['charger', 'apple'],
    certifications: ['CE'],
    description: 'Magnetic wireless charger for iPhone.',
    leadTime: '1 day',
    tradeTerms: ['CIF'],
    paymentTerms: ['T/T', 'L/C'],
    specifications: {
      'Wireless': 'MagSafe',
      'Certifications': 'CE, FCC, RoHS'
    },
    shippingMethods: ['Air Express', 'Sea Freight']
  },
  {
    id: 'mobileacc-5',
    name: 'Oraimo Bluetooth Speaker',
    category: 'mobile-accessories',
    subcategory: 'speakers',
    supplier: SUPPLIERS[4],
    images: ['https://images.pexels.com/photos/325185/pexels-photo-325185.jpeg?auto=compress&w=400'],
    moqTiers: [
      { quantity: 1, pricePerUnit: 4000, currency: 'KES' },
      { quantity: 10, pricePerUnit: 3800, currency: 'KES' }
    ],
    rating: 4.5,
    reviewCount: 50,
    tags: ['speaker', 'oraimo'],
    certifications: ['CE'],
    description: 'Portable Bluetooth speaker with deep bass.',
    leadTime: '2 days',
    tradeTerms: ['FOB'],
    paymentTerms: ['T/T', 'PayPal'],
    specifications: {
      'Wireless': '2.4GHz',
      'Certifications': 'CE, FCC, RoHS'
    },
    shippingMethods: ['Air Express', 'Sea Freight']
  }
];

export const TRENDING_PRODUCTS = SAMPLE_PRODUCTS.slice(0, 4);
export const FEATURED_CATEGORIES = [
  { ...SUPPLIERS[0], name: 'Computers', count: '2,850 products', image: 'https://images.pexels.com/photos/205421/pexels-photo-205421.jpeg?auto=compress&cs=tinysrgb&w=300' },
  { ...SUPPLIERS[1], name: 'Mobile Phones', count: '2,650 products', image: 'https://images.pexels.com/photos/47261/pexels-photo-47261.jpeg?auto=compress&cs=tinysrgb&w=300' },
  { ...SUPPLIERS[2], name: 'Accessories', count: '5,800 products', image: 'https://images.pexels.com/photos/4792398/pexels-photo-4792398.jpeg?auto=compress&cs=tinysrgb&w=300' }
];