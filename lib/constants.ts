export const TRADE_TERMS = [
  { value: 'FOB', label: 'FOB (Free On Board)', description: 'Seller delivers goods on board the vessel. Buyer pays for shipping and insurance.' },
  { value: 'EXW', label: 'EXW (Ex Works)', description: 'Buyer collects goods from seller\'s premises. Buyer pays all transportation costs.' },
  { value: 'CIF', label: 'CIF (Cost, Insurance & Freight)', description: 'Seller pays for shipping and insurance to destination port.' },
  { value: 'DAP', label: 'DAP (Delivered At Place)', description: 'Seller delivers goods to agreed location, ready for unloading.' },
  { value: 'DDP', label: 'DDP (Delivered Duty Paid)', description: 'Seller delivers goods cleared for import at buyer\'s location.' }
];

export const PAYMENT_TERMS = [
  { value: 'TT', label: 'T/T (Telegraphic Transfer)', description: 'Bank transfer payment method. Most common and secure.' },
  { value: 'LC', label: 'L/C (Letter of Credit)', description: 'Bank guarantee for payment. Reduces risk for both parties.' },
  { value: 'DP', label: 'D/P (Documents against Payment)', description: 'Payment required before document release.' },
  { value: 'DA', label: 'D/A (Documents against Acceptance)', description: 'Buyer accepts draft to receive documents.' },
  { value: 'OA', label: 'Open Account', description: 'Payment terms agreed between trusted parties.' }
];

export const CATEGORIES = [
  {
    id: 'computers',
    name: 'Computers',
    icon: 'Laptop',
    subcategories: [
      { id: 'laptops', name: 'Laptops', productCount: 1250 },
      { id: 'cpus', name: 'CPUs', productCount: 500 },
      { id: 'desktops', name: 'Desktop PCs', productCount: 800 },
      { id: 'tablets', name: 'Tablets', productCount: 600 },
      { id: 'servers', name: 'Servers', productCount: 200 }
    ],
    productCount: 2850
  },
  {
    id: 'mobile-phones',
    name: 'Mobile Phones',
    icon: 'Smartphone',
    subcategories: [
      { id: 'smartphones', name: 'Smartphones', productCount: 2100 },
      { id: 'feature-phones', name: 'Feature Phones', productCount: 400 },
      { id: 'rugged-phones', name: 'Rugged Phones', productCount: 150 }
    ],
    productCount: 2650
  },
  {
    id: 'computer-accessories',
    name: 'Computer Accessories',
    icon: 'Mouse',
    subcategories: [
      { id: 'monitors', name: 'Monitors', productCount: 800 },
      { id: 'keyboards-mice', name: 'Keyboards & Mice', productCount: 1200 },
      { id: 'storage', name: 'Storage Devices', productCount: 900 },
      { id: 'cables', name: 'Cables & Adapters', productCount: 1500 }
    ],
    productCount: 4400
  },
  {
    id: 'network-hardware',
    name: 'Network Hardware',
    icon: 'Wifi',
    subcategories: [
      { id: 'routers', name: 'Routers', productCount: 400 },
      { id: 'switches', name: 'Switches', productCount: 300 },
      { id: 'modems', name: 'Modems', productCount: 250 },
      { id: 'access-points', name: 'Access Points', productCount: 200 }
    ],
    productCount: 1150
  },
  {
    id: 'mobile-accessories',
    name: 'Mobile Accessories',
    icon: 'Headphones',
    subcategories: [
      { id: 'chargers', name: 'Chargers & Cables', productCount: 2000 },
      { id: 'cases', name: 'Cases & Covers', productCount: 1800 },
      { id: 'screen-protectors', name: 'Screen Protectors', productCount: 1200 },
      { id: 'audio', name: 'Audio Accessories', productCount: 800 }
    ],
    productCount: 5800
  }
];

export const FINANCING_TIERS = [
  {
    level: 1,
    name: 'Starter',
    maxFinancing: 20000,
    requirements: ['Valid business registration', 'ID verification'],
    benefits: ['10% financing', 'Basic support', 'Standard rates']
  },
  {
    level: 2,
    name: 'Growth',
    maxFinancing: 50000,
    requirements: ['Complete 1 loan cycle', 'Good payment history'],
    benefits: ['20% financing', 'Priority support', 'Better rates']
  },
  {
    level: 3,
    name: 'Scale',
    maxFinancing: 100000,
    requirements: ['Complete 2 loan cycles', 'Volume purchases'],
    benefits: ['30% financing', 'Dedicated manager', 'Best rates']
  },
  {
    level: 4,
    name: 'Enterprise',
    maxFinancing: 200000,
    requirements: ['Complete 3 loan cycles', 'Excellent credit'],
    benefits: ['40% financing', 'Custom terms', 'VIP support']
  },
  {
    level: 5,
    name: 'Partner',
    maxFinancing: 500000,
    requirements: ['Long-term partnership', 'High volume'],
    benefits: ['50% financing', 'Exclusive deals', 'White glove service']
  }
];

export const SHIPPING_METHODS = [
  { value: 'sea', label: 'Sea Freight', description: 'Economical for large shipments, slower transit.' },
  { value: 'air', label: 'Air Freight', description: 'Faster than sea, higher cost, good for urgent or small shipments.' },
  { value: 'express', label: 'Express Courier', description: 'Fastest, door-to-door, best for samples or small parcels.' },
  { value: 'land', label: 'Land Transport', description: 'For regional/cross-border shipments by truck or rail.' }
];