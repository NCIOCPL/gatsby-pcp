import React from 'react';
import Link from '../components/GatsbyLink';
import Image from '../components/Image';
import '../scss/components/_featured-homepage-box.scss';
import PropTypes from 'prop-types';

class SingleHomepageBox extends React.Component {
	render() {
		return (
			<div className={'featured-card'}>
				<Link to={this.props.url}>
					<Image src={this.props.source} alt={this.props.alt} />
					<div className={'card-title'}>{this.props.title}</div>
					<div className={'card-description'}>{this.props.description}</div>
				</Link>
			</div>
		);
	}
}

export default SingleHomepageBox;

SingleHomepageBox.propTypes = {
	url: PropTypes.string.isRequired,
	source: PropTypes.string.isRequired,
	alt: PropTypes.string.isRequired,
	title: PropTypes.string.isRequired,
	description: PropTypes.string.isRequired,
};
