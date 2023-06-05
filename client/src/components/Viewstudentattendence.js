import React, { useEffect, useState } from "react";
import styles from "../style/newstudentlist.module.css";
import Loading from "./Loading";

function Viewstudentattendence() {
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
      <div  className={styles.container}>
        <div>
          <h4>View Students attendence details in the form of table</h4>
        </div>
        {loadingg ? (
          <Loading />
        ) : (
          <table>
            <thead>
              <tr>
                <th>Student's Name</th>
                <th>Roll No.</th>
                <th>ADBMS</th>
                <th>AI</th>
                <th>AJ</th>
                <th>CD</th>
                <th>M&WC</th>
                <th>CI</th>
                <th>Overall</th>
              </tr>
              <tr>
                <th>Total Classes</th>
                <th>-----</th>
                <th>100</th>
                <th>100</th>
                <th>100</th>
                <th>100</th>
                <th>100</th>
                <th>100</th>
                <th>Percentage</th>
              </tr>
            </thead>
            <tbody>
              {userData?.map((data) => {
                return (
                  <tr>
                    <td>{data.studentName}</td>
                    <td>{data.rollNumber}</td>
                    <td>41</td>
                    <td>34</td>
                    <td>38</td>
                    <td>42</td>
                    <td>23</td>
                    <td>44</td>
                    <td>62 %</td>
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
export default Viewstudentattendence;
