import React from "react";

//components
import LoginForm from "../components/containers/LoginForm";
import LoginImage from "../components/containers/LoginImage";
import SiteTitle from "../components/layout/Site/SiteTitle";
import Footer from "../components/layout/Site/Footer";
//assets
import Image from "../assets/images/login-image.jpg";

const Login = () => {
  return (
    <div className="flex justify-between m-0 w-screen h-screen">
      <span className=" flex flex-col justify-between min-w-max h-full w-full p-20	xl:w-1/4 xl:p-0 xl:pl-20 xl:pb-20 ">
        <span></span>
        <span className=" flex flex-col">
          <SiteTitle title="Open BootCamp" subtitle="Alumnos" />
          <LoginForm />
        </span>
        <Footer />
      </span>
      <LoginImage src={Image} alt="Open BootCamp" />
    </div>
  );
};

export default Login;
