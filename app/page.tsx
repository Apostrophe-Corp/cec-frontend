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
import Navbar from '@/components/navbar';

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
  
  return (
    <main className="h-screen  text-white relative">
      {/* Navigation */}
      <Navbar />

      {/* Main Content */}
      <div 
        className="pt-16 min-h-screen relative"
        style={{ backgroundImage: `url(${Background.src})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
      >
        <div className="bg-black/20 absolute inset-0">
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