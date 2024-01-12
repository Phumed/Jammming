import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

function SearchBar({ handleSubmit, handleChange, text }) {
  return (
    <div className="w-100">
      <form onSubmit={handleSubmit}>
        <Container>
          <Row>
            <Col xs={12} className="d-flex justify-content-center">
              <input
                onChange={handleChange}
                value={text}
                placeholder="Which artist do you want to see their top tracks?"
                className="w-md-50 w-100 py-2"
                style={{ textAlign: "center" }}
              />
            </Col>
          </Row>
          <Row>
            <Col xs={12} className="d-flex justify-content-center mt-3">
              <Button variant="secondary" type="submit" className="w-25">
                Search
              </Button>
            </Col>

            {/* <div className="mb-2">
              <Button variant="secondary" size="lg">
                <input type="submit" value="Search" />
              </Button>
            </div> */}
            {/* <div className="searchButton_container">
              <input type="submit" value="Search" className="searchButton" />
            </div> */}
          </Row>
        </Container>
      </form>
    </div>
  );
}

export default SearchBar;
