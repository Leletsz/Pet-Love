import { FiShoppingBag } from "react-icons/fi";
import { Link } from "react-router-dom";
import Logo from "../../assets/logo.png";

export default function Header() {
  return (
    <div>
      <header className="w-full px-1 text-pink-400 bg-purpleDark">
        <nav className="w-full max-w-7xl h-14 flex items-center px-5 justify-between mx-auto">
          <Link to={"/"}>
            <img className="w-full size-17" src={Logo}></img>
          </Link>
          <Link className="relative" to={"/cart"}>
            <FiShoppingBag size={24} />
            <span className="absolute -right-3 -top-3 px-2.5 bg-orangeAccent rounded-full w-6 h-6 flex items-center justify-center text-white text-xs">
              0
            </span>
          </Link>
        </nav>
      </header>
    </div>
  );
}
