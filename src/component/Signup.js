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
{
  return(
    
    /*
    <div className="card-body">
    <div className="loginpage">
    <div style={{ background: "", height: "100vh" }}>
          <div className="row h-100 justify-content-center align-items-center">
            <div className="col-md-3">
            
            <div className="card">
              
                <div className="card-body">
                  
                  <h3 className="text-muted text-center">Login Form</h3>
                  <hr />

                  <Formik
                    initialValues={{ email: "", password: "" }} //specifying initial value for form
                    onSubmit={handleFormSubmit} // function to handle form submission
                    validationSchema={loginSchema}
                  >
                    {({ values, handleChange, handleSubmit, errors, touched }) => (
                      <form onSubmit={handleSubmit}>
                        <TextField
                          sx={{ mt: 3 }}
                          fullWidth
                          label="Email"
                          placeholder="Email Address"
                          id="email"
                          value={values.email}
                          onChange={handleChange}
                          error={Boolean(errors.email) && touched.email}
                          helperText={touched.email ? errors.email : ""}
                        />

                        <TextField
                          sx={{ mt: 3 }}
                          fullWidth
                          type="password"
                          label="Password"
                          placeholder="Password"
                          id="password"
                          value={values.password}
                          onChange={handleChange}
                          error={Boolean(errors.password) && touched.password}
                          helperText={touched.password ? errors.password : ""}
                        />

                        <Button
                          type="submit"
                          fullWidth
                          variant="contained"
                          sx={{ mt: 5 }}
                        >
                          Login Now
                        </Button>
                      </form>
                    )}
                  </Formik>
                </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      */
      
      <section className="text-center">
          
          <div className="p-5 bg-image" style={{
                backgroundImage: 'url(https://mdbootstrap.com/img/new/textures/full/171.jpg)',
                height: '300px',
                
                }}></div>
    
        
          <div className="card mx-4 mx-md-5 shadow-5-strong" style={{
                marginTop: "-100px",
                background: "hsla(0, 0%, 100%, 0.8)",
                backdropFilter: "blur(30px)",
                }}>
            <div className="card-body py-5 px-md-5">
        
              <div className="row d-flex justify-content-center">
                <div className="col-lg-8">
                  <h2 className="fw-bold mb-5">Sign up now</h2>
                  <form>

                    <div className="row">
                      <div className="col-md-6 mb-4">
                        <div className="form-outline">
                          <input type="text" id="form3Example1" className="form-control" />
                          <label className="form-label" for="form3Example1">First name</label>
                        </div>
                      </div>
                      <div className="col-md-6 mb-4">
                        <div className="form-outline">
                          <input type="text" id="form3Example2" className="form-control" />
                          <label className="form-label" for="form3Example2">Last name</label>
                        </div>
                      </div>
                    </div>
        
              
                    <div className="form-outline mb-4">
                      <input type="email" id="form3Example3" className="form-control" />
                      <label className="form-label" for="form3Example3">Email address</label>
                    </div>
        
                  
                    <div className="form-outline mb-4">
                      <input type="password" id="form3Example4" className="form-control" />
                      <label className="form-label" for="form3Example4">Password</label>
                    </div>
        
                  
                    <div className="form-check d-flex justify-content-center mb-4">
                      <input className="form-check-input me-2" type="checkbox" value="" id="form2Example33" checked />
                      <label className="form-check-label" for="form2Example33">
                        Subscribe to our newsletter
                      </label>
                    </div>
        
            
                    <button type="submit" className="btn btn-primary btn-block mb-4">
                      Sign up
                    </button>
        
                    
                    <div className="text-center">
                      <p>or sign up with:</p>
                      <button type="button" className="btn btn-link btn-floating mx-1">
                        <i className="fab fa-facebook-f"></i>
                      </button>
        
                      <button type="button" className="btn btn-link btn-floating mx-1">
                        <i className="fab fa-google"></i>
                      </button>
        
                      <button type="button" className="btn btn-link btn-floating mx-1">
                        <i className="fab fa-twitter"></i>
                      </button>
        
                      <button type="button" className="btn btn-link btn-floating mx-1">
                        <i className="fab fa-github"></i>
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
    
     
  );
};

export default Signup;
