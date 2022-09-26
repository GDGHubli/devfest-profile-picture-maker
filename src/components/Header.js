import React from "react";

function Header() {
  return (
    <div className="flex flex-col justify-between w-full md:items-start md:flex-row">
        <div className="w-full md:w-2/4">
            <h1 className="text-xl font-bold leading-normal mb-6 md:text-5xl">Generate your DevFest 2022 theme profile picture</h1>
            <p className="text-base md:text-lg">You can use this regardless of the country/city you are attending from.</p>
        </div>
        <img className="md:w-1/4 -mt-8 w-2/3" src="DevFest-Logo-2022-LightBackground.png" alt="DevFest Logo"/>
    </div>
  );
}
export default Header;