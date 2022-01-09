import React from "react";
import "./Info.css";
import { Tab, Tabs } from "react-bootstrap";
import ContactRequest from "../../components/Shared/Contact_request/Contact_request";
import OurLocation from "../../components/Shared/Our_location/Our_location";
import Data from "../../components/Shared/Sales_And_Distributors/data";

function Info() {


  const personInformation = [
    {
      id: 'e1',
      subsidiaries: 'SUBSIDIARIES',
      companyName: 'Bonfiglioli Transmissions Private Limited',
      address: 'AC 7 - AC 11 Sidco Industrial Estate Thirumudivakkam Chennai - 600 044',
      functions: 'Aftersales, Assembly, Manufacturing, Sales',
      businessArea: 'Mobile, Wind',
      number: '+91 844 844 8649',
      gmail: 'asadaw@gmail.com'
    },
    {
      id: 'e2',
      subsidiaries: 'SUBSIDIARIES',
      companyName: 'Bonfiglioli Transmissions Private Limited',
      address: 'AC 7 - AC 11 Sidco Industrial Estate Thirumudivakkam Chennai - 600 044',
      functions: 'Aftersales, Assembly, Manufacturing, Sales',
      businessArea: 'Mobile, Wind',
      number: '+91 844 844 8649',
      gmail: 'asadaw@gmail.com'
    }
  ];



  return (
    <div className="info">
      <div id="page_info2">
        <div className="bg2">
          <div className="title3">Find Your Contact: Sales & Distributors</div>
        </div>
      </div>

      <div className="tabs">
        <Tabs
          defaultActiveKey="Sales_Distributors"
          transition={false}
          id="noanim-tab-example"
          className="mb-3"
        >
          <Tab
            className="tab"
            eventKey="Sales_Distributors"
            title="Sales & Distributors"
          >
            <Data items={personInformation} />
          </Tab>
          <Tab
            className="tab"
            eventKey="Contact_request"
            title="Contact request"
          >
            <ContactRequest />
          </Tab>
          <Tab className="tab3" eventKey="Our_location" title="Our location">
            <OurLocation />
          </Tab>
        </Tabs>
      </div>
    </div>
  );
}

export default Info;
