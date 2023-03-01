import React from "react";
import { Link } from "gatsby";

class SingleReportYear extends React.Component {

		render() {
				this.linkList=this.props.links.map((link,index)=>{
						return <li key={index}>
								<div className="field-collection-view clearfix view-mode-full">
										<div about="/field-collection/field-series-links/386">
												<div className="content">
														<div className="text-content">
																<Link to ={link.url}>{link.text}</Link>
														</div>
												</div>
										</div>
								</div>
						</li>
				});
				return (
						<div>
								<h3 className="series-year">{this.props.year}</h3>
								<div className="field-content field-description">
										{this.props.description}
										</div>
								<div className="item-list">
										<ul>
												{this.linkList}
										</ul>
								</div>
						</div>
				);
		}
}

export default SingleReportYear;
