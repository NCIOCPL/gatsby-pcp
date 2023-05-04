import React from "react";
import EnvelopeIcon from "../svg/envelope.inline.svg";
import LinkedInIcon from "../svg/linkedin.inline.svg";
import TwitterIcon from "../svg/twitter.inline.svg";
import { useSiteMetadata } from "../hooks/use-site-metadata";
import "../scss/components/_footer.scss";

export const Footer = () => {
		const { title, footerLinks, iconLinks } = useSiteMetadata();
		let linkList = footerLinks.map((link,index)=>{
				return <div className={"connect-icons"} key={index}>
						<a href={ link.link }>
								{ link.name }
						</a>
						<br />
				</div>
		});
		let iconList = iconLinks.map((link,index)=>{
				let altText = 'President\'s Cancer Panel ' + link.name;
				switch (link.name) {
						case 'Twitter':
								return <a href={ link.link } key={index}>
										<TwitterIcon
												className={"connect-icon"}
												height={ link.height }
												width={ link.width }
												alt={ altText }
										/>
								</a>
						case 'Linkedin':
								return <a href={ link.link } key={index}>
										<LinkedInIcon
												className={"connect-icon"}
												height={ link.height }
												width={ link.width }
												alt={ altText }
										/>
								</a>
						case 'email':
								return <a href={ link.link } key={index}>
										<EnvelopeIcon
												className={"connect-icon"}
												height={ link.height }
												width={ link.width }
												alt={ link.name }
										/>
								</a>
				}
				return <a href={ link.link } key={index}>
						{ link.name }
				</a>
		});
		return (
				<footer className={"footer"} role={"contentinfo"}>
						<div className={"pcp-grid-section"}>
								<div className={"desktop-constrained"}>
										<div className={"grid-row"}>
												<div className={"grid-col-12"}>
														<h3>{ title }</h3>
														{ linkList }
														<div className={"connect-icons"}>
																{ iconList }
														</div>
												</div>
										</div>
								</div>
						</div>
						<div className={"footer-endcap"} />
				</footer>
		);
}

