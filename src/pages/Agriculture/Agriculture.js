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
                <div className='col-lg-6 col-sm-12 col-md-6'>
                    <img className='img' src={product} alt='' />
                </div>
                <div className='col-lg-6 col-sm-12 col-md-6 title1'>
                    <h1 className='Title'><b>Title</b></h1>
                    <p className='product_info'>We believe passionately in the power of ideas to change attitudes, lives and ultimately, the world.<br/><br/>
                       So we’re building here a clearinghouse that offers free knowledge and inspiration from the world’s most 
                       inspired thinkers, and also a community of curious souls to engage with ideas and each other.</p>
                </div>
            </div>

         </Container>

            <div className='row box'>
                <div className='col-lg-6 col-sm-12 col-md-6'>
                    <h1 className='Title2'><b>What is TED?</b></h1>
                    <p className='product_info'>TED is a nonprofit organization devoted to Ideas Worth Spreading. Started as a four-day conference in California 30 years 
                       ago, TED has grown to support its mission with multiple initiatives. Today, the two annual TED Conferences invite the world's 
                       leading thinkers and doers to speak for 18 minutes or less. Many of these talks are then made available, free, at TED.com 
                       in more than 100 languages.</p>
                </div>
                <div className='col-lg-6 col-sm-12 col-md-6 box2'>
                    <p className='product_info'>This has led to a global community focused on change through the power of ideas, bringing together the best from 
                    three worlds – Technology, Entertainment and Design and has recently taken up a broader scope ranging from science and
                    business to global issues.</p>
                </div>
            </div>

         <Container>
         
            <div className='row'>
                <div className='col-lg-6 col-sm-12 col-md-6 box1'>
                    <h1 className='Title'><b>Title</b></h1>
                    <p className='product_info'>We believe passionately in the power of ideas to change attitudes, lives and ultimately, the world.<br/><br/>
                       So we’re building here a clearinghouse that offers free knowledge and inspiration from the world’s most 
                       inspired thinkers, and also a community of curious souls to engage with ideas and each other.</p>
                </div>
                <div className='col-lg-6 col-sm-12 col-md-6'>
                    <img className='img' src={product} alt='' />
                </div>
            </div>
            
         </Container>
        </div>
    )
}

export default Agriculture
