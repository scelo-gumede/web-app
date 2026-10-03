import React from "react";
import { getAllUsers } from "../lib/queries/User";
import ListTile from "./ListTile";


const List = async () => {
  const users = await getAllUsers();

  return (
    <div>
      {users.length !== 0 &&
        users.map((user) => (
          <ListTile
            key={user.id}
            id={user.id}
            firstName={user.firstName}
            lastName={user.lastName}
            email={user.email}
          />
        ))}
           
         
    </div>
  );
};

export default List;
