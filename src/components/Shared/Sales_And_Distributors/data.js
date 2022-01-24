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
               
        </div>
    )
}

export default data
