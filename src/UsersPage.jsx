import axios from "axios";
import { useState, useEffect } from "react";
import { UsersIndex } from "./UsersIndex";
import { Modal } from "./Modal";

export function UsersPage() {
  const [users, setUsers] = useState([]);
  const [isUsersShowVisible, setIsUsersShowVisible] = useState(false);
  // const [currentUser, setCurrentUser] = useState({});

  const handleIndex = () => {
    console.log("handleIndex");
    axios.get("/users").then((response) => {
      console.log(response);
      setUsers(response.data);
    });
  };
  const handleShow = (user) => {
    console.log("handleShow", user);
    setIsUsersShowVisible(true);
  };

  useEffect(handleIndex, []);

  return (
    <main>
      <UsersIndex users={users} onShow={handleShow} />
      <Modal show={isUsersShowVisible} onClose={() => setIsUsersShowVisible(false)}>
        <h1>Test</h1>
      </Modal>
    </main>
  );
}
