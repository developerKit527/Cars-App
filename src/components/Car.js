import React from "react";
import { Card } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { Carousel } from "react-bootstrap";
import "./Car.css";

class Car extends React.Component {
  render() {
    return (
      <div>
        {this.props.car && this.props.car.carname ? (
          <Card>
            <Card.Body>
              <Carousel>
                <Carousel.Item interval={3000}>
                  <img className="Carimg" src={this.props.car.img1} />
                </Carousel.Item>
                <Carousel.Item interval={3000}>
                  <img className="Carimg" src={this.props.car.img2} />
                </Carousel.Item>
                <Carousel.Item interval={3000}>
                  <img className="Carimg" src={this.props.car.img3} />
                </Carousel.Item>
              </Carousel>
              <Card.Title></Card.Title>
              <Card.Title>{this.props.car.carname}</Card.Title>
              <Card.Title>Vehicle Price : {this.props.car.price}</Card.Title>
              <Card.Text>
                Key Features :<li>{this.props.car.f1}</li>
                <li>{this.props.car.f2}</li>
                <li>{this.props.car.f3}</li>
                <li>{this.props.car.f4}</li>
                <li>{this.props.car.f5}</li>
              </Card.Text>
              <Button variant="primary">
                Order Your {this.props.car.carname}
              </Button>
            </Card.Body>
          </Card>
        ) : (
          <div></div>
        )}
      </div>
    );
  }
}

export default Car;
