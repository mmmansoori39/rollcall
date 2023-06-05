import React from "react";
import Sidenavbarforadmin from "../../components/Sidenavbarforadmin";
import Viewstudentattendence from "../../components/Viewstudentattendence";
import Viewstudentattendencebysubject from "../../components/Viewstudentattendencebysubject";
import Viewstudentattendencebydate from "../../components/Viewstudentattendencebydate";
import Makeattendencecard from "../../components/Makeattendencecard";
import Attendencecardreport from "../../components/Attendencereportcard";

function Viewstudentdetailspage() {
  return (
    <>
      <Sidenavbarforadmin />
      <div className="fixing">
        <Viewstudentattendence />
        <Viewstudentattendencebysubject />
        <Viewstudentattendencebydate />
        <Makeattendencecard />
        <Attendencecardreport />
      </div>
    </>
  );
}
export default Viewstudentdetailspage;
