import { Link } from "@tanstack/react-router";

function Header () {
    return (
        <header className="grid grid-cols-2 gap-2 text-white  bg-slate-800">
            <div>LOGO_GOES_HERE</div>
        <nav >
          <ul className=" flex gap-2 ">
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