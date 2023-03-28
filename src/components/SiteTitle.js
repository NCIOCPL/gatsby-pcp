import React from "react";
import "../scss/components/_site-title.scss";

class SiteTitle extends React.Component {
  render() {
    return (
      <section className={"site-title-container"}>
          <h1 id={"site-name"} className={"site-name"}>
            President's Cancer Panel
          </h1>
          <div title={"Advisors to the President on the National Cancer Program"}
            className={"site-slogan"}>
            Advisors to the President on the National Cancer Program
          </div>
      </section>
    );
  }
}

export default SiteTitle;
