import React from "react"
import HeroSection from "./HeroSection"
import Wrapper from "./Wrapper"
import Image from "next/image"
import p1 from "../public/p1.png"
import p2 from "../public/p2.png"
import p3 from "../public/p3.png"
import p4 from "../public/p4.png"
import p5 from "../public/p5.png"
import p6 from "../public/p6.png"

const HeroMain =()=>{
    const ProductData=[
        {
           
            name : " Air Jordan XXXVII Low PF  " , 
            price : "  ₹16295" , 
            discount : " 10% off" , 
            lineOne : " 18295 " , 
            img : p1
        } ,
         {
            img : p2 , 
            name : "Bike Jordan Low" , 
            price : " 18000 " , 
            discount : " 10% off" , 
            lineOne : "  16000 "
        } ,
         {
            img :  p3,
            name : " The One Is" , 
            price : " 15000 " , 
            discount : "10% off " , 
            lineOne : " 13000"
        } ,
         {
            img : p4  , 
            name : " The Sneakers " , 
            price : " 19000" , 
            discount : "10% off " , 
            lineOne : " 17000 "
        } ,

        {
            img : p5  , 
            name : " Jordan Low" , 
            price : " 18000 " , 
            discount : " 10% off" , 
            lineOne : "  16000 "
        } ,
        {
            img : p6  , 
            name : " Amazing Sneakers " , 
            price : " 19000" , 
            discount : "10% off " , 
            lineOne : " 17000 "
        } ,
    ]
    return(
        <>
            <Wrapper>
                <section>
                    <HeroSection></HeroSection>
                    {/** Paragraph and text */}
                    <div className=" text-center max-w-3xl mx-auto font-urbanist mt-8 ">
                        <div className="leading-5 text-base md:text-xl mb-5"> Cushioning for Your Miles </div>
                        <div className=" text-lg md:text-2xl"> A lightweight Nike ZoomX midsole is combined with increased stack heights to help provide cushioning during extended stretches of running.</div>
                    </div>
                     
                     {/** Products  */}
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 my-10 p-5 ">
                        {ProductData.map((item)=>(
                        
                                <div className="p-5 font-urbanist">
                                    <div><Image src={item.img}/></div>
                                    <div className="text-lg md:text-xl font-medium text-black/[0.9] items-center py-3 ">{item.name}</div>
                                    <div className="flex flex-row items-center text-base md:text-lg font-medium ">
                                    <div className=" text-black/[0.8] mr-2"> {item.price} </div>    
                                    <div className=" text-black/[0.6] text-base md:text-lg line-through">{item.lineOne}</div>
                                    <div className="ml-auto text-base font-medium text-green-600">{item.discount}</div>
                                </div>
                                
                                </div>
                            ))}
                        

                    </div>


                </section>
            </Wrapper>
        
        
        </>
    )
}
export default HeroMain