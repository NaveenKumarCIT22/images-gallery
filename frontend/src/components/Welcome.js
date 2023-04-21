import React from "react";
import { Jumbotron, Button } from "react-bootstrap";

const Welcome = () => {
  return (
    <Jumbotron style={{backgroundColor:"rgb(24, 69, 90)",boxShadow:"7px 7px 10px rgb(64, 69, 110)"}}>
      <h1>Images Gallery</h1>
      <p>
        This is a React web app that uses Unsplash API to fetch random images based on the search terms. To start enter a search term and hit enter.
      </p>
      <p>
        <Button bsStyle="primary" href="unsplash.com">Learn more</Button>
      </p>
    </Jumbotron>
  );
};

export default Welcome;
