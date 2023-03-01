import React from "react";
import EnvelopeIcon from "../svg/envelope.inline.svg";
import LinkedInIcon from "../svg/linkedin.inline.svg";
import TwitterIcon from "../svg/twitter.inline.svg";

class Footer extends React.Component {
  render() {
    return (
      <footer className="l-footer panel" role="contentinfo">
        <div className="footer">
          <div className="section">
              <div className="row">
                <div className="small-12 column">
                  <h3>President's Cancer Panel</h3>
                  <div>
											<a href="mailto:PresCancerPanel@mail.nih.gov">
                      	PresCancerPanel@mail.nih.gov
											</a>
                    <br />
                  </div>
                  <div className="connect-icons">
                    <a href="https://www.hhs.gov/vulnerability-disclosure-policy/index.html">
                      HHS Vulnerability Disclosure
                    </a>
                    <br />
                  </div>
                  <div className="connect-icons">
                    <a href="https://twitter.com/prescancerpanel">
                      <TwitterIcon
													className="connect-icon"
													height={48}
													width={48}
													alt="President's Cancer Panel Twitter"
											/>
                    </a>
                    <a href="https://www.linkedin.com/company/president's-cancer-panel/">
                      <LinkedInIcon
													className="connect-icon"
													height={48}
													width={48}
                          alt="President's Cancer Panel Linkedin"
                        />
                    </a>
                    <a href="mailto:PresCancerPanel@mail.nih.gov">
                      <EnvelopeIcon
													className="connect-icon"
													height={48}
													width={48}
													alt="President's Cancer Panel email"
											/>
                    </a>
                  </div>
                </div>
              </div>
              <div className="footer-endcap" />
            </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
