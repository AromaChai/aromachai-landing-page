import Image from "next/image";
import Link from "next/link";
import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaXTwitter,
} from "react-icons/fa6";

export const Footer = () => {
  return (
    <footer className="relative  md:mb-0 mb-16 min-h-[400px]">
      
      {/* Background Image - parent needs position + size for Next.js Image fill */}
      <div className="absolute inset-0 -z-0">
        <div className="relative w-full h-full min-h-[400px]">
          <Image
            src="/images/footer.png"
            alt="Footer Background"
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
        </div>
        {/* Dark Overlay */}
        {/* <div className="absolute inset-0 bg-[#0f3d26]/90" /> */}
      </div>

      <div className="z-20 absolute top-0 right-0 left-0 bg-black/50 w-full h-full pointer-events-none"></div>
     
      {/* Main Footer Content */}
      <div className="relative z-30 max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-3 gap-10  ">
        
        {/* Logo & Description */}
        <div>
          <Image
            src="/images/footerlogo.png"
            alt="Aroma Chai"
            width={160}
            height={60}
            className="mb-4"
          />

          <p className="text-sm text-gray-200 leading-relaxed mb-4">
            Chai Franchise India | Tea Business Opportunity | Low Investment
            Franchise | Profitable Food Franchise
          </p>

          {/* Social Icons */}
          <div className="flex gap-3 mt-4">
            <SocialIcon href="https://www.facebook.com/aromachai.outlet" icon={<FaFacebookF />}  />
            <SocialIcon href="https://www.instagram.com/aroma.chai/" icon={<FaInstagram />} />
            <SocialIcon href="https://www.youtube.com/@aromachai" icon={<FaYoutube />} />
            <SocialIcon href="https://x.com/aroma_chai_" icon={<FaXTwitter />} />
          </div>
        </div>

        {/* Quick Links */}
        <div className="md:mt-0 mt-6">
          <h3 className="text-lg font-semibold mb-4 text-white">Quick Links</h3>
          <ul className="space-y-3 text-sm text-white  transition font-bold">
            <FooterLink href="#">Home</FooterLink>
            <FooterLink href="#about">Featured Outlet</FooterLink>
            <FooterLink href="https://findus.aromachai.in/">Find A Outlets</FooterLink>
            <FooterLink href="https://outlet.aromachai.in/shop">Shop Now</FooterLink>
            <FooterLink href="tel:919324590515">Contact</FooterLink>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="md:mt-0 mt-6">
          <h3 className="text-lg font-semibold mb-4 text-white">Get In Touch</h3>
          <ul className="space-y-3 text-sm text-gray-200">
            <li>
              Office #914, Grohitam Building, Plot 14B, APMC Market,
              Sector 19, Vashi, 400705
            </li>
            <li>
              ✉️{" "}
              <a
                href="mailto:contact@aromachai.in"
                className="hover:text-green-400 transition"
              >
                Contact@aromachai.in
              </a>
            </li>
            <li>
              📞{" "}
              <a
                href="tel:+919324590515"
                className="hover:text-green-400 transition"
              >
                +91 9324590515
              </a>
            </li>
          </ul>
        </div>

      </div>

      {/* Bottom Bar */}
      <div className="relative z-20  text-center text-sm py-6 mt-0 text-gray-200">
        Copyright © 2024 Aroma Chai. All Rights Reserved
      </div>
    </footer>
  );
};

/* ---------- Reusable Components ---------- */

const FooterLink = ({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) => (
  <li>
    <Link href={href} className="hover:text-green-400 transition">
      {children}
    </Link>
  </li>
);

const SocialIcon = ({
  href,
  icon,
}: {
  href: string;
  icon: React.ReactNode;
}) => (
  <a
    href={href}
    target="_blank"
    className="w-9 h-9 flex items-center justify-center rounded-full bg-green-500/10 hover:bg-green-500 transition text-white"
  >
    {icon}
  </a>
);
