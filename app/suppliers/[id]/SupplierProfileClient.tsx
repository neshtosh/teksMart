"use client";
import { useState } from 'react';
import { SUPPLIERS, SAMPLE_PRODUCTS } from '@/lib/data';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { ProductCard } from '@/components/ProductCard';
import { MessageCircle, MapPin, Star, Shield, Clock, Award, Building, Package, Truck, FileCheck, Users, Globe, Download } from 'lucide-react';

export default function SupplierProfileClient({ supplierId }: { supplierId: string }) {
  const supplier = SUPPLIERS.find(s => s.id === supplierId);
  const supplierProducts = SAMPLE_PRODUCTS.filter(p => p.supplier.id === supplierId);
  const [showContact, setShowContact] = useState(false);

  // Mock data for extended profile
  const companyProfile = {
    yearEstablished: 2011,
    employees: '100-200 People',
    mainMarkets: 'East Africa, Middle East, Europe',
    annualOutput: 'US$5M - US$10M',
    certifications: ['ISO 9001', 'CE', 'RoHS', 'FCC'],
    awards: ['Top Exporter 2023', 'Best Quality Supplier'],
    tradeShows: ['Canton Fair 2023', 'Nairobi Tech Expo 2024'],
    about: 'TechGlobal Solutions is a leading manufacturer and distributor of electronics, specializing in computers, mobile devices, and accessories. We pride ourselves on quality, fast delivery, and excellent customer service.',
    facilities: ['3,000 sqm factory', 'Automated assembly lines', 'R&D Lab'],
    team: ['Jane Doe (CEO)', 'John Smith (Head of Sales)', 'Mary Wang (Logistics)'],
    policies: {
      moq: '100 units',
      payment: 'T/T, L/C, PayPal',
      shipping: 'FOB, CIF, DDP',
      returns: '30-day return policy',
    },
    images: [
      'https://images.pexels.com/photos/325185/pexels-photo-325185.jpeg?auto=compress&w=400&h=300',
      'https://images.pexels.com/photos/256381/pexels-photo-256381.jpeg?auto=compress&w=400&h=300',
      'https://images.pexels.com/photos/373076/pexels-photo-373076.jpeg?auto=compress&w=400&h=300',
    ],
  };

  if (!supplier) {
    return <div className="container-custom py-12 text-center text-gray-500">Supplier not found.</div>;
  }

  return (
    <>
      {/* Supplier Overview */}
      <Card className="mb-8">
        <CardContent className="p-6">
          <div className="flex flex-col md:flex-row items-start gap-6">
            <div className="flex flex-col items-center gap-2 md:w-64">
              <img
                src={supplier.logo}
                alt={`${supplier.name} logo`}
                className="w-28 h-28 rounded-xl object-cover border mb-2"
              />
              <Badge className={supplier.verificationLevel === 'premium' ? 'bg-blue-500' : 'bg-emerald-500'}>
                {supplier.verificationLevel === 'premium' ? 'Premium Supplier' : 'Verified Supplier'}
              </Badge>
              <Button className="w-full mt-3" onClick={() => setShowContact(true)}>
                <MessageCircle className="h-4 w-4 mr-2" />Contact Supplier
              </Button>
              <Button variant="outline" className="w-full mt-2" size="sm">
                <Download className="h-4 w-4 mr-2" />Download Profile
              </Button>
            </div>
            <div className="flex-1 w-full">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4 gap-2">
                <h1 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-1">{supplier.name}</h1>
                <div className="flex flex-wrap gap-2 text-gray-600 text-sm">
                  <div className="flex items-center gap-1"><MapPin className="h-4 w-4" />{supplier.location}</div>
                  <div className="flex items-center gap-1"><Clock className="h-4 w-4" />Response: {supplier.responseTime}</div>
                  <div className="flex items-center gap-1"><Building className="h-4 w-4" />{supplier.businessType}</div>
                  <div className="flex items-center gap-1"><Award className="h-4 w-4" />Since {companyProfile.yearEstablished}</div>
                </div>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <div className="flex items-center justify-center mb-2"><Star className="h-5 w-5 fill-yellow-400 text-yellow-400" /></div>
                  <div className="text-xl font-bold text-gray-900">{supplier.rating}</div>
                  <div className="text-sm text-gray-600">Rating</div>
                </div>
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <div className="flex items-center justify-center mb-2"><Shield className="h-5 w-5 text-blue-600" /></div>
                  <div className="text-xl font-bold text-gray-900">{supplier.reviewCount}</div>
                  <div className="text-sm text-gray-600">Reviews</div>
                </div>
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <div className="flex items-center justify-center mb-2"><Package className="h-5 w-5 text-emerald-600" /></div>
                  <div className="text-xl font-bold text-gray-900">{supplierProducts.length}</div>
                  <div className="text-sm text-gray-600">Products</div>
                </div>
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <div className="flex items-center justify-center mb-2"><Truck className="h-5 w-5 text-purple-600" /></div>
                  <div className="text-xl font-bold text-gray-900">98%</div>
                  <div className="text-sm text-gray-600">On-time Delivery</div>
                </div>
              </div>
              <div className="flex flex-wrap gap-3 mb-2">
                {companyProfile.awards.map((award) => (
                  <Badge key={award} className="bg-yellow-100 text-yellow-800 border border-yellow-300"><Award className="h-4 w-4 mr-1" />{award}</Badge>
                ))}
                {companyProfile.tradeShows.map((show) => (
                  <Badge key={show} className="bg-blue-100 text-blue-800 border border-blue-300"><Globe className="h-4 w-4 mr-1" />{show}</Badge>
                ))}
              </div>
              <div className="text-gray-700 mt-2 mb-1">{companyProfile.about}</div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Tabs for Products, Profile, Reviews, FAQ */}
      <Tabs defaultValue="products" className="space-y-6">
        <TabsList className="w-full justify-start">
          <TabsTrigger value="products">Products ({supplierProducts.length})</TabsTrigger>
          <TabsTrigger value="profile">Company Profile</TabsTrigger>
          <TabsTrigger value="reviews">Reviews</TabsTrigger>
          <TabsTrigger value="faq">FAQ & Policies</TabsTrigger>
        </TabsList>

        {/* Products Tab */}
        <TabsContent value="products" className="space-y-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {supplierProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </TabsContent>

        {/* Company Profile Tab */}
        <TabsContent value="profile">
          <Card>
            <CardContent className="p-6 space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div><div className="text-sm text-gray-600 mb-1">Business Type</div><div className="font-medium">{supplier.businessType}</div></div>
                  <div><div className="text-sm text-gray-600 mb-1">Main Products</div><div className="font-medium">Computers, Mobile Phones, Accessories</div></div>
                  <div><div className="text-sm text-gray-600 mb-1">Year Established</div><div className="font-medium">{companyProfile.yearEstablished}</div></div>
                  <div><div className="text-sm text-gray-600 mb-1">Annual Output</div><div className="font-medium">{companyProfile.annualOutput}</div></div>
                </div>
                <div className="space-y-4">
                  <div><div className="text-sm text-gray-600 mb-1">Total Employees</div><div className="font-medium">{companyProfile.employees}</div></div>
                  <div><div className="text-sm text-gray-600 mb-1">Main Markets</div><div className="font-medium">{companyProfile.mainMarkets}</div></div>
                  <div><div className="text-sm text-gray-600 mb-1">Response Rate</div><div className="font-medium">98%</div></div>
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Certifications</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {companyProfile.certifications.map((cert) => (
                    <div key={cert} className="flex items-center gap-2 p-3 bg-gray-50 rounded-lg">
                      <FileCheck className="h-5 w-5 text-emerald-600" />
                      <span className="font-medium">{cert}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Facilities & Team</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <ul className="list-disc pl-5 text-gray-700 space-y-1">
                    {companyProfile.facilities.map(f => <li key={f}>{f}</li>)}
                  </ul>
                  <ul className="list-disc pl-5 text-gray-700 space-y-1">
                    {companyProfile.team.map(t => <li key={t}>{t}</li>)}
                  </ul>
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Gallery</h3>
                <div className="flex gap-4 flex-wrap">
                  {companyProfile.images.map((img, i) => (
                    <img key={i} src={img} alt="Company visual" className="w-40 h-28 object-cover rounded-lg border" />
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Reviews Tab */}
        <TabsContent value="reviews">
          <Card>
            <CardContent className="p-6">
              <div className="text-center text-gray-600 py-8">Reviews coming soon</div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* FAQ & Policies Tab */}
        <TabsContent value="faq">
          <Card>
            <CardContent className="p-6 space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Frequently Asked Questions</h3>
                <ul className="list-disc pl-5 text-gray-700 space-y-2">
                  <li><b>What is your MOQ?</b> {companyProfile.policies.moq}</li>
                  <li><b>What payment methods do you accept?</b> {companyProfile.policies.payment}</li>
                  <li><b>What shipping terms do you offer?</b> {companyProfile.policies.shipping}</li>
                  <li><b>What is your return policy?</b> {companyProfile.policies.returns}</li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      {/* Contact Supplier Modal (simple mockup) */}
      {showContact && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
          <div className="bg-white rounded-lg shadow-lg p-8 w-full max-w-md relative">
            <button className="absolute top-2 right-2 text-gray-400 hover:text-gray-700" onClick={() => setShowContact(false)}>&times;</button>
            <h2 className="text-xl font-bold mb-4">Contact {supplier.name}</h2>
            <form className="space-y-4">
              <input type="text" placeholder="Your Name" className="w-full border rounded px-3 py-2" />
              <input type="email" placeholder="Your Email" className="w-full border rounded px-3 py-2" />
              <textarea placeholder="Message" className="w-full border rounded px-3 py-2 min-h-[80px]" />
              <Button className="w-full">Send Message</Button>
            </form>
          </div>
        </div>
      )}
    </>
  );
} 