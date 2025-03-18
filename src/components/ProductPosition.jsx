import { useSearchParams } from "react-router-dom";
import css from "./ProductPosition.module.css";
export default function ProductPosition() {
  const [searchParam, setSearchParams] = useSearchParams();

  const name = searchParam.get("name");
  const color = searchParam.get("color");
  const maxPrise = searchParam.get("maxPrise");

  const updateSearchParams = (key, value) => {
    const updateParam = new URLSearchParams(searchParam);
    updateParam.set(key, value);
    setSearchParams(updateParam);
  };
  return (
    <>
      <h4>Product </h4>
      <input
        type="text"
        value={name}
        onChange={(e) => {
          updateSearchParams("name", e.target.value);
        }}
      />
      <p>name: {name}</p>
      console.log(name);
      <p>color: {color}</p>
      <p>Maximum price: {maxPrise}</p>
    </>
  );
}
