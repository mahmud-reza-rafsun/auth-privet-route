import React, { useContext, useState } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { Navigate, useNavigate } from "react-router-dom";

const Login = () => {
  const { signInUser, signInGoogle } = useContext(AuthContext);
  const [success, setSuccess] = useState(false);
  const navigate = useNavigate();
  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(email, password);
    setSuccess(false);
    // siginIn User
    signInUser(email, password)
      .then((result) => {
        console.log(result.user);
        e.target.reset();
        navigate("/orders");
        setSuccess(true);
      })
      .catch((error) => {
        console.log("ERROR", error.message);
      });
  };
  const handleSignWithGoogle = () => {
    signInGoogle()
      .then(() => {
        console.log("user logged in");
      })
      .catch((error) => console.log("ERROR", error));
  };
  return (
    <div className="hero bg-base-200 min-h-[85vh]">
      <div className="hero-content flex-col">
        <div className="text-center lg:text-left">
          <h1 className="text-3xl font-bold">Login now!</h1>
        </div>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <form onSubmit={handleLogin} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                name="password"
                placeholder="password"
                className="input input-bordered"
                required
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Login</button>
            </div>
          </form>
          <div className="p-5">
            <button
              onClick={handleSignWithGoogle}
              className="btn btn-accent w-fit"
            >
              Google
            </button>
          </div>
          {success && <p className="text-green-500 p-3">Login Successfull.</p>}
        </div>
      </div>
    </div>
  );
};

export default Login;
