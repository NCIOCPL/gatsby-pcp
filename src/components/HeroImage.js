import React from "react";
import Image from '../components/Image';
import "../scss/components/_hero-image.scss";

class HeroImage extends React.Component {
		render() {
				return (
						<>
								<div className={"hero-image-desktop"}>
												<Image
														src={this.props.sourcedesktop}
														alt={this.props.alt}
												/>
								</div>
								<div className={"hero-image-tablet"}>
										<Image
												src={this.props.sourcetablet}
												alt={this.props.alt}
										/>
								</div>
						</>
				);
		}
}

export default HeroImage;
