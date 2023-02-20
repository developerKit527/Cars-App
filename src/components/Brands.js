import React from "react";
import "./Brands.css";
import { Button, Card } from "react-bootstrap";
import { Carousel } from "react-bootstrap";

const data = require("./data.json");

class Brands extends React.Component {
  constructor(props) {
    super(props);
  }

  getbrand() {
    let brandHtml = [];
    data.brands.forEach((brand) => {
      brandHtml.push(
        <Card>
          <Card.Body>
            <Card.Title>
              {brand.name}
              <Card.Img
                onClick={() => {
                  this.props.updateModel(brand.models);
                }}
                style={{
                  height: "130px",
                  width: "100px",
                  float: "right",
                  paddingTop: "10px",
                }}
                src={brand.img}
              />
            </Card.Title>
            <Card.Text style={{ fontSize: "20PX" }}>{brand.slogan}</Card.Text>
            <Card.Link href={brand.link}>About {brand.name}</Card.Link>
          </Card.Body>
        </Card>
      );
    });
    return brandHtml;
  }

  render() {
    return (
      <div>
        <Card
          style={{
            fontSize: "30px",
            backgroundColor: "black",
            color: "white",
            height: "50px",
          }}
        >
          <div>CLASSIC CARS</div>
        </Card>
        {this.getbrand()}
      </div>
    );
  }
}

export default Brands;
