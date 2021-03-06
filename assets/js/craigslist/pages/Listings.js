import React, { Component } from "react";
import ReactDOM from "react-dom";

export default class Listings extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    const { match, location, history } = this.props;
    return (
      <div className="listings">
        <div className="container">
          <section className="filter">
            <div className="form-group price">
              <label>Price</label>
              <select name="min-price" className="min-price">
                <option value="0">0</option>
              </select>

              <select name="max-price" className="max-price">
                <option value="1000">1000</option>
              </select>
            </div>

            <div className="form-group make">
              <label>Make</label>
              <select name="make" className="make">
                <option value="acura">Acura</option>
              </select>
            </div>

            <div className="form-group button">
              <div className="primary-btn">Update</div>
              <div className="reset-btn">Reset</div>
            </div>
          </section>

          <section className="list-view">
            <section className="change-view">
              <div className="form-group view-dropdown">
                <select name="select-view" className="select-view">
                  <option value="gallery-view">Gallery View</option>
                  <option value="list-view">List View</option>
                  <option value="thumb-view">Thumbnail View</option>
                </select>
              </div>

              <div className="form-group sort-dropdown">
                <select name="sort-view" className="sort-view">
                  <option value="sort-newest">Newest</option>
                </select>
              </div>
            </section>

            <section className="all-items">
              <div className="item">
                <div className="image">
                  <div className="price">$8900</div>
                  Image
                </div>

                <div className="details">
                  <h5>Title</h5>
                  <h6>City</h6>
                </div>
              </div>
            </section>
          </section>
        </div>
      </div>
    );
  }
}
