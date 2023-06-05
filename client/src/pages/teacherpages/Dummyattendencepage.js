import React from "react";
import Sidenavbarforteacher from "../../components/Sidenavbarforteacher";
import Navbaradmin from "../../components/Navbaradmin";
import Makeattendencecard from "../../components/Makeattendencecard";
import Getattenstudentlist from "../../components/Getattenstudentlist";

function Dummyattendencepage() {
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
export default Dummyattendencepage;