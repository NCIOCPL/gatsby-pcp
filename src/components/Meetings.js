import React from 'react';
import Link from '../components/GatsbyLink';
import '../scss/components/_meetings.scss';
import PropTypes from 'prop-types';

class Meetings extends React.Component {
	render() {
		this.meetingList = '';
		this.meetingTitle = '';
		if (this.props.meetings) {
			if (this.props.sectiontitle && this.props.sectiontitle.length > 0) {
				this.meetingTitle = this.props.sectiontitle;
			} else {
				if (this.props.meetings.length > 1) {
					this.meetingTitle = 'Associated Meetings';
				} else {
					this.meetingTitle = 'Associated Meeting';
				}
			}
			let meetingJSON = JSON.stringify(this.props.meetings);
			let parsedMeetings = JSON.parse(JSON.parse(meetingJSON));

			if (parsedMeetings.list && Array.isArray(parsedMeetings.list)) {
				let dateList = '';
				let agendalist = '';
				this.meetingList = parsedMeetings.list.map((meeting, index) => {
					if (meeting.datelist && meeting.datelist.length > 0) {
						dateList = meeting.datelist.map((date, index) => {
							return <div key={index}>{date}</div>;
						});
					} else {
						dateList = '';
					}
					if (meeting.agendalist && meeting.agendalist.length > 0) {
						agendalist = meeting.agendalist.map((link, index) => {
							return (
								<li key={index}>
									<Link to={link.url}>{link.text}</Link>
								</li>
							);
						});
					} else {
						agendalist = '';
					}
					if (meeting.url && meeting.url.length > 0) {
						this.displayUrl = meeting.url;
						this.meetingLinkClass = 'date-location-wrapper';
					} else {
						this.displayUrl = '';
						this.meetingLinkClass = 'date-location-wrapper no-link-display';
					}
					let locationText = '';
					let statusText = '';
					if (meeting.location) {
						locationText = ', ' + meeting.location;
					}
					if (meeting.status) {
						statusText = ', ' + meeting.status;
					}
					return (
						<li className={'series-meeting'} key={index}>
							<Link to={this.displayUrl} className={this.meetingLinkClass}>
								<div className={'date'}>
									{dateList}
									{locationText}
									{statusText}
								</div>
							</Link>
							<ul className={'agenda-list'}>{agendalist}</ul>
						</li>
					);
				});
			}
		}
		if (this.meetingTitle) {
			return (
				<div className={'meeting-block'}>
					<h4 className={'link-list-header'}>{this.meetingTitle}</h4>
					<div className={'meeting-container'}>
						<ul className={'meeting-list'}>{this.meetingList}</ul>
					</div>
				</div>
			);
		}
		return (
			<div className={'meeting-block'}>
				<div className={'meeting-container'}>
					<ul className={'meeting-list'}>{this.meetingList}</ul>
				</div>
			</div>
		);
	}
}

export default Meetings;

Meetings.propTypes = {
	meetings: PropTypes.string.isRequired,
	sectiontitle: PropTypes.string,
};
