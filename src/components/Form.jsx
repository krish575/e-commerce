import { Formik } from "formik";
import React from "react";

const Form = () => {
  return (
    <Formik
      initialValues={{
        username: "",
        user_password: "",
      }}
      onSubmit={async (values, actions) => {
        console.log("values", values);
        actions.resetForm({ values });
        const login = await fetch("https://dummyjson.com/auth/login", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            username: values.username,
            password: values.user_password,
          }),
        });
      }}
      validate={(values) => {
        let errors = {};
        if (!values.username) {
          errors.username = "please enter your username";
        } else if (
          !values.username.match(
            /^(?=.{8,20}$)(?![_.])(?!.*[_.]{2})[a-zA-Z0-9._]+(?<![_.])$/
          )
        ) {
          errors.username = "please enter correct username";
        }
        if (!values.password) {
          errors.password = "please enter password";
        }
        return errors;
      }}
    >
      {({ handleSubmit, handleChange, handleBlur, isSubmitting, errors }) => (
        <form
          key="ac"
          onSubmit={handleSubmit}
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "1rem",
            width: "20%",
            margin: "auto",
          }}
        >
          <input
            type="text"
            placeholder="username"
            name="username"
            onChange={handleChange}
            onBlur={handleBlur}
            required
          />
          <input
            type="password"
            placeholder="password"
            name="user_password"
            onChange={handleChange}
            onBlur={handleBlur}
            required
          />
          {errors.user_password && <h6>{errors?.user_password}</h6>}
          {errors.username && <h6 style={{margin: 0}}>{errors?.username}</h6>}

          <input type="submit" value="submit button" disabled={isSubmitting} />
        </form>
      )}
    </Formik>
  );
};

export default Form;
