import * as React from 'react';
import Layout from '../components/Layout';
import MainText from '../components/MainText';
import PropTypes from 'prop-types';
import { BreadCrumbs } from '../components/Breadcrumbs';
import { AutoLeftNavigation } from '../components/AutoLeftNavigation';
import HeroImage from '../components/HeroImage';
import '../scss/components/_media-advisory.scss';

export default function MediaAdvisoryTemplate({ frontmatter, htmlAst, path }) {
	return (
		<Layout>
			<BreadCrumbs frontmatter={frontmatter} path={path}></BreadCrumbs>
			<div className={'full-report-container media-advisory'}>
				<div className={'left-nav-container'}>
					<AutoLeftNavigation path={path}></AutoLeftNavigation>
				</div>
				<div className={'report-container top-left-nav-container'}>
					<div className={'media-advisory-header'}>Media Advisory</div>
					<div className={'media-advisory-title-container'}>
						<div className={'media-advisory-title-image'}>
							<HeroImage sourcedesktop={frontmatter.bannerImage} sourcetablet={frontmatter.bannerImage} alt={''} classname={frontmatter.bannerClass}></HeroImage>
						</div>
						<div className={'media-advisory-title'}>
							<h2 className={'post-title'}>{frontmatter.title}</h2>
						</div>
					</div>
					<div className={'date-and-contact'}>
						<div className={'advisory-date'}>
							<strong>Posted: </strong>
							{frontmatter.advisoryDate}
						</div>
						<div className={'advisory-contact'}>
							<strong>Contact: </strong>
							<span dangerouslySetInnerHTML={{ __html: frontmatter.contact }}></span>
						</div>
					</div>
					<div className={'post-body'}>
						<MainText html={htmlAst}></MainText>
					</div>
				</div>
			</div>
		</Layout>
	);
}

MediaAdvisoryTemplate.propTypes = {
	frontmatter: PropTypes.object.isRequired,
	htmlAst: PropTypes.object,
	path: PropTypes.object,
};
