import Image from "next/image";
import CompanyLogo from "../assets/stacklogo.png";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="max-w-7xl mx-auto px-2 lg:px-4 mt-10 py-10">
      <div className="flex flex-col md:flex-row justify-start md:justify-between items-start md:items-start w-full">
        {/* Company Logo */}
        <div className="mb-10 md:mb-0">
          <Image src={CompanyLogo} alt="Company Logo" width={200} height={50} />
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-x-[8em]">
          {/* Second Grid: Home Section */}
          <div>
            <h3 className="font-medium text-gray-800 mb-4">Home</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-700 hover:text-gray-900">
                  Features
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-700 hover:text-gray-900">
                  Solution
                </a>
              </li>
            </ul>
          </div>

          {/* Third Grid: Company Section */}
          <div>
            <h3 className="font-medium text-gray-800 mb-4">Company</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-700 hover:text-gray-900">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-700 hover:text-gray-900">
                  Newsroom
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-700 hover:text-gray-900">
                  Blog
                </a>
              </li>
            </ul>
          </div>

          {/* Fourth Grid: Platform Section */}
          <div>
            <h3 className="font-medium text-gray-800 mb-4">Platform</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-700 hover:text-gray-900">
                  Pricing
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-700 hover:text-gray-900">
                  Showcase
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-700 hover:text-gray-900">
                  Testimonials
                </a>
              </li>
            </ul>
          </div>

          {/* Fifth Grid: Use Cases Section */}
          <div>
            <h3 className="font-medium text-gray-800 mb-4">Use Cases</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-700 hover:text-gray-900">
                  Credit
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-700 hover:text-gray-900">
                  Cloud
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      {/* Footer Bottom Text */}
      <div className="max-w-7xl mx-auto mt-16 pl-4 text-center mb-2 text-gray-500 text-md font-medium">
        © 2024 StackIntel. All Rights Reserved.
      </div>

      {/* Social Media Links */}
      <div className="flex justify-center items-center gap-x-4">
        <a
          href="#"
          className="text-gray-500 hover:text-gray-900 cursor-pointer"
        >
          <FaFacebookF size={20} />
        </a>
        <a
          href="#"
          className="text-gray-500 hover:text-gray-900 cursor-pointer"
        >
          <FaTwitter size={20} />
        </a>
        <a
          href="#"
          className="text-gray-500 hover:text-gray-900 cursor-pointer"
        >
          <FaLinkedinIn size={20} />
        </a>
        <a
          href="#"
          className="text-gray-500 hover:text-gray-900 cursor-pointer"
        >
          <FaInstagram size={20} />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
