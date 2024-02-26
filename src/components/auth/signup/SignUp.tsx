// Signup.tsx
import React, { useContext, useState } from "react";
import { TextField } from "@mui/material";
import Button from "@mui/material/Button";
import { PayloadProps } from "../../../types/PayloadType";
import { UserContextApi } from "../../../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import gif from "../../media/signup.json";
import Lottie from "lottie-react";

type FormSubmitEvent = React.FormEvent<HTMLFormElement>;

const Signup = () => {
  const contextValue = useContext(UserContextApi);
  const signup = contextValue?.signup;
  const navigate = useNavigate();

  const [formData, setFormData] = useState<PayloadProps>({
    firstName: "",
    lastName: "",
    dateOfBirth: "",
    email: "",
    password: "",
    domain: "",
    imageUrl: "",
    role: "user",
    like: false,
    comment: [],
  });

  const handleSubmit = (event: FormSubmitEvent) => {
    event.preventDefault();
    if (signup) {
      signup(formData);
      navigate("/");
      window.location.reload();
    }
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  return (
    <section className="main-container">
      <article className="inner-container">
        <div className="w-[50%] p-12 relative bottom-2">
          <Lottie animationData={gif} />
        </div>
        <div className="signup-container">
          <div className="signup-main-container">
            {/* <Particle/> */}
            <div className="form-container">
              <h2 className="signup ">Create Account</h2>
              <form onSubmit={handleSubmit} className="form-inner-container">
                <div>
                  <Button
                    variant="outlined"
                    color="success"
                    startIcon={<FcGoogle />}
                    sx={{ borderRadius: "0", width: "100%", paddingTop:"10px", paddingBottom:"10px" }}
                  >
                    Sign up with Google
                  </Button>
                </div>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    gap: "10px",
                  }}
                >
                  <div
                    style={{
                      border: "1px solid #e8e8e8",
                      flexBasis: "20%",
                      height: "0",
                      marginTop: ".7em",
                      marginLeft: "10%",
                    }}
                  ></div>
                  <div style={{ flexBasis: "33%", left: "10%" }}>
                    or Signup with Email
                  </div>
                  <div
                    style={{
                      border: "1px solid  #e8e8e8",
                      flexBasis: "20%",
                      height: "0",
                      marginTop: ".7em",
                      right: "10%",
                    }}
                  ></div>
                </div>
                <div className="inline-container">
                  <div>
                    <TextField
                      color="success"
                      InputProps={{ sx: { borderRadius: 0 } }}
                      id="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      required
                      label="First Name"
                    />
                  </div>
                  <div>
                    <TextField
                      color="success"
                      InputProps={{ sx: { borderRadius: 0 } }}
                      id="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      required
                      label="Last Name"
                    />
                  </div>
                </div>
                <div className="inline-container">
                  <div>
                    <TextField
                      color="success"
                      InputProps={{ sx: { borderRadius: 0 } }}
                      type="date"
                      id="text"
                      name="dateOfBirth"
                      value={formData.dateOfBirth}
                      onChange={handleInputChange}
                      required
                      label="DOB"
                    />
                  </div>
                  <div>
                    <TextField
                      variant="outlined"
                      color="success"
                      InputProps={{ sx: { borderRadius: 0 } }}
                      id="text"
                      name="domain"
                      value={formData.domain}
                      onChange={handleInputChange}
                      label="Domain"
                      required
                    />
                  </div>
                </div>
                <div>
                  <TextField
                    color="success"
                    InputProps={{ sx: { borderRadius: 0 } }}
                    id="text-line"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    label="Email"
                  />
                </div>
                <div>
                  <TextField
                    color="success"
                    InputProps={{ sx: { borderRadius: 0 } }}
                    id="text-line"
                    name="password"
                    value={formData.password}
                    onChange={handleInputChange}
                    required
                    label="Password"
                  />
                </div>

                <div>
                  <TextField
                    InputProps={{ sx: { borderRadius: 0 } }}
                    id="text-line"
                    color="success"
                    type="text"
                    name="imageUrl"
                    value={formData.imageUrl}
                    onChange={handleInputChange}
                    required
                    label="Image url"
                  />
                </div>

                <div>
                  <Button
                    style={{
                      width: "100%",
                      background: "#434db8",
                      marginTop: "20px",
                    }}
                    className="hover:bg-slate-800"
                    variant="contained"
                    type="submit" // Add type submit to trigger form submission
                  >
                    Signup
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </article>
    </section>
  );
};

export default Signup;
