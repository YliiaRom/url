import css from "./url.module.css";
export default function Url() {
  return (
    <div className={css.bordSection}>
      <h2>Структура URL-рядка</h2>

      <p> https://example.com:8080/path/to/page?query=value#section</p>
      <ul>
        <li>
          https:// -<span> протокол</span>
        </li>
        <li>
          mysite.com/ - <span>хост</span>
        </li>
        <li>books/e3q76gm9lzk - шлях, то, де ми знаходимося у додатку</li>
        <li>
          e3q76gm9lzk - <span className={css.bord}>url-параметр</span>.
          Параметри бувають динамічними або статичними
        </li>
        <li>? - символ початку рядка запиту</li>
        <li>?category=adventure&status=unread - рядок запиту</li>
        <li>category=adventure - пара параметр=значення</li>
        <li>& - символ "І", розділяє параметри рядка запиту</li>
        <li></li>
        <li>
          #comments - <span className={css.bord}>якір (хеш)</span>, визначає
          положення на сторінці
        </li>
      </ul>
      <h3>
        <span>Історія навігації</span>- як ми переходимо по маршрутах
        (посиланням) додатків в поточній вкладці браузера
      </h3>
      <a
        href="https://blog.pshrmn.com/a-little-bit-of-history/"
        target="_blank"
        rel="noopener noreferrer"
      >
        як ці переходи зберігаються та обробляються.
      </a>
      <div className={css.bord}>
        <h2>React Router</h2>

        <p>
          У<mark> React немає вбудованого модуля маршрутизації</mark>, тому
          використовується
          <a
            href="https://reactrouter.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            React Router
          </a>
          - Бібліотека маршрутизації для React
        </p>
        <p>
          React Router надає набір компонентів та хуків{" "}
          <mark> для створення маршрутизації</mark>, управління історією
          навігації користувача та відображення різних компонетів в залежності
          від поточного значення URL в адресному рядку браузера
        </p>
        <p>npm install react-router-dom</p>
      </div>
      <div className={css.bord}>
        <h2>Компонент &lt;BrowserRouter&gt;</h2>
        <p>
          Створює маршуртизатор та об'єкт історії навігації, щоб синхронізувати
          інтерфейс із URL-адресою.
        </p>
        <p>
          <mark>
            передає інформацію про поточний стан історії навігації всім
            нащадкам.
          </mark>
        </p>
        <ul>
          <li>
            <p>index.js</p>
          </li>
          <li>
            <p>
              <span>
                import &#123;BrowserRouter&#125; from "react-router-dom";
              </span>
            </p>
          </li>
          <li>
            <p>ReactDOM.createRoot(document.getElementById("root")).render(</p>
          </li>
          <li>
            <p> &lt;React.StrictMode&gt;</p>
          </li>
          <li>
            <p>
              <span>&lt;BrowserRouter&gt;</span>
            </p>
          </li>
          <li>
            <p>&lt;App /&gt;</p>
          </li>
          <li>
            <p>
              <span> &lt;/BrowserRouter&gt;</span>
            </p>
          </li>
          <li>
            <p> &lt;/React.StrictMode&gt;</p>
          </li>
          <li>
            <p>);</p>
          </li>
        </ul>
      </div>
      <div className={css.bord}>
        <h2>Компоненти &lt;Route&gt; та &lt;Routes&gt;</h2>
        <p>
          Компонент сторінки який містить у собі розмітку цілої сторінки вашої
          програми.зберігаються- у папці
          <span> src/pages.</span>
        </p>
        <p>
          <span>&lt;Route&gt;</span> дозволяє{" "}
          <span className={css.bord}>
            пов'язати певний URL з деяким компонентом
          </span>
        </p>
        <p>
          приклад- відображати компонент &lt;About&gt; коли користувач
          переходить шляхом /about
        </p>
        <p>
          Групу маршрутів обов'язково{" "}
          <span>має обертати компонент &lt;Routes&gt;</span>, навіть якщо
          маршрут лише один
        </p>
        <p>import &#123;(Routes, Route)&#125; from "react-router-dom";</p>
        <p>
          &lt;Routes&gt;
          <br />
          &lt;Route
          <span className={css.bord}> path= "/</span>about"{" "}
          <span className={css.bord}>element= &#123;</span>
          <span> &lt;About /&gt; &#125;;</span> /&gt; <br />
          &lt;/Routes&gt;
        </p>
        <p>
          {" "}
          &lt;Route&gt;{" "}
          <span className={css.bord}>
            рендерить що зазначено у пропсі element
          </span>
          <mark>
            якщо його path збігається з поточним значенням pathname в адресному
            рядку браузера
          </mark>
          , або <span className={css.bord}>null, якщо не збігається</span>
        </p>
      </div>
      <div className={css.bord}>
        <h2>
          Посилання на різні сторінки нашої програми&lt;Link&gt; та
          &lt;NavLink&gt;
        </h2>
        <p>
          <span className={css.bord}>рендерять тег &lt;a&gt; </span>=
          оновлюється URL в адресному рядку браузера, без перезавантаження
          сторінки.
        </p>
        <p>
          import<span> &#123; Link, NavLink &#125;</span> from
          "react-router-dom";
        </p>
        <p>
          &lt;nav&gt; <br />{" "}
          <span>
            &lt;Link <span className={css.bord}>to="/"</span>
          </span>
          &gt; &lt;Home /&gt; &lt;/Link&gt; <br />
          <span> &lt;Link to="/</span>about"&gt; &lt;About /&gt; &lt;/Link&gt;{" "}
          <br />
          <span> &lt;Link to="/</span>products"&gt; &lt;Products /&gt;
          &lt;/Link&gt; &lt;/nav&gt;
        </p>
        <p>
          Компонент<span> &lt;NavLink&gt;</span> відрізняється тільки тим, що
          <mark>може мати додаткові стилі</mark>, якщо поточний URL збігається
          зі значенням пропcа to. За замовчуванням{" "}
          <mark>елементу активного посилання додається клас active. </mark>Це
          можна використовувати для її стилізації.
        </p>
        <p>/App.jsx</p>
        <p>
          <span> import &#123;(Routes, Route, NavLink)&#125; </span>from
          "react-router-dom"; <br />
          import css from "./App.module.css"; <br />
          import clsx from "clsx";
        </p>
        <p>
          const buildLinksClass = (&#123;isActive &#125;) =&gt; &#123; <br />
          return clsx(css.link, isActive && css.active); <br />
          &#125;;
        </p>
        <p>
          function App() &#125; <br />
          return ( <br />
          &lt;&gt; <br />
          &lt;Url /&gt; <br />
          &lt;div&gt; <br />
          <span className={css.accent}> &lt;nav </span>
          className=&#123;css.nav&#125;&gt; <br />
          <span className={css.bord}> &lt;NavLink to="/"</span>
          &gt;Home&lt;/NavLink&gt;
          <br />
          <span>&lt;NavLink to="/a</span>bout"&gt;About&lt;/NavLink&gt;
          <br />
          <span>&lt;NavLink to="/</span>products"&gt;Products&lt;/NavLink&gt;
          <br />
          <span className={css.accent}> &lt;/nav&gt;</span>
          <br />
          <span className={css.bord}> &lt;Routes&gt;</span>
          <br />
          <span lassName={css.bord}> &lt;Route path="/</span>about"
          element=&#123;&lt;About /&gt;&#125; /&gt;
          <br />
          <span>&lt;Route path="/</span>home" element=&#123;&lt;Home /&gt;&#125;
          /&gt;
        </p>
      </div>
    </div>
  );
}
