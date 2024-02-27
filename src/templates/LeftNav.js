import * as React from 'react';
import Layout from '../components/Layout';
import MainText from '../components/MainText';
import PropTypes from 'prop-types';
import { BreadCrumbs } from '../components/Breadcrumbs';
import { AutoLeftNavigation } from '../components/AutoLeftNavigation';
import HeroImage from '../components/HeroImage';

export default function LeftNavTemplate({ frontmatter, htmlAst, path }) {
	return (
		<Layout>
			<BreadCrumbs frontmatter={frontmatter} path={path}></BreadCrumbs>
			<div className="full-report-container">
				<div className="left-nav-container">
					<AutoLeftNavigation path={path}></AutoLeftNavigation>
				</div>
				<div className="report-container top-left-nav-container">
					<HeroImage sourcedesktop={frontmatter.bannerImage} sourcetablet={frontmatter.bannerImage} alt={''} className={frontmatter.bannerClass}></HeroImage>
					<h2 className={'post-title'}>{frontmatter.title}</h2>
					<div className="post-body">
						<MainText html={htmlAst}></MainText>
					</div>
				</div>
			</div>
		</Layout>
	);
}

LeftNavTemplate.propTypes = {
	frontmatter: PropTypes.object.isRequired,
	htmlAst: PropTypes.object,
	path: PropTypes.object,
};
