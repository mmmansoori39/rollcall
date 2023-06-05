import React from "react";
import styles from "../style/teachercard.module.css";

function Teachercard() {
  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <div className="up">
          <h2>Add Attendence</h2>
        </div>
        <div className="up">
          <h2>View Attendence</h2>
        </div>
        <div className="up">
          <h2>Accept Attendence</h2>
        </div>
        <div className="up">
          <h2>Dummy Attendence</h2>
        </div>
      </div>
    </div>
  );
};
export default Teachercard;