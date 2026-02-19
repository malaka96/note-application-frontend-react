import { LogIn, Plus, Star, User2Icon } from "lucide-react";
import { useState } from "react";
import { NavLink } from "react-router-dom";

const Navbar: React.FC = () => {
  const [isAuthorized, setIsAuthorized] = useState(false);

  return (
    <nav className="bg-black text-white shadow-lg w-full">
      <div className="px-4 py-1 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Left: Title */}
          <div className="shrink-0">
            <h1 className="text-xl sm:text-2xl font-bold">
              <NavLink to={"/"}>Note Server</NavLink>
            </h1>
          </div>

          {isAuthorized ? (
            <div className="flex items-center gap-4">
              <NavLink to={"/favorite"}>
                <button className="bg-white hover:bg-[#d9d9d9] px-5 py-2 rounded-md text-black text-base sm:text-lg font-medium flex items-center gap-2 transition duration-200">
                  <Star className="w-6 h-6" />
                  Favorite
                </button>
              </NavLink>

              <NavLink to={"/create"}>
                <button className="bg-white hover:bg-[#d9d9d9] px-5 py-2 rounded-md text-black text-base sm:text-lg font-medium flex items-center gap-2 transition duration-200">
                  <Plus className="w-6 h-6" />
                  Create
                </button>
              </NavLink>

              <NavLink to={"/account"}>
                <button
                onClick={() => setIsAuthorized(false)}
                 className="bg-white hover:bg-[#d9d9d9] text-black w-11 h-11 rounded-full flex items-center justify-center transition duration-200 border border-black hover:shadow-md hover:shadow-white/20">
                  <User2Icon className="w-5 h-5" />
                </button>
              </NavLink>
            </div>
          ) : (
            <div>
              <NavLink to={"/login"}>
                <button
                  className="bg-white hover:bg-[#d9d9d9] px-5 py-2 rounded-md text-black text-base sm:text-lg font-medium flex items-center gap-2 transition duration-200"
                >
                  <LogIn className="w-5 h-5" />
                  Login
                </button>
              </NavLink>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
