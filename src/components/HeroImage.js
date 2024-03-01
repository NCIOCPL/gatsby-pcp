import React from 'react';
import Image from '../components/Image';
import '../scss/components/_hero-image.scss';
import PropTypes from 'prop-types';

class HeroImage extends React.Component {
	render() {
		let desktopClassName = 'hero-image-desktop';
		let tabletClassName = 'hero-image-tablet';
		if (this.props.className && this.props.className !== '') {
			desktopClassName += ' ' + this.props.className;
			tabletClassName += ' ' + this.props.className;
		}
		if (this.props.sourcedesktop && this.props.sourcedesktop !== '') {
			return (
				<div className={'hero-image-container'}>
					<div className={desktopClassName}>
						<Image src={this.props.sourcedesktop} alt={this.props.alt} loading={'eager'} />
					</div>
					<div className={tabletClassName}>
						<Image src={this.props.sourcetablet} alt={this.props.alt} loading={'eager'} />
					</div>
				</div>
			);
		}
		return '';
	}
}

HeroImage.propTypes = {
	sourcedesktop: PropTypes.string.isRequired,
	sourcetablet: PropTypes.string.isRequired,
	alt: PropTypes.string.isRequired,
	className: PropTypes.string,
};

export default HeroImage;
