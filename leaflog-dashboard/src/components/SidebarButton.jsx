import React from "react";

export default function SidebarButton({image, text, bottomButton})
{
    return (
        <div className="sidebarButton" id={bottomButton}>
            <img src={image} class="sidebarButtonImage"/>
            <label><a href="#">{text}</a></label>
        </div>
    )
}