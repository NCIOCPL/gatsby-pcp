import React from "react";
import { Link } from "gatsby";
import "../scss/components/_report-list.scss";

class SingleReportYear extends React.Component {

		render() {
				this.linkList = '';
				this.linkListClass = "hidden";
				if(this.props.links){
						let linkJSON = JSON.stringify(this.props.links);
						let parsedLinks = JSON.parse(JSON.parse(linkJSON));

						if(parsedLinks.list && (Array.isArray(parsedLinks.list))) {
								this.linkListClass = "report-linklist";
								this.linkList=parsedLinks.list.map((link,index)=>{
										return <li key={index}>
												<Link to ={link.url}>{link.text}</Link>
										</li>
								});
						}
				}


				return (
						<div>
								<h3 className={"series-year"}>
										{this.props.year}
								</h3>
								<div className={"description"} dangerouslySetInnerHTML={{ __html:  this.props.description}} />
								<ul className={this.linkListClass}>
										{this.linkList}
								</ul>
						</div>
				);
		}
}

export default SingleReportYear;
