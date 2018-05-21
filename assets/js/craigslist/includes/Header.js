import React, { Component } from "react";
import ReactDOM from "react-dom";

export default class Header extends Component {
  constructor() {
    super();
    this.state = {
      name: "Joe"
    };
  }
  clickedBtn = () => {
    console.log("swag");
  };
  render() {
    return (
      <header>
        <div className="leftMenu">
          <div className="logo">Craigslist</div>
          <div className="city">
            Denver
            <i className={`fa fa-chevron-down`} />
          </div>
        </div>

        <div className="rightMenu">
          <div className="userImage">IMG</div>
          <div className="userDropdown">
            My Account
            <i className={`fa fa-chevron-down`} />
          </div>
          <div className="postButton">Post To Classifieds</div>
        </div>
      </header>
    );
  }
}
