import React from 'react';
import {
  IoHeartOutline,
  IoCartOutline
} from 'react-icons/io5';
import Link from 'next/link';

const NavButtons = () => {
  return (
    <div className="flex items-center gap-4">
      <Link href="/signin" className='text-lg'>Sign In</Link>
      <Link href="/wishlist" className='text-2xl'>
        <IoHeartOutline />
      </Link>
      <Link href="/cart" className='text-2xl'>
        <IoCartOutline />
      </Link>
    </div>
  );
};

export default NavButtons;
