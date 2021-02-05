import "./App.css";
import About from "./components/About/About";
import Header from "./components/Header/Header";
import Landing from "./components/Landing/Landing";
import LiveClasses from "./components/LiveClasses/LiveClasses";

function App() {
  return (
    <div className="App">
      <Header />
      <Landing />
      <About />
      <LiveClasses />
    </div>
  );
}

export default App;
