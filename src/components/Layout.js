import React from "react";
import Header from "./Header";
import { Footer } from "./Footer";
import '../scss/styles.scss';

export default function Layout({ children }) {
		return (
				<div role={"document"} className={"pcp-document-container"}>
						<Header/>
						<div className={"pcp-grid-section"}>
								<div className={"grid-row"}>
										<div className={"grid-col-12"}>
												<div className={"pcp-sections"}>
														{ children }
												</div>
										</div>
								</div>
						</div>
						<Footer/>
				</div>
		)
}
