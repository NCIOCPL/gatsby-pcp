import React from "react";
import { Link } from "gatsby";
import "../scss/components/_meetings.scss";

class Meetings extends React.Component {

		render() {
				this.meetingList = '';
				if (this.props.meetings){
						if (this.props.meetings.length>1){
								this.meetingTitle = "Meetings";
						} else {
								this.meetingTitle = "Meeting";
						}
						let meetingJSON = JSON.stringify(this.props.meetings);
						let parsedMeetings = JSON.parse(JSON.parse(meetingJSON));
						if (parsedMeetings.list && (Array.isArray(parsedMeetings.list))) {
								this.meetingList=parsedMeetings.list.map((meeting,index)=>{
										this.dateList=meeting.dateList.map((date,index)=>{
												return <div>{date}</div>
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
												this.displayUrl = meeting.url;
												this.meetingLinkClass = 'date-location-wrapper';
										} else {
												this.displayUrl = '';
												this.meetingLinkClass = 'date-location-wrapper no-link-display';
										}
										return <li className={"series-meeting"} key={index}>
												<a
														href={this.displayUrl}
														className={this.meetingLinkClass}>
														<div className={"date"}>
																{this.dateList}
														</div>
														<div className={"location"}>
																{meeting.location}
														</div>
														<div className={"status"}>
																{meeting.status}
														</div>
												</a>
												<ul className={"agenda-list"}>
														{this.agendalist}
												</ul>
										</li>
								});
						}
				}
				return (
						<div className={"meeting-block"}>
								<h4>{this.meetingTitle}</h4>
								<div className={"meeting-container"}>
										<ul className={"meeting-list"}>
												{this.meetingList}
										</ul>
								</div>
						</div>
				);
		}
}

export default Meetings;
