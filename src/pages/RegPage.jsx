import { Link } from "react-router";

export default function RegPage() {
  return (
    <div>
      <h3>Регистрация</h3>
      <form action="">
        <input type="text" placeholder="Ваше имя" />
        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Password" />
        <input type="password" />
        <button>Зарегистрироваться</button>
      </form>
      <p>
        Уже есть аккаунт?{""}
        <Link to={"/auth/login"}>Войдите</Link>
      </p>
    </div>
  );
}
