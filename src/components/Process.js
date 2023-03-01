import React from "react";
import QuestionAnswer from "../components/QuestionAnswer"

class Process extends React.Component {
		render() {
				return (
						<div className="body" data-body-id={4}>
								<div className="row">
										<div className="small-12 column">
												<div className="field field-name-field-body field-type-text-long field-label-hidden field-wrapper">
														<QuestionAnswer
																question={"How does the Panel choose topics to examine?"}
																answer={"The Panel considers issues critical to the National Cancer\n" +
																"Program that are significant, timely, and manageable and that\n" +
																"have potential to result in concrete, actionable\n" +
																"recommendations. Conversations with stakeholders and partners\n" +
																"in cancer-related organizations help to identify priority\n" +
																"issues and potential focus areas."}
														/>
														<QuestionAnswer
																question={"Who implements the recommendations the Panel makes in its\n" +
																"reports?"}
																answer={"The Panel is an advisory committee and relies on stakeholders\n" +
																"that have authority to implement recommendations."}
														/>
														<QuestionAnswer
																question={"How can I get involved with cancer research advocacy efforts\n" +
																"in the federal government?"}
																answer={<fragment>Advocates interested in participating in activities at the
																		National Cancer Institute (NCI) that promote the collective patient
																		perspective in research are encouraged to contact
																		NCI's <a href="https://www.cancer.gov/about-nci/organization/oar">Office of Advocacy Relations</a>.</fragment>}
														/>
														<QuestionAnswer
																question={"Does the Panel update past reports?"}
																answer={"The Panel typically does not revisit past topics or update\n" +
																"previous reports."}
														/>
												</div>{" "}
										</div>
								</div>
						</div>
				);
		}
}

export default Process;

