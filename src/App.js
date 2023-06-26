import Navbar from "./components/Navbar.component";
import StopWatch from "./components/Stopwatch.component";


function App() {
  return (
    <div>
      <Navbar/>
      <div className="container d-flex justify-content-center mt-3">
          <StopWatch/>
      </div>
      
    </div>
  );
}

export default App;
