import logo from './logo.svg';
import './App.css';
import React, { useEffect } from 'react';
import DashboardCard from './components/DashboardCard';
import Sidebar from './components/Sidebar';
import ConfirmationPopup from './components/ConfirmationPopup';

function App() {
  const [plants, setPlants] = React.useState( 
[
  {
      "name" : "Rose",
      "description" : "A rose is either a woody perennial flowering plant of the genus Rosa in the family Rosaceae or the flower it bears.",
      "imagelink" : "https://www.thetutuguru.com.au/wp-content/uploads/2012/08/Pink-Roses.jpg",
      "wateringfrequency" : "Weekly",
      "commonmistake" : "Overwatering",
      "plantlocation" : "Front Yard",
      "lastwatered" : "2026-05-29",
      "daystillwater" : 1,
      "timeswatered" : 4,
      "dateadded" : "2026-05-6"
  },
  {
      "name" : "Water Lily",
      "description" : "Water lilies are a well-studied family of plants because their large flowers with multiple unspecialized parts were initially considered to represent the floral pattern of the earliest flowering plants.",
      "imagelink" : "https://upload.wikimedia.org/wikipedia/commons/thumb/1/11/Nymphaea_nouchali5.JPG/250px-Nymphaea_nouchali5.JPG",
      "wateringfrequency" : "Monthly",
      "commonmistake" : "Too Dry",
      "plantlocation" : "Pond",
      "lastwatered" : "2026-05-29",
      "daystillwater" : 2,
      "timeswatered" : 4,
      "dateadded" : "2026-05-6"
  },
  {
      "name" : "Roser",
      "description" : "A rose is either a woody perennial flowering plant of the genus Rosa in the family Rosaceae or the flower it bears.",
      "imagelink" : "https://www.thetutuguru.com.au/wp-content/uploads/2012/08/Pink-Roses.jpg",
      "wateringfrequency" : "Weekly",
      "commonmistake" : "Overwatering",
      "plantlocation" : "Front Yard",
      "lastwatered" : "2026-05-29",
      "daystillwater" : 3,
      "timeswatered" : 4,
      "dateadded" : "2026-05-6"
  },
  {
      "name" : "Roses",
      "description" : "A rose is either a woody perennial flowering plant of the genus Rosa in the family Rosaceae or the flower it bears.",
      "imagelink" : "https://www.thetutuguru.com.au/wp-content/uploads/2012/08/Pink-Roses.jpg",
      "wateringfrequency" : "Weekly",
      "commonmistake" : "Overwatering",
      "plantlocation" : "Front Yard",
      "lastwatered" : "2026-05-29",
      "daystillwater" : 4,
      "timeswatered" : 4,
      "dateadded" : "2026-05-6"
  },
  {
      "name" : "Rosed",
      "description" : "A rose is either a woody perennial flowering plant of the genus Rosa in the family Rosaceae or the flower it bears.",
      "imagelink" : "https://www.thetutuguru.com.au/wp-content/uploads/2012/08/Pink-Roses.jpg",
      "wateringfrequency" : "Weekly",
      "commonmistake" : "Overwatering",
      "plantlocation" : "Front Yard",
      "lastwatered" : "2026-05-29",
      "daystillwater" : 5,
      "timeswatered" : 4,
      "dateadded" : "2026-05-6"
  },
  {
      "name" : "Rosem",
      "description" : "A rose is either a woody perennial flowering plant of the genus Rosa in the family Rosaceae or the flower it bears.",
      "imagelink" : "https://www.thetutuguru.com.au/wp-content/uploads/2012/08/Pink-Roses.jpg",
      "wateringfrequency" : "Weekly",
      "commonmistake" : "Overwatering",
      "plantlocation" : "Front Yard",
      "lastwatered" : "2026-05-29",
      "daystillwater" : 6,
      "timeswatered" : 4,
      "dateadded" : "2026-05-6"
  }
]);
const [tempPlants, setTempPlants] = React.useState([]);
const [successfulWater, setSuccessfulWater] = React.useState(false);
const [searchBarValue, setSearchBarValue] = React.useState("");
const [timer, setTimer] = React.useState(0);


const waterPlant = (plantID) =>
{
  const newPlants = plants.map((p, i) =>
  {
    if(i === plantID)
    {
      let newPlant = plants[plantID];
      newPlant.timeswatered++;
      let currentDate = new Date(Date.now());
      newPlant.lastwatered = currentDate.getFullYear() + "-" + (currentDate.getMonth() + 1) + "-" + currentDate.getDate();
      newPlant.wateringfrequency === "Weekly" ? newPlant.daystillwater = 7 : newPlant.daystillwater = 30;
      return newPlant;
    }
    else
    {
      return p;
    }
  });
  newPlants.sort((a, b) => a.daystillwater - b.daystillwater);
  
  setPlants(newPlants);

  setSuccessfulWater(true);
  clearTimeout(timer);
  setTimer(setTimeout(() => {setSuccessfulWater(false);}, 3000));

  // console.log(plants[plantID]);
}

const searchPlants = (plantNamePartial) =>
{
  const newTempPlants = plants.filter((plant) => plant.name.toUpperCase().includes(plantNamePartial.toUpperCase()));

  setSearchBarValue(plantNamePartial);
  setTempPlants(newTempPlants);

  // console.log(tempPlants);
}

  return (
    <div className="App">
      <Sidebar/>
      <div>
        <h1>Dashboard</h1>
        <input id="searchBar" placeholder='Search' onChange={(bar) => {searchPlants(bar.target.value);}}></input>
        <div className="Dashboard">
          {tempPlants.length > 0 ? tempPlants.map((p, i) => (<DashboardCard data={tempPlants[i]} waterFunction={() => waterPlant(i)}/>)) : 
          searchBarValue.length > 0 ? <h1>No plants found!</h1>:
          plants.map((p, i) => (<DashboardCard data={plants[i]} waterFunction={() => waterPlant(i)}/>))}
      </div>
    </div>
    {successfulWater && <ConfirmationPopup />}
    </div>
  );
}

export default App;
