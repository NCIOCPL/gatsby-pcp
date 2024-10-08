import React from 'react';
import Image from '../components/Image';
import '../scss/components/_pictures.scss';
import PropTypes from 'prop-types';

class PictureWithQuotes extends React.Component {
	render() {
		let parsedQuoteList = JSON.parse(this.props.quotes);
		this.quoteList = parsedQuoteList.map((quote, index) => {
			return (
				<li key={index} className={'quote-list'}>
					<em>&quot;{quote.text}&quot;</em>
					<br />
					<br />-{quote.source}
				</li>
			);
		});

		return (
			<div className={'picture-with-quotes-container'}>
				<div className={'picture-with-quotes-image'}>
					<Image src={this.props.image_src} alt={this.props.image_alt} loading={'eager'} />
					<div className={'picture-with-quotes-caption'}>{this.props.image_caption}</div>
				</div>
				<div className={'picture-with-quotes-text'}>
					<ul>{this.quoteList}</ul>
				</div>
			</div>
		);
	}
}

export default PictureWithQuotes;

PictureWithQuotes.propTypes = {
	quotes: PropTypes.string.isRequired,
	image_src: PropTypes.string.isRequired,
	image_alt: PropTypes.string.isRequired,
	image_caption: PropTypes.string,
};
