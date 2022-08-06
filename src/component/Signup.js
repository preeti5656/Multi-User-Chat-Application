import { Button, TextField } from "@mui/material"
import React from "react"
import { Formik } from "formik"
import Swal from "sweetalert2"

const Signup = () => {
  // 1. Create a form object which should match with model fields
  const userForm = {
    username: "",
    email: "",
    contact: "",
    age: 0,
    password: "",
  }

  // 2. Create a function for form submission
  const userSubmit = (formdata) => {
    console.log(formdata)

    //   3. use Formik component
    //for connection from frontend to backend
    fetch("http://localhost:5000/meme/add", {
      method: "post",
      body: JSON.stringify(formdata), //convert javascrip to json
      headers: { "content-type": "application/json" },
    }).then((res) => {
      if (res.status === 200) {
        console.log("data saved")
        Swal.fire({
          icon: "sucess",
          title: "Sucess",
          text: "registered sucessfully!!.",
        })
      }
    })
  }
  return (
    <section className="">
      <div
        className="p-5 bg-image"
        style={{
          backgroundImage: "url(https://mdbootstrap.com/img/new/textures/full/171.jpg)",
          height: "300px",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}></div>

      <div
        className="card mx-4 mx-md-5 shadow-5-strong"
        style={{
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
                      <label className="form-label" for="form3Example1">
                        First name
                      </label>
                    </div>
                  </div>
                  <div className="col-md-6 mb-4">
                    <div className="form-outline">
                      <input type="text" id="form3Example2" className="form-control" />
                      <label className="form-label" for="form3Example2">
                        Last name
                      </label>
                    </div>
                  </div>
                </div>

                <div className="form-outline mb-4">
                  <input type="email" id="form3Example3" className="form-control" />
                  <label className="form-label" for="form3Example3">
                    Email address
                  </label>
                </div>

                <div className="form-outline mb-4">
                  <input type="password" id="form3Example4" className="form-control" />
                  <label className="form-label" for="form3Example4">
                    Password
                  </label>
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
  )
}

export default Signup
