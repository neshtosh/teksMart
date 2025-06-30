'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Search, Menu, User, Heart, ShoppingCart, MessageCircle, Bell } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSub,
  DropdownMenuSubTrigger,
  DropdownMenuSubContent,
  DropdownMenuSeparator,
} from '@/components/ui/dropdown-menu';
import { Badge } from '@/components/ui/badge';
import CartButton from '@/components/cart/CartButton';
import { useRouter } from 'next/navigation';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchInput, setSearchInput] = useState('');
  const router = useRouter();

  const handleSearch = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    if (searchInput.trim()) {
      router.push(`/products?search=${encodeURIComponent(searchInput.trim())}`);
      setSearchInput('');
    }
  };

  return (
    <header className="sticky-nav">
      <div className="container-custom">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="gradient-primary w-8 h-8 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">T</span>
            </div>
            <span className="text-xl font-bold text-gradient">TeksMart</span>
          </Link>

          {/* Search Bar - Desktop */}
          <div className="hidden lg:flex flex-1 max-w-2xl mx-8">
            <form className="relative w-full" onSubmit={handleSearch}>
              <Input
                type="text"
                placeholder="Search products, suppliers, categories..."
                className="pl-10 pr-4 h-11 w-full border-gray-300 focus:border-blue-400"
                value={searchInput}
                onChange={e => setSearchInput(e.target.value)}
              />
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              <Button 
                className="absolute right-1 top-1/2 transform -translate-y-1/2 h-9 gradient-primary hover:opacity-90"
                size="sm"
                type="submit"
              >
                Search
              </Button>
            </form>
          </div>

          {/* Navigation Items */}
          <div className="flex items-center space-x-4">
            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-6">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" className="text-gray-700 hover:text-blue-600 font-medium px-0" size="sm">
                Categories
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="start" className="w-64">
                  {/* Computers */}
                  <DropdownMenuSub>
                    <DropdownMenuSubTrigger className="w-full flex justify-between items-center">
                      Computers
                    </DropdownMenuSubTrigger>
                    <DropdownMenuSubContent className="w-64">
                      <DropdownMenuSub>
                        <DropdownMenuSubTrigger className="w-full flex justify-between items-center">
                          Laptops
                        </DropdownMenuSubTrigger>
                        <DropdownMenuSubContent className="w-64">
                          <DropdownMenuItem asChild>
                            <Link href="/products?category=laptops">All Laptops</Link>
                          </DropdownMenuItem>
                          <DropdownMenuSeparator />
                          <DropdownMenuItem asChild>
                            <Link href="/products?category=laptops&brand=lenovo">Lenovo</Link>
                          </DropdownMenuItem>
                          <DropdownMenuItem asChild>
                            <Link href="/products?category=laptops&brand=hp">HP</Link>
                          </DropdownMenuItem>
                          <DropdownMenuItem asChild>
                            <Link href="/products?category=laptops&brand=dell">Dell</Link>
                          </DropdownMenuItem>
                          <DropdownMenuItem asChild>
                            <Link href="/products?category=laptops&brand=apple">Apple</Link>
                          </DropdownMenuItem>
                          <DropdownMenuItem asChild>
                            <Link href="/products?category=laptops&brand=asus">Asus</Link>
                          </DropdownMenuItem>
                          <DropdownMenuItem asChild>
                            <Link href="/products?category=laptops&brand=acer">Acer</Link>
                          </DropdownMenuItem>
                          <DropdownMenuItem asChild>
                            <Link href="/products?category=laptops&brand=microsoft">Microsoft</Link>
                          </DropdownMenuItem>
                          <DropdownMenuItem asChild>
                            <Link href="/products?category=laptops&brand=samsung">Samsung</Link>
                          </DropdownMenuItem>
                          <DropdownMenuItem asChild>
                            <Link href="/products?category=laptops&brand=msi">MSI</Link>
                          </DropdownMenuItem>
                          <DropdownMenuItem asChild>
                            <Link href="/products?category=laptops&brand=razer">Razer</Link>
                          </DropdownMenuItem>
                          <DropdownMenuItem asChild>
                            <Link href="/products?category=laptops&brand=other">Other Brands</Link>
                          </DropdownMenuItem>
                        </DropdownMenuSubContent>
                      </DropdownMenuSub>
                      
                      <DropdownMenuSub>
                        <DropdownMenuSubTrigger className="w-full flex justify-between items-center">
                          CPUs
                        </DropdownMenuSubTrigger>
                        <DropdownMenuSubContent className="w-64">
                          <DropdownMenuItem asChild>
                            <Link href="/products?category=cpus">All CPUs</Link>
                          </DropdownMenuItem>
                          <DropdownMenuSeparator />
                          <DropdownMenuItem asChild>
                            <Link href="/products?category=cpus&brand=intel">Intel</Link>
                          </DropdownMenuItem>
                          <DropdownMenuItem asChild>
                            <Link href="/products?category=cpus&brand=amd">AMD</Link>
                          </DropdownMenuItem>
                          <DropdownMenuItem asChild>
                            <Link href="/products?category=cpus&brand=arm">ARM</Link>
                          </DropdownMenuItem>
                        </DropdownMenuSubContent>
                      </DropdownMenuSub>

                      <DropdownMenuSub>
                        <DropdownMenuSubTrigger className="w-full flex justify-between items-center">
                          Tablet PCs
                        </DropdownMenuSubTrigger>
                        <DropdownMenuSubContent className="w-64">
                          <DropdownMenuItem asChild>
                            <Link href="/products?category=tablets">All Tablets</Link>
                          </DropdownMenuItem>
                          <DropdownMenuSeparator />
                          <DropdownMenuItem asChild>
                            <Link href="/products?category=tablets&brand=apple">Apple</Link>
                          </DropdownMenuItem>
                          <DropdownMenuItem asChild>
                            <Link href="/products?category=tablets&brand=samsung">Samsung</Link>
                          </DropdownMenuItem>
                          <DropdownMenuItem asChild>
                            <Link href="/products?category=tablets&brand=lenovo">Lenovo</Link>
                          </DropdownMenuItem>
                          <DropdownMenuItem asChild>
                            <Link href="/products?category=tablets&brand=huawei">Huawei</Link>
                          </DropdownMenuItem>
                          <DropdownMenuItem asChild>
                            <Link href="/products?category=tablets&brand=xiaomi">Xiaomi</Link>
                          </DropdownMenuItem>
                          <DropdownMenuItem asChild>
                            <Link href="/products?category=tablets&brand=amazon">Amazon</Link>
                          </DropdownMenuItem>
                          <DropdownMenuItem asChild>
                            <Link href="/products?category=tablets&brand=other">Other Brands</Link>
                          </DropdownMenuItem>
                        </DropdownMenuSubContent>
                      </DropdownMenuSub>
                    </DropdownMenuSubContent>
                  </DropdownMenuSub>

                  {/* Mobile Phones */}
                  <DropdownMenuSub>
                    <DropdownMenuSubTrigger>Mobile Phones</DropdownMenuSubTrigger>
                    <DropdownMenuSubContent>
                      <DropdownMenuItem asChild>
                        <Link href="/products?category=mobile-phones">All Mobile Phones</Link>
                      </DropdownMenuItem>
                      <DropdownMenuSeparator />
                      {/* Major phone brands */}
                      <DropdownMenuItem asChild>
                        <Link href="/products?category=mobile-phones&brand=apple">Apple</Link>
                      </DropdownMenuItem>
                      <DropdownMenuItem asChild>
                        <Link href="/products?category=mobile-phones&brand=samsung">Samsung</Link>
                      </DropdownMenuItem>
                      <DropdownMenuItem asChild>
                        <Link href="/products?category=mobile-phones&brand=xiaomi">Xiaomi</Link>
                      </DropdownMenuItem>
                      <DropdownMenuItem asChild>
                        <Link href="/products?category=mobile-phones&brand=oppo">Oppo</Link>
                      </DropdownMenuItem>
                      <DropdownMenuItem asChild>
                        <Link href="/products?category=mobile-phones&brand=vivo">Vivo</Link>
                      </DropdownMenuItem>
                      <DropdownMenuItem asChild>
                        <Link href="/products?category=mobile-phones&brand=oneplus">OnePlus</Link>
                      </DropdownMenuItem>
                      <DropdownMenuItem asChild>
                        <Link href="/products?category=mobile-phones&brand=motorola">Motorola</Link>
                      </DropdownMenuItem>
                      <DropdownMenuItem asChild>
                        <Link href="/products?category=mobile-phones&brand=google">Google</Link>
                      </DropdownMenuItem>
                      <DropdownMenuItem asChild>
                        <Link href="/products?category=mobile-phones&brand=realme">Realme</Link>
                      </DropdownMenuItem>
                      <DropdownMenuItem asChild>
                        <Link href="/products?category=mobile-phones&brand=tecno">Tecno</Link>
                      </DropdownMenuItem>
                      <DropdownMenuItem asChild>
                        <Link href="/products?category=mobile-phones&brand=infinix">Infinix</Link>
                      </DropdownMenuItem>
                      <DropdownMenuItem asChild>
                        <Link href="/products?category=mobile-phones&brand=itel">Itel</Link>
                      </DropdownMenuItem>
                      <DropdownMenuItem asChild>
                        <Link href="/products?category=mobile-phones&brand=nokia">Nokia</Link>
                      </DropdownMenuItem>
                      <DropdownMenuItem asChild>
                        <Link href="/products?category=mobile-phones&brand=huawei">Huawei</Link>
                      </DropdownMenuItem>
                      <DropdownMenuItem asChild>
                        <Link href="/products?category=mobile-phones&brand=sony">Sony</Link>
                      </DropdownMenuItem>
                      <DropdownMenuItem asChild>
                        <Link href="/products?category=mobile-phones&brand=asus">Asus</Link>
                      </DropdownMenuItem>
                      <DropdownMenuItem asChild>
                        <Link href="/products?category=mobile-phones&brand=lenovo">Lenovo</Link>
                      </DropdownMenuItem>
                      <DropdownMenuItem asChild>
                        <Link href="/products?category=mobile-phones&brand=zte">ZTE</Link>
                      </DropdownMenuItem>
                      <DropdownMenuItem asChild>
                        <Link href="/products?category=mobile-phones&brand=honor">Honor</Link>
                      </DropdownMenuItem>
                      <DropdownMenuItem asChild>
                        <Link href="/products?category=mobile-phones&brand=lg">LG</Link>
                      </DropdownMenuItem>
                      <DropdownMenuItem asChild>
                        <Link href="/products?category=mobile-phones&brand=others">Other Brands</Link>
                      </DropdownMenuItem>
                    </DropdownMenuSubContent>
                  </DropdownMenuSub>

                  {/* Computer Accessories */}
                  <DropdownMenuSub>
                    <DropdownMenuSubTrigger>Computer Accessories</DropdownMenuSubTrigger>
                    <DropdownMenuSubContent>
                      <DropdownMenuItem asChild>
                        <Link href="/products?category=computer-accessories">All Accessories</Link>
                      </DropdownMenuItem>
                      <DropdownMenuItem asChild>
                        <Link href="/products?category=computer-accessories&subcategory=monitors">Monitors</Link>
                      </DropdownMenuItem>
                      <DropdownMenuItem asChild>
                        <Link href="/products?category=computer-accessories&subcategory=keyboards-mice">Keyboards & Mice</Link>
                      </DropdownMenuItem>
                      <DropdownMenuItem asChild>
                        <Link href="/products?category=computer-accessories&subcategory=storage">Storage Devices</Link>
                      </DropdownMenuItem>
                      <DropdownMenuItem asChild>
                        <Link href="/products?category=computer-accessories&subcategory=cables">Cables & Adapters</Link>
                      </DropdownMenuItem>
                    </DropdownMenuSubContent>
                  </DropdownMenuSub>

                  {/* Network Hardware */}
                  <DropdownMenuSub>
                    <DropdownMenuSubTrigger>Network Hardware</DropdownMenuSubTrigger>
                    <DropdownMenuSubContent>
                      <DropdownMenuItem asChild>
                        <Link href="/products?category=network-hardware">All Network Hardware</Link>
                      </DropdownMenuItem>
                      <DropdownMenuItem asChild>
                        <Link href="/products?category=network-hardware&subcategory=routers">Routers</Link>
                      </DropdownMenuItem>
                      <DropdownMenuItem asChild>
                        <Link href="/products?category=network-hardware&subcategory=switches">Switches</Link>
                      </DropdownMenuItem>
                      <DropdownMenuItem asChild>
                        <Link href="/products?category=network-hardware&subcategory=modems">Modems</Link>
                      </DropdownMenuItem>
                      <DropdownMenuItem asChild>
                        <Link href="/products?category=network-hardware&subcategory=access-points">Access Points</Link>
                      </DropdownMenuItem>
                    </DropdownMenuSubContent>
                  </DropdownMenuSub>

                  {/* Mobile Accessories */}
                  <DropdownMenuSub>
                    <DropdownMenuSubTrigger>Mobile Accessories</DropdownMenuSubTrigger>
                    <DropdownMenuSubContent>
                      <DropdownMenuItem asChild>
                        <Link href="/products?category=mobile-accessories">All Mobile Accessories</Link>
                      </DropdownMenuItem>
                      <DropdownMenuItem asChild>
                        <Link href="/products?category=mobile-accessories&subcategory=chargers">Chargers & Cables</Link>
                      </DropdownMenuItem>
                      <DropdownMenuItem asChild>
                        <Link href="/products?category=mobile-accessories&subcategory=cases">Cases & Covers</Link>
                      </DropdownMenuItem>
                      <DropdownMenuItem asChild>
                        <Link href="/products?category=mobile-accessories&subcategory=screen-protectors">Screen Protectors</Link>
                      </DropdownMenuItem>
                      <DropdownMenuItem asChild>
                        <Link href="/products?category=mobile-accessories&subcategory=audio">Audio Accessories</Link>
                      </DropdownMenuItem>
                    </DropdownMenuSubContent>
                  </DropdownMenuSub>
                </DropdownMenuContent>
              </DropdownMenu>
              <Link href="/suppliers" className="text-gray-700 hover:text-blue-600 font-medium">
                Suppliers
              </Link>
              <Link href="/financing" className="text-gray-700 hover:text-blue-600 font-medium">
                Financing
              </Link>
            </div>

            {/* User Actions */}
            <div className="flex items-center space-x-3">
              <Button variant="ghost" size="sm" className="relative">
                <MessageCircle className="h-5 w-5" />
                <Badge className="absolute -top-1 -right-1 h-4 w-4 p-0 text-xs bg-red-500">
                  3
                </Badge>
              </Button>
              
              <Link href="/wishlist" aria-label="Wishlist">
              <Button variant="ghost" size="sm" className="relative">
                <Heart className="h-5 w-5" />
                <Badge className="absolute -top-1 -right-1 h-4 w-4 p-0 text-xs bg-red-500">
                  7
                </Badge>
              </Button>
              </Link>

              <Link href="/cart" aria-label="Cart">
                <CartButton />
              </Link>

              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="sm">
                    <User className="h-5 w-5" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-48">
                  <DropdownMenuItem>
                    <Link href="/dashboard">Dashboard</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Link href="/orders">My Orders</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Link href="/quotes">Quote Requests</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Link href="/financing">Financing Status</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Link href="/settings">Settings</Link>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="sm"
              className="lg:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <Menu className="h-5 w-5" />
            </Button>
          </div>
        </div>

        {/* Mobile Search */}
        <div className="lg:hidden pb-4">
          <form className="relative" onSubmit={handleSearch}>
            <Input
              type="text"
              placeholder="Search products..."
              className="pl-10 pr-20 h-10 w-full"
              value={searchInput}
              onChange={e => setSearchInput(e.target.value)}
            />
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
            <Button 
              className="absolute right-1 top-1/2 transform -translate-y-1/2 h-8 gradient-primary"
              size="sm"
              type="submit"
            >
              Search
            </Button>
          </form>
        </div>

        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <div className="lg:hidden pb-4 border-t border-gray-200 pt-4">
            <div className="flex flex-col space-y-2">
              <Link href="/categories" className="text-gray-700 hover:text-blue-600 py-2">
                Categories
              </Link>
              <Link href="/suppliers" className="text-gray-700 hover:text-blue-600 py-2">
                Suppliers
              </Link>
              <Link href="/financing" className="text-gray-700 hover:text-blue-600 py-2">
                Financing
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}