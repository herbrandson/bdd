import Header from './header';
import Menu from './menu';
import Content from './content';
import Footer from './footer';

export default () => (
	<div className='shell'>
		<Header />
		<div className='shell__main'>
			<Menu />
			<Content />
		</div>
		<Footer />
	</div>
);
