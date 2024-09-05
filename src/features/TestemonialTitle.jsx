import { testTitleGb, testTitlePl } from '../context/constans';
import { useProps } from '../context/AppContext';

function TestemonialTitle() {
	const { language } = useProps();

	return (
		<div className='testemonial-title'>
			<h2>{language ? testTitlePl : testTitleGb}</h2>
		</div>
	);
}

export default TestemonialTitle;
