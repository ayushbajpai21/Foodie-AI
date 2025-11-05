import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import Footer from "./Footer";
import Nav from "./Nav";

export default function CartPage() {
  const { cart, increaseQty, decreaseQty, removeFromCart, totalPrice } = useCart();

  return (
    <>
      <Nav />
      <div className="p-6 max-w-3xl mx-auto">
        <h2 className="text-2xl font-bold mb-4">Your Cart</h2>

        {cart.length === 0 ? (
          <p className="text-gray-500">No items in cart 😢</p>
        ) : (
          <>
            <div className="space-y-4">
              {cart.map((item) => (
                <div
                  key={item.id}
                  className="flex justify-between items-center border-b py-3"
                >
                  <div>
                    <h3 className="font-semibold">{item.name}</h3>
                    <p>₹{item.price}</p>
                  </div>

                  <div className="flex items-center gap-3">
                    <button
                      onClick={() => decreaseQty(item.id)}
                      className="bg-gray-300 px-2 rounded hover:bg-gray-400"
                    >
                      -
                    </button>
                    <span>{item.quantity}</span>
                    <button
                      onClick={() => increaseQty(item.id)}
                      className="bg-gray-300 px-2 rounded hover:bg-gray-400"
                    >
                      +
                    </button>
                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="text-red-500 ml-3 hover:underline"
                    >
                      Remove
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Total Price Section */}
            <div className="mt-6 text-right">
              <h3 className="text-xl font-bold">Total: ₹{totalPrice}</h3>
            <Link to='/payment'> <button className="bg-green-600 text-white px-4 py-2 rounded mt-2 hover:bg-green-700">
                Proceed to Checkout
              </button></Link> 
            </div>
          </>
        )}
      </div>
      <Footer/>
    </>
  );
}
