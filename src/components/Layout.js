import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import '../scss/pcptheme.scss';

export default function Layout({ children }) {
  return (
    <div role={"document"} className={"page"}>
				<Header/>
				<div className={"section"}>
						<div className={"row"}>
								<div className={"small-12 column"}>
										<div className={"view-pcp-sections"}>
												{children}
										</div>
								</div>
						</div>
				</div>
				<Footer/>
    </div>
  )
}
