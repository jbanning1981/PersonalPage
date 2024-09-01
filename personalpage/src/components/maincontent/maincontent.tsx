import { useEffect, useState } from "react";
import "./maincontent.scss";
const MainContent = () => {
  console.log("MainContent page started...");

  const [isLoading, setLoadingStatus] = useState(false);
  const [loadingText, setLoadingText] = useState("Loading...");

  let schoolData = null;
  let isSchoolDataLoaded = false;
  let isSchoolDataLoading = false;
  const getSchoolData = async () => {
    if (isSchoolDataLoaded) {
      console.log("School data already loaded. Exiting.");
      return;
    }

    if (isSchoolDataLoading) {
      console.log("School data load in progress. Exiting.");
      return;
    }

    //get data
    isSchoolDataLoading = true;
    console.log("Starting API call.");
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
        throw new Error("Failed to load school data.")
      }
        
        //convert to json
        schoolData = await schoolResponse.json();
        isSchoolDataLoaded = true;
        console.log("School data load attempt successful.");
    } catch (error) {
      console.error(error);
      isSchoolDataLoaded = false;
      console.log("School load attempt failed.");
    }
    isSchoolDataLoading = false;
  };

  let jobData = null;
  let isJobDataLoaded = false;
  let isJobDataLoading = false;
  const getJobData = async () => {
    if (isJobDataLoaded) {
      console.log("Job data already loaded. Exiting.");
      return;
    }

    if (isJobDataLoading) {
      console.log("Job data loading in progress. Exiting.");
      return;
    }

    //get data
    isJobDataLoading = true;
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
        isJobDataLoaded = true;
        console.log("Job data load successful.");
        console.log(jobData);
      }
    } catch (error) {
      console.error(error);
      isJobDataLoaded = false;
      console.log("Load attempt failed.");
    }
    isJobDataLoading = false;
  };

  useEffect(() => {
    if (isLoading != true) {
      setLoadingStatus(true);
      getSchoolData();
      getJobData();
      setLoadingText("API loaded Page content goes here");
      setLoadingStatus(false);
    }

    setTimeout(function () {}, 5000000000);
  }, []);

  return (
    <div className="bg-white d-flex flex-grow-1 align-self-stretch w-100 h-100">
      {isLoading && (
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
