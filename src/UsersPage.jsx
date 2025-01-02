import axios from "axios";
import { useState, useEffect } from "react";
import { UsersIndex } from "./UsersIndex";

export function UsersPage() {
  const [user, setUsers] = useState([]);

  const handleIndex = () => {
    console.log("handleIndex");
    axios.get("/users").then((response) => {
      console.log(response);
      setUsers(response.data);
    });
  };

  useEffect(handleIndex, []);

  return (
    <main>
      <UsersIndex users={user} />
    </main>
  );
}
