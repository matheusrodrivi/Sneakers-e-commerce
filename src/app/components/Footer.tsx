import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (
    <div className="mt-1 flex flex-col items-center gap-6 md:flex-row md:items-start md:justify-between md:gap-8 bg-gray-800 p-8 rounded-lg">
      <div className="flex flex-col gap-4 item-center md:items-start">
        <Link href="/" className="flex items-center justify-center">
          <Image src="/logo.jpg" alt="SneakersShop" width={36} height={36} />
          <p className="hidden md:block text-md font-medium tracking-wider text-white">
            SNEAKERS SHOP
          </p>
        </Link>
        <p className="text-sm text-gray-400"> @ Sneakers Shop. </p>
        <p className="text-sm text-gray-400"> All rights reseved. </p>
      </div>
      <div className="flex flex-col gap-4 text-sm text-gray-400 items-center md:items-start">
        <p className="text-sm text-amber-50"> Links </p>
        <Link href="/"> Homepage </Link>
        <Link href="/"> Contact </Link>
        <Link href="/"> Terms of Service </Link>
        <Link href="/"> Privacy Policy </Link>
      </div>
      <div className="flex flex-col gap-4 text-sm text-gray-400 items-center md:items-start">
        <p className="text-sm text-amber-50"> Links </p>
        <Link href="/"> All Products </Link>
      </div>
      <div className="flex flex-col gap-4 text-sm text-gray-400 items-center md:items-start">
        <p className="text-sm text-amber-50"> Links </p>
        <Link href="/"> About </Link>
        <Link href="/"> Contact </Link>
      </div>
    </div>
  );
};

export default Footer;
