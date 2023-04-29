import React from "react";
import { Link } from "gatsby";
import Image from '../components/Image';
import "../scss/components/_staff.scss";

class SingleStaffListEntry extends React.Component {
		displayUrl;
		linkClass;
		memberLinkClass;
		linkText;

		render() {
				if (this.props.url && (this.props.url.length>0)) {
						this.displayUrl = this.props.url;
						this.linkClass = '';
						this.linkText = 'View Bio';
						this.memberLinkClass= 'member-link';
				} else {
						this.displayUrl = '';
						this.linkClass = 'no-link-display';
						this.linkText = '';
						this.memberLinkClass= 'hidden';
				}

				return (
						<li className={"member"}>
								<div className={"member-image"}>
										<Link to={this.displayUrl}
										className={this.linkClass}>
												<Image
														src={this.props.source}
														alt={this.props.alt}
												/>
										</Link>
								</div>
								<div className={"member-name"}>
										<Link to={this.displayUrl}
													className={this.linkClass}>
												{this.props.alt}
										</Link>
								</div>
								<div className={"member-title"}>
										{this.props.title}
								</div>
								<div className={"member-number"}>
										{this.props.number}
								</div>
								<div className={"member-email"}>
										{this.props.email}
								</div>
								<div className={this.memberLinkClass}>
									<Link to={this.displayUrl}
												className={this.linkClass}>{this.linkText}</Link>
								</div>
						</li>
				);
		}
}

export default SingleStaffListEntry;
