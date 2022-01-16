import React from 'react'
import Sales from "./Sales_And_Distributors"





function data(props) {

    return (
        <div className="d-flex flex-column flex-lg-row flex-wrap justify-content-center justify-content-md-start ">
            
            {
              props.items.map((item) => {
                return (
                  <Sales
                    subsidiaries={item.subsidiaries}
                    companyName={item.companyName}
                    address={item.address}
                    functions={item.functions}
                    businessArea={item.businessArea}
                    number={item.number}
                    gmail={item.gmail}
                  />
                );
              })
            }

              {/* <Sales 
                subsidiaries={props.items[0].subsidiaries}
                companyName={props.items[0].companyName}
                address={props.items[0].address}
                functions={props.items[0].functions}
                businessArea={props.items[0].businessArea} 
                number={props.items[0].number}
                gmail={props.items[0].gmail} 
               /> */}

              {/* <Sales 
                subsidiaries={props.items[1].subsidiaries}
                companyName={props.items[1].companyName}
                address={props.items[1].address}
                functions={props.items[1].functions}
                businessArea={props.items[1].businessArea} 
                number={props.items[1].number}
                gmail={props.items[1].gmail} 
               /> */}
               
        </div>
    )
}

export default data
