import React from "react";
import { ChildLink } from "./Styled";
import { Link } from "gatsby";

class TopNavigation extends React.Component {
  render() {
    return (
      <section className="top-bar-section" aria-hidden="true">
        <div className="view-pcp-sections">
              <ul>
                <li>
                  <Link to="/"
												activeClassName="active">Home</Link>
                </li>
                <li className>
                  <ChildLink to="/members/"
												activeClassName="active">Members</ChildLink>
                </li>
                <li className>
                  <ChildLink to="/about/"
												activeClassName="active">About</ChildLink>
                </li>
                <li className>
                  <ChildLink to="/reports/"
												activeClassName="active">Reports</ChildLink>
                </li>
              </ul>
        </div>
      </section>
    );
  }
}

export default TopNavigation;
