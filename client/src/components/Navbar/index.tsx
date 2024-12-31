import React from 'react';
import NavMenu from './NavMenu';
import NavButtons from './NavButtons';

const Navbar = () => {
  return (
    <header className="bg-blue-500 text-white sticky top-0">
      <div className="cus-container flex items-center justify-between py-4">
        <h3 className="text-2xl font-extrabold">Logo</h3>
        <NavMenu></NavMenu>
        <NavButtons></NavButtons>
      </div>
    </header>
  );
};

export default Navbar;
