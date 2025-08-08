import { FaFacebookF, FaTwitter, FaGooglePlusG, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaFax } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-gray-300">
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-4 gap-10">
        
        {/* Logo & Description */}
        <div>
          <div className="inline-block border-2 border-white px-4 py-1 font-bold tracking-widest text-white">
            GRIDGUM
          </div>
          <p className="mt-4 text-sm leading-6">
            Lorem ipsum dolor site amet concateur un prado cargo, lorem ipsum dolor site amet concateur un prado cargo.
            All bravo versache un tiro balensiaga. Bootstrap templates website responsive themes.
          </p>
          <div className="flex space-x-2 mt-4">
            <a href="#" className="p-2 border border-white hover:bg-white hover:text-black transition">
              <FaFacebookF />
            </a>
            <a href="#" className="p-2 border border-white hover:bg-white hover:text-black transition">
              <FaTwitter />
            </a>
            <a href="#" className="p-2 border border-white hover:bg-white hover:text-black transition">
              <FaGooglePlusG />
            </a>
            <a href="#" className="p-2 border border-white hover:bg-white hover:text-black transition">
              <FaInstagram />
            </a>
            <a href="#" className="p-2 border border-white hover:bg-white hover:text-black transition">
              <FaLinkedinIn />
            </a>
          </div>
        </div>

        {/* Footer Menu */}
        <div>
          <h3 className="text-white font-bold mb-4 uppercase">Footer Menu</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-white">Terms & Conditions</a></li>
            <li><a href="#" className="hover:text-white">About Us</a></li>
            <li><a href="#" className="hover:text-white">Online Support</a></li>
            <li><a href="#" className="hover:text-white">Our Blog</a></li>
            <li><a href="#" className="hover:text-white">Product Gallery</a></li>
            <li><a href="#" className="hover:text-white">Contact Us</a></li>
          </ul>
        </div>

        {/* Company Address */}
        <div>
          <h3 className="text-white font-bold mb-4 uppercase">Company Address</h3>
          <ul className="space-y-3 text-sm">
            <li className="flex items-start"><FaMapMarkerAlt className="mt-1 mr-2" /> 39, Broadway str. 554304., New York, USA.</li>
            <li className="flex items-start"><FaPhoneAlt className="mt-1 mr-2" /> +1 (917) 3386810</li>
            <li className="flex items-start"><FaEnvelope className="mt-1 mr-2" /> support@test-demo.com</li>
            <li className="flex items-start"><FaFax className="mt-1 mr-2" /> +1 (917) 3386810</li>
          </ul>
        </div>

        {/* Popular Products */}
        <div>
          <h3 className="text-white font-bold mb-4 uppercase">Popular Products</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-white">Bootstrap responsive themes</a></li>
            <li><a href="#" className="hover:text-white">Black label - Mock-up</a></li>
            <li><a href="#" className="hover:text-white">HTML5 templates</a></li>
            <li><a href="#" className="hover:text-white">WordPress themes</a></li>
            <li><a href="#" className="hover:text-white">Joomla responsive templates</a></li>
            <li><a href="#" className="hover:text-white">Ecommerce templates</a></li>
          </ul>
        </div>

      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700 py-4 text-center text-xs text-gray-400">
        COPYRIGHT © 2020 WEB TECHNOLOGY S.R.O. ALL RIGHTS RESERVED
      </div>
    </footer>
  );
}
