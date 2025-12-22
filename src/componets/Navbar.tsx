import { Plus, Star } from "lucide-react";
import { NavLink } from "react-router-dom";

const Navbar: React.FC = () => {
  return (
    <nav className="bg-black text-white shadow-lg w-full">
      <div className="px-4 py-1 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Left: Title */}
          <div className="shrink-0">
            <h1 className="text-xl sm:text-2xl font-bold"><NavLink to={"/"}>Note Server</NavLink></h1>
          </div>

          {/* Right: Buttons with Icons */}
          <div className="flex items-center gap-4">
            {/* Favorite Button */}
            <NavLink to={"/favorite"}>
              <button className="bg-white hover:bg-[#d9d9d9] px-5 py-2 rounded-md text-black text-base sm:text-lg font-medium flex items-center gap-2 transition duration-200">
                <Star className="w-6 h-6" /> {/* Size 24px */}
                {/* Optional: fill on active <Star fill="currentColor" /> */}
                Favorite
              </button>
            </NavLink>

            {/* Create Button */}
            <NavLink to={"/create"}>
              <button className="bg-black hover:bg-[#454545] px-5 py-2 rounded-md text-base sm:text-lg font-medium flex items-center gap-2 transition duration-200 border border-white hover:border-[#777777]">
                <Plus className="w-5 h-5" />
                Create
              </button>
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
