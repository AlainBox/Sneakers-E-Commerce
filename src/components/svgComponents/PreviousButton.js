import React from "react";

const PreviousButton = (props) => {
  return (
    <div className="app__lightbox-previous" onClick={props.previousImage}>
        <svg
            width="13"
            height="18"
            xmlns="http://www.w3.org/2000/svg">
            <path d="M11 1 3 9l8 8"
            stroke="#000"
            stroke-width="3"
            fill="none"
            fill-rule="evenodd"/>
        </svg>
    </div>
  )
}

export default PreviousButton;