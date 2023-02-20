import React from "react";
import Brands from "./components/Brands";
import Models from "./components/Models";
import Car from "./components/Car";
import { Button, Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import "./App.css";
import { isEmpty } from "lodash";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      models: [],
      car: {},
    };
  }

  // updateModel(modelslist) {
  //   this.setState({
  //     models: modelslist,
  //   });
  // }

  render() {
    let showModel = !isEmpty(this.state.models);
    let showCars = !isEmpty(this.state.car);

    return (
      <div>
        <Row>
          <Col xs={showCars ? 7 : 12}>
            <Row>
              <Col xs={showModel ? 6 : 12} className="brands">
                <Brands
                  updateModel={(modelslist) => {
                    // this.updateModel(modelslist);
                    this.setState({
                      models: modelslist,
                      car: {},
                    });
                  }}
                ></Brands>
              </Col>
              {showModel && (
                <Col xs={6} className="models">
                  <Models
                    models={this.state.models}
                    updateCar={(car) => {
                      this.setState({
                        car: car,
                      });
                    }}
                  ></Models>
                </Col>
              )}
            </Row>
          </Col>
          {showCars && (
            <Col xs={5} className="car">
              <Car car={this.state.car}></Car>
            </Col>
          )}
        </Row>
      </div>
    );
  }
}

export default App;
