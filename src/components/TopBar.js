import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import TopNavigation from "./TopNavigation";
import "../scss/components/_top-bar.scss"

class TopBar extends React.Component {
  render() {
    return (
      <nav
        className={"top-bar"}
        data-options={"custom_back_text:false; scrolltop:false"}
      >
        <ul className={"title-area"}>
          <li>
							<a
								href={"/"}
								rel={"home"}
								title={"President's Cancer Panel Home"}
								className={"active accessible-link"}
							>
								President's Cancer Panel
							</a>
            <a
              href={"/"}
              rel={"home"}
              title={"President's Cancer Panel Home Logo"}
              className={"active"}
            >
              <StaticImage
                className={"logo"}
                src={"../images/logo.png"}
                alt={"President's Cancer Panel logo"}
                title={"President's Cancer Panel Home"}
								width={"150px"}
              />
            </a>{" "}
          </li>
          <li className={"left-off-canvas-toggle menu-icon"}>
            <a href="#">
              <span />
            </a>
          </li>
        </ul>
        <TopNavigation></TopNavigation>
      </nav>
    );
  }
}

export default TopBar;
