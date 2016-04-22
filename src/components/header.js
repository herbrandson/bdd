import Logo from '../icons/logo';
import SaveIcon from '../icons/save';
import SettingsIcon from '../icons/settings';
import settingsModal from './settings-modal';

export default () => (
	<div className='header'>
		<div className='header__inner'>
			<span className='header__logo'>
				<Logo />
			</span>
			<button className='button' onClick={settingsModal}><SettingsIcon /></button>
			<button className='button'><SaveIcon /></button>
		</div>
	</div>
);
