import React from "react";
import SingleHomepageBox from "./SingleHomepageBox";

class FeaturedHomepageBoxes extends React.Component {
		render() {
				return (
						<div className="section featured">
								<div className="row collapse" data-match-height>
										<div className="panel-pane pane-block pane-views-featured-cards-block medium-12 columns">
												<div className="pane-content">
														<div className="view view-featured-cards view-id-featured_cards view-display-id-block view-dom-id-8f4bc2acb5f24a565675da0803f7ffa2">
																<div className="view-content">
																		<SingleHomepageBox
																				url={"/reports"}
																				source={"Summary-Page-FC-401x357.jpg"}
																				alt={"Improving Resilience and Equity in Cancer Screening"}
																				title={"Improving Resilience and Equity in Cancer Screening: 2020-2021 Meeting Series"}
																				description={"The Panel’s focus for the 2020–2021 series of meetings is on opportunities to improve the resilience and equity of cancer screening."}
																				/>
																		<SingleHomepageBox
																				url={"/report/cancerscreening/"}
																				source={"PCP2021reportCover-square.jpeg"}
																				alt={"Recent Report from the President’s Cancer Panel"}
																				title={"Recent Report from the President’s Cancer Panel"}
																				description={"Our report, Closing Gaps in Cancer Screening: " +
																				"Connecting People, Communities, and Systems to Improve Equity and Access, " +
																				"identifies four goals to improve the uptake of cancer screening to ensure the " +
																				"benefits reach all populations."}
																		/>
																		<SingleHomepageBox
																				url={"/nca50/1"}
																				source={"pcp_50_1.png"}
																				alt={"President's Cancer Panel Commemorates the National Cancer Act 50th Anniversary"}
																				title={"President's Cancer Panel Commemorates the National Cancer Act 50th Anniversary"}
																				description={"Since its inception in 1971, the President’s Cancer Panel has called" +
																				" attention to the causes of and possible solutions to disparities in the nation’s " +
																				"healthcare system. This series of blogs explores the Panel’s focus on this important topic."}
																		/>
																</div>
														</div>
												</div>
										</div>
								</div>
						</div>
				);
		}
}

export default FeaturedHomepageBoxes;
