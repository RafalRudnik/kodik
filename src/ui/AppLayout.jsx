import { Outlet } from 'react-router-dom';
import { useEffect } from 'react';
import { useProps } from '../context/AppContext';

import ScrollToTop from '../ui/ScrollToTop';
import Nav from '../features/Nav';
import Cursor from '../features/Cursor';

function AppLayout() {
	const { setMousePosition } = useProps();

	useEffect(
		function () {
			const mouseMove = (e) => {
				setMousePosition({
					x: e.clientX,
					y: e.clientY,
				});
			};
			window.addEventListener('mousemove', mouseMove);

			return () => {
				window.removeEventListener('mousemove', mouseMove);
			};
		},
		[setMousePosition]
	);

	return (
		<div className='container-fluid'>
			<Nav />
			<main className='container-fluid main'>
				<ScrollToTop />
				<Outlet />
			</main>
			<Cursor />
		</div>
	);
}

export default AppLayout;
