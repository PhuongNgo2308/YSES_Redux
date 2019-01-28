// third parties
import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import Button from "react-validation/build/button";

// auth service
import FB from "../../../../services/services.firebase";

// custom
import { ROUTES } from "../../../../global/ROUTES";
import ValidationType from "../../../../extensions/ValidationType";
import { byPropKey } from "../../../../extensions/handling";
import AnimLayout from "../../../../views/App/AnimLayout";

const INITIAL_STATE = {
  username: "",
  email: "",
  password1: "",
  password2: "",
  error: null
};

const SignUpView = ({ history }) => (
  <AnimLayout>
    <div className="div-signup">
      <h2>Sign Up</h2>
      <SignUpForm history={history} />
    </div>
  </AnimLayout>
);

const SignUpLink = () => (
  <p>
    {" "}
    Don't have an account? <Link to={ROUTES.SIGN_UP}>Sign Up</Link>
  </p>
);

class SignUpForm extends Component {
  constructor(props) {
    super(props);
    this.state = { ...INITIAL_STATE };
  }

  handleSubmit = event => {
    event.preventDefault();

    const { username, email, password1 } = this.state;
    const { history } = this.props;

    FB.CreateUser(email, password1)
      .then(authUser => {
        this.setState(() => ({ ...INITIAL_STATE }));
        history.push(ROUTES.HOME);
      })
      .catch(error => {
        this.setState(byPropKey("error", error));
      });
  };

  render() {
    return (
      <div className="div-signupform">
        <Form onSubmit={this.handleSubmit.bind(this)}>
          <label>
            Username*
            <Input
              autoFocus
              placeholder="Your username"
              name="username"
              validations={[ValidationType.REQUIRED]}
              value={this.state.username}
              onChange={event =>
                this.setState(byPropKey("username", event.target.value))
              }
            />
          </label>

          <label>
            Email*
            <Input
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
            Password*
            <Input
              placeholder="Your password"
              type="password"
              name="password1"
              minLength="8"
              validations={[ValidationType.REQUIRED, ValidationType.GT]}
              value={this.state.password1}
              onChange={event =>
                this.setState(byPropKey("password1", event.target.value))
              }
            />
          </label>

          <label>
            Confirm Password*
            <Input
              placeholder="Confirm your password"
              type="password"
              name="password2"
              minLength="8"
              validations={[
                ValidationType.REQUIRED,
                ValidationType.GT,
                ValidationType.MAPPED
              ]}
              refvalue={this.state.password1}
              reffieldname="the previous password"
              value={this.state.password2}
              onChange={event =>
                this.setState(byPropKey("password2", event.target.value))
              }
            />
          </label>

          <div>
            <Button className="button">Submit</Button>

            <Link className="back" to={ROUTES.HOME}>
              Back
            </Link>
          </div>

          {this.state.error && (
            <p className="p-error">{this.state.error.message}</p>
          )}
        </Form>
      </div>
    );
  }
}

export default withRouter(SignUpView);
export { SignUpForm, SignUpLink };
