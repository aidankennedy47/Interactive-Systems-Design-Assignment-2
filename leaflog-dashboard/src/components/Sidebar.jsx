import React from "react";
import SidebarButton from "./SidebarButton";

export default function Sidebar()
{
    return (
        <div className="sidebar">
            <div className="sidebarTop">
            <div id="logoDisplay">
            <img src="leafloglogo.png" id="logoImage"/>
            <label for="logoImage">LeafLog</label>
            </div>
            <div id="accountDisplay">
                <img src="profilePicture.png" id="pfpImage"/>
                <img src="notification.png" id="notifImage"/>
            </div>
            </div>
            <div className="sidebarButtons">
            <SidebarButton image="home.png" text="Dashboard" bottomButton="false"/>
            <SidebarButton image="add.png" text="Add Plant" bottomButton="false"/>
            <SidebarButton image="document.png" text="Watering Log" bottomButton="true"/>
            </div>
        </div>
    );
}