
import { createContext } from "react";

const DataContext = createContext({
cart:[],
user:{},
addProductToCart: () => {},
removeProductFromCart: () => {}
});


export default DataContext;