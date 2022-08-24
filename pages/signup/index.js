import React, { useReducer, useState } from "react";
import classes from "../../styles/signup.module.css";
import axios from "axios";

const index = () => {
  const [showError, setShowError] = useState(false);
  const formSubmitHandler = async (e) => {
    console.log("2111", state);
    e.preventDefault(); //prevents the form from submitting

    let isFormValid = true;

    for (const name in state) {
      const item = state[name];
      const { value } = item;
      const { hasError, error } = validateInput(name, value);
      if (hasError) {
        isFormValid = false;
      }
      if (name) {
        dispatch({
          type: "update_input",
          data: {
            name,
            value,
            hasError,
            error,
            touched: true,
            isFormValid,
          },
        });
      }
    }
    if (!isFormValid) {
      setShowError(true);
    } else {
      const body = {
        First_name: state.firstname.value,
        Last_name: state.lastname.value,
        Password: state.firstPassword.value,
        Email: state.email.value,
        Phone: state.phone.value,
        User_type: "Guest",
      };
      console.log("3777", body);
      const response = await axios.post(
        "http://192.168.1.18:8000/users/signup",
        body
      );
      console.log("3888", response);
    }

    // Hide the error message after 5 seconds
    setTimeout(() => {
      setShowError(false);
    }, 5000);
  };

  const validateInput = (name, value) => {
    let hasError = false,
      error = "";
    switch (name) {
      case "firstname":
        if (value.trim() === "") {
          hasError = true;
          error = "Name cannot be empty";
        } else if (!/^[a-zA-Z ]+$/.test(value)) {
          hasError = true;
          error = "Invalid Name. Avoid Special characters";
        } else {
          hasError = false;
          error = "";
        }
        break;
      case "lastname":
        if (value.trim() === "") {
          hasError = true;
          error = "Name cannot be empty";
        } else if (!/^[a-zA-Z ]+$/.test(value)) {
          hasError = true;
          error = "Invalid Name. Avoid Special characters";
        } else {
          hasError = false;
          error = "";
        }
        break;

      case "email":
        if (value.trim() === "") {
          hasError = true;
          error = "Email cannot be empty";
        } else if (
          !/^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/.test(
            value
          )
        ) {
          hasError = true;
          error = "Invalid Email";
        } else {
          hasError = false;
          error = "";
        }
        break;
      case "firstPassword":
        if (value.trim() === "") {
          hasError = true;
          error = "Password cannot be empty";
        } else if (value.trim().length < 8) {
          hasError = true;
          error = "Password must have at least 8 characters";
        } else {
          hasError = false;
          error = "";
        }
        break;
      case "secondPassword":
        if (value.trim() === "") {
          hasError = true;
          error = "Password cannot be empty";
        } else if (value.trim().length < 8) {
          hasError = true;
          error = "Password must have at least 8 characters";
        } else if (value.trim() !== state.firstPassword.value) {
          // console.log("115", state.firstPassword.value);
          hasError = true;
          error = "Passwords does not match";
        } else {
          hasError = false;
          error = "";
        }
        break;
      case "phone":
        if (value.trim() === "") {
          hasError = true;
          error = "Mobile cannot be empty";
        } else if (!/^[0-9]{10}$/.test(value)) {
          hasError = true;
          error = "Invalid Mobile Number. Use 10 digits only";
        } else {
          hasError = false;
          error = "";
        }
        break;
      default:
        break;
    }

    return { hasError, error };
  };

  const onFocusOut = (name, value, dispatch, state) => {
    const { hasError, error } = validateInput(name, value);

    let isFormValid = true;
    for (const key in state) {
      const item = state[key];
      if (key === name && hasError) {
        isFormValid = false;
        break;
      } else if (key !== name && item.hasError) {
        isFormValid = false;
        break;
      }
    }

    dispatch({
      type: "update_input",
      data: { name, value, hasError, error, touched: true, isFormValid },
    });
  };
  const onInputChange = (name, value, dispatch, state) => {
    const { hasError, error } = validateInput(name, value);

    let isFormValid = true;

    for (const key in state) {
      const item = state[key];
      // Check if the current field has error
      if (key === name && hasError) {
        isFormValid = false;
        break;
      } else if (key !== name && item.hasError) {
        // Check if any other field has error
        isFormValid = false;
        break;
      }
    }
    dispatch({
      type: "update_input",
      data: {
        name,
        value,
        hasError: false,
        error: "",
        touched: false,
        isFormValid: true,
      },
    });
  };
  const initialValues = {
    firstname: { value: "", touched: false, hasError: true, error: "" },
    lastname: { value: "", touched: false, hasError: true, error: "" },
    email: { value: "", touched: false, hasError: true, error: "" },
    firstPassword: { value: "", touched: false, hasError: true, error: "" },
    secondPassword: { value: "", touched: false, hasError: true, error: "" },
    phone: { value: "", touched: false, hasError: true, error: "" },
  };
  const reducer = (state, action) => {
    switch (action.type) {
      case "update_input":
        const { name, value, hasError, error, touched, isFormValid } =
          action.data;
        return {
          ...state,
          [name]: { ...state[name], value, hasError, error, touched },
          isFormValid,
        };
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(reducer, initialValues);

  return (
    <>
      <section className={classes.formSignup}>
        <form className={classes.form} onSubmit={(e) => formSubmitHandler(e)}>
          <div>
            <label className={classes.label} htmlFor="firstname">
              First Name:{" "}
            </label>
            <input
              type="text"
              name="firstname"
              value={state.firstname.value}
              onChange={(e) => {
                onInputChange("firstname", e.target.value, dispatch, state);
              }}
              onBlur={(e) => {
                onFocusOut("firstname", e.target.value, dispatch, state);
              }}
            />
            {state.firstname.touched && state.firstname.hasError && (
              <div className={classes.errorValidation}>
                {state.firstname.error}
              </div>
            )}
          </div>
          <div>
            <label className={classes.label} htmlFor="lastname">
              Last Name:{" "}
            </label>
            <input
              type="text"
              name="lastname"
              value={state.lastname.value}
              onChange={(e) => {
                onInputChange("lastname", e.target.value, dispatch, state);
              }}
              onBlur={(e) => {
                onFocusOut("lastname", e.target.value, dispatch, state);
              }}
            />
            {state.lastname.touched && state.lastname.hasError && (
              <div className={classes.errorValidation}>
                {state.lastname.error}
              </div>
            )}
          </div>
          <div>
            <label className={classes.label} htmlFor="first-password">
              Password:{" "}
            </label>
            <input
              type="password"
              name="firstPassword"
              value={state.firstPassword.value}
              onChange={(e) => {
                onInputChange("firstPassword", e.target.value, dispatch, state);
              }}
              onBlur={(e) => {
                onFocusOut("firstPassword", e.target.value, dispatch, state);
              }}
            />
            {state.firstPassword.touched && state.firstPassword.hasError && (
              <div className={classes.errorValidation}>
                {state.firstPassword.error}
              </div>
            )}
          </div>

          <div>
            <label className={classes.label} htmlFor="second-password">
              Confirm Password:{" "}
            </label>
            <input
              type="password"
              name="secondPassword"
              value={state.secondPassword.value}
              onChange={(e) => {
                onInputChange(
                  "secondPassword",
                  e.target.value,
                  dispatch,
                  state
                );
              }}
              onBlur={(e) => {
                onFocusOut("secondPassword", e.target.value, dispatch, state);
              }}
            />
            {state.secondPassword.touched && state.secondPassword.hasError && (
              <div className={classes.errorValidation}>
                {state.secondPassword.error}
              </div>
            )}
          </div>
          <div>
            <label className={classes.label} htmlFor="email">
              Email:{" "}
            </label>
            <input
              type="email"
              name="email"
              value={state.email.value}
              onChange={(e) => {
                onInputChange("email", e.target.value, dispatch, state);
              }}
              onBlur={(e) => {
                onFocusOut("email", e.target.value, dispatch, state);
              }}
            />
            {state.email.touched && state.email.hasError && (
              <div className={classes.errorValidation}>{state.email.error}</div>
            )}
          </div>
          <div>
            <label className={classes.label} htmlFor="email">
              Phone:{" "}
            </label>
            <input
              type="text"
              name="phone"
              value={state.phone.value}
              onChange={(e) => {
                onInputChange("phone", e.target.value, dispatch, state);
              }}
              onBlur={(e) => {
                onFocusOut("phone", e.target.value, dispatch, state);
              }}
            />
            {state.phone.touched && state.phone.hasError && (
              <div className={classes.errorValidation}>{state.phone.error}</div>
            )}
          </div>

          <button type="submit">Submit</button>
        </form>

        {showError && !state.isFormValid && (
          <div className={classes.formError}>
            Please fill all the fields correctly
          </div>
        )}
      </section>
    </>
  );
};

export default index;
