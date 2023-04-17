import React from "react";
import { Link as GatsbyLink } from "gatsby";

// Since DOM elements <a> cannot receive activeClassName
// and partiallyActive, destructure the prop here and
// pass it only to GatsbyLink
const Link = ({ children, to, activeClassName, partiallyActive, ...other }) => {
		// Tailor the following test to your environment.
		// This example assumes that any internal link (intended for Gatsby)
		// will start with exactly one slash, and that anything else is external.
		const report = /^\/report\//g.test(to);
		const internal = /^\/(?!\/)/.test(to);
		const pdf = /\.pdf$/.test(to);

		// Use Gatsby Link for internal links, and <a> for others
		if (internal && !report && !pdf) {
				return (
						<GatsbyLink
								to={to}
								activeClassName={activeClassName}
								partiallyActive={partiallyActive}
								{...other}
						>
								{children}
						</GatsbyLink>
				)
		}
		else if (pdf) {
				return (
						<>
						<img className="file-icon" alt="PDF icon" title="application/pdf"
								 src={"./images/application-pdf.png"} />
						<a href={to} {...other} target={"_blank"}>
								{children}
						</a>
						</>
				)
		}
		return (
				<a href={to} {...other}>
						{children}
				</a>
		)
}

export default Link
