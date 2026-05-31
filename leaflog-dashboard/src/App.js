import logo from './logo.svg';
import './App.css';
import DashboardCard from './components/DashboardCard';
import Sidebar from './components/Sidebar';

function App() {
  const plants = 
[
  {
      "name" : "Rose",
      "description" : "A rose is either a woody perennial flowering plant of the genus Rosa in the family Rosaceae or the flower it bears.",
      "imagelink" : "https://www.thetutuguru.com.au/wp-content/uploads/2012/08/Pink-Roses.jpg",
      "wateringfrequency" : "Weekly",
      "commonmistake" : "Overwatering",
      "plantlocation" : "Front Yard",
      "lastwatered" : "2026-05-29",
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
      "timeswatered" : 4,
      "dateadded" : "2026-05-6"
  },
  {
      "name" : "Rose",
      "description" : "A rose is either a woody perennial flowering plant of the genus Rosa in the family Rosaceae or the flower it bears.",
      "imagelink" : "https://www.thetutuguru.com.au/wp-content/uploads/2012/08/Pink-Roses.jpg",
      "wateringfrequency" : "Weekly",
      "commonmistake" : "Overwatering",
      "plantlocation" : "Front Yard",
      "lastwatered" : "2026-05-29",
      "timeswatered" : 4,
      "dateadded" : "2026-05-6"
  },
  {
      "name" : "Rose",
      "description" : "A rose is either a woody perennial flowering plant of the genus Rosa in the family Rosaceae or the flower it bears.",
      "imagelink" : "https://www.thetutuguru.com.au/wp-content/uploads/2012/08/Pink-Roses.jpg",
      "wateringfrequency" : "Weekly",
      "commonmistake" : "Overwatering",
      "plantlocation" : "Front Yard",
      "lastwatered" : "2026-05-29",
      "timeswatered" : 4,
      "dateadded" : "2026-05-6"
  },
  {
      "name" : "Rose",
      "description" : "A rose is either a woody perennial flowering plant of the genus Rosa in the family Rosaceae or the flower it bears.",
      "imagelink" : "https://www.thetutuguru.com.au/wp-content/uploads/2012/08/Pink-Roses.jpg",
      "wateringfrequency" : "Weekly",
      "commonmistake" : "Overwatering",
      "plantlocation" : "Front Yard",
      "lastwatered" : "2026-05-29",
      "timeswatered" : 4,
      "dateadded" : "2026-05-6"
  },
  {
      "name" : "Rose",
      "description" : "A rose is either a woody perennial flowering plant of the genus Rosa in the family Rosaceae or the flower it bears.",
      "imagelink" : "https://www.thetutuguru.com.au/wp-content/uploads/2012/08/Pink-Roses.jpg",
      "wateringfrequency" : "Weekly",
      "commonmistake" : "Overwatering",
      "plantlocation" : "Front Yard",
      "lastwatered" : "2026-05-29",
      "timeswatered" : 4,
      "dateadded" : "2026-05-6"
  }
]

  return (
    <div className="App">
      <Sidebar/>
      <div>
        <h1>Dashboard</h1>
        <input id="searchBar" placeholder='Search'></input>
        <div className="DashboardRows">
        <div className="DashboardColumn">
          <DashboardCard data={plants[0]} wateringDay={1}/>
          <DashboardCard data={plants[1]} wateringDay={4}/>
        </div>
        <div className="DashboardColumn">
          <DashboardCard data={plants[0]} wateringDay={2}/>
          <DashboardCard data={plants[0]} wateringDay={5}/>
        </div>
        <div className="DashboardColumn">
          <DashboardCard data={plants[0]} wateringDay={3}/>
          <DashboardCard data={plants[0]} wateringDay={6}/>
        </div>
      </div>
    </div>
    </div>
  );
}

export default App;
