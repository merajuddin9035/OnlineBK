import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate(); // Initialize useNavigate
  const [isLoading, setIsLoading] = useState(false); // Loading state
  const [errorMessage, setErrorMessage] = useState(""); // Error message state

  const handleLogin = async (e) => {
    e.preventDefault();
    setIsLoading(true); // Disable button on submit

    const data = {
      email: e.target.email.value,
      password: e.target.password.value,
    };

    try {
      const response = await fetch('https://online-bk-merajuddins-projects.vercel.app/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      
      const result = await response.json();

      if (response.ok) {
        alert('Login successful');
        localStorage.setItem('token', result.token); // Save token in localStorage
        setIsLoading(false); // Re-enable the button
        navigate('/'); // Redirect to the home page
      } else {
        setErrorMessage(result.message); // Display API error message
        setIsLoading(false); // Re-enable the button
      }
    } catch (error) {
      setErrorMessage("Network error or server not reachable"); // Handle network errors
      setIsLoading(false); // Re-enable the button
    }
  };

  return (
    <>
      <form className="p-4 md:p-10" onSubmit={handleLogin}>
        <div className="bg-[#E7693F] flex items-center justify-center">
          <div className="my-10 w-[80%] bg-gray-100 grid md:grid-cols-1 rounded-lg">
            <div className="w-full md:col-span-1">
              <p className="ml-10 mt-5 text-[#023374] text-2xl font-bold">
                Login to your account
              </p>
              <p className="ml-10 mt-2 text-[10px] text-[#023374]">
                If you are already a member, easily log in
              </p>

              {/* Display error message if login fails */}
              {errorMessage && (
                <div className="ml-10 text-red-600 text-sm mt-2">
                  {errorMessage}
                </div>
              )}

              <div>
                <input
                  type="email"
                  id="email"
                  className="mt-6 bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                  placeholder="Email"
                  required
                />
              </div>

              <div>
                <input
                  type="password"
                  id="password"
                  className="mt-6 bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                  placeholder="Password"
                  required
                />
              </div>

              <div className="mt-6 flex items-center mb-4">
                <input
                  id="remember-me"
                  type="checkbox"
                  defaultValue
                  className="w-4 h-4 accent-[#D55B45] bg-gray-100 border-gray-300 rounded"
                />
                <label
                  htmlFor="remember-me"
                  className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  Remember me
                </label>
              </div>

              <div className="mt-4 flex items-center justify-center">
                <button
                  type="submit"
                  className="w-[80%] text-md font-bold text-white bg-[#D55B45] rounded-xl px-5 py-2.5 text-center me-2 mb-2"
                  disabled={isLoading} // Disable button while loading
                >
                  {isLoading ? "Signing In..." : "Sign In"} {/* Button text change */}
                </button>
              </div>

              <p className="px-10">
                Don't have an account?
                <Link to="/signup">
                  <span className="text-[#3281EB]"> Sign Up</span>
                </Link>
              </p>
            </div>
          </div>
        </div>
      </form>
    </>
  );
};

export default Login;
