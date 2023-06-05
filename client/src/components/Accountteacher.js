import React, { useState } from "react";
import PersonIcon from "@mui/icons-material/Person";
import LockIcon from "@mui/icons-material/Lock";
import styles from "../style/login.module.css";
import logimg from "../assets/logimg.jpg";
import OtpInput from "react-otp-input";
import { NavLink, useNavigate } from "react-router-dom";
import { Message, useToaster, Button, ButtonToolbar } from "rsuite";
import CircularProgress from "@mui/material/CircularProgress";

function Accountteacher() {
  const [verify, setVerify] = useState(false);
  const [verifyEbtn, setVerifyebtn] = useState(true);
  const [verifyOtp, setVerifyOtp] = useState(false);
  const [einp, setEinp] = useState(true);
  const [otpbtn, setOtpbtn] = useState(false);
  const [otpinp, setOtpinp] = useState(false);
  const [userinp, setUserinp] = useState(false);
  const [userbtn, setUserbtn] = useState(false);

  const [otp, setOtp] = useState("");
  const [emailId, setEmailId] = useState("");
  const [data, setdata] = useState({
    userId: "",
    password: "",
    cpassword: "",
  });

  const [load, setLoad] = useState(false);
  const [loada, setLoada] = useState(false);
  const [loadb, setLoadb] = useState(false);
  const [loadc, setLoadc] = useState(false);
  const navigate = useNavigate();
  const toaster = useToaster();
  const placement = "topEnd";
  const success = (
    <Message showIcon type="success" header="Success" closable>
      Your email Id has been verifeid, send OTP...
    </Message>
  );
  const successotp = (
    <Message showIcon type="success" header="Success" closable>
      OTP has been sent, Check your register Email Id
    </Message>
  );
  const successotpvery = (
    <Message showIcon type="success" header="Success" closable>
      OTP is matched, Create your User Id
    </Message>
  );
  const successaccount = (
    <Message showIcon type="success" header="Success" closable>
      Account has been created, Please do login
    </Message>
  );
  const error = (
    <Message showIcon type="error" header="Error" closable>
      Something is wrong , Try again .......
    </Message>
  );
  const aerror = (
    <Message showIcon type="error" header="Error" closable>
      Please Enter you Email Id !!
    </Message>
  );
  const berror = (
    <Message showIcon type="error" header="Error" closable>
      Your email Id is doesn't exist..
    </Message>
  );
  const cerror = (
    <Message showIcon type="error" header="Error" closable>
      OTP is not matched, Try again
    </Message>
  );
  const derror = (
    <Message showIcon type="error" header="Error" closable>
      OTP has expired, Please resend OTP
    </Message>
  );
  const loader = <CircularProgress color="secondary" />;
  const successClick = () =>
    toaster.push(success, { placement, duration: 5000 });
  const successotpClick = () =>
    toaster.push(successotp, { placement, duration: 5000 });
  const successotpveryClick = () =>
    toaster.push(successotpvery, { placement, duration: 5000 });
  const successaccountClick = () =>
    toaster.push(successaccount, { placement, duration: 5000 });
  const errorClick = () => toaster.push(error, { placement, duration: 5000 });
  const aerrorClick = () => toaster.push(aerror, { placement, duration: 5000 });
  const berrorClick = () => toaster.push(berror, { placement, duration: 5000 });
  const cerrorClick = () => toaster.push(cerror, { placement, duration: 5000 });
  const derrorClick = () => toaster.push(derror, { placement, duration: 5000 });

  const sendEmail = async () => {
    try {
      setLoad(true);
      const res = await fetch("/verifyemailteacher", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          emailId,
        }),
      });
      const resdata = await res.json();
      console.log(resdata);
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
        setLoad(false);
        setVerify(true);
        setEinp(false);
        setVerify(true);
        setOtpbtn(true);
        setVerifyebtn(false);
      }
    } catch (error) {
      errorClick();
      setLoad(false);
    }
  };

  const sendOtp = async () => {
    try {
      setLoada(true);
      const res = await fetch("/sendotpteacher", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          emailId,
        }),
      });
      const resdata = await res.json();
      console.log(resdata);
      if (res.status === 401) {
        aerrorClick();
        setLoadb(false);
      }
      if (res.status === 402) {
        berrorClick();
        setLoadb(false);
      }
      if (res.status === 200) {
        successotpClick();
        setLoada(false);
        setVerify(false);
        setEinp(false);
        setOtpbtn(false);
        setVerifyebtn(false);
        setOtpinp(true);
        setVerifyOtp(true);
      }
    } catch (error) {
      errorClick();
      setLoada(false);
    }
  };

  const checkOtp = async () => {
    try {
      setLoadb(true);
      const res = await fetch("/checkotpteacher", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          emailId,
          otp,
        }),
      });
      const resdata = await res.json();
      console.log(resdata);
      if (res.status === 401) {
        derrorClick();
        setLoada(false);
      }
      if (res.status === 402) {
        cerrorClick();
        setLoadb(false);
      }
      if (res.status === 200) {
        successotpveryClick();
        setLoadb(false);
        setVerify(false);
        setEinp(false);
        setOtpbtn(false);
        setVerifyebtn(false);
        setOtpinp(false);
        setVerifyOtp(false);
        setUserbtn(true);
        setUserinp(true);
      }
    } catch (error) {
      errorClick();
      setLoadb(false);
    }
  };

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

  const createid = async () => {
    try {
      setLoadc(true);
      const { userId, password, cpassword } = data;
      if (password == cpassword) {
        const res = await fetch("/teachercreateaccount", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            emailId,
            userId,
            password,
          }),
        });
        const resdata = await res.json();
        console.log(resdata);
        if (res.status === 401) {
          derrorClick();
          setLoada(false);
        }
        if (res.status === 402) {
          cerrorClick();
          setLoadb(false);
        }
        if (res.status === 200) {
          successaccountClick()
          setLoadc(false);
          setVerify(false);
          setEinp(false);
          setOtpbtn(false);
          setVerifyebtn(false);
          setOtpinp(false);
          setVerifyOtp(false);
          setUserbtn(true);
          setUserinp(true);
          navigate('/teacherlogin')
        }
      }else{
        console.log("password not matched")
      }
    } catch (error) {
      errorClick();
      setLoadb(false);
    }
  };

  return (
    <>
      <div className={styles.container}>
        <div className={styles.upd}></div>
        <h1>Create User ID</h1>
        <div className={styles.studentIcon}>
          <span>
          <NavLink to="/teacherlogin">
          <img src={logimg} style={{ width: "115px" }} alt="student icon" />

          </NavLink>
          </span>
        </div>
        <div className={styles.inputval}>
          {einp && (
            <span>
              <PersonIcon sx={{ fontSize: "1.3em" }} className={styles.icon} />
              <input
                type="email"
                onChange={(e) => {
                  setEmailId(e.target.value);
                }}
                placeholder="Email Id"
              />
            </span>
          )}
          {userinp && (
            <>
              <span>
                <PersonIcon
                  sx={{ fontSize: "1.3em" }}
                  className={styles.icon}
                />
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
                  type="text"
                  name="data.password"
                  onChange={inputval}
                  placeholder="Password"
                />
              </span>
              <span>
                <LockIcon sx={{ fontSize: "1em" }} className={styles.icon} />
                <input
                  type="password"
                  name="data.cpassword"
                  onChange={inputval}
                  placeholder="Confirm password"
                />
              </span>
            </>
          )}
          {otpinp && (
            <OtpInput
              value={otp}
              onChange={setOtp}
              numInputs={4}
              inputStyle={{
                width: "35px",
                height: "45px",
                border: "2px solid #19A7CE",
                borderRadius: "10px",
                marginBottom: "15px",
                marginTop: "15px",
              }}
              renderSeparator={
                <span
                  style={{ width: "10px", height: "10px", border: "none" }}
                ></span>
              }
              renderInput={(props) => (
                <input style={{ width: "20px" }} {...props} />
              )}
            />
          )}
          {verify && (
            <>
              <h3>Verified</h3>
              <p>Send OTP on you Gmail Account</p>
            </>
          )}

          {/* <FormControlLabel control={<Checkbox defaultChecked />} label="Remember me" /> */}
        </div>
        <br />
        <div>
          {load === false
            ? verifyEbtn && (
                <button onClick={sendEmail} className={styles.login}>
                  Verify Email
                </button>
              )
            : loader}
          {loada === false
            ? otpbtn && (
                <button onClick={sendOtp} className={styles.login}>
                  Send Otp
                </button>
              )
            : loader}
          {loadb === false
            ? verifyOtp && (
                <button onClick={checkOtp} className={styles.login}>
                  Verify OTP
                </button>
              )
            : loader}
          {loadc === false
            ? userbtn && (
                <button onClick={createid} className={styles.login}>Create account</button>
              )
            : loader}
          {otpbtn ||
            (verifyOtp && <h4 className={styles.forgot}>Resend OTP</h4>)}
        </div>
      </div>
    </>
  );
}
export default Accountteacher;