import React from "react";
import { Link } from "gatsby";
import Image from '../components/Image';

class SingleHomepageBox extends React.Component {
		render() {
				return (
						<div className="medium-4 columns">
								<div
										className="featured-card equalheight"
										style={{
												height: "604px"
										}}
								>
										<Link to={this.props.url}>
												<Image
														src={this.props.source}
														alt={this.props.alt}
												/>
												<div className="card-title">
														{this.props.title}
												</div>
												<div className="card-description">
														{this.props.description}
												</div>
										</Link>
								</div>{" "}
						</div>
				);
		}
}

export default SingleHomepageBox;
