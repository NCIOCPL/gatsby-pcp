import React from "react";
import { Script } from "gatsby";
import Header from "./Header";
import { Footer } from "./Footer";
import '../scss/styles.scss';

export default function Layout({ children }) {
	return (
		<div role={"document"} className={"pcp-document-container"}>
			<Header />
			<div className={"pcp-grid-section"}>
				<div className={"desktop-constrained"}>
					<div className={"grid-row"}>
						<div className={"grid-col-12"}>
							<div className={"pcp-sections"}>
								{children}
							</div>
						</div>
					</div>
				</div>
			</div>
			<Footer />
			<Script type="text/javascript">{(function () {

				// Make gatsby build happy when window doesn't exist
				if (typeof window === 'undefined') {
					global.window = {}
				}

				if (window._satellite) {
					_satellite.pageBottom();
				}
			})()}
			</Script>
		</div>
	)
}
