import React from "react";
import Sidenavbarforstudent from "../../components/Sidebarforstudent";
import Navbarstudent from "../../components/Navbarstudent";
import Timetable from "../../components/Timetable";

function Viewtimetablepage() {
  return (
    <>
      <Sidenavbarforstudent />
      <div className="fixing">
        <div>
          <Navbarstudent />
        </div>
        <Timetable />
      </div>
    </>
  );
}
export default Viewtimetablepage;
