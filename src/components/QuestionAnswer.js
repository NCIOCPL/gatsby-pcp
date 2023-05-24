import React from 'react';
import '../scss/components/_question-answer.scss';
import PropTypes from 'prop-types';

class QuestionAnswer extends React.Component {
	render() {
		return (
			<div className={'qna'}>
				<div className={'question'}>{this.props.question}</div>
				<div className={'answer'} dangerouslySetInnerHTML={{ __html: this.props.answer }} />
			</div>
		);
	}
}

export default QuestionAnswer;

QuestionAnswer.propTypes = {
	question: PropTypes.array.isRequired,
	answer: PropTypes.string.isRequired,
};
