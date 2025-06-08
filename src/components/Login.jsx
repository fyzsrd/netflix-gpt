import React, { useState } from "react";
import Header from "./Header";

function Login() {
  const [signInCodeMode, setSignInCodeMode] = useState(true);
  const [isSigninForm, setIsSigninForm] = useState(true);

  const signInCode = () => {
    setSignInCodeMode(!signInCodeMode);
  };
  const togglesignInForm = () => {
    setIsSigninForm(!isSigninForm);
  };

  return (
    <div className="relative h-screen w-screen overflow-hidden">
      {/* Header */}
      <Header />

      {/* Responsive Background Image */}
      <div className="absolute inset-0 -z-10">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/6863f6e8-d419-414d-b5b9-7ef657e67ce4/web/IN-en-20250602-TRIFECTA-perspective_27a3fdfa-126f-4148-b153-55d60b51be6a_small.jpg"
          alt="bg"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Form Container */}
      <div className="absolute p-12 bg-black/75 w-full max-w-md my-24 mx-auto right-0 left-0 rounded-md text-white">
        <h1 className="font-bold text-3xl mb-6">
           {isSigninForm ? 'Sign In' : 'Sign Up'}
        </h1>

        <form className="flex flex-col gap-4 ">
            {!isSigninForm && <input
            type="text"
            placeholder="Enter your Name"
            className="bg-[#1f1e1e]/45 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-white/50"
          />}
          <input
            type="text"
            placeholder="Email or phone number"
            className="bg-[#1f1e1e]/45 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-white/50"
          />
        
          {signInCodeMode && (
            <input
              type="password"
              placeholder="Password"
              className="bg-[#1f1e1e]/45 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-white/50"
            />
          )}
          {!signInCodeMode && (
            <p className="text-center text-0.5">
              Message and data rates may apply
            </p>
          )}

          <button className="bg-red-600 font-bold p-3 rounded-md mt-2 hover:bg-red-700 transition-colors cursor-pointer">
            {isSigninForm ? "Sign In" : "Sign Up"}
          </button>
          {isSigninForm && <p className="text-center text-gray-300">OR</p>}
         {isSigninForm && <button
            className="bg-[#333] font-bold p-3 rounded-md mt-1 hover:bg-[#333]/89 transition-colors cursor-pointer"
            onClick={(e) => {
              e.preventDefault();
              signInCode();
            }}
          >
            {signInCodeMode ? "Sign In using a code" : " Use Password"}
          </button>}
          {isSigninForm && <p className="text-center underline cursor-pointer hover:text-white/75">
            forgot email or password?
          </p>}
        </form>

        {/* Additional Info */}
        <div className="mt-12 text-gray-400">
          {isSigninForm && <label className="flex items-center gap-2">
            <input type="checkbox" className="w-4 h-4 accent-gray-500" />
            Remember me
          </label>}
          <p className="mb-2">
            
            {isSigninForm ? 'New to Netflix? ' : 'Already user ?'}
            <span
              className="text-white font-semibold cursor-pointer hover:underline "
              onClick={togglesignInForm}
            >
              { isSigninForm? 'Sign up now ' : 'Sign In now'}
            </span>
            .
          </p>
          <p className="text-MD">
            This page is protected by Google reCAPTCHA to ensure you're not a
            bot.
          </p>
          <span className="text-blue-500 underline ml-1">Learn more.</span>
        </div>
      </div>
    </div>
  );
}

export default Login;
