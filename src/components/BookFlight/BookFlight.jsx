import React, { Component } from "react";
import {
  Card,
  ListGroup,
  ListGroupItem,
  Container,
  Row,
  Col,
  Button,
} from "react-bootstrap";

class BookFlight extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <Card style={{ marginBottom: "15px" }} border="secondary">
        <Container>
          <Row>
            <Col>
              <Card.Body>
                <Card.Title>{this.props.data.price}</Card.Title>
                <Container>
                  <Row>
                    <Col>
                      <Card.Text
                        style={{ fontSize: "15px", fontWeight: "bold" }}
                      >
                        AI-202
                      </Card.Text>
                      <Card.Text
                        style={{ fontSize: "20px", fontWeight: "bold" }}
                      >
                        DEL > PNQ
                      </Card.Text>
                      <ListGroup className="list-group-flush">
                        <ListGroupItem>Depart:10:00 AM</ListGroupItem>
                        <ListGroupItem>Arrive:12:00 PM</ListGroupItem>
                      </ListGroup>
                    </Col>
                    <Col>
                      <Card.Text
                        style={{ fontSize: "15px", fontWeight: "bold" }}
                      >
                        AI-203
                      </Card.Text>
                      <Card.Text
                        style={{ fontSize: "20px", fontWeight: "bold" }}
                      >
                        PNQ > DEL
                      </Card.Text>
                      <ListGroup className="list-group-flush">
                        <ListGroupItem>Depart:10:00 AM</ListGroupItem>
                        <ListGroupItem>Arrive:12:00 PM</ListGroupItem>
                      </ListGroup>
                    </Col>
                  </Row>
                </Container>
              </Card.Body>
            </Col>

            <Col xs lg="3">
              <Container>
                <Row>
                  <Col>
                    <Card style={{ borderRadius: "0px", marginTop: "20%" }}>
                      <Card.Img variant="top" src={this.props.data.img} />
                    </Card>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <Button
                      size="sm"
                      style={{ marginTop: "5%" }}
                      variant="secondary"
                    >
                      Book this flight
                    </Button>
                  </Col>
                </Row>
              </Container>
            </Col>
          </Row>
        </Container>
      </Card>
    );
  }
}

export default BookFlight;
