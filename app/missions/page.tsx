/* eslint-disable @typescript-eslint/no-unused-vars */
'use client';

import Link from 'next/link';
import Image from 'next/image';
import Background from '@/public/collection-background.png';
import Navbar from '@/components/navbar';
import { collections } from '../collections/collections';
import MissionBackground from '@/public/mission background.png';

export default function Collections() {
  return (
    <main className="text-white relative roboto-text flex flex-col">
      <Navbar />

      <div className="relative">
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
        <div className="relative z-10 pt-16 min-h-screen text-white xl:mt-20">
          {/* Centered container for image + content */}
          <div className="relative w-full flex flex-col items-center px-4 py-10 lg:py-0">
            {/* Image container with content overlay */}
            <div className="relative w-full max-w-[900px] h-[120px] sm:h-[160px] md:h-[190px] lg:h-[217px]">
              {/* Background Image */}
              <Image 
                src={MissionBackground} 
                alt="Mission Background"
                fill
                className="object-contain" 
                quality={100}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 900px"
              />
              
              {/* Content overlay - centered in the image */}
              <div className="absolute inset-0 flex items-center justify-center">
                <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-center">
                  Hello how are you
                </h1>
              </div>
            </div>
          </div>

          {/* Additional content sections */}
          <div className="w-full max-w-7xl mx-auto px-4 py-12">
            {/* Your collections or other content can go here */}
          </div>
        </div>
      </div>
    </main>
  );
}