import PropTypes from "prop-types";
import classNames from "classnames/bind";
import { Link } from "react-router-dom";
import styles from "./Header.module.scss";
import config from "../../../config";

const cx = classNames.bind(styles);
const TabletSl = ({ name, linkUrl, icon }) => {
  return (
    <div className={cx("menu-category")}>
      <Link to={`/${linkUrl}`} className={cx("menu-category-link")}>
        <span>{name}</span>
        {icon && <div className={cx("menu-category-icon")}>{icon}</div>}
      </Link>
      {icon && (
        <div className={cx("menu-category-link-absolute")}>
          <Link className={cx("menu-category-link-absolute-a")} to={`/tablet/${config.routes.tablet}`}>IPad</Link>
          <Link className={cx("menu-category-link-absolute-a")} to={`/tablet/${config.routes.tablet}`}>Samsung</Link>
          <Link className={cx("menu-category-link-absolute-a")} to={`/tablet/${config.routes.tablet}`}>Lenovo</Link>
        </div>
      )}
    </div>
  );
};

TabletSl.propTypes = {
  name: PropTypes.string,
  linkUrl: PropTypes.string,
};

export default TabletSl;