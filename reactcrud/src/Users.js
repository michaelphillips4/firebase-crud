import React from "react";
import { initializeApp } from "firebase/app";
import { getDatabase, ref, onValue } from "firebase/database";
import firebaseConfig from "./FirebaseConfig";
import { Table } from 'react-bootstrap'

class Users extends React.Component {
  constructor(props) {
    super(props);
    this.state = { users: [] };
  }

  componentDidMount() {
    // Initialize Firebase
    const app = initializeApp(firebaseConfig);

    // Initialize Realtime Database and get a reference to the service
    const db = getDatabase(app);

    const d = ref(db, "/");



    onValue(d, (snapshot) => {
      let result = [];
      snapshot.forEach(data => {
        const user = data.val();
        user['key'] = data.key;
        result.push(user);
        // const data = snapshot.val();
        // console.log(data);
      });
      this.setState({ users: result })
    });



  }
  render() {
    const listUsers = this.state.users.map((user) =>
      <tr key={user.key}>
        <td>{user.username}</td>
        <td>{user.email}</td>
        <td>Edit</td>
        <td>Remove</td>
      </tr>);

    return <div>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>UserName</th>
            <th>Email</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {listUsers}
        </tbody>
      </Table>
    </div>;
  }
}

export default Users;
