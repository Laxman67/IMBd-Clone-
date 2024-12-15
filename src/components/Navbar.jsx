import React from 'react';
import NavbarItem from './NavbarItem';

const Navbar = () => {
  return (
    <div className="flex justify-center gap-6 bg-gray-800 p-4 my-2 text-xl">
      <NavbarItem title="Trending" param="fetchTrending" />
      <NavbarItem title="Top Rated" param="fetchTopRated" />
    </div>
  );
};

export default Navbar;
