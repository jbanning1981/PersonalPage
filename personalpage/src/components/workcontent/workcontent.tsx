import "./workcontent.scss";
import apiState from "../common/apistate";
import { useEffect, useState } from "react";
import companyEntry from "../common/companyEntry";

interface workResults {
  employerData?: Array<companyEntry> | undefined;
}

const WorkContent = ({
  employerData = [] as Array<companyEntry>
}: workResults) => {
    return (
    <>
    {employerData.length > 0 && (
      <>
        <p>I have {employerData.length} work entries to load.</p>
      </>
    )}
    </>
    );
};

export default WorkContent;