import React from "react";
import { Link } from "gatsby";

class SingleStaffMember extends React.Component {
		render() {
				return (
						<div className="view-pcp-members single-member">
								<ul className="row">
										<li className="member">
												<div className="member-image">
														<img
																typeof="foaf:Image"
																src={this.props.source}
																width={657}
																height={657}
																alt={this.props.name}
														/>
												</div>
										</li>
								</ul>
						</div>
				);
		}
}

export default SingleStaffMember;
