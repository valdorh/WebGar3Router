import { Link, useNavigate } from "react-router";
import { AppRoutes } from "../AppRoutes";
import { useState } from "react";

export const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email && password) {
      console.log("Submit", email, password);
      navigate("/");
    } else {
      console.log("Failed!");
    }
  };

  return (
    <div className="flex flex-col gap-4 justify-center items-center">
      <h2>Форма входа</h2>
      <form onSubmit={handleSubmit} className="flex flex-col gap-2">
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="outline-blue-500"
        />
        <input
          type="password"
          placeholder="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Войти</button>
      </form>
      <p>
        Нет аккаунта?{"  "}
        <Link
          to={`${AppRoutes.AUTH}/${AppRoutes.REG}`}
          className="text-blue-400 hover:underline"
        >
          Зарегистрируйтесь
        </Link>
      </p>
    </div>
  );
};
