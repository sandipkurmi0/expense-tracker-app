import React, { Fragment } from "react";
import { Link } from "react-router-dom";

const ForgetPassword = () => {
  return (
    <Fragment>
      {" "}
      <main className="mx-auto flex min-h-screen w-full items-center justify-center bg-gray-900 text-white">
        <section className="flex w-[30rem] flex-col space-y-10">
          <div className="text-center text-4xl font-medium">
            Forget Password
          </div>

          <div className="w-full transform border-b-2 bg-transparent text-lg duration-300 focus-within:border-indigo-500">
            <input
              type="text"
              placeholder="Email"
              className="w-full border-none bg-transparent outline-none placeholder:italic focus:outline-none"
            />
          </div>

          <button className="transform rounded-sm bg-indigo-600 py-2 font-bold duration-300 hover:bg-indigo-400">
            Submit
          </button>
          <p className="text-center text-lg">
            Already have an account?
            <span className="font-medium text-indigo-500 underline-offset-4 hover:underline">
              <Link to={"/login"}>Login</Link>
            </span>
          </p>
          <p className="text-center text-lg">
            No account?
            <span className="font-medium text-indigo-500 underline-offset-4 hover:underline">
              <Link to={"/signup"}>Create One</Link>
            </span>
          </p>
        </section>
      </main>
    </Fragment>
  );
};

export default ForgetPassword;
