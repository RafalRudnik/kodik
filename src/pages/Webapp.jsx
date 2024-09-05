import WebFooter from '../features/Webapp/WebFooter';
import WebHeader from '../features/Webapp/WebHeader';
import WebScrollContainer from '../features/Webapp/WebScrollContainer';
import WebSubHeader from '../features/Webapp/WebSubHeader';
import Footer from '../features/Footer';
import FooterList from '../features/FooterList';
import { useEffect } from 'react';
import WebVersus from '../features/Webapp/WebVersus';

function Webapp() {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	return (
		<>
			<WebHeader />
			<WebSubHeader />
			<WebScrollContainer />
			<WebVersus />
			<WebFooter />
			<Footer>
				<FooterList />
			</Footer>
		</>
	);
}

export default Webapp;
