/* eslint-disable @typescript-eslint/no-unused-vars */
'use client';

import Link from 'next/link';
import Image from 'next/image';
import Background from '@/public/collection-background.png';
import Navbar from '@/components/navbar';




export default function Collections() {
  return (
    <main className="text-white relative roboto-text">
      <Navbar />
      
      {/* Background Image and Overlay */}
      <div 
        className="relative md:hidden"
        style={{ 
          backgroundImage: `url(${Background.src})`, 
          backgroundSize: 'cover', 
          backgroundPosition: 'center', 
          backgroundAttachment: 'fixed' // Optional: Makes the background fixed for a parallax effect
        }}
      >
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/70 z-10"></div>

        <div className='mt-20'>
            <h1>
                Mission
            </h1>
        </div>
      </div>
    </main>
  );
}