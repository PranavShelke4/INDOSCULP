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

            <div className='video col-lg-6 col-md-12 col-sm-12'>
                <iframe 
                    width="700" height="400" 
                    src="https://www.youtube.com/embed/nziA33FrhoI?autoplay=1&mute=1" 
                    title="YouTube video player" 
                    frameborder="0"
                    allowfullscreen>
                </iframe>
            </div>
            <div className='video_info col-lg-6 col-md-12 col-sm-12'>
                <h5>Agriculture is the practice of cultivating plants and livestock. Agriculture was the key development 
                in the rise of sedentary human civilization, whereby farming of domesticated species created food surpluses 
                that enabled people to live in cities. The history of agriculture began thousands of years ago. After gathering 
                wild grains beginning at least 105,000 years ago, nascent farmers began to plant them around 11,500 years ago. 
                Pigs, sheep, and cattle were domesticated over 10,000 years ago. Plants were independently cultivated in at least 
                11 regions of the world. Industrial agriculture based on large-scale monoculture in the twentieth century came to 
                dominate agricultural output, though about 2 billion people still depended on subsistence agriculture.</h5>
            </div>
            
            <img className="d-flex img-fluid" id="img" src={product} alt="" />

            <div className='product_info col-lg-6 col-md-12 col-sm-12'>
                <h5>Agriculture is the practice of cultivating plants and livestock. Agriculture was the key development 
                in the rise of sedentary human civilization, whereby farming of domesticated species created food surpluses 
                that enabled people to live in cities. The history of agriculture began thousands of years ago. After gathering 
                wild grains beginning at least 105,000 years ago, nascent farmers began to plant them around 11,500 years ago. 
                Pigs, sheep, and cattle were domesticated over 10,000 years ago. Plants were independently cultivated in at least 
                11 regions of the world. Industrial agriculture based on large-scale monoculture in the twentieth century came to 
                dominate agricultural output, though about 2 billion people still depended on subsistence agriculture.</h5>
            </div>
         </Container>
        </div>
    )
}

export default Agriculture
