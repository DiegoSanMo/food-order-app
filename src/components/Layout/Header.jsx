import { Fragment } from "react";
import mealsImage from "../../assets/meals.jpeg";
import HeaderCartButton from './HeaderCartButton';
import classes from "./Header.module.css";

const Header = (props) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>React meals</h1>
        <HeaderCartButton/>
      </header>
      <div className={classes["main-image"]}>
        <img src={mealsImage} alt="" />
      </div>
    </Fragment>
  );
};
export default Header;
