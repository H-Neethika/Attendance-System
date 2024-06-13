import React, { useContext } from "react";
import attendanceLogo from "../assets/attendance.svg";
import { AuthContext } from "../context/AuthContext";

const TopNavBar = () => {
  const { user, dispatch } = useContext(AuthContext);
  const handleSignout = () => {
    dispatch({
      type: "LOGOUT",
    });
  };

  return (
    <div>
      <nav className="bg-purple border-gray-200 dark:bg-gray-900 fixed top-0 w-full z-50 width=device-width min-w-[320px]">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-4">
          <a className="flex items-center space-x-3 rtl:space-x-reverse">
            <img
              src={attendanceLogo}
              className="h-16"
              alt="Attendance system Logo"
            />
            <span className="self-center text-2xl font-semibold whitespace-nowrap  text-white">
              Attendance System
            </span>
          </a>
          <div className=" flex items-center space-x-6 rtl:space-x-reverse mt-4 md:mt-0">
            <button
              type="button"
              class=" py-2 px-4  bg-light-purple hover:bg-white focus:ring-white focus:ring-offset-slate-200
 text-purple w-full transition transform hover:scale-110 duration-150 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 
 focus:ring-offset-2 rounded-lg "
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
