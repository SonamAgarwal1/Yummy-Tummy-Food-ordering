import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo: {},
    };
  }

  async componentDidMount() {
    const data = await fetch("https://api.github.com/users/SonamAgarwal1");
    const json = await data.json();
    this.setState({ userInfo: json });
  }

  render() {
    console.log(this.state.userInfo);
    const { name, location, avatar_url } = this?.state?.userInfo; // destructuring props
    return (
      <div className="user-card">
        <img src={avatar_url}></img>
        <h2>Name: {name}</h2>
        <h3>Location: {location}</h3>
        <h4>Contact: @sonamagarwal12</h4>
      </div>
    );
  }
}

export default UserClass;
