import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../../context/AuthContext";
import { userRegister } from "../../../api/AuthApi";

const Register = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("");

  const {setIsLoading} = useContext(AuthContext)!;

  const register = async () => {
    setIsLoading(true);
    try{
      console.log("register method is being calling...");
      const res = await userRegister(email, password);
      if(res.status === 200){
        navigate("/login");
        console.log("user registered");
      }else{
        // setup toasts
        console.log(res.status);
      }
    }catch(error){
      console.log(error);
    }finally{
      setIsLoading(false);
    }
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold text-black mb-8">Register</h1>

        <form className="space-y-6">
          {/* Email Field */}
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
              value={email}
              onChange={(e) => {setEmail(e.target.value);}}
              placeholder="Enter your email..."
              className="
              w-full px-4 py-3 
              border border-gray-500 
              rounded-lg 
              focus:outline-none 
              focus:ring-1 focus:ring-black 
              focus:border-black 
              bg-white 
              text-black 
              placeholder-gray-500
            "
            />
          </div>

          {/* Password Field */}
          <div>
            <label
              htmlFor="password"
              className="block text-lg font-medium text-black mb-2"
            >
              Password
            </label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => {setPassword(e.target.value);}}
              placeholder="Enter your password..."
              className="
              w-full px-4 py-3 
              border border-gray-500 
              rounded-lg 
              focus:outline-none 
              focus:ring-1 focus:ring-black 
              focus:border-black 
              bg-white 
              text-black 
              placeholder-gray-500
            "
            />
          </div>

          {/* Confirm Password Field */}
          <div>
            <label
              htmlFor="confirmPassword"
              className="block text-lg font-medium text-black mb-2"
            >
              Confirm Password
            </label>
            <input
              id="confirmPassword"
              type="password"
              value={confirmPassword}
              onChange={(e) => {setConfirmPassword(e.target.value);}}
              placeholder="Re-enter your password..."
              className="
              w-full px-4 py-3 
              border border-gray-500 
              rounded-lg 
              focus:outline-none 
              focus:ring-1 focus:ring-black 
              focus:border-black 
              bg-white 
              text-black 
              placeholder-gray-500
            "
            />
          </div>

          {/* Buttons */}
          <div className="pt-4 flex flex-col sm:flex-row gap-4">
            <button
              type="button"
              onClick={register}
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
              Register
            </button>

            <button
              onClick={() =>{
                navigate("/login");
              }}
              type="button"
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
              Back to Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
