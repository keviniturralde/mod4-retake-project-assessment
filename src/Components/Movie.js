import React from 'react'

class Movie extends React.Component {

    localClickHandler = () => {
        console.log(this.props.movie)
        this.props.clickHandler(this.props.movie)
    }
    render() {
        return(
            <div>
        <h3>{this.props.movie.title}</h3>
        <h5>{this.props.movie.synopsis}</h5>
        <button onClick={this.localClickHandler}>Rent NOW!</button>
        <button onClick={this.localClickHandler}>Return Movie</button>

            </div>
        )

    }
}

export default Movie;