import { memo } from "react";
import PropTypes from "prop-types";
import classNames from "classnames/bind";
import styles from "./Button.module.scss";

const cx = classNames.bind(styles);

Button.propTypes = {
	className: PropTypes.string,
	prefixIcon: PropTypes.string,
	suffixIcon: PropTypes.string,
	onClick: PropTypes.func,
};

function Button({ className, prefixIcon, suffixIcon, children, onClick }) {
	return (
		<button className={cx("button", className)} onClick={onClick}>
			{prefixIcon && <i className={cx(prefixIcon, "prefix-icon")} />}
			{children}
			{suffixIcon && <i className={cx(suffixIcon, "suffix-icon")} />}
		</button>
	);
}

export default memo(Button);
