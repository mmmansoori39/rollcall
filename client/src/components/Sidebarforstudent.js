import { Button } from "@mui/material";
import React from "react";
import styles from "../style/sidenavbar.module.css";
import { NavLink } from "react-router-dom";

function Sidenavbarforstudent() {
  return (
    <>
      <div className={styles.container}>
        <span>
          <h1>RollCall</h1>
        </span>
        <div>
          <NavLink to="/student" activeClassName='active'>
            <div>
              <Button>Home</Button>
            </div>
          </NavLink>
          <NavLink to="/student/viewattendence">
            <div>
              <Button>View Attendence</Button>
            </div>
          </NavLink>
          <NavLink to="/student/viewtimetable">
            <div>
              <Button>View TimeTable</Button>
            </div>
          </NavLink>
          <NavLink to="/student/studentprofile">
            <div>
              <Button>View Profile</Button>
            </div>
          </NavLink>
          <NavLink to="/">
            <div>
              <Button>logout</Button>
            </div>
          </NavLink>
        </div>
      </div>
    </>
  );
}
export default Sidenavbarforstudent;