import Image from "next/image";
import Link from "next/link";
import React from "react";
import logo from "../../../public/MFS Logo-01.png";
import { AiOutlineCloudDownload } from "react-icons/ai";

const Navbar = () => {
  return (
    <div className="z-50 sticky top-0">
      <header className="text-gray-600 body-font bg-fixed bg-gray-900 h-full w-full">
        <div className="container mx-auto my-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <a className="flex title-font font-medium items-center text-gray-900 my-2 md:mb-0">
            <Image 
              src={logo}
              alt="MFS"
              width={100}
              height={100}
            />
            {/* <span className="ml-10 text-2xl text-white">Portfolio</span> */}
          </a>
          <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center text-white">
            <Link href={"/"} className="mr-5 hover:text-cyan-500">
              Home
            </Link>
            <Link href={"#about"} className="mr-5 hover:text-cyan-500">
              About
            </Link>
            <Link href={"#education"} className="mr-5 hover:text-cyan-500">
              Education
            </Link>
            <Link href={"#skills"} className="mr-5 hover:text-cyan-500">
              Skills
            </Link>
            <Link href={"#contact"} className="mr-5 hover:text-cyan-500">
              Contact
            </Link>
          </nav>
          <a href="/Fahad CV.pdf">
            <button className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">
              Download CV
              <AiOutlineCloudDownload className="text-xl ml-2" />
            </button>
          </a>
        </div>
      </header>
    </div>
  );
};

export default Navbar;
