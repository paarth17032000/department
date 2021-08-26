import About from "./pages/About";
import Committee from "./pages/Committee";
import Contact from "./pages/Contact";
import FeeDetails from "./pages/Fee";
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
      <FeeDetails />
      <Contact />
    </div>
  );
}

export default App;