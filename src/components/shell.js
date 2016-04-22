import Content from './content';
import Footer from './footer';
import Header from './header';
import Menu from './menu';
import Modal from './modal';

export default () => (
	<div className='shell'>
		<Header />
		<div className='shell__main'>
			<Menu />
			<Content />
		</div>
		<Footer />
		<Modal />
	</div>
);
