// THIRD PARTIES IMPORT
import React, { Component } from "react";
import { connect } from "react-redux";
import classNames from "classnames";

import {
  IconButton,
  InputAdornment,
  TextField,
  Typography,
  Button,
  Paper,
  Avatar,
  FormControl
} from "@material-ui/core";

import CssBaseline from "@material-ui/core/CssBaseline";
import { withStyles } from "@material-ui/core/styles";
import {
  Visibility,
  VisibilityOff,
  Delete,
  PlayArrow,
  LockOutlined
} from "@material-ui/icons";

// import DeleteIcon from "@material-ui/icons/Delete";
// import PlayArrowIcon from "@material-ui/icons/PlayArrow";
// import LockOutlinedIcon from "@material-ui/icons/LockOutlined";

// INTERNAL IMPORT
import styles from "../style/login";
import { beginLogin, clearAll } from "../actions/loginActions";
import * as API from "../services/fb.services";

class Login extends Component {
  state = {
    email: this.props.email || "",
    password: this.props.password || "",
    isShowPassword: this.props.isShowPassword,
    classes: styles
  };
  emailInput = React.createRef();

  handleSubmit = e => {
    const { email, password, isShowPassword } = this.state;

    this.props.beginLogin(email, password, isShowPassword);

    // API.signIn;
    // FB.SignIn(email, password)
    //   .then(authUser => {
    //     this.setState(() => ({ ...INITIAL_STATE, user: authUser }));
    //   })
    //   .catch(error => {
    //     this.setState(byPropKey("error", error));
    //   });
  };

  changeEmail = e => {
    let newEmail = e.target.value;

    this.setState(prevState => ({
      email: newEmail
    }));
  };

  changePassword = e => {
    let newPwd = e.target.value;

    this.setState(prevState => ({
      password: newPwd
    }));
  };

  clearInput = e => {
    this.props.clearAll();

    this.setState(prevState => ({
      email: "",
      password: "",
      showPassword: false
    }));

    this.emailInput.current.focus();
  };

  handleClickShowPassword = () => {
    this.setState(prevState => ({
      isShowPassword: !prevState.isShowPassword
    }));
  };

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.container}>
        <CssBaseline />
        <Paper className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlined />
          </Avatar>

          <Typography variant="button">Please login to continue</Typography>

          <form className={classes.form}>
            <FormControl margin="normal" required fullWidth>
              <TextField
                id="email"
                label="Email"
                variant="outlined"
                name="email"
                type="email"
                autoComplete="email"
                autoFocus
                required
                value={this.state.email}
                onChange={this.changeEmail}
                className={this.state.classes.email}
                inputRef={this.emailInput}
              />
            </FormControl>

            <FormControl margin="normal" required fullWidth>
              <TextField
                id="password"
                label="Password"
                variant="outlined"
                name="password"
                required
                type={this.state.isShowPassword ? "text" : "password"}
                value={this.state.password}
                onChange={this.changePassword}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="Toggle password visibility"
                        onClick={this.handleClickShowPassword}
                      >
                        {this.state.isShowPassword ? (
                          <Visibility />
                        ) : (
                          <VisibilityOff />
                        )}
                      </IconButton>
                    </InputAdornment>
                  )
                }}
              />
            </FormControl>

            <Button
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
              onClick={this.handleSubmit}
            >
              Sign in
              <PlayArrow className={classes.rightIcon} />
            </Button>

            <Button
              fullWidth
              variant="contained"
              className={classes.reset}
              onClick={this.clearInput}
            >
              Clear all
              <Delete className={classNames(classes.rightIcon)} />
            </Button>
          </form>
        </Paper>
      </div>
    );
  }
}

const mapStateToProps = state => {
  const { email, password, isShowPassword } = state.uiLoginForm;

  return {
    email: email,
    password: password,
    isShowPassword: isShowPassword
  };
};

export default withStyles(styles)(
  connect(
    mapStateToProps,
    { beginLogin, clearAll }
  )(Login)
);
