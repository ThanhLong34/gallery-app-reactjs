import { memo } from "react";
import PropTypes from "prop-types";
import classNames from "classnames/bind";
import styles from "./GalleryGrid.module.scss";

import ButtonIcon from "@/components/ButtonIcon";

const cx = classNames.bind(styles);

GalleryGrid.propTypes = {
	pictures: PropTypes.array,
	onViewPicture: PropTypes.func,
	onDeletePicture: PropTypes.func,
};

function GalleryGrid({ pictures, onViewPicture, onDeletePicture }) {
	return (
		<div className={cx("gallery-grid")}>
			{pictures &&
				pictures.map((p) => (
					<div className={cx("picture")} key={p.id}>
						<img className={cx("picture-img")} src={p.url} alt="gallery item" />

						<div className={cx("controllers")}>
							<ButtonIcon
								className={cx("controller", "view")}
								icon="fa-solid fa-eye"
								onClick={() => onViewPicture(p.url)}
							/>
							<ButtonIcon
								className={cx("controller", "trash")}
								icon="fa-solid fa-trash-can"
								onClick={() => onDeletePicture(p.id)}
							/>
						</div>
					</div>
				))}
		</div>
	);
}

export default memo(GalleryGrid);
