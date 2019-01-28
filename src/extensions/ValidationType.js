import React from "react";
import Validator from "validator";

const REQUIRED = value => {
  if (!value || !value.toString().trim().length) {
    return errorMarkup("This field is required.");
  }
};

const EMAIL = value => {
  if (!value) {
    return;
  }
  if (!Validator.isEmail(value)) {
    return errorMarkup(`${value} is not a valid email.`);
  }
};

const LT = (value, props) => {
  if (!value) {
    return;
  }
  // get the maxLength from component's props
  if (!value.toString().trim().length > props.maxLength) {
    // Return jsx
    return errorMarkup(`The value exceeded ${props.maxLength} symbols.`);
  }
};

const GT = (value, props) => {
  if (!value) {
    return;
  }
  // get the maxLength from component's props
  if (value.toString().trim().length < props.minLength) {
    // Return jsx
    return errorMarkup(`Minimum length is ${props.minLength} characters.`);
  }
};

const MAPPED = (value, props) => {
  if (!value) {
    return;
  }
  if (value.toString().trim() !== props.refvalue) {
    return errorMarkup(
      `The input value does not match with ${props.reffieldname}.`
    );
  }
};

const errorMarkup = value => {
  return <span className="validation-error-msg">{value}</span>;
};

export default { REQUIRED, EMAIL, LT, GT, MAPPED };
