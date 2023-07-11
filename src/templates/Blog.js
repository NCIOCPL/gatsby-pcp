import * as React from 'react';
import Layout from '../components/Layout';
import { LeftTopNavigation } from '../components/LeftTopNavigation';
import MainText from '../components/MainText';
import PropTypes from 'prop-types';

export default function BlogTemplate({ frontmatter, htmlAst, path }) {
	return (
		<Layout>
			<div className="full-report-container">
				<div className="left-nav-container">
					<LeftTopNavigation root={path}></LeftTopNavigation>
				</div>
				<div className="report-container top-left-nav-container">
					<h2 className={'post-title'}>{frontmatter.title}</h2>
					<p className={'byline'}>{frontmatter.author}</p>
					<div className="post-body">
						<MainText html={htmlAst}></MainText>
					</div>
				</div>
			</div>
		</Layout>
	);
}

BlogTemplate.propTypes = {
	frontmatter: PropTypes.object.isRequired,
	htmlAst: PropTypes.object,
	path: PropTypes.object,
};
