import { useEffect, useState, Suspense } from "react";
import apiState from "../common/apistate";
import schoolEntry from "../common/schoolEntry";
import "../schoolcontent/schoolcontent";
import "./maincontent.scss";
import SchoolContent from "../schoolcontent/schoolcontent";
import LoadSpinner from "../common/loadSpinner";
import companyEntry from "../common/companyEntry";
import WorkContent from "../workcontent/workcontent";
const MainContent = () => {
  

  
  
  let schoolLoadState = "";
  const [schoolData, setSchoolData] = useState<Array<schoolEntry>>([]);
  
  
  let jobLoadState = "";
  const [jobData, setJobData] = useState<Array<companyEntry>>([]);  

  const setLoadStatus = () => {
    var isSchoolLoaded = apiState.isLoaded(schoolLoadState) || apiState.isError(schoolLoadState);
    var isJobLoaded = true || apiState.isLoaded(jobLoadState) || apiState.isError(jobLoadState);  
    console.log(isJobLoaded && isSchoolLoaded);
  };

  const getSchoolData = async () => {
    if (schoolLoadState !== "") {
      setLoadStatus();
      return;
    }
    
    try {
      schoolLoadState = apiState.loading;
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

      let schoolJsonData = (await schoolResponse.json()).map((entry: schoolEntry) => {
        try {
          return entry;
        } catch (error) {
          console.error(error);
        }
      });
      setSchoolData(schoolJsonData);
      schoolLoadState = apiState.loaded;
      setLoadStatus();
    } catch (error) {
      console.error(error);
      schoolLoadState = apiState.error;
      setSchoolData([]);
      setLoadStatus();
    }

  };

  const getJobData = async () => {
    if (jobLoadState !== "") {
      setLoadStatus();
      return;
    }

    //get data
    jobLoadState = apiState.loading;
    try {
      const jobApiUrl = "/jobHistory.json";
      const jobDataResponse = await fetch(jobApiUrl, {
        method: "GET",
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!jobDataResponse.ok) {
        throw new Error("Failed to load job data.");
      }      

      let jobJsonData = (await jobDataResponse.json()).map((entry: companyEntry) => {
        try {
          return entry;
        } catch (error) {
          console.error(error); 
        }
      });
      console.log(jobJsonData);
      setJobData(jobJsonData);
      jobLoadState = apiState.loaded;
      setLoadStatus();
    } catch (error) {
      console.error(error);
      jobLoadState = apiState.error;
      setJobData([]);
      setLoadStatus();
    }

  };


  useEffect(() => {

    console.log('Job Load State Use Effect Called');

    if(jobLoadState == "") {
      getJobData(); 
      return;
    }
    setLoadStatus();
  }, [jobLoadState]);  

  useEffect(() => {

    console.log('School Load State Use Effect Called');
    if(schoolLoadState == "") {
      getSchoolData(); 
      return;
    }
    setLoadStatus();
  }, [schoolLoadState]);

  return (
    <div className="bg-white d-flex flex-grow-1 align-self-stretch w-100 h-100">
        <div className="container-fluid">
          <Suspense fallback={<LoadSpinner />}>
            <div className="pt-2">
              <WorkContent employerData={jobData} />
            </div>
            <div className="pt-5">
              <SchoolContent schoolData={schoolData} />            
            </div>
          </Suspense>
      </div>      
    </div>
  );
};

export default MainContent;
