import { useCallback, useState, useEffect, memo } from "react";
import PropTypes from "prop-types";
import classNames from "classnames/bind";
import styles from "./ViewPictureDialog.module.scss";

const cx = classNames.bind(styles);

ViewPictureDialog.propTypes = {
	url: PropTypes.string,
	onClose: PropTypes.func,
};

function ViewPictureDialog({ url, onClose }) {
	const [isShow, setIsShow] = useState(false);

	useEffect(() => {
		url && setIsShow(true);
	}, [url]);

	const handleClose = useCallback(() => {
		setIsShow(false);
		if (typeof onClose === "function") {
			onClose();
		}
	}, []);

	return (
		<>
			{isShow && (
				<div className={cx("view-picture-dialog")}>
					<div className={cx("dialog")}>
						<button className={cx("close-btn")} onClick={handleClose}>
							&times;
						</button>
						<div className={cx("picture")}>
							<img src={url} alt="view picture" />
						</div>
					</div>
				</div>
			)}
		</>
	);
}

export default memo(ViewPictureDialog);
