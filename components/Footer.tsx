import { Truck, Mail, Phone, MapPin } from "lucide-react";
import Link from "next/link";
import { Facebook, Twitter, Linkedin } from "lucide-react"; // Example social icons
import React from "react";
import Image from "next/image";

// Data for links - easier to maintain
const navLinks = [
  { href: "/", label: "Home" },
  { href: "/#about", label: "About Us" },
  { href: "/#services", label: "Services" },
  { href: "/#contact", label: "Contact" },
];

const legalLinks = [
  { href: "/privacy-policy", label: "Privacy Policy" },
  { href: "/terms-and-conditions", label: "Terms & Conditions" },
];

const socialLinks = [
  { href: "https://facebook.com", icon: Facebook, label: "Facebook" },
  { href: "https://twitter.com", icon: Twitter, label: "Twitter" },
  { href: "https://linkedin.com", icon: Linkedin, label: "LinkedIn" },
];

const Footer = () => (
  <footer className="bg-gray-800 text-gray-300 ">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* --- Top Section: Grid Layout for main content --- */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Column 1: Company Info */}
        <div className="space-y-4">
          <div className="flex items-center space-x-3">
            <Image
              className="bg-white p-1 rounded-full"
              src="/logo.png"
              alt="Logo"
              width={50}
              height={50}
            />{" "}
            <span className="text-xl font-bold text-white">
              SRT Transport INC
            </span>
          </div>
          <p className="text-gray-400">
            Professional and reliable trucking services. Licensed, insured, and
            committed to delivering your cargo safely and on time.
          </p>
        </div>

        {/* Column 2: Quick Links */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-white">Quick Links</h3>
          <ul className="space-y-2">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-gray-400 hover:text-blue-400 transition-colors duration-200"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 3: Contact Info */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-white">Contact Us</h3>
          <ul className="space-y-3 text-gray-400">
            <li className="flex items-center space-x-3">
              <MapPin className="h-5 w-5 text-blue-500 flex-shrink-0" />
              <span>Toronto, Ontario, Canada</span>
            </li>
            <li className="flex items-center space-x-3">
              <Mail className="h-5 w-5 text-blue-500 flex-shrink-0" />
              <a
                href="mailto:info@srttransportinc.com"
                className="hover:text-blue-400 transition-colors duration-200"
              >
                info@srttransportinc.com
              </a>
            </li>
            <li className="flex items-center space-x-3">
              <Phone className="h-5 w-5 text-blue-500 flex-shrink-0" />
              <a
                href="tel:+14164559663"
                className="hover:text-blue-400 transition-colors duration-200"
              >
                +1 (416) 455-9663
              </a>
            </li>
          </ul>
        </div>

        {/* Column 4: Social Media */}
        <div className="space-y-4 hidden">
          <h3 className="text-lg font-semibold text-white">Follow Us</h3>
          <div className="flex space-x-4">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Visit our ${social.label} page`}
                className="text-gray-400 hover:text-blue-400 transition-colors duration-200"
              >
                <social.icon className="h-6 w-6" />
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* --- Bottom Section: Copyright and Legal --- */}
      <div className="mt-12 pt-8 border-t border-gray-800 flex flex-col sm:flex-row justify-between items-center text-sm">
        <p className="text-gray-500 mb-4 sm:mb-0">
          © {new Date().getFullYear()} SRT Transport INC. All Rights Reserved.
        </p>
        <div className="flex items-center space-x-4">
          {legalLinks.map((link, index) => (
            <React.Fragment key={link.href}>
              <Link
                href={link.href}
                className="text-gray-500 hover:text-white transition-colors duration-200"
              >
                {link.label}
              </Link>
              {index < legalLinks.length - 1 && (
                <span className="text-gray-600">|</span>
              )}
            </React.Fragment>
          ))}
          <a
            href="https://guntassandhu.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 hover:text-white transition-colors duration-200"
          >
            Website Developer
          </a>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
