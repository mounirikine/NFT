


import { Link } from "react-router-dom";
import { LuUser2 } from "react-icons/lu";

const Header = () => {
  return (
    <header className="w-full sticky top-0 py-7 bg-slate-950 z-[99999999999]">
      <nav className="flex w-full justify-between items-center px-5 sm:px-10">
        <div className="w-1/2 sm:w-5/12">LOGONFT</div>
        <div className="hidden lg:flex w-1/2 sm:w-5/12 px-5 sm:px-10">
          <ul className="flex items-center gap-3 justify-between">
            <li><Link to="#" className="text-white">Marketplace</Link></li>
            <li><Link to="#" className="text-white">RanKings</Link></li>
            <li><Link to="#" className="text-white">Connect a Wallet</Link></li>
            <li>
              <Link to="#" className="px-4 sm:px-8 bg-violet-600 py-3 rounded-md flex items-center gap-2">
                <LuUser2 /> Sign Up
              </Link>
            </li>
          </ul>
        </div>
        <div className="lg:hidden flex items-center">
          <button className="text-white">
            {/* Add a responsive menu icon here */}
            Menu
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
