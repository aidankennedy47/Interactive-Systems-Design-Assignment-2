import logo from './logo.svg';
import './App.css';
import React from 'react';
import DashboardCard from './components/DashboardCard';
import Sidebar from './components/Sidebar';

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
  // sortPlants();

  console.log(plants[plantID]);
}

  return (
    <div className="App">
      <Sidebar/>
      <div>
        <h1>Dashboard</h1>
        <input id="searchBar" placeholder='Search'></input>
        <div className="Dashboard">
          <DashboardCard data={plants[0]} waterFunction={() => waterPlant(0)}/>
          <DashboardCard data={plants[1]} waterFunction={() => waterPlant(1)}/>
          <DashboardCard data={plants[2]} waterFunction={() => waterPlant(2)}/>
          <DashboardCard data={plants[3]} waterFunction={() => waterPlant(3)}/>
          <DashboardCard data={plants[4]} waterFunction={() => waterPlant(4)}/>
          <DashboardCard data={plants[5]} waterFunction={() => waterPlant(5)}/>
      </div>
    </div>
    </div>
  );
}

export default App;
