import React from "react";
import { ChildLink } from "./Styled";
import { Link } from "gatsby";
import "../scss/components/_top-bar.scss";

class TopNavigation extends React.Component {
  render() {
    return (
      <section className={"top-bar-section"} aria-hidden={"true"}>
					<ul>
						<li>
							<Link to={"/"}
										activeClassName={"active"}>Home</Link>
						</li>
						<li>
							<ChildLink to={"/members/"}
										activeClassName={"active"}>Members</ChildLink>
						</li>
						<li>
							<ChildLink to={"/about/"}
										activeClassName={"active"}>About</ChildLink>
						</li>
						<li>
							<ChildLink to={"/reports/"}
										activeClassName={"active"}>Reports</ChildLink>
						</li>
					</ul>
      </section>
    );
  }
}

export default TopNavigation;
