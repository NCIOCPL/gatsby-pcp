import React from "react";
import Image from '../components/Image';

class ImageWithCaption extends React.Component {
		render() {

				return (
						<div className="image-with-caption">
								<Image
										src={this.props.image_src}
										alt={this.props.image_alt}
								/>
								<div className={"picture-with-quotes-caption"}>
										<div dangerouslySetInnerHTML={{ __html: this.props.image_caption }} />
								</div>
						</div>
				);
		}
}

export default ImageWithCaption;
