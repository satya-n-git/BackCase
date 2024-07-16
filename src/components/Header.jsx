import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  return (
    <header className="font-poppins">
      <div className="flex justify-around items-center py-5 px-5">
      <h1 className="text-5xl font-light text-neutral-900">Back Armor</h1>
      <div className="flex justify-between items-center bg-gray-300 rounded-lg py-3 px-5 w-3/5 ">
        <input type="text" placeholder="Search" autoComplete="on" className="bg-transparent w-full outline-none"/>
        <FontAwesomeIcon icon={faMagnifyingGlass} className="text-gray-500 h-6" />
      </div>
      
        <button className="rounded-lg font-medium hover:bg-gray-100 text-neutral-800 transition duration-200"><Link to="/signup" >Sign Up</Link></button>
        <button className="rounded-lg font-medium hover:bg-gray-100 text-neutral-800 transition duration-200"><Link to="/signin" >Log In</Link></button>
        </div>
    </header>
  );
};

export default Header;
