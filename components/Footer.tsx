import { Truck } from "lucide-react";
import Link from "next/link";

const Footer = () => (
  <footer className="bg-gray-800 border-t border-gray-700 py-8">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col md:flex-row justify-between items-center">
        <div className="flex items-center space-x-3 mb-4 md:mb-0">
          <Truck className="h-6 w-6 text-blue-500" />
          <div>
            <p className="font-semibold">SRT Transport INC</p>
            <p className="text-sm text-gray-400">
              Professional Trucking Services
            </p>
          </div>
        </div>
        <div className="text-center md:text-right">
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} SRT Transport INC. All rights reserved.
          </p>
          <p className="text-gray-400 text-sm">
            Licensed & Insured Transportation Services
          </p>
          <Link href="/terms-and-conditions" className="text-gray-400 text-sm">
            Terms & Conditions
          </Link>{" "}
          <Link href="/privacy-policy" className="text-gray-400 text-sm">
            Privacy Policy
          </Link>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
