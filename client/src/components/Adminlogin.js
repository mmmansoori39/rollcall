import React, { useState } from "react";
import PersonIcon from "@mui/icons-material/Person";
import LockIcon from "@mui/icons-material/Lock";
import styles from "../style/login.module.css";
import account from "../assets/cr.jpg"
import { NavLink, useNavigate } from "react-router-dom";
import { Message, useToaster, Button, ButtonToolbar } from "rsuite";
import CircularProgress from "@mui/material/CircularProgress";

function Adminlogin() {
  const [data, setdata] = useState({
    adminEmail: "",
    password: "",
  });
  const [load, setLoad] = useState(false);
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
    e.preventDefault();
    const { adminEmail, password } = data;
    setLoad(true);

    const res = await fetch("/adminlogin", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        adminEmail,
        password,
      }),
    });
    const resdata = await res.json();
    if (res.status === 400 || !data) {
      errorClick();
      setLoad(false);
    }
    if (res.status === 401) {
      aerrorClick();
      setLoad(false);
    }
    if (res.status === 402) {
      berrorClick();
      setLoad(false);
    }
    if (res.status === 200) {
      successClick();
      navigate("/admin");
      setLoad(false);
    }
  };
  return (
    <>
      <div className={styles.container}>
        <div  className={styles.upd}></div>
        <h1>Admin Login</h1>
        <div className={styles.studentIcon}>
          <span>
            <img src={account} alt="student icon" />
          </span>
        </div>
        <form method="POST">
          <div className={styles.inputval}>
            <span>
              <PersonIcon sx={{ fontSize: "1.3em" }} className={styles.icon} />
              <input
                type="text"
                placeholder="Username"
                name="data.adminEmail"
                onChange={inputval}
              />
            </span>
            <span>
              <LockIcon sx={{ fontSize: "1em" }} className={styles.icon} />
              <input
                type="password"
                placeholder="Password"
                name="data.password"
                onChange={inputval}
              />
            </span>
          </div>
          <br />
          <div>
            {load === false ? (
              <ButtonToolbar>
                <Button
                  className={styles.login}
                  color="cyan"
                  appearance="primary"
                  onClick={postdata}
                >
                  Login
                </Button>
              </ButtonToolbar>
            ) : (
              loader
            )}
            <h4 className={styles.forgot}>
              Forget password <span style={{ color: "#19A7CE" }}>?</span>
            </h4>
          </div>
        </form>
      </div>
    </>
  );
}
export default Adminlogin;
