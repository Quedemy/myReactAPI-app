import React from 'react' 
import './search.css'


const ImageList = (props) => {
   
const output =   props.images.map((image) => {
    return <div className="image"><img 
    id = {image.id} src={image.webformatURL} alt="i love photos" /></div>
})


    return(
        <div className = "setUp">
       {output}
        </div>
    )
}

export default ImageList