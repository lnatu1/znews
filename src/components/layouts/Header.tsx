"use client";
import { useState } from "react";
import Image from "next/image";
import { Ellipsis, Search } from "lucide-react";
import { navList } from "@/data/mock-data";
import Logo from "@/assets/logo.png";
import Link from "next/link";
import { fullMenu } from "@/data/mock-data";

const FullMenu = () => {
  return (
    <div className="absolute top-12.5 lg:top-14 left-0 w-full z-20 bg-gray-950">
      <div className="max-w-[900px] mx-auto p-6">
        <div className="grid grid-cols-12 gap-4">
          {fullMenu.map((m) => (
            <div
              className="col-span-6 md:col-span-3 text-center md:text-left"
              key={m.id}
            >
              <Link className="block text-white font-bold" href={m.link}>
                {m.label}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [showSearch, setShowSearch] = useState(false);

  return (
    <header className="border-b border-black/10 sticky top-0 bg-white z-20">
      <div className="max-w-container w-full px-6 mx-auto flex items-center justify-between gap-8">
        <Link href="/">
          <Image
            src={Logo.src}
            alt="Tạp chí tri thức logo"
            width={50}
            height={50}
          />
        </Link>
        <div className="flex items-center gap-8 order-first lg:order-none">
          <nav className="hidden lg:block">
            <ul className="flex gap-8 items-center font-semibold">
              {navList.map((item) => (
                <li key={item.id}>
                  <a
                    className="block py-4 hover:text-cyan-500 hover:border-cyan-500 border-b-2 border-white"
                    href={item.redirectUrl}
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <button
            className="block cursor-pointer"
            onClick={() => setShowMenu((showMenu) => !showMenu)}
          >
            <Ellipsis />
          </button>
        </div>

        <div className="relative">
          <button
            className="block cursor-pointer"
            onClick={() => setShowSearch((s) => !s)}
          >
            <Search />
          </button>

          {showSearch && (
            <div className="absolute right-6 -translate-x-full w-[100px] -top-1.5 h-full">
              <input
                type="text"
                className="bg-black text-white rounded-md p-2 text-sm"
                placeholder="Nhập nội dung tìm kiếm..."
              />
            </div>
          )}
        </div>
      </div>

      {showMenu && <FullMenu />}
    </header>
  );
};

export default Header;
