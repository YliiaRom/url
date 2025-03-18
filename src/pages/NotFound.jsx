import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function NotFound() {
  // const navigate = useNavigate();
  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     navigate("/", { replace: true });
  //   }, 3000);

  //   return clearTimeout(timer);
  // }, [navigate]);
  return (
    <>
      <h2>
        Сторінка помилки навігації <br /> path="*"
      </h2>
      <p>
        <mark>
          якщо користувач перейде за посиланням якого немає в нашому додатку
        </mark>
      </p>
      <p>
        до кінця списку маршрутів додамо ще один &lt;Route&gt;, який
        збігатиметься з будь-яким URL, але він буде обраний тільки в тому
        випадку, якщо жоден інший маршрут не підійде.
      </p>
      <p>
        <span>import </span>NotFound from "<span>path/to</span>
        /pages/NotFound"; <br />
        (import NotFound from "./pages/NotFound";) <br />
      </p>
      <p>
        const App = () =&gt; &#123; <br />
        return (... <br />
        &lt;Routes&gt; <br />
        &lt;Route <span>path="*"</span>element=&#123; &lt;NotFound /&gt; &#125;
        /&gt;
      </p>
    </>
  );
}
