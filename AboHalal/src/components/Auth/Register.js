import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Register = () => {
  const [profilePicture, setProfilePicture] = useState(null); // For profile picture upload
  const navigate = useNavigate(); // Initialize useNavigate

  const handleProfilePictureChange = (e) => {
    setProfilePicture(e.target.files[0]); // Get the selected profile picture file
  };

  const handleRegister = async (e) => {
    e.preventDefault();

    // Basic client-side validation
    if (e.target.password.value.length < 6) {
      alert('Password must be at least 6 characters long.');
      return;
    }

    const formData = new FormData();
    formData.append("name", e.target.first_name.value);
    formData.append("email", e.target.email.value);
    formData.append("phone", e.target.phone.value);
    formData.append("password", e.target.password.value);

    if (profilePicture) {
      formData.append("profilePicture", profilePicture); // Append profile picture to the form data
    }

    try {
      const response = await fetch('https://online-bk-merajuddins-projects.vercel.app/auth/register', {
        method: 'POST',
        body: formData, // Send form data including the profile picture
      });
      const result = await response.json();
      if (response.ok) {
        alert('Registration successful');
        navigate('/login'); // Redirect to login page after successful registration
      } else {
        alert(result.message);
      }
    } catch (error) {
      console.error(error);
      alert('An error occurred. Please try again.');
    }
  };

  return (
    <>
      <div className="bg-[#E7693F] flex items-center justify-center">
        <div className="my-10 w-[80%] bg-gray-100 grid md:grid-cols-1 rounded-lg">
          <div className="w-full md:col-span-1">
            <p className="ml-10 mt-5 text-[#023374] text-2xl font-bold">
              Register as a new user
            </p>
            <p className="ml-10 mt-2 text-[10px] text-[#023374]">
              If you don't have an account, you can easily create one.
            </p>
            <form className="p-4 md:p-10" onSubmit={handleRegister}>
              <div>
                <input
                  type="text"
                  id="first_name"
                  className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                  placeholder="Full Name"
                  required
                />
              </div>
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
                  type="text"
                  id="phone"
                  className="mt-6 bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                  placeholder="Phone Number"
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
              <div className="mt-3">
                <p>Upload your profile picture</p>
                <div className="flex">
                  <div>
                    <svg
                      stroke="currentColor"
                      fill="none"
                      strokeWidth="0"
                      viewBox="0 0 15 15"
                      className="h-8 w-8 mt-2"
                      height="2em"
                      width="2em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M0.877014 7.49988C0.877014 3.84219 3.84216 0.877045 7.49985 0.877045C11.1575 0.877045 14.1227 3.84219 14.1227 7.49988C14.1227 11.1575 11.1575 14.1227 7.49985 14.1227C3.84216 14.1227 0.877014 11.1575 0.877014 7.49988ZM7.49985 1.82704C4.36683 1.82704 1.82701 4.36686 1.82701 7.49988C1.82701 8.97196 2.38774 10.3131 3.30727 11.3213C4.19074 9.94119 5.73818 9.02499 7.50023 9.02499C9.26206 9.02499 10.8093 9.94097 11.6929 11.3208C12.6121 10.3127 13.1727 8.97172 13.1727 7.49988C13.1727 4.36686 10.6328 1.82704 7.49985 1.82704ZM10.9818 11.9787C10.2839 10.7795 8.9857 9.97499 7.50023 9.97499C6.01458 9.97499 4.71624 10.7797 4.01845 11.9791C4.97952 12.7272 6.18765 13.1727 7.49985 13.1727C8.81227 13.1727 10.0206 12.727 10.9818 11.9787ZM5.14999 6.50487C5.14999 5.207 6.20212 4.15487 7.49999 4.15487C8.79786 4.15487 9.84999 5.207 9.84999 6.50487C9.84999 7.80274 8.79786 8.85487 7.49999 8.85487C6.20212 8.85487 5.14999 7.80274 5.14999 6.50487ZM7.49999 5.10487C6.72679 5.10487 6.09999 5.73167 6.09999 6.50487C6.09999 7.27807 6.72679 7.90487 7.49999 7.90487C8.27319 7.90487 8.89999 7.27807 8.89999 6.50487C8.89999 5.73167 8.27319 5.10487 7.49999 5.10487Z"
                        fill="currentColor"
                      ></path>
                    </svg>
                  </div>
                  <div className="">
                    <label
                      htmlFor="uploadFile1"
                      className="mt-2 ml-7 border border-gray-300 text-black hover:bg-gray-700  text-sm px-4 py-2.5 outline-none rounded w-max cursor-pointer mx-auto block font-[sans-serif]"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-5 mr-2 fill-black inline"
                        viewBox="0 0 32 32"
                      >
                        <path
                          d="M23.75 11.044a7.99 7.99 0 0 0-15.5-.009A8 8 0 0 0 9 27h3a1 1 0 0 0 0-2H9a6 6 0 0 1-.035-12 1.038 1.038 0 0 0 1.1-.854 5.991 5.991 0 0 1 11.862 0A1.08 1.08 0 0 0 23 13a6 6 0 0 1 0 12h-3a1 1 0 0 0 0 2h3a8 8 0 0 0 .75-15.956z"
                          data-original="#000000"
                        />
                        <path
                          d="M20.293 19.707a1 1 0 0 0 1.414-1.414l-5-5a1 1 0 0 0-1.414 0l-5 5a1 1 0 0 0 1.414 1.414L15 16.414V29a1 1 0 0 0 2 0V16.414z"
                          data-original="#000000"
                        />
                      </svg>
                      Upload
                      <input
                        type="file"
                        id="uploadFile1"
                        className="hidden"
                        onChange={handleProfilePictureChange} // Handle profile picture upload
                      />
                    </label>
                  </div>
                </div>
              </div>
              <div className=" mt-8 flex items-center justify-center ">
                <button
                  type="submit"
                  className="w-[80%] text-md font-bold text-white bg-[#D55B45] rounded-xl px-5 py-2.5 text-center me-2 mb-2"
                >
                  Sign Up
                </button>
              </div>
            </form>
            <p className="px-10">
              Already have an account?
              <Link to="/login">
                <span className="text-[#3281EB]"> Sign In</span>
              </Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
