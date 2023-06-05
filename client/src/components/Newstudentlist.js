import React, { useEffect, useState } from "react";
import styles from "../style/newstudentlist.module.css";
import Loading from "./Loading";

function Newstudentlist() {
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
          <h4>New students list in the form of table</h4>
        </div>
        {loadingg ? (
          <Loading />
        ) : (
          <table>
            <thead>
              <tr>
                <th>Student's Name</th>
                <th>Collge Name</th>
                <th>Course Name</th>
                <th>Department</th>
                <th>Semester</th>
                <th>Reg No.</th>
                <th>Roll No.</th>
                <th>Mobile No.</th>
                <th>Email ID</th>
              </tr>
            </thead>
            <tbody>
              {userData?.map((data) => {
                return (
                  <tr>
                    <td>{data.studentName}</td>
                    <td>{data.collegeName}</td>
                    <td>{data.courseName}</td>
                    <td>{data.departmentName}</td>
                    <td>
                      {data.semester}
                      <sup>th</sup>
                    </td>
                    <td>{data.regNumber}</td>
                    <td>{data.rollNumber}</td>
                    <td>{data.mobNumber}</td>
                    <td>{data.emailId}</td>
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
export default Newstudentlist;
