import React from "react";
import { ChildLink } from "./Styled";
import { Link } from "gatsby";
import { useSiteMetadata } from "../hooks/use-site-metadata";
import "../scss/components/_left-nav-multipage.scss"

function navigationLink(link, index) {
		return <li key={index} className={"nav-item"}>
				<Link to={ link.link }
							activeClassName={"active"}
							className={"left-nav-item"}>
						{ link.name }</Link>
		</li>
}
function childNavigationLink(link, index) {
		let subLinkList = '';
		if (link.sublinks != null ) {
				subLinkList = link.sublinks.map((link,index)=>{
						return navigationLink(link, index);
				});
		}
		return <li key={index} className={"nav-item"}>
				<ChildLink to={ link.link }
									 activeClassName={"active"}
									 className={"left-nav-item"}>
						{ link.name }
				</ChildLink>
				<ul className={"third-tier"}>{ subLinkList }</ul>
		</li>
}
export const LeftTopNavigation = ({ root }) => {
		const { menuLinks } = useSiteMetadata();
		let linkList = menuLinks.map((link,index)=>{
				if (link.link === root ) {
						let subLinkList = '';
						if (link.sublinks != null ) {
								subLinkList = link.sublinks.map((link,index)=>{
										return childNavigationLink(link, index);
								});
						}
						return <li key={index} className={"nav-item"}>
								<ChildLink to={ link.link }
													 activeClassName={"active"}
													 className={"left-nav-item"}>
										{ link.name }
								</ChildLink>
								<ul className={"second-tier"}>{ subLinkList }</ul>
						</li>
				} else {
						return '';
				}
		});
		return (
				<div className={"left-nav top-nav-list"}>
						<ul>
								{linkList}
						</ul>
				</div>
		);
}

