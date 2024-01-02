import User from "./User";
import UserClass from "./UserClass";
import { Component } from "react";
class About extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <>
        <UserClass name="Sonam Agarwal(Class)" />
      </>
    );
  }
}

export default About;
