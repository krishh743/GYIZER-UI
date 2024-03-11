import React from "react";

function Header() {
  return (
    // className="flex justify-start items-center rounded-b-lg bg-[#242320] border-[2px] border-primary sticky top-0 z-10"
    // style={{ zIndex: 1 }}
    <header>
      <nav className=" px-4 lg:px-6 py-4   rounded-b-lg bg-[#242320] border-[2px]  border-primary sticky top-0 z-10" style={{ zIndex: 1 }}>
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
          <div className="flex justify-start items-start">
            {/* Show Hamburger Menu Icon for Mobile View */}
            <button
              className="lg:hidden p-2 ml-1 text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-label="Open main menu"
            >
              <svg
                className="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </button>
            {/* Logo - Visible in Desktop/Web View */}
            <a href="#" className="hidden lg:flex items-center">
              <img
                src="/images/logo.svg"
                className="mr-3 h-6 sm:h-9"
                alt="Flowbite Logo"
              />
            </a>
          </div>

          <div className="block lg:hidden">
            <span className="text-xl font-semibold dark:text-white">
              Todo List
            </span>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
