import { useDispatch } from "react-redux";
import { openModal } from "../store/modalSlice";
import { useFormik } from "formik";
import { RegisterSchema } from "./../utils/ValidationSchema";
import { sucess, failed } from "../utils/Toast";
import { registerUser } from "../store/authSlice";

const Register = () => {
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
      password_confirmation: "",
    },
    validateOnChange: false,
    validationSchema: RegisterSchema,
    onSubmit: (values) => {
      dispatch(registerUser(values)).then((result) => {
        if (!result.error) {
          dispatch(openModal({ name: "Login" }));
          sucess("Congrats ... " + result.payload.message);
        } else {
          failed(result.payload);
        }
      });
    },
  });
  console.log("register");
  return (
    <div className="flex flex-col max-w-sm p-4 rounded-lg shadow-lg shadow-neutral-400 sm:p-6 sm:py-5 border-2">
      <div className="mb-3 text-center">
        <h1 className="my-1 text-4xl font-bold">Sign up</h1>
        <p className="text-sm ">Sign up to access Books Store</p>
      </div>
      <form onSubmit={formik.handleSubmit} className="space-y-2">
        <div>
          <label htmlFor="name" className="text-sm">
            User Name
          </label>
          <input
            type="text"
            name="name"
            id="name"
            autoComplete="off"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.name}
            placeholder="User Name"
            className="w-full px-3 py-2 border rounded-md "
          />
          {formik.errors.name && formik.touched.name ? (
            <p className="text-red-600 text-sm">{formik.errors.name}</p>
          ) : null}
        </div>
        <div>
          <label htmlFor="email" className="text-sm">
            Email address
          </label>
          <input
            type="email"
            name="email"
            id="email"
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
        <div>
          <label htmlFor="password" className="text-sm">
            Password
          </label>
          <input
            type="password"
            name="password"
            id="password"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.password}
            placeholder="*****"
            className="w-full px-3 py-2 border rounded-md "
          />
          {formik.errors.password && formik.touched.password ? (
            <p className="text-red-600 text-sm">{formik.errors.password}</p>
          ) : null}
        </div>
        <div>
          <label htmlFor="password_confirmation" className="text-sm">
            confirm Password
          </label>
          <input
            type="password"
            name="password_confirmation"
            id="password_confirmation"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.password_confirmation}
            placeholder="*****"
            className="w-full px-3 py-2 border rounded-md"
          />{" "}
          {formik.errors.password_confirmation &&
          formik.touched.password_confirmation ? (
            <p className="text-red-600 text-sm">
              {formik.errors.password_confirmation}
            </p>
          ) : null}
        </div>
        <div className="space-y-1 centerd flex-col">
          <button
            type="submit"
            className="btn"
            disabled={!(formik.isValid && formik.dirty)}
          >
            Sign in
          </button>
          <p className="px-6 text-sm text-center ">
            {" "}
            already have an account !
            <button
              onClick={() => dispatch(openModal({ name: "Login" }))}
              className="hover:underline ms-2 "
            >
              log in
            </button>
            .
          </p>
        </div>
      </form>
    </div>
  );
};

export default Register;
