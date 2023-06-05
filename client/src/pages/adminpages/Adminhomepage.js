import React from "react";
import Admincard from "../../components/Admincard";
import Sidenavbarforadmin from "../../components/Sidenavbarforadmin";
import Navbaradmin from "../../components/Navbaradmin";
import Cardadminhome from "../../components/Cardadminhome";

function Adminhomepage() {
  return (
    <>
      <Sidenavbarforadmin />
      <div className="fixing">
        <div>
          <Navbaradmin />
        </div>
        <Cardadminhome />
      </div>
    </>
  );
}
export default Adminhomepage;
