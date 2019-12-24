import React, { Component } from "react";
import { Table } from "react-bootstrap";

class Scoreboard extends Component {
  state = {};

  render() {
    const { userScore, computerScore } = this.props;
    return (
      <Table striped bordered hover variant="dark">
        <thead>
          <tr>
            <th>Your Score</th>
            <th>Computer Score</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{userScore}</td>
            <td>{computerScore}</td>
          </tr>
        </tbody>
      </Table>
    );
  }
}

export default Scoreboard;
