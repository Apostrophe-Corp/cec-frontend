/* eslint-disable @typescript-eslint/no-unused-vars */
'use client';

import Link from 'next/link';
import Image from 'next/image';
import Background from '@/public/collection-background.png';
import Navbar from '@/components/navbar';
import { collections } from '../collections/collections'; // Import collections data



export default function Collections() {
  return (
    <main className="text-white relative roboto-text flex flex-col gap-[65px] lg:gap-[30px] xl:gap-[5px]">
    <Navbar />
    
    


    <div className="relative ">
      {/* Fixed background that covers entire viewport */}
      <div 
        className="fixed top-0 left-0 w-full h-full -z-10"
        style={{ 
          backgroundImage: `url(${Background.src})`, 
          backgroundSize: 'cover', 
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      >
        <div className="absolute inset-0 bg-black/70"></div>
      </div>

      {/* Scrollable content container */}
      <div className="relative z-10 pt-16 min-h-screen">
        
      </div>
    </div>
  </main>
  );
}