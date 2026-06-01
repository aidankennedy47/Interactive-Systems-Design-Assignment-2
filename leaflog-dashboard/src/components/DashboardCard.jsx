import React from "react";

export default function DashboardCard({data, waterFunction})
{
    return (
        <div className="dashboard-card">
            <div className="top-half">
                <p id="plantName">{data.name}</p>
                <p id="wateringFreq">Watering needs: {data.wateringfrequency}</p>
                <img src={data.imagelink} id="plantImage"/>
            </div>
            <img src="WaterDrop.png" id="wateringImage"/>
            <label for="wateringImage" className="editAndWater"><a href="#" onClick={waterFunction}>Water Plant</a></label>
            <br/>
            <img src="PlusSign.png" id="editingImage"/>
            <label for="editingImage" className="editAndWater"><a href="#">Edit Plant</a></label>
            <br/>
            <p id="waterProgressText">Water Progress<br/>
            <progress max="100" value="30"/><br/>
            <span id="waterSoonText">Needs water soon: {data.daystillwater} {data.daystillwater == "1" ? "day" : "days"}</span></p>
        </div>
    );
}