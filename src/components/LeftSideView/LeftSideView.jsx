import React, { Component } from "react";
import { Card, Container, Row, Col, Form, Button } from "react-bootstrap";

class LeftSideView extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <>
        <Card
          style={{ borderRadius: "0px", marginTop: "10%" }}
          border="secondary"
        >
          <Card.Body>
            <Form>
              <Form.Group controlId="exampleForm.ControlInput1">
                <Form.Control type="text" placeholder="Enter Origin City" />
              </Form.Group>

              <Form.Group controlId="exampleForm.ControlInput2">
                <Form.Control
                  type="text"
                  placeholder="Enter Destination City"
                />
              </Form.Group>

              <Form.Group controlId="exampleForm.ControlSelect3">
                <Form.Control as="select">
                <option>Departure Date</option>
                </Form.Control>
              </Form.Group>

              <Form.Group controlId="exampleForm.ControlSelect4">
                <Form.Control as="select">
                  <option>Return Date</option>
                </Form.Control>
              </Form.Group>

              <Form.Group controlId="exampleForm.ControlSelect5">
                <Form.Control as="select">
                  <option>Passengers</option>
                </Form.Control>
              </Form.Group>
            </Form>
            <Button variant="info">Search</Button>
          </Card.Body>
        </Card>

        <Card
          style={{ borderRadius: "0px", marginTop: "10%" }}
          border="secondary"
        >
          <Card.Body>
            <Card.Text style={{ fontWeight: "bold" }}>
              Refine Flight Search
            </Card.Text>
            <Form>
              <Form.Group controlId="formBasicRangeCustom11">
                <Row>
                  <Col>
                    {" "}
                    <Form.Label>0</Form.Label>
                  </Col>

                  <Col xs lg="5">
                    <Form.Label>10000</Form.Label>
                  </Col>
                </Row>

                <Form.Control type="range" custom />
              </Form.Group>
            </Form>
          </Card.Body>
        </Card>
      </>
    );
  }
}

export default LeftSideView;
