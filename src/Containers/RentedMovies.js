import React from 'react'
import Movie from '../Components/Movie'

class RentedMovies extends React.Component {

     renderMovies= () => {
        return this.props.movies.map(movieObj => <Movie clickHandler={this.props.clickHandler} key={movieObj.id} movie={movieObj}/>)
        }
        render() {
    
            return(
                <div>
                    <h1>Movies I Am Renting</h1>
                    {this.renderMovies()}
                </div>
            )
        }
    }



export default RentedMovies;