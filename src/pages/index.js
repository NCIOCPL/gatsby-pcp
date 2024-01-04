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
					<SingleHomepageBox url="/about/blogs/post-technology-opportunities-for-patient-navigation/" source="tech-meeting-blog-image-card.png" alt="" title="Meeting 2 Recap: Post Technology Opportunities for Patient Navigation" description="On November 2 and 3, 2023, the President’s Cancer Panel held the second of three public meetings with key experts to discuss all current and potential uses of technology to support patient navigation. Read our latest blog post to find out more about common themes and priority areas that emerged from this meeting."></SingleHomepageBox>
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
