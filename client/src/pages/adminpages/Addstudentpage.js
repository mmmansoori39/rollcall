import React from "react";
import Sidenavbarforadmin from "../../components/Sidenavbarforadmin";
import Addstudent from "../../components/Addstudent";
import Newstudentlist from "../../components/Newstudentlist";
import Navbaradmin from "../../components/Navbaradmin";

function Addstudentpage() {
  return (
    <>
      <Sidenavbarforadmin />
      <div className="fixing">
        <div>
          <Navbaradmin />
        </div>
        <Addstudent />
        <Newstudentlist />
      </div>
    </>
  );
}
export default Addstudentpage;
