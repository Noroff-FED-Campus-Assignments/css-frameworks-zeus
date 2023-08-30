import React from "react";
import ExampleLoginForm from "../components/example-login-form";

function LoginPage() {
  return (
    <>
      <div className="relative flex flex-col justify-center min-h-screen overflow-hidden p-5 ">
        <div className="w-full max-w-xl p-5 py-28 m-auto bg-white rounded-xl border-2 border-blue-500 ">
          <h1 className="text-3xl font-normal text-center text-gray-700 ">
            Login
          </h1>
          <form className="mt-6 m-auto max-w-sm">
            <div className="mb-2 py-1">
              <label
                htmlFor="email"
                className="block text-sm font-semibold text-gray-800"
              ></label>
              <input
                type="email"
                placeholder="Username or Email"
                className="block w-full px-4 py-2 mt-2 text-blue-500 bg-white border rounded-md focus:border-blue-500 focus:ring-blue-500 focus:outline-none focus:ring focus:ring-opacity-40"
              />
            </div>
            <div className="mb-2 py-3">
              <label
                htmlFor="password"
                className="block text-sm font-semibold text-gray-800"
              ></label>
              <input
                type="password"
                placeholder="Password"
                className="block w-full px-4 py-2 mt-2 text-blue-500 bg-white border rounded-md focus:border-blue-500 focus:ring-blue-500 focus:outline-none focus:ring focus:ring-opacity-40"
              />
            </div>

            <div className="mt-6">
              <button className="w-full px-4 py-2 tracking-wide rounded-3xl text-white transition-colors duration-200 transform bg-blue-500 hover:bg-blue-700 focus:outline-none focus:bg-blue-500">
                Log in
              </button>
            </div>
            <a
              href="#"
              className="text-xs flex justify-center pt-10 text-blue-500 hover:underline"
            >
              Forgot your password?
            </a>
          </form>

          <p className="mt-8 text-xs font-light text-center text-gray-700">
            {" "}
            Don't have an account?{" "}
            <a href="#" className="font-medium text-blue-500 hover:underline">
              Sign up
            </a>
          </p>
        </div>
      </div>
      <ExampleLoginForm />
    </>
  );
}

export default LoginPage;
