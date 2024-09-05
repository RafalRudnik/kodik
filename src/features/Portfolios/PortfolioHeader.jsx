import PortfolioHeaderBottom from './PortfolioHeaderBottom';
import PortfolioHeaderTop from './PortfolioHeaderTop';
import PortfolioSmStiky from './PortfolioSmStiky';

function PortfolioHeader() {
	return (
		<div className='portfolio'>
			<PortfolioSmStiky />
			<PortfolioHeaderTop />
			<PortfolioHeaderBottom />
		</div>
	);
}

export default PortfolioHeader;
