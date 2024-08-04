import React from "react";
import { LOGO_URL } from "../../utils/constant";
import { Link } from "react-router-dom";
import useOnlineStatus from "../../utils/useOnlineStatus";

export const Header = () =>  {
      const onlineStatus = useOnlineStatus();

 return (
    <header class="flex p-4 justify-between items-center bg-white-300 shadow-lg">
            <img class="w-20 lg:rounded" alt={'company-logo'} src={LOGO_URL}/>
            <nav class="flex p-4 font-bold">
                <Link to="/" class="px-4 mx-1 text-black-600">Home</Link> 
                <Link to="/about" class="px-4 mx-1 text-black-600">About Us</Link>
                <Link to="/contact-us" class="px-4 mx-1 text-black-600">Contact Us</Link> 
                <a className="px-4">Online Status: {onlineStatus ? "✅" : "🔴"}</a>
            </nav>
    </header>
 )
}