'use client';

import Link from 'next/link';
import Image from 'next/image';
import Background from '@/public/collection-background.png';
import Navbar from '@/components/navbar';
import { collections } from './collections'; // Import collections data



export default function Collections() {
  return (
    <main className="text-white relative roboto-text flex flex-col gap-[65px] lg:gap-[30px] xl:gap-[5px]">
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

        {/* Content */}
        <div className="relative z-20 container mx-auto px-4 py-12">
          <h1 className="text-[25px] tracking-[5px] zen-dots-regular text-center mb-8 mt-8 ">
            COLLECTIONS
          </h1>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {collections.map((collection) => (
              <Link 
                href={`/collections/${collection.id}`} 
                key={collection.id}
                className="group"
              >
                <div className="w-full">
                  <div className="relative h-[131px] mb-2">
                    <Image
                      src={collection.image}
                      alt={collection.name}
                      fill
                      className="h-full object-cover aspect-1/1"
                    />
                  </div>
                  <h2 className="text-xl tracking-[3px] mt-4 zen-dots-regular mb-1 ">{collection.name}</h2>
                  <p className="text-[#D8D8D8] text-sm">{collection.description}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>

      <div 
        className="pt-16 min-h-screen relative hidden md:block lg:hidden"
        style={{ backgroundImage: `url(${Background.src})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
      >
        <div className="absolute inset-0 bg-black/70">
          <div className="container mx-auto px-4 py-12">
            <h1 className="text-[25px] text-center mb-8 mt-8 tracking-[5px] zen-dots-regular">
              COLLECTIONS
            </h1>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:place-items-center gap-8">
              {collections.map((collection) => (
                <Link 
                  href={`/collections/${collection.id}`} 
                  key={collection.id}
                  className="group"
                >
                  <div className="w-full lg:w-[300px] ">
                    <div className="relative h-[131px] mb-2">
                      <Image
                        src={collection.image}
                        alt={collection.name}
                        fill
                        className="h-full object-cover"
                      />
                    </div>
                    <h2 className="text-xl mb-1 tracking-[3px] zen-dots-regular">{collection.name}</h2>
                    <p className="text-[#D8D8D8] text-sm leading-5">{collection.description}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="relative hidden lg:block xl:hidden">
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
          <div className="container mx-auto px-4 py-8">
            <h1 className="text-[32px] text-center mb-8  tracking-[5px] zen-dots-regular">
              COLLECTIONS
            </h1>
            
            <div className="flex justify-center mt-4">
              <div className="grid grid-cols-3 gap-16">
                {collections.slice(0, 3).map((collection) => (
                  <Link 
                    href={`/collections/${collection.id}`} 
                    key={collection.id}
                    className="group"
                  >
                    <div className="w-full lg:w-[300px]">
                      <div className="relative w-[286px] h-[105px] mb-2">
                        <Image
                          src={collection.image}
                          alt={collection.name}
                          fill
                          className="h-full object-cover"
                        />
                      </div>
                      <h2 className="text-xl mb-1 font-tech tracking-[5px] zen-dots-regular">{collection.name}</h2>
                      <p className="text-[#D8D8D8] text-sm leading-5">{collection.description}</p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            <div className="flex justify-center mt-8 mb-16"> {/* Added mb-16 for bottom spacing */}
              <div className="grid grid-cols-2 gap-16">
                {collections.slice(3, 5).map((collection) => (
                  <Link 
                    href={`/collections/${collection.id}`} 
                    key={collection.id}
                    className="group"
                  >
                    <div className="w-full lg:w-[300px]">
                      <div className="relative w-[286px] h-[105px] mb-2">
                        <Image
                          src={collection.image}
                          alt={collection.name}
                          fill
                          className="h-full object-cover"
                        />
                      </div>
                      <h2 className="text-xl mb-1 tracking-[5px] zen-dots-regular">{collection.name}</h2>
                      <p className="text-[#D8D8D8] text-sm leading-5">{collection.description}</p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="relative hidden xl:block">
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
          <div className="container mx-auto px-4 py-12">
            <h1 className="text-[32px] text-center mb-8 mt-4 tracking-[5px] zen-dots-regular">
              COLLECTIONS
            </h1>
            
            {/* First row with 3 items */}
            <div className="flex justify-center mt-4">
              <div className="grid grid-cols-3 gap-16">
                {collections.slice(0, 3).map((collection) => (
                  <Link 
                    href={`/collections/${collection.id}`} 
                    key={collection.id}
                    className="group"
                  >
                    <div className="w-full lg:w-[300px]">
                      <div className="relative w-[286px] h-[105px] mb-2">
                        <Image
                          src={collection.image}
                          alt={collection.name}
                          fill
                          className="h-full w-ful object-cover"
                        />
                      </div>
                      <h2 className="text-xl mb-1 tracking-[5px] zen-dots-regular">{collection.name}</h2>
                      <p className="text-[#D8D8D8] text-sm leading-5 space-grotesk-normal">{collection.description}</p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            {/* Second row with 2 items */}
            <div className="flex justify-center mt-8 mb-16">
              <div className="grid grid-cols-2 gap-16">
                {collections.slice(3, 5).map((collection) => (
                  <Link 
                    href={`/collections/${collection.id}`} 
                    key={collection.id}
                    className="group"
                  >
                    <div className="w-full lg:w-[300px]">
                      <div className="relative w-[286px] h-[105px] mb-2">
                        <Image
                          src={collection.image}
                          alt={collection.name}
                          fill
                          className="h-full object-cover"
                        />
                      </div>
                      <h2 className="text-xl mb-1 tracking-[5px] zen-dots-regular">{collection.name}</h2>
                      <p className="text-[#D8D8D8] text-sm leading-5 space-grotesk-normal">{collection.description}</p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}