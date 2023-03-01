import React from "react";
import { Link } from "gatsby";

class Meetings extends React.Component {

		render() {
				if (this.props.meetings && (this.props.meetings.length>1)){
						this.meetingTitle = "Meetings";
				} else {
						this.meetingTitle = "Meeting";
				}
				this.meetingList=this.props.meetings.map((meeting,index)=>{
						this.dateList=meeting.dateList.map((date,index)=>{
								return <div><span>{date}</span></div>
						});
						if (meeting.agendalist && (meeting.agendalist.length>1)) {
								this.agendalist=meeting.agendalist.map((link,index)=>{
										return (
												<li>
														<Link to ={link.url}>{link.text}</Link>
												</li>
										);
								});
						}
						if (meeting.url && (meeting.url.length>0)){
								return <li className={"series-meeting"} key={index}>
										<div className="views-field views-field-field-sections">
												<div className="field-content"><a
														href={meeting.url}
														className="date-location-wrapper">
														<div className="field-date">
																{this.dateList}
														</div>
														<div className="field-location">{meeting.location}</div>
														<div className="field-status">{meeting.status}</div>
												</a>
												</div>
										</div>
										<div className="views-field views-field-field-series-links">
												<ul>{this.agendalist}</ul>
										</div>
								</li>
						} else {
								return <li className={"series-meeting"} key={index}>
										<div className="views-field views-field-field-sections">
												<div className="field-content">
														<div className="date-location-wrapper">
																<div className="field-date">
																		{this.dateList}
																</div>
																<div className="field-location">{meeting.location}</div>
																<div className="field-status">{meeting.status}</div>
														</div>
												</div>
										</div>
										<div className="views-field views-field-field-series-links">
												<ul>{this.agendalist}</ul>
										</div>
								</li>
						}

				});
				return (
				<div><h4>{this.meetingTitle}</h4>
						<div className="view view-pcp-series-meetings view-id-pcp_series_meetings view-display-id-series_meetings row display">
								<div className="view-content">
										<ul className="small-block-grid-2 medium-block-grid-4">
												{this.meetingList}
										</ul>
								</div>
						</div>
				</div>
				);
		}
}

export default Meetings;
