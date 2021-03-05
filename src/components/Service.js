import React from "react";
import { GenTeaser, Button, DecorativeLink } from "@massds/mayflower-react";
class Service extends React.Component {
  constructor() {
    super();
    this.orderNow = this.orderNow.bind(this);
    this.navigateService = this.navigateService.bind(this);
  }
  orderNow() {
    // this.props.history.push("/");
  }
  navigateService(event) {
    event.preventDefault();
    this.props.history.push(`${this.props.headerLink}`);
  }
  render() {
    return (
      <GenTeaser align="top">
        <GenTeaser.Image
          img={{
            alt: "",
            shape: "circular",
            src: this.props.imageSrc
          }}
        />
        <GenTeaser.Details>
          <GenTeaser.Title
            title={{
              href: this.props.headerLink,
              info: this.props.headerInfo,
              showFileIcon: false,
              text: this.props.headerText
            }}
            onClick={this.navigateService}
          />
          {this.props.isDownload ? (
            <DecorativeLink
              href={this.props.downloadLink}
              info={this.props.downLoadInfo}
              showFileIcon
              text={this.props.downloadDescription}
            />
          ) : (
            ""
          )}

          <div style={{ height: "20px" }} />
          <GenTeaser.Description description={this.props.serviceDescription} />
          <Button
            classes={[""]}
            disabled={false}
            href={this.props.orderLink}
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
