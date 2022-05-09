import { useState } from "react";
import FormInput from "../formInput/formInput";
import CustomButton from "../button/button";
import {
  createUserFromEmailPassword,
  createUserDocFromAuth,
} from "../../utils/firebase/firebase.utils";

import "./sign-up.styles.scss";

const SignUp = () => {
  const formFieldDefault = {
    displayName: "",
    email: "",
    password: "",
    confirmPassword: "",
  };

  const [formField, setFormField] = useState(formFieldDefault);
  const { displayName, email, password, confirmPassword } = formField;

  //clear form
  const clearForm = () => {
    setFormField(formFieldDefault);
  };

  // console.log(formField);
  const fieldSubmit = async (event) => {
    event.preventDefault();

    if (password !== confirmPassword) {
      alert("password do not match");
      return;
    }

    try {
      const { user } = await createUserFromEmailPassword(email, password);
      console.log(user);
      await createUserDocFromAuth(user, { displayName });
      clearForm();
    } catch (error) {
      if (error.code == "auth/email-already-in-use") {
        alert("this email is already used");
        clearForm();
      } else {
        console.log(error.message);
      }
    }
  };

  const fieldChange = (event) => {
    const { name, value } = event.target;
    setFormField({ ...formField, [name]: value });
  };

  return (
    <div className="sign-up-container">
      <h1>Sign Up</h1>
      <span> do no have an account? Sign up </span>
      <form onSubmit={fieldSubmit}>
        <FormInput
          label="name"
          required
          ype="text"
          onChange={fieldChange}
          name="displayName"
          value={displayName}
        />

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

        <FormInput
          label="confirm password"
          required
          type="password"
          onChange={fieldChange}
          name="confirmPassword"
          value={confirmPassword}
        />

        <button type="submit"> connnexion</button>
        <CustomButton buttonType='inverted' type="submit">
          Sign up
        </CustomButton>
      </form>
    </div>
  );
};

export default SignUp;
