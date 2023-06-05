import React from "react";
import Sidenavbarforadmin from "../../components/Sidenavbarforadmin";
import Navbaradmin from "../../components/Navbaradmin";
import Viewstudentlist from "../../components/Viewstudentlist";
import Viewstudentlistcard from "../../components/Viewstudentlistcard";

function Viewteacherpage() {
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
export default Viewteacherpage;
