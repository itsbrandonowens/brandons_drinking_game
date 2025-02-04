import React from 'react'
import '../styles/IndexPage.css'
import { useState, } from 'react';
import LastOrdersLogo from "./images/LastOrdersLogo.png"
import { Link } from 'react-router-dom';

import apple_download from "./images/apple_download.png"
import google_download from "./images/google_download.png"
import waves_image from './images/waves_image.png'
import index_cards_image from "./images/index_cards_image.png"
import ReactGA from 'react-ga4';

const IndexPage = () => {

    const handleGAClickAndroid = () => {
        ReactGA.event({
            category: 'Android - Last Orders',
            action: 'Clicked Link for LO-A'
        });
    };

    return (

        <div className="index_container">

            <img src={LastOrdersLogo} className="lologo_index" alt="last_orders_logo_index"></img>
            <a href="https://play.google.com/store/apps/details?id=io.ionic.lastorders" target="_blank"><img src={google_download} className="google_download" alt="google_download" onClick={handleGAClickAndroid}></img></a>
            <a href="" target="_blank"><img src={apple_download} className="apple_download" alt="apple_download"></img></a>



            <img src={index_cards_image} className="index_cards_image" alt="last_orders_logo_att_index"></img>

            <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3401357378524890"
                crossorigin="anonymous"></script>
            
            <ins class="adsbygoogle"
                data-ad-client="ca-pub-3401357378524890"
                data-ad-slot="5293357848"
                data-ad-format="auto"
                data-full-width-responsive="true"></ins>
            <script>
                (adsbygoogle = window.adsbygoogle || []).push({ });
            </script>
            
            <Link style={{ color: "black", textDecoration: 'none' }} to='/homepage'><h1 className="continue_to_lo_button"> Continue </h1> </Link>
            <img src={waves_image} className="waves_index" alt="waves"></img>
        </div>





    )
}

export default IndexPage
