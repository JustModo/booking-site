import React from "react";

export default function Footer() {
  return (
    <footer className="bg-base-100 text-secondary py-8 mt-auto">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap">
          <div className="w-full sm:w-1/2 lg:w-1/4 mb-6">
            <h4 className="text-lg font-semibold mb-2">Company</h4>
            <ul>
              <li>
                <a href="#" className="hover:underline">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Press
                </a>
              </li>
            </ul>
          </div>
          <div className="w-full sm:w-1/2 lg:w-1/4 mb-6">
            <h4 className="text-lg font-semibold mb-2">Products</h4>
            <ul>
              <li>
                <a href="#" className="hover:underline">
                  Pricing
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Features
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Integrations
                </a>
              </li>
            </ul>
          </div>
          <div className="w-full sm:w-1/2 lg:w-1/4 mb-6">
            <h4 className="text-lg font-semibold mb-2">Support</h4>
            <ul>
              <li>
                <a href="#" className="hover:underline">
                  Help Center
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Status
                </a>
              </li>
            </ul>
          </div>
          <div className="w-full sm:w-1/2 lg:w-1/4 mb-6">
            <h4 className="text-lg font-semibold mb-2">Follow Us</h4>
            <ul>
              <li>
                <a href="#" className="hover:underline">
                  Twitter
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  LinkedIn
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Facebook
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 text-center">
          &copy; 2024 Your Company. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
