import * as React from "react";
import Layout from "../components/Layout";
import { LeftTopNavigation } from "../components/LeftTopNavigation";
import MainText from "../components/MainText";

export default function BlogTemplate({ frontmatter, htmlAst, path, pageContext }) {
	return (
		<Layout pageContext={pageContext}>
			<div className="full-report-container">
				<div className="left-nav-container">
					<LeftTopNavigation root={path}></LeftTopNavigation>
				</div>
				<div className="report-container top-left-nav-container">
					<h2 className={"post-title"}>{frontmatter.title}</h2>
					<p className={"byline"}>{frontmatter.author}</p>
					<div className="post-body">
						<MainText html={htmlAst}></MainText></div>
				</div></div>
		</Layout>
	);
}