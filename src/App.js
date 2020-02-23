import React from "react";
import "./App.css";
import Container from "react-bootstrap/Container";
import TestGameArea from "./components/TestGameArea/TestGameArea";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Switch, Route } from "react-router-dom";
import { Jumbotron } from "react-bootstrap";
import GameList from "./components/GameList/GameList";
import MethodOverload from "./components/MethodOverload/MethodOverload";

function App() {
  return (
    <div className="App">
      <Jumbotron fluid>
        <Container>
          <h1>JS EGGHeads</h1>
        </Container>
      </Jumbotron>
      <Container>
        <Row>
          <Col sm={3}>
            <GameList />
          </Col>
          <Col sm={9}>
            <Switch>
              <Route path="/method-overload/" component={MethodOverload} />
              <Route component={TestGameArea} />
            </Switch>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
