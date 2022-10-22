import { useContext, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useHistory } from "react-router-dom";

import { UserContext } from "../context/userContext";

import ImgDumbMerch from "../assets/shop.png";

import Login from "../components/auth/Login";
import Register from "../components/auth/Register";

export default function Auth() {
  let history = useHistory();

  const [state] = useContext(UserContext);

  console.log(state);

  const [isRegister, setIsRegister] = useState(false);

  const switchLogin = () => {
    setIsRegister(false);
  };

  const switchRegister = () => {
    setIsRegister(true);
  };

  return (
    <div className="bg-black">
      <Container>
        <Row className="vh-100 d-flex align-items-center">
          <Col md="6">
            <img
              src={ImgDumbMerch}
              className="img-fluid"
              style={{ width: "264px", height: "264px" }}
            />
           
            <div className="mt-5">
              <button onClick={switchLogin} className="btn btn-login px-5">
                Login
              </button>
              <button
                onClick={switchRegister}
                className="btn btn-register px-5"
              >
                Register
              </button>
            </div>
          </Col>
          <Col md="6">{isRegister ? <Register /> : <Login />}</Col>
        </Row>
      </Container>
    </div>
  );
}
