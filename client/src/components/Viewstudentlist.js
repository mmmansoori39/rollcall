import React from "react";
import Select from "react-select";
import styles from "../style/viewstudentlist.module.css";
import { useState } from "react";
import { Message, useToaster, Button, ButtonToolbar } from "rsuite";
import CircularProgress from "@mui/material/CircularProgress";

const options = [
  { value: "CSE", label: "CSE", color: "red" },
  { value: "ME", label: "ME", color: "red" },
  { value: "CE", label: "CE", color: "red" },
  { value: "EE", label: "EE", color: "red" },
];
const departmentOptions = [
  { value: "CSE", label: "CSE" },
  { value: "ME", label: "ME" },
  { value: "CE", label: "CE" },
];
const courseOptions = [{ value: "B.TECH", label: "B.Tech" }];
const semOptions = [
  { value: 1, label: "1" },
  { value: 2, label: "2" },
  { value: 3, label: "3" },
  { value: 4, label: "4" },
  { value: 5, label: "5" },
  { value: 6, label: "6" },
  { value: 7, label: "7" },
  { value: 8, label: "8" },
];

function Viewstudentlist() {
  const [value, setvalue] = useState(null);


  const [department, setDepartment] = useState(null);
  const [course, setCourse] = useState(null);
  const [sem, setSem] = useState(null);

  const [load, setLoad] = useState(false);
  const toaster = useToaster();
  const placement = "topStart";
  const success = (
    <Message showIcon type="success" header="Success" closable>
      Student list has been loaded successfully
    </Message>
  );
  const error = (
    <Message showIcon type="error" header="Error" closable>
      Something is wrong , Try again .......
    </Message>
  );
  const aerror = (
    <Message showIcon type="error" header="Error" closable>
      Please fill the all required fields !!
    </Message>
  );
  const berror = (
    <Message showIcon type="error" header="Error" closable>
      Student is not found, please add student
    </Message>
  );
  const loader = <CircularProgress color="secondary" />;
  const successClick = () =>
    toaster.push(success, { placement, duration: 5000 });
  const errorClick = () => toaster.push(error, { placement, duration: 5000 });
  const aerrorClick = () => toaster.push(aerror, { placement, duration: 5000 });
  const berrorClick = () => toaster.push(berror, { placement, duration: 5000 });

  const postdata = async (e) => {
    try {
      e.preventDefault();
      setLoad(true);
      const courseName = course.value;
      const departmentName = department.value;
      const semester = sem.value;

      const res = await fetch("/viewstudentbydata", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          courseName,
          departmentName,
          semester,
        }),
      });
      console.log(courseName, semester, departmentName)
      const resdata = await res.json();
      console.log(res.status);

      // }
      if (res.status === 200) {
        successClick();
        setLoad(false);
      } else if (res.status === 401) {
        aerrorClick();
        setLoad(false);
      } else {
        berrorClick();
        setLoad(false);
      }
    } catch (error) {
      errorClick();
      setLoad(false);
      console.log(error);
    }
  };


  const customStyles = {
    option: (provided, state) => ({
      ...provided,
      color: state.isSelected ? "#00000" : "#000000",
      padding: "8px 15px",
      borderRadius: 12,
      margin: "4px 0px",
      backgroundColor: state.isFocused ? "#0f6092" : "",
      color: state.isFocused ? "#ffffff" : "#19A7CE",
      fontWeight: "550",
    }),
    control: () => ({
      width: 280,
      height: 25,
      display: "flex",
      jusctifyContent: "center",
      alignItems: "center",
      paddingRight: "10px",
    }),
    input: (provided, state) => ({
      ...provided,
      color: "#19A7CE",
    }),
    container: (provided, state) => ({
      ...provided,
      backgroundColor: "#ffffff",
      borderRadius: 8,
      border:"1px solid #0f6092",
      padding: "8px",
    }),
    dropdownIndicator: (provided, state) => ({
      color: "#0f6092",
    }),
    menu: () => ({
      color: "red",
      marginTop: 20,
      backgroundColor: "#ffffff",
    }),
    indicatorSeparator: (provided, state) => ({
      ...provided,
      display: "none",
    }),

    singleValue: (provided, state) => {
      const opacity = state.isDisabled ? 0.5 : 1;
      const transition = "opacity 300ms";

      return { ...provided, opacity, transition };
    },
  };

  return (
    <>
      <form method="POST">
      <div className={styles.container}>
        <div className={styles.inputval}>
          <span>
            <Select
              styles={customStyles}
              options={courseOptions}
              isSearchable
              onChange={(e)=>{
                setCourse(e)
              }}
              noOptionMassage={() => "No data available"}
              placeholder="Choose Course"
            />
          </span>
          <span>
            <Select
              styles={customStyles}
              options={departmentOptions}
              isSearchable
              onChange={(e)=>{
                setDepartment(e)
              }}
              noOptionMassage={() => "No data available"}
              placeholder="Choose Department"
            />
          </span>
          <span>
            <Select
              styles={customStyles}
              options={semOptions}
              isSearchable
              onChange={(e)=>{
                setSem(e)
              }}
              noOptionMassage={() => "No data available"}
              placeholder="Choose Semester"
            />
          </span>
          <span className={styles.btn}>
          {load === false ? (
              <ButtonToolbar>
                <Button color="cyan" appearance="primary" onClick={postdata}>
                  See Student List
                </Button>
              </ButtonToolbar>
            ) : (
              loader
            )}
          </span>
        </div>
      </div>
      </form>
    </>
  );
}
export default Viewstudentlist;
