import React from "react";
import { Link } from "react-router-dom";

const SignIn = () => {
  return (
    <div className="font-poppins">
      <h1 className="text-5xl">SignUp page</h1>
      <p>Form filling section</p>
      <div className="flex justify-center items-center">
        <p>Dont have an account ?</p>
        <button className="bg-gray-300 border-3 rounded-lg p-2">
          <Link to="/signUp">SignUp</Link>
        </button>
      </div>
    </div>
  );
};

export default SignIn;
