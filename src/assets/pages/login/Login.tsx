import { useNavigate } from "react-router-dom";

const Login = () => {

    const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold text-black mb-8">Login</h1>

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

          {/* Buttons */}
          <div className="pt-4 flex flex-col sm:flex-row gap-4">
            <button
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
              Login
            </button>

            <button
            onClick={() => {navigate("/register")}}
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
              Register
            </button>

          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
