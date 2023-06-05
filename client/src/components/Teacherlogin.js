import React, { useState } from "react";
import PersonIcon from "@mui/icons-material/Person";
import LockIcon from "@mui/icons-material/Lock";
import styles from "../style/login.module.css";
import account from "../assets/cr.jpg";
import Accountteacher from "./Accountteacher";
import { NavLink, useNavigate } from "react-router-dom";
import { Message, useToaster, Button, ButtonToolbar } from "rsuite";
import CircularProgress from "@mui/material/CircularProgress";

function Teacherlogin() {
  const [data, setData] = useState({
    userId: "",
    password: "",
  });

  const [load, setLoad]= useState(false)
  const navigate = useNavigate();
  const toaster = useToaster();
  const placement = "topEnd";
  const success = (
    <Message showIcon type="success" header="Success" closable>
      Login Successfull, Welcome to Home Page
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
      Password is invalid, please try again
    </Message>
  );
  const cerror = (
    <Message showIcon type="error" header="Error" closable>
      Your id is not found, please create account
    </Message>
  );
  const loader = <CircularProgress color="secondary" />;
  const successClick = () =>
    toaster.push(success, { placement, duration: 5000 });
  const errorClick = () => toaster.push(error, { placement, duration: 5000 });
  const aerrorClick = () => toaster.push(aerror, { placement, duration: 5000 });
  const berrorClick = () => toaster.push(berror, { placement, duration: 5000 });
  const cerrorClick = () => toaster.push(berror, { placement, duration: 5000 });

  const inputval = (e) => {
    let name = e.target.name.substring(5);
    let value = e.target.value;
    setData((preval) => {
      return {
        ...preval,
        [name]: value,
      };
    });
    console.log(data);
  };

  const postdata = async (e) => {
    e.preventDefault();
    setLoad(true);
    const { userId, password } = data;

    const res = await fetch("/teacherlogin", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        userId,
        password,
      }),
    });
    const resdata = await res.json();
    if (res.status === 401 || !data) {
      aerrorClick();
      setLoad(false);
    } else if (res.status === 402) {
      berrorClick();
      setLoad(false);
    } else if (res.status === 403) {
      cerrorClick();
      setLoad(false);
    } else if (res.status === 200) {
      successClick();
      setLoad(false);
      navigate("/teacher");
    } else {
      errorClick();
      setLoad(false);
    }
  };

  return (
    <>
      <form method="POST">
        <div className={styles.container}>
          <div className={styles.upd}></div>
          <h1>Teacher Login</h1>
          <div className={styles.studentIcon}>
            <span>
              <NavLink to="/teacheraccountcreate">
                <img src={account} alt="student icon" />
              </NavLink>
            </span>
          </div>
          <div className={styles.inputval}>
            <span>
              <PersonIcon sx={{ fontSize: "1.3em" }} className={styles.icon} />
              <input
                type="text"
                name="data.userId"
                onChange={inputval}
                placeholder="User Id"
              />
            </span>
            <span>
              <LockIcon sx={{ fontSize: "1em" }} className={styles.icon} />
              <input
                type="password"
                name="data.password"
                onChange={inputval}
                placeholder="Password"
              />
            </span>
            {/* <FormControlLabel control={<Checkbox defaultChecked />} label="Remember me" /> */}
          </div>
          <br />
          <div>
            {load === false ? (
              <button onClick={postdata} className={styles.login}>
                Login
              </button>
            ) : (
              loader
            )}
            <h4 className={styles.forgot}>
              Forget password <span style={{ color: "#1656f0" }}>?</span>
            </h4>
          </div>
        </div>
      </form>
    </>
  );
}
export default Teacherlogin;
