import React from "react";

function Footer() {
  return (
   <div className="flex flex-col md:flex-row justify-between w-full bottom-0">
    <div className="flex flex-col items-start mb-6 md:mb-0">
            <span className="md:text-5xl md:font-medium text-xl font-semibold">19822</span>
            <p className="text-base font-normal">pictures generated so far</p>
        </div>
    <div className="flex flex-col">
        <p className="text-base font-normal mb-3">by GDG and WTM Hubli community</p>
        <div className="flex flex-row items-center">
            <img  className="md:h-10 md:mr-10 h-6 mr-5" src="gdghubli-logo.png"/>
            <img className="md:h-10 h-6" src="wtm-logo.png" />
        </div>
    </div>
   </div>
  );
}
export default Footer;