import React from "react";
import Presentation from "../Presentation";
import { setLogoIsShowing } from "../../slices/rootSlice";
import BackgroundContainer from "../BackgroundContainer";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { postSignup } from "../../asyncActions/postSignup";
import { TextField, IconButton } from "@material-ui/core";
import { Visibility, VisibilityOff, AlternateEmail } from "@material-ui/icons";
import TextFieldModifiedUsername from "../TextFieldModifiedUsername";
import TextFieldModifiedPassword from "../TextFieldModifiedPassword";
import TextFieldModifiedEmail from "../TextFieldModifiedEmail";
import { onSubmitForm } from "../../slices/formSlice";
import { checkIfUserExists } from "../../asyncActions/checkIfUserExists";

function Signup() {
  const dispatch = useDispatch();
  const data = useSelector((data) => data.formReducer);
  const { errorExistsUsername, errorExistsEmail, password } = data;
  return (
    <div style={{ display: "flex", flexDirection: "column", height: "100%" }}>
      <Presentation
        mgTop={"-1.1rem"}
        title="Registrar-se"
        desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morboa."
      />
      <BackgroundContainer mgTop="2.7rem" minHeight="38.7rem">
        <form
          onSubmit={(e) => {
            console.log(
              e.target[0].value,
              e.target[2].value,
              e.target[4].value
            );
            dispatch(onSubmitForm());
            dispatch(checkIfUserExists(e.target[0].value));
            dispatch(
              postSignup({
                username: e.target[0].value,
                email: e.target[2].value,
                password: e.target[4].value,
              })
            );
            e.preventDefault();
          }}
          className="App__form"
        >
          <TextFieldModifiedUsername />
          <TextFieldModifiedEmail />
          <TextFieldModifiedPassword />

          <button
            // disabled={
            //   errorExistsEmail.errorExists ||
            //   errorExistsUsername.errorExists ||
            //   password.value.length < 8
            // }
            className="App__form--button"
            style={{ marginTop: "2.8rem", width: "100%" }}
            type="submit"
          >
            Registrar
          </button>
        </form>
      </BackgroundContainer>
    </div>
  );
}

export default Signup;