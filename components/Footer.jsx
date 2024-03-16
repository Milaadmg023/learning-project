import Image from "next/image";
import Logo from "@/assets/images/logo.png"
import { data } from "autoprefixer";



const Footer = () => {
    const currentYear = new Date().getFullYear()
  return (
    <>
      <footer className="bg-gray-200 py-4 mt-20">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-4">
          <div className="mb-4 md:mb-0">
            <Image alt="Logo" className="h-8 w-auto" src={Logo} />
          </div>
          <div>
            <p className="text-sm text-gray-500 mt-2 md:mt-0">
              © {currentYear} Milad Bageri. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
