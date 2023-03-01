import React from "react";
import { Link } from "gatsby";

class PCPMemberList extends React.Component {
  render() {
    return (
      <div className="view-pcp-members">
        <ul className="row">
          <li className="medium-4 columns member">
            <div className="member-image">
              <Link to="/members/jaffee">
									<img typeof="foaf:Image" src="./images/dr._elizabeth_jaffee_headshot-squarecrop.jpg" width="1072" height="1072" alt="" />
              </Link>
            </div>
            <div className="member-name">
              <Link to="/members/jaffee">Dr. Elizabeth M. Jaffee</Link>
            </div>
            <div className="member-title">PCP Chair</div>
            <Link to="/members/jaffee">View Bio</Link>
          </li>
          <li className="medium-4 columns member">
            <div className="member-image">
              <Link to="/members/berger">
									<img typeof="foaf:Image" src="./images/bergerm_headshot-squarecrop_2_0.png" width="657" height="657" alt="Dr. Mitchel S. Berger" />
              </Link>
            </div>
            <div className="member-name">
              <Link to="/members/berger">Dr. Mitchel S. Berger</Link>
            </div>
            <div className="member-title">PCP Member</div>
            <Link to="/members/berger">View Bio</Link>
          </li>
          <li className="medium-4 columns member">
            <div className="member-image">
              <Link to="/members/brown">
									<img typeof="foaf:Image" src="./images/dr._brown-squarecrop.png" width="600" height="600" alt="Dr. Carol L. Brown" />
							</Link>
            </div>
            <div className="member-name">
              <Link to="/members/brown">Dr. Carol L. Brown</Link>
            </div>
            <div className="member-title">PCP Member</div>
            <Link to="/members/brown">View Bio</Link>
          </li>
        </ul>
      </div>
    );
  }
}

export default PCPMemberList;
