import React from "react";

class SiteTitle extends React.Component {
  render() {
    return (
      <section className="row">
        <div className="column">
          <h1 id="site-name">
            <span>President's Cancer Panel</span>
          </h1>
          <div
            title="Advisors to the President on the National Cancer Program"
            className="site-slogan"
          >
            Advisors to the President on the National Cancer Program
          </div>
        </div>
      </section>
    );
  }
}

export default SiteTitle;
