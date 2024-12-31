import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger
} from '@/components/ui/sheet';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from '@/components/ui/accordion';

import React from 'react';
import { IoMenu } from 'react-icons/io5';
import { navlinks } from './navlinks';
import Link from 'next/link';

const MobileMenu = () => {
  return (
    <div className="flex items-center md:hidden">
      <Sheet>
        <SheetTrigger>
          <IoMenu className="text-2xl" />
        </SheetTrigger>
        <SheetContent side="left" className="w-[230px]">
          <SheetHeader className="bg-blue-500 text-white py-2 px-4 text-left">
            <h3 className="text-xl font-extrabold">Logo</h3>
            <SheetTitle className="hidden">mobile menu sidebar</SheetTitle>
            <SheetDescription className="hidden"></SheetDescription>
          </SheetHeader>
          <ul>
            {navlinks.map((ele, i) => (
              <li key={i} className="px-4 py-2 border-b">
                {!!ele.subList?.length ? (
                  <Accordion type="single" collapsible className="border-none">
                    <AccordionItem value="item-1" className="border-b-0">
                      <AccordionTrigger className="w-full text-base p-0 hover:no-underline">
                        {ele.title}
                      </AccordionTrigger>
                      <AccordionContent>
                        <ul>
                          {ele.subList.map((list, i) => (
                            <li key={i} className="px-4 py-2 border-b">
                              <Link href={list.link}>{list.title}</Link>
                            </li>
                          ))}
                        </ul>
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                ) : (
                  <Link href={ele.link}>{ele.title}</Link>
                )}
              </li>
            ))}
          </ul>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default MobileMenu;
