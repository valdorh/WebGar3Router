import { Link } from "react-router";

export const HomePage = () => {
  return (
    <div>
      <h1>Главная страница</h1>
      <Link to={"/about"}>Страница о компании</Link>
      <br />
      <br />
      <br />
      <Link to={"/auth"}>Аутентификация</Link>
    </div>
  );
};
