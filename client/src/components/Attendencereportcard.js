import React from "react";
import styles from "../style/newstudentlist.module.css";

function Attendencecardreport() {
  return (
    <>
      <div style={{minHeight:"150px"}} className={styles.container}>
        <div>
          <h3>View your attendence by date and and subject</h3>
        </div>
        <table>
          <thead>
            <tr>
              <th>Subject's Name</th>
              <th>Total Classes</th>
              <th>Total Attend</th>
              <th>Overall (%)</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>ADBMS</td>
              <td>40</td>
              <td>30</td>
              <td>75 %</td>
            </tr>
            <tr>
              <td>AJ</td>
              <td>42</td>
              <td>36</td>
              <td>85 %</td>
            </tr>
            <tr>
              <td>MWC</td>
              <td>38</td>
              <td>30</td>
              <td>78 %</td>
            </tr>
            <tr>
              <td>AI</td>
              <td>40</td>
              <td>36</td>
              <td>90 %</td>
            </tr>
            <tr>
              <td>CD</td>
              <td>41</td>
              <td>37</td>
              <td>90 %</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}
export default Attendencecardreport;
