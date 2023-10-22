const User = ({ name }) => {
  return (
    <div className="user-card">
      <h2>Name: {name}</h2>
      <h3>Location: Pune</h3>
      <h4>Contact: @sonamagarwal12</h4>
    </div>
  );
};

export default User;
