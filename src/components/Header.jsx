import React from 'react';
import MenuItem from './MenuItem';
import { IoIosHome } from 'react-icons/io';
import { FaInfoCircle } from 'react-icons/fa';
import Link from 'next/link';
import DarkModeSwitch from './DarkModeSwitch';

const Header = () => {
  return (
    <div className="w-[100%] flex justify-center">
      {/* Menu */}
      <div className="mx-4 lg:mx-6 hover:text-amber-500 flex w-screen ">
        <MenuItem title="Home" address="/" Icon={IoIosHome} />
        <MenuItem title="About" address="/about" Icon={FaInfoCircle} />
      </div>
      {/* Logo  */}
      <div className="mr-6 flex  space-x-4  items-center">
        <DarkModeSwitch />
        <Link href="/">
          <h2 className="flex justify-center   space-x-1 items-center">
            <span className="font-bold bg-amber-500 py-1 px-2  text-xl text-black rounded-lg  ">
              IMdb
            </span>
            <span className="text-xl">Clone</span>
          </h2>
        </Link>
      </div>
    </div>
  );
};

export default Header;
