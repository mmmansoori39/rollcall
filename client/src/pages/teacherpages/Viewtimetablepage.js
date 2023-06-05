import React from "react";
import Sidenavbarforteacher from "../../components/Sidenavbarforteacher";
import Navbaradmin from "../../components/Navbaradmin";
import Timetable from "../../components/Timetable"

function Viewtimetablepage() {
  return (
    <>
      <Sidenavbarforteacher />
      <div className="fixing">
        <Navbaradmin />
        <Timetable />
      </div>
    </>
  );
}
export default Viewtimetablepage;