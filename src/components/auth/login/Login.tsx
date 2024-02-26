import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserContextApi } from "../../../context/AuthContext";
import { UsersContextApi } from "../../../context/UserContext";
import { FcGoogle } from "react-icons/fc";
import gif from "../../media/login.json";
import Lottie from "lottie-react";

type FormSubmitEvent = React.FormEvent<HTMLFormElement>;

const Login = () => {
  let navigate = useNavigate();
  const contextValue = useContext(UserContextApi);

  const signIn = contextValue?.signIn;

  const data = useContext(UsersContextApi);
  const users = data?.userData;
  // console.log(users, "final data======");

  type AuthType = {
    email: string;
    password: string;
  };

  const [authData, setAuthData] = useState<AuthType>({
    email: "",
    password: "",
  });

  const { email, password } = authData;
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setAuthData({ ...authData, [name]: value });
  };

  const handleSubmit = (e: FormSubmitEvent) => {
    e.preventDefault();
    if (signIn) {
      if (users) {
        let user = signIn(authData, users);
        // console.log(role, "=========");
        if (user.role === "admin") {
          navigate("/admin", { state: { user } });
        } else if (user.role === "user") {
          navigate("/user", { state: { user } });
        }
      }
    }
  };

  return (
    <section className="main-container">
      <article className="inner-container">
        <div className="w-[50%] p-16 relative bottom-12 left-2">
          <Lottie animationData={gif} />
        </div>
        <div className="signup-container">
          <div className="signup-main-container">
            <article className="p-3 border-emerald-800 rounded-md  text-white w-[410px] flex justify-center items-center flex-col gap-6">
              <div className="w-[99%]">
                <h1 className=" font-mono font-bold text-[40px] text-start text-blue-700">
                  Login
                </h1>
              </div>
              <div className=" w-[100%] text-emerald-800 h-[45px] border-2 font-semibold border-emerald-600 flex justify-center items-center gap-2">
                <FcGoogle className="text-[23px]" />
                Login with Google
              </div>

              <div className="w-[75%] text-center relative top-2">
                <fieldset className="border-t-2  border-[#a3a3a3d8]"></fieldset>
                <article className="relative bottom-4 text-[#a3a3a3b5] inline-block bg-white px-2">
                  or Login with Email{" "}
                </article>
              </div>

              <form
                onSubmit={handleSubmit}
                className=" flex flex-col gap-4 text-[18px] w-[100%]"
              >
                <div className="flex flex-col w-[100%]">
                  <input
                    type="email"
                    name="email"
                    id="email"
                    value={email}
                    onChange={handleInputChange}
                    placeholder="Email"
                    className="focus:bg-emerald-100 w-[100%] border-2 border-emerald-600 text-gray-700 font-mono text-[18px] h-[45px] pl-4"
                  />
                </div>
                <div className="flex flex-col w-[100%]">
                  <input
                    type="password"
                    name="password"
                    id="password"
                    value={password}
                    placeholder="Password"
                    onChange={handleInputChange}
                    className="focus:bg-emerald-100 w-[100%] border-2 border-emerald-600 text-gray-700 font-mono text-[18px]  h-[45px] pl-4"
                  />
                </div>
                <div className="w-[100%] cursor-pointer text-end text-black hover:underline transition-all duration-200 hover:text-red-600">
                  Forget Password ?
                </div>
                <button className="w-[100%] bg-blue-700 hover:tracking-widest transition-all duration-200 text-white rounded-md h-[44px] ">
                  LOGIN
                </button>
              </form>
            </article>
            <h3 className="text-[17px]">
              {" "}
              Not Registered ?{" "}
              <Link to="/signup">
                {" "}
                <span className="underline underline-offset-4 text-red-900">
                  {" "}
                  Create an Account{" "}
                </span>{" "}
              </Link>
            </h3>
          </div>
        </div>
      </article>
    </section>
  );
};

export default Login;
