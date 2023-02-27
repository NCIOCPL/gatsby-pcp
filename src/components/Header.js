import React from "react";
import TopBar from "./TopBar";
import SiteTitle from "./SiteTitle";

class Header extends React.Component {
  render() {
    return (
      <header role="banner" className="l-header">
        {}
        <div className="sticky">
          <TopBar></TopBar>
        </div>
        {}
        <SiteTitle></SiteTitle>
      </header>
    );
  }
}

export default Header;
