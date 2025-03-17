import { Routes, Route, NavLink } from "react-router-dom";
import { useState } from "react";
import UrlOn from "./UrlOn";
import Home from "../pages/Home";

import NotFound from "../pages/NotFound";
import About from "../pages/About";

import css from "./App.module.css";
// import clsx from "clsx";
// import ProductDetails from "../pages/ProductDetails";

// import UrlParam from "./UrlParam";
// import UrlIn from "./UrlIn";
import Mission from "./Mission";
import Team from "./Team";
import Reviews from "./Reviews";
import VercelOn from "./VercelOn";
// import Products from "../pages/Products";

// const buildLinksClass = ({ isActive }) => {
//   return clsx(css.link, isActive && css.active);
// };
export default function App() {
  return (
    <>
      <VercelOn />
      {/* <UrlIn /> */}
      <UrlOn />
      <div>
        {/* <nav className={css.nav}>
          <NavLink to="/" className={buildLinksClass}>
            Home
          </NavLink>
          <NavLink to="/about" className={buildLinksClass}>
            About
          </NavLink>
          <NavLink to="/products" className={buildLinksClass}>
            Products
          </NavLink>
        </nav> */}
        <Routes>
          <Route path="/about" element={<About />}>
            <Route path="mission" element={<Mission />} />
            <Route path="team" element={<Team />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
          <Route path="/home" element={<Home />} />
          {/* <Route path="/products" element={<Products />} />

          <Route path="/products/:id" element={<ProductDetails />} /> */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
      {/* <UrlParam /> */}
    </>
  );
}
