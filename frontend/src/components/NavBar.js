import { Routes, Route, NavLink } from "react-router-dom";

const NavBar = () => {
    return (
      <div className="navbar">
        <NavLink exact to="/">
          <img alt="logo" className="logo" src={require("../assets/logo.jpg")} />
        </NavLink>
        <NavLink exact to="/movies">Movies</NavLink>
        <NavLink exact to="/tv_shows">TV Shows</NavLink>
        <NavLink exact to="/signup">Sign Up</NavLink>
        <NavLink exact to="/login">Log in</NavLink>
      </div>
    );
};

export default NavBar;