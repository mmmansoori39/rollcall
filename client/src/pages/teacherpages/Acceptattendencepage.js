import React, { useEffect, useState } from "react";
import Sidenavbarforteacher from "../../components/Sidenavbarforteacher";
import Navbaradmin from "../../components/Navbaradmin";
import Acceptattcard from "../../components/Acceptattcard";

function Acceptattendencepage() {

  const [userData, setUserData] = useState()
  const [loadingg, setLoadingg] = useState(true);
  const getData = async () => {
    try {
      const res = await fetch("/viewstudent", {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        credentials: "include",
      });

      const data = await res.json();
      setUserData(data);
      if (res.status === 200) {
        setLoadingg(false);
      }
    } catch (error) {}
  };
  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <Sidenavbarforteacher />
      <div className="fixing">
        <Navbaradmin />
        <div className="acc">
        {
          userData?.map((data)=>{
            return (
              <Acceptattcard name={data.studentName} rollno={data.rollNumber} dep={data.departmentName} sem={data.semester} />
            )
          })
        }
        </div>
      </div>
    </>
  );
}
export default Acceptattendencepage;