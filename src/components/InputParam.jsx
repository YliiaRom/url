import css from "./InputParam.module.css";
import InputupdateSearchParams from "./InputupdateSearchParams";
import ProductPosition from "./ProductPosition";
import UpdateSingleParamExample from "./UpdateSingleParamExample";

export default function InputParam() {
  return (
    <>
      <h2>
        ? x=y &
        <br />
        Рядок запиту
      </h2>
      <p> він дозволяє передавати стан програми через URL-адресу</p>
      <p>
        починається символом <span className={css.bord}>? </span>і містить один
        або більше параметрів у форматі «ключ-значення» розділених символом
        <span className={css.bord}>&</span>
      </p>
      <p>
        <mark>хук useState добре для одного користувача</mark>, але
        <span>погано для спільної роботи</span> з іншими користувачами
      </p>
      <div className={css.bord}>
        <h2> хук useSearchParams()</h2>
        <p>
          const{" "}
          <span className={css.bordSection}>
            [searchParams, setSearchParams]
          </span>{" "}
          =<span className={css.bord}> useSearchParams()</span>;
        </p>
        <p>
          <span className={css.bord}>читання та зміни рядка запиту </span>, є
          невеликою обгорткою над вбудованим у браузер класом URLSearchParams
        </p>
        <h3>Вилучення параметрів</h3>
        <p>
          <span className={css.bord}> повертає масив із двох значень</span>:
          <span> об'єкт параметрів рядка запиту</span> (примірник
          URLSearchParams) для поточного URL <br />
          та<span> функцію оновлення</span> рядка запиту
        </p>
        <h3 className={css.bordSection}>
          <span className={css.accent}> URLSearchParams.get(key)</span>
          <br />
          -отримання значень параметрів
        </h3>
        <p>чекає на ім'я параметра</p>
        <p>
          <span className={css.bord}>повертає його значення</span> або null
        </p>
        <ProductPosition />
        <div>
          <p>
            import<span> &#123;useSearchParams&#125;</span> from
            "react-router-dom"; <br />
          </p>
          <p>
            export default function ProductPosition() &#123; <br />
            const<span> [ searchParam] = useSearchParams()</span>; <br />
            const name = searchParam<span className={css.bord}>.get("</span>
            name"); <br />
            const color = searchParam<span>.get("</span>color"); <br />
            const maxPrise = searchParam<span>.get("</span>maxPrise"); <br />
          </p>
          <p>
            return ( <br />
            &lt;&gt; <br />
            &lt;p&gt;name: &#123;name&#125;&lt;/p&gt; <br />
            &lt;p&gt;color: &#123;color&#125;&lt;/p&gt; <br />
            &lt;p&gt;Maximum price: &#123;maxPrise&#125;&lt;/p&gt; <br />
            &lt;/&gt; <br />
            ); &#125; <br />
          </p>
          <p>
            <span className={css.bord}>
              get() завжди <mark>поверне рядок</mark>{" "}
            </span>
          </p>
          <p>
            для отримання значення правильного типу потрібно виконати приведення
            типів- <span>Number(value</span>) та
            <span> Boolean(value)</span>.
          </p>
          <div className={css.bord}>
            <p>
              const{" "}
              <span>[searchParam, setSearchParams] = useSearchParams();</span>
            </p>
            <p> const name = searchParam.get("name");</p>
            <p>
              const updateSearchParams = <span>(key, value) </span>=&gt; &#123;{" "}
              <br />
              const updateParam =<span>
                {" "}
                new URLSearchParams(searchParam)
              </span>; <br />
              updateParam<span>.set(</span>key, value); <br />
              <span> setSearchParams(</span>updateParam); &#125;;
            </p>
            <p className={css.bordSection}>
              &lt;input <br />
              type="text" <br />
              <span className={css.bord}>value=&#123;name&#125; </span>
              <br />
              <span className={css.bord}>onChange=&#123;(e) =&gt;</span> &#123;
              updateSearchParams("name",
              <span className={css.bord}> e.target.value)</span>; &#125;&#125;
              /&gt;
            </p>
            <ProductPosition />
          </div>
        </div>
      </div>
      <div className={css.bord}>
        <h2>Зміна рядка запиту</h2>
        <p>
          використовуємо функцію{" "}
          <span className={css.bordSection}>setSearchParams</span>
        </p>
        <p>Їй необхідно передати об'єкт оновлених параметрів,</p>
        <div>
          <UpdateSingleParamExample />
        </div>
        <div className={css.bord}>
          <p>
            import<span> &#123; useSearchParams &#125; </span>from
            "react-router-dom";
          </p>
          <p>
            export default function UpdateSingleParamExample() &#123; <br />
            const
            <span className={css.bord}>
              {" "}
              [searchParams, setSearchParams] = useSearchParams();
            </span>{" "}
            <br />
          </p>
          <p>
            // Функція оновлення певного ключа <br />
            const updateSearchParams = <span>(key, value)</span> =&gt; &#123;
          </p>
          <p>
            // 1. Копіюємо існуючі параметри <br />
            const updateParams ={" "}
            <span className={css.bord}>new URLSearchParams(searchParams)</span>;
          </p>
          <p>
            // 2. Оновлюємо певний ключ <br />
            updateParams
            <span className={css.bordSection}>.set(key, value)</span>;
          </p>
          <p>
            //3. Застосовуємо зміни до URL <br />
            <span className={css.bord}>
              setSearchParams(updateParams)
            </span>; <br />
            &#125;; <br />
          </p>
          <p>
            return ( <br />
            &lt;div&gt; <br />
            &lt;h3&gt;Оновлення одного параметра в URL&lt;/h3&gt; <br />
            &lt;p&gt;Оновлення одного параметра в URL&lt;/p&gt; <br />
            <span className={css.bord}>
              &lt;pre&gt;&#123;searchParams.toString()&#125;&lt;/pre&gt;
            </span>{" "}
            <br />
            &lt;button&gt;<span className={css.accent}> onClick=&#123;</span>()
            =&gt; updateSearchParams<span>("name","snickers")</span>&#125;&gt;{" "}
            <br />
            Змінити name на snickers <br />
            &lt;/button&gt;
          </p>
        </div>
        <p>
          Як це працює <br />
          <span> Читання та копіювання</span> параметрів: <br />
          <mark> new URLSearchParams(searchParams) </mark>
          <br />
          створює копію поточних параметрів запиту.
        </p>
        <p>
          <span> Оновлення </span>певного ключа: <br />{" "}
          <mark>updateSearchParams.set('key','value')</mark> <br /> оновлює або
          додає пару ключ-значення.
        </p>
        <p>
          <span>Застосування</span> змінених параметрів: <br />
          <mark>setSearchParams(updatedParams)</mark> <br />
          застосовує зміни до URL, зберігаючи інші параметри.
        </p>
        <p>
          Цей підхід гарантує, що в
          <span>и змінюєте лише потрібний параметр</span>, залишаючи інші
          незмінними.
        </p>
      </div>
      <div className={css.bord}>
        <h2>Відстеження змін</h2>
        <p>
          <span>Якщо змінюється рядок запиту</span>, хук{" "}
          <span>useSearchParams </span>
          <mark>
            повертає нове значення параметрів і компонентів оновлюється
          </mark>
          , тому можна зреагувати на це і запустити ефект.
        </p>
        {/* <InputupdateSearchParams /> */}
        <p>
          const [user, setUser] = useState(null); <br /> const [searchParams,
          setSearchParams] = useSearchParams(); <br />
          const username = searchParams.get("username");
        </p>
        <p>
          <span className={css.accent}> useEffect(() </span>=&gt; &#123; <br />
          // Тут виконуємо асинхронну операцію,
          <br /> // наприклад HTTP-запит за інформацією про користувача if
          (username === "") return; <br />
          FakeAPI.getUser(username).then(setUser); &#125;, [username]);
        </p>
        <p>
          {" "}
          const<span className={css.accent}> updateSearchParams</span> = (key,
          value) =&gt; &#123; <br />
          const updatedParams =<span> new URLSearchParams(searchParams); </span>
          <br />
          updatedParams<span>.set(key, value);</span> <br />
          <span>setSearchParams(</span>updatedParams); <br />
          &#125;; <br />
          const <span className={css.accent}>handleSubmit = e</span> =&gt;
          &#123; <br />
          e.preventDefault(); <br />
          const form = <span>e.currentTarget</span>; <br />
          updateSearchParams("username",{" "}
          <span>form.elements.username.value)</span>; <br />
          form.reset(); <br />
          &#125;;
        </p>
        <p>
          &lt;form <span>onSubmit=&#123;</span>handleSubmit&#125;&gt; <br />
          &lt;input type="text" <br />
          <span> name="username"</span> /&gt; <br /> &lt;button
          type="submit"&gt; <br />
          Search <br />
          &lt;/button&gt; <br /> &lt;/form&gt; <br /> &#123;user && &lt;UserInfo
          user=&#123;user&#125; /&gt; <br />
          &#125;
        </p>
      </div>
    </>
  );
}
