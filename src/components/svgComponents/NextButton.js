import React from "react";

const NextButton = (props) => {
  return (
    <div className="app__lightbox-next" onClick={props.nextImage}>
        <svg 
            width="13"
            height="18"
            xmlns="http://www.w3.org/2000/svg">
            <path d="m2 1 8 8-8 8"
            stroke="#000"
            stroke-width="3"
            fill="none"
            fill-rule="evenodd"/>
        </svg>
    </div>
  )
}

export default NextButton;