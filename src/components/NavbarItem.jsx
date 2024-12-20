'use client';
import Link from 'next/link';
import React from 'react';
import { useSearchParams } from 'next/navigation';

const NavbarItem = ({ title, param }) => {
  const searchParams = useSearchParams();
  const genre = searchParams.get('genre');
  return (
    <Link
      href={`/?genre=${param}`}
      className={
        genre &&
        genre === param &&
        'underline underline-offset-8 decoration-4 decoration-amber-500'
      }
    >
      {title}
    </Link>
  );
};

export default NavbarItem;
