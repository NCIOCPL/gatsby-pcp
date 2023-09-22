import * as React from 'react';
import Layout from '../components/Layout';
import MainText from '../components/MainText';
import PropTypes from 'prop-types';
import { BreadCrumbs } from '../components/Breadcrumbs';

export default function SinglePageTemplate({ frontmatter, htmlAst, path }) {
	return (
		<Layout>
			<BreadCrumbs frontmatter={frontmatter} path={path}></BreadCrumbs>
			<h2 className={'post-title'}>{frontmatter.title}</h2>
			<div className="post-body">
				<MainText html={htmlAst}></MainText>
			</div>
		</Layout>
	);
}

SinglePageTemplate.propTypes = {
	frontmatter: PropTypes.object.isRequired,
	htmlAst: PropTypes.object,
	path: PropTypes.object,
};
