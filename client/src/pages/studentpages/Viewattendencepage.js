import React from "react";
import Sidenavbarforstudent from "../../components/Sidebarforstudent";
import Viewattendence from "../../components/Viewattendence";
import Attendencecardreport from "../../components/Attendencereportcard";
import Viewstudentattendencebydate from "../../components/Viewstudentattendencebydate";
import Viewstudentattendencebysubject from "../../components/Viewstudentattendencebysubject";
import Navbarstudent from "../../components/Navbarstudent";

function Viewattendencepage() {
  return (
    <>
      <Sidenavbarforstudent />
      <div className="fixing">
      <div>
          <Navbarstudent  />
        </div>
        <Viewattendence />
        <Attendencecardreport />
        <Viewstudentattendencebydate />
        <Viewstudentattendencebysubject />
      </div>
    </>
  );
}
export default Viewattendencepage;
