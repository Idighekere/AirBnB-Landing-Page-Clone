import React from "react";
import Logo from "/public/assets/airbnb 1.png";
const Navbar = () => {
  return (
    <div>
      <nav className="h-16 p-6 shadow-md flex items-center ">
        <img src={Logo} alt="AirBnB Logo" width="100px" className="md:ml-7" />
      </nav>
    </div>
  );
};

export default Navbar;
