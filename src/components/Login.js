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

class Login extends Component {
  state = {
    input: {
      email: this.props.email || "",
      password: this.props.password || ""
    },

    showPassword: this.props.showPassword,
    classes: styles
  };
  emailInput = React.createRef();

  handleSubmit = e => {
    this.props.beginLogin(this.state.input.email, this.state.input.password);
  };

  changeEmail = e => {
    this.setState({
      ...this.state,
      input: { ...this.state.input, email: e.target.value }
    });
  };

  changePassword = e => {
    this.setState({
      ...this.state,
      input: { ...this.state.input, password: e.target.value }
    });
  };

  clearInput = e => {
    this.props.clearAll();

    this.setState({
      ...this.state,
      input: {
        email: "",
        password: ""
      },
      showPassword: false
    });
  };

  handleClickShowPassword = e => {
    this.setState({
      ...this.state,
      showPassword: !this.state.showPassword
    });
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
                value={this.state.input.email}
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
                type={this.state.showPassword ? "text" : "password"}
                value={this.state.input.password}
                onChange={this.changePassword}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="Toggle password visibility"
                        onClick={this.handleClickShowPassword}
                      >
                        {this.state.showPassword ? (
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
  const { email, password, showPassword } = state.uiLoginForm;

  return {
    email: email,
    password: password,
    showPassword: showPassword
  };
};

export default withStyles(styles)(
  connect(
    mapStateToProps,
    { beginLogin, clearAll }
  )(Login)
);
