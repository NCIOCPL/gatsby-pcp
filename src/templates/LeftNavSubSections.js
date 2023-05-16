import * as React from "react";
import Layout from "../components/Layout";
import { LeftNavigation } from "../components/LeftNavigation";
import MainText from "../components/MainText";

export default function LeftNavsSubSectionsTemplate({ frontmatter, htmlAst, path, pageContext }) {
	return (
		<Layout pageContext={pageContext}>
			<h2 className={"post-title"}>{frontmatter.sectionTitle}</h2>
			<div className="full-report-container">
				<div className="left-nav-container">
					<LeftNavigation path={path}></LeftNavigation>
				</div>
				<div className="report-container top-left-nav-container">
					<h3 className={"post-title"}>{frontmatter.title}</h3>
					<div className="post-body">
						<MainText html={htmlAst}></MainText>
					</div>
				</div></div>
		</Layout>
	);
}