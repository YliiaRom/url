import { Link, Outlet } from "react-router-dom";

export default function About() {
  return (
    <>
      <h2>About</h2>
      <Outlet />
      <ul>
        <li>
          <Link to="mission">Read about our mission</Link>
        </li>
        <li>
          <Link to="team">Get to know the team</Link>
        </li>
        <li>
          <Link to="reviews">Go through the reviews</Link>
        </li>
      </ul>
      <p>//App</p>
      <p>
        Використовуємо синтаксис оголошення вкладеного маршруту, компонент якого
        відображатиметься всередині батьківської сторінки. <br />
        <span>&lt;Route </span>
        <span> path="/</span>about" element=&#123;&lt;About /&gt;&#125;
        <span>&gt; </span>
        <br />
        декларативно вклали дочірні маршрути всередину батьківського
        <br />
        <span>&lt;Route </span>
        <span>path="</span>mission" element=&#123;&lt;Mission /&gt;&#125; /&gt;
        <br />
        &lt;Route path="team" element=&#123;&lt;Team /&gt;&#125; /&gt;
        <br />
        &lt;Route path="reviews" element=&#123;&lt;Reviews /&gt;&#125; /&gt;
        <br />
        <span>&lt;/Route&gt; </span>
        <br />
        Якщо <span>додати слеш</span>, то ми навпаки{" "}
        <span>створимо окремий маршрут</span>
      </p>
      <h3>About.jsx</h3>
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
        <span> &lt;Link to="</span>mission"&gt;Read about our
        mission&lt;/Link&gt; <br />
        &lt;/li&gt; <br />
        &lt;li&gt; <br />
        &lt;Link to="team"&gt;Get to know the team&lt;/Link&gt; <br />
        &lt;/li&gt; <br />
        &lt;li&gt; <br />
        &lt;Link to="reviews"&gt;Go through the reviews&lt;/Link&gt; <br />
        &lt;/li&gt; <br />
        &lt;/ul&gt; <br />
        <span> &lt;Outlet /&gt; </span>
        <br />
        &lt;/&gt; <br />
        ); <br />
        &#125;
      </p>
    </>
  );
}
