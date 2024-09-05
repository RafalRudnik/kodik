import Footer from '../features/Footer';
import FooterList from '../features/FooterList';
import WorkExamples from '../features/work/WorkExamples';
import WorkHeader from '../features/work/WorkHeader';
import WorkParalax from '../features/work/WorkParalax';

function Work() {
	return (
		<>
			<WorkHeader />
			<div className='container'>
				<WorkExamples />
				<WorkParalax />
			</div>
			<Footer>
				<FooterList />
			</Footer>
		</>
	);
}

export default Work;
