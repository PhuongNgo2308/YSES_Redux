import React from "react";
import { Link } from "react-router-dom";

import AnimLayout from "../../../../views/App/AnimLayout";

export default class NotFoundView extends React.Component {
  render() {
    return (
      <AnimLayout>
        <div className="notfound-div">The requested page is not found.</div>
        <Link to="/">Back</Link>
      </AnimLayout>
    );
  }
}
