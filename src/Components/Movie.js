import React from 'react'

class Movie extends React.Component {

    // State = {
    //     clicked: false 
    // }

    localClickHandler = () => {
        console.log(this.props.movie)
        this.props.clickHandler(this.props.movie)
    }
    // synopsisClick = () => {
    //     this.setState ({ clicked: !this.state.clicked})
    // }
    // started on the button to make the synopsis render but ran out of time

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