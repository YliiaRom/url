import HomePage from "../pages/HomePage";
import css from "./NavChange.module.css";

export default function NavChange() {
  return (
    <>
      <h2>Програмна навігація</h2>
      <p>
        навігація- у <span>відповідь на дії користувача або події</span>:
        натискання кнопки, відправлення форми, результат HTTP-запиту, таймер
        тощо
      </p>

      <div className={css.bordSection}>
        <h3 className={css.accent}>Імперативний підхід- useNavigate</h3>
        <p>
          Хук<span className={css.bord}> useNavigate()</span> повертає функцію{" "}
          <span className={css.bordSection}>navigate()</span>, яка виконує
          перехід на вказаний маршрут.
        </p>
        <h3 className={css.accent}>
          <mark> Автоматичний редірект через певний час</mark>-, після X секунд
          очікування користувача <mark>поверне на головну</mark>.
        </h3>
        <p>
          Якщо сторінки немає і потрібно автоматично повернути користувача.{" "}
          <br /> Для тимчасових повідомлень перед редіректом.
        </p>
        <div>
          <h4>\\NotFound.jsx</h4>
          <p>
            import<span> &#123; useEffect &#125;</span> from "react"; <br />
            import <span>&#123; useNavigate &#125;</span> from
            "react-router-dom"; <br />
          </p>
          <p>
            export const NotFound = () =&gt; &#123; <br />
            const <span>navigate = useNavigate();</span> <br /> <br />
            useEffect(() =&gt; &#123; <br />
            const timer = setTimeout(() =&gt; &#123; <br />
            <span className={css.bord}>
              navigate("/", &#123; replace: true &#125;);
            </span>{" "}
            <br />
            <mark>
              replace: true перезаписує поточну URL-сторінку в історії браузера,
              щоб користувач не міг повернутися назад.
            </mark>{" "}
            <br /> &#125;, 3000); <br />
            <span> return () =&gt; clearTimeout(timer);</span> <br />
            &#125;,<span className={css.accent}> [navigate]</span>); <br />
            return ....
          </p>
        </div>
        <h3>
          Редірект{" "}
          <span className={css.accent}>після натискання на кнопку</span>
        </h3>

        <div className={css.bord}>
          <HomePage />
        </div>
        <p>\pages\Homepage.jsx</p>

        <div>
          <p>
            import<span> &#123; useNavigate &#125; </span>from
            "react-router-dom"; <br />
          </p>
          <p>
            export default function HomePage() &#123; <br />
            const <span>navigate = useNavigate();</span> <br />
            return ( <br /> &lt;&gt; <br />
            &lt;h2&gt;Вітаємо на головній сторінці&lt;/h2&gt; <br />
            &lt;button <span>onClick=&#123;() </span>
            <span className={css.bord}>
              =&gt; navigate("/about")&#125;
            </span>&gt; <br /> Перейти на сторінку "Про нас" <br />{" "}
            &lt;/button&gt; <br /> &lt;/&gt; ); &#125;
          </p>
        </div>
        <p>
          Для кастомних кнопок або елементів, які повинні переміщати
          користувача. <br />
          Якщо &lt;Link&gt не підходить (наприклад, у формах).
        </p>
      </div>
      <div className={css.bordSection}>
        <p>
          useNavigate()- для редіректу після дії (натискання кнопки, відправки
          форми, запиту). <br />
          &lt;Navigate&gt;-для редіректу під час рендеру (захист сторінок,
          автоматичний перехід).
        </p>
        <h2>Декларативний підхід- &lt;Navigate&gt;</h2>
        <p>
          {" "}
          компонент Navigate -<span> обгортка </span>над хуком useNavigate.
        </p>
        <p>
          Шлях для навігації та необов'язкові{" "}
          <span>параметри передаються окремими пропсами</span>
        </p>
        <h3 className={css.accent}>Редірект при відсутності доступу</h3>
        <p>
          Наприклад, якщо користувач заходить на /dashboard, але не має доступу,
          ми перенаправимо його на /login
        </p>
        <p>
          {" "}
          import <span>&#123; useEffect &#125; </span>from "react"; <br />
          import<span> &#123; useNavigate &#125;</span> from "react-router-dom";
          <br />
          import &#123;<span> useUser</span> &#125; from "../context/
          <span>UserContext</span>
          ";
        </p>
        <p>
          <br /> export const Dashboard = () =&gt; &#123;
          <br /> const{" "}
          <span className={css.bord}>
            {" "}
            &#123; isLoggedIn &#125; = useUser();
          </span>
          <br /> const navigate = useNavigate();
          <br /> useEffect(() =&gt; &#123; <br /> if (!isLoggedIn) &#123;
          <br />
          <span className={css.bord}>
            navigate("/login", &#123; replace: true &#125;);{" "}
          </span>{" "}
          <br /> &#125; &#125; ,<span> [isLoggedIn, navigate] </span>);
          <br /> return &lt;h1&gt;Ласкаво просимо в особистий
          кабінет&lt;/h1&gt;;
          <br /> &#125;;
        </p>
      </div>
    </>
  );
}
