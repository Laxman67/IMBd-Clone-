import React from 'react';
import Link from 'next/link';

const MenuItem = ({ title, address, Icon }) => {
  return (
    <div>
      <Link href={address}>
        <Icon className="text-2xl sm:hidden mx-4" />
        <p className="hidden sm:inline my-2 mx-4 text-xl">{title}</p>
      </Link>
    </div>
  );
};

export default MenuItem;
