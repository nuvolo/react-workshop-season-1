import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Demo from "./components/Main";
import { Container, Row, Col } from "react-bootstrap";
import Main from "./components/Main";

function App() {
  return (
    <div style={{ marginTop: "2%" }}>
      <Container>
        {/* <Col>Flight Search Engine</Col> */}
        <Main />
      </Container>
    </div>
  );
}

export default App;
