import React from "react";
import Sidenavbarforteacher from "../../components/Sidenavbarforteacher";
import Navbaradmin from "../../components/Navbaradmin";
import Addattendence from "../../components/Addattendence";
import Makeattendencecard from "../../components/Makeattendencecard";
import Getattenstudentlist from "../../components/Getattenstudentlist";

function Addattendencepage() {
  return (
    <>
      <Sidenavbarforteacher />
      <div className="fixing">
        <Navbaradmin />
        <Getattenstudentlist />
        <Makeattendencecard />
      </div>
    </>
  );
}
export default Addattendencepage;


