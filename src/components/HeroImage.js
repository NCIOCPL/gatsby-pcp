import React from 'react';
import Image from '../components/Image';
import '../scss/components/_hero-image.scss';
import PropTypes from 'prop-types';

class HeroImage extends React.Component {
	render() {
		return (
			<div className={'hero-image-container'}>
				<div className={'hero-image-desktop'}>
					<Image src={this.props.sourcedesktop} alt={this.props.alt} loading={'eager'} />
				</div>
				<div className={'hero-image-tablet'}>
					<Image src={this.props.sourcetablet} alt={this.props.alt} loading={'eager'} />
				</div>
			</div>
		);
	}
}

HeroImage.propTypes = {
	sourcedesktop: PropTypes.string.isRequired,
	sourcetablet: PropTypes.string.isRequired,
	alt: PropTypes.string.isRequired,
};

export default HeroImage;
