import React from 'react';
import Image from '../components/Image';
import PropTypes from 'prop-types';

class ImageWithClass extends React.Component {
	render() {
		return (
			<span className={this.props.className} style={{ width: this.props.imagewidth }}>
				<Image src={this.props.src} alt={this.props.alt} />
			</span>
		);
	}
}

ImageWithClass.propTypes = {
	src: PropTypes.string.isRequired,
	alt: PropTypes.string.isRequired,
	className: PropTypes.string,
	imagewidth: PropTypes.string,
};

export default ImageWithClass;
