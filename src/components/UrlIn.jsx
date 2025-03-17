import css from "./UrlIn.module.css";
export default function UrlIn() {
  return (
    <div className={css.bordSection}>
      <h2>
        Вкладені маршрути- <br />
        описувати логіку «підсторінок»
      </h2>
      <p>
        URL по якому крім батьківського компонента цілої сторінки буде
        відображатися ще якийсь дочірній, вкладений компонент.
      </p>
      <p>
        Використовуємо синтаксис оголошення вкладеного маршруту, компонент якого
        відображатиметься всередині батьківської сторінки. <br />
        <span className={css.accent}>&lt;Route </span>
        <span className={css.bord}> path="/</span>about" element=&#123;&lt;About
        /&gt;&#125;<span className={css.accent}>&gt; </span>
        <br />
        декларативно вклали дочірні маршрути всередину батьківського
        <br />
        <span>&lt;Route </span>
        <span className={css.bord}>path="</span>mission"
        element=&#123;&lt;Mission /&gt;&#125; /&gt;
        <br />
        &lt;Route path="team" element=&#123;&lt;Team /&gt;&#125; /&gt;
        <br />
        &lt;Route path="reviews" element=&#123;&lt;Reviews /&gt;&#125; /&gt;
        <br />
        <span className={css.accent}>&lt;/Route&gt; </span>
        <br />
        Якщо <span>додати слеш</span>, то ми навпаки{" "}
        <span>створимо окремий маршрут</span>
      </p>
      <h2>&lt;Outlet&gt;.</h2>
      <p>
        {" "}
        вказати де саме в компоненті батьківського маршруту &lt;About&gt; ми
        хочемо рендерувати дочірні маршрут
      </p>
      <p>About.jsx</p>
      <p>
        <span>import &#123;(Link, Outlet)&#125; </span>from "react-router-dom";
      </p>
      <p>
        export default function About() &#123; <br />
        return ( <br />
        &lt;&gt; <br />
        &lt;h2&gt;About&lt;/h2&gt; <br />
        &lt;ul&gt; <br />
        &lt;li&gt; <br />
        <span className={css.bord}> &lt;Link to="</span>mission"&gt;Read about
        our mission&lt;/Link&gt; <br />
        &lt;/li&gt; <br />
        &lt;li&gt; <br />
        &lt;Link to="team"&gt;Get to know the team&lt;/Link&gt; <br />
        &lt;/li&gt; <br />
        &lt;li&gt; <br />
        &lt;Link to="reviews"&gt;Go through the reviews&lt;/Link&gt; <br />
        &lt;/li&gt; <br />
        &lt;/ul&gt; <br />
        <span className={css.bord}> &lt;Outlet /&gt; </span>
        <br />
        &lt;/&gt; <br />
        ); <br />
        &#125;
      </p>
      <p>
        Якщо <span>поточний URL</span> в адресному рядку браузера{" "}
        <span>
          збігається зі значенням пропсу path вкладеного маршруту,&lt;Outlet&gt;
        </span>{" "}
        <span>відрендерить</span> його компонент,{" "}
        <mark>інакше він рендерить null </mark>та не впливає на розмітку
        батьківського компонента.
      </p>
      <h3>ВІДНОСНІ ПОСИЛАННЯ</h3>
      <p>
        Зверніть увагу на значення пропсу to компонента &lt;Link&gt;. <br />
        Так само, як і path вкладеного маршруту,{" "}
        <span>значення пропсу to </span>вкладених посилань вказується{" "}
        <span>відносно поточного URL</span>. Компонент
        <mark>
          {" "}
          &lt;About&gt; рендерується на адресу /about, <br />
        </mark>{" "}
        тому посилання з <mark>to="mission" буде вести на /about/mission.</mark>
        <br />
        Якщо необхідно зробити <span>посилання на іншу сторінку</span>, тоді
        вказуйте <span>шлях повністю,</span>
        <mark> наприклад to="/products".</mark>
      </p>
    </div>
  );
}
