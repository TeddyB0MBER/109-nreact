import axios from "axios";

const catalog = [
  {
    _id: "1",
    price: 12.32,
    title: "Hokusai",
    image: "hokusai.jpg",
    category: "Vegetable",
  },
  {
    _id: "2",
    price: 22.71,
    title: "Ramlethal",
    image: "ramlethal.jpg",
    category: "Fruit",
  },
  {
    _id: "3",
    price: 32.0,
    title: "Skadi",
    image: "skadi.jpg",
    category: "Vegetable",
  },
  {
    _id: "4",
    price: 6.99,
    title: "Carrot",
    image: "img-4.jpg",
    category: "Vegetable",
  },
  {
    _id: "5",
    price: 16.39,
    title: "Banana",
    image: "img-5.jpg",
    category: "Fruit",
  },
  {
    _id: "6",
    price: 14.0,
    title: "Orange",
    image: "product-10.jpg",
    category: "Fruit",
  },
  {
    _id: "7",
    price: 12.0,
    title: "Egg",
    image: "img-15.jpg",
    category: "Dairy & Eggs",
  },
  {
    _id: "8",
    price: 19.1,
    title: "Orange Juice",
    image: "product-15.jpg",
    category: "Beverages",
  },
];

class DataService {
  async getCatalog() {
    return catalog;
    // TODO: get the catalog from the server
    //let result = await axios.get("http://127.0.0.1:5000/api/catalog");
    //return result.data;
  }

  async saveProduct(product) {
    let result = await axios.post(
      "http://127..0.0.1:5000/api/catalog",
      product
    );
    return result.data;
  }

  async getCoupon() {
    try {
      let result = await axios.get("http://127.0.0.1:5000/api/coupons");
      return result.data;
    } catch {
      return [];
    }
  }
}

export default DataService;
