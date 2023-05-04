import React from "react";
import Image from '../components/Image';
import "../scss/components/_pictures.scss"

class PictureWithQuotes extends React.Component {
  render() {
			let parsedQuoteList = JSON.parse(this.props.quotes);
			this.quoteList=parsedQuoteList.map((quote,index)=>{
					return <li key={index} className={"quote-list"}>
							<em>"{quote.text}"</em><br /><br />
							-{quote.source}
					</li>
			});

    return (
				<div className={"picture-with-quotes-container"}>
						<div className={"picture-with-quotes-image"}>
								<Image
										src={this.props.image_src}
										alt={this.props.image_alt}
								/>
								<div className={"picture-with-quotes-caption"}>
										{this.props.image_caption}
								</div>
						</div>
						<div className={"picture-with-quotes-text"}>
								<ul>
										{this.quoteList}
								</ul>
						</div>
				</div>
    );
  }
}

export default PictureWithQuotes;
