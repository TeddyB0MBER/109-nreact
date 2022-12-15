import "./cart.css";
import { useContext } from "react";
import DataContext from "../state/dataContext";
import CartProduct from "../components/cartProduct";

const Cart = () => {
  const cart = useContext(DataContext).cart;
  const countProducts = () => {
    let total = 0;
    for (let i = 0; i < cart.length; i++) {
      const prod = cart[i];
      total += prod.quantity;
    }
    return total;
  };

  return (
    <div className="cart">
      <h1> Cart</h1>
      <h4> you have {countProducts()} items in the cart </h4>
      <div className="products">
        <h2>Products List</h2>
        <div className="inner-product">
          {cart.map((p) => (
            <CartProduct key={p._id} data={p} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Cart;
