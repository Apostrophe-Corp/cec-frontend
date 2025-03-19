'use client';

import { Skull, Wallet, Boxes, Coins, Gift, Target } from 'lucide-react';
import { useState } from 'react';

function Button({ children, className = '', ...props }) {
  return (
    <button
      className={`inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    { name: 'COLLECTIONS', icon: <Boxes className="w-6 h-6" /> },
    { name: 'MISSIONS', icon: <Target className="w-6 h-6" /> },
    { name: 'RAFFLES', icon: <Gift className="w-6 h-6" /> },
    { name: 'STAKING', icon: <Coins className="w-6 h-6" /> },
  ];

  return (
    <main className="h-screen bg-[#1a1a1a] text-white relative">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-black/80 backdrop-blur-sm z-50 border-b border-red-600/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <Skull className="h-8 w-8 text-red-600" />
              <span className="ml-2 text-xl font-bold">CRAZY LABS</span>
            </div>
            
            <div className="hidden md:flex items-center space-x-8">
              {menuItems.map((item) => (
                <a
                  key={item.name}
                  href="#"
                  className="flex items-center space-x-2 text-gray-300 hover:text-red-500 transition-colors"
                >
                  {item.icon}
                  <span>{item.name}</span>
                </a>
              ))}
              <Button
                className="bg-red-600 hover:bg-red-700 text-white flex items-center space-x-2 px-4 py-2 rounded-md"
              >
                <Wallet className="w-5 h-5" />
                <span>Connect Wallet</span>
              </Button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-300 hover:text-white"
              >
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-black/95">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {menuItems.map((item) => (
                <a
                  key={item.name}
                  href="#"
                  className="flex items-center space-x-2 text-gray-300 hover:text-red-500 px-3 py-2 rounded-md text-base font-medium"
                >
                  {item.icon}
                  <span>{item.name}</span>
                </a>
              ))}
              <Button
                className="w-full bg-red-600 hover:bg-red-700 text-white flex items-center justify-center space-x-2 mt-4 px-4 py-2 rounded-md"
              >
                <Wallet className="w-5 h-5" />
                <span>Connect Wallet</span>
              </Button>
            </div>
          </div>
        )}
      </nav>

      {/* Main Content */}
      <div className="pt-16 min-h-screen bg-[url('https://images.unsplash.com/photo-1584438784894-089d6a62b8fa?auto=format&fit=crop&q=80')] bg-cover bg-center">
        <div className="bg-black/50 min-h-screen">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
            {/* Hero Section */}
            <div className="text-center mb-20">
              <h1 className="text-5xl md:text-7xl font-bold mb-6 text-red-500">
                CRAZY LABS
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8">
                Enter the laboratory of endless possibilities
              </p>
              <Button
                className="bg-red-600 hover:bg-red-700 text-white text-lg px-8 py-6 rounded-md"
              >
                Launch App
              </Button>
            </div>

            {/* Features Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {menuItems.map((item) => (
                <div
                  key={item.name}
                  className="bg-black/60 backdrop-blur-sm border border-red-600/20 rounded-lg p-6 hover:border-red-600 transition-colors cursor-pointer"
                >
                  <div className="flex items-center justify-center mb-4">
                    <div className="bg-red-600/20 p-3 rounded-full">
                      {item.icon}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-center mb-2">{item.name}</h3>
                  <p className="text-gray-400 text-center">
                    Explore our {item.name.toLowerCase()} and discover new opportunities
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}