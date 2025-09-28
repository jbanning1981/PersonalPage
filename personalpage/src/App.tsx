import "./App.scss";
import Navbar from "./components/navbar/navbar";
import Sidebar from "./components/sidebar/sidebar";
import MainContent from "./components/maincontent/maincontent";

function App() {
  return (
    <div className="d-flex flex-column w-100">
      <Navbar></Navbar>

      <div className="d-flex flex-fill">
        <Sidebar></Sidebar>
        <MainContent></MainContent>
      </div>
    </div>
  );
}

export default App;
