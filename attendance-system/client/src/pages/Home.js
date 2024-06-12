import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import axios from "axios";
import TopNavBar from "../components/TopNavBar";
import "flowbite";
import { Carousel } from "flowbite-react";
import attendance1 from "../assets/Confirmed attendance.svg"; // Image paths remain unchanged
import attendance2 from "../assets/Teaching.svg";
import attendance3 from "../assets/college class.svg";

const Home = () => {
  const { user, dispatch } = useContext(AuthContext);
  const [userName, setUsername] = useState("");

  const getUserProfile = async () => {
    axios.defaults.headers.common["Authorization"] = user;

    await axios
      .get("http://localhost:3001/home")
      .then((res) => {
        setUsername(res.data);
        console.log(userName);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  useEffect(() => {
    getUserProfile();
  }, []);
  return (
    <div>
      <TopNavBar />
      <div className="w-full min-h-screen h-screen">
        <Carousel
          onSlideChange={(index) => console.log("onSlideChange()", index)}
        >
          <div className="mx-auto flex flex-col md:flex-row w-full h-screen items-center justify-center bg-slate-200 dark:bg-gray-700 dark:text-white">
            <div className="flex justify-center items-center md:w-1/2 w-full">
              <img
                src={attendance1}
                alt="Attendance Guidelines"
                className=" sm:h-2/3"
              />
            </div>
            <div className="md:w-1/2 pt-0 text-center md:text-left">
              <h1 className="text-2xl md:text-3xl lg:text-5xl font-semibold mb-4 text-slate-600 leading-snug">
                Welcome {user && userName}{" "}
                <span className="text-purple">To Attendance System</span>
              </h1>
              <p className="text-NeutralGrey text-lg pt-0">
                Easily confirm attendance to track student presence and promote
                regular school attendance.
              </p>
            </div>
          </div>

          <div className="mx-auto flex flex-col md:flex-row w-full h-screen items-center justify-center bg-slate-200 dark:bg-gray-700 dark:text-white">
            <div className="flex justify-center items-center md:w-1/2 w-full">
              <img src={attendance2} alt="Attendance Notices"  className=" sm:h-2/3"/>
            </div>
            <div className="md:w-1/2 pt-0 text-center md:text-left px-4 md:px-8">
              <h1 className="text-2xl md:text-3xl lg:text-5xl font-semibold mb-4 text-slate-600 leading-snug">
                Stay Updated with{" "}
                <span className="text-purple">Automated Reports</span>
              </h1>
              <p className="text-neutral-gray-600 text-lg">
                From automated reports to seamless integration with existing
                school systems, our solution simplifies attendance management
                for administrators.
              </p>
            </div>
          </div>

          <div className="mx-auto flex flex-col md:flex-row items-center justify-center w-full h-screen bg-slate-200 dark:bg-gray-700 dark:text-white">
            <div className="flex justify-center items-center md:w-1/2 w-full mb-8 md:mb-0">
              <img src={attendance3} alt="Attendance Reports"  className=" sm:h-2/3"/>
            </div>
            <div className="md:w-1/2 w-full px-4 md:px-8">
              <h1 className="text-center md:text-left text-2xl md:text-3xl lg:text-5xl font-semibold mb-4 text-slate-600 leading-snug">
                Easy Handling of{" "}
                <span className="text-purple">High volume of data</span>
              </h1>
              <p className="text-center md:text-left text-neutral-gray-600 text-lg mb-8 mt-0">
                Handle high volumes of student attendance effortlessly with our
                robust and scalable system, ensuring smooth operations even
                during peak times.
              </p>
            </div>
          </div>
        </Carousel>
      </div>
    </div>
  );
};

export default Home;
