import React, { useState } from "react";
import PersonIcon from "@mui/icons-material/Person";
import LockIcon from "@mui/icons-material/Lock";
import styles from "../style/login.module.css"
import Student from "../assets/student_icon_linear.svg"

function Signin() {
  return (
    <>
      <div className={styles.container}>
      <div className={styles.studentIcon}>
        <span>
            <img src={Student} alt="student icon" />
        </span>
      </div>
        <span className={styles.logreg}>
          <button>Login</button>
          <button >Register</button>
        </span>
        <div className={styles.inputval}>
          <span>
            <PersonIcon sx={{ fontSize:"1.3em"}} className={styles.icon} />
            <input type="text" placeholder="Username" />
          </span>
          <span>
            <LockIcon sx={{ fontSize:"1em"}} className={styles.icon} />
            <input type="password" placeholder="Password" />
          </span>
          {/* <FormControlLabel control={<Checkbox defaultChecked />} label="Remember me" /> */}
        </div>
        <div>
          <button className={styles.login}>Login</button>
          <h4 className={styles.forgot}>
            Forget password <span style={{color:"#1656f0"}}>?</span>
          </h4>
        </div>
      </div>
    </>
  );
}
export default Signin;
