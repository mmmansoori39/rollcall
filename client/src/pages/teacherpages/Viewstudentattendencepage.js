import React from "react";
import Sidenavbarforteacher from "../../components/Sidenavbarforteacher";
import Navbaradmin from "../../components/Navbaradmin";
import Viewstudentattendencebydate from "../../components/Viewstudentattendencebydate";
import Viewstudentattendencebysubject from "../../components/Viewstudentattendencebysubject";
import Viewstudentattendence from "../../components/Viewstudentattendence";
import Getattenstudentlist from "../../components/Getattenstudentlist";

function Viewattendencepage() {
  return (
    <>
      <Sidenavbarforteacher />
      <div className="fixing">
        <Navbaradmin />
        <Getattenstudentlist />
        {/* <Viewstudentattendencebydate />
        <Viewstudentattendencebysubject /> */}
        <Viewstudentattendence />
      </div>
    </>
  );
}
export default Viewattendencepage;