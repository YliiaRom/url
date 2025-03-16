import { useParams } from "react-router-dom";
import { getProductById } from "../fakeApi";

export default function ProductDetails() {
  const { id } = useParams();
  const product = getProductById(id);
  return (
    <>
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
      </div>
      <div>
        <img src="https://via.placeholder.com/960x240" alt="" />
        <div>
          <h2>
            Product - {product.name} - {id}
          </h2>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloribus
            sunt excepturi nesciunt iusto dignissimos assumenda ab quae
            cupiditate a, sed reprehenderit? Deleniti optio quasi, amet natus
            reiciendis atque fuga dolore? Lorem, ipsum dolor sit amet
            consectetur adipisicing elit. Impedit suscipit quisquam incidunt
            commodi fugiat aliquam praesentium ipsum quos unde voluptatum?
          </p>
        </div>
      </div>
    </>
  );
}
