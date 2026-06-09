import React from "react";

const Header = () => {
  return (
    <div className="bg-orange-600 text-light flex">
      <img
        src="https://cravings.ricr.in/assets/transparentLogoLight-De2Z7I01.png"
        className="w-20"
      />
      <div className="flex gap-5 text-white ms-320">
        <button > Login </button>
        <button className="bg-white text-orange-700 h-10 mt-1 p-4 ">Register</button>
      </div>
    </div>
  );
};

export default Header;
