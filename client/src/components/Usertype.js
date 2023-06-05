import React from "react";
import Admin from "../assets/admin.jpg";
import Teacher from "../assets/teacher.jpg";
import Student from "../assets/student.jpg";
import Parent from "../assets/student.jpg";
import styles from "../style/usertype.module.css";
import { NavLink } from "react-router-dom";
function UserType() {
  return (
    <>
      <div className={styles.container}>
        <span className="up">
          <h1>CHOOSE THE USER TYPE</h1>
        </span>
        <div className={styles.card}>
          <NavLink to="/adminlogin" activeClassName="active">
            <div className="up">
              <img src={Admin} alt="admin img" />
              <h2>Admin</h2>
            </div>
          </NavLink>
          <NavLink to="/teacherlogin" activeClassName="active">
            <div className="up">
              <img src={Teacher} alt="teacher img" />
              <h3>Teacher</h3>
            </div>
          </NavLink>
          <NavLink to="/studentlogin" activeClassName="active">
            <div className="up">
              <img src={Student} alt="student img" />
              <h3>Student</h3>
            </div>
          </NavLink>
          <NavLink to="/parentlogin">
            <div className="up">
              <img src={Parent} alt="parent img" />
              <h3>Parent</h3>
            </div>
          </NavLink>
        </div>
      </div>
    </>
  );
}
export default UserType;
