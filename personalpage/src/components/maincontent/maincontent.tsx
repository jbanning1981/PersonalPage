import { useEffect, useState } from "react";
import apiState from "../common/apistate";
import school from "../common/school";
import "../schoolcontent/schoolcontent";
import "./maincontent.scss";
import SchoolContent from "../schoolcontent/schoolcontent";
const MainContent = () => {
  console.log("MainContent page started...");

  const [isLoaded, setIsLoaded] = useState(false);
  const [loadingText, setLoadingText] = useState("Loading...");

  let schoolData: school[] = [];
  let schoolApiState = "";
  let jobData = null;
  let jobApiState = "";  

  const setLoadStatus = () => {
    setIsLoaded(apiState.isLoaded(schoolApiState) || apiState.isLoaded(jobApiState));
    setLoadingText('Loaded!');
  }

  const getSchoolData = async () => {
    
    if (
      apiState.isLoaded(schoolApiState) ||
      apiState.isLoading(schoolApiState)
    ) {
      setLoadStatus();
      return;
    }

    //get data
    schoolApiState = apiState.loading;
    console.log("Starting School API call.");
    try {
      const schoolApiUrl = "/schoolHistory.json";
      const schoolResponse = await fetch(schoolApiUrl, {
        method: "GET",
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!schoolResponse.ok) {
        throw new Error("Failed to load school data.");
      }

      schoolData = await schoolResponse.json();
      schoolApiState = apiState.loaded;
      console.log(schoolData);
    } catch (error) {
      console.error(error);
      schoolApiState = apiState.error;
    }
    setLoadStatus();
  };


  const getJobData = async () => {
    if (
      apiState.isLoaded(jobApiState) ||
      apiState.isLoading(jobApiState)
    ) {
      setLoadStatus();
      return;
    }

    //get data
    jobApiState = apiState.loading;
    console.log("Starting Job API call.");
    try {
      const jobApiUrl = "/jobHistory.json";
      const jobDataResponse = await fetch(jobApiUrl, {
        method: "GET",
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (jobDataResponse.ok) {
        //convert to json
        jobData = await jobDataResponse.json();
        jobApiState = apiState.loaded;
      }
    } catch (error) {
      console.error(error);
      jobApiState = apiState.error;
    }
    setLoadStatus();
  };

  useEffect(() => {
    console.log('useEffect called');
    console.log(isLoaded);
    if (!isLoaded) {
      getSchoolData();
      getJobData();
    }
    //setTimeout(function () {}, 5000000000);
  }, []);

  return (
    <div className="bg-white d-flex flex-grow-1 align-self-stretch w-100 h-100">
      {!isLoaded && (
        <div className="d-flex justify-content-center w-100">
          <div className="d-flex align-items-middle">
            <div className="align-self-center pt-neg10">
              <div className="d-flex align-self-center">
                <div className="border rounded-circle outer-spin">
                  <div className="border rounded-circle middle-spin spinner indigo-border-pulse">
                    <div className="p-1">
                      <div className="border rounded-circle inner-spin">
                        <div className="p-1">
                          <div className="border rounded-circle core">
                            <div className="p-1"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="d-flex align-items-middle">
                <div className="align-self-center justify-content-center pt-4 flex-grow-1">
                  <p className="lh-1 fs-3 text-center">Loading...</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      {isLoaded && (
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
          <div>
            <SchoolContent schoolData={schoolData} />
          </div>
        </div>
      )}
    </div>
  );
};

export default MainContent;
