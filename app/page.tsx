/* eslint-disable @typescript-eslint/no-unused-vars */
'use client';

import { Skull, Wallet, Boxes, Coins, Gift, Target } from 'lucide-react';
import { useState } from 'react';
import Background from '@/public/background.png';
import Logo from '@/public/Logo.png';
import BodyImage from '@/public/body-image.png';
import Image from 'next/image';
import ButtonCollection from '@/public/Button-Collection.png'
import ButtonMission from '@/public/Button-Missions.png'
import ButtonRaffles from '@/public/Button-Raffles.png'
import ButtonStaking from '@/public/Button-Staking.png'

import { ReactNode } from 'react';

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

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    { name: 'COLLECTIONS' },
    { name: 'MISSIONS'},
    { name: 'RAFFLES'},
    { name: 'LOOT',},
    { name: 'STAKING',},
    { name: 'COP’S',},
  ];

  const otherItems = [
    { name: 'LISTINGS' },
    { name: 'TEAM'},
  ];

  return (
    <main className="h-screen bg-[#1a1a1a] text-white relative">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-black/80 backdrop-blur-sm z-50 border-b border-red-600/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 bg-white text-black">
          <div className="flex items-center justify-between h-16">
            <div className='flex items-center gap-4'>
              <div className="flex items-center">
                <Image 
                src={Logo}
                alt='Logo'
                className='w-[73px] h-[54px]'/>
              </div>
              
              <div className="hidden lg:flex items-center space-x-8 text-xs">
                {menuItems.map((item) => (
                  <a
                    key={item.name}
                    href="#"
                    className="flex items-center space-x-2  hover:text-[#d50a13] transition-colors"
                  >
                    <span>{item.name}</span>
                  </a>
                ))}
              </div>
            </div>

            <div className="hidden lg:flex items-center space-x-8 text-xs">
              {otherItems.map((item) => (
                <a
                  key={item.name}
                  href="#"
                  className="flex items-center space-x-2 hover:text-[#d50a13] transition-colors"
                >
                  <span>{item.name}</span>
                </a>
              ))}
              <Button
                className="hover:text-[#d50a13] flex items-center space-x-2 "
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
                <a
                  key={item.name}
                  href="#"
                  className="flex items-center space-x-2 text-gray-300 hover:text-red-500 px-3 py-2 rounded-md text-base font-medium"
                >
                  <span>{item.name}</span>
                </a>
              ))}

              {otherItems.map((item) => (
                <a
                  key={item.name}
                  href="#"
                  className="flex items-center space-x-2 text-gray-300 hover:text-red-500 px-3 py-2 rounded-md text-base font-medium"
                >
                  <span>{item.name}</span>
                </a>
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

      {/* Main Content */}
      <div 
        className="pt-16 min-h-screen"
        style={{ backgroundImage: `url(${Background.src})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
      >
        <div className="bg-black/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
            {/* Hero Section */}
            <div className="text-center mb-20 w-full flex items-center justify-center">
              <Image 
              src={BodyImage} 
              alt='' 
              className='w-[308.09px] h-[100px] lg:w-[788px] lg:h-[160px]'/>
            </div>

            {/* Features Grid */}
            <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-1 place-items-center lg:px-20">
              <button>
                <Image
                src={ButtonCollection} 
                alt='Button-Collection'
                className='w-[239px] h-[90px]'/>
              </button>

              <button>
                <Image
                src={ButtonRaffles} 
                alt='Button-Raffles'
                className='w-[239px] h-[90px]'/>
              </button>

              <button>
                <Image
                src={ButtonStaking} 
                alt='Button-Staking'
                className='w-[239px] h-[90px]'/>
              </button>

              <button>
                <Image
                src={ButtonMission} 
                alt='Button-Mission'
                className='w-[239px] h-[90px]'/>
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}