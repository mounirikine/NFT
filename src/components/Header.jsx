


import { Link } from "react-router-dom";
import { LuMenu, LuUser2 } from "react-icons/lu";

import LOGO from '../assets/logo.png'

const Header = () => {
  return (
    <header className="w-full sticky top-0 py-4 bg-slate-950 z-[99999999999]">
      <nav className="flex w-full justify-between items-center px-5 sm:px-10">
        <div className="w-1/2 sm:w-3/12">
          <img src={LOGO} className="w-[200px]" alt="" />
        </div>
        <div className="hidden xl:flex w-1/2 sm:w-6/12  sm:px-4">
          <ul className="flex items-center gap-8 justify-between">
            <li className=""><Link to="#" className="text-white">Marketplace</Link></li>
            <li className=""><Link to="#" className="text-white">RanKings</Link></li>
            <li className=""><Link to="#" className="text-white">Connect a Wallet</Link></li>
            <li className="">
              <Link to="/sign-in" className="px-4 sm:px-8 bg-violet-600 py-3 rounded-md flex items-center gap-2">
                <LuUser2 /> Sign Up
              </Link>
            </li>
          </ul>
        </div>
        <div className="xl:hidden flex items-center">
        <div className="drawer">
  <input id="my-drawer" type="checkbox" className="drawer-toggle" />
  <div className="drawer-content">
    {/* Page content here */}
    <label htmlFor="my-drawer" className="btn  bg-violet-600 border-none hover:bg-violet-700 drawer-button"><LuMenu /> </label>
  </div> 
  <div className="drawer-side">
    <label htmlFor="my-drawer" aria-label="close sidebar" className="drawer-overlay"></label>
    <ul className="menu p-4 w-80 min-h-full bg-slate-900 text-base-content">

      <div className="pt-1 mb-8">
      <img src={LOGO} className="w-[200px]" alt="" />
      </div>
    <li className=""><Link to="#" className="text-white">Marketplace</Link></li>
            <li className="mb-2"><Link to="#" className="text-white">RanKings</Link></li>
            <li className="mb-2"><Link to="#" className="text-white">Connect a Wallet</Link></li>
            <li className="mb-2">
              <Link to="/sign-in" className="px-4 sm:px-8 bg-violet-600 py-3 text-white hover:bg-violet-700 focus:bg-violet-600 focus:text-white rounded-md flex items-center gap-2">
                <LuUser2 /> Sign Up
              </Link>
            </li>
      
    </ul>
  </div>
</div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
