import React from "react";
// import styles from "../style/viewstudentattendencebysubject.module.css";
import styles from "../style/newstudentlist.module.css"

function Viewstudentattendencebysubject() {
  return (
    <>
      <div style={{minHeight:"200px"}} className={styles.container}>
      <div> <h4>View Student Attendence List</h4></div>
        <table>
          <thead>
            <tr>
              <th>Subject Name</th>
              <th>1</th>
              <th>2</th>
              <th>3</th>
              <th>4</th>
              <th>5</th>
              <th>6</th>
              <th>7</th>
              <th>8</th>
              <th>9</th>
              <th>10</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>ADBMS</td>
              <td><span>P</span></td>
              <td><span>A</span></td>
              <td><span>P</span></td>
              <td><span>P</span></td>
              <td><span>A</span></td>
              <td><span>A</span></td>
              <td><span>P</span></td>
              <td><span>P</span></td>
              <td><span>A</span></td>
              <td><span>P</span></td>
            </tr>
            <tr>
              <td>AJ</td>
              <td><span>P</span></td>
              <td><span>A</span></td>
              <td><span>P</span></td>
              <td><span>P</span></td>
              <td><span>A</span></td>
              <td><span>P</span></td>
              <td><span>P</span></td>
              <td><span>P</span></td>
              <td><span>P</span></td>
              <td><span>P</span></td>
            </tr>
            <tr>
              <td>MWC</td>
              <td><span>P</span></td>
              <td><span>P</span></td>
              <td><span>P</span></td>
              <td><span>P</span></td>
              <td><span>P</span></td>
              <td><span>P</span></td>
              <td><span>A</span></td>
              <td><span>P</span></td>
              <td><span>P</span></td>
              <td><span>A</span></td>
            </tr>
            <tr>
              <td>AI</td>
              <td><span>P</span></td>
              <td><span>P</span></td>
              <td><span>P</span></td>
              <td><span>P</span></td>
              <td><span>P</span></td>
              <td><span>A</span></td>
              <td><span>P</span></td>
              <td><span>P</span></td>
              <td><span>P</span></td>
              <td><span>P</span></td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}
export default Viewstudentattendencebysubject;