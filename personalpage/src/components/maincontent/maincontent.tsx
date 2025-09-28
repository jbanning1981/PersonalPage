import { useEffect, useState, useRef } from "react";
import schoolEntry from "../common/schoolEntry";
import "../schoolcontent/schoolcontent";
import "./maincontent.scss";
import SchoolContent from "../schoolcontent/schoolcontent";
import LoadSpinner from "../common/loadSpinner";
import { companyEntry } from "../common/companyEntry";
import WorkContent from "../workcontent/workcontent";
const MainContent = () => {
  

  
  
  const isSchoolDataLoaded = useRef(false);
  const [schoolData, setSchoolData] = useState<Array<schoolEntry>>([]);
  
  
  const isJobDataLoaded = useRef(false);
  const [jobData, setJobData] = useState<Array<companyEntry>>([]);  

  const [loadState, setLoadState] = useState(false);

  const setLoadStatus = () => {
    if(isSchoolDataLoaded && isJobDataLoaded) {
      ('Setting Load State');
      setLoadState(true);
    }
  };

  const getSchoolData = async () => {   
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

      const schoolJsonData = (await schoolResponse.json()).map((entry: schoolEntry) => {
        try {
          return entry;
        } catch (error) {
          console.error(error);
        }
      });
      setSchoolData(schoolJsonData);
    
      setLoadStatus();
    } catch (error) {
      console.error(error);
      setSchoolData([]);
      setLoadStatus();
    }

  };

  const getJobData = async () => {
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

      const jobJsonData = (await jobDataResponse.json()).map((entry: companyEntry) => {
        try {
          return entry;
        } catch (error) {
          console.error(error); 
        }
      });
      setJobData(jobJsonData);
      setLoadStatus();
    } catch (error) {
      console.error(error);
      setJobData([]);
      setLoadStatus();
    }

  };


  useEffect(() => {
    
    if(!isJobDataLoaded.current) {
       
      isJobDataLoaded.current = true;
      getJobData(); 
      return;
    }
  });  

  useEffect(() => {

    
    if(!isSchoolDataLoaded.current) {
      
      isSchoolDataLoaded.current = true;  
      getSchoolData(); 
      return;
    }
  });

  return (
    <div className="bg-white d-flex flex-grow-1 align-self-stretch w-100 h-100">
        <div className="container-fluid">
          {
            loadState === false && <LoadSpinner />
          }
          {
            loadState == true &&             
            <>
              <div className="pt-2">
                <WorkContent employerData={jobData} />
              </div>
              <div className="pt-5">
                <SchoolContent schoolData={schoolData} />            
              </div>            
            </>
          }
      </div>      
    </div>
  );
};

export default MainContent;
