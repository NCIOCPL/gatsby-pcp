import React from "react";

class SingleStaffListEntry extends React.Component {
		render() {
				return (
						<li className="medium-4 columns member">
								<div className="member-image">
										<img
												src={this.props.source}
												alt={this.props.alt}
										/>
								</div>
								<div className="field-content member-name">
										{this.props.alt}
								</div>
								<div className="member-title">{this.props.title}</div>
								<div className="member-number">{this.props.number}</div>
								<div className="member-email" >{this.props.email}</div>
						</li>
				);
		}
}

export default SingleStaffListEntry;
