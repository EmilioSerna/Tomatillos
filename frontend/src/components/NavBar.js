import { Routes, Route, Link } from "react-router-dom";

const NavBar = () => {
    return (
      <div className="navbar">
        <Link to="/">
          <img alt="logo" className="logo" src={require("../assets/logo.jpg")} />
        </Link>
        <Link to="/movies">Movies</Link>
        <Link to="/tv_shows">TV Shows</Link>
        <Link to="/signup">Sign Up</Link>
        <Link to="/login">Log in</Link>
      </div>
    );
};

export default NavBar;