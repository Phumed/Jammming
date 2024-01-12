import React from "react";
import Track from "../Track/Track";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import ListGroup from "react-bootstrap/ListGroup";

function SearchResults({ data, search, addToMusicSelected, topTracks }) {
  //console.log(topTracks[0].id);
  // border ? "border-bottom border-secondary" : "";
  return (
    <Container>
      <Row className="border-bottom border-secondary mb-3">
        <h2>Result</h2>
      </Row>
      <Row>
        <ListGroup className="ms-2 ms-md-0">
          {topTracks.map((item, index) => {
            return (
              <ListGroup.Item>
                <Track
                  key={index}
                  id={index}
                  name={item.name}
                  artist={item.album.artists[0].name}
                  album={item.album.name}
                  addToMusicSelected={addToMusicSelected}
                  state="addingState"
                />
              </ListGroup.Item>
            );
          })}
        </ListGroup>
      </Row>
    </Container>
  );
}

export default SearchResults;
