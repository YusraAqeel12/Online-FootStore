import React from "react";
const Wrapper =( {children , className })=>{
    return(
        <div
        className={'w-full max-w-7xl px-5 md:px-10 mx-auto  ${className || ""}'}
        >
            {children}            
        </div>
    )
}
export default Wrapper
//classname append kara rahay hain agar class name nahi hai toh empty strings append karado
//issay layout break nahi hoga