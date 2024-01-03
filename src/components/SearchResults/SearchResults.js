import React, { useState } from "react";
import Track from "../Track/Track";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ListGroup from "react-bootstrap/ListGroup";

function SearchResults({ data, search, addToMusicSelected, topTracks }) {
  //console.log(topTracks[0].id);
  return (
    <Container>
      <Row>
        <h2>Result</h2>
      </Row>
      <Row>
        <ListGroup>
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

        {/* <ul>
          {topTracks.map((item, index) => {
            return (
              <Track
                key={index}
                id={index}
                name={item.name}
                artist={item.album.artists[0].name}
                album={item.album.name}
                addToMusicSelected={addToMusicSelected}
                state="addingState"
              />
            );
          })}
        </ul> */}
      </Row>
    </Container>
  );
}

export default SearchResults;
