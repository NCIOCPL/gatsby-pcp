import React from "react";
import SingleStaffListEntry from "./SingleStaffListEntry";
import "../scss/components/_staff.scss";

class PCPMemberList extends React.Component {
  render() {
    return (
        <ul className="staff-list">
						<SingleStaffListEntry
								source={"../images/dr._elizabeth_jaffee_headshot-squarecrop.jpg"}
								alt={"Dr. Elizabeth M. Jaffee"}
								title={"PCP Chair"}
								url={"/members/jaffee"}
						/>
						<SingleStaffListEntry
								source={"../images/bergerm_headshot-squarecrop_2_0.png"}
								alt={"Dr. Mitchel S. Berger"}
								title={"PCP Member"}
								url={"/members/berger"}
						/>
						<SingleStaffListEntry
								source={"../images/dr._brown-squarecrop.png"}
								alt={"Dr. Carol L. Brown"}
								title={"PCP Member"}
								url={"/members/brown"}
						/>
        </ul>
    );
  }
}

export default PCPMemberList;
