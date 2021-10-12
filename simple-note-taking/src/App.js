import './App.css';
import "bootstrap/dist/css/bootstrap.css";
import Calender from './Components/Calender';
import Notes from "./Components/Notes";

function App() {
  document.title = "Simple-Notes"

  return (
    <div className='container-fluid mt-3'>

      <div className="row">

        <div className="col">
          <Calender />
        </div>

        <div className="col">
          <Notes />
        </div>

      </div>

    </div>
  );
}

export default App;
