import controller from '../controllers/modal-controller';
import Close from '../icons/close';

export const render = ({isShowing, isClosing, close, content}) => {
	if (!isShowing()) {
		return null;
	}

	return (
		<div className={isClosing() ? 'modal__background -closing' : 'modal__background'}>
			<div className='modal__window'>
				<div className='modal__header'>
					<span className='modal__header-text'>Some text for the modal header</span>
					<button className='button modal__close-button' onClick={close}><Close /></button>
				</div>
				<div className='modal__content'>
					{content()}
				</div>
			</div>
		</div>
	);
};

export default () => render(controller);
