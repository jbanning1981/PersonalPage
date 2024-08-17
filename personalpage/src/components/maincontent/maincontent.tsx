import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import "./maincontent.scss";
const MainContent = () => {
  const [isLoading, setLoadingStatus] = useState(true);
  const [loadingText, setLoadingText] = useState("Loading...");

  useEffect(() => {
    setTimeout(function () {
      setLoadingText("API loaded Page content goes here");
      setLoadingStatus(false);
    }, 2000);
  }, []);

  return (
    <div className="bg-white d-flex flex-grow-1 align-self-stretch w-100 h-100">
      {isLoading && (
        <div className="d-flex justify-content-center w-100">
          <div className="d-flex align-items-middle">
            <div className="align-self-center pt-neg10">
              <div className="border rounded-circle bottom-spin spinner">
                <div className="p-1">
                  <div className="border rounded-circle top-spin">
                    <div className="p-3">
                      <div className="border rounded-circle core">
                        <div className="p-3"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      <div className="container-fluid">
        <div className="flex-row w-100">
          <div className="p-4">
            <div className="row">
              <div className="col">
                <p>{loadingText}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainContent;
