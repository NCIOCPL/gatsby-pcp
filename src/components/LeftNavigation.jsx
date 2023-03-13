import React from "react";
import { getNodes } from "../hooks/get-nodes";
import { Link } from "gatsby";

export const LeftNavigation = ({ root }) => {

	const { edges } = getNodes()
	const nodeList = {
		nodes: edges,
	}

	let sluglist = edges.filter(element => element.node.frontmatter.slug.includes(root) );

	let sortedSlugList = sluglist.sort(function(p1,p2){
			return p1.node.frontmatter.slug - p2.node.frontmatter.slug;
	});
		 let linkList=sortedSlugList.map((link,index)=>{
				 return <li key={index} className={"nav-item"}>
						 <Link to={link.node.frontmatter.slug}
									 className={"meeting-left-nav-item"}
									 data-section-raw-title={link.node.frontmatter.linktext}
									 data-section-aliased-title={link.node.frontmatter.linktext}
									 data-section-id={index}
									 activeClassName="active">{link.node.frontmatter.linktext}</Link>
				 </li>
		});
  return (
		<div className="medium-3 medium-up columns">
				<div
						className="view view-pcp-meeting-left-nav view-id-pcp_meeting_left_nav view-display-id-nav section-nav equalheight">
						<ul className="view-content">
								{linkList}
						</ul>
				</div>
		</div>
  )
}
