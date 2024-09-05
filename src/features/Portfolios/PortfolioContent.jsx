import PortfolioContact from './PortfolioContact';
import PortfolioDesing from './PortfolioDesing';
import PortfolioGallery from './PortfolioGallery';

function PortfolioContent() {
	return (
		<div className='container portfolio-content'>
			<PortfolioDesing />
			<PortfolioGallery />
			<PortfolioContact />
		</div>
	);
}

export default PortfolioContent;
