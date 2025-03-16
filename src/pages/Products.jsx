import { ProductList } from "../components/ProductList/ProductList";
import { getProducts } from "../fakeApi";
import ProductDetails from "./ProductDetails";
import css from "../App.module.css";

export default function Products() {
  const product = getProducts();
  return (
    <>
      <h3>Products</h3>

      <p>
        App <br />
        &lt;Route path="/products" element=&#123;&lt;Products /&gt;&#125; /&gt;{" "}
        <br />
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
            export const <span className={css.accent}>getProducts = () </span>
            =&gt; &#123; <br />
            return products; <br />
            &#125; <br />
            export const <span className={css.accent}>getProductById =</span>
            <span className={css.bord}> (productId) </span>=&gt; &#123; <br />
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
        import <span className={css.accent}>&#123;getProducts&#125;</span> from
        "../fakeApi"; <br /> import ProductDetails from "./ProductDetails";
      </p>

      <p>
        ...<mark>function Products() </mark>&#123; <br />
        const <span className={css.accent}>product = getProducts();</span>{" "}
        <br />
        return ( <br />
        <span className={css.bord}>
          {" "}
          &lt;ProductList products=&#123;product&#125; /&gt;
        </span>
      </p>
      <b>2</b>
      <div>
        <p>
          <span> import &#123; Link &#125;</span> from "react-router-dom";{" "}
          <br />
          import css from "./ProductList.module.css"; <br />
        </p>
        export const<mark>
          {" "}
          ProductList = (&#123; products &#125;) =&gt;
        </mark>{" "}
        &#123; <br />
        return ( <br />
        &lt;div&gt; <br />
        &#123;products.map((product) =&gt; ( <br />
        &lt;div key=&#123;product.id&#125; &gt; <br />
        <span>&lt;Link to=&#123;`$&#123;</span>
        product.id&#125;`&#125;&gt;
        <br />
        &lt;img src="https://via.placeholder.com/200x100" alt="" /&gt; <br />
        &lt;h3&gt; &gt;&#123;product.name&#125;&lt;/h3&gt; <br />
        <span>&lt;/Link&gt;</span> <br />
        &lt;/div&gt;
        <br />
        ))&#125; <br />
        &lt;/div&gt; <br />
        );
        <br />
        &#125;; <br />
      </div>

      <ProductList products={product} />
    </>
  );
}
