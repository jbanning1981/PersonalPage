import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.scss";
import Navbar from "./components/navbar/navbar";
import Sidebar from "./components/sidebar/sidebar";

function App() {
  return (
    <div className="d-flex flex-column w-100">
      <Navbar></Navbar>
      <div>
        <div className="container-fluid navbar-footer">
          <span className="p-1"></span>
        </div>
      </div>
      <div className="d-flex flex-fill">
        <Sidebar></Sidebar>
        <div className="container-fluid p-0">

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
          {/* <div className="row h-100 g-0">
            <div className="d-none d-lg-block col-lg-3">
              <Sidebar></Sidebar>
            </div>
            <div className="col">
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
          </div> */}
        </div>
      </div>
    </div>
  );
}

export default App;
