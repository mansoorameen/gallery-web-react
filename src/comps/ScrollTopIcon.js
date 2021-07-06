import React, { useState } from "react";

export default function ScrollTopIcon() {
    const [ showScroll, setShowScroll ] = useState(false);

    const scrollView = () => {
        if( !showScroll && window.pageYOffset > 300 ) {
            setShowScroll(true);
        }
        else if( showScroll && window.pageYOffset < 300 ) {
            setShowScroll(false);
        }

    }

    const scrollTop = () => {
        window.scrollTo({top: 0 , behavior: 'smooth'})
    }

    window.addEventListener("scroll", scrollView)
    return(
        <div>
            <svg 
            onClick={scrollTop}
            className="scrollTop"
            style={{ display: showScroll ? "flex" : "none" }}
            xmlns="http://www.w3.org/2000/svg" 
            width="42" height="42" 
            viewBox="0 0 24 24" fill="none" 
            stroke="#F87171" stroke-width="1.5" 
            stroke-linecap="round" stroke-linejoin="round">
            <circle cx="12" cy="12" r="10"/>
            <path d="M16 12l-4-4-4 4M12 16V9"/>
            </svg>
        </div>
    )
}