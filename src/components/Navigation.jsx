import { NavLink } from "react-router-dom";

export const Navigation = () => {
  return (
    <div className="flex flex-row justify-center gap-6 text-3xl">
      <NavLink
        className={({ isActive }) => (isActive ? "text-sky-500" : "")}
        to="/"
      >
        Home
      </NavLink>
      <NavLink
        className={({ isActive }) => (isActive ? "text-sky-500" : "")}
        to="/hiragana"
      >
        Hiragana
      </NavLink>
      <NavLink
        className={({ isActive }) => (isActive ? "text-sky-500" : "")}
        to="/katakana"
      >
        Katakana
      </NavLink>
    </div>
  );
};
