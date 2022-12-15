import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="home">
      <h1> Hello there!</h1>
      <Link className="btn btn-primary" to="/catalog">
        {" "}
        Welcome to DINQ~
      </Link>
    </div>
  );
};

export default Home;
