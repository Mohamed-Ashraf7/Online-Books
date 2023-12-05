import * as Yup from "yup";

//registration Schema

export const RegisterSchema = Yup.object().shape({
  name: Yup.string()
    .required("Name is required")
    .min(3, "Min length is 3")
    .max(15, "Max length is 15"),
  email: Yup.string().required("Email is required").email("Email is invalid"),
  password: Yup.string()
    .required("password is required")
    .min(3, "Min length is 3")
    .max(15, "Max length is 15")
    .matches(
      /^[A-Z][a-z0-9]{5,10}$/,
      "Password must start with uppercase letter"
    ),
  password_confirmation: Yup.string()
    .required("rePassword is required")
    .oneOf([Yup.ref("password")], "your password don't match"),
});

// login
export const loginSchema = Yup.object().shape({
  email: Yup.string().required("Email is required").email("Email is invalid"),
  password: Yup.string()
    .required("password is required")
    .min(3, "Min length is 3")
    .max(15, "Max length is 15")
    .matches(
      /^[A-Z][a-z0-9]{5,10}$/,
      "Password must start with uppercase letter"
    ),
});
