import Card from "./components/Card.component";
import Navbar from "./components/Navbar.component";


function App() {
  return (
    <div>
      <Navbar/>
      <div className="container d-flex justify-content-center mt-3">
          <Card/>
      </div>
      
    </div>
  );
}

export default App;
