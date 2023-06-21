import React from 'react';
import { Link } from 'gatsby';
import Image from '../components/Image';
import '../scss/components/_staff.scss';
import PropTypes from 'prop-types';

class SingleStaffListEntry extends React.Component {
	render() {
		if (this.props.url && this.props.url.length > 0) {
			return (
				<li className={'member'}>
					<div className={'member-image'}>
						<Link to={this.props.url}>
							<Image src={this.props.source} alt={this.props.alt} loading={'eager'} />
						</Link>
					</div>
					<div className={'member-information'}>
						<div className={'member-name'}>
							<Link to={this.props.url}>{this.props.alt}</Link>
						</div>
						<div className={'member-title'}>{this.props.title}</div>
						<div className={'member-number'}>{this.props.number}</div>
						<div className={'member-email'}>{this.props.email}</div>
					</div>
				</li>
			);
		} else {
			return (
				<li className={'member'}>
					<div className={'member-image'}>
						<Image src={this.props.source} alt={this.props.alt} loading={'eager'} />
					</div>
					<div className={'member-information'}>
						<div className={'member-name'}>{this.props.alt}</div>
						<div className={'member-title'}>{this.props.title}</div>
						<div className={'member-number'}>{this.props.number}</div>
						<div className={'member-email'}>{this.props.email}</div>
					</div>
				</li>
			);
		}
	}
}

export default SingleStaffListEntry;

SingleStaffListEntry.propTypes = {
	url: PropTypes.string,
	source: PropTypes.string.isRequired,
	alt: PropTypes.string.isRequired,
	title: PropTypes.string.isRequired,
	number: PropTypes.string,
	email: PropTypes.string,
};
