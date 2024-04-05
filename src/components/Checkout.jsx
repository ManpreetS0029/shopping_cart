import React, { useState, useEffect } from 'react';
import { useCart } from '../contexts/CartContext';
import Header from './Header';

function Checkout() {
  const [cartItems, setCartItems] = useState([]);

  const { deleteItem } = useCart();

  const handleDelete = (id) => {
    console.log(id);
    setCartItems((prev) => prev.filter((item) => item.id !== id));

    // Remove item from localStorage
    const items = JSON.parse(localStorage.getItem('items'));
    const updatedItems = items.filter((item) => item.id !== id);
    localStorage.setItem('items', JSON.stringify(updatedItems));

    deleteItem(id);
  };

  useEffect(() => {
    const items = JSON.parse(localStorage.getItem('items'));
    if (items && items.length > 0) {
      setCartItems(items);
      console.log(items);
    }
  }, []);

  return (
    <>
      <Header cartCount={cartItems.length} />
      <section className="py-24">
        <div className="w-full max-w-7xl px-4 md:px-5 lg-6 mx-auto">
          <h2 className="title font-manrope font-bold text-4xl leading-10 mb-8 text-center text-black">
            Shopping Cart
          </h2>
          <div className="hidden lg:grid grid-cols-2 py-6">
            <div className="font-normal text-xl leading-8 text-gray-500">
              Product
            </div>
            <p className="font-normal text-xl leading-8 text-gray-500 flex items-center justify-between">
              <span className="w-full max-w-[200px] text-center">Price</span>
            </p>
          </div>

          {cartItems.map((item) => (
            <div
              key={item.id}
              className="grid grid-cols-1 lg:grid-cols-2 min-[550px]:gap-6 border-t border-gray-200 py-6"
            >
              <div className="flex items-center flex-col min-[550px]:flex-row gap-3 min-[550px]:gap-6 w-full max-xl:justify-center max-xl:max-w-xl max-xl:mx-auto">
                <div className="img-box">
                  <img
                    src={item.image}
                    alt="perfume bottle image"
                    className="xl:w-[140px]"
                  />
                </div>
                <div className="pro-data w-full max-w-sm ">
                  <h5 className="font-semibold text-xl leading-8 text-black max-[550px]:text-center">
                    {item.name}
                  </h5>
                </div>
              </div>
              <div className="flex items-center flex-col min-[550px]:flex-row w-full max-xl:max-w-xl max-xl:mx-auto gap-2">
                <h6 className="font-manrope font-bold text-2xl leading-9 text-black w-full max-w-[176px] text-center">
                  {item.price}{' '}
                  <span className="text-sm text-gray-300 ml-3 lg:hidden whitespace-nowrap">
                    (Delivery Charge)
                  </span>
                </h6>
                <button
                  type="button"
                  className="rounded-full bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                  onClick={() => handleDelete(item.id)}
                >
                  Delete
                </button>
              </div>
            </div>
          ))}

          <div className="flex items-center flex-col sm:flex-row justify-center gap-3 mt-8">
            <button className="rounded-full w-full max-w-[280px] py-4 text-center justify-center items-center bg-indigo-600 font-semibold text-lg text-white flex transition-all duration-500 hover:bg-indigo-700">
              Continue to Payment
              <svg
                className="ml-2"
                xmlns="http://www.w3.org/2000/svg"
                width="23"
                height="22"
                viewBox="0 0 23 22"
                fill="none"
              >
                <path
                  d="M8.75324 5.49609L14.2535 10.9963L8.75 16.4998"
                  stroke="white"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
        </div>
      </section>
    </>
  );
}

export default Checkout;
