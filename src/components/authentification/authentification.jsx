import SignUp from "../sign-up/sign-up";
import SignIn from "../sign-in/sign-in";

import './authentification.styles.scss';


const Authentification = () => {
  return (
    <div className="authentification-container">
      I'm the sign in page
      <SignIn />
      <SignUp />
    </div>
  );
};

export default Authentification;
