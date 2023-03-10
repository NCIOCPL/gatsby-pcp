import React from "react";
import { Link } from "gatsby";
import SingleReportYear from "../components/SingleReportYear";
import Meetings from "../components/Meetings";

class ReportList extends React.Component {
  render() {
    return (
			<div class="view view-pcp-series view-id-pcp_series view-display-id-past_reports view-dom-id-720f029bc8720d99fcce1a8bf1eb313c">
					<div class="view-content">
							<div className="row series">
									<SingleReportYear
											year={"2022"}
											description={<fragment>
													<p><a href="/report/cancerscreening/">Closing Gaps in Cancer Screening: Connecting People, Communities, and Systems to Improve Equity and Access</a></p>
													</fragment>}
											links={[
													{
															url: "/report/cancerscreening/pdf/PresCancerPanel_CancerScreening_Feb2022_ExecSumm.pdf",
															text: "Executive Summary"
													},
													{
															url: "/field-collection/field-series-links/387",
															text: "Breast Cancer Screening Companion Document"
													},
													{
															url: "/field-collection/field-series-links/388",
															text: "Cervical Cancer Screening Companion Document"
													},
													{
															url: "/field-collection/field-series-links/389",
															text: "Colorectal Cancer Screening Companion Document"
													},
													{
															url: "/field-collection/field-series-links/390",
															text: "Lung Cancer Screening Companion Document"
													}
											]}
											/>
							</div>
							<div className="row series">
									<SingleReportYear
											year={"2021"}
											description={<fragment>
													<p>Improving Resilience and Equity in Cancer Screening: Innovation to Increase Screening</p>
											</fragment>}
											links={[
													{
															url: "/report/programsummary/",
															text: "Meeting Overview"
													},
											]}
									/>
									<Meetings
											meetings={[
													{
															url: "/2021/improving-resilience-and-equity-cancer-screening-innovations-increase-screening",
															dateList: [
																"February 11, 2021",
																	"Thu, 02/11/2021"
															],
															location: "Innovations Meeting",
															status: ""
													}
											]}
											/>
							</div>
							<div className="row series">
									<SingleReportYear
											year={"2020"}
											description={<fragment>
													<p>Improving Resilience and Equity in Cancer Screening: Lessons from COVID-19 and Beyond</p>
											</fragment>}
											links={[
													{
															url: "./pdfs/Meeting-Series-Overview_0",
															text: "Meeting Series Overview.pdf"
													},
											]}
									/>
									<Meetings
											meetings={[
													{
															url: "/2020/improving-resilience-and-equity-lung-cancer-screening-lessons-covid-19-and-beyond",
															dateList: [
																	"Oct 26-28, 2020",
																	"Mon, 10/26/2020 to",
																	"Wed, 10/28/2020"
															],
															location: "Lung Cancer",
															status: ""
													},
													{
															url: "/2020/improving-resilience-and-equity-lung-cancer-screening-lessons-covid-19-and-beyond",
															dateList: [
																	"Nov 2-4, 2020",
																	"Mon, 11/02/2020 to",
																	"Wed, 11/04/2020"
															],
															location: "Colorectal Cancer",
															status: ""
													},
													{
															url: "/2020/improving-resilience-and-equity-cervical-cancer-screening-lessons-covid-19-and-beyond",
															dateList: [
																	"Nov 9-10, 2020",
																	"Mon, 11/09/2020 to",
																	"Tue, 11/10/2020"
															],
															location: "Cervical Cancer",
															status: ""
													},
													{
															url: "/2020/improving-resilience-and-equity-breast-cancer-screening-lessons-covid-19-and-beyond",
															dateList: [
																	"Nov 16-18, 2020",
																	"Mon, 11/16/2020 to",
																	"Wed, 11/18/2020"
															],
															location: "Breast Cancer",
															status: ""
													}
											]}
									/>
							</div>
							<div className="row series">
									<SingleReportYear
											year={"2018"}
											description={<fragment>
													<p><a href="/report/hpvupdate/">HPV Vaccination for Cancer Prevention: Progress, Opportunities, and a Renewed Call to Action</a></p>
											</fragment>}
											links={[
													{
															url: "/report/hpvupdate/ExecutiveSummary.html",
															text: "Executive Summary"
													},
													{
															url: "/pdfs/PresCancerPanel-HPV-Report-Update-Slides.pdf",
															text: "Key Findings and Graphics"
													},
											]}
									/>
							</div>
							<div className="row series">
									<SingleReportYear
											year={"2018"}
											description={<fragment>
													<p><a href="/report/drugvalue/">Promoting Value, Affordability, and Innovation in Cancer Drug Treatment</a></p>
											</fragment>}
											links={[
													{
															url: "/report/drugvalue/ExecutiveSummary.html",
															text: "Executive Summary"
													}
											]}
									/>
									<Meetings
											meetings={[
													{
															url: "/2016-2017/access-and-cost-cancer-drugs-changing-healthcare-landscape",
															dateList: [
																	"June 10, 2016"
															],
															location: "New York, NY",
															status: ""
													},
													{
															url: "/2016-2017/emerging-opportunities-streamline-cancer-drug-development",
															dateList: [
																	"December 9, 2016"
															],
															location: "Arlington, VA",
															status: ""
													},
													{
															url: "/2016-2017/pricing-and-payment-strategies-cancer-drugs-maximizing-patients-access-beneficial",
															dateList: [
																	"March 27, 2017"
															],
															location: "Philadelphia, PA",
															status: ""
													}
											]}
									/>
							</div>
							<div className="row series">
									<SingleReportYear
											year={"2016"}
											description={<fragment>
													<p><a href="/report/connectedhealth/">Improving Cancer-Related Outcomes with Connected Health</a></p>
											</fragment>}
											links={[
													{
															url: "/report/connectedhealth/ExecutiveSummary.html",
															text: "Executive Summary"
													},
													{
															url: "/pdfs/What-Is-Connected-Health-infographic_v3.pdf",
															text: "What is Connected Health?"
													},
													{
															url: "/pdfs/ConnectedHealth14-15.pdf",
															text: "Meeting Series Overview"
													}
											]}
									/>
									<Meetings
											meetings={[
													{
															url: "/2014-2015/engaging-patients-connected-health-technologies",
															dateList: [
																	"December 11, 2014"
															],
															location: "Cambridge, MA",
															status: ""
													},
													{
															url: "/2014-2015/personal-health-data-revolution-connected-health-and-cancer",
															dateList: [
																	"March 26, 2015"
															],
															location: "San Francisco, CA",
															status: ""
													},
													{
															url: "/2014-2015/connected-cancer-patient-vision-future-and-recommendations-action",
															dateList: [
																	"July 9, 2015"
															],
															location: "Chicago, IL",
															status: ""
													}
											]}
									/>
							</div>
							<div className="row series">
									<SingleReportYear
											year={"2016"}
											description={<fragment>
													<p>Cancer Communication in the Digital Era: Opportunities and Challenges</p>
											</fragment>}
											links={[
													{
															url: "/pdfs/PCP_CommBrief_11-15-16v2_508.pdf",
															text: "Workshop Brief"
													}
											]}
									/>
									<Meetings
											meetings={[
													{
															dateList: [
																	"June 13, 2014"
															],
															location: "San Diego, CA",
															status: "",
															agendalist: [
																	{
																			url:"/pdfs/2014-agenda.pdf",
																			text: "Agenda"
																	},
																	{
																			url:"/pdfs/2014-summary.pdf",
																			text: "Minutes"
																	},
																	{
																			url:"/pdfs/13jun14stmt.pdf",
																			text: "Statement"
																	},
															]
													}
											]}
									/>
							</div>
							<div className="row series">
									<SingleReportYear
											year={"2012-2013"}
											description={<fragment>
													<p><a href="https://deainfo.nci.nih.gov/advisory/pcp/annualReports/HPV/index.htm">Cancer Communication in the Digital Era: Opportunities and Challenges</a></p>
											</fragment>}
											links={[
													{
															url: "https://deainfo.nci.nih.gov/advisory/pcp/annualReports/HPV/ExecutiveSummary.htm",
															text: "Executive Summary"
													},
													{
															url: "https://deainfo.nci.nih.gov/advisory/pcp/archive/glance/HPV2012.pdf",
															text: "Meeting Series Overview"
													}
											]}
									/>
									<Meetings
											meetings={[
													{
															dateList: [
																	"July 24, 2012"
															],
															location: "San Francisco, CA",
															status: "",
															agendalist: [
																	{
																			url:"https://deainfo.nci.nih.gov/advisory/pcp/archive/pcp0712/flyer.pdf",
																			text: "Information Flyer"
																	},
																	{
																			url:"https://deainfo.nci.nih.gov/advisory/pcp/archive/pcp0712/agenda.pdf",
																			text: "Agenda"
																	},
																	{
																			url:"https://deainfo.nci.nih.gov/advisory/pcp/archive/pcp0712/summary.pdf",
																			text: "Minutes"
																	},
																	{
																			url:"https://deainfo.nci.nih.gov/advisory/pcp/archive/pcp0712/24jul12stmt.pdf",
																			text: "Statement"
																	}
															]
													},
													{
															dateList: [
																	"September 13, 2012"
															],
															location: "Arlington, VA",
															status: "",
															agendalist: [
																	{
																			url:"https://deainfo.nci.nih.gov/advisory/pcp/archive/pcp0912/flyer.pdf",
																			text: "Information Flyer"
																	},
																	{
																			url:"https://deainfo.nci.nih.gov/advisory/pcp/archive/pcp0912/agenda.pdf",
																			text: "Agenda"
																	},
																	{
																			url:"https://deainfo.nci.nih.gov/advisory/pcp/archive/pcp0912/summary.pdf",
																			text: "Minutes"
																	},
																	{
																			url:"https://deainfo.nci.nih.gov/advisory/pcp/archive/pcp0912/13sep12stmt.pdf",
																			text: "Statement"
																	}
															]
													},
													{
															dateList: [
																	"November 16, 2012"
															],
															location: "Chicago, IL",
															status: "",
															agendalist: [
																	{
																			url:"https://deainfo.nci.nih.gov/advisory/pcp/archive/pcp1112/flyer.pdf",
																			text: "Information Flyer"
																	},
																	{
																			url:"https://deainfo.nci.nih.gov/advisory/pcp/archive/pcp1112/agenda.pdf",
																			text: "Agenda"
																	},
																	{
																			url:"https://deainfo.nci.nih.gov/advisory/pcp/archive/pcp1112/summary.pdf",
																			text: "Minutes"
																	},
																	{
																			url:"https://deainfo.nci.nih.gov/advisory/pcp/archive/pcp1112/16nov12stmt.pdf",
																			text: "Statement"
																	}
															]
													},
													{
															dateList: [
																	"Apr 23-24, 2013"
															],
															location: "Miami, FL",
															status: "",
															agendalist: [
																	{
																			url:"https://deainfo.nci.nih.gov/advisory/pcp/archive/pcp0413/flyer.pdf",
																			text: "Information Flyer"
																	},
																	{
																			url:"https://deainfo.nci.nih.gov/advisory/pcp/archive/pcp0413/agenda.pdf",
																			text: "Agenda"
																	},
																	{
																			url:"https://deainfo.nci.nih.gov/advisory/pcp/archive/pcp0413/summary.pdf",
																			text: "Minutes"
																	},
																	{
																			url:"https://deainfo.nci.nih.gov/advisory/pcp/archive/pcp0413/24apr13stmt.pdf",
																			text: "Statement"
																	}
															]
													}
											]}
									/>
							</div>
							<div className="row series">
									<SingleReportYear
											year={"2010-2011"}
											description={<fragment>
													<p><a href="https://deainfo.nci.nih.gov/advisory/pcp/annualReports/pcp10-11rpt/FullReport.pdf">The Future of Cancer Research: Accelerating Scientific Innovation</a></p>
											</fragment>}
											links={[
													{
															url: "https://deainfo.nci.nih.gov/advisory/pcp/annualReports/pcp10-11rpt/ExecutiveSummary.pdf",
															text: "Executive Summary"
													},
													{
															url: "https://deainfo.nci.nih.gov/advisory/pcp/archive/glance/At-a-Glance10-11.pdf",
															text: "Meeting Series Overview"
													}
											]}
									/>
									<Meetings
											meetings={[
													{
															dateList: [
																	"September 22, 2010"
															],
															location: "Boston, MA",
															status: "",
															agendalist: [
																	{
																			url:"https://deainfo.nci.nih.gov/advisory/pcp/archive/pcp0910/agenda.pdf",
																			text: "Agenda"
																	},
																	{
																			url:"https://deainfo.nci.nih.gov/advisory/pcp/archive/pcp0910/summary.pdf",
																			text: "Minutes"
																	},
																	{
																			url:"https://deainfo.nci.nih.gov/advisory/pcp/archive/pcp0910/22sep10stmt.pdf",
																			text: "Statement"
																	}
															]
													},
													{
															dateList: [
																	"October 26, 2010"
															],
															location: "Philadelphia, PA",
															status: "",
															agendalist: [
																	{
																			url:"https://deainfo.nci.nih.gov/advisory/pcp/archive/pcp1010/agenda.pdf",
																			text: "Agenda"
																	},
																	{
																			url:"https://deainfo.nci.nih.gov/advisory/pcp/archive/pcp1010/summary.pdf",
																			text: "Minutes"
																	},
																	{
																			url:"https://deainfo.nci.nih.gov/advisory/pcp/archive/pcp1010/26oct10stmt.pdf",
																			text: "Statement"
																	}
															]
													},
													{
															dateList: [
																	"December 14, 2010"
															],
															location: "BEthesda, MD",
															status: "",
															agendalist: [
																	{
																			url:"https://deainfo.nci.nih.gov/advisory/pcp/archive/pcp1210/agenda.pdf",
																			text: "Agenda"
																	},
																	{
																			url:"https://deainfo.nci.nih.gov/advisory/pcp/archive/pcp1210/summary.pdf",
																			text: "Minutes"
																	},
																	{
																			url:"https://deainfo.nci.nih.gov/advisory/pcp/archive/pcp1210/14dec10stmt.pdf",
																			text: "Statement"
																	}
															]
													},
													{
															dateList: [
																	"February 1, 2011"
															],
															location: "Atlanta, GA",
															status: "",
															agendalist: [
																	{
																			url:"https://deainfo.nci.nih.gov/advisory/pcp/archive/pcp0211/agenda.pdf",
																			text: "Agenda"
																	},
																	{
																			url:"https://deainfo.nci.nih.gov/advisory/pcp/archive/pcp0211/summary.pdf",
																			text: "Minutes"
																	},
																	{
																			url:"https://deainfo.nci.nih.gov/advisory/pcp/archive/pcp0211/14feb11stmt.pdf",
																			text: "Statement"
																	}
															]
													}
											]}
									/>
							</div>
							<div className="row series">
									<SingleReportYear
											year={"2009-2010"}
											description={<fragment>
													<p><a href="https://deainfo.nci.nih.gov/advisory/pcp/annualReports/pcp09-10rpt/pcp09-10rpt.pdf">America's Demographic and Cultural Transformation: Implications for Cancer</a></p>
											</fragment>}
											links={[
													{
															url: "https://deainfo.nci.nih.gov/advisory/pcp/annualReports/pcp09-10rpt/ExecSum.pdf",
															text: "Executive Summary"
													},
													{
															url: "https://deainfo.nci.nih.gov/advisory/pcp/annualReports/pcp09-10rpt/Addendum.pdf",
															text: "Addendum"
													},
													{
															url: "https://deainfo.nci.nih.gov/advisory/pcp/archive/glance/At-a-Glance_demographics.pdf",
															text: "Meeting Series Overview"
													}
											]}
									/>
									<Meetings
											meetings={[
													{
															dateList: [
																	"September 22, 2009"
															],
															location: "Seattle, WA",
															status: "",
															agendalist: [
																	{
																			url:"https://deainfo.nci.nih.gov/advisory/pcp/archive/pcp0909/agenda.pdf",
																			text: "Agenda"
																	},
																	{
																			url:"https://deainfo.nci.nih.gov/advisory/pcp/archive/pcp0909/summary.pdf",
																			text: "Minutes"
																	},
																	{
																			url:"https://deainfo.nci.nih.gov/advisory/pcp/archive/pcp0909/22sep09stmt.pdf",
																			text: "Statement"
																	}
															]
													},
													{
															dateList: [
																	"October 27, 2009"
															],
															location: "Los Angeles, CA",
															status: "",
															agendalist: [
																	{
																			url:"https://deainfo.nci.nih.gov/advisory/pcp/archive/pcp1009/agenda.pdf",
																			text: "Agenda"
																	},
																	{
																			url:"https://deainfo.nci.nih.gov/advisory/pcp/archive/pcp1009/summary.pdf",
																			text: "Minutes"
																	},
																	{
																			url:"https://deainfo.nci.nih.gov/advisory/pcp/archive/pcp1009/27oct09stmt.pdf",
																			text: "Statement"
																	}
															]
													},
													{
															dateList: [
																	"December 9, 2009"
															],
															location: "Wilmington, DE",
															status: "",
															agendalist: [
																	{
																			url:"https://deainfo.nci.nih.gov/advisory/pcp/archive/pcp1209/agenda.pdf",
																			text: "Agenda"
																	},
																	{
																			url:"https://deainfo.nci.nih.gov/advisory/pcp/archive/pcp1209/summary.pdf",
																			text: "Minutes"
																	},
																	{
																			url:"https://deainfo.nci.nih.gov/advisory/pcp/archive/pcp1209/09dec09stmt.pdf",
																			text: "Statement"
																	}
															]
													},
													{
															dateList: [
																	"February 2, 2010"
															],
															location: "Miami, FL",
															status: "",
															agendalist: [
																	{
																			url:"https://deainfo.nci.nih.gov/advisory/pcp/archive/pcp0210/agenda.pdf",
																			text: "Agenda"
																	},
																	{
																			url:"https://deainfo.nci.nih.gov/advisory/pcp/archive/pcp0210/summary.pdf",
																			text: "Minutes"
																	},
																	{
																			url:"https://deainfo.nci.nih.gov/advisory/pcp/archive/pcp0210/02feb10stmt.pdf",
																			text: "Statement"
																	}
															]
													}
											]}
									/>
							</div>
							<div className="row series">
									<SingleReportYear
											year={"2008-2009"}
											description={<fragment>
													<p><a href="https://deainfo.nci.nih.gov/advisory/pcp/annualReports/pcp08-09rpt/PCP_Report_08-09_508.pdf">Reducing Environmental Cancer Risk: What We Can Do Now</a></p>
											</fragment>}
											links={[
													{
															url: "https://deainfo.nci.nih.gov/advisory/pcp/archive/glance/At-a-Glance_Environmental.pdf",
															text: "Meeting Series Overview"
													}
											]}
									/>
									<Meetings
											meetings={[
													{
															dateList: [
																	"September 16, 2008"
															],
															location: "East Brunswick, NJ",
															status: "",
															agendalist: [
																	{
																			url:"https://deainfo.nci.nih.gov/advisory/pcp/archive/pcp0908/Flyer.pdf",
																			text: "Information Flyer"
																	},
																	{
																			url:"https://deainfo.nci.nih.gov/advisory/pcp/archive/pcp0908/agenda.pdf",
																			text: "Agenda"
																	},
																	{
																			url:"https://deainfo.nci.nih.gov/advisory/pcp/archive/pcp0908/summary.pdf",
																			text: "Minutes"
																	},
																	{
																			url:"https://deainfo.nci.nih.gov/advisory/pcp/archive/pcp0908/16sep08stmt.pdf",
																			text: "Statement"
																	}
															]
													},
													{
															dateList: [
																	"October 21, 2008"
															],
															location: "Indianapolis, IN",
															status: "",
															agendalist: [
																	{
																			url:"https://deainfo.nci.nih.gov/advisory/pcp/archive/pcp1008/Flyer.pdf",
																			text: "Information Flyer"
																	},
																	{
																			url:"https://deainfo.nci.nih.gov/advisory/pcp/archive/pcp1008/agenda.pdf",
																			text: "Agenda"
																	},
																	{
																			url:"https://deainfo.nci.nih.gov/advisory/pcp/archive/pcp1008/summary.pdf",
																			text: "Minutes"
																	},
																	{
																			url:"https://deainfo.nci.nih.gov/advisory/pcp/archive/pcp1008/21oct08stmt.pdf",
																			text: "Statement"
																	}
															]
													},
													{
															dateList: [
																	"December 4, 2008"
															],
															location: "Charleston, SC",
															status: "",
															agendalist: [
																	{
																			url:"https://deainfo.nci.nih.gov/advisory/pcp/archive/pcp1208/Flyer.pdf",
																			text: "Information Flyer"
																	},
																	{
																			url:"https://deainfo.nci.nih.gov/advisory/pcp/archive/pcp1208/agenda.pdf",
																			text: "Agenda"
																	},
																	{
																			url:"https://deainfo.nci.nih.gov/advisory/pcp/archive/pcp1208/summary.pdf",
																			text: "Minutes"
																	},
																	{
																			url:"https://deainfo.nci.nih.gov/advisory/pcp/archive/pcp1208/04dec08stmt.pdf",
																			text: "Statement"
																	}
															]
													},
													{
															dateList: [
																	"January 27, 2009"
															],
															location: "Phoenix, AZ",
															status: "",
															agendalist: [
																	{
																			url:"https://deainfo.nci.nih.gov/advisory/pcp/archive/pcp0109/Flyer.pdf",
																			text: "Information Flyer"
																	},
																	{
																			url:"https://deainfo.nci.nih.gov/advisory/pcp/archive/pcp0109/agenda.pdf",
																			text: "Agenda"
																	},
																	{
																			url:"https://deainfo.nci.nih.gov/advisory/pcp/archive/pcp0109/summary.pdf",
																			text: "Minutes"
																	},
																	{
																			url:"https://deainfo.nci.nih.gov/advisory/pcp/archive/pcp0109/27jan09stmt.pdf",
																			text: "Statement"
																	}
															]
													}
											]}
									/>
							</div>
							<div className="view-footer">
									<div className="row">
											<div className="small-12 column"><a className="view-more" href="http://deainfo.nci.nih.gov/advisory/pcp/archive/index.htm">View More</a><a></a></div>
									</div>
							</div>
				</div>
			</div>
	);
  }
}


export default ReportList;
