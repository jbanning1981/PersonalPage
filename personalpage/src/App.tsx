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
      <div className="d-flex flex-column w-100">
        <div className="d-flex">
          <Navbar></Navbar>
        </div>
        <div className="d-flex w-100">
          <div className="container-fluid navbar-footer">
            <span className="p-1"></span>
          </div>
        </div>
        <div className="d-flex flex-fill">
          <div className="container-fluid p-0 d-flex">
            <div className="d-flex">
              <Sidebar></Sidebar>
            </div>

            <div className="bg-white d-flex flex-grow-1 align-self-stretch">
              <div className="container-fluid">
                <div className="flex-row w-100">
                  <div className="p-4">
                    <div className="row">
                      <div className="col">
                        <p>Page content goes here</p>
                      </div>
                    </div>
                  </div>
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
