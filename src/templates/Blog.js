import * as React from 'react';
import Layout from '../components/Layout';
import MainText from '../components/MainText';
import PropTypes from 'prop-types';
import { BreadCrumbs } from '../components/Breadcrumbs';
import { AutoLeftNavigation } from '../components/AutoLeftNavigation';

export default function BlogTemplate({ frontmatter, htmlAst, path }) {
	return (
		<Layout>
			<BreadCrumbs frontmatter={frontmatter} path={path}></BreadCrumbs>
			<div className="full-report-container">
				<div className="left-nav-container">
					<AutoLeftNavigation path={path}></AutoLeftNavigation>
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
