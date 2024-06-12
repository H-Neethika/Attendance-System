import { useState, React , useContext} from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import LoginImage from "../assets/login.png";
import { AuthContext } from "../context/AuthContext";

export default function LoginPage() {
  const { dispatch } = useContext(AuthContext);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const handleLogin = async () => {
    const response = await axios.post("http://localhost:3001/login", {
      username: username,
      password: password
    });

    dispatch({
      type: "LOGIN",
      payload: response.data.token,
    });

    localStorage.setItem("token", response.data.token);

    navigate("/home");
  };

  return (
    <>
      <form>
        <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-purple via-light-purple to-white">
          <div className="relative flex flex-col m-6 space-y-8 bg-white shadow-2xl rounded-2xl md:flex-row md:space-y-0">
            <div className="flex flex-col justify-center p-8 md:p-14">
              <span className="mb-3 text-4xl font-bold mx-auto">LOGIN</span>
              <span className="font-light text-slate-500 font-medium mb-8 text-xl">
                Enter Your Username & Password to Login
              </span>
              <div className="py-1 my-4">
                <div className="w-full p-2 border bg-light-purple  rounded-xl placeholder:font-medium placeholder:text-slate-500 relative outline-none border-transparent">
                  <div className="absolute my-2 mx-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="size-6 semibold"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                      />
                    </svg>
                  </div>

                  <div className="mx-10 ">
                    <input
                      type="text"
                      name="pass"
                      id="pass"
                      className="w-full p-2  bg-light-purple border-light-purple  placeholder:font-semibold placeholder:text-black focus:outline-none focus:border-transparent"
                      placeholder="Username"
                      value={username}
                      onChange={(event) => {
                        setUsername(event.target.value);
                      }}
                    />
                  </div>
                </div>
              </div>
              <div className="py-1 my-4">
                <div className="w-full p-2 border bg-light-purple  rounded-xl placeholder:font-medium placeholder:text-slate-500 relative outline-none border-transparent">
                  <div className="absolute my-2 mx-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="size-6 font-semibold"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z"
                      />
                    </svg>
                  </div>

                  <div className="mx-10">
                    <input
                      type="password"
                      name="pass"
                      id="pass"
                      className="w-full p-2  bg-light-purple border-light-purple  placeholder:font-semibold placeholder:text-black focus:outline-none focus:border-transparent"
                      placeholder="Password"
                      value={password}
                      onChange={(event) => {
                        setPassword(event.target.value);
                      }}
                    />
                  </div>
                </div>
              </div>

              <button
                className="w-1/2 mx-auto py-4 bg-purple text-white font-semibold p-2 my-4 rounded-2xl mb-6 hover:bg-purple hover:text-white hover:border hover:border-gray-300 transform hover:scale-110 duration-100"
                type="submit"
                onClick={handleLogin}
              >
                Login Now
              </button>
            </div>

            <div className="relative transform hover:scale-110 duration-100">
              <img
                src={LoginImage}
                alt="img"
                className="w-[400px] h-full hidden rounded-r-2xl md:block object-cover"
              />
            </div>
          </div>
        </div>
      </form>
    </>
  );
}