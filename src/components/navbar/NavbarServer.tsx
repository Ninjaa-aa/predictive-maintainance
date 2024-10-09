import React from 'react';
import Image from "next/image";
import Link from "next/link";
import { menuItems } from '@/data/data';
import logo from '@/img/credo.png';
import NavbarClient from '@/components/navbar/NavbarClient';

const NavbarServer = () => {
  return (
    <nav className="fixed w-full z-50 transition-all duration-300 bg-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" passHref>
              <figure className="flex flex-col items-center cursor-pointer m-0 w-full max-w-[200px]">
                <div className="relative w-full h-[50px]">
                  <Image
                    src={logo}
                    alt="Credo logo symbolizing predictive maintenance and data innovation"
                    fill
                    className="object-contain w-full h-full"
                    priority
                  />
                </div>
                <figcaption className="text-center font-semibold text-blue-300 text-xs sm:text-xs w-full -mt-2">
                  PREDICTIVE MAINTENANCE
                </figcaption>
              </figure>
            </Link>
          </div>
          
          <NavbarClient menuItems={menuItems} />
        </div>
      </div>
    </nav>
  );
};

export default NavbarServer;