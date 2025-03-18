import css from "./UpdateSingleParamExample.module.css";
import { useSearchParams } from "react-router-dom";
export default function UpdateSingleParamExample() {
  const [searchParams, setSearchParams] = useSearchParams();

  // Функція оновлення певного ключа
  const updateSearchParams = (key, value) => {
    // 1. Копіюємо існуючі параметри
    const updateParams = new URLSearchParams(searchParams);

    // 2. Оновлюємо певний ключ
    updateParams.set(key, value);

    //3. Застосовуємо зміни до URL
    setSearchParams(updateParams);
  };
  return (
    <div>
      <h3>Оновлення одного параметра в URL</h3>
      <p>Оновлення одного параметра в URL</p>
      <pre>{searchParams.toString()}</pre>
      <button onClick={() => updateSearchParams("name", "snickers")}>
        Змінити name на snickers
      </button>
      <button
        onClick={() => {
          updateSearchParams("maxPrice", 800);
        }}
      >
        Змінити maxPrice на 800
      </button>
      <button
        onClick={() => {
          updateSearchParams("inStock", false);
        }}
      >
        Змінити inStock на false
      </button>
    </div>
  );
}
