import css from "./VercelOn.module.css";
export default function VercelOn() {
  return (
    <div className={css.bordSection}>
      <h2>Деплой на Vercel</h2>
      <div>
        <p>
          <b>1</b>-додати файл налаштувань vercel.json в кореневу папку проекту.
        </p>
        <p>
          Вміст файлу <span className={css.bordSection}>vercel.json </span>має
          виглядати наступним чином.
        </p>
        <p>
          <span>
            &#123; <br /> "rewrites": [ <br /> &#123;"source": "/(.*)",
            "destination": "/"&#125; <br />] <br /> &#125;
          </span>
        </p>
        <p>
          після створення та наповнення файлу vercel.json, необхідно здійснити
          Git-коміт та надіслати зміни в репозиторій на GitHub, щоб на Vercel
          запустився процес збірки проекту з вже доданим файлом налаштувань.
        </p>
      </div>
    </div>
  );
}
