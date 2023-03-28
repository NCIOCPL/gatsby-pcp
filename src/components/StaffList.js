import React from "react";
import SingleStaffListEntry from "./SingleStaffListEntry";
import "../scss/components/_staff.scss";

class StaffList extends React.Component {
		render() {
				return (<ul className="staff-list">
								<SingleStaffListEntry
										source={"./../images/Maureen-Johnson-768x768.jpg"}
										alt={"Maureen R. Johnson, Ph.D."}
										title={"Executive Secretary"}
								/>
								<SingleStaffListEntry
								source={"./../images/samantha-resized.jpg"}
								alt={"Samantha L. Finstad, Ph.D."}
								title={"Senior Health Science Policy Advisor"}
								/>
								<SingleStaffListEntry
								source={"./../images/daniela-resized.jpg"}
								alt={"Daniela Monterroza"}
								title={"Health Communications Fellow"}
								/>
						</ul>
				);
		}
}

export default StaffList;
