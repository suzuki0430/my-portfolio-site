import React from 'react';
import TwitterTimeline from 'react-twitter-embedded-timeline';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faGithub } from '@fortawesome/free-brands-svg-icons';

const ContactPage = () => (
  <div>
    <div className="heading">
      <h1>Follow Me!!</h1>
    </div>
    <div className="wrapper">
      <div className="box_contact">
        <FontAwesomeIcon icon={faTwitter} />
        <h2 className="sns twitter">Twitter</h2>
        <div className="sns_link">
          <a href="https://twitter.com/suzuki0430">https://twitter.com/suzuki0430</a>
        </div>
        <div className="twitter_timeline">
          <TwitterTimeline
            widgetId="695868534455275520"
            chrome="noheader transparent"
            user="suzuki0430"
            height={500}
            width={500}
            loading="Loading..."
          />
        </div>
      </div>
      <div className="box_contact">
        <FontAwesomeIcon icon={faGithub} />
        <h2 className="sns github">GitHub</h2>
        <div className="sns_link">
          <a href="https://github.com/suzuki0430">https://github.com/suzuki0430</a>
        </div>
      </div>
    </div>
  </div>
);

export default ContactPage;