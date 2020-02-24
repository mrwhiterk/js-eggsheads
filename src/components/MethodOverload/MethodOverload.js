import React, { useState } from "react";
import stringData from "../../json/stringData.json";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";

let methodObjects = stringData.methods.map(x => {
  return {
    word: x,
    solved: false
  };
});
let propertyObjects = stringData.properties.map(x => {
  return {
    word: x,
    solved: false
  };
});

export default function MethodOverload() {
  const [guess, setGuess] = useState("");
  const [propertyArray, setPropertyArray] = useState(propertyObjects);
  const [methodArray, setMethodArray] = useState(methodObjects);

  let blankMethods = methodArray.map(method => {
    if (!method.solved) {
      return method.word.replace(/\B.\B/g, "_");
    }
    return method.word;
  });

  let blankProperties = propertyArray.map(property => {
    if (!property.solved) {
      return property.word.replace(/\B.\B/g, "_");
    }
    return property.word;
  });

  function handleClick() {
    let propMatchIndex = stringData.properties.findIndex(
      prop => prop.toLowerCase() === guess.toLowerCase()
    );

    if (propMatchIndex > -1) {
      let data = [...propertyArray];
      data[propMatchIndex].solved = true;

      setPropertyArray(data);

      setGuess("");
    }

    let methodMatchIndex = stringData.methods.findIndex(
      method => method.toLowerCase() == guess.toLowerCase()
    );

    if (methodMatchIndex > -1) {
      let data = [...methodArray];
      data[methodMatchIndex].solved = true;

      setMethodArray(data);

      setGuess("");
    }
  }

  function handleChange(e) {
    setGuess(e.target.value.trim());
  }

  let methods = blankMethods.map((x, i) => <div key={i}>{x}</div>);
  let properties = blankProperties.map((x, i) => <div key={i}>{x}</div>);

  return (
    <div>
      <h1>Welcome to Method Overload</h1>
      <p>
        This game will test your knowledge by naming all the methods and
        properties to all the js datatypes we know and love.
      </p>
      <InputGroup className="mb-3">
        <InputGroup.Prepend>
          <Button variant="outline-secondary" onClick={handleClick}>
            Button
          </Button>
        </InputGroup.Prepend>
        <FormControl
          aria-describedby="basic-addon1"
          onChange={handleChange}
          value={guess}
          onKeyPress={e => {
            if (e.key === "Enter") {
              handleClick();
            }
          }}
          name="guess"
        />
      </InputGroup>
      <h3>Strings</h3>

      <h4>properties</h4>
      <Row>
        <Col>{properties}</Col>
      </Row>

      <h4>methods</h4>
      <Row>
        <Col>{methods.slice(0, methods.length / 2)}</Col>
        <Col>{methods.slice(methods.length / 2)}</Col>
      </Row>
    </div>
  );
}
