import React from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import VisibilityIcon from "@mui/icons-material/Visibility";
// import styles from "../style/viewattendence.module.css";
import styles from "../style/viewstudentlist.module.css"
import Select from "react-select";
import { useState } from "react";

const options = [
  { value: "CSE", label: "CSE", color: "red" },
  { value: "ME", label: "ME", color: "red" },
  { value: "CE", label: "CE", color: "red" },
  { value: "EE", label: "EE", color: "red" },
];

function Viewattendence() {
  const [value, setvalue] = useState(null);

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
      <div className={styles.container}>
        <div className={styles.inputval}>
          <span>
            <Select
              styles={customStyles}
              options={options}
              isSearchable
              onChange={value}
              noOptionMassage={() => "No data available"}
              placeholder="Choose Subject"
            />
          </span>
          <span>
            <Select
              styles={customStyles}
              options={options}
              isSearchable
              onChange={value}
              noOptionMassage={() => "No data available"}
              placeholder="Choose Department"
            />
          </span>
          <span className={styles.btn}>
            <button className="butupp">See Student List</button>
          </span>
        </div>
      </div>
    </>
  );
}
export default Viewattendence;
