import React from "react";

class QuestionAnswer extends React.Component {
		render() {
				return (
						<div className="qna">
								<div className="question">
										{ this.props.question }
								</div>
								<div className="answer">
										{ this.props.answer }
								</div>
						</div>
				);
		}
}

export default QuestionAnswer;

