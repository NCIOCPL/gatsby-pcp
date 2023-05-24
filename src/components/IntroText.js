import React from 'react';
import '../scss/components/_intro-text.scss';
import PropTypes from 'prop-types';

class IntroText extends React.Component {
	render() {
		return (
			<div className={'intro-text'}>
				<div dangerouslySetInnerHTML={{ __html: this.props.text }} />
			</div>
		);
	}
}

IntroText.propTypes = {
	text: PropTypes.string.isRequired,
};

export default IntroText;
