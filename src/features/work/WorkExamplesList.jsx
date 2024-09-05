import { useProps } from '../../context/AppContext';
import { workList } from '../../context/constans';

function WorkExamplesList() {
	return (
		<div className='work-examples--list'>
			<ul>
				{workList.map((item, i) => (
					<WorkExamplesLitsItem item={item} key={i} />
				))}
			</ul>
		</div>
	);
}

export default WorkExamplesList;

function WorkExamplesLitsItem({ item }) {
	const { language, dispatch } = useProps();

	function handleImage() {
		dispatch({ type: 'imgSrc', payload: item.src });
	}

	return (
		<li onMouseEnter={handleImage}>
			<h3>{language ? item.name : item.nameGb}</h3>
		</li>
	);
}
