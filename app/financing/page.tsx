"use client";
import { useState } from 'react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { CheckCircle, Info, Banknote, TrendingUp, Shield, HelpCircle } from 'lucide-react';

const FINANCING_OPTIONS = [
  {
    name: 'Invoice Financing',
    description: 'Get paid upfront for your invoices and improve your cash flow.',
    eligibility: 'Registered business, valid invoices',
    maxPercent: 80,
  },
  {
    name: 'Asset Financing',
    description: 'Finance equipment and assets for your business growth.',
    eligibility: 'Registered business, asset quotation',
    maxPercent: 70,
  },
  {
    name: 'Working Capital Loan',
    description: 'Flexible loans to cover your day-to-day business needs.',
    eligibility: 'Registered business, 6+ months trading',
    maxPercent: 50,
  },
  {
    name: 'LPO Financing',
    description: 'Get funds to fulfill large purchase orders from clients.',
    eligibility: 'Valid LPO, registered business',
    maxPercent: 60,
  },
  {
    name: 'Trade Credit',
    description: 'Buy now, pay later for your business purchases.',
    eligibility: 'Approved buyers only',
    maxPercent: 30,
  },
];

const FAQS = [
  {
    q: 'Who is eligible for financing?',
    a: 'Kenyan registered businesses with a valid KRA PIN and minimum 6 months trading history.',
  },
  {
    q: 'How long does approval take?',
    a: 'Most applications are reviewed within 48 hours.',
  },
  {
    q: 'What documents are required?',
    a: 'Business registration, KRA PIN, bank statements, and supporting documents for the financing type.',
  },
  {
    q: 'What are the repayment terms?',
    a: 'Repayment terms vary by product, but typically range from 1 to 12 months.',
  },
];

function getInterestRate(financingPercent: number, tier: number) {
  // Tier 1: max 10% financing, Tier 2: max 30%, Tier 3: max 50%, Tier 4: max 80%
  // Interest is 1% per 10% financing (e.g. 50% = 5%)
  const maxByTier = [10, 30, 50, 80];
  const max = maxByTier[tier - 1] || 10;
  const percent = Math.min(financingPercent, max);
  return (percent / 10) * 1; // 1% per 10%
}

