import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Row, Col } from "react-bootstrap";
import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import OtpPage from "./OtpPage";

export default function MobileScreen() {
  let dontShow = false;
  let textInput = useRef();
  let count = 0;
  const btnClick = () => {
    let otpNumber =
      1000 * (Math.floor(Math.random() * 10) + 1) +
      100 * Math.floor(Math.random() * 10) +
      10 * Math.floor(Math.random() * 10) +
      Math.floor(Math.random() * 10);
    if (textInput.current.value.length >= 10) {
      console.log("hi");
      if (count === 0) {
        localStorage.setItem("otp", otpNumber);
        count++;
        console.log(localStorage.getItem("otp"));
      }
    } else {
      console.log("not a valid number");
    }
  };
  const [state, setstate] = useState({ data: "Hey bro whatsup" });

  const changeState = () => {
    setstate({
      data: `state/props of parent component 
      is send by onClick event to another component`,
    });
  };

  return (
    <div>
      {dontShow && <OtpPage data={state.data} />}
      <div className="d-flex flex-row justify-content-center align-items-center mt-5">
        <img
          src="https://indiaeducationdiary.in/wp-content/uploads/2021/06/AdmitKard-Logo.png"
          alt="admitkard"
          style={{ height: "60px", width: "170px" }}
        ></img>
      </div>
      <div className="mt-4 row"></div>
      <div className="d-flex flex-row justify-content-center align-items-center mt-5">
        <h3>Welcome Back</h3>
      </div>
      <div className="d-flex flex-row justify-content-center align-items-center mt-2">
        <h5 style={{ color: "#666666", fontSize: "16px", lineHeight: "19px" }}>
          Please sign in to your account
        </h5>
      </div>
      <div className="mt-3 row"></div>
      <div className="d-flex flex-row justify-content-center align-items-center mt-5">
        <input type="number" ref={textInput} />
      </div>
      <div className="d-flex flex-row justify-content-center align-items-center mt-2">
        <h5
          style={{
            fontFamily: "Work Sans",
            fontStyle: "normal",
            fontWeight: "normal",
            fontSize: "12px",
            lineHeight: "14px",
            color: "#999999",
          }}
        >
          We will send you a one time SMS message.Charges may apply.
        </h5>
      </div>
      <div className="row mt-4"></div>
      {/* <div
        className="submitBtn d-flex flex-row justify-content-center align-items-center mt-5"
        onClick={btnClick}
      >
        <Link to="/otp" style={{ textDecoration: "none", color: "white" }}>
          {" "}
          <p className="mt-3">Sign in with OTP</p>
        </Link>
      </div> */}
      <Row>
        <Col
          className="submitBtn d-flex flex-row justify-content-center align-items-center"
          xs={{ size: 3, offset: 4 }}
          onClick={btnClick}
        >
          <Link to="/otp" style={{ textDecoration: "none", color: "white" }}>
            {" "}
            <p className="mt-3" style={{ fontSize: "12px" }}>
              Sign in with OTP
            </p>
          </Link>
        </Col>
        <Col xs={4}></Col>
      </Row>
    </div>
  );
}
