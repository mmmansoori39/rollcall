import React from "react";
// import styles from "../style/viewstudentattendencebydate.module.css";
import styles from "../style/newstudentlist.module.css"

function Viewstudentattendencebydate() {
  return (
    <>
      <div style={{minHeight:"30px"}} className={styles.container}>
      <div> <h4>View Student Attendence List</h4></div>
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
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Md Moinuddin Mansoori</td>
              <td>4364</td>
              <td style={{ backgroundColor: "#cfffd4", color: "#1ed030" }}>
                Present
              </td>
              <td style={{ backgroundColor: "#ffcfcf" , color:"#f01147"}}>Absent</td>
              <td style={{ backgroundColor: "#cfffd4", color: "#1ed030" }}>
                Present
              </td>
              <td style={{ backgroundColor: "#ffcfcf", color:"#f01147" }}>Absent</td>
              <td style={{ backgroundColor: "#cfffd4", color: "#1ed030" }}>
                Present
              </td>
              <td style={{ backgroundColor: "#cfffd4", color: "#1ed030" }}>
                Present
              </td>
              <td>24 Apr 2023</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}
export default Viewstudentattendencebydate;
