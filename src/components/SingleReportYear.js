import React from "react";
import { Link } from "gatsby";
import "../scss/components/_report-list.scss";

class SingleReportYear extends React.Component {

		render() {
				this.linkList=this.props.links.map((link,index)=>{
						return <li key={index}>
								<Link to ={link.url}>{link.text}</Link>
						</li>
				});
				return (
						<div>
								<h3 className={"series-year"}>
										{this.props.year}
								</h3>
								<div className={"description"}>
										{this.props.description}
								</div>
								<ul className={"report-linklist"}>
										{this.linkList}
								</ul>
						</div>
				);
		}
}

export default SingleReportYear;
