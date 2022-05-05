import SignUp from '../../components/sign-up/sign-up';
import {signInWithGoogle, createUserDocFromAuth} from '../../utils/firebase/firebase.utils'

const loginGoogle = async () => {
  const {user} = await signInWithGoogle();
  const userDocRef = await createUserDocFromAuth(user)
  //console.log(user);
};


const SignIn = () => {
  return (
    <div>
      I'm the sign in page
      <button onClick={loginGoogle}> sign with GOOGLE</button>
      <SignUp />
    </div>
  );
};

export default SignIn;
