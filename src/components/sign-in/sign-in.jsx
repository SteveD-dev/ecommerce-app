import { useState } from "react";
import FormInput from "../formInput/formInput";
import CustomButton from "../button/button";
import {
  signInWithGoogle,
  signInUserFromEmailPassword,
  createUserDocFromAuth,
} from "../../utils/firebase/firebase.utils";

import "./sign-in.styles.scss";

const SignIn = () => {
  const formFieldDefault = {
    email: "",
    password: "",
  };

  const [formField, setFormField] = useState(formFieldDefault);
  const { email, password } = formField;

  //clear form
  const clearForm = () => {
    setFormField(formFieldDefault);
  };

  //gooogle sidn in
  const loginGoogle = async () => {
    const { user } = await signInWithGoogle();
    const userDocRef = await createUserDocFromAuth(user);
    console.log(user);
  };

  // console.log(formField);
  const fieldSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await signInUserFromEmailPassword(email, password);
      console.log(response);
      clearForm();
    } catch (error) {
      switch (error.code) {
        case "auth/wrong-password":
          alert("passwword incorrect for this email");
          break;
        case "auth/user-not-found":
          alert("no user associate with this email");
          break;
        default:
          console.log(error);
      }
      console.log(error.message);
    }
  };

  const fieldChange = (event) => {
    const { name, value } = event.target;
    setFormField({ ...formField, [name]: value });
  };

  return (
    <div className="sign-in-container">
      <h1>Sign In</h1>
      <span> Already havean account? Sign in </span>
      <form onSubmit={fieldSubmit}>
        <FormInput
          label="Email"
          required
          type="email"
          onChange={fieldChange}
          name="email"
          value={email}
        />

        <FormInput
          label="password"
          required
          type="password"
          onChange={fieldChange}
          name="password"
          value={password}
        />

        <div className="buttons-container">
          <CustomButton type="submit">Sign In</CustomButton>
          <CustomButton type="button" buttonType="google" onClick={loginGoogle}>
            Google
          </CustomButton>
        </div>
      </form>
    </div>
  );
};

export default SignIn;
