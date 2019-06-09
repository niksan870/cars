import React, { Component } from "react";
import Sidebar from "./sidebar/Sidebar";
import SmallSearch from "./sidebar/SmallSearch";
import MainSection from "./MainSection";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";
import { getCars } from "../../actions/carActions";

class Landing extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          {/* <Sidebar /> */}
          <SmallSearch />
          <MainSection />
        </div>
      </div>
    );
  }
}

export default Landing;
