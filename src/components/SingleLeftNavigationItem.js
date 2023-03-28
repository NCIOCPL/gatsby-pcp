import React from "react";
import { Link } from "gatsby";

class SingleLeftNavigationItem extends React.Component {
  render() {
			let parsedLinks = JSON.parse(this.props.links);
			this.linkList=parsedLinks.map((link,index)=>{
					return <li key={index} className={"nav-item"}>
							<Link to={link.url} className={"left-nav-item"}
										data-section-raw-title={link.text}
										data-section-aliased-title={link.text}
										data-section-id={index}
										activeClassName={"active"}>{link.text}</Link>
					</li>
			});

    return (
				<div className={"left-nav"}>
						<ul>
								{this.linkList}
						</ul>
				</div>
    );
  }
}

export default SingleLeftNavigationItem;
