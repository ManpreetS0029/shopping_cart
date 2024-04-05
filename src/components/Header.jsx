import React from 'react';
import { NavLink } from 'react-router-dom';

function Header(props) {
  return (
    <>
      <div className="bg-white border-b pb-1 fixed top-0 w-full shadow-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-2 sm:px-6 lg:px-8">
          <div className="inline-flex items-center space-x-2">
            <span></span>
            <NavLink to="/">
              <span className="text-xl font-bold">Mobile Bazaar</span>
            </NavLink>
          </div>
          <div className="hidden lg:block">
            <ul className="inline-flex space-x-8">
              <li>
                <NavLink
                  to="/checkout"
                  className="text-sm font-semibold text-gray-800 hover:text-gray-900"
                >
                  <button
                    type="button"
                    className="relative inline-flex items-center p-3 text-sm font-medium text-center text-black rounded-lg"
                  >
                    <img src="cart.png" alt="" height={100} width={30} />
                    <div className="absolute inline-flex items-center justify-center w-6 h-6 text-xs font-bold text-white bg-red-500 border-2 border-white rounded-full -top-2 -end-2 dark:border-gray-900 mt-2">
                      {props.cartCount}
                    </div>
                  </button>
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
