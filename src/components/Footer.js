import React from "react";
import EnvelopeIcon from "../svg/envelope.inline.svg";
import LinkedInIcon from "../svg/linkedin.inline.svg";
import TwitterIcon from "../svg/twitter.inline.svg";
import "../scss/components/_footer.scss";

class Footer extends React.Component {
		render() {
				return (
						<footer className={"footer"} role={"contentinfo"}>
								<div className={"pcp-grid-section"}>
										<div className={"grid-container"}>
												<div className={"grid-row"}>
														<div className={"grid-col-12"}>
																<h3>President's Cancer Panel</h3>
																<div>
																		<a href={"mailto:PresCancerPanel@mail.nih.gov"}>
																				PresCancerPanel@mail.nih.gov
																		</a>
																		<br />
																</div>
																<div className={"connect-icons"}>
																		<a href={"https://www.hhs.gov/vulnerability-disclosure-policy/index.html"}>
																				HHS Vulnerability Disclosure
																		</a>
																		<br />
																</div>
																<div className={"connect-icons"}>
																		<a href={"https://twitter.com/prescancerpanel"}>
																				<TwitterIcon
																						className={"connect-icon"}
																						height={48}
																						width={48}
																						alt={"President's Cancer Panel Twitter"}
																				/>
																		</a>
																		<a href={"https://www.linkedin.com/company/president's-cancer-panel/"}>
																				<LinkedInIcon
																						className={"connect-icon"}
																						height={48}
																						width={48}
																						alt={"President's Cancer Panel Linkedin"}
																				/>
																		</a>
																		<a href={"mailto:PresCancerPanel@mail.nih.gov"}>
																				<EnvelopeIcon
																						className={"connect-icon"}
																						height={48}
																						width={48}
																						alt={"President's Cancer Panel email"}
																				/>
																		</a>
																</div>
														</div>
												</div>
										</div>
								</div>
								<div className={"footer-endcap"} />
						</footer>
				);
		}
}

export default Footer;
