import Image from "next/image";
import StackLogo from "../assets/stacklogo.png";
import { RxHamburgerMenu } from "react-icons/rx";
import { HiArrowLongRight } from "react-icons/hi2";

const Navbar = () => {
  return (
    <div className="flex flex-row justify-between w-full items-center h-16 px-2 md:px-4 z-[999]">
      <div>
        <Image
          src={StackLogo}
          alt="StackIntel Logo"
          height={100}
          width={100}
          className="h-auto w-[100%] "
        />
      </div>
      <div className="hidden lg:flex flex-row justify-center gap-x-6 items-center">
        <button className="font-semibold">Platform</button>
        <button className="font-semibold">Features</button>
        <button className="font-semibold">Company</button>
        <button className="font-semibold">Use Cases</button>
        <button className="font-semibold">Contact Us</button>
      </div>
      <button className="hidden lg:flex flex-row items-center px-6 py-2 bg-blue-800 text-white rounded-full z-[999]">
        Get Started <HiArrowLongRight className="text-xl ml-2" />
      </button>
      <button className="block lg:hidden">
        <RxHamburgerMenu size={24} />
      </button>
    </div>
  );
};

export default Navbar;
