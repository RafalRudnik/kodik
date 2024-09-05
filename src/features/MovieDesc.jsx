import { FiArrowUpRight } from 'react-icons/fi';
import { useProps } from '../context/AppContext';

function MovieDesc({ title, desc, titleGb, descGb, widthClass }) {
	const { language } = useProps();

	return (
		<div className={`movie-desc ${widthClass}`}>
			<h3>
				{language ? title : titleGb}
				<span>
					<FiArrowUpRight />
				</span>
			</h3>
			<p>{language ? desc : descGb}</p>
		</div>
	);
}

export default MovieDesc;
