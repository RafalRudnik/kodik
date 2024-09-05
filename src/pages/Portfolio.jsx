import PortfolioContent from '../features/Portfolios/PortfolioContent';
import PortfolioHeader from '../features/Portfolios/PortfolioHeader';
import Footer from '../features/Footer';
import FooterList from '../features/FooterList';

function Portfolio() {
	return (
		<>
			<PortfolioHeader />
			<PortfolioContent />
			<Footer>
				<FooterList />
			</Footer>
		</>
	);
}

export default Portfolio;
