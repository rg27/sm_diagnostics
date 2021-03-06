export const Header = (props) => {
	return (
		<header id='header'>
			<div className='intro'>
				<div className='overlay'>
					<div className='container'>
						<div className='row'>
							<div className='col-md-8 col-md-offset-2 intro-text'>
								<h1>{props.data ? props.data.title : 'Loading'}</h1>
								<p>{props.data ? props.data.paragraph : 'Loading'}</p>
								<a href='#' className='btn btn-custom btn-lg page-scroll'>*NEW* Coronavirus RT-PCR Testing</a>{' '}
								<a href='#'className='btn btn-custom btn-lg page-scroll'>Login/View Results</a>{' '}
							</div>
						</div>
					</div>
				</div>
			</div>
		</header>
	)
}
