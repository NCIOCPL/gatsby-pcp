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
					<SingleHomepageBox url="/ncp" source="ncp-401x357.png" alt="" title="Feature Card 1" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum rhoncus."></SingleHomepageBox>
					<SingleHomepageBox url="/reports/2023/technology-opportunities/" source="pcp-meeting.png" alt="" title="Feature Card 2: With a Longer Title" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed convallis magna blandit, congue nibh ut, elementum sapien. Lorem ipsum dolor."></SingleHomepageBox>
					<SingleHomepageBox url="/about/blogs/nca-50-1/" source="pcp-10-17-23-card.png" alt="" title="Feature Card 3" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vel risus turpis. Donec ex diam, dapibus a eleifend id, dapibus nec lorem. Duis vehicula sapien libero, cursus varius nisl posuere."></SingleHomepageBox>
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
