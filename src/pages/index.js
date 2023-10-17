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
					<SingleHomepageBox url="/reports/2023/inequities/" source="pcp-meeting.png" alt="" title="Reducing Cancer Care Inequities: Leveraging Technology To Enhance Patient Navigation" description="Join us virtually for the President's Cancer Panel’s current meeting series. Hear stakeholders across the cancer community discuss the gaps and opportunities to integrate technologies to support cancer patient navigation."></SingleHomepageBox>
					<SingleHomepageBox url="/about/blogs/addressing-social-determinants-of-health/" source="pcp-10-17-23-card.png" alt="" title="Panel Recommendations in Action: Addressing Social Determinants of Health in Cancer Care" description="A key to addressing health disparities - as highlighted in the 2010 Panel Report - is addressing social determinants of health in patient care. Learn how organizations are taking steps to better address patients’ social needs and risks in cancer care."></SingleHomepageBox>
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
