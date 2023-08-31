import { useState } from "react";
import { Outlet, Link } from "@tanstack/react-router";
import "./App.scss";

function App() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
      <header>
        <nav className="bg-white border-2 border-white border-b-blue-500">
          <div className="max-w-7xl mx-auto px-10">
            <div className="flex justify-between items-center h-24">
              <div className="flex-shrink-0">
                <a href="#" className="text-2xl font-normal text-blue-500">
                  Social Media
                </a>
              </div>

              <div className="hidden md:flex space-x-10">
                <Link
                  to="/"
                  className="text-gray-600 text-lg hover:text-blue-500"
                >
                  Home
                </Link>
                <Link
                  to="/profile"
                  className="text-gray-600 text-lg hover:text-blue-500"
                >
                  Profile
                </Link>
                <Link
                  to="/login"
                  className="text-gray-600 text-lg hover:text-blue-500"
                >
                  Login
                </Link>
                <input
                  type="text"
                  placeholder="Search"
                  className="px-2 border-blue-500 border-2 rounded-3xl font-light"
                />
              </div>

              <div className="md:hidden">
                <button
                  className="text-gray-600 hover:text-blue-500"
                  onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                  <svg
                    className="h-6 w-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    ></path>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </nav>
        {isMobileMenuOpen && (
          <div className="md:hidden text-center absolute  py-5 bg-white border-2 border-white border-b-blue-500 w-full z-10">
            <Link
              to="/"
              className="block text-gray-600 p-2 hover:text-blue-500 "
            >
              Home
            </Link>
            <Link
              to="/profile"
              className="block text-gray-600 p-2 hover:text-blue-500 my-2"
            >
              Profile
            </Link>
            <Link
              to="/login"
              className="block text-gray-600 p-2 hover:text-blue-500 my-2"
            >
              Login
            </Link>
            <input
              type="text"
              placeholder="Search"
              className="px-2 py-1 border-blue-500 border rounded-3xl"
            />
          </div>
        )}
      </header>
      <main>
        <Outlet />
      </main>
      <footer>
        <div className="text-center h-24 bg-blue-500 p-6 text-xl">
          <a
            href="#"
            className="font-light text-white hover:underline text-center"
          >
            Contact Us
          </a>
          <p className="font-light text-sm text-white">All rights reserved</p>
        </div>
      </footer>
    </>
  );
}

export default App;