import { useState } from "react";
import { NavLink } from "react-router-dom";

const Navbar = ({ selectedLanguage, onLanguageChange }: any) => {
  const [dropdownOpen, setDropdownOpen] = useState<boolean>(false);

  return (
    <nav className="bg-indigo-700 border-b border-indigo-500 fixed top-0 left-0 right-0 z-50">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          <div className="flex flex-1 items-center justify-center md:items-stretch md:justify-start">
            <NavLink className="flex flex-shrink-0 items-center mr-4" to="/">
              <span className="hidden md:block text-white text-3xl font-bold ml-2">
                Koolitus
              </span>
            </NavLink>
            <div className="md:ml-auto">
              <div className="flex space-x-6 text-lg">
                <NavLink
                  to="/"
                  className={
                    "text-white hover:bg-gray-900 hover:text-white rounded-md px-3 py-2"
                  }
                >
                  Home
                </NavLink>
                <NavLink
                  to="/"
                  className={
                    "text-white hover:bg-gray-900 hover:text-white rounded-md px-3 py-2"
                  }
                  onClick={() => setDropdownOpen(!dropdownOpen)}
                >
                  Language
                </NavLink>
                {dropdownOpen && (
                  <div className="absolute right-28 mt-12 bg-white rounded-md shadow-lg">
                    <ul className="py-2">
                      <li>
                        <button
                          onClick={() => {
                            onLanguageChange("en");
                            setDropdownOpen(false);
                          }}
                          className={`block px-4 py-2 text-sm ${
                            selectedLanguage === "en" ? "font-bold" : ""
                          }`}
                        >
                          English (en)
                        </button>
                      </li>
                      <li>
                        <button
                          onClick={() => {
                            onLanguageChange("et");
                            setDropdownOpen(false);
                          }}
                          className={`block px-4 py-2 text-sm ${
                            selectedLanguage === "et" ? "font-bold" : ""
                          }`}
                        >
                          Estonian (et)
                        </button>
                      </li>
                      <li>
                        <button
                          onClick={() => {
                            onLanguageChange("ru");
                            setDropdownOpen(false);
                          }}
                          className={`block px-4 py-2 text-sm ${
                            selectedLanguage === "ru" ? "font-bold" : ""
                          }`}
                        >
                          Russian (ru)
                        </button>
                      </li>
                    </ul>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
