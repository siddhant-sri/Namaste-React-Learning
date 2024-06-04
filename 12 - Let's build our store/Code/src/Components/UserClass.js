import React from "react";
import UserContext from "../utils/UserContext";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    console.log("constructor");

    this.state = {
      userInfo: {
        name: "Full Name",
        location: "Region",
      },
    };
  }

  async componentDidMount() {
    console.log("componentDidMount");
    // API call
    const userData = await fetch("https://api.github.com/users/siddhant-sri");
    const json = await userData.json();
    console.log("data", json);
    this.setState({
      userInfo: json,
    });
  }
  componentDidUpdate() {
    console.log("componentDidUpdate");
  }
  componentWillUnmount() {
    console.log("componentWillUnmount");
  }

  render() {
    console.log("render");

    return (
      <div className="user-class">
        <UserContext.Consumer>
          {({ loggedInUser }) => (
            <h1 className="text-xl font-bold">{loggedInUser}</h1>
          )}
        </UserContext.Consumer>
        <img
          src="https://avatars.githubusercontent.com/u/63922624?v=4"
          alt="user_img"
        />
        <h1>Name: {this.state.userInfo.name}</h1>
        <h2>Location: {this.state.userInfo.location}</h2>
      </div>
    );
  }
}

export default UserClass;
