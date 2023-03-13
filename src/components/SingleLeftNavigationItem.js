import React from "react";
import { Link } from "gatsby";

class SingleLeftNavigationItem extends React.Component {
  render() {
			let parsedLinks = JSON.parse(this.props.links);
			this.linkList=parsedLinks.map((link,index)=>{
					return <li key={index} className={"nav-item"}>
							<Link to={link.url} className={"meeting-left-nav-item"}
										data-section-raw-title={link.text}
										data-section-aliased-title={link.text}
										data-section-id={index}
										activeClassName="active">{link.text}</Link>
					</li>
			});

    return (<div className="medium-3 medium-up columns">
								<div
										className="view view-pcp-meeting-left-nav view-id-pcp_meeting_left_nav view-display-id-nav section-nav equalheight">
												<ul className="view-content">
														{this.linkList}
												</ul>
								</div>
						</div>
    );
  }
}

export default SingleLeftNavigationItem;
