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
					<SingleHomepageBox url="/ncp/reports/" source="Reports_Feature_Card_Thumbnail_401x358.jpg" alt="" title="New Report from the President’s Cancer Panel" description="This report features findings from the Panel's initial assessment of the National Cancer Plan and highlights recommendations in five priority areas to accelerate progress toward the Plan’s goals."></SingleHomepageBox>
					<SingleHomepageBox url="/about/blogs/paradigm-shift-dr-berger-neuro-oncology/" source="berger-card.jpg" alt="" title="A Paradigm Shift: Dr. Mitchel Berger on the Challenges and Rewards of Neuro-Oncology" description="The second post in the series on getting to know the President’s Cancer Panel. Learn more about the career journey of Panel member, Dr. Mitchel Berger, and his innovations in neuro-oncology."></SingleHomepageBox>
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
