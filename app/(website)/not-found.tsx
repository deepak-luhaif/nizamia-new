import { Package, ShoppingBag, ShoppingCart } from 'lucide-react';
import Link from 'next/link';

export default function Custom404() {
  return (
    <div className="relative flex flex-col items-center justify-center h-screen bg-gradient-to-br from-pink-100 via-pink-200 to-purple-200 overflow-hidden">
      {/* Background Animation */}
      <div className="absolute inset-0 bg-gradient-to-r from-pink-300 via-purple-400 to-pink-500 opacity-30 animate-pulse blur-2xl"></div>

      {/* Content */}
      <div className="relative z-10 text-center">
        <h1 className="text-9xl font-extrabold text-pink-600 animate-bounce drop-shadow-lg transition-transform transform hover:scale-110 hover:rotate-1">
          404
        </h1>
        <p className="mt-4 text-2xl text-pink-800 font-medium drop-shadow-md transition-all hover:scale-105 hover:tracking-wider">
          Oops! The page you are looking for doesn’t exist.
        </p>
        <Link href="/" passHref>
          <div className="inline-block mt-8 px-6 py-3 text-lg font-semibold text-white bg-pink-600 rounded-md shadow-lg hover:bg-pink-700 transition-transform transform hover:scale-105 hover:shadow-2xl">
            Go Back to Home
          </div>
        </Link>
      </div>

      {/* Floating Icons */}
      <div className="absolute top-1/4 left-10 animate-float">
        <ShoppingCart className="w-12 h-12 text-pink-500 opacity-80" />
      </div>
      <div className="absolute bottom-1/4 right-16 animate-float-slow">
        <Package className="w-12 h-12 text-purple-500 opacity-80" />
      </div>
      <div className="absolute top-1/3 right-20 animate-float-fast">
        <ShoppingBag className="w-12 h-12 text-pink-400 opacity-80" />
      </div>
    </div>
  );
}
