import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { regexConditions } from "./regexConditions";

export const SignUp = () => {

    let navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [errMsg, setErrMsg] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    localStorage.setItem("user", JSON.stringify(formData));
  };

  const regexValidate = () => {
    if (!regexConditions.namePattern.test(formData.name)) {
      setErrMsg("Invalid UserName");
      return false;
    }
    if (!regexConditions.emailPattern.test(formData.email)) {
      setErrMsg("Invalid Email");
      return false;
    }

    if (!regexConditions.PassPattern.test(formData.password)) {
      setErrMsg("Weak Password");
      return false;
    }

    setErrMsg("");
    return true;
  };

  const handleSubmit = (e) =>{
    e.preventDefault();
    if(regexValidate()){
        navigate("/");
    }
  }

  return (
    <>
      <div className="flex items-center justify-center p-4">
        <div className="shadow-xl rounded-xl p-8 w-full max-w-md">
          <form onSubmit={handleSubmit}>
            <h1>Name:</h1>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter Your Name"
              className="border border-gray-600 rounded w-full mb-2"
            />
            <h1>Email:</h1>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter Your Email"
              className="border border-gray-600 rounded w-full mb-2"
            />
            <h1>Password:</h1>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Enter Password"
              className="border border-gray-600 rounded w-full mb-2"
            />
            <h1>Confirm Password:</h1>
            <input
              type="password"
              name="password"
              placeholder="Confirm Password"
              className="border border-gray-600 rounded w-full mb-2"
            />
          </form>
          <div className="text-center">
            <button className="bg-red-600 rounded w-15 hover:bg-red-700 cursor-pointer" type="submit">
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
