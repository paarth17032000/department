import About from "./pages/About";
import Committee from "./pages/Committee";
import Interests from "./pages/Interests";
import Landing from "./pages/Landing";
import Schedule from "./pages/Schedule";


function App() {
  return (
    <div className="App">
      <Landing />
      <About />
      <hr />
      <Committee />
      <Interests />
      <Schedule />
    </div>
  );
}

export default App;