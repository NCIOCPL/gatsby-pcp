import React from "react";
import "../scss/components/_site-title.scss";
import { useSiteMetadata } from "../hooks/use-site-metadata";
import { StaticImage } from "gatsby-plugin-image";
import { Link } from "gatsby";

export const SiteTitle = () => {
		const { title, slogan } = useSiteMetadata();
		return (
			<section className={"site-title-container"}>
					<ul className={"title-area"}>
							<li>
									<Link
											to={"/"}
											rel={"home"}
											title={"President's Cancer Panel Home"}
											className={"active accessible-link"}
									>
											{ title }
									</Link>
									<Link
											to={"/"}
											rel={"home"}
											title={"President's Cancer Panel Home Logo"}
											className={"active"}
									>
											<StaticImage
													className={"logo"}
													src={"../images/logo.png"}
													alt={"President's Cancer Panel logo"}
													title={"President's Cancer Panel Home"}
													width={150}
											/>
									</Link>{" "}
							</li>
							<li className={"left-off-canvas-toggle menu-icon"}>
									<Link to={"#"}>
											<span />
									</Link>
							</li>
					</ul>
					<div className={"site-title-and-slogan"}>
							<h1 id={"site-name"} className={"site-name"}>
									<Link to={"/"}
												rel={"home"}
												title={"President's Cancer Panel Home"}>
											{ title }
									</Link>
							</h1>
							<div title={slogan}
								className={"site-slogan"}>
									<Link to={"/"}
												rel={"home"}
												title={"President's Cancer Panel Home"}>
										{ slogan }
									</Link>
							</div>
					</div>
			</section>
		);
}

