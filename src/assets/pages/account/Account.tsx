import { User } from "lucide-react";
import { useContext } from "react";
import { AuthContext } from "../../../context/AuthContext";
import { userLogout } from "../../../api/AuthApi";
import { useNavigate } from "react-router-dom";
import { NoteContext } from "../../../context/NoteContext";
import toast from "react-hot-toast";

const Account = () => {
  const { user, setUser } = useContext(AuthContext)!;
  const { setNotes, setFavoriteNotes } = useContext(NoteContext)!;
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await userLogout();
      setUser(null);
      setNotes([]);
      setFavoriteNotes([]);
      navigate("/login");
    } catch (error) {
      toast.error("Logout failed. Please try again.");
      console.error("Logout failed:", error);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold text-black mb-8">My Account</h1>

        <div className="space-y-8">
          <div className="flex flex-col items-center">
            <div
              className="
                w-32 h-32 
                rounded-full 
                border border-gray-500 
                flex items-center justify-center 
                bg-white
              "
            >
              <User size={64} className="text-black" />
            </div>
          </div>

          <div>
            <label
              htmlFor="email"
              className="block text-lg font-medium text-black mb-2"
            >
              Email
            </label>
            <input
              id="email"
              type="email"
              value={user?.email}
              disabled
              className="
                w-full px-4 py-3 
                border border-gray-500 
                rounded-lg 
                bg-gray-100 
                text-black 
                focus:outline-none
              "
            />
          </div>

          {/* Logout Button */}
          <div className="pt-4">
            <button
              type="button"
              onClick={() => {handleLogout();}}
              className="
                w-full sm:w-auto 
                px-8 py-3 
                bg-black 
                text-white 
                font-medium 
                rounded-lg 
                hover:bg-gray-800 
                transition-colors 
                focus:outline-none 
                focus:ring-2 
                focus:ring-black 
                focus:ring-offset-2
              "
            >
              Logout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Account;
