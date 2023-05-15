import * as React from "react"
import Layout from "../components/Layout"
import HeroImage from "../components/HeroImage"
import IntroText from "../components/IntroText"
import SingleHomepageBox from "../components/SingleHomepageBox"
import { SEO } from "../components/Seo"

const IndexPage = () => {
  return (
    <Layout>
      <div>
        <p>
          <HeroImage
            sourcedesktop="pcp-temp-header_v2.png"
            sourcetablet="pcp-temp-header_v2.png"
            alt="Female medical professional reviewing results with female patient.">
          </HeroImage>
        </p>
        <IntroText
          text='<strong>Example Intro text</strong>: the Presidents Cancer Panel: Monitoring the activities of the National Cancer Program'>
        </IntroText>
        <div className="featured-homepage-box">
          <SingleHomepageBox
            url="/reports"
            source="Summary-Page-FC-401x357.jpg"
            alt="Improving Resilience and Equity in Cancer Screening"
            title="Improving Resilience and Equity in Cancer Screening: 2020-2021 Meeting Series"
            description="The Panel’s focus for the 2020–2021 series of meetings is on opportunities to improve the resilience and equity of cancer screening.">
          </SingleHomepageBox>
          <SingleHomepageBox
            url="/report/cancerscreening/"
            source="PCP2021reportCover-square.jpeg"
            alt="Recent Report from the President’s Cancer Panel"
            title="Recent Report from the President’s Cancer Panel"
            description="Our report, Closing Gaps in Cancer Screening: Connecting People, Communities, and Systems to Improve Equity and Access, identifies four goals to improve the uptake of cancer screening to ensure the benefits reach all populations.">
          </SingleHomepageBox>
          <SingleHomepageBox
            url="/nca50/"
            source="pcp_50_1.png"
            alt="President's Cancer Panel Commemorates the National Cancer Act 50th Anniversary"
            title="President's Cancer Panel Commemorates the National Cancer Act 50th Anniversary"
            description="Since its inception in 1971, the President’s Cancer Panel has called attention to the causes of and possible solutions to disparities in the nation’s healthcare system. This series of blogs explores the Panel’s focus on this important topic.">
          </SingleHomepageBox>
        </div>
      </div>
    </Layout>
  )
}

export default IndexPage

export function Head() {
  return (
    <>
      <html lang="en" />
      <SEO />
    </>
  )
}