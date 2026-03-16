import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (
    <div className="mt-1 flex flex-col items-center gap-6 md:flex-row md:items-start md:justify-between md:gap-8 bg-[#435057] p-8 rounded-lg">
      <div className="flex flex-col gap-4 item-center md:items-start">
        <Link href="/" className="flex items-center justify-center gap-2">
          {/* <Image
            src="/logoFooter.png"
            alt="SneakersShop"
            width={36}
            height={36}
          /> */}
          <p className="hidden md:block text-md font-medium tracking-wider text-white">
            SNEAKERS SHOP
          </p>
        </Link>
        <p className="text-sm text-white"> @ Sneakers Shop. </p>
        <p className="text-sm text-white"> All rights reseved. </p>
      </div>
      <div className="flex flex-col gap-4 text-sm text-gray-400 items-center md:items-start">
        <p className="hidden md:block text-md font-medium tracking-wider text-white"> LINKS </p>
        <Link href="/" className="text-white"> Homepage </Link>
        <Link href="/" className="text-white"> Contact </Link>
        <Link href="/" className="text-white"> Terms of Service </Link>
        <Link href="/" className="text-white"> Privacy Policy </Link>
      </div>
      <div className="flex flex-col gap-4 text-sm text-gray-400 items-center md:items-start">
        <p className="hidden md:block text-md font-medium tracking-wider text-white"> LINKS </p>
        <Link href="/" className="text-white"> All Products </Link>
      </div>
      <div className="flex flex-col gap-4 text-sm text-gray-400 items-center md:items-start">
        <p className="hidden md:block text-md font-medium tracking-wider text-white"> LINKS </p>
        <Link href="/" className="text-white"> About </Link>
        <Link href="/" className="text-white"> Contact </Link>
      </div>
    </div>
  );
};

export default Footer;
