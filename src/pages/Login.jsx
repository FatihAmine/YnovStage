import React from "react";

export default function Login() {
  return (
    <div className="relative min-h-screen flex items-center justify-center bg-Lgreen">
          {/* Vertical Line */}
          <div className="hidden lg:block absolute inset-y-0 left-1/2 w-[2px] bg-white transform -translate-x-1/2"></div>
          <div className="flex items-center justify-center w-full px-4">
          <div className="hidden sm:flex sm:items-center sm:justify-between w-full max-w-[1200px]">
          {/* Image section */}
          <div className="flex-shrink-0 w-1/3 flex justify-end pr-4">
            <img src="/ynovimg.png" alt="Logo" className="w-[200px] sm:w-[600px]" />
          </div>
          {/*  form */}
          <div className="w-1/2 flex lg:items-center lg:justify-center lg:h-[400px] lg:w-[460px] flex-col space-y-6 rounded-[20px] bg-white p-6 xs:w-[380px] xs:h-[400px] sm:w-[600px] sm:h-[400px]">
            <div>
              <h1 className="flex justify-center text-[30px] text-Lgreen">
                Login
              </h1>
            </div>
            <div className="flex flex-col space-y-3">
              <h6 className="text-Lgray">Email</h6>
              <input
                type="email"
                placeholder="Email"
                className="rounded-[8px] border border-Lgreen p-2 pr-[200px] text-black"
              />
            </div>
            <div className="flex flex-col space-y-3">
              <h6 className="text-Lgray">Password</h6>
              <input
                type="password"
                placeholder="Password"
                className="rounded-[8px] border border-Lgreen p-2 pr-[200px] text-black"
              />
            </div>
            <div className="flex justify-center">
              <button href="/singin.jsx" className="mt-4 rounded-[20px] bg-Lgray p-2 px-[80px] text-white opacity-60 hover:bg-Lgray hover:opacity-100">
                Login 
              </button>
            </div>
                <div className="flex justify-center space-x-2">
                  <p>I don't have an account?</p><span className="text-Lgreen"> <a href="./Sign">singin in instead</a></span>
                </div>
          </div>
        </div>
  
        {/* For smaller screens (xs and sm)*/}
        <div className="sm:hidden flex flex-col items-center">
          <img src="/ynovimg.png" alt="Logo" className="w-[200px] xs:w-[200px]" />
          <div className="flex flex-col items-center space-y-6 mt-[30px]">
            <div className="flex lg:items-center lg:justify-center lg:h-[370px] lg:w-[460px] flex-col space-y-6 rounded-[20px] bg-white p-6 xs:w-[380px] xs:h-[400px] sm:w-[600px] sm:h-[400px]">
              <div>
                <h1 className="flex justify-center text-[30px] text-Lgreen">
                  Login 
                </h1>
              </div>
              <div className="flex flex-col space-y-3">
                <h6 className="text-Lgray">Email</h6>
                <input
                  type="email"
                  placeholder="Email"
                  className="rounded-[8px] border border-Lgreen p-2 pr-[200px] text-black"
                />
              </div>
              <div className="flex flex-col space-y-3">
                <h6 className="text-Lgray">Password</h6>
                <input
                  type="password"
                  placeholder="Password"
                  className="rounded-[8px] border border-Lgreen p-2 pr-[200px] text-black"
                />
              </div>
              <div className="flex justify-center">
                <button src="/siginin.jsx" className="mt-4 rounded-[20px] bg-Lgray p-2 px-[80px] text-white opacity-60 hover:bg-Lgray hover:opacity-100">
                  Login In
                </button>
                <div className="flex justify-center">
                  <p>I don't have an account?</p>
                  <a className="text-Lgreen">Login in instead</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}







