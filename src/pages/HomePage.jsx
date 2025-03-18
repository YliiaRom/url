import { useNavigate } from "react-router-dom";
export default function HomePage() {
  const navigate = useNavigate();
  return (
    <>
      <h2>
        <h2>Вітаємо на головній сторінці</h2>
      </h2>
      <button onClick={() => navigate("/about")}>
        Перейти на сторінку "Про нас"
      </button>
    </>
  );
}
