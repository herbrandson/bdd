import { clip } from '../utils/math';

export default function drag(e, callback) {
	document.addEventListener('mousemove', _onDrag);
	document.addEventListener('mouseup', _onDragEnd);

	const target = e.currentTarget;
	_update(e, target);
	e.preventDefault();

	function _onDrag(e) {
		_update(e, target);
		e.preventDefault();
	}

	function _onDragEnd(e) {
		document.removeEventListener('mousemove', _onDrag);
		document.removeEventListener('mouseup', _onDragEnd);

		_update(e, target);
		e.preventDefault();
	}

	function _update(e, target) {
		const percent = (e.pageX - target.offsetLeft) / target.offsetWidth;
		const result = clip(percent, 0, 1);
		callback(result);
	}
}
