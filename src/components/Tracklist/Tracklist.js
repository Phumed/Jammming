import React, { useState } from "react";
import Track from "../Track/Track";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import ListGroup from "react-bootstrap/ListGroup";

function Tracklist({
  musicSelected,
  removeFromMusicSelected,
  handlePLayListName,
  handleAddToSpotify,
  playListName,
}) {
  //console.log(musicSelected);
  return (
    <form>
      <Container>
        <Row>
          <input
            placeholder="New Playlist Name"
            onChange={handlePLayListName}
            className="playListName"
            value={playListName}
          />
        </Row>
        <Row className="mt-2">
          <ListGroup className="ms-1">
            {musicSelected.map((items) => {
              return (
                <ListGroup.Item>
                  <Track
                    key={items.id}
                    id={items.id}
                    name={items.name}
                    artist={items.album.artists[0].name}
                    album={items.album.name}
                    state="removeState"
                    removeFromMusicSelected={removeFromMusicSelected}
                  />
                </ListGroup.Item>
              );
            })}
          </ListGroup>
        </Row>
        <Row>
          <Col className="d-flex justify-content-center">
            <Button
              variant="secondary"
              onClick={handleAddToSpotify}
              className="mt-2 w-25"
            >
              Save
            </Button>
          </Col>
        </Row>
      </Container>
    </form>
  );
}

export default Tracklist;
