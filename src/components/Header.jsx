import { useContext, useState } from "react";
import sun from "../assets/icons/sun.svg";
import logo from "../assets/logo.svg";
import ring from "../assets/ring.svg";
import cart from "../assets/shopping-cart.svg";
import { MovieContext } from "../context";
import CardDetails from "./cartDetails";
export default function Header() {
  const [showCart, setShowCart] = useState(false);
  const { cartData } = useContext(MovieContext);
  function handleShowCart(value) {
    setShowCart(value);
    console.log(cartData);
  }
  return (
    <header>
      {showCart && <CardDetails onClose={() => setShowCart(false)} />}
      <nav className="container mx-auto flex items-center justify-between space-x-10 py-6">
        <a href="index.html">
          <img src={logo} width="139" height="26" alt="logo" />
        </a>

        <ul className="flex items-center space-x-5">
          <li>
            <a
              className="bg-primary/20 dark:bg-primary/7% rounded-lg backdrop-blur-[2px] p-1 inline-block"
              href="#"
            >
              <img src={ring} width="24" height="24" alt="ring" />
            </a>
          </li>
          <li>
            <a
              className="bg-primary/20 dark:bg-primary/7% rounded-lg backdrop-blur-[2px] p-1 inline-block"
              href="#"
            >
              <img src={sun} width="24" height="24" alt="sun" />
            </a>
          </li>
          <li>
            <a
              onClick={() => handleShowCart(true)}
              className="bg-primary/20 dark:bg-primary/7% rounded-lg backdrop-blur-[2px] p-1 inline-block"
              href="#"
            >
              <img src={cart} width="24" height="24" alt="shopping cart" />
              {cartData.length > 0 && (
                <span className="rounded-full absolute top-3 left-7 bg-[#12CF6F] text-white text-center p-0.5 w-[30px] h-[30px]">
                  {cartData.length}
                </span>
              )}
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
