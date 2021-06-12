import React from 'react' 
import './search.css'

class SearchInput extends React.Component{

    state = {entry: ''}
    onInputChange = (e) => {
        this.setState({ entry: e.target.value})
        e.preventDefault()
    }

    onFormSubmit = (e) => {
    this.props.onSearchSubmit(this.state.entry)
        e.preventDefault()
    }

    render(){
        return (
            <div className = "container-search">
            <h2>SEARCH YOUR FAVOURITE IMAGES HERE</h2>
                <form onSubmit = {this.onFormSubmit} className = "form">
                    <div className = "input-div">
                        <input type="text" 
                        placeholder="Search your dream image"
                        onChange = {this.onInputChange}
                        value = {this.state.entry}/>
                        <i className="fa fa-search search-symbol" aria-hidden="false"></i>
                        
                    </div>
                </form>
            </div>
        )
    }
}

export default SearchInput