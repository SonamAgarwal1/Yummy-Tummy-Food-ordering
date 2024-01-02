import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { name } = this.props; // destructuring props
    return (
      <div className="user-card">
        <h2>Name: {name}</h2>
        <h3>Location: Pune</h3>
        <h4>Contact: @sonamagarwal12</h4>
      </div>
    );
  }
}

export default UserClass;
