import React from "react";
import styles from "../style/timetable.module.css";
import { style } from "@mui/system";

function Timetable() {
  return (
    <>
      <div className={styles.container}>
        <div>
          <h4>Time Tabel of College</h4>
        </div>
        <table>
          <tr className={styles.timeno}>
            <td>Lecture No.</td>
            <td>1</td>
            <td>2</td>
            <td>3</td>
            <td>4</td>
            <td>5</td>
            <td>6</td>
            <td>7</td>
            <td>8</td>
          </tr>
          <tr className={styles.time}>
            <td>TIME</td>
            <td>9:00-9:45</td>
            <td>9:45-10:30</td>
            <td>10:30-11:15</td>
            <td>11:15-12:00</td>
            <td>12:00-12:45</td>
            <td>12:45-01:25</td>
            <td>01:25-2:10</td>
            <td>2:10-2:55</td>
          </tr>
          <tr>
            <td>MONDAY</td>
            <td>
              CD<br></br>
            </td>
            <td>
              DS<br></br>
            </td>
            <td>
              AJ<br></br>
            </td>
            <td>
              AI<br></br>
            </td>
            <td>
              ADBMS<br></br>
            </td>
            <td className={styles.lunch} rowspan="6">
              L<br></br>U<br></br>N<br></br>C<br></br>H
            </td>
            <td colspan="2">
              AJ Lab-G(1)
              <hr></hr>Project-I-G(1)
            </td>
          </tr>
          <tr>
            <td>TUESDAY</td>
            <td>
              CD<br></br>
            </td>
            <td colspan="2">
              CD Lab-G(1)
              <hr></hr>
              <br></br>
              AI Lab-G(2)<br></br>
            </td>
            <td>AI</td>
            <td>
              ADBMS<br></br>
            </td>
            <td>
              M&WC<br></br>
            </td>
            <td>Library</td>
          </tr>
          <tr>
            <td>WEDNESDAY</td>
            <td>
              CD<br></br>
            </td>
            <td colspan="2">
              CD Lab-G(2)
              <hr></hr>
              AI Lab-G(1)<br></br>
            </td>
            <td>M&WC</td>
            <td>ADBMS</td>
            <td>DS</td>
            <td>AJ</td>
          </tr>
          <tr className={styles.time}>
            <td>THURSDAY</td>
            <td>
              M&WC<br></br>
            </td>
            <td>
              CD<br></br>
            </td>
            <td>
              Project-I<br></br>
            </td>
            <td>AI</td>
            <td>
              ADBMS<br></br>
            </td>
            <td>
              DS<br></br>
            </td>
            <td>AJ</td>
          </tr>
          <tr>
            <td>FRIDAY</td>
            <td>
              M&WC<br></br>
            </td>
            <td>
              DS<br></br>
            </td>
            <td>
              AJ<br></br>
            </td>
            <td>AI</td>
            <td>
              Library<br></br>
            </td>
            <td colspan="2">
              AJ Lab-G(2)
              <hr></hr>
              Project-I-G(1)
            </td>
          </tr>
        </table>
      </div>
    </>
  );
}

export default Timetable;
