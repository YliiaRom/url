import { Link, NavLink } from "react-router-dom";
import About from "./About";
import ProductFirst from "../components/ProductFirst";

export default function Home() {
  return (
    <>
      <h3>Home</h3>
      <nav>
        <Link to="/">
          <Home />
        </Link>
        <Link to="/about">
          <About />
        </Link>
        <Link to="/products">
          <ProductFirst />
        </Link>
      </nav>
    </>
  );
}
