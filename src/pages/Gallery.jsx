import { useEffect } from 'react';
import CorridorHeader from '../features/Corridor/CorridorHeader';
import Footer from '../features/Footer';
import FooterList from '../features/FooterList';
import CorridorMin from '../features/Corridor/CorridorMin';
import CorridorFlex from '../features/Corridor/CorridorFlex';
import CorridorMenu from '../features/Corridor/CorridorMenu';
import CorridorDarkLight from '../features/Corridor/CorridorDarkLight';
import CorridorGall from '../features/Corridor/CorridorGall';
import CorridorCont from '../features/Corridor/CorridorCont';

function Gallery() {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	return (
		<>
			<CorridorHeader />
			<div className='container'>
				<CorridorMin />
				<CorridorFlex>
					<CorridorMenu />
				</CorridorFlex>
				<CorridorFlex>
					<CorridorDarkLight />
				</CorridorFlex>
				<CorridorFlex>
					<CorridorGall />
				</CorridorFlex>
				<CorridorFlex>
					<CorridorCont />
				</CorridorFlex>
			</div>
			<Footer>
				<FooterList />
			</Footer>
		</>
	);
}

export default Gallery;
