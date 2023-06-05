import React, { useState } from "react";
import Select from "react-select";
import styles from "../style/addstudent.module.css";
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
const collegeOptions = [{ value: "BRCM CET", label: "BRCM CET" }];

function Addteacher() {
  const [data, setdata] = useState({
    teacherName: "",
    regNumber: "",
    mobNumber: "",
    emailId: "",
  });
  const [collegeName, setCollege] = useState(null);
  const [departmentName, setDepartment] = useState(null);

  const [load, setLoad] = useState(false);
  const toaster = useToaster();
  const placement = "topEnd";
  const success = (
    <Message showIcon type="success" header="Success" closable>
      Teacher has been added successfully
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
      Teacher is already exist in table, please check
    </Message>
  );
  const loader = <CircularProgress color="secondary" />;
  const successClick = () =>
    toaster.push(success, { placement, duration: 5000 });
  const errorClick = () => toaster.push(error, { placement, duration: 5000 });
  const aerrorClick = () => toaster.push(aerror, { placement, duration: 5000 });
  const berrorClick = () => toaster.push(berror, { placement, duration: 5000 });

  const inputval = (e) => {
    let name = e.target.name.substring(5);
    let value = e.target.value;
    setdata((preval) => {
      return {
        ...preval,
        [name]: value,
      };
    });
  };

  const postdata = async (e) => {
    try {
      e.preventDefault();
      setLoad(true);
      const { teacherName, regNumber, mobNumber, emailId } = data;
      // const collegeName = "BRCM";
      // const departmentName = ";

      const res = await fetch("/addteacher", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          teacherName,
          collegeName,
          departmentName,
          regNumber,
          mobNumber,
          emailId,
        }),
      });
      const resdata = await res.json();
      console.log(resdata);
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

  // setvalue(options)
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
      border: "1px solid #0f6092",
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
            <span className={styles.inp}>
              <input
                type="text"
                autoComplete="off"
                placeholder="Enter the teacher name"
                name="data.teacherName"
                onChange={inputval}
              />
            </span>
            <span>
              <Select
                styles={customStyles}
                options={collegeOptions}
                isSearchable
                onChange={(e) => {
                  setCollege(e.value);
                }}
                noOptionMassage={() => "No data available"}
                placeholder="Choose College Name"
              />
            </span>
            <span>
              <Select
                styles={customStyles}
                options={departmentOptions}
                isSearchable
                onChange={(e) => {
                  setDepartment(e.value);
                }}
                noOptionMassage={() => {
                  return "No data available";
                }}
                placeholder="Choose Department"
              />
            </span>
            <span className={styles.inp}>
              <input
                type="number"
                autoComplete="off"
                placeholder="Enter Registeration number"
                name="data.regNumber"
                onChange={inputval}
              />
            </span>
            <span className={styles.inp}>
              <input
                type="number"
                autoComplete="off"
                placeholder="Enter Mobile number"
                name="data.mobNumber"
                onChange={inputval}
              />
            </span>
            <span className={styles.inp}>
              <input
                type="email"
                autoComplete="off"
                placeholder="Enter Email ID"
                name="data.emailId"
                onChange={inputval}
              />
            </span>

            <span className={styles.btn}>
              {load === false ? (
                <ButtonToolbar>
                  <Button
                    className={styles.login}
                    color="cyan"
                    appearance="primary"
                    onClick={postdata}
                  >
                    Add Teacher
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
export default Addteacher;
