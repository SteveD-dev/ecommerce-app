import { useState } from "react";
import {
  createUserFromEmailPassword,
  createUserDocFromAuth,
} from "../../utils/firebase/firebase.utils";

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
      }else{
        console.log(error.message);
      }
      
    }
  };

  const fieldChange = (event) => {
    const { name, value } = event.target;
    setFormField({ ...formField, [name]: value });
  };

  return (
    <div>
      <h1> do no have an account? Sign up </h1>
      <form onSubmit={fieldSubmit}>
        <label> Name</label>
        <input
          required
          ype="text"
          onChange={fieldChange}
          name="displayName"
          value={displayName}
        />

        <label> Email</label>
        <input
          required
          type="email"
          onChange={fieldChange}
          name="email"
          value={email}
        />

        <label> Password</label>
        <input
          required
          type="password"
          onChange={fieldChange}
          name="password"
          value={password}
        />

        <label> Confirm Password</label>
        <input
          required
          type="password"
          onChange={fieldChange}
          name="confirmPassword"
          value={confirmPassword}
        />

        <button type="submit"> connnexion</button>
      </form>
    </div>
  );
};

export default SignUp;
