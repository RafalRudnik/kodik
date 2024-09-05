import { useEffect } from 'react';
import BlogHeader from '../features/blog/BlogHeader';
import BlogSubHead from '../features/blog/BlogSubHead';
import BlogMain from '../features/blog/BlogMain';
import BlogFoot from '../features/blog/BlogFoot';
import Footer from '../features/Footer';
import FooterList from '../features/FooterList';

function Blog() {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	return (
		<>
			<BlogHeader />
			<BlogSubHead />
			<BlogMain />
			<BlogFoot />
			<Footer>
				<FooterList />
			</Footer>
		</>
	);
}

export default Blog;
