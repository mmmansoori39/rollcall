import React, { useEffect, useState } from "react";
import styles from "../style/newstudentlist.module.css";
import { NavLink } from "react-router-dom";
import Loading from "./Loading";

function Viewstudentlistcard() {
  const [userData, setUserData] = useState();
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
      <div className={styles.container}>
        <div>
          <h3>View Student attendence list in the form of table</h3>
        </div>
        {loadingg ? (
          <Loading />
        ) : (
          <table>
            <thead>
              <tr>
                <th>Student's Name</th>
                <th>Roll No.</th>
                <th>Attendence</th>
                <th>More</th>
              </tr>
            </thead>
            <tbody>
              {userData?.map((data) => {
                return (
                  <tr>
                    <td>{data.studentName}</td>
                    <td>{data.rollNumber}</td>
                    <td>71 %</td>
                    <td>
                      <NavLink to="/admin/viewstudent/details">
                        <button formMethod="GET" onClick={getData}>
                          See Details
                        </button>
                      </NavLink>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        )}
      </div>
    </>
  );
}
export default Viewstudentlistcard;
