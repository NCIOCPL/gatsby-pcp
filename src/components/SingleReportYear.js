import React from 'react';
//import { Link } from "gatsby";
import Link from '../components/GatsbyLink';
import '../scss/components/_report-list.scss';
import PropTypes from 'prop-types';

function linkList(links) {
	let linkList = '';
	if (links) {
		let linkJSON = JSON.stringify(links);
		let parsedLinks = JSON.parse(JSON.parse(linkJSON));
		if (parsedLinks.list && Array.isArray(parsedLinks.list)) {
			linkList = parsedLinks.list.map((link, index) => {
				if (link.url) {
					return (
						<li key={index}>
							<Link to={link.url}>{link.text}</Link>
						</li>
					);
				} else {
					return <li key={index}>{link.text}</li>;
				}
			});
		}
	}
	return linkList;
}

class SingleReportYear extends React.Component {
	render() {
		this.descriptionLinkList = linkList(this.props.descriptionlinks);
		this.linkList = linkList(this.props.links);
		this.descriptionlinkListClass = 'hidden';
		this.linkListClass = 'hidden';
		let documentationHeader = '';
		if (this.descriptionLinkList) {
			this.descriptionlinkListClass = 'report-description-linklist';
		}
		if (this.linkList) {
			this.linkListClass = 'report-linklist';
			documentationHeader = 'Associated Documentation';
		}

		return (
			<div className={'single-report-links'}>
				{this.props.year !== '' && <h3 className={'series-year'}>{this.props.year}</h3>}
				<ul className={this.descriptionlinkListClass}>{this.descriptionLinkList}</ul>
				<div className={'link-list-header'} dangerouslySetInnerHTML={{ __html: documentationHeader }} />
				<ul className={this.linkListClass}>{this.linkList}</ul>
			</div>
		);
	}
}

export default SingleReportYear;

SingleReportYear.propTypes = {
	descriptionlinks: PropTypes.string,
	links: PropTypes.string,
	year: PropTypes.string.isRequired,
};
