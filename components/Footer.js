'use client'
import React from "react"
import Wrapper from "./Wrapper"
import {BsFacebook} from "react-icons/bs"
import {BsInstagram} from "react-icons/bs"
import {BsYoutube} from "react-icons/bs"
const Footer =()=>{
    return(
        <section>
            
                <div className=" bg-black pt-2 pb-2 flex flex-row md:flex-col justify-between font-urbanist" >
                    {/** Right Content */}
                    <div className=" items-center  justify-around flex flex-row text-white">
                        
                    <div className=" font-semibold text-base gap-4 cursor-pointer">
                            <div>FIND A STORE</div>
                            <div>BECOME A PARTNER</div>
                            <div>SIGN UP FOR MAIL</div>
                            <div>SEND US A FEEDBACK</div>
                            <div>STUDENT DISCOUNT</div>
                        </div>
                        
                        
                        
                        <div className="gap-4 cursor-pointer">
                            <div className="font-semibold">GET HELP</div>
                            <div>Order Status</div>
                            <div>Delivery</div>
                            <div>Payment Option</div>
                            <div>Contact Us</div>
                        </div>

                        <div className="gap-4 cursor-pointer">
                            <div className="font-semibold">ABOUT NIKE</div>
                            <div>News </div>
                            <div>Careers</div>
                            <div>Investors</div>
                            <div>Sustainabilty</div>
                        </div>

                         {/** Left Content */}
                     <div className=" items-center justify-around flex flex-row rounded-full cursor-pointer w-4/12">
                        <BsFacebook color="white" 
                                    onClick={() => window.open("https://facebook.com", "_blank")}/>
                        <BsInstagram color="white"/>
                        <BsYoutube color="white"/>
                    </div>


                    </div>


                </div>
        </section>

    )
}
export default Footer