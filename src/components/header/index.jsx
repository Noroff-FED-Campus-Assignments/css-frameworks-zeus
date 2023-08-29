import { Link } from "@tanstack/react-router";

function Header () {
    return (
        <header>
            <h3 className=" text-white bg-slate-600">HEllo</h3>
        <nav className="flex bg-slate-600">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/profile">Profile</Link>
            </li>
            <li>
              <Link to="/Login">Login</Link>
            </li>
          </ul>
        </nav>
      </header>
    )
}

export default Header