import modalController from '../controllers/modal-controller';

const Render = () => (
	<div>this is the settings modal</div>
);

export default () => modalController.show(<Render />);
