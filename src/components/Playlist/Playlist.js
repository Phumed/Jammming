import "../../App.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import ListGroup from "react-bootstrap/ListGroup";

function Playlist({ playList }) {
  /*console.log("From PlayList");
  console.log(playList);*/

  return (
    <Container>
      <Row>
        <h2>PlayList</h2>
      </Row>
      <Row>
        {playList.map((items, index) => {
          return (
            <DropdownButton id="dropdown-basic-button" title={items.name}>
              <Dropdown.Item href="#/action-1">
                <div key={index} id={index} className="playList_music">
                  <div>
                    <h2>{items.name}</h2>
                  </div>
                  {
                    <div>
                      <ListGroup className="playList_musicList">
                        {items.musicList.map((item, index) => {
                          return (
                            <ListGroup.Item key={index}>
                              {item.name}
                            </ListGroup.Item>
                          );
                        })}
                      </ListGroup>
                    </div>
                  }
                </div>
              </Dropdown.Item>
            </DropdownButton>
          );
        })}
      </Row>
    </Container>
  );
}

export default Playlist;
