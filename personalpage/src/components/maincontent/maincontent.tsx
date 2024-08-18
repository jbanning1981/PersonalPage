import { useEffect, useState } from "react";
import "./maincontent.scss";
const MainContent = () => {
  console.log('Content page loading...');
  const [isLoading, setLoadingStatus] = useState(false);
  const [loadingText, setLoadingText] = useState("Loading...");

  let isSchoolDataLoaded = false;
  const getSchoolData = async () => {
    
    if(isSchoolDataLoaded) {
      console.log('school data already loaded.');
      return;
    }
    
    //get data 
      console.log('Starting API call.');
      const schoolApiUrl = 'https://jbanning1981.blob.core.windows.net/assets/schoolHistory.json';
      let schoolData = await fetch(schoolApiUrl, {
        mode: 'no-cors'
      });
      //convert to json
      isSchoolDataLoaded = true;
  }


  useEffect(() => {
    setLoadingStatus(true);

    
    setTimeout(function () {
      getSchoolData();
      setLoadingText("API loaded Page content goes here");
      setLoadingStatus(false);
    }, 5000);

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
      {!isLoading && (
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
      )}
    </div>
  );
};

export default MainContent;
