/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-undef */
import React, { Component } from 'react';
import '../index.scss';
import '../eotss-styles.css';
import {
  ColoredHeading,
  Paragraph,
  UnorderedList,
  Heading,
  Button
} from '@massds/mayflower-react';
import MainHeader from './MainHeader';
import MainFooter from './MainFooter';

class VpnService extends Component {
  componentDidMount() {
    const sidebar = document.querySelector('.sidebar');
    const pageContent = document.querySelector('.page-content');
    window.addEventListener('scroll', () => {
      myFunction();
    });
    const header = document.querySelector('.ma__header__hamburger');
    const sticky = header.offsetTop + 40;
    const footer = document.getElementById('footer');
    /* function myFunction() {
      if (window.pageYOffset >= sticky && window.innerWidth > 840) {
        header.classList.add('sticky');
        if (sidebar) {
          sidebar.classList.add('sidebar-margin');
        }
      } else {
        header.classList.remove('sticky');
        if (sidebar) {
          sidebar.classList.remove('sidebar-margin');
        }
      }
    } */
    function myFunction() {
      if (
        window.pageYOffset + window.innerHeight > footer.offsetTop
        && window.innerWidth >= 911
      ) {
        sidebar.classList.add('absolute');
      } else {
        sidebar.classList.remove('absolute');
      }
      if (window.pageYOffset >= sticky && window.innerWidth > 840) {
        header.classList.add('sticky');
        if (sidebar) {
          sidebar.classList.add('sidebar-top');
          sidebar.classList.add('sidebar-margin');
        }
      } else {
        header.classList.remove('sticky');
        if (sidebar) {
          sidebar.classList.remove('sidebar-top');
          sidebar.classList.remove('sidebar-margin');
        }
      }
    }

    function reportWindowSize() {
      if (sidebar) {
        if (window.innerWidth > 910) {
          const width = pageContent.offsetWidth;
          sidebar.style.marginLeft = `${width}px`;
        } else {
          sidebar.style.marginLeft = '0px';
        }
      }
    }
    reportWindowSize();
    window.addEventListener('resize', reportWindowSize);
  }

