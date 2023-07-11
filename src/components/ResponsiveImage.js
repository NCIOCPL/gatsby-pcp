import React from 'react';
import Image from '../components/Image';
import '../scss/components/_responsive-image.scss';
import PropTypes from 'prop-types';

class ResponsiveImage extends React.Component {
	render() {
		return (
			<>
				<div className={'responsive-image-desktop'}>
					<Image src={this.props.sourcedesktop} alt={this.props.alt} loading={'eager'} />
				</div>
				<div className={'responsive-image-mobile'}>
					<Image src={this.props.sourcemobile} alt={this.props.alt} loading={'eager'} />
				</div>
			</>
		);
	}
}

export default ResponsiveImage;

ResponsiveImage.propTypes = {
	alt: PropTypes.string.isRequired,
	sourcedesktop: PropTypes.string.isRequired,
	sourcemobile: PropTypes.string.isRequired,
};
