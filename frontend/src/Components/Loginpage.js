import React, { useEffect, useState } from "react";
import { Form, Button, Container,image } from "react-bootstrap";
import { useNavigate } from "react-router";
import axios from "axios";
import { login } from "../Config/Myservice";
// import history from './history';

import { getDefaultNormalizer } from "@testing-library/dom";
import HomeNavbar from "./HomeNavbar";

export default function Loginpage() {
  const navigate = useNavigate();
  const [data, setData] = useState({email:"",password:""});
  const handler=(event)=>{
    const {name,value} = event.target;
    setData({...data,[name]:value})
}
  const loginUser=(event)=>{
    event.preventDefault();
    console.log(data)
    login(data).then(res=>{
        if(res.data.err===0){
            // localStorage.setItem("_token",res.data.token);
            //  history.push('/Menu');
            navigate("/Menu")
            console.log(res.data)
        }
        if(res.data.err===1){
            console.log(res.data)
        }
    })
}

 /*  const login = () => {
    const email = document.getElementById("email").value;
    const password = document.getElementById("pass").value;
    let user_present = false;
    data.map((value) => {
     
       if(email === value.email  &&
        password === value.password)
       {
        
        user_present = true;
      }
    }); */
   /*  console.log(user_present);

    if (user_present) {
      navigate("/Home");
    } console.log(user_present);

    if (user_present) {
      navigate("/Home");
    } else {
      alert("Register or enter correct details");
    }
  }; */
  return (
    <>
    <HomeNavbar />
    <br/>
    
  
   <Container>
   
      <Form onSubmit={loginUser}
        style={{
          marginTop: "5vh",
          marginLeft: "40vh",
          width: "100vh",
          border: "1px solid black",
          padding: "5vh",
          borderRadius: "10px",
        }}
      >
        <h2 className="text-center">Login</h2>
        <Form.Group className="mb-3">
          <Form.Label>Email address :</Form.Label>
          <Form.Control type="text" id="email" name="email" placeholder="Enter email" onChange={handler} />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Password :</Form.Label>
          <Form.Control type="password" id="password" name="password" placeholder="Password" onChange={handler} />
        </Form.Group>

        <div className="text-center">
          <Button variant="primary" type="submit" >
            Submit
          </Button>

          <br/>
          
          <Button
            variant="link"
            type="button"
            onClick={() => {
              navigate("/signup");
            }}
          >
            Don't have an account? Click Here
          </Button>
        </div>
      </Form>
    </Container>
    </>
  );
}