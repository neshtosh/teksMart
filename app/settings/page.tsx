"use client";
import { useState } from 'react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { Eye, EyeOff, Bell, Lock, Globe, CreditCard, User, Building2, Shield, Mail, Trash2, FileText, Heart, Users, ArrowRight, LogOut, Repeat } from 'lucide-react';

export default function SettingsPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [tab, setTab] = useState('account');
  const [mode, setMode] = useState<'client' | 'supplier'>('client');
  const [logoutMsg, setLogoutMsg] = useState('');
  const [modeMsg, setModeMsg] = useState('');

  function handleLogout() {
    setLogoutMsg('You have been logged out.');
    setTimeout(() => {
      setLogoutMsg('');
      window.location.href = '/';
    }, 1500);
  }

  function handleModeChange(e: any) {
    setMode(e.target.value);
    setModeMsg(`Switched to ${e.target.value === 'client' ? 'Buyer/Client' : 'Supplier'} mode.`);
    setTimeout(() => setModeMsg(''), 2000);
  }

  return (
    <main className="min-h-screen bg-gray-50">
      <Header />
      <div className="container-custom py-8">
        <h1 className="text-2xl lg:text-3xl font-bold mb-8 text-center">Settings</h1>
        <Tabs value={tab} onValueChange={setTab} className="max-w-3xl mx-auto">
          <TabsList className="grid grid-cols-6 mb-8">
            <TabsTrigger value="account"><User className="h-5 w-5 mr-1" />Account</TabsTrigger>
            <TabsTrigger value="notifications"><Bell className="h-5 w-5 mr-1" />Notifications</TabsTrigger>
            <TabsTrigger value="financing"><Shield className="h-5 w-5 mr-1" />Financing</TabsTrigger>
            <TabsTrigger value="privacy"><Lock className="h-5 w-5 mr-1" />Privacy</TabsTrigger>
            <TabsTrigger value="market"><Globe className="h-5 w-5 mr-1" />Marketplace</TabsTrigger>
            <TabsTrigger value="suppliers"><Users className="h-5 w-5 mr-1" />Suppliers</TabsTrigger>
          </TabsList>

          {/* Account Settings */}
          <TabsContent value="account">
            <Card className="mb-6">
              <CardContent className="p-6 space-y-4">
                <h2 className="font-semibold text-lg mb-2 flex items-center"><User className="h-5 w-5 mr-2" />Account Settings</h2>
                <div className="flex items-center gap-3 mb-4">
                  <span className="font-medium">Current Mode:</span>
                  <Badge className={mode === 'client' ? 'bg-blue-100 text-blue-800' : 'bg-purple-100 text-purple-800'}>
                    {mode === 'client' ? 'Buyer/Client' : 'Supplier'}
                  </Badge>
                  <select
                    value={mode}
                    onChange={handleModeChange}
                    className="ml-2 border rounded px-2 py-1 text-sm"
                  >
                    <option value="client">Buyer/Client</option>
                    <option value="supplier">Supplier</option>
                  </select>
                  <Repeat className="h-4 w-4 text-gray-400 ml-1" />
                  {modeMsg && <span className="text-xs text-emerald-600 ml-2">{modeMsg}</span>}
                </div>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-1">Full Name</label>
                    <Input defaultValue="Jane Mwangi" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">Email</label>
                    <Input defaultValue="jane@mwangi.co.ke" type="email" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">Phone</label>
                    <Input defaultValue="+254 700 123456" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">Business Name</label>
                    <Input defaultValue="Mwangi Tech Ltd" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">KRA PIN</label>
                    <Input defaultValue="A123456789B" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">Business Registration</label>
                    <Input defaultValue="BN-2024-001" />
                  </div>
                  <div className="col-span-2">
                    <label className="block text-sm font-medium mb-1">Profile Photo/Logo</label>
                    <Input type="file" accept=".jpg,.png" />
                  </div>
                </div>
                <div className="flex gap-4 mt-4">
                  <Button type="button">Save Changes</Button>
                  <Button type="button" variant="outline">Cancel</Button>
                </div>
                <div className="mt-6">
                  <label className="block text-sm font-medium mb-1">Change Password</label>
                  <div className="flex gap-2 items-center">
                    <Input type={showPassword ? 'text' : 'password'} defaultValue="password123" className="w-64" />
                    <Button type="button" variant="ghost" size="icon" onClick={() => setShowPassword(v => !v)}>
                      {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Notifications */}
          <TabsContent value="notifications">
            <Card className="mb-6">
              <CardContent className="p-6 space-y-4">
                <h2 className="font-semibold text-lg mb-2 flex items-center"><Bell className="h-5 w-5 mr-2" />Notification Preferences</h2>
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <input type="checkbox" defaultChecked id="notif-orders" />
                    <label htmlFor="notif-orders">Order Updates</label>
                  </div>
                  <div className="flex items-center gap-2">
                    <input type="checkbox" defaultChecked id="notif-quotes" />
                    <label htmlFor="notif-quotes">Quote Requests</label>
                  </div>
                  <div className="flex items-center gap-2">
                    <input type="checkbox" defaultChecked id="notif-financing" />
                    <label htmlFor="notif-financing">Financing Updates</label>
                  </div>
                  <div className="flex items-center gap-2">
                    <input type="checkbox" id="notif-promos" />
                    <label htmlFor="notif-promos">Promotions & News</label>
                  </div>
                </div>
                <Button className="mt-4">Save Preferences</Button>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Financing Settings */}
          <TabsContent value="financing">
            <Card className="mb-6">
              <CardContent className="p-6 space-y-4">
                <h2 className="font-semibold text-lg mb-2 flex items-center"><Shield className="h-5 w-5 mr-2" />Financing Settings</h2>
                <div className="mb-2">Preferred Product: <Badge className="bg-blue-100 text-blue-800">Invoice Financing</Badge></div>
                <div className="mb-2">Current Tier: <Badge className="bg-purple-100 text-purple-800">Tier 2 (Up to 30%)</Badge></div>
                <div className="mb-2">Saved Documents:</div>
                <ul className="list-disc pl-6 text-gray-700 mb-2">
                  <li>KRA Certificate.pdf</li>
                  <li>Bank Statement Jan-Jun.pdf</li>
                  <li>Business Registration.jpg</li>
                </ul>
                <Button variant="outline" size="sm">Upload New Document</Button>
                <div className="mt-4">
                  <Button variant="default" size="sm">Request Tier Upgrade</Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Privacy & Security */}
          <TabsContent value="privacy">
            <Card className="mb-6">
              <CardContent className="p-6 space-y-4">
                <h2 className="font-semibold text-lg mb-2 flex items-center"><Lock className="h-5 w-5 mr-2" />Privacy & Security</h2>
                <div className="flex items-center gap-2 mb-2">
                  <input type="checkbox" id="2fa" />
                  <label htmlFor="2fa">Enable Two-Factor Authentication</label>
                </div>
                <div className="mb-2">Active Sessions: 2 devices</div>
                <Button variant="outline" size="sm">Manage Devices</Button>
                <div className="mt-4">
                  <Button variant="outline" size="sm">Download My Data</Button>
                  <Button variant="destructive" size="sm" className="ml-3"><Trash2 className="h-4 w-4 mr-1 inline" />Delete Account</Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Marketplace Preferences */}
          <TabsContent value="market">
            <Card className="mb-6">
              <CardContent className="p-6 space-y-4">
                <h2 className="font-semibold text-lg mb-2 flex items-center"><Globe className="h-5 w-5 mr-2" />Marketplace Preferences</h2>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-1">Default Currency</label>
                    <select className="w-full border rounded px-3 py-2">
                      <option>KES</option>
                      <option>USD</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">Language</label>
                    <select className="w-full border rounded px-3 py-2">
                      <option>English</option>
                      <option>Swahili</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">Default Shipping Address</label>
                    <Input defaultValue="Nairobi, Kenya" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">Saved Payment Method</label>
                    <Input defaultValue="Visa **** 1234" />
                  </div>
                </div>
                <Button className="mt-4">Save Preferences</Button>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Supplier/Buyer Preferences */}
          <TabsContent value="suppliers">
            <Card className="mb-6">
              <CardContent className="p-6 space-y-4">
                <h2 className="font-semibold text-lg mb-2 flex items-center"><Users className="h-5 w-5 mr-2" />Supplier/Buyer Preferences</h2>
                <div className="mb-2">Saved Suppliers:</div>
                <ul className="list-disc pl-6 text-gray-700 mb-2">
                  <li>TechGlobal Solutions</li>
                  <li>Digital Hub Electronics</li>
                </ul>
                <div className="mb-2">Blocked Suppliers:</div>
                <ul className="list-disc pl-6 text-gray-700 mb-2">
                  <li>Unreliable Supplier Ltd</li>
                </ul>
                <div className="mb-2">Communication Preferences:</div>
                <div className="flex items-center gap-2">
                  <input type="checkbox" defaultChecked id="comm-chat" />
                  <label htmlFor="comm-chat">Allow chat from suppliers</label>
                </div>
                <div className="flex items-center gap-2">
                  <input type="checkbox" id="comm-email" />
                  <label htmlFor="comm-email">Allow email from suppliers</label>
                </div>
                <Button className="mt-4">Save Preferences</Button>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
        {/* Logout Button */}
        <div className="flex flex-col items-center mt-10">
          <Button variant="destructive" size="lg" className="flex items-center gap-2" onClick={handleLogout}>
            <LogOut className="h-5 w-5" /> Logout
          </Button>
          {logoutMsg && <span className="text-emerald-600 mt-2">{logoutMsg}</span>}
        </div>
      </div>
      <Footer />
    </main>
  );
} 