import React from "react";
import Icon from "react-icons-kit";
import { helpCircle } from "react-icons-kit/feather/helpCircle";
import { home } from "react-icons-kit/feather/home";
import { logIn } from "react-icons-kit/feather/logIn";
import { info } from "react-icons-kit/feather/info";
import { plusSquare } from "react-icons-kit/feather/plusSquare";

const IconHelp = () => <Icon icon={helpCircle} />;
const IconHome = () => <Icon icon={home} />;
const IconLogin = () => <Icon icon={logIn} />;
const IconInfo = () => <Icon icon={info} />;
const IconPlus = () => <Icon icon={plusSquare} />;

export { IconHelp, IconHome, IconLogin, IconInfo, IconPlus };
