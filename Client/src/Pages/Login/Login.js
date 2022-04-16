import React from "react";

import {
  LoginOutlined,
  GoogleOutlined,
  FacebookFilled,
} from "@ant-design/icons";

import "./Login.css";

function Login() {
  return (
    <div className="login-background h-screen bg-no-repeat bg-center bg-cover">
      <div className="h-screen login-shade grid place-content-center">
        <div className="bg-white shadow-md bg-opacity-70 h-auto w-96 py-10 px-14 rounded-2xl">
          <h1 className="text-4xl">Sign In</h1>
          <form className="pt-6">
            <div className="mb-4">
              <label
                className="block text-gray-500 text-xs mb-2"
                for="username"
              >
                EMAIL
              </label>
              <input
                className="shadow appearance-none border rounded-lg w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="username"
                type="text"
                placeholder="your@email.com"
              />
            </div>
            <div className="mb-8">
              <label
                className="block text-gray-500 text-xs mb-2"
                for="password"
              >
                PASSWORD
              </label>
              <input
                className="shadow appearance-none border rounded-lg w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                id="password"
                type="password"
                placeholder="******************"
              />
              <div className="flex items-center justify-between">
                <div className="form-check flex items-center">
                  <input
                    className="form-check-input appearance-none h-4 w-4 my-1 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                    type="checkbox"
                    value=""
                    id="flexCheckChecked"
                  />
                  <label
                    className="form-check-label inline-block text-gray-700 text-sm my-2"
                    for="flexCheckChecked"
                  >
                    Remember Me
                  </label>
                </div>
                <a
                  className="inline-block align-baseline underline text-xs text-blue-500 hover:text-blue-800"
                  href="#"
                >
                  Forgot Password?
                </a>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <button
                className="bg-lime-500 hover:bg-lime-600 text-black text-sm py-3 px-4 w-full rounded-md focus:outline-none focus:shadow-outline flex items-center justify-center"
                type="submit"
              >
                <LoginOutlined className="flex align-bottom mx-2" />
                Sign In
              </button>
            </div>
          </form>
          <div className="relative flex py-8 items-center">
            <div className="flex-grow border-t border-gray-500"></div>
            <span className="flex-shrink mx-4 text-gray-500 text-xs">
              Or Continue With
            </span>
            <div className="flex-grow border-t border-gray-500"></div>
          </div>
          <div className="mt-1 flex items-center justify-between">
            <button
              className="bg-blue-500 hover:bg-blue-600 text-white text-sm py-3 px-4 w-full rounded-md focus:outline-none focus:shadow-outline flex items-center justify-center"
              type="submit"
            >
              <FacebookFilled className="flex align-bottom mx-2" />
              Sign in with Facebook
            </button>
          </div>
          <div className="mt-4 flex items-center justify-between">
            <button
              className="bg-rose-500 hover:bg-rose-600 text-white text-sm py-3 px-4 w-full rounded-md focus:outline-none focus:shadow-outline flex items-center justify-center"
              type="submit"
            >
              <GoogleOutlined className="flex align-bottom mx-2" />
              Sign in with Google
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
