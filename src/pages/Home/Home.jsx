import { useContext } from 'react';
import Slider from '../../components/Slider/Slider';
import { movieContext } from '../../movieContext';
import './Home.css'

const Home = () => {
    const { movieListOne, movieListTwo } = useContext(movieContext)

    return (
        <div className="home">
            <div className='hero_image'>
                <div className='hero_image_container'>
                    <h1>Watch something incredible.</h1>
                </div>
            </div>
            <div className='home_body'>
                    {/* searchbar */}
                    <div className='searchbar'>
                        <div className='searchbar_container'>
                            <p>Search</p>
                            <input 
                            className='search_input'/>
                        </div>
                    </div>

                    {/* categoriies */}
                    <div className='movie_categories'>
                        <div className='movie_categories_container'>
                            <Slider title='Action' movieList={movieListOne} />
                            <Slider title='Comedy' movieList={movieListTwo} />
                        </div>
                    </div>

            </div>
        </div>
    );
}

export default Home;