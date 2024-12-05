import {
    ShoppingCartIcon,
    HeartIcon,
    UserIcon,
    MagnifyingGlassIcon,
    } from "@heroicons/react/24/outline";
    
    export default function Navbar() {
        return (
        <header className="bg-white sticky top-0 z-10">
            <div className="container mx-auto flex items-center justify-between px-4 py-3">
                {/* Logo */}
                <div className="text-2xl font-bold text-black">DripLine</div>
        
                {/* Navigation Links */}
                <nav className="hidden md:flex gap-6 text-gray-700 font-medium">
                    <a href="#" className="hover:text-black">Women</a>
                    <a href="#" className="hover:text-black">Men</a>
                    <a href="#" className="hover:text-black">Kids</a>
                    <a href="#" className="hover:text-black">Sports</a>
                    <a href="#" className="hover:text-black">Brands</a>
                    <a href="#" className="hover:text-yellow-600 text-red-600">Sale</a>
                </nav>
    
                {/* Icons */}
                <div className="flex items-center gap-4">
                    {/* Search Bar */}
                    <div className="relative hidden lg:block w-full max-w-xs">
                    <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                        <MagnifyingGlassIcon className="h-5 w-5 text-gray" />
                    </span>
                    <input
                        type="text"
                        placeholder="Search"
                        className="block w-full pl-10 pr-3 py-2 bg-beige text-gray rounded-md focus:outline-none"
                    />
                    </div>
        
                    {/* Cart Icon */}
                    <a href="/cart" className="relative text-black">
                    <ShoppingCartIcon className="h-6 w-6" />
                    <span className="absolute -top-2 -right-2 bg-yellow-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                        3
                    </span>
                    </a>
        
                    {/* Heart Icon */}
                    <a href="/favorites" className="text-black">
                    <HeartIcon className="h-6 w-6" />
                    </a>
        
                    {/* Profile Icon */}
                    <a href="/profile" className="text-black">
                    <UserIcon className="h-6 w-6" />
                    </a>
                </div>
            </div>
                  {/* Divider */}
            <div className="w-full flex justify-center mt-2 bg-transparent border-0">
                <div className="h-[1px] w-[90%] bg-gray-300"></div>
            </div>
        </header>
        );
    }