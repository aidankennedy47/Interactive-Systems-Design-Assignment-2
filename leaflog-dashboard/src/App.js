import logo from './logo.svg';
import './App.css';
import React, { use, useEffect } from 'react';
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
      "daystillwater" : -1,
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
      "daystillwater" : 0,
      "timeswatered" : 4,
      "dateadded" : "2026-05-6"
  },
  {
      "name" : "Tulip",
      "description" : "Tulips are spring-blooming perennial herbaceous bulbiferous geophytes in the Tulipa genus. Their flowers are usually large, showy, and brightly coloured, generally red, orange, pink, yellow, or white.",
      "imagelink" : "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/%D7%A6%D7%91%D7%A2%D7%95%D7%A0%D7%99%D7%9D.JPG/250px-%D7%A6%D7%91%D7%A2%D7%95%D7%A0%D7%99%D7%9D.JPG",
      "wateringfrequency" : "Fortnightly",
      "commonmistake" : "Doing Bad",
      "plantlocation" : "Pot near Window",
      "lastwatered" : "2026-05-29",
      "daystillwater" : 3,
      "timeswatered" : 4,
      "dateadded" : "2026-05-6"
  },
  {
      "name" : "Sunflower",
      "description" : "The common sunflower (Helianthus annuus) is a large annual forb in the daisy family Asteraceae. The domesticated form of common sunflower is harvested for its edible seeds, which come in two types: oil and confectionary seeds.",
      "imagelink" : "https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/Sunflower_sky_backdrop.jpg/250px-Sunflower_sky_backdrop.jpg",
      "wateringfrequency" : "Weekly",
      "commonmistake" : "Underwatering",
      "plantlocation" : "Front Yard",
      "lastwatered" : "2026-05-29",
      "daystillwater" : 4,
      "timeswatered" : 4,
      "dateadded" : "2026-05-6"
  },
  {
      "name" : "Allium",
      "description" : "Allium is a large genus of monocotyledonous flowering plants with 1112 accepted species, making Allium the largest genus in the family Amaryllidaceae and among the largest plant genera in the world.",
      "imagelink" : "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c9/Ursa_ajlo_1.jpg/250px-Ursa_ajlo_1.jpg",
      "wateringfrequency" : "Monthly",
      "commonmistake" : "Cucumbering",
      "plantlocation" : "Back Garden",
      "lastwatered" : "2026-05-29",
      "daystillwater" : 5,
      "timeswatered" : 4,
      "dateadded" : "2026-05-6"
  },
  {
      "name" : "Violet",
      "description" : "Viola, commonly known as the violets, is a genus of flowering plants in the family Violaceae. It is the largest genus in the family, containing over 680 species. Most species are found in the temperate Northern Hemisphere; however, some are also found in widely divergent areas such as Hawaii, Australasia, and the Andes.",
      "imagelink" : "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/Viola_reichenbachiana_LC0128.jpg/250px-Viola_reichenbachiana_LC0128.jpg",
      "wateringfrequency" : "Weekly",
      "commonmistake" : "Leaving Alone",
      "plantlocation" : "Bedside Table",
      "lastwatered" : "2026-05-29",
      "daystillwater" : 6,
      "timeswatered" : 4,
      "dateadded" : "2026-05-6"
  }
]);

// Used to hold plants when filtering by search
const [tempPlants, setTempPlants] = React.useState([]);

// Holds the search query to show "no plants detected" if no plants fit the search query
const [plantNamePartial, setPlantNamePartial] = React.useState("");

// Used to denote when to show watering confirmation popup
const [successfulWater, setSuccessfulWater] = React.useState(false);

// Used to be able to stop watering confirmation from disappearing when it should be appearing (two overlapping water requests)
const [timer, setTimer] = React.useState(0);


const waterPlant = (plantID) =>
{
  // Resets each plant into a new array to set to the plants array whilst updating the watered plant's data
  const newPlants = plants.map((p, i) =>
  {
    if(i === plantID)
    {
      let newPlant = plants[plantID];
      newPlant.timeswatered++;
      let currentDate = new Date(Date.now());
      newPlant.lastwatered = currentDate.getFullYear() + "-" + (currentDate.getMonth() + 1) + "-" + currentDate.getDate();
      newPlant.wateringfrequency === "Weekly" ?       newPlant.daystillwater = 7 :
      newPlant.wateringfrequency === "Fortnightly" ?  newPlant.daystillwater = 14:
                                                      newPlant.daystillwater = 30;
      return newPlant;
    }
    else
    {
      return p;
    }
  });
  newPlants.sort((a, b) => a.daystillwater - b.daystillwater);
  
  setPlants(newPlants);

  // Causes the Confirmation Popup to appear for 3 seconds
  setSuccessfulWater(true);
  clearTimeout(timer);
  setTimer(setTimeout(() => {setSuccessfulWater(false);}, 3000));

  // console.log(plants[plantID]);
}

useEffect(() => {
  // Filters the plants to only those that include the plantNamePartial, not case sensitive
  let newTempPlants = [];
  if(plantNamePartial.length > 0)
  {
    newTempPlants = plants.filter((plant) => plant.name.toUpperCase().includes(plantNamePartial.toUpperCase()));
  }

  setTempPlants(newTempPlants);
  // console.log(tempPlants);
}, [plantNamePartial])

  return (
    <div className="App">
      <Sidebar/>
      <div>
        <h1>Dashboard</h1>
        <input id="searchBar" placeholder='Search' onChange={(bar) => {setPlantNamePartial(bar.target.value);}}></input>
        <div className="Dashboard">
          {tempPlants.length > 0 ? plants.map((p, i) => (tempPlants.includes(p) && <DashboardCard data={plants[i]} waterFunction={() => waterPlant(i)}/>)) : 
          plantNamePartial.length > 0 ? <h1>No plants found!</h1>:
          plants.map((p, i) => (<DashboardCard data={plants[i]} waterFunction={() => waterPlant(i)}/>))}
      </div>
    </div>
    {successfulWater && <ConfirmationPopup />}
    </div>
  );
}

export default App;
