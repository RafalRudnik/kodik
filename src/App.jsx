import { useEffect } from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Lenis from '@studio-freight/lenis';

import AppLayout from './ui/AppLayout';
import Error from './pages/Error';
import Home from './pages/Home';
import Ppolicy from './pages/Ppolicy';
import Ppolicypl from './pages/Ppolicypl';
import Work from './pages/Work';
import Contact from './pages/Contact';
import Portfolio from './pages/Portfolio';
import Gallery from './pages/Gallery';
import Webapp from './pages/Webapp';
import Blog from './pages/Blog';

const router = createBrowserRouter([
	{
		element: <AppLayout />,
		errorElement: <Error />,
		children: [
			{
				path: '/',
				element: <Home />,
			},
			{
				path: '/policy',
				element: <Ppolicy />,
			},
			{
				path: '/policypl',
				element: <Ppolicypl />,
			},
			{
				path: '/work',
				element: <Work />,
			},
			{
				path: '/work/portfolios',
				element: <Portfolio />,
			},
			{
				path: '/work/gallery',
				element: <Gallery />,
			},
			{
				path: '/work/webapp',
				element: <Webapp />,
			},
			{
				path: '/blog',
				element: <Blog />,
			},
			{
				path: '/contact',
				element: <Contact />,
			},
		],
	},
]);

function App() {
	useEffect(function () {
		const lenis = new Lenis();

		lenis.on('scroll', (e) => {
			console.log(e);
		});

		function raf(time) {
			lenis.raf(time);
			requestAnimationFrame(raf);
		}
		requestAnimationFrame(raf);
	}, []);

	return (
		<div className='app container-fluid'>
			<RouterProvider router={router} />
		</div>
	);
}

export default App;
