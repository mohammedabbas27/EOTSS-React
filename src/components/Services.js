import React from 'react';
import { Pagination } from '@massds/mayflower-react';
import Service from './Service';

const Services = ({ history }) => (
  <>
    <div style={{ height: '20px' }} />
    <Service
      headerLink="VpnService"
      headerInfo="Commonwealth VPN Service"
      headerText="Commonwealth VPN Service"
      downloadLink="https://www.mass.gov/doc/eotss-commonwealth-vpn-service-description/download"
      downloadInfo="Commonwealth VPN Service Description "
      downloadDescription="Commonwealth VPN Service Description "
      serviceDescription="The Commonwealth's VPN service is available to Commonwealth of Massachusetts Executive Branch and certain non-Executive Branch agencies and their authorized business partners. Click the links below for more information."
      orderLink="https://massgov.service-now.com/sp/?id=login"
      isDownload
      history={history}
    />
    <Service
      headerLink="https://www.mass.gov/info-details/eotss-standard-service-offerings#massvoice-service-"
      headerInfo="MassVoice Service"
      headerText="MassVoice Service"
      downloadLink="https://www.mass.gov/doc/eotss-massvoice-service-description/download"
      downloadInfo="MassVoice Service Description"
      downloadDescription="MassVoice Service Description"
      serviceDescription="MassVoice is a secure private-cloud Unified Communications service tailored exclusively to Massachusetts state and local government clients.  Click the links below for more information."
      orderLink="https://massgov.service-now.com/sp/?id=login"
      isDownload
      history={history}
    />
    <Service
      headerLink="https://www.mass.gov/info-details/eotss-standard-service-offerings#end-user-support-services-"
      headerInfo="End User Support Services"
      headerText="End User Support Services"
      downloadLink=""
      downloadInfo=""
      downloadDescription=""
      serviceDescription="EOTSS End User Support services span across several departments. The End User Support Services team is comprised of nine (9) support departments: the End User Service Desk, Advanced Technical Services, Service Desk Operations, Deskside Support, Executive Support, Messaging, Platform Support, Accounts Management, and Enterprise Print.  Click the links below for more information."
      orderLink="https://massgov.service-now.com/sp/?id=login"
      isDownload={false}
      history={history}
    />
    <Service
      headerLink="https://www.mass.gov/info-details/eotss-standard-service-offerings#servicenow-"
      headerInfo="ServiceNow"
      headerText="ServiceNow"
      downloadLink=""
      downloadInfo=""
      downloadDescription=""
      serviceDescription="With ServiceNow, reporting issues or requesting IT items or services has never been easier!  EOTSS supported Commonwealth end users are able to take advantage of the ServiceNow platform to open incidents, request hardware, applications or services, and search the built-in Knowledge Base.  Click the links below for more information."
      orderLink="https://massgov.service-now.com/sp/?id=login"
      isDownload={false}
      history={history}
    />
    <Pagination
      next={{
        disabled: false,
        hide: false,
        text: 'Next'
      }}
      pages={[
        {
          active: true,
          text: '1'
        },
        {
          active: false,
          text: '2'
        },
        {
          active: false,
          text: '3'
        }
      ]}
      prev={{
        disabled: false,
        hide: false,
        text: 'Previous'
      }}
    />
  </>
);

export default Services;
