import React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles(theme => ({
  icon: {
    cursor: "pointer",

    "&:hover path": {
      fill: theme.palette.primary.main,
    },
  }
}));

const Edit = (props) => {
  const classes = useStyles();
  return (
    <SvgIcon className={classes.icon} width="26" height="25" viewBox="0 0 26 25" {...props}>
      <path d="M20.5806 12.5C20.0875 12.5 19.6878 12.8998 19.6878 13.3929V22.3214C19.6878 22.8146 19.288 23.2143 18.7949 23.2143H2.7235C2.23037 23.2143 1.83062 22.8146 1.83062 22.3214V4.46429C1.83062 3.97116 2.23037 3.57141 2.7235 3.57141H13.4378C13.9309 3.57141 14.3307 3.17166 14.3307 2.67854C14.3307 2.18541 13.9309 1.78571 13.4378 1.78571H2.7235C1.24416 1.78571 0.0449219 2.98495 0.0449219 4.46429V22.3214C0.0449219 23.8008 1.24416 25 2.7235 25H18.7949C20.2743 25 21.4735 23.8008 21.4735 22.3214V13.3928C21.4735 12.8998 21.0738 12.5 20.5806 12.5Z" fill="black" fill-opacity="0.3"/>
      <path d="M24.0444 1.00124C23.4033 0.360052 22.5338 -9.05059e-05 21.6271 1.41259e-05C20.7199 -0.00260167 19.8495 0.358169 19.2102 1.00181L7.4494 12.7616C7.35183 12.8599 7.27822 12.9794 7.23422 13.1107L5.44853 18.4678C5.29268 18.9357 5.54562 19.4413 6.01348 19.5971C6.10425 19.6273 6.19931 19.6427 6.29494 19.6429C6.39079 19.6427 6.48605 19.6273 6.57708 19.5973L11.9342 17.8116C12.0658 17.7677 12.1853 17.6937 12.2833 17.5956L24.0441 5.83486C25.3789 4.50017 25.379 2.33608 24.0444 1.00124ZM22.7816 4.57321L11.1744 16.1804L7.70653 17.3384L8.86099 13.875L20.4726 2.26786C21.111 1.63075 22.145 1.6318 22.7821 2.27016C23.0864 2.57511 23.2579 2.98793 23.2592 3.41875C23.2603 3.85188 23.0883 4.26747 22.7816 4.57321Z" fill="black" fill-opacity="0.3"/>
    </SvgIcon>
  );
};

export default Edit;