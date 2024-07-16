import React from "react";
import { Link } from "react-router-dom";

const SignUp = () => {
  return (
    <div className="font-poppins">
      <h1 className="text-5xl">SignUp page</h1>
      <p>Form filling section</p>
      <div className="flex justify-center items-center">
        <p>already have an account ?</p>
        <button className="bg-gray-300 border-3 rounded-lg p-2">
          <Link to="/signin">Log In </Link>
        </button>
      </div>
    </div>
  );
};

export default SignUp;
