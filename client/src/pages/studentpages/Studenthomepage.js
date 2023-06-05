import React from "react";
import Sidenavbarforstudent from "../../components/Sidebarforstudent";
import Cardteacherhome from "../../components/Cardteacherhome";
import Navbarstudent from "../../components/Navbarstudent";

function Studenthomepage() {
  return (
    <>
      <Sidenavbarforstudent />
      <div className="fixing">
        <Navbarstudent />
        <Cardteacherhome />
      </div>
    </>
  );
}
export default Studenthomepage;
