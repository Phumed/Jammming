import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

function Track({
  name,
  artist,
  album,
  id,
  addToMusicSelected,
  state,
  removeFromMusicSelected,
}) {
  let symbol;
  if (state === "addingState") {
    symbol = "+";
  } else if (state === "removeState") {
    symbol = "-";
  } else {
    alert("Something went wrong");
  }
  return (
    <Container>
      <Row>
        <Col xs={10}>
          <Row className="fw-bold">{name}</Row>
          <Row>
            {artist} | {album}
          </Row>
        </Col>
        <Col className="d-flex justify-content-end">
          <Button
            onClick={(event) => {
              event.preventDefault();
              if (state === "addingState") {
                addToMusicSelected(id);
                console.log(`Track added ID:${id}`);
              } else if (state === "removeState") {
                removeFromMusicSelected(id);
                console.log(id);
              } else alert("Something went wrong");
            }}
            className="h-90 w-90"
            variant="outline-secondary"
          >
            {symbol}
          </Button>
        </Col>
      </Row>
    </Container>
    // <div className="trackContainer">
    //   <div className="trackDetail">
    //     <div className="trackName">{name}</div>
    //     <div>
    //       {artist} | {album}
    //     </div>
    //   </div>
    //   <div className="trackButton">
    //     <button
    //       onClick={(event) => {
    //         event.preventDefault();
    //         if (state === "addingState") {
    //           addToMusicSelected(id);
    //           console.log(`Track added ID:${id}`);
    //         } else if (state === "removeState") {
    //           removeFromMusicSelected(id);
    //           console.log(id);
    //         } else alert("Something went wrong");
    //       }}
    //       className="editButton"
    //     >
    //       {symbol}
    //     </button>
    //   </div>
    // </div>
  );
}

export default Track;
