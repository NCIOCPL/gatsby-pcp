import React from "react";
import TopBar from "./TopBar";
import SiteTitle from "./SiteTitle";
import "../scss/components/_header.scss";

class Header extends React.Component {
  render() {
    return (
      <header role={"banner"}
							className={"header"}>
				<TopBar></TopBar>
        <SiteTitle></SiteTitle>
      </header>
    );
  }
}

export default Header;

