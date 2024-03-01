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
					<SingleHomepageBox url="/about/blogs/policy-considerations-technology-patient-navigation/" source="policy-considerations-card.jpg" alt="" title="Meeting 3 Recap: Policy Considerations at the Intersection of Technology and Patient Navigation" description="On December 7, 2023, the President’s Cancer Panel held the third of three public meetings with key experts to discuss policy opportunities to advance the use of technology in patient navigation. Read our latest blog post to learn more about common themes and priority areas that emerged from this meeting."></SingleHomepageBox>
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
