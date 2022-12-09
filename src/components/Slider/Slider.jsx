import './Slider.css'


const Box = ({ title, poster }) => {
    return (
        <div className='movie_box' style={{ backgroundImage: `url(${poster})`}}>
            <p>{title}</p>
        </div>
    );
}

const Slider = ({ title, movieList}) => {
    return (
        <div className='slider_container'>
            <h4>{title}</h4>
            <div className='slide'>
                {
                    movieList.map((movie, i) => {
                        return <Box title={movie.Title} poster={movie.Poster} />
                    })
                }
            </div>
        </div>
    );
}

export default Slider;