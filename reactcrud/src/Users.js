import React from "react";
import { initializeApp } from "firebase/app";
import { getDatabase, ref, onValue } from "firebase/database";
import firebaseConfig from "./FirebaseConfig";


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
      const data = snapshot.val();
      console.log(data);
    });
  }
  render() {
    return <div>Test</div>;
  }
}

export default Users;
