import { Form, Formik, useFormik } from "formik";
import { basicSchema } from "./Schema/Schema";

const onSubmit =async (values , action) =>{
  console.log("submitted")
  console.log(values)
  console.log(action)
  await new Promise((resolve) => setTimeout(resolve, 1000));
  action.resetForm()
}

const BasicForm = () => {
  const {
    values,
    errors,
    touched,
    isSubmitting,
    handleBlur,
    handleChange,
    handleSubmit,
  } = useFormik({
    initialValues: {
      email: "",
      age: "",
      password: "",
      confirmPassword: "",
    },
    validationSchema: basicSchema,
    onSubmit,
  });

  console.log(values)
  console.log(errors);

  return (
  <form onSubmit={handleSubmit} autoComplete="off" className="basicform">
    <label htmlFor="email">
      Email
    </label>
    <input
    type="text"
    id="email"
    name="email"
    value={values.email}
    onChange={handleChange}
    onBlur={handleBlur}
    placeholder="Enter your email"
    className={errors.email && touched.email ? "border-red-600" : ""}
    />
    {errors.email && touched.email ? <div className="text-red-600">{errors.email}</div> : ""}

    <label htmlFor="age">
      Age
    </label>
    <input
    type="number"
    id="age"
    name="age"
    value={values.age}
    onChange={handleChange}
    onBlur={handleBlur}
    placeholder="Enter your age"
    className={errors.age && touched.age ? "border-red-600" : ""}
    />
    {errors.age && touched.age ? <div className="text-red-600">{errors.age}</div> : ""}


    <label htmlFor="password">Password</label>
    <input
    type="password"
    id="password"
    name="password"
    value={values.password}
    onChange={handleChange}
    onBlur={handleBlur}
    placeholder="Enter your password"
    className={errors.password && touched.password ? "border-red-600" : ""}
    />
    {errors.password && touched.password ? <div className="text-red-600">{errors.password}</div>: ""}

    <label htmlFor="confirmPassword">Confirm Password</label>
    <input
    type="password"
    id="confirmPassword"
    name="confirmPassword"
    value={values.confirmPassword}
    onChange={handleChange}
    onBlur={handleBlur}
    placeholder="Re-enter your password"
    className={errors.confirmPassword && touched.confirmPassword ? "border-red-600" : ""}
    />
    {errors.confirmPassword && touched.confirmPassword ? <div className="text-red-600">{errors.confirmPassword}</div> : ""}

    <button  className="submit" type="submit">
      Submit
    </button>
  </form>
  );
};
export default BasicForm;