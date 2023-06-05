import React, { useEffect, useState } from "react";
// import styles from "../style/makeattendencecard.module.css";
import styles from "../style/newstudentlist.module.css";
import Green from "../assets/grr.jpg";
import Red from "../assets/redd.jpg";
import Loading from "./Loading";

function Makeattendencecard() {
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
          <h4>View Student attendence list in the form of table</h4>
        </div>
        {loadingg ? (
          <Loading />
        ) : (
          <table>
            <thead style={{ fontSize: "24px" }}>
              <tr>
                <th>Roll No.</th>
                <th>Student's Name</th>
                <th>13 MAY 2023</th>
              </tr>
            </thead>
            <tbody style={{ fontSize: "16px" }}>
              {userData?.map((data) => {
                return (
                  <tr>
                    <td>{data.rollNumber}</td>
                    <td>{data.studentName}</td>
                    <td style={{ background: "none" }}>
                      <span>
                        <img src={Red} alt="Red btn" />
                        <img src={Green} alt="Green btn" />
                      </span>
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
export default Makeattendencecard;
