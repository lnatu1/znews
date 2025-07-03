import Image from "next/image";
import Link from "next/link";
import Logo from "@/assets/logo.png";

export default function Footer() {
  return (
    <footer className="flex justify-center py-10 bg-gray-300">
      <Link href="/">
        <Image
          src={Logo.src}
          alt="Tạp chí tri thức logo"
          width={100}
          height={100}
        />
      </Link>
    </footer>
  );
}
