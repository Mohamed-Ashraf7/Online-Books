import React from "react";
import { useFormik } from "formik";
import { useDispatch } from "react-redux";
import { openModal, closeModal } from "../store/modalSlice";
import { loginSchema } from "../utils/ValidationSchema";
import { loginUser } from "../store/authSlice";
import { sucess, failed } from "../utils/Toast";
const Login = () => {
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validateOnChange: false,
    validationSchema: loginSchema,
    onSubmit: (values) => {
      dispatch(loginUser(values)).then((result) => {
        if (!result.error) {
          dispatch(closeModal());
          sucess("Congrats ... " + result.payload.message);
        } else {
          failed(result.payload);
        }
      });
    },
  });
  return (
    <div className="flex flex-col max-w-sm p-6 rounded-lg shadow-lg shadow-neutral-400 sm:p-10 border-2">
      <div className="mb-4 text-center py-4">
        <h1 className="my-3 text-4xl font-bold">Sign in</h1>
        <p className="text-sm ">Sign in to access your account</p>
      </div>
      <form onSubmit={formik.handleSubmit} className="space-y-4">
        <div className="mb-1">
          <label htmlFor="email" className="text-sm">
            Email address
          </label>
          <input
            type="text"
            name="email"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
            placeholder="leroy@jenkins.com"
            className="w-full px-3 py-2 border rounded-md "
          />
          {formik.errors.email && formik.touched.email ? (
            <p className="text-red-600 text-sm">{formik.errors.email}</p>
          ) : null}
        </div>
        <div className="mb-1">
          <label htmlFor="password" className="text-sm">
            Password
          </label>
          <input
            type="password"
            name="password"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.password}
            placeholder="*******"
            className="w-full px-3 py-2 border rounded-md "
          />
          {formik.errors.password && formik.touched.password ? (
            <p className="text-sm text-red-600">{formik.errors.password}</p>
          ) : null}
        </div>
        <div className="space-y-2 centerd flex-col">
          <button
            type="submit"
            className={`${
              !formik.isValid ? "bg-gray-800 hover:bg-gray-800 btn " : "btn"
            }`}
            disabled={!(formik.isValid && formik.dirty)}
          >
            Sign in
          </button>
          <p className="px-6 text-sm text-center ">
            Don't have an account yet ?
            <button
              onClick={() => dispatch(openModal({ name: "Register" }))}
              className="hover:underline ms-2 "
            >
              {" "}
              Sign up
            </button>
            .
          </p>
        </div>
      </form>
    </div>
  );
};

export default Login;
