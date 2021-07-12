import React from 'react';
import { GenTeaser, Button, DecorativeLink } from '@massds/mayflower-react';

class Service extends React.Component {
  constructor() {
    super();
    this.navigateService = this.navigateService.bind(this);
  }


  navigateService(event) {
    event.preventDefault();
    const { headerLink, history } = this.props;
    history.push(`${headerLink}`);
  }

  render() {
    const {
      imageSrc, headerLink, headerInfo, headerText, isDownload, downloadLink, downLoadInfo, downloadDescription, serviceDescription, orderLink
    } = this.props;
    return(
      <GenTeaser align="top">
        <GenTeaser.Image
          img={{
            alt: '',
            shape: 'circular',
            src: imageSrc
          }}
        />
        <GenTeaser.Details>
          <GenTeaser.Title
            title={{
              href: headerLink,
              info: headerInfo,
              showFileIcon: false,
              text: headerText
            }}
            onClick={this.navigateService}
          />
          {isDownload ? (
            <DecorativeLink
              href={downloadLink}
              info={downLoadInfo}
              showFileIcon
              text={downloadDescription}
            />
          ) : (
            ''
          )}

          <div style={{ height: '20px' }} />
          <GenTeaser.Description description={serviceDescription} />
          <Button
            classes={['']}
            disabled={false}
            href={orderLink}
            info="Order Now"
            onClick=""
            size=""
            text="Order Now"
            theme=""
            type=""
            usage=""
          />
        </GenTeaser.Details>
      </GenTeaser>
    );
  }
}

export default Service;
