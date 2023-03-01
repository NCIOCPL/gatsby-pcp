import React from "react";
import SingleStaffListEntry from "./SingleStaffListEntry";

class StaffList extends React.Component {
		render() {
				return (
						<div className="body" data-body-id={5}>
								<div className="row">
										<div className="small-12 column">
												<div className="view view-pcp-staff view-id-pcp_staff view-display-id-block view-dom-id-46ee79a7fbdf0cc6aa53f3eff5afb5fd">
														<div className="view-content">
																<ul className="row">
																		{" "}
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
																</ul>{" "}
														</div>
												</div>{" "}
										</div>
								</div>
						</div>
				);
		}
}

export default StaffList;
