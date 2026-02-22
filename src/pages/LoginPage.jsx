import { Link } from "react-router";
import { AppRoutes } from "../AppRoutes";

export default function LoginPage() {
  return (
    <div>
      <h3>Форма входа</h3>
      <form>
        <input type="email" placeholder="Email" />
        <input type="password" placeholder="password" />
        <button>Войти</button>
      </form>
      <p>
        Нет аккаунта&{" "}
        <Link to={`${AppRoutes.AUTH}/${AppRoutes.REG}`}>Зарегистрируйтесь</Link>
      </p>
    </div>
  );
}
