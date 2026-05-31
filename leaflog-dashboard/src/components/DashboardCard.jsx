import React from "react";

export default function DashboardCard({data})
{
    return (
        <div className="dashboard-card">
            <div className="top-half">
                <p id="plantName">{data.name}</p>
                <p id="wateringFreq">Watering needs: {data.wateringfrequency}</p>
                <img src={data.imagelink} id="plantImage"/>
            </div>
            <img src="WaterDrop.png" id="wateringImage"/>
            <label for="wateringImage" className="editAndWater">Water Plant</label>
            <br/>
            <img src="PlusSign.png" id="editingImage"/>
            <label for="editingImage" className="editAndWater">Edit Plant</label>
            <br/>
            <p id="waterProgressText">Water Progress<br/>
            <progress max="100" value="88"/><br/>
            <span id="waterSoonText">Needs water soon: 1 day</span></p>
        </div>
    );
}