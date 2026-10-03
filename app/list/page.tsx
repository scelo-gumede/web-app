import React from "react";
import List from "../../components/List";

const page = async () => {
  return (
    <div>
      <h1> List of all users</h1>
      <div>
        <List />
      </div>
    </div>
  );
};

export default page;
