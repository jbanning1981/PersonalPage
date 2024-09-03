import { useEffect, useState } from "react";
import apiState from "../common/apistate";
import Ischool from "../common/school";
import "../schoolcontent/schoolcontent";
import "./maincontent.scss";
import SchoolContent from "../schoolcontent/schoolcontent";
const MainContent = () => {
  

  const [isLoaded, setIsLoaded] = useState(false);
  
  const [schoolLoadState, setSchoolLoadState] = useState<string>(apiState.idle);
  const [schoolStateData, setSchoolStateData] = useState<Array<Ischool>>();

  let schoolData: Array<Ischool> = [];
  let schoolApiState = "";
  let jobData = null;
  let jobApiState = "";

  const setLoadStatus = () => {
  
    var isSchoolLoaded = apiState.isLoaded(schoolApiState) || apiState.isError(schoolApiState);
    var isJobLoaded = true || apiState.isLoaded(jobApiState) || apiState.isError(jobApiState);    
    if(isJobLoaded && isSchoolLoaded) {
      setIsLoaded(true);

      if(apiState.isLoaded(schoolApiState)) {
        setSchoolStateData(schoolData);
      }

  
    }

  };

  const getSchoolData = async () => {
    if (
      (apiState.isLoaded(schoolApiState) || apiState.isLoading(schoolApiState)) 
      // &&
      // (!apiState.isLoaded(schoolLoadState) || !apiState.isLoading(schoolLoadState))
    ) {
      //setSchoolLoadState(schoolApiState);
      setLoadStatus();
      return;
    }

    //get data
    schoolApiState = apiState.loading;
    
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

      schoolApiState = apiState.loaded;
      
      
      schoolData = (await schoolResponse.json()).map((entry: Ischool) => {
        try {
          return entry;
        } catch (error) {
          console.error(error);
        }
      });
      schoolApiState = apiState.loaded;      
      setSchoolStateData(schoolData);
    } catch (error) {
      console.error(error);
      schoolApiState = apiState.error;
    }
    
    setSchoolLoadState(schoolApiState);  
    setLoadStatus();
  };

  const getJobData = async () => {
    if (apiState.isLoaded(jobApiState) || apiState.isLoading(jobApiState)) {
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
    console.log("useEffect called");
    console.log(isLoaded);
    if (!isLoaded) {
      getSchoolData();
      //getJobData();
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
          {/* <div className="flex-row w-100">
            <div className="p-4">
              <div className="row">
                <div className="col">
                  <p>{loadingText}</p>
                </div>
              </div>
            </div>
          </div> */}
          <div className="pt-5">
            <SchoolContent loadState={schoolLoadState} schoolData={schoolStateData} />
          </div>
        </div>
      )}
    </div>
  );
};

export default MainContent;
