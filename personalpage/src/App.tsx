import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.scss";
import Navbar from "./components/navbar/navbar";
import Sidebar from "./components/sidebar/sidebar";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="h-100 w-100">
        <Navbar></Navbar>
        <div className="container-fluid p-0 d-flex h-100">
          <Sidebar></Sidebar>
          <div className="bg-light flex-fill">
            <div className="p-2 d-md-none d-flex text-white bg-success">
                <a href="#" className="text-white" 
                   data-bs-toggle="offcanvas"
                   data-bs-target="#bdSidebar">
                    <i className="fa-solid fa-bars"></i>
                </a>
            </div>
            <div className="p-4">
                <nav>
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item">
                            <i className="fa-solid fa-house"></i>
                        </li>
                        <li className="breadcrumb-item">Learning Content</li>
                        <li className="breadcrumb-item">Next Page</li>
                    </ol>
                </nav>
                <div className="row">
                    <div className="col">
                        <p>Page content goes here</p>
                    </div>
                </div>
            </div>
        </div>
        </div>
        </div>
    </>
  );
}

export default App;
