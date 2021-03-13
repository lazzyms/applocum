import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect, withRouter, Link } from "react-router-dom";
import { useForm } from "react-hook-form";

import { signup } from "../../actions/auth";

const Register = (props) => {
  const { loading, setLoading } = useState(false);
  const { isLoggedIn } = useSelector((state) => state.auth);
  const { message } = useSelector((state) => state.message);

  const dispatch = useDispatch();

  const { register, handleSubmit, errors } = useForm();
  const onSubmit = (data) => {
    dispatch(signup(data.email, data.password))
      .then(() => {
        props.history.push("/");
        // window.location.reload();
      })
      .catch(() => {
        setLoading(false);
      });
  };

  if (isLoggedIn) {
    return <Redirect to="/" />;
  }

  return (
    <div className="row">
      <div className="col-12 my-3">
        <h5 className="text-center">Register</h5>
      </div>
      <div className="col-12">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="form-group">
            <input
              name="email"
              type="email"
              className="form-control"
              placeholder="Email"
              ref={register({ required: true })}
            />
            {errors.email && (
              <span className="text-danger">Email is required</span>
            )}
          </div>
          <div className="form-group">
            <input
              name="password"
              type="password"
              className="form-control"
              placeholder="Password"
              ref={register({ required: true })}
            />
            {errors.password && (
              <span className="text-danger">Password is required</span>
            )}
          </div>
          <div className="form-group">
            <input
              name="first_name"
              type="text"
              className="form-control"
              placeholder="First Name"
              ref={register({ required: true })}
            />
            {errors.first_name && (
              <span className="text-danger">First Name is required</span>
            )}
          </div>
          <div className="form-group">
            <input
              name="last_name"
              type="text"
              className="form-control"
              placeholder="Last Name"
              ref={register({ required: true })}
            />
            {errors.last_name && (
              <span className="text-danger">Last Name is required</span>
            )}
          </div>
          <div className="form-group">
            <input
              name="phone"
              type="tel"
              className="form-control"
              placeholder="Phone"
              ref={register({ required: true })}
            />
            {errors.phone && (
              <span className="text-danger">Phone is required</span>
            )}
          </div>
          <button className="btn btn-success btn-block" type="button">
            {loading ? (
              <span
                className="spinner-grow spinner-grow-sm"
                role="status"
                aria-hidden="true"
              ></span>
            ) : (
              ``
            )}
            Register
          </button>
          {message && (
            <div className="form-group">
              <div className="alert alert-danger" role="alert">
                {message}
              </div>
            </div>
          )}
        </form>
        <div className="py-2">
          Already have account? <Link to="/login">Login Here.</Link>
        </div>
      </div>
    </div>
  );
};

export default withRouter(Register);
