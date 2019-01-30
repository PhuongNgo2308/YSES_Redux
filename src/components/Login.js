// THIRD PARTIES IMPORT
import React, { Component } from "react";
import ReactDOM from "react-dom";
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
import styles from "./Login.style";
import { doLogin } from "../actions/login";

class Login extends Component {
  state = {
    email: this.props.email || "",
    password: this.props.password || "",
    showPassword: false,
    classes: styles
  };
  emailInput = React.createRef();

  handleSubmit = e => {
    const text = e.target.value.trim();
    if (e.which === 13) {
      this.props.onSave(text);
      if (this.props.newTodo) {
        this.setState({ text: "" });
      }
    }
  };

  changeEmail = e => {
    this.setState({ ...this.state, email: e.target.value });
  };

  changePassword = e => {
    this.setState({ ...this.state, password: e.target.value });
  };

  clearInput = e => {
    this.setState({
      ...this.state,
      email: "",
      password: "",
      showPassword: false
    });

    this.emailInput.current.focus();
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

          <Typography component="h1" variant="h5">
            Please login to continue
          </Typography>

          <form className={classes.form}>
            <FormControl margin="normal" required fullWidth>
              <TextField
                id="email"
                label="Email"
                variant="outlined"
                type="email"
                name="email"
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
                required
                type={this.state.showPassword ? "text" : "password"}
                value={this.state.password}
                onChange={this.changePassword}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="Toggle password visibility"
                        onClick={this.handleClickShowPassword}
                      >
                        {this.state.showPassword ? (
                          <VisibilityOff />
                        ) : (
                          <Visibility />
                        )}
                      </IconButton>
                    </InputAdornment>
                  )
                }}
              />
            </FormControl>

            <Button
              type="submit"
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

export default withStyles(styles)(
  connect(
    null,
    { doLogin }
  )(Login)
);
