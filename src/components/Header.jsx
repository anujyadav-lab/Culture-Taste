import Logo from "../Img/Swiggy-Emblem.png"
import { useState,useEffect, useContext } from "react"

import { Link } from "react-router-dom";
import OnlineStatus from "../utils/useOnlineStatus";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/userContext";


const Header = () => {
  
  const {LoggedInUser} = useContext(UserContext)

  const [btn,setBtn]   = useState('login');

  const OnlineStatus = useOnlineStatus()



  useEffect(()=>{
  },[btn])
  

    return (


      <div className="flex justify-between shadow-md p-4">  
          <img
            className="w-28 ml-16"
            src={Logo} alt="img-error"
          />

          <ul className="flex space-x-16 text-xl items-center font-bold ">
            <li className="">
              online Status:{OnlineStatus ? '🟢':'🔴'}
            </li>
            <li className="">
              <Link to="/">Home</Link>
            </li>
            <li className="">
              <Link to="/about">About Us</Link>

            </li>
            <li className="">

              <Link to="/grocery">Grocery</Link>
            </li>
            <li className="">
              <Link to="/contact">Contact US</Link>
            </li>
            <li>{LoggedInUser}</li>
            <li className="">Cart</li>
            <button className="login" onClick={()=> btn === 'login' ? setBtn('logout') : setBtn('login')}>{btn}</button>
          </ul>
        </div>             
    );
  };

 
export default Header;