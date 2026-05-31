import logo from './logo.svg';
import './App.css';
import DashboardCard from './components/DashboardCard';

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
  }
]

  return (
    <div className="App">
      <div className="DashboardRows">
        <div className="DashboardColumn">
          <DashboardCard data={plants[0]}/>
          <DashboardCard data={plants[0]}/>
        </div>
        <div className="DashboardColumn">
          <DashboardCard data={plants[0]}/>
          <DashboardCard data={plants[0]}/>
        </div>
        <div className="DashboardColumn">
          <DashboardCard data={plants[0]}/>
          <DashboardCard data={plants[0]}/>
        </div>
      </div>
    </div>
  );
}

export default App;
