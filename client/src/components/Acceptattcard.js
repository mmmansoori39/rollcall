import React from "react";
import styles from "../style/acceptattcard.module.css";
import Green from "../assets/grr.jpg";
import Red from "../assets/redd.jpg";

function Acceptattcard(props) {
  return (
    <>
      <div className={styles.container}>
        <span>
          <h5>{props.name}</h5>
          <p>
            20-{props.dep}-{props.rollno} {props.sem}<sup>th</sup> ADBMS
          </p>
        </span>
        <div>
          <img src={Red} alt="Red btn" />
          <img src={Green} alt="Green btn" />
        </div>
      </div>
    </>
  );
}
export default Acceptattcard;
