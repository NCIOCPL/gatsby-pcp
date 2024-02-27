import React from 'react';
import Image from '../components/Image';
import '../scss/components/_pictures.scss';
import PropTypes from 'prop-types';
import Link from '../components/GatsbyLink';

class ImageWithCaption extends React.Component {
	render() {
		let displayClass = 'image-with-caption';
		if (this.props.className) {
			displayClass += ' ' + this.props.className;
		}
		let displayWidth = '100%';
		if (this.props.imagewidth) {
			displayWidth = this.props.imagewidth;
		}
		if (this.props.image_first_caption_link && this.props.image_first_caption_link.length > 0) {
			let first_link_text = this.props.image_first_caption_link_text;
			if (this.props.image_second_caption_link && this.props.image_second_caption_link.length > 0) {
				let second_link_text = ' | ' + this.props.image_second_caption_link_text;
				return (
					<div className={displayClass} style={{ width: displayWidth }}>
						<Image src={this.props.image_src} alt={this.props.image_alt} loading={'eager'} />
						<div className={'picture-with-quotes-caption'}>
							<span className={'caption-link'}>
								<Link to={this.props.image_first_caption_link}>{first_link_text}</Link>
							</span>
							<span className={'caption-link'}>
								<Link to={this.props.image_second_caption_link}>{second_link_text}</Link>
							</span>
							<div dangerouslySetInnerHTML={{ __html: this.props.image_caption }} />
						</div>
					</div>
				);
			} else {
				return (
					<div className={displayClass} style={{ width: displayWidth }}>
						<Image src={this.props.image_src} alt={this.props.image_alt} loading={'eager'} />
						<div className={'picture-with-quotes-caption'}>
							<span className={'caption-link'}>
								<Link to={this.props.image_first_caption_link}>{first_link_text}</Link>
							</span>
							<div dangerouslySetInnerHTML={{ __html: this.props.image_caption }} />
						</div>
					</div>
				);
			}
		} else
			return (
				<div className={displayClass} style={{ width: displayWidth }}>
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
	image_first_caption_link: PropTypes.string,
	image_first_caption_link_text: PropTypes.string,
	image_second_caption_link: PropTypes.string,
	image_second_caption_link_text: PropTypes.string,
	className: PropTypes.string,
	imagewidth: PropTypes.string,
};

export default ImageWithCaption;