  render() {
    return(
      <>
        <div className="App">
          <MainHeader active="Services" />
          <div style={{ height: '20px' }} />
          <main id="main-content" tabIndex="-1">
            <div className="pre-content" />
            <div className="main-content main-content--two">
              <aside className="sidebar ">
                <Heading class="color-green" level={3} text="Rate" />
                <p style={{ fontSize: '28px' }}>
                  <strong>N/A</strong>
                </p>
                <Heading class="color-green" level={3} text="Order Services" />
                <Button
                  classes={['']}
                  disabled={false}
                  href="https://massgov.service-now.com/nav_to.do?uri=/com.glideapp.servicecatalog_cat_item_view.do%3Fv%3D1%26sysparm_id%3Da53f0a90db6cd090b14fab92ca96196f%26sysparm_link_parent%3Dc2c4fc4bdbe81410b14fab92ca9619e6%26sysparm_catalog%3De0d08b13c3330100c8b837659bba8fb4%26sysparm_catalog_view%3Dcatalog_default%26sysparm_view%3Dtext_search"
                  info="Request via the ServiceNow Portal"
                  onClick=""
                  size=""
                  text="Request VPN Access"
                  theme=""
                  type=""
                  usage=""
                />
                <Button
                  classes={['']}
                  disabled={false}
                  href="https://massgov.service-now.com/nav_to.do?uri=/com.glideapp.servicecatalog_cat_item_view.do%3Fv%3D1%26sysparm_id%3Da53f0a90db6cd090b14fab92ca96196f%26sysparm_link_parent%3Dc2c4fc4bdbe81410b14fab92ca9619e6%26sysparm_catalog%3De0d08b13c3330100c8b837659bba8fb4%26sysparm_catalog_view%3Dcatalog_default%26sysparm_view%3Dtext_search"
                  info="Request via the ServiceNow Portal"
                  onClick=""
                  size=""
                  text="Download VPN Client"
                  theme=""
                  type=""
                  usage=""
                />
                <Heading
                  class="color-green"
                  level={3}
                  text="Additional Information"
                />
                <Button
                  classes={['']}
                  disabled={false}
                  href="https://massgov.service-now.com/nav_to.do?uri=/com.glideapp.servicecatalog_cat_item_view.do%3Fv%3D1%26sysparm_id%3Da53f0a90db6cd090b14fab92ca96196f%26sysparm_link_parent%3Dc2c4fc4bdbe81410b14fab92ca9619e6%26sysparm_catalog%3De0d08b13c3330100c8b837659bba8fb4%26sysparm_catalog_view%3Dcatalog_default%26sysparm_view%3Dtext_search"
                  info="Request via the ServiceNow Portal"
                  onClick=""
                  size=""
                  text="Use the Commonwealth VPN Client"
                  theme=""
                  type=""
                  usage=""
                />
                <Button
                  classes={['']}
                  disabled={false}
                  href="https://massgov.service-now.com/nav_to.do?uri=/com.glideapp.servicecatalog_cat_item_view.do%3Fv%3D1%26sysparm_id%3Da53f0a90db6cd090b14fab92ca96196f%26sysparm_link_parent%3Dc2c4fc4bdbe81410b14fab92ca9619e6%26sysparm_catalog%3De0d08b13c3330100c8b837659bba8fb4%26sysparm_catalog_view%3Dcatalog_default%26sysparm_view%3Dtext_search"
                  info="Request via the ServiceNow Portal"
                  onClick=""
                  size=""
                  text="ServiceNow Instructions to Add/Remove a VPN User"
                  theme=""
                  type=""
                  usage=""
                />
                <Button
                  classes={['']}
                  disabled={false}
                  href="https://massgov.service-now.com/nav_to.do?uri=/com.glideapp.servicecatalog_cat_item_view.do%3Fv%3D1%26sysparm_id%3Da53f0a90db6cd090b14fab92ca96196f%26sysparm_link_parent%3Dc2c4fc4bdbe81410b14fab92ca9619e6%26sysparm_catalog%3De0d08b13c3330100c8b837659bba8fb4%26sysparm_catalog_view%3Dcatalog_default%26sysparm_view%3Dtext_search"
                  info="Request via the ServiceNow Portal"
                  onClick=""
                  size=""
                  text="VPN FAQs"
                  theme=""
                  type=""
                  usage=""
                />
              </aside>

              <div className="page-content">
                <Heading level={2} text="Commonwealth VPN Service" />
                <Paragraph text="The Commonwealth’s VPN service is available to the Commonwealth of Massachusetts Executive Branch and certain non-Executive Branch agencies and their authorized business partners." />
                <Paragraph text="A Virtual Private Network (VPN) enables remote users to communicate securely and confidentially over a public network (i.e. internet) to protected resources within the Commonwealth of Massachusetts and its Wide-Area-Network (MAGNET). Remote Access VPN establishes an encrypted tunnel for all data to be securely transmitted so that remote users can communicate confidentially over a public network—i.e., the Internet." />
                <Paragraph text="EOTSS provides 2 methods for Commonwealth employees, contractors, vendors and business partners to connect to the Commonwealth network: Standard Remote Access and CJIS Approved Remote Access." />
                <ColoredHeading
                  color="green"
                  level={2}
                  text="Standard Remote Access vs. CJIS Approved Remote Access"
                />
                <Heading level={4} text="Standard Remote Access" />
                <Paragraph text="The VPN Client is desktop software that secures traffic between a remote computer and Commonwealth IT resources. All data is encrypted, and Multi-Factor Authentication is used to securely authenticate and identify users." />
                <Heading level={4} text="CJIS Approved Remote Access" />
                <Paragraph text="For Criminal Justice, Law Enforcement and Public Safety Agencies that are required to meet FBI CJIS Security standards, EOTSS offers a Windows-based and Apple iOS-based client for connectivity to access CJIS data and systems. All data is encrypted, and a PKI (public key infrastructure) certificate is used to ensure unique identity of the user." />
                <ColoredHeading color="green" level={2} text="VPN Features" />
                <Heading level={3} text="Included Features" />
                <Heading level={5} text="Secure Connection" />
                <Paragraph text="Remote Access VPN establishes an encrypted tunnel for all data to be securely transmitted so that remote users can communicate confidentially over a public network—i.e., the Internet." />
                <Heading level={5} text="Data Encryption" />
                <Paragraph text="User credentials and all data traffic are encrypted in compliance with IPSEC standards, leveraging SSL (Secure Sockets Layer) and ESP (Encapsulating Security Payload) with AES 256-bit encryption for maximum security." />
                <Heading level={5} text="User Authentication" />
                <Paragraph text="Users are allowed access to restricted state IT resources only if they can verify identification at login. Unauthorized users are not permitted access." />
                <Heading level={5} text="Authentication Directory" />
                <Paragraph text="Each user is authenticated to the Commonwealth Active Directory and/or Idaptive MFA." />
                <Heading level={5} text="Limitation" />
                <Paragraph text="When using VPN remote access, any local network devices available to the computer prior to the VPN connection (e.g., networked home printers and other computer resources) may not be available when the VPN client is connected. If this occurs, to use or access local network home printers and other local computer resources, the VPN session must be disconnected." />
                <Heading level={5} text="Features Not Included" />
                <Paragraph text="Remote Access Connection All users must have an internet connection—e.g., commercial or residential DSL, cable, fios, public kiosk service, public wifi internet, or other internet service." />
                <ColoredHeading
                  color="green"
                  level={2}
                  text="System Requirements"
                />
                <UnorderedList
                  sublist={[
                    {
                      text:
                        'Must be a currently supported version of Microsoft Windows or Apple MacOs.'
                    },
                    {
                      text:
                        'EOTSS-supported Web browser such as MS Internet Explorer11, Google Chrome and Firefox.'
                    }
                  ]}
                />
                <ColoredHeading
                  color="green"
                  level={2}
                  text="EOTSS and Agency Responsibilities"
                />
                <Heading level={4} text="EOTSS Responsibilities" />

                <UnorderedList
                  sublist={[
                    {
                      text:
                        'EOTSS will deliver the product described in this product description.'
                    },
                    {
                      text: 'EOTSS will provide instructions for product use.'
                    },
                    {
                      text:
                        'EOTSS will operate and maintain the Pulse Secure VPN Appliances and all supporting infrastructure.'
                    },
                    {
                      text:
                        'To ensure the security of Commonwealth information technology resources, EOTSS may block telecommuters’ access to the State Network when troubleshooting security intrusions.'
                    },
                    {
                      text:
                        'EOTSS will enforce the Teleworking Policy, Commonwealth Enterprise Security Policy and Standards, and Acceptable Use policies.'
                    },
                    {
                      text:
                        'EOTSS will provide instructions for installing and configuring the VPN Client software.'
                    },
                    {
                      text:
                        'In cases where EOTSS provides End User Services for the Agency, EOTSS End User Services will be responsible for deployment and support of the client.'
                    }
                  ]}
                />
                <Paragraph text="<strong>Please note:</strong> EOTSS End User Services <strong><em>will Not troubleshoot home wifi/internet connectivity issues.</em></strong> If you are unable to connect to your home wifi/internet, please contact your Internet Service Provider (ISP)." />
                <Heading level={4} text="Agency Responsibilities" />
                <UnorderedList
                  sublist={[
                    {
                      text:
                        'Follow established process to submit online orders that have been properly approved forrequesting the addition, modification, or deletion of VPN groups, VPN users or access type.'
                    },
                    {
                      text:
                        'The user will obtain a remote access internet connection—e.g., commercial or residential DSL, cable, fios or other internet service.'
                    },
                    {
                      text:
                        'Non-employee users must be sponsored by a Commonwealth of Massachusetts agency and must be able to install and support their own devices.'
                    }
                  ]}
                />
                <Heading level={5} text="VPN Client:" />
                <UnorderedList
                  sublist={[
                    {
                      text:
                        'The agency IT support organization will be responsible for setting up the user’s computer withthe software required to access the agency LAN and other business software required by the VPN user.'
                    },
                    {
                      text:
                        'The agency IT support organization will assist the user with installing and configuring the VPN Client software as requested.'
                    },
                    {
                      text:
                        'The agency IT organization will be responsible for assisting user’s with connecting to local agency resources, including Remote Desktop Connections.'
                    },
                    {
                      text:
                        'VPN users will comply with the Commonwealth’s Acceptable Use Policy, the Commonwealth Enterprise Security Policy and Standards and the Commonwealth’s Telework Policy.'
                    }
                  ]}
                />
                <ColoredHeading
                  color="green"
                  level={2}
                  text="How to Request Access to the Commonwealth VPN"
                />
                <Paragraph text="To request the Commonwealth VPN service, select the <em>Request VPN access button on the right side of this page.</em>" />
                <Paragraph text="<strong>Commonwealth employees and their business partners are prohibited from submitting requests for VPN access. Requests for VPN access submitted by anyone other than an authorized Security Requester will be rejected.</strong>" />
                <Paragraph text="Authorized Security Requesters are designated for every agency using the Commonwealth VPN service, and only those authorized individuals may request VPN access on behalf of their agency users.  If you do not know who your agency's authorized Security Requester is, please reach out to your agency help desk." />
                <Paragraph text="Authorized Security Requesters are able to request VPN access for a user through the ServiceNow portal using one of the below ServiceNow Catalog items:" />
                <UnorderedList
                  sublist={[
                    {
                      text: 'Add/Remove User(s)'
                    },
                    {
                      text: 'Create a New VPN Group'
                    },
                    {
                      text: 'Remove an Existing VPN Group'
                    },
                    {
                      text: 'Modify an Existing VPN Group'
                    }
                  ]}
                />
                <Heading
                  level={4}
                  text="How to modify your agency’s authorized Security Requester(s):"
                />
                <Paragraph text="Only currently authorized Security Requesters are able to modify your agency's list of Security Requesters through the ServiceNow portal.  Therefore, <em>agencies are strongly encouraged to designate <strong>at least two (2)</strong> Security Requesters for their agency.</em>" />
                <p>
                  Authorized Security Requesters may request to add or remove a
                  Security Requester from their agency's list of authorized
                  individuals through the ServiceNow portal using the "Modify
                  Agency Security Administrator List" Catalog item.
                  <a
                    style={{ paddingLeft: '3px' }}
                    href="https://massgov.service-now.com/nav_to.do?uri=/com.glideapp.servicecatalog_cat_item_view.do%3Fv%3D1%26sysparm_id%3D94aae550dba8d090b14fab92ca96192b%26sysparm_link_parent%3Dc2c4fc4bdbe81410b14fab92ca9619e6%26sysparm_catalog%3De0d08b13c3330100c8b837659bba8fb4%26sysparm_catalog_view%3Dcatalog_default%26sysparm_view%3Dtext_search"
                  >
                    Modify Agency Security Requester list via ServiceNow
                  </a>
                </p>
                <ColoredHeading
                  color="green"
                  level={2}
                  text="Commonwealth VPN Eligibility and Access"
                />
                <Paragraph text="Not sure if you need VPN to access Commonwealth resources? The links below will help you decide." />
                <UnorderedList
                  sublist={[
                    {
                      text:
                        "<a href='https://www.mass.gov/info-details/commonwealth-tools-and-vpn-access'>Commonwealth Tools and VPN access</a>"
                    },
                    {
                      text:
                        "<a href='https://www.mass.gov/info-details/commonwealth-vpn-eligibility-and-requirements'>Commonwealth VPN Eligibility and Requirements</a>"
                    }
                  ]}
                />
                <ColoredHeading
                  color="green"
                  level={2}
                  text="Commonwealth VPN Support"
                />
                <Paragraph text="Below you will find links to Commonwealth VPN support documentation and FAQs." />
                <UnorderedList
                  sublist={[
                    {
                      text:
                        "<a href='https://www.mass.gov/info-details/commonwealth-vpn-faqs'>Commonwealth VPN FAQs</a>"
                    },
                    {
                      text:
                        "<a href='https://www.mass.gov/how-to/commonwealth-vpn-client'>Download and install the Commonwealth VPN Client</a>"
                    },
                    {
                      text:
                        "<a href='https://www.mass.gov/info-details/how-to-use-the-commonwealth-vpn'>Use the Commonwealth VPN client</a>"
                    }
                  ]}
                />
                <ColoredHeading
                  color="green"
                  level={2}
                  text="Contact Information"
                />
                <div className="ma__contact-us__content-wrap">
                  <div className="ma__contact-group">
                    <h4 className="ma__contact-group__name">
                      <svg aria-hidden="true" focusable="false">
                        <use xlinkHref="#6a7225ce50f2c8b8edb04b1931257a1b" />
                      </svg>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        style={{ display: 'none' }}
                      >
                        <symbol
                          xmlns="http://www.w3.org/2000/svg"
                          aria-hidden="true"
                          version="1.1"
                          viewBox="0 0 33 37"
                          id="6a7225ce50f2c8b8edb04b1931257a1b"
                        >
                          <path
                            d="M412.841 2040.51C401.798 2045.57 384.657 2012.19 395.451 2006.56L398.60900000000004 2005L403.84400000000005 2015.23L400.72300000000007 2016.77C397.44200000000006 2018.54 404.27600000000007 2031.91 407.63200000000006 2030.28C407.7680000000001 2030.22 410.7150000000001 2028.77 410.72600000000006 2028.76L416.0040000000001 2038.96C415.9920000000001 2038.97 413.02200000000005 2040.43 412.84100000000007 2040.51ZM413.24 2011.28C415.564 2011.98 417.62600000000003 2013.56 418.87 2015.86C420.115 2018.1699999999998 420.309 2020.76 419.616 2023.09L416.926 2022.29C417.413 2020.6499999999999 417.275 2018.83 416.39799999999997 2017.2C415.52399999999994 2015.5800000000002 414.073 2014.47 412.436 2013.98ZM411.838 2016C412.956 2016.33 413.95000000000005 2017.1 414.548 2018.21C415.148 2019.32 415.242 2020.56 414.908 2021.69L410.535 2020.38ZM413.841 2009.26C416.681 2010.11 419.2 2012.04 420.722 2014.86C422.24199999999996 2017.6799999999998 422.479 2020.85 421.63399999999996 2023.6899999999998L424.39199999999994 2024.5199999999998C425.44899999999996 2020.9599999999998 425.15399999999994 2017.0099999999998 423.2509999999999 2013.4899999999998C421.3539999999999 2009.9699999999998 418.20899999999995 2007.5599999999997 414.66399999999993 2006.4999999999998Z "
                            transform="matrix(1,0,0,1,-392,-2005)"
                          />
                        </symbol>
                      </svg>
                      <span>Phone</span>
                    </h4>

                    <div className="ma__contact-group__item">
                      <span
                        className="ma__contact-group__label"
                        id="linkContext-2007150926"
                      >
                        EOTSS End User Service Desk
                      </span>

                      <a
                        href="tel:+18444357629"
                        className="ma__content-link ma__content-link--phone"
                      >
                        (844) 435-7629
                      </a>
                    </div>

                    <p className="ma__contact-group__details">
                      {' '}
                      24x7x365 support for Commonwealth end users
                    </p>

                    <div className="ma__contact-group__item">
                      <span
                        className="ma__contact-group__label"
                        id="linkContext-1525785055"
                      >
                        CommonHelp IT Service Desk
                      </span>

                      <a
                        href="tel:+18668882808"
                        className="ma__content-link ma__content-link--phone"
                      >
                        (866) 888-2808
                      </a>
                    </div>

                    <p className="ma__contact-group__details">
                      {' '}
                      for agency/Secretariat IT help desks and support personnel
                    </p>
                  </div>

                  <div className="ma__contact-group">
                    <h4 className="ma__contact-group__name">
                      <svg aria-hidden="true" focusable="false">
                        <use xlinkHref="#0469cb38a1685b81f0700ab855546adf" />
                      </svg>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        style={{ display: 'none' }}
                      >
                        <symbol
                          xmlns="http://www.w3.org/2000/svg"
                          aria-hidden="true"
                          version="1.1"
                          viewBox="0 0 36 30"
                          id="0469cb38a1685b81f0700ab855546adf"
                        >
                          <path
                            d="M424 1674L394 1674L394 1693.5L424 1693.5ZM421 1690.5L397 1690.5L397 1677L421 1677ZM424 1695L394 1695L391 1704L427 1704ZM405.658 1702.5L406.357 1701L411.64300000000003 1701L412.34200000000004 1702.5Z "
                            transform="matrix(1,0,0,1,-391,-1674)"
                          />
                        </symbol>
                      </svg>
                      <span>Online</span>
                    </h4>

                    <div className="ma__contact-group__item">
                      <span
                        className="ma__contact-group__label"
                        id="linkContext-243446124"
                      >
                        EOTSS End User Service Desk
                      </span>

                      <span className="ma__decorative-link">
                        <a
                          href="https://massgov.service-now.com/sp/?id=login"
                          className="js-clickable-link"
                        >
                          Log in to ServiceNow&nbsp;
                          <svg aria-hidden="true" focusable="false">
                            <use xlinkHref="#2941c74825ac6b2aab1eeb97bfe8461a" />
                          </svg>
                        </a>
                      </span>
                    </div>

                    <div className="ma__contact-group__item">
                      <a
                        href="mailto:MassGov@service-now.com"
                        className="ma__content-link"
                      >
                        MassGov@service-now.com
                      </a>
                    </div>

                    <div className="ma__contact-group__item">
                      <span
                        className="ma__contact-group__label"
                        id="linkContext-2105857212"
                      >
                        CommonHelp IT Service Desk
                      </span>

                      <a
                        href="mailto:commonhelp.desk@mass.gov"
                        className="ma__content-link"
                      >
                        commonhelp.desk@mass.gov
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="post-content" />
          </main>
          <MainFooter />
        </div>
      </>
    );
  }
}

export default VpnService;
