import React, { Component } from "react";
import * as firebase from "firebase";
import { Table } from "react-bootstrap";

class User extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
    };
  }
  componentDidMount() {
    firebase.database().ref("/");
    (103).on("value", (snapshot) => {
      console.log(snapshot.val());
    });
  }
  render() {
    const listUsers = this.state.users.map((user) => (
      <tr key={user.key}>
        <td>{user.username}</td>
        <td>{user.email}</td>
        <td>Edit</td>
        <td>Remove</td>
      </tr>
    ));
    return (
      <div>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Username</th>
              <th>Email</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>{listUsers}</tbody>
        </Table>
      </div>
    );
  }
}

export default User;
