import React, { useRef, useState, useReducer } from "react";
import classes from "../../styles/signup.module.css";
const index = () => {
  const [firstNameErrr, setFirstNameErrr] = useState();
  const [lastNameError, setLastNameError] = useState();
  const [emailError, setEmailError] = useState();
  const [firstPassError, setFirstPassError] = useState();
  const [secondPassError, setSecondPassError] = useState();
  const [phoneError, setPhoneError] = useState();
  const [firstName, setFname] = useState();
  const [lastName, setLname] = useState();
  const [emailCurrent, setCrrEmail] = useState();
  const [firstPass, setFpass] = useState();
  const [secondPass, setSpass] = useState();
  const [phoneNum, setPhonenum] = useState();

  const fristname = useRef(null);
  const lastname = useRef(null);
  const firstPassword = useRef(null);
  const secondPassword = useRef(null);
  const email = useRef(null);
  const phone = useRef(null);
  const submitForm = (e) => {
    e.preventDefault();
    checkInputs();
  };
  function isEmail(emailValue) {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
      emailValue
    );
  }

  function checkInputs() {
    const firstnameValue = fristname.current.value;
    console.log("30", firstnameValue);
    const lastnameValue = lastname.current.value;
    const emailValue = email.current.value;
    const passwordValue = firstPassword.current.value;
    const password2Value = secondPassword.current.value;
    const phoneValue = phone.current.value;

    if (firstnameValue === "") {
      setFirstNameErrr("First Name cannot be blank");
    } else {
      setFname(firstnameValue);
    }

    if (lastnameValue === "") {
      setLastNameError("Last Nmae cannot be blank");
    } else {
      setLname(lastnameValue);
    }
    if (emailValue === "") {
      setEmailError("Email cannot be blank");
    } else if (!isEmail(emailValue)) {
      setEmailError("Not a valid email");
    } else {
      setCrrEmail(emailValue);
    }

    if (passwordValue === "") {
      setFirstPassError("Password cannot be blank");
    } else {
      setFpass(passwordValue);
    }
    if (phoneValue === "") {
      setPhoneError("Phone Number cannot be blank");
    } else {
      setPhonenum(phoneValue);
    }

    if (password2Value === "") {
      setSecondPassError("Password2 cannot be blank");
    } else if (passwordValue !== password2Value) {
      setSecondPassError("Passwords does not match");
    } else {
      setSpass(password2Value);
    }
  }

  const values = {
    firstname: firstName,
    lastName: lastName,
    email: emailCurrent,
    fpass: firstPass,
    sPass: secondPass,
    phone: phoneNum,
  };

  console.log("2111", values);

  return (
    <>
      <section className={classes.formSignup}>
        <form id="form" className={classes.form}>
          <div>
            <label className={classes.label} htmlFor="firstname">
              First Name:{" "}
            </label>
            <input
              ref={fristname}
              type="text"
              name="firstname"
              id="firstname"
            />
            <span className={classes.errorValidation}>
              {firstName ? "" : firstNameErrr}
            </span>
          </div>
          <div>
            <label className={classes.label} htmlFor="lastname">
              Last Name:{" "}
            </label>
            <input
              ref={lastname}
              type="text"
              name="lastname"
              id="lastname"
              required
            />
            <span className={classes.errorValidation}>
              {lastName ? "" : lastNameError}
            </span>
          </div>
          <div>
            <label className={classes.label} htmlFor="first-password">
              Password:{" "}
            </label>
            <input
              ref={firstPassword}
              type="password"
              name="firstPassword"
              id="first-password"
              required
            />
            <span className={classes.errorValidation}>
              {firstPass ? "" : firstPassError}
            </span>
          </div>

          <div>
            <label className={classes.label} htmlFor="second-password">
              Confirm Password:{" "}
            </label>
            <input
              ref={secondPassword}
              type="password"
              name="secondPassword"
              id="second-password"
              required
            />
            <span className={classes.errorValidation}>
              {secondPass ? "" : secondPassError}
            </span>
          </div>
          <div>
            <label className={classes.label} htmlFor="email">
              Email:{" "}
            </label>
            <input ref={email} type="email" name="email" id="email" required />
            <span className={classes.errorValidation}>
              {emailCurrent ? "" : emailError}
            </span>
          </div>
          <div>
            <label className={classes.label} htmlFor="email">
              Phone:{" "}
            </label>
            <input ref={phone} type="text" name="phone" id="phone" required />
            <span className={classes.errorValidation}>
              {phoneNum ? "" : phoneError}
            </span>
          </div>

          <button type="submit" onClick={submitForm}>
            Submit
          </button>
        </form>
      </section>
    </>
  );
};

export default index;
