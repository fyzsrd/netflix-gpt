import React, { useRef, useState } from "react";
import Header from "./Header";
import { checkValidateData } from "../utils/validate";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../utils/firebase";
import setErrorMessage from "set-error-message";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/useSlice";

function Login() {
  const Navigate = useNavigate()
  const dispatch = useDispatch();
  const [isSigninForm, setIsSigninForm] = useState(true);
  const [signInWithCode, setSignInWithCode] = useState(false);
  const [errors, setErrors] = useState({ name: "", email: "", password: "" });

  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const toggleSignInForm = () => {
    setIsSigninForm(!isSigninForm);
    setErrors({ name: "", email: "", password: "" });
    setSignInWithCode(false); // Reset code mode when switching forms
  };

  const toggleSignInMethod = () => {
    setSignInWithCode(!signInWithCode);
  };

  const handleButtonClick = () => {
    const nameVal = name.current?.value || "";
    const emailVal = email.current?.value || "";
    const passwordVal = password.current?.value || "";

    const validationResult = checkValidateData(
      nameVal,
      emailVal,
      passwordVal,
      isSigninForm
    );

    if (validationResult) {
      setErrors(validationResult);
      return;
    }

    setErrors({ name: "", email: "", password: "" });
    console.log(isSigninForm ? "Logging in..." : "Signing up...");

    if (!isSigninForm) {
      //signup logic

      createUserWithEmailAndPassword(auth, emailVal, passwordVal)

        .then((userCredential) => {
          const user = userCredential.user;
          updateProfile(user, {
            displayName: nameVal,
          })
            .then(() => {

              const { uid, email, displayName } = auth.currentUser;

              dispatch(
                addUser(
                  {
                    uid: uid,
                    email: email,
                    displayName: displayName
                  })
              );

            }).catch((error) => {
              setErrorMessage(error)
            });
          

          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage)

          // ..
        });


    } else {
      console.log("sign in button cliked")
      signInWithEmailAndPassword(auth, emailVal, passwordVal)
        .then((userCredential) => {
          // Signed in 
          const user = userCredential.user;
          console.log(user)
          Navigate('/browse')
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage)
          console.log("erroor in sign up")
        });


    }
  };

  return (
    <div className="relative h-screen w-screen overflow-hidden">
      <Header />
      <div className="absolute inset-0 -z-10">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/6863f6e8-d419-414d-b5b9-7ef657e67ce4/web/IN-en-20250602-TRIFECTA-perspective_27a3fdfa-126f-4148-b153-55d60b51be6a_small.jpg"
          alt="bg"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="absolute p-12 bg-black/75 w-full max-w-md my-24 mx-auto right-0 left-0 rounded-md text-white">
        <h1 className="font-bold text-3xl mb-6">
          {isSigninForm ? "Sign In" : "Sign Up"}
        </h1>

        <form onSubmit={(e) => e.preventDefault()} className="flex flex-col gap-4">
          {!isSigninForm && (
            <>
              <input
                ref={name}
                type="text"
                placeholder="Enter your Name"
                className="bg-[#1f1e1e]/45 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-white/50"
              />
              {errors.name && (
                <p className="text-red-500 text-sm -mt-3">{errors.name}</p>
              )}
            </>
          )}

          <input
            ref={email}
            type="text"
            placeholder="Email or phone number"
            className="bg-[#1f1e1e]/45 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-white/50"
          />
          {errors.email && (
            <p className="text-red-500 text-sm -mt-3">{errors.email}</p>
          )}

          {!signInWithCode && (
            <>
              <input
                ref={password}
                type="password"
                placeholder="Password"
                className="bg-[#1f1e1e]/45 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-white/50"
              />
              {errors.password && (
                <p className="text-red-500 text-sm -mt-3">{errors.password}</p>
              )}
            </>
          )}

          {isSigninForm && signInWithCode && (
            <p className="text-sm text-gray-300 text-center">
              A code will be sent to your email or phone number. Message and data rates may apply.
            </p>
          )}

          <button
            className="bg-red-600 font-bold p-3 rounded-md mt-2 hover:bg-red-700 transition-colors cursor-pointer"
            onClick={handleButtonClick}
          >
            {isSigninForm ? "Sign In" : "Sign Up"}
          </button>

          {isSigninForm && (
            <>
              <p className="text-center text-gray-300">OR</p>
              <button
                className="bg-[#333] font-bold p-3 rounded-md mt-1 hover:bg-[#333]/89 transition-colors cursor-pointer"
                onClick={toggleSignInMethod}
              >
                {signInWithCode ? "Use Password" : "Sign In using a code"}
              </button>
              <p className="text-center underline cursor-pointer hover:text-white/75">
                Forgot email or password?
              </p>
            </>
          )}
        </form>

        <div className="mt-12 text-gray-400">
          {isSigninForm && (
            <label className="flex items-center gap-2">
              <input type="checkbox" className="w-4 h-4 accent-gray-500" />
              Remember me
            </label>
          )}
          <p className="mb-2">
            {isSigninForm ? "New to Netflix? " : "Already a user? "}
            <span
              className="text-white font-semibold cursor-pointer hover:underline"
              onClick={toggleSignInForm}
            >
              {isSigninForm ? "Sign up now" : "Sign in now"}
            </span>
            .
          </p>
          <p className="text-sm">
            This page is protected by Google reCAPTCHA to ensure you're not a bot.
            <span className="text-blue-500 underline ml-1">Learn more.</span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;
