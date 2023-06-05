import React, { useState } from "react";
import styles from "../style/sidenavbar.module.css";
import {  NavLink } from "react-router-dom";

function Sidenavbarforadmin() {
 const [home, setHome]= useState(true)
 const [addst, setAddst]= useState(false)
 const [addt, setAddt]= useState(false)
 const [addtime, setAddtime]= useState(false)
 const [addb, setAddb]= useState(false)
 const [edst, setEdst]= useState(false)
 const [edt, setEdt]= useState(false) 
 const [vst, setVst]= useState(false)
 const [vt, setVt]= useState(false)
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
          <NavLink to="/admin" >
            <button style={home ? styleOn : styleOff} onClick={()=>{
              setHome(true)
            }}>Home</button>
          </NavLink>
          <NavLink to="/admin/addstudent" >
            <button style={addst ? styleOn : styleOff} onClick={()=>{
              setHome(false);
              setAddst(true)
            }}>Add Student</button>
          </NavLink>
          <NavLink to="/admin/addteacher" >
            <button style={addt ? styleOn : styleOff} onClick={()=>{
              setHome(false);
              setAddt(true)
            }}>Add Teacher</button>
          </NavLink>
          <NavLink to="/admin/editstudent" >
            <button style={edst ? styleOn : styleOff} onClick={()=>{
              setHome(false);
              setEdst(true)
            }}>Edit Student</button>
          </NavLink>
          <NavLink to="/admin/editteacher" >
            <button style={edt ? styleOn : styleOff} onClick={()=>{
              setHome(false);
              setEdt(true)
            }}>Edit Teacher</button>
          </NavLink>
          <NavLink to="/admin/addbranch" >
            <button style={addb ? styleOn : styleOff} onClick={()=>{
              setHome(false);
              setAddb(true)
            }}>Add Branch</button>
          </NavLink>
          <NavLink to="/admin/addtimetable" >
            <button style={addtime ? styleOn : styleOff} onClick={()=>{
              setHome(false);
              setAddtime(true)
            }}>Add TimeTable</button>
          </NavLink>
          <NavLink to="/admin/viewstudent" >
            <button style={vst ? styleOn : styleOff} onClick={()=>{
              setHome(false);
              setVst(true)
            }}>View Student</button>
          </NavLink>
          <NavLink to="/admin/viewteacher" >
            <button style={vt ? styleOn : styleOff} onClick={()=>{
              setHome(false);
              setVt(true)
            }}>View Teacher</button>
          </NavLink>
        </div>
      </div>
    </>
  );
}
export default Sidenavbarforadmin;
