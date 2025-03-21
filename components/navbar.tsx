'use client';

import { Wallet } from 'lucide-react';
import { useState } from 'react';
import Logo from '@/public/Logo.png';
import Image from 'next/image';
import { ReactNode } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface ButtonProps {
  children: ReactNode;
  className?: string;
  [key: string]: unknown; // Allow any other props
}

function Button({ children, className = '', ...props }: ButtonProps) {
  return (
    <button
      className={`inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const menuItems = [
    { name: 'COLLECTIONS', link: '/collections' },
    { name: 'MISSIONS', link: '/missions' },
    { name: 'RAFFLES', link: '/raffles' },
    { name: 'LOOT', link: '/loot' },
    { name: 'STAKING', link: '/staking' },
    { name: 'COP’S', link: '/cops' },
  ];
  
  const otherItems = [
    { name: 'LISTINGS', link: '/listings' },
    { name: 'TEAM', link: '/team' },
  ];

  return (
    <main className="roboto-text text-black">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-black/80 backdrop-blur-sm z-50 border-b border-red-600/20">
        <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 bg-white text-black">
          <div className="flex items-center justify-between h-16">
            <div className='flex items-center gap-4'>
              <div className="flex items-center">
                <Link href="/">
                  <Image 
                    src={Logo}
                    alt='Logo'
                    className='w-[73px] h-[54px]'
                  />
                </Link>
              </div>
              
              <div className="hidden lg:flex items-center space-x-8 text-sm">
                {menuItems.map((item) => (
                  <Link
                    key={item.name}
                    href={item.link}
                    className={`flex items-center space-x-2 hover:py-[10px] hover:px-[20px] hover:bg-[#f1da00] transition-colors ${pathname.includes(item.link) ? 'py-[10px] px-[20px] bg-[#f1da00]' : ''}`}
                  >
                    <span>{item.name}</span>
                  </Link>
                ))}
              </div>
            </div>

            <div className="hidden lg:flex items-center space-x-8 text-sm">
              {otherItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.link}
                  className={`flex items-center space-x-2 hover:py-[10px] hover:px-[20px] hover:bg-[#f1da00] transition-colors ${pathname.includes(item.link) ? 'text-yellow-500' : ''}`}
                >
                  <span>{item.name}</span>
                </Link>
              ))}
              <Button
                className=" flex items-center space-x-2 text-sm"
              >
                <Wallet className="w-5 h-5" />
                <span>Connect Wallet</span>
              </Button>
            </div>

            {/* Mobile menu button */}
            <div className="lg:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className=" "
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
          <div className="lg:hidden bg-black/95">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {menuItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.link}
                  className={`flex items-center space-x-2 text-gray-300 hover:text-red-500 px-3 py-2 rounded-md text-base font-medium ${pathname.includes(item.link) ? 'text-yellow-500' : ''}`}
                >
                  <span>{item.name}</span>
                </Link>
              ))}

              {otherItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.link}
                  className={`flex items-center space-x-2 text-gray-300 hover:text-red-500 px-3 py-2 rounded-md text-base font-medium ${pathname.includes(item.link) ? 'text-yellow-500' : ''}`}
                >
                  <span>{item.name}</span>
                </Link>
              ))}
              <Button
                className="w-full bg-[#d50a13] text-white flex items-center justify-center space-x-2 mt-4 px-4 py-2 rounded-md"
              >
                <Wallet className="w-5 h-5" />
                <span>Connect Wallet</span>
              </Button>
            </div>
          </div>
        )}
      </nav>
    </main>
  );
}