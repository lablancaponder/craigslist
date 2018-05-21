import React, { Component } from "react";
import ReactDOM from "react-dom";

export default class Header extends Component {
  constructor() {
    super();
    this.state = {
      name: "Joe"
    };
  }

  render() {
    return (
      <div className="container">
        <header>
          <div className="leftMenu">
            <div className="logo">Craigslist</div>
            <div className="city">
              Denver
              <i className={`fa fa-chevron-down`} />
            </div>
          </div>

          <div className="rightMenu">
            <div className="userImage">
              <i className={`fa fa-user-circle`} />
            </div>
            <div className="userDropdown">
              My Account
              <i className={`fa fa-chevron-down`} />
            </div>
            <div className="postButton">Post To Classifieds</div>
          </div>
        </header>
      </div>
    );
  }
}
