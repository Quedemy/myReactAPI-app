import React from 'react'
import axios from 'axios'
import SearchInput from './SearchInput'
import ImageList from './ImageList'
import Footer from './Footer'


class App extends React.Component {

    state = {images:[]}

    onSearchSubmit = async (entry) => {

     const results = await axios.get(`https://pixabay.com/api/?key=22043155-7c3bbc0d08e4e809e167f15c3&q=${entry}&image_type=photo`)

     this.setState({images:results.data.hits})
       }

    render(){
        return (
           <div className = "container">
                <SearchInput onSearchSubmit={this.onSearchSubmit} />
                <ImageList images = {this.state.images}/>
                <Footer />
           </div>
        )
    }
}

export default App