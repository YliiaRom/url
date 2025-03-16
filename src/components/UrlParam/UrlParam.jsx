import css from "./UrlParam.module.css";
export default function UrlParam() {
  return (
    <div className={css.bordSection}>
      <h2>
        URL-параметри <br /> :
      </h2>
      <p>: - якась частина адреси, це URL-параметр</p>
      <p>
        /products<span className={css.bord}>/:</span>productId
      </p>
      <p> /products/1, /proudcts/2 </p>
      <p>
        Динамічні параметри схожі на параметри функції - у них завжди{" "}
        <span className={css.bord}>
          одна назва, але можуть бути різні значення.
        </span>
      </p>
      <p>
        оголосити один <span>маршрут з динамічним параметром </span>по якому
        визначатимемо яку посаду необхідно відображати саме зараз
      </p>
      <p>
        &lt;Route path="/blog/:postId" element= &#123; &gt;BlogPost /&lt; &#125;
        /&gt;
      </p>
      <p>/App.jsx</p>
      <p>import ProductDetails from "./pages/ProductDetails";</p>
      <p>
        &lt;Route path="/products<span>/:productId</span>"
        element=&#123;&lt;ProductDetails /&gt;&#125; /&gt;
      </p>
      <h2>Хук useParams</h2>
      <p>
        Повертає<span> об'єкт з усіма динамічними параметрами,</span> які є в
        поточному URL.
      </p>
      <p>
        Ім'я параметра буде ім'ям властивості в об'єкті, а його поточне значення
        в адресі - значенням властивості
      </p>
      <div>
        <p>//fakeApi.js</p>
        <p>
          export const <span>getProductById = (productId) =&gt;</span> &#123;{" "}
          <br />
          return products.find((product) =&gt;{" "}
          <span>product.id === productId</span>
          ); <br />
          &#125;;
        </p>
        <h3>//ProductDetails</h3>
        <p>
          import &#123; useParams &#125;from "react-router-dom"; <br />
          import<span> &#123; getProductById &#125;</span>from "../fakeApi";{" "}
          <br />
        </p>
        <p>
          export default function ProductDetails() &#123; <br />
          const<span>&#123; id &#125;= useParams();</span> <br />
          const product = <span>getProductById(id); </span>
          <br />
          return (.... <br />
          Product - &#123;product.name&#125; - &#123;id&#125;
        </p>
        <div>
          {" "}
          <h3>Products</h3>
          <p>
            App <br />
            &lt;Route path="/products" element=&#123;&lt;Products /&gt;&#125;
            /&gt; <br />
            &lt;Route path="/products/:id" element=&#123;&lt;ProductDetails
            /&gt;&#125; /&gt;
          </p>
          <details>
            <summary>fakeApi.js</summary>
            <div className={css.bord}>
              <span className={css.accent}> //fakeApi.js</span>
              <p>
                &lt;const <span>products </span>= [ <br />
                &#123; id: "h-1", name: "Hoodie 1" &#125, <br />
                &#123; id: "h-2", name: "Hoodie 2" &#125, <br />
                &#123; id: "h-3", name: "Hoodie 3" &#125, <br />
                &#123; id: "s-1", name: "Sneakers 1" &#125, <br />
                &#123; id: "s-2", name: "Sneakers 2" &#125, <br />
                &#123; id: "s-3", name: "Sneakers 3" &#125, <br />
                &#123; id: "s-4", name: "Sneakers 4" &#125, <br />
                &#123; id: "p-1", name: "Pants 1" &#125, <br />
                &#123; id: "p-2", name: "Pants 2" &#125, <br />
                &#123; id: "p-3", name: "Pants 3" &#125, <br />
                ];
              </p>
              <p>
                export const{" "}
                <span className={css.accent}>getProducts = () </span>
                =&gt; &#123; <br />
                return products; <br />
                &#125; <br />
                export const{" "}
                <span className={css.accent}>getProductById =</span>
                <span className={css.bord}> (productId) </span>=&gt; &#123;{" "}
                <br />
                return products<span className={css.bord}>.find(</span>(product)
                =&gt; product.id === productId); <br />
                &#125;
              </p>
            </div>
          </details>
          <h3>1-Products</h3>
          <p>
            <span> import &#123;ProductList&#125;</span> from
            "../components/ProductList/ProductList"; <br />
            import <span className={css.accent}>
              &#123;getProducts&#125;
            </span>{" "}
            from "../fakeApi"; <br /> import ProductDetails from
            "./ProductDetails";
          </p>
          <p>
            ...<mark>function Products() </mark>&#123; <br />
            const <span className={css.accent}>
              product = getProducts();
            </span>{" "}
            <br />
            return ( <br />
            <span className={css.bord}>
              {" "}
              &lt;ProductList products=&#123;product&#125; /&gt;
            </span>
          </p>
          <b>2</b>
          <div className={css.bord}>
            <p>
              <span> import &#123; Link &#125;</span> from "react-router-dom";{" "}
              <br />
              import css from "./ProductList.module.css"; <br />
            </p>
            export const
            <mark>
              {" "}
              ProductList = (&#123; products &#125;) =&gt;
            </mark> &#123; <br />
            return ( <br />
            &lt;div&gt; <br />
            &#123;products.map((product) =&gt; ( <br />
            &lt;div key=&#123;product.id&#125; &gt; <br />
            <span className={css.bord}>&lt;Link to=&#123;`$&#123;</span>
            product.id&#125;`&#125;&gt;
            <br />
            &lt;img src="https://via.placeholder.com/200x100" alt="" /&gt;{" "}
            <br />
            &lt;h3&gt; &gt;&#123;product.name&#125;&lt;/h3&gt; <br />
            <span className={css.bord}>&lt;/Link&gt;</span> <br />
            &lt;/div&gt;
            <br />
            ))&#125; <br />
            &lt;/div&gt; <br />
            );
            <br />
            &#125;; <br />
          </div>
        </div>
      </div>
    </div>
  );
}
