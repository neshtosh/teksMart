'use client';

import { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Label } from '@/components/ui/label';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Upload, X, Info, Send } from 'lucide-react';
import { Product } from '@/lib/types';
import { TRADE_TERMS, PAYMENT_TERMS, SHIPPING_METHODS, CATEGORIES } from '@/lib/constants';
import { useToast } from '@/hooks/use-toast';

const TRADE_TERMS_CHEAT_SHEET = `🔹1.EXW–ExWorks\nWhat it means:\nYou (the buyer) pick up goods from the seller's location (e.g., warehouse or factory).\nBuyer Covers: All transport from factory to Kenya\nSeller Covers: Only prepares goods for pickup\nRisk Transfers: At the seller's door\nYou Pay For: Pickup, loading, export docs, shipping, insurance, taxes, clearance, local delivery\nGood for experienced importers\nRisky for beginners (too much responsibility)\n\n🔹2.FOB–FreeOnBoard\nWhat it means:\nSeller transports goods to the port of export (e.g., Shanghai) and loads them onto the ship.\nBuyer Covers: Shipping, insurance, clearance, local delivery\nSeller Covers: Inland transport to port, export docs, port handling\nRisk Transfers: Once goods are loaded on ship\nYou Pay For: Everything after loading (freight, import tax, delivery)\nMost commonly used term\nRequires you to manage ocean shipping\n\n🔹3. CIF – Cost, Insurance & Freight\nWhat it means:\nSeller pays for shipping and insurance to the port of destination (e.g., Mombasa).\nBuyer Covers: Duties, port clearance, local delivery\nSeller Covers: Export prep, shipping, marine insurance\nRisk Transfers: Once goods are on the ship (not at your port)\nYou Pay For: Clearance, taxes, delivery to you\nSafer for new importers\nStill requires clearing agent in Kenya\n\n🔹4. DAP – Delivered At Place\nWhat it means:\nSeller delivers goods to your location in Kenya (but you pay import duties).\nBuyer Covers: Import tax and clearance\nSeller Covers: Everything else: shipping, logistics, delivery\nRisk Transfers: When goods arrive at your door\nYou Pay For: KEBS clearance, duty, VAT\nHassle-free, great for beginners\nMore expensive; not always available from suppliers.`;

const PAYMENT_TERMS_CHEAT_SHEET = `🔹 1. T/T – Telegraphic Transfer (Bank Wire)\nHow it works:\nBuyer sends a bank transfer to the seller, usually in two parts: • 30% upfront to confirm the order • 70% after shipment (against shipping documents)\nBuyer Risk: Medium\nBest for: Trusted suppliers, small to medium orders\nTip: Only use for verified, reputable sellers\n\n🔹 2. L/C – Letter of Credit\nHow it works:\nBuyer's bank guarantees payment to seller only if specific documents are presented (like invoice, packing list, BL, PVoC, etc.)\nBuyer Risk: Low\nBest for: Large deals, new or untrusted suppliers\nNote: Bank charges apply (0.5–2%)\n\n🔹 3. D/P – Documents Against Payment\nHow it works:\nThe seller ships the goods and sends documents to a bank. The bank releases them to you (the buyer) after you pay in full.\nBuyer Risk: Low\nBest for: Medium-size deals where some trust exists\nRequires: Buyer must have funds ready at sight\n\n🔹 4. D/A – Documents Against Acceptance\nHow it works:\nThe seller sends shipping documents before payment. The buyer promises to pay on a future date (e.g., 30 days after delivery).\nBuyer Risk: Very Low\nBest for: Trusted partnerships\nSeller Risk: High — not widely accepted by exporters\n\n🔹 5. Open Account\nHow it works:\nThe seller ships goods and you pay after receiving them — typically within 30–90 days.\nBuyer Risk: None\nBest for: Long-term trade relationships\nNote: Rare for new buyers\n\n📦 Kenyan Importer Tips\nNegotiate 30/70 T/T to reduce upfront exposure\nUse Trade Assurance on Alibaba or Escrow for first-time deals\nAlways verify seller credentials, especially before T/T or D/P\nFor large deals, request L/C with document requirements to protect your cash\nUnderstand how payment terms affect shipping release and customs.`;

interface QuoteRequestModalProps {
  isOpen: boolean;
  onClose: () => void;
  product: Product;
  selectedQuantity: number;
}

