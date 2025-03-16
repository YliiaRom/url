import { Routes, Route, NavLink } from "react-router-dom";
import { useState } from "react";
import "./App.css";
import Url from "./components/url/url";
import UrlParam from "./components/UrlParam/UrlParam";
import Home from "./pages/Home";
import Products from "./pages/products";
import NotFound from "./pages/NotFound";
import About from "./pages/About";

import css from "./App.module.css";
import clsx from "clsx";
import ProductDetails from "./pages/ProductDetails";
import UrlIn from "./components/UrlIn/UrlIn";
import Mission from "./components/Mission/Mission";
import Team from "./components/Team/Team";
import Reviews from "./components/Reviews/Reviews";
import VercelOn from "./components/VercelOn/VercelOn";

const buildLinksClass = ({ isActive }) => {
  return clsx(css.link, isActive && css.active);
};
function App() {
  return (
    <>
      <VercelOn />
      <UrlIn />
      <Url />
      <div>
        <nav className={css.nav}>
          <NavLink to="/" className={buildLinksClass}>
            Home
          </NavLink>
          <NavLink to="/about" className={buildLinksClass}>
            About
          </NavLink>
          <NavLink to="/products" className={buildLinksClass}>
            Products
          </NavLink>
        </nav>
        <Routes>
          <Route path="/about" element={<About />}>
            <Route path="mission" element={<Mission />} />
            <Route path="team" element={<Team />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
          <Route path="/home" element={<Home />} />
          <Route path="/products" element={<Products />} />
          {/* <Route path="/products/:productId" elements={<ProductDetails />} /> */}
          <Route path="/products/:id" element={<ProductDetails />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
      <UrlParam />
    </>
  );
}

export default App;
