import "./navBar.css";
import DataContext from "../state/dataContext";
import { useContext } from "react";
import { Link } from "react-router-dom";
function NavBar() {
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
    <nav className="navbar navbar-expand-lg navbar-dark">
      <div className="container-fluid">
        <Link className="navbar-brand" to="#">
          D!NQ
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="home">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link active"
                aria-current="page"
                to="catalog"
              >
                Shop
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="about">
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="admin">
                Admin
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="cart">
                Cart
              </Link>
            </li>
          </ul>
          <form className="d-flex" role="search">
            <Link className="btn btn-outline-primary" to="/cart">
              View Cart &nbsp;
              <span class="badge text-bg-secondary"> {countProducts()}</span>
            </Link>
          </form>
        </div>
      </div>
    </nav>
  );
}
export default NavBar;
