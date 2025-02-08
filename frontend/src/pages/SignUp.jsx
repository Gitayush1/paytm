import { useEffect, useState } from "react";
import BottomWarning from "../components/BottomWarning";
import Button from "../components/Button";
import Heading from "../components/Heading";
import InputBox from "../components/InputBox";
import SubHeading from "../components/SubHeading";
import axios from "axios"
import { useNavigate } from "react-router-dom";

const SignUp = () => {

    const [firstName , setFirstName] = useState("")
    const [lastName , setLastName] = useState("")
    const [username , setUsername] = useState("")
    const [password , setPassword] = useState("")

    const navigate = useNavigate();

  return (
    <div className="w-5/12 mt-6 pt-20 h-180 m-auto bg-slate-400 ">
      <div className="w-7/12 mt-4 h-150 m-auto bg-white rounded-lg">
        <Heading label="SignUp" />
        <SubHeading label="Enter your Information to create an account" />
        <InputBox onChange = {e => {
            setFirstName(e.target.value)
        }} label="First Name" placeholder="Ayush" />
        <InputBox onChange = {e => {
            setLastName(e.target.value)
        }} label="Last Name" placeholder="Singh" />
        <InputBox onChange = {e => {
            setUsername(e.target.value)
        }} label="Email" placeholder="ayush@gmail.com" />
        <InputBox onChange = {e => {
            setPassword(e.target.value)
        }} label="Password" placeholder="123456" />
        <Button onClick = { async () => {
            const response = await axios.post("http://localhost:3000/api/v1/user/signup" , {
                username,
                firstName,
                lastName,
                password
            })
            // Storing token in browser's local storage
            localStorage.setItem("token",response.data.token)
            navigate("/dashboard")
        }} label="Sign up" />
        <BottomWarning
          label="Already have an account?"
          buttonText="Sign in"
          to={"/signin"}
        />
      </div>
    </div>
  );
};

export default SignUp;
