import { Button, TextField } from "@mui/material";
import React from "react";
import { Formik } from "formik";
import Swal from "sweetalert2";

const Signup = () => {
  // 1. Create a form object which should match with model fields
  const userForm = {
    username: "",
    email: "",
    contact: "",
    age: 0,
    password: "",
  };

  // 2. Create a function for form submission
  const userSubmit = (formdata) => {
    console.log(formdata);
  };

  //   3. use Formik component
  //for connection from frontend to backend
  fetch("http://localhost:5000/meme/add",{
    method:"post",
    body:JSON.stringify(formdata),//convert javascrip to json
    headers:{"content-type":"application/json",

  },
  }).then((res) => {
    if(res.status===200){
    console.log("data saved");
    Swal.fire({
      icon:"sucess",
      title:'Sucess',
      text:"registered sucessfully!!.",

    });
  }
  });
};
  return (
    <div className="container">
      <h1>Signup Here</h1>
      <hr className="mb-5" />

      <Formik initialValues={userForm} onSubmit={userSubmit}>
        {({ values, handleChange, handleSubmit }) => (
          <form onSubmit={handleSubmit}>
            <TextField
              label="Username"
              variant="outlined"
              className="w-100 mb-4"
              id="username"
              onChange={handleChange}
              value={values.username}
            />
            <TextField
              label="Email"
              variant="outlined"
              className="w-100 mb-4"
              id="email"
              onChange={handleChange}
              value={values.email}
            />
            <TextField
              label="Password"
              variant="outlined"
              className="w-100 mb-4"
              id="password"
              onChange={handleChange}
              value={values.password}
            />

            <Button type="submit" variant="contained">
              Submit
            </Button>
          </form>
        )}
      </Formik>
    </div>
  );


// formik

export default Signup;