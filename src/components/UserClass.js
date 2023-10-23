import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      count1: 1,
    };
  }

  render() {
    const { name } = this.props; // destructuring props
    const { count, count1 } = this.state;
    return (
      <div className="user-card">
        <p>Count:{count}</p>
        <p>Count2:{count1}</p>
        <h2>Name: {name}</h2>
        <h3>Location: Pune</h3>
        <h4>Contact: @sonamagarwal12</h4>
      </div>
    );
  }
}

export default UserClass;
