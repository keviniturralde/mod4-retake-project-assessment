import React from 'react'

class NewMovie extends React.Component {
    state= {
        title: "",
        synopsis: ""
    }
    changeHandeler = (e) => {
        this.setState({ [e.target.name]: e.target.value})
    }
    submitHandler = (e) => {
        e.preventDefault()
        this.props.submitHandler(this.state)
    }
    render() {
        return(
            <form className="new-movie-form" onSubmit={this.submitHandler}>
                <input placeholder='title' name="title" value={this.state.title} onChange={this.changeHandeler}/>
                <textarea placeholder='Synopsis'name="synopsis" row={20} value={this.state.Synopsis} onChange={this.changeHandeler} />
                <button >Submit movie</button>
            </form>
        )

    }
}

export default NewMovie
