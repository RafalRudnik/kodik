function MovieContainer({ widthClass, children, bgColor }) {
	return (
		<div className={`movie ${widthClass}`} style={{ backgroundColor: bgColor }}>
			{children}
		</div>
	);
}

export default MovieContainer;
