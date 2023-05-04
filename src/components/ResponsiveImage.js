import React from "react";
import Image from '../components/Image';
import "../scss/components/_responsive-image.scss";

class ResponsiveImage extends React.Component {
		render() {
				return (
						<>
								<div className={"responsive-image-desktop"}>
												<Image
														src={this.props.sourcedesktop}
														alt={this.props.alt}
												/>
								</div>
								<div className={"responsive-image-mobile"}>
										<Image
												src={this.props.sourcemobile}
												alt={this.props.alt}
										/>
								</div>
						</>
				);
		}
}

export default ResponsiveImage;
