import React, { useEffect, useState } from "react";
import styles from "../style/card.module.css";
import Graphstudent from "../components/Graphstudent";
import Graphteacher from "./Graphteacher";
import Circlechartforteacher from "../components/Circlechartforteacher";
import Waveimg from "../assets/waveimg.jpg";
import Circlechartforstudent from "./Circlechartforstudent";

function Cardadminhome(){
  const [userData, setUserData] = useState()
  const [teachData, setTeachData] = useState()
  // const [loadingg, setLoadingg] = useState(true);
  const getData = async () => {
    try {
      const resst = await fetch("/viewstudent", {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        credentials: "include",
      });

      const rest = await fetch("/viewteacher", {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        credentials: "include",
      });
      const datast = await resst.json();
      const datat = await rest.json();
      const totalstudent= datast.length
      const totalteacher= datat.length
      setUserData(totalstudent);
      setTeachData(totalteacher)
      // if (res.status === 200) {
      //   setLoadingg(false);
      // }
    } catch (error) {}
  };

  useEffect(() => {
    getData();
  }, []);
  return(
    <>
<div className={styles.main}>
        <div className={styles.con}>
          <div className={styles.container}>
            <div className={styles.upborder}></div>
            <h1>'{userData}'</h1>
            <h4>Total Students</h4>
            <img src={Waveimg} alt="wave img" />
          </div>
          <div className={styles.container}>
            <div className={styles.upborder}></div>
            <h1>'{teachData}'</h1>
            <h4>Total Teachers</h4>
            <img src={Waveimg} alt="wave img" />
          </div>
          <div className={styles.container}>
            <Circlechartforstudent />
          </div>
          <div className={styles.container}>
            <Circlechartforteacher />
          </div>
        </div>
        <div className={styles.gdiv}>
          <div className={styles.graph}>
            <Graphstudent />
          </div>
          <div className={styles.graph}>
            <Graphteacher />
          </div>
        </div>
      </div>
    </>
  )
}
export default Cardadminhome;