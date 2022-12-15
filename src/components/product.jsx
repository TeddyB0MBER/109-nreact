import "./product.css";
import QuantityPicker from "./quantityPicker";
import { useState } from "react";
import DataContext from "../state/dataContext";
import { useContext } from "react";

const Product = (props) => {
  const addProd = useContext(DataContext).addProductToCart;

  const handleAdd = () => {
    let prodForCart = { ...props.data };
    prodForCart.quantity = quantity;
    addProd(prodForCart);
  };

  const [quantity, setQuantity] = useState(1);

  const handleQuantityChange = (qty) => {
    console.log("quantity change", qty);
    setQuantity(qty);
  };

  const getTotal = () => {
    const total = quantity * props.data.price;
    return total.toFixed("2");
  };
  return (
    <div className="product">
      <img src={"/images/" + props.data.image} alt="" />

      <h5>{props.data.title}</h5>

      <div className="prices">
        <label className="total"> {getTotal()}</label>
        <label className="price"> ${props.data.price.toFixed("2")}</label>
      </div>
      <div className="controls">
        <QuantityPicker onChange={handleQuantityChange} />
      </div>
      <button onClick={handleAdd} className="btn btn-sm btn-info">
        Add
      </button>
    </div>
  );
};
export default Product;

/**
 * create a QuantityPicker component
 *  with button / label / button
 *
 * Render QuantityPicker on Product component
 */