export default function FinancingPage() {
  // Calculator state
  const [amount, setAmount] = useState(100000);
  const [months, setMonths] = useState(6);
  const [tier, setTier] = useState(1); // 1-4
  const [financingPercent, setFinancingPercent] = useState(10); // adjustable, max by tier
  const interestRate = getInterestRate(financingPercent, tier);
  const maxPercent = [10, 30, 50, 80][tier - 1];
  const principal = (amount * financingPercent) / 100;
  const totalInterest = (principal * interestRate * months) / 1200; // simple interest
  const totalRepayment = principal + totalInterest;
  const monthlyPayment = totalRepayment / months;

  // Application form state
  const [form, setForm] = useState({
    business: '',
    contact: '',
    amount: '',
    purpose: '',
    docs: null as File | null,
  });
  const [submitted, setSubmitted] = useState(false);

  function handleFormChange(e: any) {
    const { name, value, files } = e.target;
    setForm(f => ({ ...f, [name]: files ? files[0] : value }));
  }
  function handleFormSubmit(e: any) {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  }

  return (
    <main className="min-h-screen bg-gray-50">
      <Header />
      <div className="container-custom py-8">
        {/* Hero/Intro */}
        <section className="text-center mb-10">
          <h1 className="text-3xl lg:text-4xl font-bold mb-3">Business Financing for Kenyan SMEs</h1>
          <p className="text-gray-700 mb-6 max-w-2xl mx-auto">Flexible, fast, and transparent financing options to help your business grow. Apply online and get approved in as little as 48 hours.</p>
          <Button size="lg" className="text-lg px-8 py-4" onClick={() => document.getElementById('financing-form')?.scrollIntoView({ behavior: 'smooth' })}>
            Apply for Financing
          </Button>
        </section>

        {/* Financing Options */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-center">Our Financing Products</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {FINANCING_OPTIONS.map(opt => (
              <Card key={opt.name} className="h-full">
                <CardContent className="p-6 flex flex-col gap-3">
                  <div className="flex items-center gap-2 mb-2">
                    <Banknote className="h-6 w-6 text-blue-600" />
                    <span className="font-semibold text-lg">{opt.name}</span>
                  </div>
                  <div className="text-gray-700 mb-2">{opt.description}</div>
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <Shield className="h-4 w-4" />
                    <span>Eligibility: {opt.eligibility}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <TrendingUp className="h-4 w-4" />
                    <span>Up to {opt.maxPercent}% of invoice/asset value</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* How It Works */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-center">How It Works</h2>
          <div className="flex flex-col md:flex-row items-center justify-center gap-8">
            <div className="flex flex-col items-center">
              <Info className="h-10 w-10 text-blue-500 mb-2" />
              <span className="font-semibold">1. Apply Online</span>
            </div>
            <CheckCircle className="h-8 w-8 text-gray-400 hidden md:block" />
            <div className="flex flex-col items-center">
              <TrendingUp className="h-10 w-10 text-green-500 mb-2" />
              <span className="font-semibold">2. Get Approved</span>
            </div>
            <CheckCircle className="h-8 w-8 text-gray-400 hidden md:block" />
            <div className="flex flex-col items-center">
              <Banknote className="h-10 w-10 text-emerald-500 mb-2" />
              <span className="font-semibold">3. Receive Funds</span>
            </div>
            <CheckCircle className="h-8 w-8 text-gray-400 hidden md:block" />
            <div className="flex flex-col items-center">
              <Shield className="h-10 w-10 text-purple-500 mb-2" />
              <span className="font-semibold">4. Repay Over Time</span>
            </div>
          </div>
        </section>

        {/* Calculator */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-center">Estimate Your Financing</h2>
          <Card className="max-w-2xl mx-auto">
            <CardContent className="p-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium mb-1">Business Tier</label>
                    <select
                      className="w-full border rounded px-3 py-2"
                      value={tier}
                      onChange={e => {
                        const t = Number(e.target.value);
                        setTier(t);
                        // Reset percent if above new max
                        if (financingPercent > [10, 30, 50, 80][t - 1]) setFinancingPercent([10, 30, 50, 80][t - 1]);
                      }}
                    >
                      <option value={1}>Tier 1 (max 10%)</option>
                      <option value={2}>Tier 2 (max 30%)</option>
                      <option value={3}>Tier 3 (max 50%)</option>
                      <option value={4}>Tier 4 (max 80%)</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">Financing Percentage (%)</label>
                    <input
                      type="number"
                      min={1}
                      max={maxPercent}
                      value={financingPercent}
                      onChange={e => setFinancingPercent(Math.max(1, Math.min(Number(e.target.value), maxPercent)))}
                      className="w-full border rounded px-3 py-2"
                    />
                    <span className="text-xs text-gray-500">Max for this tier: {maxPercent}%</span>
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">Amount Needed (KES)</label>
                    <input
                      type="number"
                      min={10000}
                      step={1000}
                      value={amount}
                      onChange={e => setAmount(Number(e.target.value))}
                      className="w-full border rounded px-3 py-2"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">Repayment Period (months)</label>
                    <input
                      type="number"
                      min={1}
                      max={24}
                      value={months}
                      onChange={e => setMonths(Number(e.target.value))}
                      className="w-full border rounded px-3 py-2"
                    />
                  </div>
                </div>
                <div className="space-y-4 flex flex-col justify-center">
                  <div className="flex items-center gap-2 text-lg">
                    <Badge className="bg-blue-100 text-blue-800">Interest Rate: {interestRate.toFixed(2)}%</Badge>
                  </div>
                  <div className="flex items-center gap-2 text-lg">
                    <Badge className="bg-emerald-100 text-emerald-800">Financed Amount: KES {principal.toLocaleString()}</Badge>
                  </div>
                  <div className="flex items-center gap-2 text-lg">
                    <Badge className="bg-yellow-100 text-yellow-800">Total Interest: KES {totalInterest.toLocaleString(undefined, { maximumFractionDigits: 0 })}</Badge>
                  </div>
                  <div className="flex items-center gap-2 text-lg">
                    <Badge className="bg-purple-100 text-purple-800">Total Repayment: KES {totalRepayment.toLocaleString(undefined, { maximumFractionDigits: 0 })}</Badge>
                  </div>
                  <div className="flex items-center gap-2 text-lg">
                    <Badge className="bg-gray-100 text-gray-800">Monthly Payment: KES {monthlyPayment.toLocaleString(undefined, { maximumFractionDigits: 0 })}</Badge>
                  </div>
                  <Button size="lg" className="mt-4" onClick={() => document.getElementById('financing-form')?.scrollIntoView({ behavior: 'smooth' })}>
                    Apply for Financing
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Eligibility & Requirements */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-center">Eligibility & Requirements</h2>
          <div className="max-w-2xl mx-auto bg-white rounded-lg p-6 shadow flex flex-col gap-3">
            <div className="flex items-center gap-2 text-gray-700"><CheckCircle className="h-5 w-5 text-green-500" /> Kenyan registered business</div>
            <div className="flex items-center gap-2 text-gray-700"><CheckCircle className="h-5 w-5 text-green-500" /> Valid KRA PIN</div>
            <div className="flex items-center gap-2 text-gray-700"><CheckCircle className="h-5 w-5 text-green-500" /> 6+ months trading history</div>
            <div className="flex items-center gap-2 text-gray-700"><CheckCircle className="h-5 w-5 text-green-500" /> Bank statements (last 6 months)</div>
            <div className="flex items-center gap-2 text-gray-700"><CheckCircle className="h-5 w-5 text-green-500" /> Supporting documents for financing type</div>
          </div>
        </section>

        {/* Application Form */}
        <section className="mb-12" id="financing-form">
          <h2 className="text-2xl font-bold mb-6 text-center">Apply for Financing</h2>
          <Card className="max-w-2xl mx-auto">
            <CardContent className="p-6">
              {submitted ? (
                <div className="text-center text-emerald-600 text-lg font-semibold flex flex-col items-center gap-2">
                  <CheckCircle className="h-8 w-8" />
                  Application submitted! We will contact you soon.
                </div>
              ) : (
                <form className="space-y-4" onSubmit={handleFormSubmit}>
                  <div>
                    <label className="block text-sm font-medium mb-1">Business Name</label>
                    <Input name="business" required value={form.business} onChange={handleFormChange} />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">Contact Email/Phone</label>
                    <Input name="contact" required value={form.contact} onChange={handleFormChange} />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">Amount Needed (KES)</label>
                    <Input name="amount" required type="number" value={form.amount} onChange={handleFormChange} />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">Purpose of Financing</label>
                    <Input name="purpose" required value={form.purpose} onChange={handleFormChange} />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">Upload Supporting Document</label>
                    <Input name="docs" type="file" accept=".pdf,.jpg,.png" onChange={handleFormChange} />
                  </div>
                  <Button type="submit" size="lg" className="w-full">Submit Application</Button>
                </form>
              )}
            </CardContent>
          </Card>
        </section>

        {/* FAQ */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-center">Frequently Asked Questions</h2>
          <div className="max-w-2xl mx-auto">
            {FAQS.map(faq => (
              <Card key={faq.q} className="mb-4">
                <CardContent className="p-4 flex gap-3 items-start">
                  <HelpCircle className="h-6 w-6 text-blue-500 mt-1" />
                  <div>
                    <div className="font-semibold mb-1">{faq.q}</div>
                    <div className="text-gray-700">{faq.a}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </div>
      <Footer />
    </main>
  );
} 