export function QuoteRequestModal({ isOpen, onClose, product, selectedQuantity }: QuoteRequestModalProps) {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    quantity: selectedQuantity,
    tradeTerm: '',
    targetPrice: '',
    maxBudget: '',
    description: '',
    specifications: '',
    shippingMethod: '',
    destinationPort: '',
    leadTime: '',
    paymentTerm: '',
    urgency: 'medium' as 'low' | 'medium' | 'high'
  });
  const [uploadedFiles, setUploadedFiles] = useState<File[]>([]);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (field: string, value: string | number) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(event.target.files || []);
    if (uploadedFiles.length + files.length > 4) {
      toast({
        title: "Too many files",
        description: "You can upload maximum 4 images",
        variant: "destructive"
      });
      return;
    }
    setUploadedFiles(prev => [...prev, ...files]);
  };

  const removeFile = (index: number) => {
    setUploadedFiles(prev => prev.filter((_, i) => i !== index));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));

    toast({
      title: "Quote request sent!",
      description: "Your quote request has been sent to the supplier. You'll receive a response within 24 hours.",
    });

    setIsSubmitting(false);
    onClose();
  };

  const currentTier = product.moqTiers.find(tier => formData.quantity >= tier.quantity) || product.moqTiers[0];
  const estimatedTotal = currentTier.pricePerUnit * formData.quantity;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-xl">Request Quote</DialogTitle>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Product Summary */}
          <Card>
            <CardContent className="p-4">
              <div className="flex gap-4">
                <img
                  src={product.images[0]}
                  alt={product.name}
                  className="w-20 h-20 object-cover rounded-lg"
                />
                <div className="flex-1">
                  <h3 className="font-semibold text-gray-900 mb-1">{product.name}</h3>
                  <p className="text-sm text-gray-600 mb-2">by {product.supplier.name}</p>
                  <div className="flex items-center gap-2">
                    <Badge className="gradient-primary text-white text-xs">
                      {product.supplier.verificationLevel === 'premium' ? 'Premium' : 'Verified'}
                    </Badge>
                    <span className="text-sm text-gray-500">Response: {product.supplier.responseTime}</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Left Column */}
            <div className="space-y-4">
              <div>
                <Label htmlFor="quantity">Purchase Quantity *</Label>
                <Input
                  id="quantity"
                  type="number"
                  value={formData.quantity}
                  onChange={(e) => handleInputChange('quantity', parseInt(e.target.value) || 0)}
                  min={product.moqTiers[0].quantity}
                  required
                />
                <p className="text-xs text-gray-500 mt-1">
                  Minimum order: {product.moqTiers[0].quantity} pieces
                </p>
              </div>

              <div>
                <Label htmlFor="tradeTerm">Trade Terms *</Label>
                <Select value={formData.tradeTerm} onValueChange={(value) => handleInputChange('tradeTerm', value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select trade terms" />
                  </SelectTrigger>
                  <SelectContent>
                    {TRADE_TERMS.map((term) => (
                      <SelectItem key={term.value} value={term.value}>
                        <div>
                          <div className="font-medium">{term.label}</div>
                          <div className="text-xs text-gray-500">{term.description}</div>
                        </div>
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label htmlFor="targetPrice">Target Unit Price (KES)</Label>
                <Input
                  id="targetPrice"
                  type="number"
                  value={formData.targetPrice}
                  onChange={(e) => handleInputChange('targetPrice', e.target.value)}
                  placeholder="Your target price per unit"
                />
              </div>

              <div>
                <Label htmlFor="maxBudget">Maximum Budget (KES) *</Label>
                <Input
                  id="maxBudget"
                  type="number"
                  value={formData.maxBudget}
                  onChange={(e) => handleInputChange('maxBudget', e.target.value)}
                  placeholder="Total budget for this order"
                  required
                />
              </div>

              <div>
                <Label htmlFor="paymentTerm">Payment Terms *</Label>
                <Select value={formData.paymentTerm} onValueChange={(value) => handleInputChange('paymentTerm', value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select payment terms" />
                  </SelectTrigger>
                  <SelectContent>
                    {PAYMENT_TERMS.map((term) => (
                      <SelectItem key={term.value} value={term.value}>
                        <div>
                          <div className="font-medium">{term.label}</div>
                          <div className="text-xs text-gray-500">{term.description}</div>
                        </div>
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>

            {/* Right Column */}
            <div className="space-y-4">
              <div>
                <Label htmlFor="description">Product Requirements</Label>
                <Textarea
                  id="description"
                  value={formData.description}
                  onChange={(e) => handleInputChange('description', e.target.value)}
                  placeholder="Describe specific requirements: color, size, material, certifications, etc."
                  rows={3}
                />
              </div>

              <div>
                <Label htmlFor="specifications">Additional Specifications</Label>
                <Textarea
                  id="specifications"
                  value={formData.specifications}
                  onChange={(e) => handleInputChange('specifications', e.target.value)}
                  placeholder="Any technical specifications or customization requirements"
                  rows={3}
                />
              </div>

              <div>
                <Label htmlFor="shippingMethod">Preferred Shipping Method</Label>
                <Select value={formData.shippingMethod} onValueChange={(value) => handleInputChange('shippingMethod', value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select shipping method" />
                  </SelectTrigger>
                  <SelectContent>
                    {SHIPPING_METHODS.map((method: { value: string; label: string; description: string }) => (
                      <SelectItem key={method.value} value={method.value}>
                        <div>
                          <div className="font-medium">{method.label}</div>
                          <div className="text-xs text-gray-500">{method.description}</div>
                        </div>
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label htmlFor="destinationPort">Destination Port/City</Label>
                <Input
                  id="destinationPort"
                  value={formData.destinationPort}
                  onChange={(e) => handleInputChange('destinationPort', e.target.value)}
                  placeholder="e.g., Mombasa Port, Nairobi"
                />
              </div>

              <div>
                <Label htmlFor="leadTime">Required Lead Time (days)</Label>
                <Input
                  id="leadTime"
                  type="number"
                  value={formData.leadTime}
                  onChange={(e) => handleInputChange('leadTime', e.target.value)}
                  placeholder="How many days do you need?"
                />
              </div>
            </div>
          </div>

          {/* File Upload */}
          <div>
            <Label>Reference Images (Optional)</Label>
            <div className="mt-2">
              <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                <Upload className="h-8 w-8 text-gray-400 mx-auto mb-2" />
                <p className="text-sm text-gray-600 mb-2">
                  Upload up to 4 images to help suppliers understand your requirements
                </p>
                <input
                  type="file"
                  multiple
                  accept="image/*"
                  onChange={handleFileUpload}
                  className="hidden"
                  id="file-upload"
                />
                <Button type="button" variant="outline" onClick={() => document.getElementById('file-upload')?.click()}>
                  Choose Files
                </Button>
              </div>

              {uploadedFiles.length > 0 && (
                <div className="flex flex-wrap gap-2 mt-3">
                  {uploadedFiles.map((file, index) => (
                    <div key={index} className="relative bg-gray-100 rounded-lg p-2 flex items-center gap-2">
                      <span className="text-sm text-gray-700 truncate max-w-32">{file.name}</span>
                      <button
                        type="button"
                        onClick={() => removeFile(index)}
                        className="text-gray-500 hover:text-red-500"
                      >
                        <X className="h-4 w-4" />
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Urgency */}
          <div>
            <Label>Request Urgency</Label>
            <div className="flex gap-2 mt-2">
              {[
                { value: 'low', label: 'Low', desc: 'Standard response' },
                { value: 'medium', label: 'Medium', desc: 'Priority response' },
                { value: 'high', label: 'High', desc: 'Urgent response' }
              ].map((option) => (
                <Button
                  key={option.value}
                  type="button"
                  variant={formData.urgency === option.value ? 'default' : 'outline'}
                  size="sm"
                  onClick={() => handleInputChange('urgency', option.value)}
                  className="flex-1"
                >
                  <div className="text-center">
                    <div>{option.label}</div>
                    <div className="text-xs opacity-70">{option.desc}</div>
                  </div>
                </Button>
              ))}
            </div>
          </div>

          {/* Price Estimate */}
          <Card className="bg-blue-50 border-blue-200">
            <CardContent className="p-4">
              <h4 className="font-medium text-blue-900 mb-2">Price Estimate</h4>
              <div className="space-y-1 text-sm">
                <div className="flex justify-between">
                  <span>Quantity:</span>
                  <span>{formData.quantity.toLocaleString()} pieces</span>
                </div>
                <div className="flex justify-between">
                  <span>Unit Price (MOQ tier):</span>
                  <span>KES {currentTier.pricePerUnit.toLocaleString()}</span>
                </div>
                <div className="flex justify-between font-medium text-blue-900 pt-1 border-t border-blue-200">
                  <span>Estimated Total:</span>
                  <span>KES {estimatedTotal.toLocaleString()}</span>
                </div>
              </div>
              <p className="text-xs text-blue-700 mt-2">
                <Info className="h-3 w-3 inline mr-1" />
                Final price may vary based on your requirements and negotiations
              </p>
            </CardContent>
          </Card>

          {/* Submit Buttons */}
          <div className="flex gap-3 pt-4">
            <Button type="button" variant="outline" onClick={onClose} className="flex-1">
              Cancel
            </Button>
            <Button 
              type="submit" 
              className="flex-1 gradient-primary" 
              disabled={isSubmitting || !formData.quantity || !formData.tradeTerm || !formData.maxBudget || !formData.paymentTerm}
            >
              {isSubmitting ? (
                <>Sending...</>
              ) : (
                <>
                  <Send className="h-4 w-4 mr-2" />
                  Send Quote Request
                </>
              )}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}