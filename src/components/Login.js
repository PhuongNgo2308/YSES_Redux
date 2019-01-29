import React, { Component } from "react";
import { connect } from "react-redux";
import { doLogin } from "../actions/login";
import classNames from "classnames";

import {
  IconButton,
  InputAdornment,
  TextField,
  Typography,
  Button,
  Icon,
  Grid,
  Paper
} from "@material-ui/core";
import { Visibility, VisibilityOff } from "@material-ui/icons";
import DeleteIcon from "@material-ui/icons/Delete";
import PlayArrowIcon from "@material-ui/icons/PlayArrow";
import { unstable_Box as Box } from "@material-ui/core/Box";

import {
  withStyles,
  MuiThemeProvider,
  createMuiTheme
} from "@material-ui/core/styles";

const styles = theme => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    flexGrow: 1
  },
  margin: {
    margin: theme.spacing.unit
  },
  textField: {
    flexBasis: 200
  },
  button: {
    margin: theme.spacing.unit * 2
  },
  leftIcon: {
    marginRight: theme.spacing.unit
  },
  iconSmall: {
    fontSize: 20
  }
});

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#689f38"
    },
    secondary: {
      main: "#43a047"
    },
    typography: { useNextVariants: true }
  }
});
// const myPrime = green.A200;

class Login extends Component {
  state = {
    email: this.props.email || "",
    password: this.props.password || "",
    showPassword: false,
    classes: styles
  };

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

  handleClickShowPassword = e => {
    this.setState({
      ...this.state,
      showPassword: !this.state.showPassword
    });
  };

  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <div className={this.state.classes.root}>
          <Grid container spacing={24}>
            <Grid item xs={12}>
              <Typography variant="caption" gutterBottom>
                Please login to continue
              </Typography>
            </Grid>

            <Grid item xs={12}>
              <TextField
                id="email"
                label="Email"
                className={this.state.classes.email}
                type="email"
                name="email"
                autoComplete="email"
                margin="normal"
                variant="outlined"
                autoFocus
                value={this.state.email}
                onChange={this.changeEmail}
                required
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                id="password"
                className={this.state.classes.password}
                variant="outlined"
                type={this.state.showPassword ? "text" : "password"}
                label="Password"
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
                required
              />
            </Grid>

            <Grid item xs={12}>
              <Box display="inline" mr={2}>
                <Button
                  variant="contained"
                  size="small"
                  className={this.state.classes.button}
                  color="primary"
                  onClick={this.handleSubmit}
                >
                  Login
                  <PlayArrowIcon className={this.state.classes.rightIcon} />
                </Button>
              </Box>

              <Box display="inline">
                <Button
                  variant="contained"
                  size="small"
                  className={this.state.classes.button}
                >
                  Clear all
                  <DeleteIcon
                    className={classNames(
                      this.state.classes.rightIcon,
                      this.state.classes.iconSmall
                    )}
                  />
                </Button>
              </Box>
            </Grid>
          </Grid>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default withStyles(styles)(
  connect(
    null,
    { doLogin }
  )(Login)
);
