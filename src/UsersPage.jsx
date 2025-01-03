import axios from "axios";
import { useState, useEffect } from "react";
import { UsersIndex } from "./UsersIndex";

import { Modal } from "./Modal";
import { UsersShow } from "./UsersShow";
import UserProfileLinks from "./UserProfilesLinks";

export function UsersPage() {
  const [users, setUsers] = useState([]);
  const [isUsersShowVisible, setIsUsersShowVisible] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);

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
    setCurrentUser(user);
  };

  useEffect(handleIndex, []);

  return (
    <main>
      <UsersIndex users={users} onShow={handleShow} />
      <UserProfileLinks users={users} />
      <Modal show={isUsersShowVisible} onClose={() => setIsUsersShowVisible(false)}>
        <UsersShow user={currentUser} />
      </Modal>
    </main>
  );
}
