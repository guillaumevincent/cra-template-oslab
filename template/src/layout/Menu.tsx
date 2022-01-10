import { NavLink } from "react-router-dom";

export default function Menu() {
  return (
    <nav>
      <ul>
        <li>
          <NavLink
            to="/"
            style={({ isActive }) => {
              return {
                textDecoration: isActive ? "underline" : "none",
              };
            }}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="sign-in"
            style={({ isActive }) => {
              return {
                textDecoration: isActive ? "underline" : "none",
              };
            }}
          >
            Sign In
          </NavLink>
        </li>
        <li>
          <NavLink
            to="register"
            className={({ isActive }) => (isActive ? "text-red" : "")}
          >
            Register
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
