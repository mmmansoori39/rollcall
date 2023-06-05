import React from "react";
import Sidenavbarforadmin from "../../components/Sidenavbarforadmin";
import Viewstudentlist from "../../components/Viewstudentlist";
import Viewstudentlistcard from "../../components/Viewstudentlistcard";
import Navbaradmin from "../../components/Navbaradmin";

function Viewstudentpage() {
  return (
    <>
      <Sidenavbarforadmin />
      <div className="fixing">
        <div>
          <Navbaradmin />
        </div>
        <Viewstudentlist />
        <Viewstudentlistcard />
      </div>
    </>
  );
}
export default Viewstudentpage;
