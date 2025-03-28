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
import MobileBackground from '@/public/Mobile-Background.png'
import IpadBackground from '@/public/Ipad-Background.png'
import IpadMaxBackground from '@/public/Ipad-max-Background.png'
import LaptopBackground from '@/public/Laptop-Background.png'

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
    <main className="h-screen flex flex-col gap-[65px] lg:gap-[30px] xl:gap-[5px] text-white relative">
      {/* Navigation */}
      <Navbar />

      {/* Main Content */}
      <div 
        className="pt-16 min-h-screen relative md:hidden"
        style={{ backgroundImage: `url(${MobileBackground.src})`, backgroundSize: 'cover', backgroundPosition: '' }}
      >
        <div className=" absolute inset-0">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2 mt-[34px]">
            {/* Hero Section */}
            <div className="text-center mt-3 lg:mt-10 mb-20 w-full flex items-center justify-center">
              <Image 
              src={BodyImage} 
              alt='' 
              className='w-[308.09px] h-[62px]'/>
            </div>

            {/* Features Grid */}
            <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-1 place-items-center lg:px-20 lg:hidden">
              <button>
                <Image
                src={ButtonCollection} 
                alt='Button-Collection'
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
                src={ButtonRaffles} 
                alt='Button-Raffles'
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

      <div 
        className="pt-16 min-h-screen relative hidden md:block lg:hidden"
        style={{ backgroundImage: `url(${IpadBackground.src})`, backgroundSize: 'cover', backgroundPosition: '' }}
      >
        <div className="absolute inset-0">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 mt-6">
            {/* Hero Section */}
            <div className="text-center mt-3 lg:mt-10 mb-20 w-full flex items-center justify-center">
              <Image 
              src={BodyImage} 
              alt='' 
              className='w-[532.09px] h-[116px] lg:w-[788px] lg:h-[160px]'/>
            </div>

            {/* Features Grid */}
            <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-1 place-items-center lg:px-20 lg:hidden mt-[350px]">
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

      <div 
        className="pt-16 min-h-screen relative hidden lg:block xl:hidden"
        style={{ backgroundImage: `url(${IpadMaxBackground.src})`, backgroundSize: 'cover', backgroundPosition: '' }}
      >
        <div className=" absolute inset-0">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
            {/* Hero Section */}
            <div className="text-center mt-3 lg:mt-10 mb-20 w-full flex items-center justify-center">
              <Image 
              src={BodyImage} 
              alt='' 
              className='w-[570.66px] h-[124.71px] mt-6'/>
            </div>

            {/* Features Grid */}
            <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-1 place-items-center lg:px-10 mt-[200px]">
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

      <div 
        className="pt-16 min-h-screen relative hidden xl:block"
        style={{ backgroundImage: `url(${LaptopBackground.src})`, backgroundSize: 'cover', backgroundPosition: '' }}
      >
        <div className=" absolute inset-0">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
            {/* Hero Section */}
            <div className="text-center mt-3 lg:mt-10 mb-20 w-full flex items-center justify-center">
              <Image 
              src={BodyImage} 
              alt='' 
              className='w-[788px] h-[100px] mt-8'/>
            </div>

            {/* Features Grid */}
            <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-1 place-items-center lg:px-20 lg:hidden">
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