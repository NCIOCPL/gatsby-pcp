import React from "react";
import { Link } from "gatsby";
import Image from '../components/Image';
import "../scss/components/_featured-homepage-box.scss";

class SingleHomepageBox extends React.Component {
		render() {
				return (
								<div className={"featured-card"}>
										<Link to={this.props.url}>
												<Image
														src={this.props.source}
														alt={this.props.alt}
												/>
												<div className={"card-title"}>
														{this.props.title}
												</div>
												<div className={"card-description"}>
														{this.props.description}
												</div>
										</Link>
								</div>
				);
		}
}

export default SingleHomepageBox;