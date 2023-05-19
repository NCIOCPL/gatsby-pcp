import React from "react";
import Image from '../components/Image';

class ImageWithClass extends React.Component {
		render() {
				return (
						<span className={this.props.className} style={{width:this.props.imagewidth }}>
										<Image
												src={this.props.src}
												alt={this.props.alt}
										/>
						</span>
				);
		}
}

export default ImageWithClass;
