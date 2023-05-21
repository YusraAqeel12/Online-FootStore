"use client"
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
const HeroSection =()=>{
    return(
        <section>
             <Carousel showArrows={ false } 
                       showIndicators={false} 
                       showThumbs={false} 
                       showStatus={false}
                       autoPlay={true}
                       infiniteLoop={true}
                       >
                        
                <div>
                    <img src="/slide-1.png" />
                    
                </div>
                <div>
                    <img src="/slide-2.png" />
                </div>
                <div>
                    <img src="/slide-3.png" />
                </div>
            </Carousel>
        </section>
    )
}
export default HeroSection