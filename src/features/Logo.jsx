import { Link } from 'react-router-dom';
import ScrollToTop from '../ui/ScrollToTop';

function Logo() {
	return (
		<div className='logo'>
			<ScrollToTop />
			<Link to='/'>kodik</Link>
		</div>
	);
}

export default Logo;
