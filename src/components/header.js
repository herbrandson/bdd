import Button from '../controls/button';
import Logo from '../icons/logo';
import SaveIcon from '../icons/save';
import SettingsIcon from '../icons/settings';

export default () => (
	<div className='header'>
		<div className='header__inner'>
			<span className='header__logo'>
				<Logo />
			</span>
			<Button><SettingsIcon /></Button>
			<Button><SaveIcon /></Button>
		</div>
	</div>
);
