import React from "react";
import { Row, Col } from "react-bootstrap";
import { useRef, useState } from "react";
export default function OtpPage(props) {
  const [success, setSuccess] = useState("1");
  let textInput1 = useRef();
  let textInput2 = useRef();
  let textInput3 = useRef();
  let textInput4 = useRef();
  const submitOTP = () => {
    let secondOtp;
    if (
      textInput1.current.value !== "" &&
      textInput2.current.value !== "" &&
      textInput3.current.value !== "" &&
      textInput4.current.value !== ""
    ) {
      secondOtp =
        textInput1.current.value +
        textInput2.current.value +
        textInput3.current.value +
        textInput4.current.value;
      console.log(secondOtp);
    }
    if (localStorage.getItem("otp") === secondOtp) {
      setSuccess((success) => {
        return (success = "2");
      });
    } else {
      setSuccess((success) => {
        return (success = "3");
      });
    }
  };
  return (
    <div>
      <Row className="ml-2">
        <Col xs={{ size: 4, offset: 2 }}>
          <img
            src="https://img.freepik.com/free-vector/security-otp-one-time-password-smartphone-shield_9904-104.jpg?size=626&ext=jpg"
            alt="Otpimage"
            style={{ height: "200px", width: "250px" }}
            className="mt-4"
          />
        </Col>
        <Col xs={3}></Col>
      </Row>
      <Row className="mt-3">
        <Col xs={{ size: 8, offset: 3 }}>
          <h3
            style={{
              fontFamily: "Work Sans",
              fontStyle: "normal",
              fontWeight: "normal",
              fontSize: "20px",
              lineHeight: "23px",
            }}
          >
            Please verify Mobile number
          </h3>
        </Col>
      </Row>
      <Row className="ml-1">
        <Col xs={{ size: 8, offset: 3 }}>
          <p>An OTP is sent to your number</p>
        </Col>
      </Row>
      <Row>
        <Col xs={{ size: 5, offset: 4 }}>
          <p style={{ color: "orange" }}>
            <u>Change Phone Number</u>
          </p>
        </Col>
      </Row>
      <Row className="d-flex flex-row justify-content-center align-items-center ml-4 mt-5">
        <Col xs={1}>
          <input type="number" style={{ width: "25px" }} ref={textInput1} />
        </Col>
        <Col xs={1} className="ml-3">
          <input type="number" style={{ width: "25px" }} ref={textInput2} />
        </Col>
        <Col xs={1} className="ml-3">
          <input type="number" style={{ width: "25px" }} ref={textInput3} />
        </Col>
        <Col xs={1} className="ml-3">
          <input type="number" style={{ width: "25px" }} ref={textInput4} />
        </Col>
      </Row>
      <Row className="mt-4 d-flex flex-row justify-content-center align-items-center">
        <Col xs={{ size: 10, offset: 3 }}>
          <span style={{ color: "#999999" }}>Didn't receive the code?</span>
          &nbsp;{" "}
          <span>
            <b style={{ color: "orange" }}>Resend</b>
          </span>
        </Col>
      </Row>
      <Row className="mt-4 ml-3">
        <Col
          className="submitBtn d-flex flex-row justify-content-center align-items-center"
          xs={{ size: 3, offset: 4 }}
          onClick={submitOTP}
        >
          {" "}
          <p className="mt-3" style={{ fontSize: "12px" }}>
            Verify
          </p>
        </Col>
        <Col xs={4}></Col>
      </Row>
      {success === "1" && (
        <Row>
          <Col xs={4}></Col>
        </Row>
      )}
      {success === "2" && (
        <Row className="d-flex flex-row justify-content-center align-items-center ml-5 mt-4">
          <Col xs={4}>
            <p style={{ color: "orange" }}>OTP successfully submitted</p>
          </Col>
        </Row>
      )}
      {success === "3" && (
        <Row className="d-flex flex-row justify-content-center align-items-center">
          <Col xs={4}>
            <p style={{ color: "orange" }}>Wrong OTP try again</p>
          </Col>
        </Row>
      )}
    </div>
  );
}
