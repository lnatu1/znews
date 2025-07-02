import Image from "next/image";
import { Ellipsis, Search } from "lucide-react";
import { navList } from "@/data/mock-data";
import Logo from "@/assets/logo.png";
import Link from "next/link";

const Header = () => {
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
        <nav>
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
            <li>
              <button className="block cursor-pointer">
                <Ellipsis />
              </button>
            </li>
          </ul>
        </nav>

        <div>
          <button className="block cursor-pointer">
            <Search />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
