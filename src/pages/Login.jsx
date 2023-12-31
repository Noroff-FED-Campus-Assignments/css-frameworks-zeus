import { Link } from "@tanstack/react-router";
import { Helmet } from "react-helmet";

function LoginPage() {
  return (
    <>
      <Helmet>
        <title>Synapse Social - Login</title>
        <meta
          name="description"
          content="Synapse Social's Login page."
        />
        <meta
          name="keywords"
          content="HTML, Tailwind CSS, React, social media site,"
        />
        <meta name="author" content="Sander Selfors" />
      </Helmet>

      <div className="relative flex flex-col justify-center min-h-screen overflow-hidden p-5 ">
        <div className="w-full max-w-xl p-5 py-28 m-auto bg-white rounded-xl border-2 border-blue-500 ">
          <h1 className="text-3xl font-normal text-center text-gray-700 ">
            Login
          </h1>
          <form className="mt-6 m-auto max-w-sm">
            <div className="mb-2 py-1">
              <input
                type="email"
                placeholder="Username or Email"
                className="block w-full px-4 py-2 mt-2 text-blue-500 bg-white border rounded-md focus:border-blue-500 focus:ring-blue-500 focus:outline-none focus:ring focus:ring-opacity-40"
                required
              />
            </div>
            <div className="mb-2 py-3">
              <input
                type="password"
                placeholder="Password"
                className="block w-full px-4 py-2 mt-2 text-blue-500 bg-white border rounded-md focus:border-blue-500 focus:ring-blue-500 focus:outline-none focus:ring focus:ring-opacity-40"
                required
              />
            </div>
            <div className="mt-6 flex justify-center">
              <Link
                to="/profile"
                className="w-full text-center px-4 py-2 tracking-wide rounded-3xl text-white transition-colors duration-200 transform bg-blue-500 hover:bg-blue-700 focus:outline-none focus:bg-blue-500"
              >
                Log in
              </Link>
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
            Don`t have an account?{" "}
            <a href="#" className="font-medium text-blue-500 hover:underline">
              Sign up
            </a>
          </p>
        </div>
      </div>
    </>
  );
}

export default LoginPage;
