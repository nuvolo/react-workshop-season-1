import React, { Component } from "react";
import { Button, Card, Container, Row, Col } from "react-bootstrap";
import BookFlight from "./BookFlight/BookFlight";
import { bookFlightData } from "../JsonData/BookFlightData";
import LeftSideView from "./LeftSideView/LeftSideView";

function Main() {
  let renderFlight = <div></div>;

  renderFlight = bookFlightData.map((flight, index) => {
    return <BookFlight data={flight} />;
  });
  return (
    <Card style={{ borderRadius: "0px" }} border="primary">
      <Card.Header as="h3">Flight Search Engine</Card.Header>

      <Container>
        <Row>
          <Col xs lg="3">
            <LeftSideView />
          </Col>
          <Col>
            <Card.Body>
              <Card
                style={{ borderRadius: "0px", marginBottom: "15px" }}
                border="secondary"
              >
                <Container>
                  <Row>
                    <Col>
                      <Card.Text style={{ fontWeight: "bold", fontSize: "25px" }}>
                        Pune > Delhi > Pune
                      </Card.Text>
                    </Col>

                    <Col xs lg="3">
                      <Card.Text
                        style={{ marginBottom: "0em", fontSize: "15px" }}
                      >
                        Depart: 1st Jan 2012
                      </Card.Text>
                      <Card.Text
                        style={{ marginBottom: "0em", fontSize: "15px" }}
                      >
                        Return: 10th Jan 2012
                      </Card.Text>
                    </Col>
                  </Row>
                </Container>
              </Card>
              {renderFlight}
            </Card.Body>
          </Col>
        </Row>
      </Container>
    </Card>
  );
}

export default Main;
