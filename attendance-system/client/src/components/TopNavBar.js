import React, { useContext } from "react";
import attendanceLogo from "../assets/attendance.svg";
import { AuthContext } from "../context/AuthContext";

const TopNavBar = () => {
  const { user, dispatch } = useContext(AuthContext);
  const handleSignout = () => {
    localStorage.removeItem("token");
    dispatch({
      type: "LOGOUT",
    });
  }; 

  return (
    <div>
      <nav className="bg-purple border-gray-200 dark:bg-gray-900 ">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-4">
          <a
            href="https://flowbite.com"
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <img src={attendanceLogo} className="h-8" alt="Flowbite Logo" />
            <span className="self-center text-2xl font-semibold whitespace-nowrap  text-white">
              Attendance System
            </span>
          </a>
          <div className="flex items-center space-x-6 rtl:space-x-reverse">
            <button
              type="button"
              class="py-2 px-4  bg-light-purple hover:bg-white focus:ring-white focus:ring-offset-slate-200
 text-purple w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 
 focus:ring-offset-2  rounded-full"
              onClick={handleSignout}
            >
              Sign out
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default TopNavBar;
