import React, { Component } from "react";
import AnimLayout from "../../../../views/App/AnimLayout";
import { Link, withRouter } from "react-router-dom";
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import Button from "react-validation/build/button";
import Textarea from "react-validation/build/textarea";
import CryptoJS from "crypto-js";

// auth service
import FB from "../../../../services/services.firebase";

// custom functions
import { ROUTES } from "../../../../global/ROUTES";
import { byPropKey } from "../../../../extensions/handling";
import ValidationType from "../../../../extensions/ValidationType";

const INITIAL_STATE = {
  email: "",
  password: "",
  enckey: "",
  error: null,
  orgdata: "",
  decdata: "",
  encdata: "",
  user: undefined
};

const AboutView = ({ history }) => (
  <AnimLayout>
    <div className="about-div">
      <h2>YSES - Your Secrets Encryption Service</h2>
      <GetDataForm history={history} />
    </div>
  </AnimLayout>
);

class GetDataForm extends Component {
  constructor(props) {
    super(props);
    this.state = { ...INITIAL_STATE };
  }

  doLogin = event => {
    event.preventDefault();

    const { email, password } = this.state;
    const { history } = this.props;

    FB.SignIn(email, password)
      .then(authUser => {
        this.setState(() => ({ ...INITIAL_STATE, user: authUser }));
      })
      .catch(error => {
        this.setState(byPropKey("error", error));
      });
  };

  fetchData = event => {
    const { enckey, user } = this.state;

    let _this = this;
    this.setState({
      ...this.state,
      encdata: "",
      decdata: "",
      error: null
    });

    const ref = FB.Database.collection("userEncryptedData").doc(user.uid);

    ref.get().then(doc => {
      if (doc.exists) {
        let docData = doc.data();

        // Decrypt
        let decText = CryptoJS.AES.decrypt(
          docData.encyptedData,
          enckey
        ).toString(CryptoJS.enc.Utf8);

        if (decText.length === 0) {
          _this.setState(
            byPropKey("error", { message: "You entered the WRONG KEY." })
          );
          return;
        }

        _this.setState({
          ..._this.state,
          decdata: decText,
          encdata: docData.encyptedData
        });
      } else {
        _this.setState(
          byPropKey("error", { message: "No encrypted data FOUND." })
        );
      }
    });
  };

  saveData = event => {
    const { enckey, orgdata, user } = this.state;

    this.setState({
      ...this.state,
      error: null
    });

    // Encrypt
    let encryptedData = CryptoJS.AES.encrypt(orgdata, enckey).toString();

    FB.Database.collection("userEncryptedData")
      .doc(user.uid)
      .set({
        encyptedData: encryptedData
      })
      .then(docRef => {
        alert("Your data is encrypted and saved SUCCESSFULLY.");
      })
      .catch(error => {
        this.setState(byPropKey("error", error));
      });

    this.setState({
      ...this.state,
      encdata: encryptedData
    });
  };

  updateKey = event => {};

  logout = event => {
    FB.SignOut();
    this.setState(INITIAL_STATE);
  };

  render() {
    //const isLoggedIn = true;
    const isLoggedIn = this.state.user !== undefined;
    const validEncKey = this.state.enckey && this.state.enckey.length >= 5;
    const validOrgData = this.state.orgdata && this.state.orgdata.length >= 10;
    const canSaveEncryptedData = validEncKey && validOrgData;

    return (
      <Form onSubmit={this.doLogin}>
        <div>
          {isLoggedIn ? (
            // AUTHENTIC section
            <div>
              <span>
                Welcome,{" "}
                {this.state.user !== undefined
                  ? this.state.user.email + " "
                  : "Guest "}
                <button type="button" className="button" onClick={this.logout}>
                  Log out
                </button>
              </span>

              <div id="div-actions">
                <label>
                  <Input
                    placeholder="Your encryption key"
                    name="enckey"
                    value={this.state.enckey}
                    onChange={event =>
                      this.setState(byPropKey("enckey", event.target.value))
                    }
                    minLength="5"
                    validations={[ValidationType.GT]}
                  />
                </label>

                <button
                  type="button"
                  className="button"
                  onClick={this.fetchData}
                  disabled={!validEncKey}
                >
                  Fetch Data
                </button>

                <button
                  type="button"
                  className="button"
                  onClick={this.saveData}
                  disabled={!canSaveEncryptedData}
                >
                  Save Data
                </button>
              </div>

              <label htmlFor="orgdata">
                Your private data:
                <br />
                <Textarea
                  name="decdata"
                  value={this.state.orgdata}
                  minLength="10"
                  validations={[ValidationType.GT]}
                  onChange={event =>
                    this.setState(byPropKey("orgdata", event.target.value))
                  }
                  spellCheck="false"
                />
              </label>

              {this.state.decdata && (
                <label htmlFor="decdata">
                  Decrypted data:
                  <br />
                  <Textarea
                    name="decdata"
                    value={this.state.decdata}
                    readOnly
                  />
                </label>
              )}

              {this.state.encdata && (
                <label htmlFor="encdata">
                  Encrypted data:
                  <br />
                  <Textarea
                    name="encdata"
                    value={this.state.encdata}
                    readOnly
                  />
                </label>
              )}
            </div>
          ) : (
            // GUEST section
            <div>
              <Button className="button button1">Login</Button>

              <br />
              <br />

              <label>
                <Input
                  autoFocus
                  placeholder="Your email address"
                  name="email"
                  validations={[ValidationType.REQUIRED, ValidationType.EMAIL]}
                  value={this.state.email}
                  onChange={event =>
                    this.setState(byPropKey("email", event.target.value))
                  }
                />
              </label>

              <label>
                <Input
                  placeholder="Your password"
                  type="password"
                  name="password"
                  minLength="8"
                  validations={[ValidationType.REQUIRED, ValidationType.GT]}
                  value={this.state.password}
                  onChange={event =>
                    this.setState(byPropKey("password", event.target.value))
                  }
                />
              </label>
            </div>
          )}

          {this.state.error && (
            <p className="p-error">{this.state.error.message}</p>
          )}
        </div>

        <br />

        <Link className="back" to={ROUTES.HOME}>
          Back
        </Link>
      </Form>
    );
  }
}

export default AboutView;
