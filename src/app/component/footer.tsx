import Image from "next/image";
import Link from "next/link";
import react from "react";
import logo from "../../../public/MFS Logo-01.png";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <div>
      <footer className="text-gray-600 body-font bg-fixed bg-gray-900 h-full w-full">
        <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
          <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
            <Image
              src={logo}
              alt="MFS"
              width={100}
              height={100}
            />
            <span className="ml-5 text-xl text-white">Fahad Siddiqui</span>
          </a>
          <p className="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">
            © Fahad Siddiqui
          </p>
          <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
            <Link
              href={
                "https://www.facebook.com/mohammad.fahad.581730?mibextid=ZbWKwL"
              }
              className="text-white hower:text-cyan"
            >
              <FaFacebookF className="text-2xl hover:text-[#4be7fc]" />
            </Link>
          </span>
          <span className="inline-flex xl:ml-3 sm:mt-0 mt-4 justify-center sm:justify-start">
            <Link
              href={"https://www.instagram.com/m_fahad_shahid"}
              className="text-white hower:text-cyan"
            >
              <FaInstagram className="text-2xl hover:text-[#4be7fc]" />
            </Link>
          </span>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
