import React from "react";
import "../scss/components/_site-title.scss";
import { useSiteMetadata } from "../hooks/use-site-metadata";
import { StaticImage } from "gatsby-plugin-image";

export const SiteTitle = () => {
		const { title, slogan } = useSiteMetadata();
		return (
			<section className={"site-title-container"}>
					<ul className={"title-area"}>
							<li>
									<a
											href={"/"}
											rel={"home"}
											title={"President's Cancer Panel Home"}
											className={"active accessible-link"}
									>
											{ title }
									</a>
									<a
											href={"/"}
											rel={"home"}
											title={"President's Cancer Panel Home Logo"}
											className={"active"}
									>
											<StaticImage
													className={"logo"}
													src={"../images/logo.png"}
													alt={"President's Cancer Panel logo"}
													title={"President's Cancer Panel Home"}
													width={"150px"}
											/>
									</a>{" "}
							</li>
							<li className={"left-off-canvas-toggle menu-icon"}>
									<a href="#">
											<span />
									</a>
							</li>
					</ul>
					<div className={"site-title-and-slogan"}>
							<h1 id={"site-name"} className={"site-name"}>
									{ title }
							</h1>
							<div title={slogan}
								className={"site-slogan"}>
									{ slogan }
							</div>
					</div>
			</section>
		);
}

