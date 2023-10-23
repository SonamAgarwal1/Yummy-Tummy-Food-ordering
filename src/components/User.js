import { useState } from "react";

const User = ({ name }) => {
  const [count] = useState(0);
  const [count2] = useState(1);
  return (
    <div className="user-card">
      <p>Count:{count}</p>
      <p>Count2:{count2}</p>
      <h2>Name: {name}</h2>
      <h3>Location: Pune</h3>
      <h4>Contact: @sonamagarwal12</h4>
    </div>
  );
};

export default User;
