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
    title: "Makima",
    image: "makima.png",
    category: "Vegetable",
  },
  {
    _id: "5",
    price: 16.39,
    title: "Hoodie",
    image: "uchiha.png",
    category: "Fruit",
  },
  {
    _id: "6",
    price: 14.0,
    title: "Mugiwara",
    image: "mugiwaraGray.png",
    category: "Fruit",
  },
  {
    _id: "7",
    price: 12.0,
    title: "MugiwaraRed",
    image: "mugiwarRed.png",
    category: "Dairy & Eggs",
  },
  {
    _id: "8",
    price: 19.1,
    title: "Street-Plaid",
    image: "yor.jpg",
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
