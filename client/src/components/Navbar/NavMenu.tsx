import React from 'react';
import { navlinks } from './navlinks';
import Link from 'next/link';
import { IoChevronDownOutline } from "react-icons/io5";


const NavMenu = () => {
  return (
    <nav>
      <ul className="hidden md:flex items-center gap-6">
        {navlinks.map((ele, i) => (
          <li key={i} className="uppercase">
            {!!ele.subList?.length ? (
              <div className="relative group">
                <Link href={ele.link} className="flex items-center gap-1">
                  {ele.title} <IoChevronDownOutline />
                </Link>
                <ul className="min-w-[170px] absolute top-[45px] bg-red-500 divide-y-2 invisible opacity-0 group-hover:opacity-100 group-hover:visible trans rounded-sm shadow-lg">
                  {ele.subList.map((list, i) => (
                    <li
                      key={i}
                      className="hover:bg-slate-200 w-full px-6 py-2 trans"
                    >
                      <Link href={list.link}>{list.title}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            ) : (
              <Link href={ele.link}>{ele.title}</Link>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavMenu;
