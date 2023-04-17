import React from "react";
import "../scss/components/_intro-text.scss";

class IntroText extends React.Component {
		render() {
				return (
						<div className={"intro-text"}>
								<div dangerouslySetInnerHTML={{ __html: this.props.text }} />
						</div>
				);
		}
}

export default IntroText;
