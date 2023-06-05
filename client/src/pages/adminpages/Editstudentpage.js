import React from "react";
import Sidenavbarforadmin from "../../components/Sidenavbarforadmin";
import Addteacher from "../../components/Addteacher";
import Newteacherlist from "../../components/Newteacherlist";
import Navbaradmin from "../../components/Navbaradmin";

function Editstudentpage() {
  return (
    <>
      <Sidenavbarforadmin />
      <div className="fixing">
        <div>
          <Navbaradmin />
        </div>
        <Addteacher />
        <Newteacherlist />
      </div>
    </>
  );
}
export default Editstudentpage;