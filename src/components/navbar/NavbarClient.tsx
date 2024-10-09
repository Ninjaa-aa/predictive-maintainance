"use client";
import React, { useState, useEffect, useRef } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { MenuItem } from '@/data/data';

interface NavbarClientProps {
  menuItems: MenuItem[];
}

const NavbarClient: React.FC<NavbarClientProps> = ({ menuItems }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setOpenDropdown(null);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);

  const handleDropdownToggle = (label: string, event: React.MouseEvent) => {
    event.preventDefault();
    event.stopPropagation();
    setOpenDropdown(prevDropdown => prevDropdown === label ? null : label);
  };

  const NavItem = ({ item, isMobile = false }: { item: MenuItem; isMobile?: boolean }) => (
    <div className={`relative group ${isMobile ? 'w-full' : ''}`} ref={isMobile ? null : dropdownRef}>
      {item.subItems ? (
        <>
          <button
            onClick={(e) => handleDropdownToggle(item.label, e)}
            className={`text-blue-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium flex items-center transition duration-300 ease-in-out hover:bg-blue-800 group w-full justify-between ${isMobile ? 'bg-gray-800' : ''}`}
          >
            {item.label}
            <ChevronDown className={`ml-1 h-4 w-4 transition-transform duration-300 ${openDropdown === item.label ? 'rotate-180' : ''}`} />
          </button>
          {openDropdown === item.label && (
            <div className={`${isMobile ? 'relative' : 'absolute'} z-10 left-0 mt-2 w-full md:w-56 opacity-100 visible transition-all duration-300 ease-in-out`}>
              <div className={`rounded-md shadow-lg ${isMobile ? 'bg-gray-700' : 'bg-gray-800'} ring-1 ring-blue-500 ring-opacity-5 py-1`} role="menu" aria-orientation="vertical">
                {item.subItems.map((subItem) => (
                  <a
                    key={subItem.href}
                    href={subItem.href}
                    className={`block px-4 py-2 text-sm text-blue-300 hover:bg-blue-700 hover:text-white transition duration-150 ease-in-out ${isMobile ? 'bg-gray-700' : ''}`}
                    role="menuitem"
                    onClick={(e) => {
                      e.stopPropagation();
                      setOpenDropdown(null);
                      if (isMobile) setIsOpen(false);
                    }}
                  >
                    {subItem.label}
                  </a>
                ))}
              </div>
            </div>
          )}
        </>
      ) : (
        <a
          href={item.href}
          className={`text-blue-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition duration-300 ease-in-out hover:bg-blue-800 block w-full ${isMobile ? 'bg-gray-800' : ''}`}
          onClick={() => {
            if (isMobile) setIsOpen(false);
          }}
        >
          {item.label}
        </a>
      )}
    </div>
  );

  return (
    <>
      <div className={`hidden md:flex flex-grow items-center justify-center transition-all duration-300 ${scrolled ? 'bg-gray-900 bg-opacity-95' : ''}`}>
        <div className="flex items-baseline space-x-4">
          {menuItems.map((item) => (
            <NavItem key={item.href} item={item} />
          ))}
        </div>
      </div>
      
      <div className="md:hidden flex items-center">
        <button
          onClick={toggleMenu}
          className="inline-flex items-center justify-center p-2 rounded-md text-blue-400 hover:text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500 transition duration-300 ease-in-out"
        >
          {isOpen ? <X className="block h-6 w-6" /> : <Menu className="block h-6 w-6" />}
        </button>
      </div>

      {isOpen && (
        <div className="md:hidden absolute top-20 left-0 w-full bg-gray-900">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {menuItems.map((item) => (
              <NavItem key={item.href} item={item} isMobile={true} />
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default NavbarClient;