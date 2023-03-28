import React from "react";
import { Link } from "gatsby";
import "../scss/components/_single-staff-member.scss";

class SingleStaffMember extends React.Component {
		render() {
				return (
						<div className={"single-member"}>
								<div className={"member-image"}>
										<img
												typeof="foaf:Image"
												src={this.props.source}
												alt={this.props.name}
										/>
								</div>
						</div>
				);
		}
}

export default SingleStaffMember;
