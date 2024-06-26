import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";

import React, { lazy, Suspense, useEffect, useState } from "react";
import "./App.css";

import { createBrowserRouter, Outlet } from "react-router-dom";
// import About from "./components/About";
import Contact from "./components/Contact";

import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
import Pizza from "./components/Pizza";
import UserContext from "./utils/userContext";
// import Grocery from "./components/Grocery";

 const Grocery = lazy(()=>import("./components/Grocery"));

 const About = lazy(()=>import("./components/About"))

const AppLayout = () => {

  const [userName,setUserName] =  useState()

  useEffect(()=>{
    const data = {
      name:"Anuj Yadav"
    };
    setUserName(data.name)
  },[])

  return (
    <UserContext.Provider value={{LoggedInUser:userName,setUserName}}>
    <div className="app">
      <Header />
      <Outlet />
      <Footer />
    </div>
    </UserContext.Provider>
  );
};

export const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,

    children: [
      {
path:'/',
element:<Body/>
      }
      ,
      {
        path: "/about",
        element: <Suspense fallback={<h1>Loading......</h1>}>
        <About/>
        </Suspense>,
        // errorElement: <Error />,
      },
      {
        path: "/contact",
        element: <Contact />,
        // errorElement: <Error />,
      },
      {
        path: "/grocery",
        element: <Suspense fallback={<h1>Loading......</h1>}>
          <Grocery/>
          </Suspense>,
      },
      {
        path: "/resturant/:ResId",
        element: <RestaurantMenu />,
      },
      {
        path:'/pizza',
        element:<Pizza/>
      }
     
    ],
  },

  // {
  //     path: '*',  // Wildcard route for handling unknown paths
  //     element: <Error />,
  // },
]);

export default AppLayout;
