import React, { Fragment, useState } from "react";
import { Link, Navigate } from "react-router-dom";
import { connect } from "react-redux";
import { login } from "../../stores/auth/actions";

const Login = (props) => {
  const [btnLoading, setBtnLoading] = useState(false);
  const [state, setState] = useState({
    email: "",
    password: "",
  });

  // console.log(props.token);
  // console.log(props.user);
  const Login = async () => {
    setBtnLoading(true);
    try {
      await props.login(state);
      if (props.token) {
        <Navigate to={"/home"} />;
      }
    } catch (error) {
      console.log(error);
    }

    setBtnLoading(false);
  };

  return (
    <Fragment>
      <main className="mx-auto flex min-h-screen w-full items-center justify-center bg-gray-900 text-white">
        <section className="flex w-[30rem] flex-col space-y-10">
          <div className="text-center text-4xl font-medium">Log In</div>

          <div className="w-full transform border-b-2 bg-transparent text-lg duration-300 focus-within:border-indigo-500">
            <input
              type="text"
              placeholder="Email or Username"
              className="w-full border-none bg-transparent outline-none placeholder:italic focus:outline-none"
              onChange={(e) => setState({ ...state, email: e.target.value })}
            />
          </div>

          <div className="w-full transform border-b-2 bg-transparent text-lg duration-300 focus-within:border-indigo-500">
            <input
              type="password"
              placeholder="Password"
              className="w-full border-none bg-transparent outline-none placeholder:italic focus:outline-none"
              onChange={(e) => setState({ ...state, password: e.target.value })}
            />
          </div>

          {btnLoading ? (
            <button
              type="button"
              className="btn-indigo ml-auto flex items-center"
              disabled
            >
              <svg
                fill="white"
                className="animate-spin h-5 w-5 mr-3"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path d="M5.344 19.442l-1.186 1.628c-2.305-1.995-3.842-4.85-4.107-8.07h2c.255 2.553 1.48 4.819 3.293 6.442zm16.605-6.442c-.256 2.56-1.487 4.831-3.308 6.455l1.183 1.631c2.315-1.997 3.858-4.858 4.125-8.086h-2zm-19.898-2c.256-2.561 1.487-4.832 3.309-6.456l-1.183-1.631c-2.317 1.996-3.86 4.858-4.126 8.087h2zm4.927-7.633c1.477-.864 3.19-1.367 5.022-1.367 1.839 0 3.558.507 5.039 1.377l1.183-1.624c-1.817-1.105-3.941-1.753-6.222-1.753-2.272 0-4.39.644-6.201 1.741l1.179 1.626zm12.863-.438l-1.186 1.628c1.813 1.624 3.039 3.889 3.294 6.443h2c-.265-3.221-1.802-6.076-4.108-8.071zm-2.817 17.703c-1.478.864-3.192 1.368-5.024 1.368-1.84 0-3.56-.508-5.042-1.378l-1.183 1.624c1.818 1.106 3.943 1.754 6.225 1.754 2.273 0 4.392-.644 6.203-1.742l-1.179-1.626z" />
              </svg>
              Processing...
            </button>
          ) : (
            <button
              onClick={() => Login()}
              type="button"
              className="transform rounded-sm bg-indigo-600 py-2 font-bold duration-300 hover:bg-indigo-400"
            >
              LOG IN
            </button>
          )}

          <span className="transform text-center font-semibold text-gray-500 duration-300 hover:text-gray-300">
            <Link to={"/forget-password"}>FORGOT PASSWORD?</Link>
          </span>

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

const mapStateToProps = (state) => ({
  token: state.auth.token,
  user: state.auth.user,
});
const mapDispatchToProps = {
  login,
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
