import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
import "./index.scss";
import Navbar from "./components/Navbar/Navbar";
import Sidebar from "./components/Sidebar/Sidebar";
import MainContent from "./components/MainContent/MainContent";
import StructuredData from "./components/StructuredData";

// The icon CSS is bundled above, so Font Awesome doesn't need to inject it at runtime.
// Without this, pre-rendered icons render oversized until the JavaScript loads.
config.autoAddCss = false;

function App() {
  return (
    <div className="d-flex flex-column min-vh-100">
      <Navbar />
      <div className="d-flex flex-fill">
        <Sidebar />
        <MainContent />
      </div>
      <StructuredData />
    </div>
  );
}

export default App;
