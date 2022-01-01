import React from "react";
import "./Info.css";
import { Tab, Tabs } from "react-bootstrap";
import ContactRequest from "../../components/Shared/Contact_request/Contact_request";
import OurLocation from "../../components/Shared/Our_location/Our_location";

function Info(props) {
  return (
    <div className="info">
      <div id="page_info2">
        <div className="bg2">
          <div className="title">Find Your Contact: Sales & Distributors</div>
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
            hii
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

      {/* <div className='tabs'>

                <button className="tablinks" onclick="openTab(event, 'Sales_And_Distributors')">
                    <img className='img1' src="https://img.icons8.com/external-tal-revivo-solid-tal-revivo/48/000000/external-sales-and-marketing-with-shopping-cart-logotype-presentation-solid-tal-revivo.png" alt=''/>
                    <h5>Sales & Distributors</h5>
                </button>

                <button className="tablinks" onclick="openTab(event, 'Contact_request')">
                    <img className='img1' src="https://img.icons8.com/external-sbts2018-blue-sbts2018/50/000000/external-comment-social-media-basic-1-sbts2018-blue-sbts2018.png" alt=''/>
                    <h5>Contact request</h5>
                </button>

                <button className="tablinks" onclick="openTab(event, 'Our_location')">
                    <img className='img1' src="https://img.icons8.com/office/50/000000/worldwide-location.png" alt=''/>
                    <h5>Our location</h5>
                </button>

            </div>

            <div id="Sales_And_Distributors" className="tabcontent">
            <h3>London</h3>
            <p>London is the capital city of England.</p>
            </div>

            <div id="Paris" className="tabcontent">
            <h3>Paris</h3>
            <p>Paris is the capital of France.</p> 
            </div>

            <div id="Tokyo" className="tabcontent">
            <h3>Tokyo</h3>
            <p>Tokyo is the capital of Japan.</p>
            </div> */}
    </div>
  );
}

export default Info;
