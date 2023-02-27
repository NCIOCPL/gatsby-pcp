import React from 'react';
import { Helmet } from 'react-helmet';

const Head = ({ title}) => {
		return (
				<>
						<Helmet
								defaultTitle="Home | President's Cancer Panel"
								title={title}
								titleTemplate="%s | President's Cancer Panel"
						/>
				</>
		)
}

export default Head;
