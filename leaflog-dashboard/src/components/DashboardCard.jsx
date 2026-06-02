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
            <progress id={data.daystillwater > 0 ? "waterLater" : data.daystillwater < 0 ? "waterOverdue" : "waterToday"} max={data.wateringfrequency === "Monthly" ? 30 : data.wateringfrequency === "Weekly" ? 7 : 14} value={data.wateringfrequency === "Monthly" ? 30 - data.daystillwater : data.wateringfrequency === "Weekly" ? 7 - data.daystillwater : 14 - data.daystillwater}/><br/>
            {data.daystillwater >= 0 ?  <span id="waterSoonText">Needs water soon: {data.daystillwater} {data.daystillwater == "1" ? "day" : "days"}</span> :
                                        <span id="waterSoonText">Needed water: {-data.daystillwater} {data.daystillwater == "1" ? "day" : "days"} ago</span>} 
            </p>
        </div>
    );
}