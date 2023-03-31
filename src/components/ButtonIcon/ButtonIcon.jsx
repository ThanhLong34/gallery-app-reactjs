import PropTypes from "prop-types";
import classNames from "classnames/bind";
import styles from "./ButtonIcon.module.scss";

const cx = classNames.bind(styles);

ButtonIcon.propTypes = {
	className: PropTypes.string,
	icon: PropTypes.string.isRequired,
	onClick: PropTypes.func,
};

ButtonIcon.defaultProps = {};

function ButtonIcon({ className, icon, onClick }) {
	return (
		<button className={cx("button-icon", className)} onClick={onClick}>
			<i className={icon} />
		</button>
	);
}

export default ButtonIcon;
