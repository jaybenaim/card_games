import React, { Component } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import Api from "../assets/api/api";

class DurakStartScreen extends Component {
  state = {
    gameId: "",
    players: 1,
    score: 0,
    progress: "in-progress"
  };
  handleName = event => {
    this.setState({ name: event.target.value });
  };
  handleDropdown = event => {
    this.setState({ players: event.target.value });
  };
  handleSubmit = () => {
    // post to /games
    const { players, score, progress } = this.state;
    const { id, token } = localStorage;
    console.log(localStorage);
    const headers = {
      "Content-Type": "application/json",
      Authorization: `Token ${token}`
    };
    const data = {
      user: id,
      player_amount: players,
      score: score,
      progress
    };
    Api.post("games/", data, headers).then(res => {
      window.location.reload(true);
      this.setState({ gameId: res.data.id });
    });
  };
  componentDidMount() {}
  render() {
    const { props } = this;
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="exampleForm.ControlSelect1">
              <Form.Label>Players</Form.Label>
              <Form.Control as="select" onChange={this.handleDropdown}>
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
                <option>6</option>
              </Form.Control>
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          {/* <Button onClick={props.onHide} className="primary"> */}
          <Button onClick={this.handleSubmit} className="primary">
            Go
          </Button>
        </Modal.Footer>
      </Modal>
    );
  }
}

export default DurakStartScreen;
