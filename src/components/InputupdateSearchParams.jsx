import { useEffect, useState } from "react";
import { getProducts } from "../fakeApi";
import css from "./InputupdateSearchParams.module.css";
import { useSearchParams } from "react-router-dom";
export default function InputupdateSearchParams() {
  const [user, setUser] = useState(null);
  const [searchParam, setSearchParams] = useSearchParams();
  const username = searchParam.get("username");
  useEffect(() => {
    // Тут виконуємо асинхронну операцію,
    // наприклад HTTP-запит за інформацією про користувача
    if (username === "") {
      return;
    }
    getProducts.getUser(username).then(setUser);
  }, [username]);
  const updateSearchParams = (key, value) => {
    const updateParam = new URLSearchParams(searchParam);
    updateParam(key, value);
    setSearchParams(updateParam);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    updateSearchParams("username", form.elements.username.value);
    form.reset();
  };

  return (
    <>
      <form action="#" onSubmit={handleSubmit}>
        <input type="text" name="username" />
        <button>Search</button>
      </form>
      {user && <p> Yes-user</p>}
    </>
  );
}
