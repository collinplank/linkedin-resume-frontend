import { useLoaderData, useNavigate } from "react-router-dom";

import { UsersIndex } from "./UsersIndex";

export function UsersIndexPage() {
  const users = useLoaderData();
  const navigate = useNavigate();

  const handleShow = (user) => {
    console.log("handleShow", user);
    navigate(`/users/${user.id}`);
  };

  return (
    <div>
      <UsersIndex users={users} onShow={handleShow} />
    </div>
  );
}
