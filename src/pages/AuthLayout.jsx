import { Link } from "react-router";

export default function AuthLayout() {
  return (
    <div>
      <h2>Аутентификация</h2>
      <div>
        <Link to={"/auth/login"}>Вход</Link>
        <br />
        <Link to={"/auth/register"}>Регистрация</Link>
      </div>
      <button></button>
    </div>
  );
}
