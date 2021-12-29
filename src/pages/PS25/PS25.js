/* eslint-disable react/style-prop-object */
/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import './PS25.css'
// import product from "../../assets/img/Products/product.png"
import product from "../../assets/300MSeries.mp4"

function PS25() {

    return (
        <div className='row' id='ps'>
            <div className='col-lg-6 col-md-6 col-sm-12' id='productImg'>
                {/* <img className='img' src={product} alt='PS25'/> */}
                <video id='myVideo' controls autoplay=""  loop>
                    <source src={product} type="video/mp4" />
                </video>
            </div>
            <div className='col-lg-6 col-md-6 col-sm-12' id='productInfo'>
                <h1 id='title'><b>PS25 Foot Type</b></h1>
                <h3>Industrial Planetary Gearmotors & Units</h3>
                <p className='productInfo'>Bonfiglioli's 300M Series is an outstanding solution for all heavy-duty applications where compactness is not an option. 
                   Thanks to its modular design, the 300M Series can be customized to match an extremely wide range of applications. 
                   Bonfiglioli's expertise in planetary technology ensures high-quality product design and manufacturing procedures. 
                   The 300 Series operates without unwanted downtime even in the harshest environments. This planetary gearbox achieves 
                   top-class flexibility thanks to several outputs, as well as input configurations available for all 20 sizes. 
                   The 300M Series can be completed with a wide range of electric motors entirely manufactured by Bonfiglioli. 
                   Asynchronous motors (BN-BE-BX/M-ME-MX) can be coupled with 300M Series gearboxes, providing our customers 
                   a complete solution.</p>

                {/* <a href='https://webeeyo.com/'><button id='buy_btn'>Buy Now</button></a>
                <a href='https://webeeyo.com/'><button id='contact_btn'>Contact now</button></a> */}
                

            </div>

            {/* <div className='col-lg-6 col-sm-12 col-md-6' id='benefits_box'>
                <h1 ><b>Key benefits</b></h1>
                    <p id='benefits' >- High torque density</p>
                    <p id='benefits'>- High torque density</p>
                    <p id='benefits'>- High torque density</p>
                    <p id='benefits'>- High torque density</p>
            </div>
            <div className='col-lg-6 col-sm-12 col-md-6 box2' id='options_box'>
                <h1 ><b>Main options</b></h1>
                    <p id='benefits' >- High torque density</p>
                    <p id='benefits'>- High torque density</p>
                    <p id='benefits'>- High torque density</p>
                    <p id='benefits'>- High torque density</p>
            </div> */}

        </div>
    )
}

export default PS25
