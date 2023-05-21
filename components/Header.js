'use client'
import Image from "next/image";
import React, { useState , useEffect} from "react";
import { IoCart } from "react-icons/io5";
import {BiMenu} from "react-icons/bi"
import {IoMdClose} from "react-icons/io"
import Wrapper from "./Wrapper";

const Header =()=>{
    const [MobileMenu , setMobileMenu]= useState(false)
    const [showCatMenu , setShowCatMenu] = useState(false) 
    const [show, setShow] = useState("translate-y-0");
    const [lastScrollY, setLastScrollY] = useState(0);
    const [categories, setCategories] = useState(null);
    const controlNavbar = () => {
        if (window.scrollY > 200) {
            if (window.scrollY > lastScrollY && !MobileMenu) {
                setShow("-translate-y-[80px]");
            } else {
                setShow("shadow-sm");
            }
        } else {
            setShow("translate-y-0");
        }
        setLastScrollY(window.scrollY);
    };

    useEffect(() => {
        window.addEventListener("scroll", controlNavbar);
        return () => {
            window.removeEventListener("scroll", controlNavbar);
        };
    }, [lastScrollY]);
    return(
        <Wrapper>
    <header className=" bg-white flex justify-between py-3 sticky top-0 items-center w-full h-50 font-urbanist mb-10">
        
        {/* logo */}
    
        <div className="flex">
            <img src="/logo.svg" alt="logo" className="w-10 md:w-30"/>

        </div>
        
         {/* Navigation Bar */}
       
        
        
           

         {/* icons */}
         <div className="flex justify-center items-center gap-3" >
         <IoCart size={30}/>
         <div className=" md:hidden w-8 h-8 flex justify-center items-center cursor-pointer  ">
            {MobileMenu ?(
                <IoMdClose 
                onClick={()=>setMobileMenu(false)}
                size={30}
                />

                
            ) :(
                <BiMenu
                onClick={()=>setMobileMenu(true)}
                size={30}
                />

            )}

         </div>
         </div>

         {/* Mobile Menu */}

         

    </header>
    </Wrapper>


  )
}

export default Header
//object ko z index per move karnay kai liyae we use zindex which means aagay ki taraf and peechay ki taraf