import {signInWithGoogle, createUserDocFromGoogleAuth} from '../../utils/firebase/firebase.utils'

const loginGoogle = async () => {
  const {user} = await signInWithGoogle();
  const userDocRef = await createUserDocFromGoogleAuth(user)
  //console.log(user);
};


const SignIn = () => {
  return (
    <div>
      I'm the sign in page
      <button onClick={loginGoogle}> ssign with GOOGLE</button>
    </div>
  );
};

export default SignIn;
