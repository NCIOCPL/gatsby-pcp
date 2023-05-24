import React from 'react';
import Image from '../components/Image';
import '../scss/components/_single-staff-member.scss';
import PropTypes from 'prop-types';

class SingleStaffMember extends React.Component {
	render() {
		return (
			<div className={'single-member'}>
				<div className={'member-image'}>
					<Image src={this.props.source} alt={this.props.name} />
				</div>
			</div>
		);
	}
}

export default SingleStaffMember;

SingleStaffMember.propTypes = {
	source: PropTypes.string.isRequired,
	name: PropTypes.string.isRequired,
};
