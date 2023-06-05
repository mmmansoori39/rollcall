import { Button } from "@mui/material";
import React, { useState } from "react";
import styles from "../style/sidenavbar.module.css";
import { NavLink } from "react-router-dom";

function Sidenavbarforteacher() {
  const [home, setHome] = useState(true);
  const [addst, setAddst] = useState(false);
  const [addt, setAddt] = useState(false);
  const [addtime, setAddtime] = useState(false);
  const [addb, setAddb] = useState(false);
  const [edst, setEdst] = useState(false);
  const [edt, setEdt] = useState(false)

  const styleOn = {
    backgroundColor: "#F6F1F1",
    color: " #0f6092",
  };
  const styleOff = {
    backgroundColor: "#0f6092",
    color: "white",
  };

  return (
    <>
      <div className={styles.container}>
        <span>
          <h1>RollCall</h1>
        </span>
        <div>
          <NavLink to="/teacher">
            <button style={home ? styleOn : styleOff} onClick={()=>{
              setHome(true)
            }}>Home</button>
          </NavLink>
          <NavLink to="/teacher/addattendence">
            <button style={addst ? styleOn : styleOff} onClick={()=>{
              setHome(false);
              setAddst(true)
            }}>Add Attendence</button>
          </NavLink>
          <NavLink to="/teacher/viewstudentattendence">
            <button style={addt ? styleOn : styleOff} onClick={()=>{
              setHome(false);
              setAddt(true)
            }}>View Attendence</button>
          </NavLink>
          <NavLink to="/teacher/acceptattendence">
            <button style={edst ? styleOn : styleOff} onClick={()=>{
              setHome(false);
              setEdst(true)
            }}>Accept Attendence</button>
          </NavLink>
          <NavLink to="/teacher/dummyattendence">
            <button style={edt ? styleOn : styleOff} onClick={()=>{
              setHome(false);
              setEdt(true)
            }}>Dummy Attendence</button>
          </NavLink>
          <NavLink to="/teacher/viewtimetable">
            <button style={addb ? styleOn : styleOff} onClick={()=>{
              setHome(false);
              setAddb(true)
            }}>View TimeTable</button>
          </NavLink>
          <NavLink to="/teacher/teacherprofile">
            <button style={addtime ? styleOn : styleOff} onClick={()=>{
              setHome(false);
              setAddtime(true)
            }}>View Profile</button>
          </NavLink>
          <NavLink to="/">
            <button>Log Out</button>
          </NavLink>
        </div>
      </div>
    </>
  );
}
export default Sidenavbarforteacher;
