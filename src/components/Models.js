import React from "react";
import { Card } from "react-bootstrap";
import "./Models.css";
import { Carousel } from "react-bootstrap";

class Models extends React.Component {
  constructor(props) {
    super(props);
  }

  getModels() {
    let modelsHtml = [
    // <Carousel>
    //   <Carousel.Item>
    //     <img className="logo" src={l1.png} />
    //   </Carousel.Item>
    //   <Carousel.Item>
    //     <img className="logo" src={l2.jpg} />
    //   </Carousel.Item>
    //   <Carousel.Item>
    //     <img className="logo" src={l3.jpg}/>
    //   </Carousel.Item>
    // </Carousel>
    ];
    
    this.props.models.forEach((model) => {
      modelsHtml.push(
        <Card>
          <Card.Header>{model.name}</Card.Header>
          <Card.Body>
            <Card.Title>{this.getCars(model.cars)}</Card.Title>
          </Card.Body>
        </Card>
      );
    });
    return modelsHtml;
  }

  getCars(cars) {
    let carsHtml = [];
    cars.forEach((car) => {
      carsHtml.push(
        <li
        style={{cursor:"pointer"}}
          onClick={() => {
            this.props.updateCar(car);
          }}
        >
          {car.carname}
        </li>
      );
    });
    return carsHtml;
  }

  render() {
    return <div>{this.getModels()}</div>;
  }
}

export default Models;
