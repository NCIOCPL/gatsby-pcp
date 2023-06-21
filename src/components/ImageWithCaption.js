import React from 'react';
import Image from '../components/Image';
import '../scss/components/_pictures.scss';
import PropTypes from 'prop-types';

class ImageWithCaption extends React.Component {
	render() {
		return (
			<div className={'image-with-caption'}>
				<Image src={this.props.image_src} alt={this.props.image_alt} loading={'eager'} />
				<div className={'picture-with-quotes-caption'}>
					<div dangerouslySetInnerHTML={{ __html: this.props.image_caption }} />
				</div>
			</div>
		);
	}
}

ImageWithCaption.propTypes = {
	image_src: PropTypes.string.isRequired,
	image_alt: PropTypes.string.isRequired,
	image_caption: PropTypes.string.isRequired,
};

export default ImageWithCaption;
