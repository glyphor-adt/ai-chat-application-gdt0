import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const FooterSection = () => {
  return (
    <footer className="bg-zinc-900 text-zinc-400 py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold text-zinc-100 mb-4">Contact Us</h3>
            <p>Email: info@example.com</p>
            <p>Phone: +1 555-123-4567</p>
            <p>Address: 123 Main St, Anytown USA</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-zinc-100 mb-4">Useful Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/terms" className="hover:text-zinc-300">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="hover:text-zinc-300">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/faq" className="hover:text-zinc-300">
                  FAQ
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-zinc-300">
                  About Us
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-zinc-100 mb-4">Connect</h3>
            <div className="flex space-x-4">
             <Button variant="outline" size="icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-4 w-4"
                >
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                </svg>
              </Button>

              <Button variant="outline" size="icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-4 w-4"
                >
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                </svg>
              </Button>
              <Button variant="outline" size="icon">
                 <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-4 w-4"
                >
                  <path d="M22 4c0-1.1-.9-2-2-2H4a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V4z" />
                  <line x1="18" x2="18" y1="2" y2="22" />
                  <line x1="12" x2="12" y1="2" y2="22" />
                  <line x1="6" x2="6" y1="2" y2="22" />
                </svg>
              </Button>
            </div>
          </div>
        </div>
        <div className="mt-8 text-center">
          <p>&copy; {new Date().getFullYear()} Example Company. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;