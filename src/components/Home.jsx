import React, { useEffect, useState } from 'react';
import { CartProvider } from '../contexts';
import Header from './Header';

function Home() {
  const [items, setItems] = useState([]);

  const addItem = (item) => {
    setItems((prev) => [{ id: Date.now(), ...item }, ...prev]);
  };

  const add = (e) => {
    e.preventDefault();

    const productDiv = e.target.closest('.rounded-md.border');

    if (!productDiv) return;

    const productImage = productDiv.querySelector('img').getAttribute('src');
    const productName = productDiv.querySelector('h1').textContent;
    const productPrice = productDiv.querySelector('div .price').textContent;

    const newItem = {
      image: productImage,
      name: productName,
      price: productPrice,
    };

    setItems((prev) => [{ id: Date.now(), ...newItem }, ...prev]);
  };

  useEffect(() => {
    const items = JSON.parse(localStorage.getItem('items'));
    if (items && items.length > 0) {
      setItems(items);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('items', JSON.stringify(items));
  }, [items]);

  return (
    <>
      <CartProvider value={{ items, addItem }}>
        <Header cartCount={items.length} />
        <div className="flex justify-center items-center mt-12">
          <div className="mx-auto grid w-full max-w-7xl items-center space-y-4 px-2 py-10 md:grid-cols-2 md:gap-6 md:space-y-0 lg:grid-cols-4">
            <div className="rounded-md border">
              <img
                src="https://assets.mspimages.in/gear/wp-content/uploads/2024/03/Vivo-V30-India-Colour-Options-MySmartPrice.jpeg"
                alt="Laptop"
                className="aspect-[16/9] w-full rounded-md md:aspect-auto md:h-[300px] lg:h-[200px]"
              />
              <div className="p-4">
                <h1 className="inline-flex items-center text-lg font-semibold">
                  vivo V30 5G
                </h1>
                <div className="price">Rs 33,999</div>
                <p className="mt-3 text-sm text-gray-600">
                  Phone include a curved AMOLED display with 1.5K resolution,
                  Snapdragon 7 Gen 3 SoC, dual 50MP cameras on the rear, a 50MP
                  selfie camera, and more.
                </p>
                <button
                  type="button"
                  className="mt-4 w-full rounded-sm bg-black px-2 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                  onClick={add}
                >
                  Add to Cart
                </button>
              </div>
            </div>
            <div className="rounded-md border">
              <img
                src="https://assets.mspimages.in/gear/wp-content/uploads/2024/03/Phone-2a.jpeg"
                alt="Laptop"
                className="aspect-[16/9] w-full rounded-md md:aspect-auto md:h-[300px] lg:h-[200px]"
              />
              <div className="p-4">
                <h1 className="inline-flex items-center text-lg font-semibold">
                  Nothing Phone 2a
                </h1>
                <div className="price">Rs 23,999</div>
                <p className="mt-3 text-sm text-gray-600">
                  Phone include a 6.7-inch 10-bit flexible AMOLED display, 8GB
                  virtual RAM, an advanced cooling system, HyperEngine 5.0, and
                  more.
                </p>
                <button
                  type="button"
                  className="mt-4 w-full rounded-sm bg-black px-2 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                  onClick={add}
                >
                  Add to Cart
                </button>
              </div>
            </div>
            <div className="rounded-md border">
              <img
                src="https://assets.mspimages.in/gear/wp-content/uploads/2024/03/Realme-NARZO-70-Pro-5G-2.jpg"
                alt="Laptop"
                className="aspect-[16/9] w-full rounded-md md:aspect-auto md:h-[300px] lg:h-[200px]"
              />
              <div className="p-4">
                <h1 className="inline-flex items-center text-lg font-semibold">
                  Realme Narzo 70 Pro
                </h1>
                <div className="price">Rs 19,999</div>
                <p className="mt-3 text-sm text-gray-600">
                  It ships with a 6.67-inch OLED display, MediaTek Dimensity
                  7050 SoC, 50MP dual rear cameras, Android 14-based Realme UI,
                  and more.
                </p>
                <button
                  type="button"
                  className="mt-4 w-full rounded-sm bg-black px-2 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                  onClick={add}
                >
                  Add to Cart
                </button>
              </div>
            </div>
            <div className="rounded-md border">
              <img
                src="https://assets.mspimages.in/gear/wp-content/uploads/2024/01/001-4.png"
                alt="Laptop"
                className="aspect-[16/9] w-full rounded-md md:aspect-auto md:h-[300px] lg:h-[200px]"
              />
              <div className="p-4">
                <h1 className="inline-flex items-center text-lg font-semibold">
                  OnePlus 12R
                </h1>
                <div className="price">Rs 39,999</div>
                <p className="mt-3 text-sm text-gray-600">
                  The latest flagship killer from the brand brings all the
                  goodies to the table from a ProXDR LTPO AMOLED display and
                  50MP camera to a 5,500mAh battery and IP64 rating.
                </p>
                <button
                  type="button"
                  className="mt-4 w-full rounded-sm bg-black px-2 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                  onClick={add}
                >
                  Add to Cart
                </button>
              </div>
            </div>
            <div className="rounded-md border">
              <img
                src="https://assets.mspimages.in/gear/wp-content/uploads/2024/03/realme-12-plus-2.jpg"
                alt="Laptop"
                className="aspect-[16/9] w-full rounded-md md:aspect-auto md:h-[300px] lg:h-[200px]"
              />
              <div className="p-4">
                <h1 className="inline-flex items-center text-lg font-semibold">
                  Realme 12 Plus
                </h1>
                <div className="price">Rs 20,999</div>
                <p className="mt-3 text-sm text-gray-600">
                  Its highlighted features include a 120Hz AMOLED display, 50MP
                  rear cameras with OIS support, 67W fast charging, and more.
                </p>
                <button
                  type="button"
                  className="mt-4 w-full rounded-sm bg-black px-2 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                  onClick={add}
                >
                  Add to Cart
                </button>
              </div>
            </div>
            <div className="rounded-md border">
              <img
                src="https://assets.mspimages.in/gear/wp-content/uploads/2023/03/OnePlus-Nord-CE-3-Lite-MySmartPrice.png"
                alt="Laptop"
                className="aspect-[16/9] w-full rounded-md md:aspect-auto md:h-[300px] lg:h-[200px]"
              />
              <div className="p-4">
                <h1 className="inline-flex items-center text-lg font-semibold">
                  OnePlus Nord CE 3 Lite 5G
                </h1>
                <div className="price">Rs 20,000</div>
                <p className="mt-3 text-sm text-gray-600">
                  The highlights include an FHD+ display with a 120Hz refresh
                  rate, and a 108MP primary camera.
                </p>
                <button
                  type="button"
                  className="mt-4 w-full rounded-sm bg-black px-2 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                  onClick={add}
                >
                  Add to Cart
                </button>
              </div>
            </div>
            <div className="rounded-md border">
              <img
                src="https://assets.mspimages.in/gear/wp-content/uploads/2024/02/Redmi-Note-13-Feature-Image.png"
                alt="Laptop"
                className="aspect-[16/9] w-full rounded-md md:aspect-auto md:h-[300px] lg:h-[200px]"
              />
              <div className="p-4">
                <h1 className="inline-flex items-center text-lg font-semibold">
                  Xiaomi Redmi Note 13
                </h1>
                <div className="price">Rs 16,999</div>
                <p className="mt-3 text-sm text-gray-600">
                  The smartphone offers a 120Hz AMOLED display with FHD+ screen,
                  a Dimensity 6080 processor, a 100MP primary camera, a 5,000mAh
                  battery.
                </p>
                <button
                  type="button"
                  className="mt-4 w-full rounded-sm bg-black px-2 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                  onClick={add}
                >
                  Add to Cart
                </button>
              </div>
            </div>
            <div className="rounded-md border">
              <img
                src="https://assets.mspimages.in/gear/wp-content/uploads/2024/01/Moto-Edge-40-Neo-Peach-Fuzz-Colour.jpg"
                alt="Laptop"
                className="aspect-[16/9] w-full rounded-md md:aspect-auto md:h-[300px] lg:h-[200px]"
              />
              <div className="p-4">
                <h1 className="inline-flex items-center text-lg font-semibold">
                  Motorola Edge 40 Neo
                </h1>
                <div className="price">Rs 15,999</div>
                <p className="mt-3 text-sm text-gray-600">
                  At the time of its launch, the Edge 40 Neo was the only
                  smartphone in India with the Dimensity 7030 processor and
                  continues to be.
                </p>
                <button
                  type="button"
                  className="mt-4 w-full rounded-sm bg-black px-2 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                  onClick={add}
                >
                  Add to Cart
                </button>
              </div>
            </div>
            <div className="rounded-md border">
              <img
                src="https://assets.mspimages.in/gear/wp-content/uploads/2023/09/Moto-G54-5G-Colours.jpeg"
                alt="Laptop"
                className="aspect-[16/9] w-full rounded-md md:aspect-auto md:h-[300px] lg:h-[200px]"
              />
              <div className="p-4">
                <h1 className="inline-flex items-center text-lg font-semibold">
                  Moto G54
                </h1>
                <div className="price">Rs 13,999</div>
                <p className="mt-3 text-sm text-gray-600">
                  Highlights include a 120Hz IPS LCD panel, the Dimensity 7020
                  chipset, a beefy 6,000mAh battery, and more.
                </p>
                <button
                  type="button"
                  className="mt-4 w-full rounded-sm bg-black px-2 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                  onClick={add}
                >
                  Add to Cart
                </button>
              </div>
            </div>
            <div className="rounded-md border">
              <img
                src="https://assets.mspimages.in/gear/wp-content/uploads/2024/03/Samsung-Galaxy-F15-5G-Colour-Options-MySmartPrice.jpeg"
                alt="Laptop"
                className="aspect-[16/9] w-full rounded-md md:aspect-auto md:h-[300px] lg:h-[200px]"
              />
              <div className="p-4">
                <h1 className="inline-flex items-center text-lg font-semibold">
                  Samsung Galaxy F15
                </h1>
                <div className="price">Rs 12,999</div>
                <p className="mt-3 text-sm text-gray-600">
                  It offers a Super AMOLED high refresh rate display, Dimensity
                  6100+ chipset, triple rear camera setup with two 50MP lenses,
                  and a massive 6,000mAh battery.
                </p>
                <button
                  type="button"
                  className="mt-4 w-full rounded-sm bg-black px-2 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                  onClick={add}
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        </div>
      </CartProvider>
    </>
  );
}

export default Home;
