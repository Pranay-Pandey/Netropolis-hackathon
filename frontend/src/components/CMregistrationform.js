import React, { useState,useContext } from "react";
import "../css/userregister.css";
import { useNavigate,NavLink } from "react-router-dom";
import axios from "axios";
import { API } from "../API";
import AuthContext from "../context/AuthContext";

function CMRegister() {
  const { getLoggedIn } = useContext(AuthContext);
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    location: "",
    dob: "",
    area: "",
    email: "",
    password: "",
  });

  const handleInputChange = (e) => {
    const { name, value, type } = e.target;

    // if (type === "radio") {
    //   setFormData((prevData) => ({
    //     ...prevData,
    //     [name]: value,
    //   }));
    // } else {
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    // }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(formData);
    axios({
      url: `${API}/commanager/register/`,
      method: "POST",
      data: formData,
    })
      .then((response) => {
        // console.log("Response is :", response.data._id);
        // const lfsuser = response.data._id;

        localStorage.setItem("netropolis_token",response.data.token);
        setFormData({
          name: "",
          location: "",
          dob: "",
          area: "",
          email: "",
          password: "",
        });
        getLoggedIn();
        navigate('/cm');

      })
      .catch(() => {
        alert('something went wrong please fill data again')
        console.log("Error occured");
      });
  };

  const handleReset = () => {
    setFormData({
      name: "",
      location: "",
      dob: "",
      area: "",
      email: "",
      password: "",
    });
  };

  return (
    <section className="h-100 bg-dark">
      <div className="container py-5 h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col">
            <div className="card card-registration my-4">
              <div className="row g-0">
                <div className="col-xl-6 d-none d-xl-block">
                  <img
                    src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/img4.webp"
                    alt="Sample photo"
                    className="img-fluid"
                    style={{
                      borderTopLeftRadius: ".25rem",
                      borderBottomLeftRadius: ".25rem",
                    }}
                  />
                </div>
                <div className="col-xl-6">
                  <div className="card-body p-md-5 text-black userregister">
                    <h3 className="mb-5 text-uppercase">
                      Community_manager registration form
                    </h3>
                    <p style={{ color: "red" }}>
                      * marks mandatory fields
                    </p>
                    <form onSubmit={handleSubmit}>
                      <div className="row">
                        <div className="col-md-6 mb-4">
                          <div className="form-outline">
                            <input
                              className="form-control form-control-lg"
                              type="text"
                              name="name"
                              value={formData.name}
                              onChange={handleInputChange}
                              required
                            />
                            <label
                              className="form-label"
                              htmlFor="form3Example1m"
                            >
                              Name*
                            </label>
                          </div>
                        </div>
                      </div>

                      {/* ... (rest of your form fields) */}
                      <div class="form-outline mb-4">
                        <input
                          class="form-control form-control-lg"
                          type="text"
                          name="location"
                          value={formData.location}
                          onChange={handleInputChange}
                          required
                        />
                        <label class="form-label" for="form3Example8">
                          location*
                        </label>
                      </div>

                      {/* <div className="d-md-flex justify-content-start align-items-center mb-4 py-2">
                        <h6 className="mb-0 me-4">Gender*: </h6>

                        <div className="form-check form-check-inline mb-0 me-4">
                          <input
                            className="form-check-input"
                            type="radio"
                            name="gender"
                            value="female"
                            checked={formData.gender === "female"}
                            onChange={handleInputChange}
                            required
                          />
                          <label
                            className="form-check-label"
                            htmlFor="femaleGender"
                          >
                            Female
                          </label>
                        </div>

                        <div className="form-check form-check-inline mb-0 me-4">
                          <input
                            className="form-check-input"
                            type="radio"
                            name="gender"
                            value="male"
                            checked={formData.gender === "male"}
                            onChange={handleInputChange}
                            required
                          />
                          <label
                            className="form-check-label"
                            htmlFor="maleGender"
                          >
                            Male
                          </label>
                        </div>

                        <div className="form-check form-check-inline mb-0">
                          <input
                            className="form-check-input"
                            type="radio"
                            name="gender"
                            value="other"
                            checked={formData.gender === "other"}
                            onChange={handleInputChange}
                            required
                          />
                          <label
                            className="form-check-label"
                            htmlFor="otherGender"
                          >
                            Other
                          </label>
                        </div>
                      </div> */}

                      <div class="form-outline mb-4">
                        <input
                          type="date"
                          name="dob"
                          value={formData.dob}
                          onChange={handleInputChange}
                          required
                          class="form-control form-control-lg"
                        />
                        <label class="form-label" for="form3Example9">
                          DOB*
                        </label>
                      </div>

                      <div class="form-outline mb-4">
                        <input
                          type="string"
                          className="form-control form-control-lg"
                          name="area"
                          value={formData.area}
                          onChange={handleInputChange}
                          required
                        />
                        <label class="form-label" for="form3Example90">
                          Area*
                        </label>
                      </div>

                      <div class="form-outline mb-4">
                        <input
                          className="form-control form-control-lg"
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                        />
                        <label class="form-label" for="form3Example97">
                          Email ID*
                        </label>
                      </div>
                      <div class="form-outline mb-4">
                        <input
                          className="form-control form-control-lg"
                          type="password"
                          name="password"
                          value={formData.password}
                          onChange={handleInputChange}
                          required
                        />
                        <label class="form-label" for="form3Example97">
                          password*
                        </label>
                      </div>

                      {/* <div class="form-outline mb-4">
                        <input
                          className="form-control form-control-lg"
                          type="password"
                          name="re_password"
                          value={formData.re_password}
                          onChange={handleInputChange}
                          required
                        />
                        <label class="form-label" for="form3Example97">
                          confirme password*
                        </label>
                      </div> */}

                      <div className="d-flex justify-content-end pt-3">
                        <button
                          type="button"
                          className="btn btn-light btn-lg"
                          onClick={handleReset}
                        >
                          Reset all
                        </button>
                        <button
                          type="submit"
                          className="btn btn-warning btn-lg ms-2"
                        >
                          Submit form
                        </button>
                      </div>
                    </form>
                    <ul>
                      <li><NavLink to="/login">Already registered? user login</NavLink></li>
                      <li><NavLink to="/cmlogin">Already registered? Community_manager login</NavLink></li>
                      <li><NavLink to="/cmregister">Register as a User</NavLink></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CMRegister;
