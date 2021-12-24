import React from 'react'
import { Container } from "react-bootstrap";
import product from "../../assets/img/Products/product.png";
import './Agriculture.css'

const Agriculture = () => {
    return (
        <div className='agriculture'>
            <div id='page_info'>
                <div className='bg'>
                    <div className='title'>Agriculture</div>
                </div>
            </div>
         <Container>

            <div className='row'>
                <div className='col-lg-6'>
                    hii1
                </div>
                <div className='col-lg-6'>
                    hii2
                </div>
            </div>

         </Container>

            <div className='row box'>
                <div className='col-lg-6'>
                    hii1
                </div>
                <div className='col-lg-6'>
                    hii2
                </div>
            </div>

         <Container>
         
            <div className='row'>
                <div className='col-lg-6'>
                    hii1
                </div>
                <div className='col-lg-6'>
                    hii2
                </div>
            </div>
            
         </Container>
        </div>
    )
}

export default Agriculture
