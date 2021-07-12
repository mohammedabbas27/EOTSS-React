import React from 'react';
import { Footer } from '@massds/mayflower-react';
import FooterData from '../data/Footer.data';
import SocialLinksLiveData from '../data/SocialLinksLive.json';

class MainFooter extends React.Component {
  constructor(props) {
    super(props);
    const footerLogo = {
      domain: 'https://www.mass.gov/',
      src:
        'https://unpkg.com/@massds/mayflower-assets/static/images/logo/stateseal.png',
      title: 'Mass.gov homepage'
    };
    this.footerProps = {
      footerLinks: FooterData.footerLinks,
      socialLinks: SocialLinksLiveData.socialLinks
    };
    this.footerLogo = footerLogo;
  }

  render() {
    return<Footer footerLogo={this.footerLogo} {...this.footerProps} />;
  }
}
export default MainFooter;
