import { Routes, Route, NavLink } from "react-router-dom";
import { createContext, useContext, useState } from "react";
import UrlOn from "./UrlOn";
import Home from "../pages/Home";
import NavChange from "./NavChange";

import NotFound from "../pages/NotFound";
import About from "../pages/About";

import css from "./App.module.css";
import clsx from "clsx";
import ProductDetails from "../pages/ProductDetails";

import UrlParam from "./UrlParam";
import UrlIn from "./UrlIn";
import Mission from "./Mission";
import Team from "./Team";
import Reviews from "./Reviews";
import VercelOn from "./VercelOn";
import ProductFirst from "./ProductFirst";
import Products from "../pages/Products";
import HomePage from "../pages/HomePage";
import InputParam from "./InputParam";

const UserContext = createContext(null);

export const useUser = () => {
  useContext(UserContext);
};
export const UserProvider = ({ children }) => {
  const [user, setUser] = useState({ name: "Alice", loggedIn: true });
  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

const buildLinksClass = ({ isActive }) => {
  return clsx(css.link, isActive && css.active);
};
export default function App() {
  return (
    <>
      <InputParam />
      <NavChange />
      <VercelOn />

      <UrlIn />
      <UrlOn />

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
          <NavLink to="/homepage" className={buildLinksClass}>
            HomePage
          </NavLink>
        </nav>
        <Routes>
          <Route path="/about" element={<About />}>
            <Route path="mission" element={<Mission />} />
            <Route path="team" element={<Team />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
          <Route path="/home" element={<Home />} />
          <Route patch="/productfirst" element={<ProductFirst />} />
          <Route path="/products" element={<Products />} />

          <Route path="/products/:id" element={<ProductDetails />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/homepage" element={<HomePage />} />
        </Routes>
      </div>
      <UrlParam />
    </>
  );
}
