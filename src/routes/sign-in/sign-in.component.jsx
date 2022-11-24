import { signInWithGooglePopup } from "../../utils/firebase/firebase.utils";
import { Component } from "react";

class SignIn extends Component {
  state = {};

  async logGoogleUser() {
    const res = await signInWithGooglePopup();
    console.log(res);
  }

  render() {
    return (
      <div>
        <h1>SIGN-IN</h1>
        <button onClick={this.logGoogleUser}>
          Sign in with Google popup
        </button>
      </div>
    );
  }
}

export default SignIn;
