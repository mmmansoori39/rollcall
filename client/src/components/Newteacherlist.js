import React, { useEffect, useState } from "react";
import styles from "../style/newstudentlist.module.css";
import { Message, useToaster, Button, ButtonToolbar } from "rsuite";
import Loading from "./Loading";

function Newteacherlist() {
  const [userData, setUserData] = useState();
  const [loadingg, setLoadingg]= useState(true)
  const toaster = useToaster();
  const placement = "topEnd";
  const error = (
    <Message showIcon type="error" header="Error" closable>
      Data not found, something is wrong!!
    </Message>
  );
  const aerror = (
    <Message showIcon type="error" header="Error" closable>
      Something is wrong, Try after sometime!!
    </Message>
  );
  const errorClick = () => toaster.push(error, { placement, duration: 5000 });
  const aerrorClick = () => toaster.push(error, { placement, duration: 5000 });
  const getData = async () => {
    try {
      const res = await fetch("/viewteacher", {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        credentials: "include",
      });
      const data = await res.json();
      console.log(res.status);
      setUserData(data);
      if (res.status === 200) {
        setLoadingg(false)
      }
    } catch (error) {}
  };
  useEffect(()=>{
    getData()
  }, [])

  return (
    <>
      <div className={styles.container}>
        <div>
          <h4>New teachers list in the form of table</h4>
        </div>
        {loadingg ? (
          <Loading />
        ) : (
          <table>
            <thead>
              <tr>
                <th>Teacher's Name</th>
                <th>College Name</th>
                <th>Department</th>
                <th>Registeration No.</th>
                <th>Mobile No.</th>
                <th>Email ID</th>
              </tr>
            </thead>
            <tbody>
              {userData?.map((value) => {
                return (
                  <tr>
                    <td>{value.teacherName}</td>
                    <td>{value.collegeName}</td>
                    <td>{value.departmentName}</td>
                    <td>{value.regNumber}</td>
                    <td>{value.mobNumber}</td>
                    <td>{value.emailId}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        )}
      </div>
    </>
  );
}
export default Newteacherlist;
