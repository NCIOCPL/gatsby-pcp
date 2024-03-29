import React from 'react';
import { Script } from 'gatsby';
import Header from './Header';
import { Footer } from './Footer';
import '../scss/styles.scss';
import PropTypes from 'prop-types';

export default function Layout({ children }) {
	return (
		<div role={'document'} className={'pcp-document-container'} id={'outer-container'}>
			<Header />
			<div className={'pcp-grid-section'} id={'page-wrap'}>
				<div className={'desktop-constrained'}>
					<div className={'grid-row'}>
						<div className={'grid-col-12'}>
							<div className={'pcp-sections'}>
								<div className="post-body">{children}</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<Footer />
			<Script type="text/javascript">
				{(function () {
					// Make gatsby build happy when window doesn't exist
					if (typeof window === 'undefined') {
						global.window = {};
					}

					if (window._satellite) {
						_satellite.pageBottom(); // eslint-disable-line no-undef
					}
				})()}
			</Script>
		</div>
	);
}

Layout.propTypes = {
	children: PropTypes.node,
};
