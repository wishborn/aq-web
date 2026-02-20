"use client";

import Link from "next/link";
import NewsletterForm from "./NewsletterForm";
import QuickContactForm from "./QuickContactForm";

export default function Footer() {
  return (
    <footer
      className="bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage:
          "linear-gradient(rgba(184,188,201,0.92), rgba(184,188,201,0.92))",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold text-navy mb-4">Asset Quest</h3>
            <p className="text-navy-light text-sm">2180 W. First St, Suite 302</p>
            <p className="text-navy-light text-sm">Fort Myers, FL 33901</p>
            <p className="text-navy-light text-sm mt-2">
              <strong>Office:</strong>{" "}
              <a href="tel:2395418448" className="hover:underline">
                239-541-8448
              </a>
            </p>
            <p className="text-navy-light text-sm">
              <strong>Email:</strong> info@assetquest.com
            </p>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="text-sm font-bold text-navy uppercase tracking-wider mb-4">
              Company
            </h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/"
                  className="text-navy-light text-sm uppercase hover:underline"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/our-focus"
                  className="text-navy-light text-sm uppercase hover:underline"
                >
                  Our Focus
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-navy-light text-sm uppercase hover:underline"
                >
                  Contact
                </Link>
              </li>
            </ul>
            <Link
              href="/privacy-policy"
              className="text-accent text-sm mt-4 inline-block hover:underline"
            >
              Privacy Policy
            </Link>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-sm font-bold text-navy uppercase tracking-wider mb-4">
              Newsletter
            </h4>
            <NewsletterForm />
          </div>

          {/* Quick Contact */}
          <div>
            <h4 className="text-sm font-bold text-navy uppercase tracking-wider mb-4">
              Have a Question?
            </h4>
            <p className="text-navy-light text-sm mb-3">Contact Us!</p>
            <QuickContactForm />
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-gray-medium/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <ul className="flex flex-wrap justify-center gap-4 text-xs text-navy-light">
            <li>
              <Link href="#" className="hover:underline">
                Terms of Use
              </Link>
            </li>
            <li>
              <Link href="/privacy-policy" className="hover:underline">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:underline">
                CA Privacy Addendum (CCPA)
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:underline">
                Disclaimer
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
