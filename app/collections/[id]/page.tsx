'use client';

import { useParams, useRouter } from 'next/navigation';
import Image from 'next/image';
import Background from '@/public/collection-background.png';
import Navbar from '@/components/navbar';
import { ArrowLeft } from 'lucide-react';
import { collections } from '../collections'; // Import collections data
import Link from 'next/link';

// Simple PRNG with a fixed seed
function seededRandom(seed: number) {
  const x = Math.sin(seed) * 10000;
  return x - Math.floor(x);
}

// Shuffle an array using a seeded PRNG
function seededShuffle<T>(array: T[], seed: number): T[] {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(seededRandom(seed + i) * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

export default function CollectionDetail() {
  const router = useRouter();
  const params = useParams();
  const id = params.id as string;

  // Find the collection by ID
  const collection = collections.find((collection) => collection.id === id);

  if (!collection) {
    return <div>Collection not found</div>;
  }

  // Get 3 random collections (excluding the current one)
  const otherCollections = seededShuffle(
    collections.filter((c) => c.id !== id), // Exclude the current collection
    id.charCodeAt(0) // Use the first character of the ID as the seed
  ).slice(0, 3); // Get the first 3 items

  return (
    <main className="text-white relative roboto-text">
      {/* Background Wrapper */}
      <Navbar />
      
      <div
        className="fixed inset-0 -z-10"
        style={{
          backgroundImage: `url(${Background.src})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      ></div>

      {/* Overlay */}
      <div className="fixed inset-0 bg-black/70 -z-10"></div>

      

      <div className="pt-16 lg:px-52 xl:px-80">
        <div className="container mx-auto px-4 py-12">
            <div className='flex w-full items-center px-2 gap-16 mb-1'>
                <button
                    onClick={() => router.back()}
                    className="flex justify-center items-center w-[28px] h-[28px] bg-[#595c5d]"
                >
                    <ArrowLeft className="" />
                </button>

                <h1 className="text-[38px] font-tech flex-grow md:text-center">
                    {collection.name}
                </h1>
            </div>

          <div className="w-full flex flex-col ">
            <div className="relative h-[184px] md:h-[300px] mb-2 ">
              <Image
                src={collection.image}
                alt={collection.name}
                fill
                className=""
              />
            </div>

            <p className="text-gray-300 mb-12 leading-relaxed lg:px-4">
              {collection.fullDescription}
            </p>

            {/* Display 3 random collections (excluding the current one) */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {otherCollections.map((otherCollection) => (
                <Link
                  href={`/collections/${otherCollection.id}`}
                  key={otherCollection.id}
                  className="group"
                >
                  <div className="relative h-[120px] ">
                    <Image
                      src={otherCollection.image}
                      alt={otherCollection.name}
                      fill
                      className=""
                    />
                  </div>
                </Link>
              ))}
            </div>

            <div className="mt-12 text-center">
              <button className="bg-[#F1DA00] text-black px-[30px] py-[20px] rounded-[10px] ">
                View on Marketplace
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}