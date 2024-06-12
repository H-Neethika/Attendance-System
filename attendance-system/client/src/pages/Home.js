import React from "react";

import TopNavBar from "../components/TopNavBar";
import "flowbite";
import { Carousel } from "flowbite-react";
import attendance1 from "../assets/Confirmed attendance.svg"; // Image paths remain unchanged
import attendance2 from "../assets/Teaching.svg";
import budget from "../assets/budget.png";

const Home = () => {
  return (
    <div>
      <TopNavBar />
      <div className="w-full min-h-screen h-screen">
        <Carousel
          onSlideChange={(index) => console.log("onSlideChange()", index)}
        >
          <div className="flex w-full h-screen items-center justify-center bg-slate-200 dark:bg-gray-700 dark:text-white">
            <div>
              <img
                src={attendance1}
                alt="Attendance Guidelines"
                className="max-w-full h-auto md:max-w-md lg:max-w-full w-full"
              />
            </div>
            <div className="md:w-1/2 pt-8">
              <h1 className="text-1xl md:text-3xl lg:text-5xl font-semibold mb-4 text-slate-600 md:w-3/4 leading-snug">
                Welcome<span className="text-purple">To Attendance System</span>
              </h1>
              <p className="text-NeutralGrey text-lg pt-8">
                Learn how to effectively use the attendance system to mark
                attendance and monitor employee presence.
              </p>
            </div>
          </div>
          <div className=" flex w-full h-screen items-center justify-center bg-slate-200 dark:bg-gray-700 dark:text-white">
            <div>
              <img
                src={attendance2}
                alt="Attendance Notices"
                className="max-w-full h-auto md:max-w-md lg:max-w-full w-full"
              />
            </div>
            <div className="md:w-3/4">
              <h1 className="text-1xl md:text-3xl lg:text-5xl font-semibold mb-4 text-slate-600 md:w-3/4 leading-snug">
                Stay Updated with{" "}
                <span className="text-purple">Attendance Notices</span>
              </h1>
              <p className="text-NeutralGrey text-lg">
                Keep up-to-date with important notices regarding attendance
                policies and procedures.
              </p>
            </div>
          </div>
          <div className="flex w-full h-screen items-center justify-center bg-slate-200 dark:bg-gray-700 dark:text-white">
            <div>
              <img
                src={budget}
                alt="Attendance Reports"
                className="max-w-full h-auto md:max-w-md lg:max-w-full w-full"
              />
            </div>
            <div className="md:w-3/4">
              <h1 className="text-1xl md:text-3xl lg:text-5xl font-semibold mb-4 text-slate-600 md:w-3/4 leading-snug">
                Generate Comprehensive{" "}
                <span className="text-purple">Attendance Reports</span>
              </h1>
              <p className="text-NeutralGrey text-lg mb-8 mt-8">
                Utilize detailed attendance reports to analyze employee presence
                and punctuality.
              </p>
            </div>
          </div>
        </Carousel>
      </div>
    </div>
  );
};

export default Home;
