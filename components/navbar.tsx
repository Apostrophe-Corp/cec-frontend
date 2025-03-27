'use client';

// import { Wallet } from 'lucide-react';
import { useState } from 'react';
import Logo from '@/public/Logo.png';
import Image from 'next/image';
import { ReactNode } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Wallet from '@/public/walet.png'
import LeftBG from '@/public/Navigation-Bar_3.png'
import RightBG from '@/public/Navigation-Bar 2.png'


interface ButtonProps {
  children: ReactNode;
  className?: string;
  [key: string]: unknown; // Allow any other props
}

function Button({ children, className = '', ...props }: ButtonProps) {
  return (
    <button
      className={`inline-flex items-center justify-center rounded-full text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background ${className}`}
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
      <nav className="fixed top-0 w-full bg-white backdrop-blur-sm z-50 border-b border-red-600/20">

      <div className="absolute inset-0 z-0">
      <Image 
        src={LeftBG} 
        alt='' 
        className={`hidden md:block absolute h-full left-0 top-0 pointer-events-none ${
          isMenuOpen ? 'md:hidden' : ''
        }`}
      />
      <Image 
      src={RightBG} 
      alt='' 
      className='hidden lg:block absolute h-full right-0 top-0 pointer-events-none'
      />
  </div>

        
        
        <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 relative  text-black border-b-6 border-b-[#d50a13]">
          <div className="flex items-center justify-between h-20 lg:px-10 z-20 ">
            <div className='flex items-center gap-4'>
              <div className="flex items-center">
                <Link href="/">
                  <Image 
                    src={Logo}
                    alt='Logo'
                    className='w-[73px] h-[54px] lg:w-[80px] lg:h-[58px]'
                  />
                </Link>
              </div>
              
              <div className="hidden xl:flex items-center  text-sm">
                {menuItems.map((item) => (
                  <Link
                    key={item.name}
                    href={item.link}
                    className={`flex items-center py-[29px] px-[20px] hover:bg-[#f1da00] transition-colors ${pathname.includes(item.link) ? 'py-[20px] px-[20px] bg-[#f1da00]' : ''}`}
                  >
                    <span>{item.name}</span>
                  </Link>
                ))}
              </div>
            </div>

            <div className="hidden xl:flex items-center text-sm">
              {otherItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.link}
                  className={`flex items-center space-x-2 py-[29px] px-[20px] hover:bg-[#f1da00] transition-colors ${pathname.includes(item.link) ? 'text-yellow-500' : ''}`}
                >
                  <span>{item.name}</span>
                </Link>
              ))}
              <Button
                className=" flex items-center space-x-2 lg:ml-[26px] text-sm cursor-pointer"
              >
                <Image src={Wallet} alt='Wallet' className='w-6 h-6'/>
                {/* <span>Connect Wallet</span> */}
              </Button>
            </div>

            <div className="xl:hidden flex items-center gap-3 md:gap-6">
              <Button
                  className="flex items-center space-x-3 border border-[#333436]  px-5 py-[14px]  text-sm cursor-pointer "
                >
                  <span>Connect Wallet</span>
                  <Image src={Wallet} alt='Wallet' className='w-6 h-6'/>
                </Button>

              {/* Mobile menu button */}
              <div>
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
                <Image src={Wallet} alt="Wallet" className="w-5 h-5" />
                <span>Connect Wallet</span>
              </Button>
            </div>
          </div>
        )}
      </nav>
    </main>
  );
}