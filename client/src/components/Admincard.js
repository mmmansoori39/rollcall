import React from "react";
import styles from "../style/admincard.module.css";
import { NavLink } from "react-router-dom";
function Admincard() {
  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <NavLink to="/admin/addstudent">
          <div className="up">
            <h2>Add Student</h2>
          </div>
        </NavLink>
        <NavLink to="/admin/addteacher">
          <div className="up">
            <h2>Add Teacher</h2>
          </div>
        </NavLink>
        <NavLink to="/admin/editstudent">
          <div className="up">
            <h2>Edit Student</h2>
          </div>
        </NavLink>
        <NavLink to="/admin/editteacher">
          <div className="up">
            <h2>Edit Teacher</h2>
          </div>
        </NavLink>
        <NavLink to="/admin/addbranch">
          <div className="up">
            <h2>Add Branch</h2>
          </div>
        </NavLink>
        <NavLink to="/admin/addtimetable">
          <div className="up">
            <h2>Add TimeTable</h2>
          </div>
        </NavLink>
        <NavLink to="/admin/viewstudent">
          <div className="up">
            <h2>View Student</h2>
          </div>
        </NavLink>
        <NavLink to="/admin/viewteacher">
          <div className="up">
            <h2>View Teacher</h2>
          </div>
        </NavLink>
      </div>
    </div>
  );
}
export default Admincard;
