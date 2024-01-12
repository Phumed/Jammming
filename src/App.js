import React, { useEffect, useState } from "react";
import SearchBar from "./components/SearchBar/SearchBar";
import SearchResults from "./components/SearchResults/SearchResults";
import Playlist from "./components/Playlist/Playlist";
import Tracklist from "./components/Tracklist/Tracklist";
import data from "./data.js";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const client_id = "efa5eb4fca9f42908c7e74519842d284";
const client_secret = "9fed25ac86af4931a9bc913cddbc3f62";

function App() {
  const [text, setText] = useState("");
  const [musicSelected, setMusicSelected] = useState([]);
  const [playListName, setPlayListName] = useState("");
  const [playList, setPlayList] = useState([]);
  const [accessToken, setAccessToken] = useState("");
  const [topTracks, setTopTracks] = useState([]);

  useEffect(() => {
    //API Access Token
    let authParameters = {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: `grant_type=client_credentials&client_id=${client_id}&client_secret=${client_secret}`,
    };

    fetch("https://accounts.spotify.com/api/token", authParameters)
      .then((result) => result.json())
      .then((data) => setAccessToken(data.access_token));
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log("Search for " + text);
    if (text === "")
      alert(
        "Drop some artist names, and let's fill your Spotify with tunes! 🎵"
      );
    else {
      //Get request using search to get the Artist ID
      var searchParameters = {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${accessToken}`,
        },
      };
      let artistID = await fetch(
        `https://api.spotify.com/v1/search?q=${text}&type=artist`,
        searchParameters
      )
        .then((response) => response.json())
        .then((data) => {
          return data.artists.items[0].id;
        });
      //console.log(`Artist ID is ${artistID}`);
      //Get request with Artist ID grab all the albums from that artist
      let top_tracks = await fetch(
        //`https://api.spotify.com/v1/artists/${artistID}/albums?include_groups=album&market=US&limit=50`,
        `https://api.spotify.com/v1/artists/${artistID}/top-tracks?include_groups=album&market=US&limit=50`,
        searchParameters
      )
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          setTopTracks(data.tracks);
        });
      //console.log("Top-Track: ");
      console.log(topTracks);
      //Display those album to users
      setText("");
    }
  };

  const handlePLayListName = (event) => {
    setPlayListName(event.target.value);
    //console.log(playListName);
  };

  const handleAddToSpotify = (event) => {
    event.preventDefault();
    console.log("ADD TO SPOTIFY");
    console.log(musicSelected);

    if (playListName === "" || musicSelected.length === 0)
      alert("Playlist name and track, please! 🎶");
    else {
      const newPlayList = {
        name: playListName,
        musicList: musicSelected,
      };
      console.log(newPlayList);
      setPlayList((playList) => [newPlayList, ...playList]);
      console.log(playList);
      setPlayListName("");
      setMusicSelected([]);
    }
  };

  const addToMusicSelected = (key) => {
    console.log(`keyAdded: ${key}`);
    /*topTracks.forEach((items) => {
      console.log(items.id);
    });*/
    let checkKey = musicSelected.some(
      (items) => items.id === topTracks[key].id
    );
    console.log(checkKey);
    if (!checkKey)
      setMusicSelected((musicSelected) => [topTracks[key], ...musicSelected]);
    else alert("This track's already on your Spotify playlist! 🎵");
  };

  const removeFromMusicSelected = (key) => {
    const removedMusic = musicSelected.filter((items) => items.id !== key);
    console.log("removed music: ");
    console.log(removedMusic);
    setMusicSelected(removedMusic);
    console.log(musicSelected);
  };

  const handleChange = (event) => {
    setText(event.target.value);
    //console.log(text);
  };

  return (
    <Container>
      <Row>
        <Navbar expand="lg" className="bg-body-tertiary">
          <Container className="d-flex justify-content-center">
            <Navbar.Brand className="fw-bold">Jammming</Navbar.Brand>
          </Container>
        </Navbar>
      </Row>
      <Row className="my-5">
        <Col className="d-flex justify-content-center" xs={12}>
          <SearchBar
            handleChange={handleChange}
            handleSubmit={handleSubmit}
            text={text}
          />
        </Col>
      </Row>
      <Row className="mt-4 mb-5">
        <Col xs={12} md={6}>
          <Row>
            <SearchResults
              data={data}
              search={text}
              addToMusicSelected={addToMusicSelected}
              topTracks={topTracks}
            />
          </Row>
        </Col>
        <Col xs={12} md={6} className="mt-md-0 mt-3">
          <Row className="mb-2">
            <Playlist playList={playList} />
          </Row>
          <Row className="mb-md-0 mb-5">
            <Col xs={12}>
              <Tracklist
                musicSelected={musicSelected}
                removeFromMusicSelected={removeFromMusicSelected}
                handlePLayListName={handlePLayListName}
                handleAddToSpotify={handleAddToSpotify}
                topTracks={topTracks}
                playListName={playListName}
              />
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
