import * as React from "react";
import Layout from "../components/Layout";
import MainText from "../components/MainText";

export default function SinglePageTemplate({ frontmatter, htmlAst }) {
	return (
		<Layout>
			<h2 className={"post-title"}>{frontmatter.title}</h2>
			<div className="post-body">
				<MainText html={htmlAst}></MainText>
			</div>
		</Layout>
	);
}