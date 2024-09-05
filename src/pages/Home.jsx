import Banner from '../features/Banner';
import BannerTextBottom from '../features/BannerTextBottom';
import BannerTextTop from '../features/BannerTextTop';
import Header from '../features/Header';
import HeaderBlueBox from '../features/HeaderBlueBox';
import WhyWe from '../features/WhyWe';
import Movie from '../features/Movie';
import Accordion from '../features/Accordion';
import HomeBlack from '../features/HomeBlack';
import Testemonial from '../features/Testemonial';
import Footer from '../features/Footer';
import FooterBg from '../features/FooterBg';
import FooterList from '../features/FooterList';
import Language from '../features/Language';

function Home() {
	return (
		<>
			<Header />
			<Language />
			<div className='container'>
				<HeaderBlueBox />
				<WhyWe />
				<Banner baseVelocity={-0.4}>
					<BannerTextTop />
				</Banner>
				<Banner baseVelocity={0.2}>
					<BannerTextBottom />
				</Banner>
				<Movie />
				<Accordion />
			</div>
			<HomeBlack />
			<div className='container'>
				<Testemonial />
			</div>
			<Footer>
				<FooterList />
				<FooterBg />
			</Footer>
		</>
	);
}

export default Home;
