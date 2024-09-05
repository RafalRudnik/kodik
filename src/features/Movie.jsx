import MovieContainer from './MovieContainer';
import MovieDesc from './MovieDesc';
import MoviePsychology from './MoviePsychology';
import MovieCorridor from './MovieCorridor';
import MovieChro from './MovieChro';
import MoviePort from './MoviePort';

import {
	psychoDesc,
	psychoDescGb,
	psychoTitle,
	psychoTitleGb,
	corriTitle,
	corriTitleGb,
	corriDesc,
	corriDescGb,
	blogTitle,
	blogTitleGb,
	blogDesc,
	blogDescGb,
	portTitle,
	portTitleGb,
	portDesc,
	portDescGb,
} from '../context/constans';

function Movie() {
	return (
		<>
			<MovieContainer widthClass='movie-grey' bgColor='rgb(220, 221, 231)'>
				<MoviePsychology />
			</MovieContainer>
			<MovieDesc
				widthClass='movie-grey'
				title={psychoTitle}
				titleGb={psychoTitleGb}
				desc={psychoDesc}
				descGb={psychoDescGb}
			/>
			<MovieContainer bgColor='#573ef0'>
				<MovieCorridor widthClass='movie-box--full' />
			</MovieContainer>
			<MovieDesc
				title={corriTitle}
				titleGb={corriTitleGb}
				desc={corriDesc}
				descGb={corriDescGb}
			/>
			<div className='movie-dual'>
				<div className='movie-dual--box'>
					<MovieContainer bgColor='#7814a647' widthClass='movie-black'>
						<MovieChro widthClass='movie-box-full' />
					</MovieContainer>
					<MovieDesc
						title={blogTitle}
						titleGb={blogTitleGb}
						desc={blogDesc}
						descGb={blogDescGb}
						widthClass='movie-black'
					/>
				</div>
				<div className='movie-dual--box'>
					<MovieContainer bgColor='#7fa61448' widthClass='movie-black'>
						<MoviePort widthClass='movie-box-full' />
					</MovieContainer>
					<MovieDesc
						title={portTitle}
						titleGb={portTitleGb}
						desc={portDesc}
						descGb={portDescGb}
						widthClass='movie-black'
					/>
				</div>
			</div>
		</>
	);
}

export default Movie;
