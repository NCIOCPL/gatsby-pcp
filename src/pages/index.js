import * as React from 'react';
import Layout from '../components/Layout';
import HeroImage from '../components/HeroImage';
import IntroText from '../components/IntroText';
import SingleHomepageBox from '../components/SingleHomepageBox';
import { SEO } from '../components/Seo';

const IndexPage = () => {
	return (
		<Layout>
			<div>
				<HeroImage sourcedesktop="white-house.jpg" sourcetablet="white-house.jpg" alt="White House."></HeroImage>
				<IntroText text="Charged to monitor the development and execution of the activities of the National Cancer Program and report to the President on progress, efficacy, and opportunities for improvement."></IntroText>
				<div className="featured-homepage-box">
					<SingleHomepageBox url="/ncp" source="ncp-401x357.png" alt="" title="National Cancer Plan" description="The President’s Cancer Panel is charged with monitoring progress toward the goals of the National Cancer Plan. Learn more about the Panel’s role and discover how you can get involved."></SingleHomepageBox>
					<SingleHomepageBox url="/report/cancerscreening/" source="PCP2021reportCover-square.jpeg" alt="" title="Recent Report from the President’s Cancer Panel" description="Our report, Closing Gaps in Cancer Screening: Connecting People, Communities, and Systems to Improve Equity and Access, identifies four goals to improve the uptake of cancer screening to ensure the benefits reach all populations."></SingleHomepageBox>
					<SingleHomepageBox url="/about/blogs/national-cancer-program/" source="cgov-16669_ncp-infographic-update_a_v3-fc.png" alt="" title="What is the National Cancer Program?" description="One of the most important tasks of the President’s Cancer Panel is to monitor the National Cancer Program. Learn more about this critical effort that brings together the cancer community to make progress in reducing the burden of cancer."></SingleHomepageBox>
				</div>
			</div>
		</Layout>
	);
};

export default IndexPage;

export function Head() {
	return (
		<>
			<html lang="en" />
			<SEO />
		</>
	);
}
