'use client';

import Link from 'next/link';
import Image from 'next/image';
import Background from '@/public/collection-background.png';
import Navbar from '@/components/navbar';
import Critters from '@/public/collection/critters.png';
import Embryo from '@/public/collection/embryo.png';
import Guys from '@/public/collection/guys.png';
import Kids from '@/public/collection/kids.png';
import Scientist from '@/public/collection/scientist.png';

const collections = [
  {
    id: 'critters',
    name: 'Critters',
    image: Critters,
    description: 'Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for'
  },
  {
    id: 'embryo',
    name: 'EMBRYO',
    image: Embryo,
    description: 'Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for'
  },
  {
    id: 'guys',
    name: 'GUYS',
    image: Guys,
    description: 'Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for'
  },
  {
    id: 'kids',
    name: 'KIDS',
    image: Kids,
    description: 'Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for'
  },
  {
    id: 'scientist',
    name: 'Scientist',
    image: Scientist,
    description: 'Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for'
  }
];

export default function Collections() {
  return (
    <main className="text-white relative">
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
          <h1 className="text-[32px] text-center mb-8 mt-8 font-tech">
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
                      className="h-full object-cover"
                    />
                  </div>
                  <h2 className="text-xl mb-1 font-tech">{collection.name}</h2>
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
            <h1 className="text-[32px] text-center mb-8 mt-8 font-tech">
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
                    <h2 className="text-xl mb-1 font-tech">{collection.name}</h2>
                    <p className="text-[#D8D8D8] text-sm leading-5">{collection.description}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div 
        className="pt-16 min-h-screen relative hidden lg:block"
        style={{ backgroundImage: `url(${Background.src})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
      >
        <div className="absolute inset-0 bg-black/70">
          <div className="container mx-auto px-4 py-12">
            <h1 className="text-[32px] text-center mb-8 mt-8 font-tech">
              COLLECTIONS
            </h1>
            
            {/* Second row with 2 items centered */}
            <div className="flex justify-center mt-4"> {/* Flexbox to center the second row */}
              <div className="grid grid-cols-3 gap-16"> {/* Reduced gap */}
                {collections.slice(0, 3).map((collection) => ( // Second row with 2 items
                  <Link 
                    href={`/collections/${collection.id}`} 
                    key={collection.id}
                    className="group"
                  >
                    <div className="w-full lg:w-[300px]">
                      <div className="relative h-[131px] mb-2">
                        <Image
                          src={collection.image}
                          alt={collection.name}
                          fill
                          className="h-full object-cover"
                        />
                      </div>
                      <h2 className="text-xl mb-1 font-tech">{collection.name}</h2>
                      <p className="text-[#D8D8D8] text-sm leading-5">{collection.description}</p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            <div className="flex justify-center mt-8"> {/* Flexbox to center the second row */}
              <div className="grid grid-cols-2 gap-16"> {/* Reduced gap */}
                {collections.slice(3, 5).map((collection) => ( // Second row with 2 items
                  <Link 
                    href={`/collections/${collection.id}`} 
                    key={collection.id}
                    className="group"
                  >
                    <div className="w-full lg:w-[300px]">
                      <div className="relative h-[131px] mb-2">
                        <Image
                          src={collection.image}
                          alt={collection.name}
                          fill
                          className="h-full object-cover"
                        />
                      </div>
                      <h2 className="text-xl mb-1 font-tech">{collection.name}</h2>
                      <p className="text-[#D8D8D8] text-sm leading-5">{collection.description}</p>
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