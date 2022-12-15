import Product from "../components/product";
import "./catalog.css";
import { useEffect, useState } from "react";
import DataService from "../services/dataService";

function Catalog() {
  let [products, setProducts] = useState([]);

  // arrow function
  const loadCatalog = async () => {
    let service = new DataService();
    let prods = await service.getCatalog();
    setProducts(prods);
  };

  // exec when the component is displayed
  useEffect(() => {
    loadCatalog();
  }, []);

  return (
    <div className="catalog">
      <h1>Look at the Fashion!</h1>
      <h4>We have {products.length} products</h4>

      {products.map((prod) => (
        <Product data={prod} />
      ))}
      <div className="big-space"></div>
    </div>
  );
}
export default Catalog;
