import React from "react";
import Sidenavbarforteacher from "../../components/Sidenavbarforteacher";
import Navbaradmin from "../../components/Navbaradmin";
import Cardteacherhome from "../../components/Cardteacherhome";

function Teacherhomepage() {
  return (
    <>
      <Sidenavbarforteacher />
      <div className="fixing">
        <Navbaradmin />
        <Cardteacherhome />
      </div>
    </>
  );
}
export default Teacherhomepage;
