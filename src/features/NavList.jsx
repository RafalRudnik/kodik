import { NavLink } from 'react-router-dom';
import { useProps } from '../context/AppContext';
import { FiArrowUpRight } from 'react-icons/fi';
import ScrollToTop from '../ui/ScrollToTop';

function NavList() {
	const { language } = useProps();

	return (
		<ul className='nav-list'>
			<NavLink to='/work'>
				{language ? 'Prace' : 'Work'}
				<ScrollToTop />
			</NavLink>
			<NavLink to='/contact'>
				{language ? 'Odezwij się' : 'Write us'} <FiArrowUpRight />{' '}
				<ScrollToTop />
			</NavLink>
		</ul>
	);
}

export default NavList;
